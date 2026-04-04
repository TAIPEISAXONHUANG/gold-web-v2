const fs = require('fs');
const path = require('path');

const blogDir = path.join(__dirname, 'my-gold-price', 'app', 'blog');
const results = [];

const slugs = fs.readdirSync(blogDir).filter(f => {
  return fs.statSync(path.join(blogDir, f)).isDirectory();
});

for (const slug of slugs) {
  const tsxPath = path.join(blogDir, slug, 'page.tsx');
  let status = 'OK';
  let faqCount = 0;
  let hasAISummary = false;
  let titleHasEmoji = false;
  let titleHasDate = false;
  let internalLinkCount = 0;
  let hasBlogPostingSchema = false;
  let hasFAQSchema = false;
  let hasTable = false;
  let wordCount = 0;
  let notes = '';

  if (!fs.existsSync(tsxPath)) {
    status = 'FILE_NOT_FOUND';
    notes = 'page.tsx not found';
  } else {
    const content = fs.readFileSync(tsxPath, 'utf8');
    if (!content) {
      status = 'EMPTY_FILE';
      notes = 'File empty';
    } else {
      // Check AI summary
      hasAISummary = /重點摘要|AI 摘要|AI摘要/i.test(content);

      // Check title for emoji
      titleHasEmoji = /[📌✅❌💰🔥⭐🎯💡⚠️✔️❓🕐📞💬📍🌐]/.test(content);

      // Check title for date patterns
      titleHasDate = /20\d{2}|20\d{2}年/.test(content);

      // Check FAQ count - count "Question" type in schema
      const faqMatches = content.match(/"@type"\s*:\s*"Question"/gi) || [];
      faqCount = faqMatches.length;

      // Check FAQPage schema
      hasFAQSchema = /FAQPage/i.test(content);

      // Check BlogPosting schema
      hasBlogPostingSchema = /BlogPosting/i.test(content);

      // Count internal links
      const linkMatches = content.match(/\/blog\/[a-z0-9-]+/g) || [];
      const uniqueLinks = [...new Set(linkMatches)];
      internalLinkCount = uniqueLinks.length;

      // Check for table
      hasTable = /<table|<Table/.test(content);

      // Word count
      wordCount = content.length;
    }
  }

  results.push({
    slug,
    status,
    faqCount,
    hasAISummary,
    titleHasEmoji,
    titleHasDate,
    internalLinkCount,
    hasBlogPostingSchema,
    hasFAQSchema,
    hasTable,
    wordCount,
    notes
  });
}

// Sort by slug
results.sort((a, b) => a.slug.localeCompare(b.slug));

// Print summary
console.log('=== BLOG SEO SCAN RESULTS ===');
console.log('Total articles: ' + results.length);
console.log('');

// Summary stats
const needsFAQ = results.filter(r => r.status === 'OK' && r.faqCount < 3).length;
const noAISummary = results.filter(r => r.status === 'OK' && !r.hasAISummary).length;
const hasEmoji = results.filter(r => r.status === 'OK' && r.titleHasEmoji).length;
const hasDate = results.filter(r => r.status === 'OK' && r.titleHasDate).length;
const lowLinks = results.filter(r => r.status === 'OK' && r.internalLinkCount < 3).length;
const noBlogPosting = results.filter(r => r.status === 'OK' && !r.hasBlogPostingSchema).length;
const noFAQSchema = results.filter(r => r.status === 'OK' && !r.hasFAQSchema).length;
const noTable = results.filter(r => r.status === 'OK' && !r.hasTable).length;

console.log('=== SUMMARY ===');
console.log('Needs FAQ (< 3): ' + needsFAQ);
console.log('No AI Summary: ' + noAISummary);
console.log('Title has Emoji: ' + hasEmoji);
console.log('Title has Date: ' + hasDate);
console.log('Low Internal Links (< 3): ' + lowLinks);
console.log('No BlogPosting Schema: ' + noBlogPosting);
console.log('No FAQPage Schema: ' + noFAQSchema);
console.log('No Table: ' + noTable);
console.log('');

// Problem articles
const problemArticles = results.filter(r => {
  if (r.status !== 'OK') return false;
  return (
    r.faqCount < 3 ||
    !r.hasAISummary ||
    r.titleHasEmoji ||
    r.titleHasDate ||
    r.internalLinkCount < 3 ||
    !r.hasBlogPostingSchema ||
    !r.hasFAQSchema ||
    !r.hasTable
  );
});

console.log('=== ARTICLES NEEDING OPTIMIZATION (sorted by priority) ===');
console.log('');

// Priority scoring
function getPriority(r) {
  let score = 0;
  if (r.faqCount < 3) score += 3;
  if (!r.hasFAQSchema) score += 3;
  if (!r.hasBlogPostingSchema) score += 3;
  if (!r.hasAISummary) score += 2;
  if (r.titleHasEmoji) score += 2;
  if (r.titleHasDate) score += 2;
  if (r.internalLinkCount < 3) score += 1;
  if (!r.hasTable) score += 1;
  return score;
}

problemArticles.sort((a, b) => getPriority(b) - getPriority(a));

let idx = 1;
for (const r of problemArticles) {
  const problems = [];
  if (r.faqCount < 3) problems.push('FAQ(' + r.faqCount + '<3)');
  if (!r.hasFAQSchema) problems.push('NoFAQSchema');
  if (!r.hasBlogPostingSchema) problems.push('NoBlogPosting');
  if (!r.hasAISummary) problems.push('NoAISummary');
  if (r.titleHasEmoji) problems.push('TitleEmoji');
  if (r.titleHasDate) problems.push('TitleDate');
  if (r.internalLinkCount < 3) problems.push('Links(' + r.internalLinkCount + '<3)');
  if (!r.hasTable) problems.push('NoTable');

  console.log(idx + '. /blog/' + r.slug);
  console.log('   Problems: ' + problems.join(', '));
  console.log('   InternalLinks: ' + r.internalLinkCount + ', FAQ: ' + r.faqCount + ', Table: ' + r.hasTable);
  idx++;
  if (idx > 50) break; // cap at 50 for readability
}

console.log('');
console.log('Problem articles shown: ' + Math.min(problemArticles.length, 50) + ' of ' + problemArticles.length);

// Write CSV
const csvHeader = 'Slug,Status,FAQCount,HasAISummary,TitleHasEmoji,TitleHasDate,InternalLinkCount,HasBlogPostingSchema,HasFAQSchema,HasTable,Notes';
const csvLines = results.map(r => {
  return [r.slug, r.status, r.faqCount, r.hasAISummary, r.titleHasEmoji, r.titleHasDate, r.internalLinkCount, r.hasBlogPostingSchema, r.hasFAQSchema, r.hasTable, '"' + r.notes + '"'].join(',');
}).join('\n');

fs.writeFileSync(path.join(__dirname, 'blog-seo-scan-results.csv'), '\ufeff' + csvHeader + '\n' + csvLines, 'utf8');
console.log('\nCSV saved to blog-seo-scan-results.csv');
