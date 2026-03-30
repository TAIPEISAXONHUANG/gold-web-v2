#!/usr/bin/env node
/**
 * 4-Week Article Performance Analysis
 *
 * Reads seo-data/articles-log.json and produces a report grouped by
 * structure type (A/B/C) with top/bottom performers and recommendations.
 *
 * Usage: node scripts/analyze-results.js
 */

const fs = require('fs');
const path = require('path');

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function loadArticles() {
  const filePath = path.resolve(__dirname, '..', 'seo-data', 'articles-log.json');
  if (!fs.existsSync(filePath)) {
    return [];
  }
  const raw = fs.readFileSync(filePath, 'utf-8');
  try {
    return JSON.parse(raw);
  } catch {
    console.error('Error: articles-log.json contains invalid JSON.');
    process.exit(1);
  }
}

function avg(arr) {
  if (arr.length === 0) return 0;
  return arr.reduce((sum, v) => sum + v, 0) / arr.length;
}

function fmt(n, decimals = 2) {
  return Number(n).toFixed(decimals);
}

function padEnd(str, len) {
  str = String(str);
  while (str.length < len) str += ' ';
  return str;
}

function padStart(str, len) {
  str = String(str);
  while (str.length < len) str = ' ' + str;
  return str;
}

// ---------------------------------------------------------------------------
// Analysis
// ---------------------------------------------------------------------------

function analyzeByStructureType(articles) {
  const groups = {};

  for (const a of articles) {
    const type = a.structureType || 'Unknown';
    if (!groups[type]) groups[type] = [];
    groups[type].push(a);
  }

  const results = [];
  for (const [type, items] of Object.entries(groups).sort()) {
    results.push({
      type,
      count: items.length,
      avgClicks: avg(items.map((a) => a.sc_clicks_4w)),
      avgCTR: avg(items.map((a) => a.sc_ctr_4w)),
      avgPosition: avg(items.map((a) => a.sc_position_4w)),
    });
  }
  return results;
}

function topPerformers(articles, n = 5) {
  return [...articles].sort((a, b) => b.sc_clicks_4w - a.sc_clicks_4w).slice(0, n);
}

function bottomPerformers(articles, n = 5) {
  // Require at least 10 impressions to filter noise
  const eligible = articles.filter((a) => a.sc_impressions_4w >= 10);
  return [...eligible].sort((a, b) => a.sc_clicks_4w - b.sc_clicks_4w).slice(0, n);
}

// ---------------------------------------------------------------------------
// Output
// ---------------------------------------------------------------------------

function printStructureTable(groupStats) {
  const header =
    padEnd('Type', 8) +
    padStart('Articles', 10) +
    padStart('Avg Clicks', 12) +
    padStart('Avg CTR', 10) +
    padStart('Avg Pos', 10);

  const separator = '-'.repeat(header.length);

  console.log('\n=== Structure Type Comparison ===\n');
  console.log(header);
  console.log(separator);

  for (const g of groupStats) {
    console.log(
      padEnd(g.type, 8) +
        padStart(String(g.count), 10) +
        padStart(fmt(g.avgClicks, 1), 12) +
        padStart((g.avgCTR * 100).toFixed(2) + '%', 10) +
        padStart(fmt(g.avgPosition, 1), 10)
    );
  }
}

function printArticleList(title, articles) {
  console.log(`\n=== ${title} ===\n`);
  if (articles.length === 0) {
    console.log('  (none)\n');
    return;
  }
  for (let i = 0; i < articles.length; i++) {
    const a = articles[i];
    console.log(
      `  ${i + 1}. [${a.structureType || '?'}] ${a.slug}` +
        `  — clicks: ${a.sc_clicks_4w}, CTR: ${(a.sc_ctr_4w * 100).toFixed(2)}%, pos: ${fmt(a.sc_position_4w, 1)}`
    );
  }
}

function printRecommendations(groupStats) {
  console.log('\n=== Recommendations ===\n');

  if (groupStats.length === 0) {
    console.log('  No data to base recommendations on.\n');
    return;
  }

  // Best by clicks
  const bestClicks = [...groupStats].sort((a, b) => b.avgClicks - a.avgClicks)[0];
  // Best by CTR
  const bestCTR = [...groupStats].sort((a, b) => b.avgCTR - a.avgCTR)[0];
  // Best by position (lower is better)
  const bestPos = [...groupStats].sort((a, b) => a.avgPosition - b.avgPosition)[0];

  console.log(`  * Best avg clicks:   Structure ${bestClicks.type} (${fmt(bestClicks.avgClicks, 1)} clicks/article)`);
  console.log(`  * Best avg CTR:      Structure ${bestCTR.type} (${(bestCTR.avgCTR * 100).toFixed(2)}%)`);
  console.log(`  * Best avg position: Structure ${bestPos.type} (${fmt(bestPos.avgPosition, 1)})`);
  console.log('');

  if (bestClicks.type === bestCTR.type) {
    console.log(
      `  >> Structure "${bestClicks.type}" leads in both clicks and CTR. Consider prioritising this structure for future articles.`
    );
  } else {
    console.log(
      `  >> Structure "${bestClicks.type}" gets the most clicks while "${bestCTR.type}" has the highest CTR.`
    );
    console.log(
      `     Evaluate whether traffic volume or engagement rate matters more for your goals.`
    );
  }
  console.log('');
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

function main() {
  const allArticles = loadArticles();

  // Filter to articles that have Search Console data
  const articles = allArticles.filter((a) => a.sc_clicks_4w != null);

  if (articles.length === 0) {
    console.log('No Search Console data available yet. Populate seo-data/articles-log.json with sc_* fields and re-run.');
    process.exit(0);
  }

  console.log(`\nAnalysing ${articles.length} article(s) with Search Console data (out of ${allArticles.length} total).\n`);

  const groupStats = analyzeByStructureType(articles);

  printStructureTable(groupStats);
  printArticleList('Top 5 Performers (by clicks)', topPerformers(articles, 5));
  printArticleList('Bottom 5 Performers (by clicks, min 10 impressions)', bottomPerformers(articles, 5));
  printRecommendations(groupStats);
}

main();
