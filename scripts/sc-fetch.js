#!/usr/bin/env node
/**
 * Search Console Data Fetcher for gold-tw.com
 * Usage: node scripts/sc-fetch.js [overview|pages|low-ctr|keywords|update-log]
 */

const { google } = require('googleapis');
const fs = require('fs');
const path = require('path');

const SITE_URL = process.env.SC_SITE_URL || 'sc-domain:gold-tw.com';
const SEO_DATA_DIR = path.join(__dirname, '..', 'seo-data');
const ARTICLES_LOG_PATH = path.join(SEO_DATA_DIR, 'articles-log.json');
const TARGET_KEYWORDS_PATH = path.join(SEO_DATA_DIR, 'target-keywords.json');

// --- Auth ---

async function getAuth() {
  let credentials;

  if (process.env.GOOGLE_SERVICE_ACCOUNT_JSON) {
    credentials = JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT_JSON);
  } else if (process.env.GOOGLE_SERVICE_ACCOUNT_FILE) {
    const raw = fs.readFileSync(process.env.GOOGLE_SERVICE_ACCOUNT_FILE, 'utf-8');
    credentials = JSON.parse(raw);
  } else {
    throw new Error(
      'Set GOOGLE_SERVICE_ACCOUNT_JSON (JSON string) or GOOGLE_SERVICE_ACCOUNT_FILE (file path)'
    );
  }

  const auth = new google.auth.GoogleAuth({
    credentials,
    scopes: ['https://www.googleapis.com/auth/webmasters.readonly'],
  });

  return auth;
}

async function getSearchConsole() {
  const auth = await getAuth();
  return google.searchconsole({ version: 'v1', auth });
}

// --- Helpers ---

function dateStr(daysAgo) {
  const d = new Date();
  d.setDate(d.getDate() - daysAgo);
  return d.toISOString().slice(0, 10);
}

function formatNumber(n, decimals = 2) {
  if (n == null) return 'N/A';
  return Number(n).toFixed(decimals);
}

function pctChange(current, previous) {
  if (!previous || previous === 0) return 'N/A';
  return ((current - previous) / previous * 100).toFixed(1) + '%';
}

// --- Core Functions ---

/**
 * Get last 7 days clicks/impressions vs previous 7 days
 */
async function fetchWeeklyOverview() {
  const sc = await getSearchConsole();

  const [current, previous] = await Promise.all([
    sc.searchanalytics.query({
      siteUrl: SITE_URL,
      requestBody: {
        startDate: dateStr(7),
        endDate: dateStr(1),
        dimensions: [],
      },
    }),
    sc.searchanalytics.query({
      siteUrl: SITE_URL,
      requestBody: {
        startDate: dateStr(14),
        endDate: dateStr(8),
        dimensions: [],
      },
    }),
  ]);

  const cur = current.data.rows?.[0] || { clicks: 0, impressions: 0, ctr: 0, position: 0 };
  const prev = previous.data.rows?.[0] || { clicks: 0, impressions: 0, ctr: 0, position: 0 };

  const result = {
    period: `${dateStr(7)} ~ ${dateStr(1)}`,
    previousPeriod: `${dateStr(14)} ~ ${dateStr(8)}`,
    current: {
      clicks: cur.clicks,
      impressions: cur.impressions,
      ctr: formatNumber(cur.ctr * 100) + '%',
      avgPosition: formatNumber(cur.position),
    },
    previous: {
      clicks: prev.clicks,
      impressions: prev.impressions,
      ctr: formatNumber(prev.ctr * 100) + '%',
      avgPosition: formatNumber(prev.position),
    },
    change: {
      clicks: pctChange(cur.clicks, prev.clicks),
      impressions: pctChange(cur.impressions, prev.impressions),
      ctr: pctChange(cur.ctr, prev.ctr),
      avgPosition: pctChange(prev.position, cur.position), // lower is better
    },
  };

  return result;
}

/**
 * Get top 100 pages by clicks, last 28 days
 */
async function fetchPagePerformance() {
  const sc = await getSearchConsole();

  const response = await sc.searchanalytics.query({
    siteUrl: SITE_URL,
    requestBody: {
      startDate: dateStr(28),
      endDate: dateStr(1),
      dimensions: ['page'],
      rowLimit: 100,
      orderBy: 'clicks',
      dimensionFilterGroups: [],
    },
  });

  const pages = (response.data.rows || []).map((row) => ({
    url: row.keys[0],
    clicks: row.clicks,
    impressions: row.impressions,
    ctr: formatNumber(row.ctr * 100) + '%',
    position: formatNumber(row.position),
  }));

  return pages;
}

/**
 * Pages with >50 impressions but CTR < 2% (optimization opportunities)
 */
async function fetchHighImpressionsLowCTR() {
  const sc = await getSearchConsole();

  const response = await sc.searchanalytics.query({
    siteUrl: SITE_URL,
    requestBody: {
      startDate: dateStr(28),
      endDate: dateStr(1),
      dimensions: ['page'],
      rowLimit: 500,
    },
  });

  const opportunities = (response.data.rows || [])
    .filter((row) => row.impressions > 50 && row.ctr < 0.02)
    .sort((a, b) => b.impressions - a.impressions)
    .map((row) => ({
      url: row.keys[0],
      clicks: row.clicks,
      impressions: row.impressions,
      ctr: formatNumber(row.ctr * 100) + '%',
      position: formatNumber(row.position),
      potentialClicks: Math.round(row.impressions * 0.05) - row.clicks,
    }));

  return opportunities;
}

/**
 * For a given keyword array, get current ranking position
 */
async function fetchKeywordRankings(keywords) {
  const sc = await getSearchConsole();

  if (!keywords || keywords.length === 0) {
    const targetKw = JSON.parse(fs.readFileSync(TARGET_KEYWORDS_PATH, 'utf-8'));
    keywords = targetKw.map((k) => k.keyword);
  }

  const response = await sc.searchanalytics.query({
    siteUrl: SITE_URL,
    requestBody: {
      startDate: dateStr(7),
      endDate: dateStr(1),
      dimensions: ['query'],
      rowLimit: 5000,
    },
  });

  const queryMap = {};
  for (const row of response.data.rows || []) {
    queryMap[row.keys[0]] = row;
  }

  const rankings = keywords.map((kw) => {
    const row = queryMap[kw];
    return {
      keyword: kw,
      clicks: row ? row.clicks : 0,
      impressions: row ? row.impressions : 0,
      ctr: row ? formatNumber(row.ctr * 100) + '%' : '0.00%',
      position: row ? formatNumber(row.position) : 'Not ranked',
    };
  });

  return rankings;
}

/**
 * Update articles-log.json with Search Console data for articles published >28 days ago
 */
async function updateArticlesLog() {
  if (!fs.existsSync(ARTICLES_LOG_PATH)) {
    console.log('articles-log.json not found');
    return [];
  }

  const articles = JSON.parse(fs.readFileSync(ARTICLES_LOG_PATH, 'utf-8'));
  if (articles.length === 0) {
    console.log('No articles in log yet');
    return articles;
  }

  const sc = await getSearchConsole();
  const now = new Date();
  const updated = [];

  for (const article of articles) {
    const publishDate = new Date(article.publishDate);
    const daysSincePublish = Math.floor((now - publishDate) / (1000 * 60 * 60 * 24));

    // Only update articles published more than 28 days ago that haven't been filled yet
    if (daysSincePublish < 28) continue;
    if (article.sc_clicks_4w !== null) continue;

    try {
      const endDate = new Date(publishDate);
      endDate.setDate(endDate.getDate() + 28);

      const response = await sc.searchanalytics.query({
        siteUrl: SITE_URL,
        requestBody: {
          startDate: article.publishDate,
          endDate: endDate.toISOString().slice(0, 10),
          dimensions: ['page'],
          dimensionFilterGroups: [
            {
              filters: [
                {
                  dimension: 'page',
                  operator: 'equals',
                  expression: article.url,
                },
              ],
            },
          ],
        },
      });

      const row = response.data.rows?.[0];
      if (row) {
        article.sc_clicks_4w = row.clicks;
        article.sc_impressions_4w = row.impressions;
        article.sc_avg_position_4w = Number(formatNumber(row.position));
        updated.push(article.url);
      } else {
        article.sc_clicks_4w = 0;
        article.sc_impressions_4w = 0;
        article.sc_avg_position_4w = null;
        updated.push(article.url);
      }
    } catch (err) {
      console.error(`Error fetching data for ${article.url}:`, err.message);
    }
  }

  fs.writeFileSync(ARTICLES_LOG_PATH, JSON.stringify(articles, null, 2) + '\n');
  console.log(`Updated ${updated.length} article(s):`, updated);
  return articles;
}

// --- CLI ---

async function main() {
  const command = process.argv[2];

  if (!command) {
    console.log('Usage: node scripts/sc-fetch.js [overview|pages|low-ctr|keywords|update-log]');
    process.exit(0);
  }

  try {
    let result;
    switch (command) {
      case 'overview':
        result = await fetchWeeklyOverview();
        console.log('\n=== Weekly Overview ===');
        console.log(JSON.stringify(result, null, 2));
        break;

      case 'pages':
        result = await fetchPagePerformance();
        console.log('\n=== Top Pages (28d) ===');
        console.log(JSON.stringify(result, null, 2));
        break;

      case 'low-ctr':
        result = await fetchHighImpressionsLowCTR();
        console.log('\n=== High Impressions, Low CTR Opportunities ===');
        console.log(`Found ${result.length} pages to optimize:`);
        console.log(JSON.stringify(result, null, 2));
        break;

      case 'keywords':
        result = await fetchKeywordRankings();
        console.log('\n=== Target Keyword Rankings ===');
        console.log(JSON.stringify(result, null, 2));
        break;

      case 'update-log':
        result = await updateArticlesLog();
        console.log('\n=== Articles Log Updated ===');
        break;

      default:
        console.error(`Unknown command: ${command}`);
        console.log('Available: overview, pages, low-ctr, keywords, update-log');
        process.exit(1);
    }
  } catch (err) {
    console.error('Error:', err.message);
    process.exit(1);
  }
}

// Export functions for programmatic use
module.exports = {
  fetchWeeklyOverview,
  fetchPagePerformance,
  fetchHighImpressionsLowCTR,
  fetchKeywordRankings,
  updateArticlesLog,
};

// Run CLI if executed directly
if (require.main === module) {
  main();
}
