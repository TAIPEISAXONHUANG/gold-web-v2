const fs = require('fs');
const path = require('path');

const BLOG_DIR = path.join(__dirname, 'my-gold-price/app/blog');
const OUTPUT = path.join(__dirname, 'link-audit.json');

const slugs = fs.readdirSync(BLOG_DIR).filter(f => {
  const p = path.join(BLOG_DIR, f);
  return fs.statSync(p).isDirectory();
});

const results = [];

for (const slug of slugs) {
  const filePath = path.join(BLOG_DIR, slug, 'page.tsx');
  if (!fs.existsSync(filePath)) continue;

  const content = fs.readFileSync(filePath, 'utf8');

  // Extract title
  const titleMatch = content.match(/title:\s*['"`](.+?)['"`]/);
  let title = titleMatch ? titleMatch[1] : slug;
  // Strip suffix
  title = title.replace(/\s*[|\|]\s*巧品珠寶.*$/, '').trim();

  // Extract description
  const descMatch = content.match(/description:\s*['"`](.+?)['"`]/);
  const description = descMatch ? descMatch[1] : '';

  // Count internal links (href="/blog/ or href="https://www.gold-tw.com/blog/)
  const internalLinks1 = (content.match(/href="\/blog\//g) || []).length;
  const internalLinks2 = (content.match(/href="https:\/\/www\.gold-tw\.com\/blog\//g) || []).length;
  const totalLinks = internalLinks1 + internalLinks2;

  // Check if already has 延伸閱讀
  const hasExtendedReading = content.includes('延伸閱讀');

  results.push({
    slug,
    title,
    description,
    internalLinkCount: totalLinks,
    hasExtendedReading,
    filePath,
  });
}

results.sort((a, b) => a.internalLinkCount - b.internalLinkCount);

fs.writeFileSync(OUTPUT, JSON.stringify(results, null, 2), 'utf8');

const needsLinks = results.filter(r => r.internalLinkCount < 5 && !r.hasExtendedReading);
const alreadyHas = results.filter(r => r.hasExtendedReading);
const alreadyEnough = results.filter(r => r.internalLinkCount >= 5 && !r.hasExtendedReading);

console.log(`Total articles: ${results.length}`);
console.log(`Already have 延伸閱讀: ${alreadyHas.length}`);
console.log(`Already have 5+ internal links (no 延伸閱讀): ${alreadyEnough.length}`);
console.log(`Need internal links added: ${needsLinks.length}`);
console.log('\nTop 10 articles needing links:');
needsLinks.slice(0, 10).forEach(r => {
  console.log(`  [${r.internalLinkCount}] ${r.slug}`);
});

console.log(`\nResults saved to ${OUTPUT}`);
