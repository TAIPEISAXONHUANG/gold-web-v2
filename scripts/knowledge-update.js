#!/usr/bin/env node
/**
 * SEO Knowledge Update Fetcher
 * Fetches recent updates from Google Search Central Blog and Schema.org,
 * saves a weekly digest to seo-knowledge/weekly/YYYY-WW.md,
 * and updates seo-knowledge/INDEX.md.
 *
 * Usage: node scripts/knowledge-update.js
 * Dependencies: none (built-in Node.js modules only)
 */

const https = require('https');
const fs = require('fs');
const path = require('path');

const PROJECT_ROOT = path.join(__dirname, '..');
const KNOWLEDGE_DIR = path.join(PROJECT_ROOT, 'seo-knowledge');
const WEEKLY_DIR = path.join(KNOWLEDGE_DIR, 'weekly');
const INDEX_PATH = path.join(KNOWLEDGE_DIR, 'INDEX.md');

// --- HTTP helper ---

/**
 * Fetch a URL and return the response body as a string.
 * Follows up to 5 redirects. Rejects on network/HTTP errors.
 */
function fetchUrl(url, maxRedirects = 5) {
  return new Promise((resolve, reject) => {
    const mod = url.startsWith('https') ? https : require('http');
    mod.get(url, (res) => {
      if ([301, 302, 303, 307, 308].includes(res.statusCode) && res.headers.location) {
        if (maxRedirects <= 0) return reject(new Error('Too many redirects'));
        return resolve(fetchUrl(res.headers.location, maxRedirects - 1));
      }
      if (res.statusCode < 200 || res.statusCode >= 300) {
        res.resume();
        return reject(new Error(`HTTP ${res.statusCode} from ${url}`));
      }
      const chunks = [];
      res.on('data', (chunk) => chunks.push(chunk));
      res.on('end', () => resolve(Buffer.concat(chunks).toString('utf-8')));
      res.on('error', reject);
    }).on('error', reject);
  });
}

// --- ISO week helper ---

/**
 * Return the ISO week number and year for a given date.
 * Returns { year, week } where week is zero-padded to 2 digits.
 */
function getISOWeek(date) {
  const d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
  // Set to nearest Thursday: current date + 4 - current day number (Monday = 1)
  const dayNum = d.getUTCDay() || 7;
  d.setUTCDate(d.getUTCDate() + 4 - dayNum);
  const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
  const weekNo = Math.ceil(((d - yearStart) / 86400000 + 1) / 7);
  return {
    year: d.getUTCFullYear(),
    week: String(weekNo).padStart(2, '0'),
  };
}

// --- Google Search Central Blog (Atom feed) ---

/**
 * Parse the Atom XML feed using regex and return the 3 most recent entries.
 * Each entry: { title, date, url, summary }
 */
function parseAtomEntries(xml) {
  const entries = [];
  const entryRegex = /<entry>([\s\S]*?)<\/entry>/g;
  let match;

  while ((match = entryRegex.exec(xml)) !== null && entries.length < 3) {
    const block = match[1];

    const titleMatch = block.match(/<title[^>]*>([\s\S]*?)<\/title>/);
    const publishedMatch = block.match(/<published>([\s\S]*?)<\/published>/);
    const linkMatch = block.match(/<link[^>]*href="([^"]+)"[^>]*\/?>/) ||
                      block.match(/<link[^>]*href='([^']+)'[^>]*\/?>/);
    const summaryMatch = block.match(/<summary[^>]*>([\s\S]*?)<\/summary>/) ||
                         block.match(/<content[^>]*>([\s\S]*?)<\/content>/);

    const title = titleMatch ? titleMatch[1].replace(/<[^>]+>/g, '').trim() : 'Untitled';
    const date = publishedMatch ? publishedMatch[1].trim().slice(0, 10) : 'Unknown';
    const url = linkMatch ? linkMatch[1].trim() : '';

    // Build a 1-sentence summary from the summary/content or fall back to title
    let summary;
    if (summaryMatch) {
      const raw = summaryMatch[1]
        .replace(/<[^>]+>/g, ' ')
        .replace(/&amp;/g, '&')
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .replace(/&quot;/g, '"')
        .replace(/&#39;/g, "'")
        .replace(/\s+/g, ' ')
        .trim();
      // Take the first sentence (up to 200 chars)
      const firstSentence = raw.match(/^[^.!?]*[.!?]/);
      summary = firstSentence ? firstSentence[0].trim() : raw.slice(0, 200);
    } else {
      summary = `Google published an update: "${title}".`;
    }

    entries.push({ title, date, url, summary });
  }

  return entries;
}

async function fetchGoogleSearchCentral() {
  const FEED_URL = 'https://developers.google.com/search/blog/atom.xml';
  console.log('[info] Fetching Google Search Central Blog feed...');
  const xml = await fetchUrl(FEED_URL);
  const entries = parseAtomEntries(xml);
  console.log(`[info] Parsed ${entries.length} entries from Google Search Central Blog.`);
  return entries;
}

// --- Schema.org releases ---

/**
 * Parse the schema.org releases HTML page and extract the 3 most recent versions.
 * Each entry: { version, date, description }
 */
function parseSchemaReleases(html) {
  const releases = [];

  // Schema.org lists releases with headings like:
  //   <h3 id="v26.0">Release 26.0</h3> or <h4>... or as anchored headings
  // followed by a date and description text.
  // We try a few patterns to be resilient.

  // Pattern 1: heading with version, e.g. <h3 ...>Release 26.0</h3>
  const headingRegex = /<h[2-4][^>]*>[^<]*?(?:Release|Version)\s+([\d.]+)[^<]*<\/h[2-4]>/gi;
  let match;

  while ((match = headingRegex.exec(html)) !== null && releases.length < 3) {
    const version = match[1];
    // Grab the next ~600 chars after the heading to find date and description
    const after = html.slice(match.index + match[0].length, match.index + match[0].length + 600);

    // Look for a date pattern (YYYY-MM-DD or Month DD, YYYY or DD Month YYYY)
    const dateMatch = after.match(
      /(\d{4}-\d{2}-\d{2})|(\w+ \d{1,2},?\s*\d{4})|(\d{1,2}\s+\w+\s+\d{4})/
    );
    const date = dateMatch ? dateMatch[0].trim() : 'Unknown';

    // Grab text content from the paragraph(s) following the heading
    const paraMatch = after.match(/<p[^>]*>([\s\S]*?)<\/p>/);
    let description = 'No description available.';
    if (paraMatch) {
      description = paraMatch[1]
        .replace(/<[^>]+>/g, ' ')
        .replace(/&amp;/g, '&')
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .replace(/\s+/g, ' ')
        .trim();
      // Truncate to first sentence or 200 chars
      const firstSentence = description.match(/^[^.!?]*[.!?]/);
      description = firstSentence ? firstSentence[0].trim() : description.slice(0, 200);
    }

    releases.push({ version, date, description });
  }

  return releases;
}

async function fetchSchemaOrgReleases() {
  const RELEASES_URL = 'https://schema.org/docs/releases.html';
  console.log('[info] Fetching Schema.org releases page...');
  const html = await fetchUrl(RELEASES_URL);
  const releases = parseSchemaReleases(html);
  console.log(`[info] Parsed ${releases.length} releases from Schema.org.`);
  return releases;
}

// --- Markdown output ---

/**
 * Build the weekly digest markdown content.
 */
function buildMarkdown(googleEntries, schemaReleases, timestamp) {
  const { year, week } = getISOWeek(new Date());
  const lines = [];

  lines.push(`# SEO Knowledge Update - ${year}-W${week}`);
  lines.push('');
  lines.push(`> Fetched: ${timestamp}`);
  lines.push('');

  // Google Search Central Blog
  lines.push('## Google Search Central Blog');
  lines.push('');
  if (googleEntries.length === 0) {
    lines.push('_No entries retrieved (source may be unavailable)._');
  } else {
    for (const entry of googleEntries) {
      lines.push(`### ${entry.title}`);
      lines.push('');
      lines.push(`- **Date:** ${entry.date}`);
      lines.push(`- **URL:** ${entry.url}`);
      lines.push(`- **Summary:** ${entry.summary}`);
      lines.push('');
    }
  }

  // Schema.org Releases
  lines.push('## Schema.org Recent Releases');
  lines.push('');
  if (schemaReleases.length === 0) {
    lines.push('_No releases retrieved (source may be unavailable)._');
  } else {
    for (const release of schemaReleases) {
      lines.push(`### Release ${release.version}`);
      lines.push('');
      lines.push(`- **Date:** ${release.date}`);
      lines.push(`- **Description:** ${release.description}`);
      lines.push('');
    }
  }

  return lines.join('\n');
}

// --- INDEX.md updater ---

/**
 * Read INDEX.md, find the "## Weekly Updates" section,
 * and append a line for the new weekly file.
 * Creates the file and section if they don't exist.
 */
function updateIndex(weeklyFilename) {
  const { year, week } = getISOWeek(new Date());
  const label = `${year}-W${week}`;
  const entry = `- [${label}](weekly/${weeklyFilename})`;

  let content;
  if (fs.existsSync(INDEX_PATH)) {
    content = fs.readFileSync(INDEX_PATH, 'utf-8');
  } else {
    content = '# SEO Knowledge Base\n\n## Weekly Updates\n';
  }

  // Don't duplicate if already present
  if (content.includes(weeklyFilename)) {
    console.log('[info] INDEX.md already contains an entry for this week. Skipping.');
    return;
  }

  const sectionHeader = '## Weekly Updates';
  const idx = content.indexOf(sectionHeader);

  if (idx === -1) {
    // Section doesn't exist yet; append it
    content = content.trimEnd() + '\n\n' + sectionHeader + '\n\n' + entry + '\n';
  } else {
    // Insert the new entry right after the section heading (and any blank line)
    const afterHeader = idx + sectionHeader.length;
    // Find end of the line with the heading
    const nextNewline = content.indexOf('\n', afterHeader);
    if (nextNewline === -1) {
      content = content + '\n\n' + entry + '\n';
    } else {
      // Insert after the heading line (preserving a blank line)
      const before = content.slice(0, nextNewline + 1);
      const after = content.slice(nextNewline + 1);
      content = before + '\n' + entry + '\n' + after;
    }
  }

  fs.writeFileSync(INDEX_PATH, content, 'utf-8');
  console.log(`[info] Updated INDEX.md with entry for ${label}.`);
}

// --- Main ---

async function main() {
  const timestamp = new Date().toISOString();
  const { year, week } = getISOWeek(new Date());

  console.log(`[info] SEO Knowledge Update - ${year}-W${week}`);
  console.log(`[info] Timestamp: ${timestamp}`);

  // Ensure directories exist
  fs.mkdirSync(WEEKLY_DIR, { recursive: true });

  // Fetch both sources concurrently; tolerate failures
  let googleEntries = [];
  let schemaReleases = [];

  const results = await Promise.allSettled([
    fetchGoogleSearchCentral(),
    fetchSchemaOrgReleases(),
  ]);

  if (results[0].status === 'fulfilled') {
    googleEntries = results[0].value;
  } else {
    console.warn(`[warn] Failed to fetch Google Search Central Blog: ${results[0].reason.message}`);
  }

  if (results[1].status === 'fulfilled') {
    schemaReleases = results[1].value;
  } else {
    console.warn(`[warn] Failed to fetch Schema.org releases: ${results[1].reason.message}`);
  }

  // Build and save the weekly markdown file
  const markdown = buildMarkdown(googleEntries, schemaReleases, timestamp);
  const filename = `${year}-${week}.md`;
  const filePath = path.join(WEEKLY_DIR, filename);

  fs.writeFileSync(filePath, markdown, 'utf-8');
  console.log(`[info] Saved weekly digest to ${path.relative(PROJECT_ROOT, filePath)}`);

  // Update INDEX.md
  updateIndex(filename);

  console.log('[info] Done.');
}

main().catch((err) => {
  console.error('[error] Unexpected failure:', err.message);
  // Exit 0 as requested — don't fail the process
  process.exit(0);
});
