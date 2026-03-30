#!/usr/bin/env node
/**
 * SERP Analysis Script for gold-tw.com
 *
 * Fetches top search results for target keywords, analyzes competitor pages,
 * and produces a gap report highlighting what gold-tw.com may be missing.
 *
 * Usage:
 *   node scripts/serp-analysis.js
 *   node scripts/serp-analysis.js --keywords "台北黃金回收,金價今日"
 *   node scripts/serp-analysis.js --limit 5
 *
 * Env vars (one required):
 *   BRAVE_API_KEY   - Brave Search API subscription token
 *   SERPAPI_KEY     - SerpAPI key
 */

const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

// ---------------------------------------------------------------------------
// Config
// ---------------------------------------------------------------------------

const SITE_DOMAIN = 'gold-tw.com';
const SEO_DATA_DIR = path.join(__dirname, '..', 'seo-data');
const KEYWORDS_PATH = path.join(SEO_DATA_DIR, 'target-keywords.json');
const SNAPSHOTS_DIR = path.join(SEO_DATA_DIR, 'serp-snapshots');
const TOP_N = 5;               // analyse top N results per keyword
const FETCH_TIMEOUT = 10000;   // 10 s page-fetch timeout
const RATE_LIMIT_MS = 2000;    // 2 s between HTTP requests

// ---------------------------------------------------------------------------
// Utility helpers
// ---------------------------------------------------------------------------

/** Promise-based sleep. */
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/** Return ISO week-based file stem: YYYY-WW */
function isoWeekStamp() {
  const now = new Date();
  // ISO week algorithm
  const tmp = new Date(Date.UTC(now.getFullYear(), now.getMonth(), now.getDate()));
  tmp.setUTCDate(tmp.getUTCDate() + 4 - (tmp.getUTCDay() || 7));
  const yearStart = new Date(Date.UTC(tmp.getUTCFullYear(), 0, 1));
  const weekNo = Math.ceil(((tmp - yearStart) / 86400000 + 1) / 7);
  return `${tmp.getUTCFullYear()}-${String(weekNo).padStart(2, '0')}`;
}

/** Minimal CLI arg parser.  Returns { keywords?: string[], limit?: number }. */
function parseCLI() {
  const args = process.argv.slice(2);
  const result = {};
  for (let i = 0; i < args.length; i++) {
    if (args[i] === '--keywords' && args[i + 1]) {
      result.keywords = args[i + 1].split(',').map((k) => k.trim()).filter(Boolean);
      i++;
    } else if (args[i] === '--limit' && args[i + 1]) {
      result.limit = parseInt(args[i + 1], 10);
      i++;
    }
  }
  return result;
}

// ---------------------------------------------------------------------------
// HTTP helpers (built-in only, no dependencies)
// ---------------------------------------------------------------------------

/**
 * Perform an HTTPS (or HTTP) GET and return { statusCode, headers, body }.
 * Follows up to 3 redirects.  Applies a timeout.
 */
function httpGet(targetUrl, headers = {}, timeout = FETCH_TIMEOUT, redirects = 3) {
  return new Promise((resolve, reject) => {
    const parsed = new URL(targetUrl);
    const lib = parsed.protocol === 'https:' ? https : http;

    const opts = {
      hostname: parsed.hostname,
      port: parsed.port,
      path: parsed.pathname + parsed.search,
      method: 'GET',
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; GoldTW-SERP-Analyzer/1.0)',
        ...headers,
      },
      timeout,
    };

    const req = lib.request(opts, (res) => {
      // Follow redirects
      if ([301, 302, 303, 307, 308].includes(res.statusCode) && res.headers.location && redirects > 0) {
        const next = new URL(res.headers.location, targetUrl).href;
        res.resume(); // drain
        resolve(httpGet(next, headers, timeout, redirects - 1));
        return;
      }

      const chunks = [];
      res.on('data', (chunk) => chunks.push(chunk));
      res.on('end', () => {
        resolve({
          statusCode: res.statusCode,
          headers: res.headers,
          body: Buffer.concat(chunks).toString('utf-8'),
        });
      });
    });

    req.on('timeout', () => { req.destroy(); reject(new Error('Request timed out')); });
    req.on('error', reject);
    req.end();
  });
}

// ---------------------------------------------------------------------------
// Search API callers
// ---------------------------------------------------------------------------

/**
 * Brave Search API — returns array of { title, url, snippet }.
 */
async function searchBrave(keyword, apiKey) {
  const q = encodeURIComponent(keyword);
  const searchUrl = `https://api.search.brave.com/res/v1/web/search?q=${q}&count=10`;
  const res = await httpGet(searchUrl, { 'X-Subscription-Token': apiKey, Accept: 'application/json' });

  if (res.statusCode !== 200) {
    throw new Error(`Brave API returned ${res.statusCode}: ${res.body.slice(0, 300)}`);
  }

  const data = JSON.parse(res.body);
  const results = (data.web && data.web.results) || [];
  return results.slice(0, TOP_N).map((r) => ({
    title: r.title || '',
    url: r.url || '',
    snippet: r.description || '',
  }));
}

/**
 * SerpAPI — returns array of { title, url, snippet }.
 */
async function searchSerpApi(keyword, apiKey) {
  const q = encodeURIComponent(keyword);
  const searchUrl = `https://serpapi.com/search.json?q=${q}&num=10&api_key=${apiKey}`;
  const res = await httpGet(searchUrl, { Accept: 'application/json' });

  if (res.statusCode !== 200) {
    throw new Error(`SerpAPI returned ${res.statusCode}: ${res.body.slice(0, 300)}`);
  }

  const data = JSON.parse(res.body);
  const results = data.organic_results || [];
  return results.slice(0, TOP_N).map((r) => ({
    title: r.title || '',
    url: r.link || '',
    snippet: r.snippet || '',
  }));
}

// ---------------------------------------------------------------------------
// Page analysis
// ---------------------------------------------------------------------------

/**
 * Fetch a page and analyse its content.
 * Returns an analysis object or null on failure.
 */
async function analysePage(pageUrl) {
  try {
    const res = await httpGet(pageUrl);
    if (res.statusCode !== 200) {
      return { error: `HTTP ${res.statusCode}`, wordCount: 0, hasFaqSchema: false, tableCount: 0, schemaTypes: [], hasBreadcrumb: false };
    }
    const html = res.body;
    return analyseHtml(html);
  } catch (err) {
    return { error: err.message, wordCount: 0, hasFaqSchema: false, tableCount: 0, schemaTypes: [], hasBreadcrumb: false };
  }
}

/**
 * Analyse raw HTML string and return structured data.
 */
function analyseHtml(html) {
  // --- Word count (strip tags, count whitespace-delimited tokens) ---
  const textOnly = html
    .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '')
    .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&[a-z]+;/gi, ' ')
    .replace(/\s+/g, ' ')
    .trim();
  const wordCount = textOnly ? textOnly.split(/\s+/).length : 0;

  // --- Extract JSON-LD blocks ---
  const jsonLdBlocks = [];
  const jsonLdRegex = /<script[^>]*type\s*=\s*["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi;
  let m;
  while ((m = jsonLdRegex.exec(html)) !== null) {
    try {
      const parsed = JSON.parse(m[1]);
      jsonLdBlocks.push(parsed);
    } catch (_) {
      // malformed JSON-LD, skip
    }
  }

  // Flatten nested @graph arrays
  const allObjects = [];
  for (const block of jsonLdBlocks) {
    if (Array.isArray(block)) {
      allObjects.push(...block);
    } else if (block && typeof block === 'object') {
      if (Array.isArray(block['@graph'])) {
        allObjects.push(...block['@graph']);
      }
      allObjects.push(block);
    }
  }

  // Collect all @type values
  const schemaTypes = [];
  for (const obj of allObjects) {
    if (obj['@type']) {
      const types = Array.isArray(obj['@type']) ? obj['@type'] : [obj['@type']];
      for (const t of types) {
        if (!schemaTypes.includes(t)) schemaTypes.push(t);
      }
    }
  }

  const hasFaqSchema = schemaTypes.includes('FAQPage');
  const hasBreadcrumb = schemaTypes.includes('BreadcrumbList');

  // --- Table count ---
  const tableMatches = html.match(/<table[\s>]/gi);
  const tableCount = tableMatches ? tableMatches.length : 0;

  return { wordCount, hasFaqSchema, tableCount, schemaTypes, hasBreadcrumb, error: null };
}

// ---------------------------------------------------------------------------
// Gap analysis
// ---------------------------------------------------------------------------

/**
 * Given analysed SERP results for a keyword, produce gap observations.
 */
function computeGaps(keywordEntry, results) {
  const dominated = results.filter((r) => r.url.includes(SITE_DOMAIN));
  const competitors = results.filter((r) => !r.url.includes(SITE_DOMAIN));

  const gaps = [];

  // Position check
  if (dominated.length === 0) {
    gaps.push(`gold-tw.com is NOT in the top ${TOP_N} results for "${keywordEntry.keyword}".`);
  } else {
    const positions = dominated.map((r) => r.position);
    gaps.push(`gold-tw.com found at position(s): ${positions.join(', ')}.`);
  }

  // Competitor feature prevalence
  const competitorAnalyses = competitors.map((r) => r.analysis).filter(Boolean);
  if (competitorAnalyses.length === 0) return gaps;

  const avgWordCount = Math.round(
    competitorAnalyses.reduce((sum, a) => sum + (a.wordCount || 0), 0) / competitorAnalyses.length
  );
  const faqCount = competitorAnalyses.filter((a) => a.hasFaqSchema).length;
  const tableCount = competitorAnalyses.filter((a) => a.tableCount > 0).length;
  const breadcrumbCount = competitorAnalyses.filter((a) => a.hasBreadcrumb).length;

  gaps.push(`Avg competitor word count: ~${avgWordCount}.`);

  if (faqCount > 0) {
    gaps.push(`${faqCount}/${competitorAnalyses.length} competitors have FAQ schema. Consider adding FAQPage markup.`);
  }
  if (tableCount > 0) {
    gaps.push(`${tableCount}/${competitorAnalyses.length} competitors use tables. Consider adding comparison / price tables.`);
  }
  if (breadcrumbCount > 0) {
    gaps.push(`${breadcrumbCount}/${competitorAnalyses.length} competitors have BreadcrumbList schema.`);
  }

  // Collect all unique schema types across competitors
  const allSchemas = new Set();
  for (const a of competitorAnalyses) {
    for (const t of (a.schemaTypes || [])) allSchemas.add(t);
  }
  if (allSchemas.size > 0) {
    gaps.push(`Schema types used by competitors: ${[...allSchemas].join(', ')}.`);
  }

  // If we ARE in the top 5, compare our analysis against competitors
  if (dominated.length > 0) {
    const ours = dominated[0].analysis;
    if (ours && ours.wordCount < avgWordCount * 0.7) {
      gaps.push(`gold-tw.com word count (${ours.wordCount}) is significantly below competitor average (${avgWordCount}). Consider expanding content.`);
    }
    if (ours && !ours.hasFaqSchema && faqCount > 0) {
      gaps.push('gold-tw.com lacks FAQ schema that competitors have.');
    }
    if (ours && ours.tableCount === 0 && tableCount > 0) {
      gaps.push('gold-tw.com has no tables; competitors do.');
    }
    if (ours && !ours.hasBreadcrumb && breadcrumbCount > 0) {
      gaps.push('gold-tw.com lacks BreadcrumbList schema that competitors have.');
    }
  }

  return gaps;
}

// ---------------------------------------------------------------------------
// Report generation
// ---------------------------------------------------------------------------

/**
 * Build a Markdown gap report.
 */
function buildMarkdownReport(report) {
  const lines = [];
  lines.push(`# SERP Gap Analysis — ${new Date().toISOString().slice(0, 10)}`);
  lines.push('');
  lines.push(`Generated: ${new Date().toISOString()}`);
  lines.push('');

  for (const entry of report) {
    lines.push(`## ${entry.keyword} (${entry.priority}, ${entry.type})`);
    lines.push('');

    if (entry.goldTwPosition !== null) {
      lines.push(`**gold-tw.com position:** #${entry.goldTwPosition}`);
    } else {
      lines.push('**gold-tw.com position:** not in top 5');
    }
    lines.push('');

    // Top results table
    lines.push('| # | Title | Word Count | FAQ | Tables | Breadcrumb |');
    lines.push('|---|-------|-----------|-----|--------|------------|');
    for (const r of entry.results) {
      const a = r.analysis || {};
      lines.push(
        `| ${r.position} | [${truncate(r.title, 40)}](${r.url}) | ${a.wordCount || '?'} | ${a.hasFaqSchema ? 'Yes' : 'No'} | ${a.tableCount || 0} | ${a.hasBreadcrumb ? 'Yes' : 'No'} |`
      );
    }
    lines.push('');

    // Gaps
    if (entry.gaps && entry.gaps.length > 0) {
      lines.push('**Gap observations:**');
      for (const gap of entry.gaps) {
        lines.push(`- ${gap}`);
      }
    }
    lines.push('');
    lines.push('---');
    lines.push('');
  }

  return lines.join('\n');
}

function truncate(str, maxLen) {
  if (!str) return '';
  return str.length > maxLen ? str.slice(0, maxLen - 1) + '...' : str;
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

async function main() {
  console.log('=== SERP Analysis for gold-tw.com ===\n');

  // --- Determine search API ---
  const braveKey = process.env.BRAVE_API_KEY || '';
  const serpApiKey = process.env.SERPAPI_KEY || '';

  let searchFn;
  let apiName;

  if (braveKey) {
    searchFn = (kw) => searchBrave(kw, braveKey);
    apiName = 'Brave Search API';
  } else if (serpApiKey) {
    searchFn = (kw) => searchSerpApi(kw, serpApiKey);
    apiName = 'SerpAPI';
  } else {
    console.error(
      'ERROR: No search API key found.\n' +
      'Please set one of the following environment variables:\n' +
      '  BRAVE_API_KEY   — Brave Search API subscription token\n' +
      '  SERPAPI_KEY      — SerpAPI key\n\n' +
      'Example:\n' +
      '  BRAVE_API_KEY=your-key node scripts/serp-analysis.js'
    );
    process.exit(0);
  }

  console.log(`Using: ${apiName}\n`);

  // --- Load keywords ---
  if (!fs.existsSync(KEYWORDS_PATH)) {
    console.error(`ERROR: Keywords file not found at ${KEYWORDS_PATH}`);
    process.exit(1);
  }

  const allKeywords = JSON.parse(fs.readFileSync(KEYWORDS_PATH, 'utf-8'));
  const cli = parseCLI();

  let keywords;
  if (cli.keywords) {
    // Filter to only requested keywords, or create minimal entries for unknown ones
    keywords = cli.keywords.map((kw) => {
      const existing = allKeywords.find((e) => e.keyword === kw);
      return existing || { keyword: kw, priority: 'custom', type: 'unknown', notes: 'CLI override' };
    });
  } else {
    keywords = allKeywords;
  }

  if (cli.limit && cli.limit > 0) {
    keywords = keywords.slice(0, cli.limit);
  }

  console.log(`Processing ${keywords.length} keyword(s)...\n`);

  // --- Process each keyword ---
  const report = [];

  for (let ki = 0; ki < keywords.length; ki++) {
    const kwEntry = keywords[ki];
    const kw = kwEntry.keyword;
    console.log(`[${ki + 1}/${keywords.length}] Searching: "${kw}"`);

    let searchResults;
    try {
      searchResults = await searchFn(kw);
      await sleep(RATE_LIMIT_MS);
    } catch (err) {
      console.error(`  Search failed: ${err.message}`);
      report.push({
        keyword: kw,
        priority: kwEntry.priority,
        type: kwEntry.type,
        notes: kwEntry.notes,
        goldTwPosition: null,
        results: [],
        gaps: [`Search failed: ${err.message}`],
        error: err.message,
      });
      continue;
    }

    // Annotate with position and check for gold-tw.com
    let goldTwPosition = null;
    for (let i = 0; i < searchResults.length; i++) {
      searchResults[i].position = i + 1;
      if (searchResults[i].url.includes(SITE_DOMAIN)) {
        goldTwPosition = i + 1;
      }
    }

    // Fetch and analyse each result page
    for (const result of searchResults) {
      console.log(`  Analysing #${result.position}: ${truncate(result.url, 70)}`);
      result.analysis = await analysePage(result.url);
      await sleep(RATE_LIMIT_MS);

      if (result.analysis && result.analysis.error) {
        console.log(`    (page fetch issue: ${result.analysis.error})`);
      } else if (result.analysis) {
        console.log(`    words=${result.analysis.wordCount}, faq=${result.analysis.hasFaqSchema}, tables=${result.analysis.tableCount}`);
      }
    }

    // Compute gaps
    const gaps = computeGaps(kwEntry, searchResults);

    report.push({
      keyword: kw,
      priority: kwEntry.priority,
      type: kwEntry.type,
      notes: kwEntry.notes,
      goldTwPosition,
      results: searchResults,
      gaps,
    });

    console.log(`  gold-tw.com position: ${goldTwPosition !== null ? '#' + goldTwPosition : 'not found'}`);
    console.log('');
  }

  // --- Ensure output directory ---
  if (!fs.existsSync(SNAPSHOTS_DIR)) {
    fs.mkdirSync(SNAPSHOTS_DIR, { recursive: true });
  }

  // --- Save JSON snapshot ---
  const weekStamp = isoWeekStamp();
  const jsonPath = path.join(SNAPSHOTS_DIR, `${weekStamp}.json`);
  fs.writeFileSync(jsonPath, JSON.stringify(report, null, 2), 'utf-8');
  console.log(`JSON snapshot saved: ${jsonPath}`);

  // --- Save Markdown gap report ---
  const mdPath = path.join(SNAPSHOTS_DIR, 'latest-gaps.md');
  const markdown = buildMarkdownReport(report);
  fs.writeFileSync(mdPath, markdown, 'utf-8');
  console.log(`Gap report saved:    ${mdPath}`);

  // --- Summary ---
  console.log('\n=== Summary ===');
  const inTop5 = report.filter((r) => r.goldTwPosition !== null).length;
  console.log(`Keywords analysed: ${report.length}`);
  console.log(`gold-tw.com in top ${TOP_N}: ${inTop5}/${report.length}`);
  console.log('Done.');
}

// ---------------------------------------------------------------------------
// Run
// ---------------------------------------------------------------------------

main().catch((err) => {
  console.error('Fatal error:', err);
  process.exit(1);
});
