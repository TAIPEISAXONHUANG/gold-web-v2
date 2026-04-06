/**
 * add-internal-links.js
 * Adds styled "延伸閱讀" sections to blog articles with fewer than 5 internal links.
 */

const fs = require('fs');
const path = require('path');

const BLOG_DIR = path.join(__dirname, 'my-gold-price/app/blog');
const AUDIT_FILE = path.join(__dirname, 'link-audit.json');

// ─────────────────────────────────────────────
// Topic cluster keyword matching
// ─────────────────────────────────────────────
const CLUSTERS = {
  gold_price: ['price', '金價', 'qian', 'liang', 'gram', 'daily', 'today', 'forecast', 'outlook', 'review', '10mg', '916', 'per-gram', 'gold-price', 'gold-sell'],
  k_gold: ['k-gold', 'karat', 'au750', '14k', '18k', 'k_gold'],
  recovery_recycling: ['recovery', 'recycling', 'recycle', 'sell', 'selling'],
  platinum: ['platinum'],
  diamond: ['diamond', 'gia'],
  wedding: ['wedding'],
  comparison: ['vs', 'comparison', 'difference'],
  process_guide: ['guide', 'faq', 'tips', 'checklist', 'how-to', 'before', 'what-to', 'why', 'register'],
  misc: [],
};

function getCluster(slug) {
  const s = slug.toLowerCase();
  for (const [cluster, keywords] of Object.entries(CLUSTERS)) {
    if (cluster === 'misc') continue;
    if (keywords.some(kw => s.includes(kw))) return cluster;
  }
  return 'misc';
}

// ─────────────────────────────────────────────
// Load audit data
// ─────────────────────────────────────────────
if (!fs.existsSync(AUDIT_FILE)) {
  console.error('Run audit-links.js first to generate link-audit.json');
  process.exit(1);
}

const articles = JSON.parse(fs.readFileSync(AUDIT_FILE, 'utf8'));

// Build a map for quick title lookup
const titleBySlug = {};
for (const art of articles) {
  titleBySlug[art.slug] = art.title;
}

// Assign clusters
for (const art of articles) {
  art.cluster = getCluster(art.slug);
}

// Build cluster -> slugs map
const clusterMap = {};
for (const art of articles) {
  if (!clusterMap[art.cluster]) clusterMap[art.cluster] = [];
  clusterMap[art.cluster].push(art.slug);
}

// ─────────────────────────────────────────────
// Pick 4 related articles for a given slug
// ─────────────────────────────────────────────
const RELATED_CLUSTERS = {
  gold_price: ['gold_price', 'recovery_recycling', 'process_guide'],
  k_gold: ['k_gold', 'recovery_recycling', 'gold_price'],
  recovery_recycling: ['recovery_recycling', 'gold_price', 'process_guide'],
  platinum: ['platinum', 'recovery_recycling', 'comparison'],
  diamond: ['diamond', 'recovery_recycling', 'comparison'],
  wedding: ['wedding', 'gold_price', 'process_guide'],
  comparison: ['comparison', 'gold_price', 'k_gold'],
  process_guide: ['process_guide', 'recovery_recycling', 'gold_price'],
  misc: ['misc', 'gold_price', 'recovery_recycling'],
};

function pickRelated(slug, cluster, count = 4) {
  const priorityClusters = RELATED_CLUSTERS[cluster] || [cluster, 'gold_price', 'misc'];
  const candidates = [];
  for (const c of priorityClusters) {
    const slugsInCluster = (clusterMap[c] || []).filter(s => s !== slug);
    candidates.push(...slugsInCluster);
    if (candidates.length >= count * 3) break;
  }
  // Deduplicate
  const seen = new Set();
  const unique = [];
  for (const s of candidates) {
    if (!seen.has(s)) {
      seen.add(s);
      unique.push(s);
    }
  }
  return unique.slice(0, count);
}

// ─────────────────────────────────────────────
// Build the 延伸閱讀 HTML block
// ─────────────────────────────────────────────
function buildExtendedReadingBlock(relatedSlugs) {
  const items = relatedSlugs.map(slug => {
    const title = titleBySlug[slug] || slug;
    return `          <li style={{ marginBottom: '0.5rem' }}><a href="/blog/${slug}" style={{ color: '#B8860B', textDecoration: 'none' }}>${title}</a></li>`;
  }).join('\n');

  return `      <div style={{ marginTop: '2rem', padding: '1.5rem', backgroundColor: '#fdf8e8', borderRadius: '8px', borderLeft: '4px solid #B8860B' }}>
        <h3 style={{ color: '#B8860B', marginBottom: '1rem', fontSize: '1.1rem' }}>延伸閱讀</h3>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
${items}
        </ul>
      </div>`;
}

// ─────────────────────────────────────────────
// Find insertion point and insert block
// ─────────────────────────────────────────────
function findInsertionPoint(content) {
  // Try common last-closing-element patterns in JSX return
  // We want to insert just before </main>, or if no </main>, before </> or last </div> before );

  // Strategy: find the last occurrence of </main> before ); or </>
  const mainClose = content.lastIndexOf('</main>');
  if (mainClose !== -1) return { index: mainClose, tag: '</main>' };

  const fragmentClose = content.lastIndexOf('</>');
  if (fragmentClose !== -1) return { index: fragmentClose, tag: '</>' };

  // Fall back: find last </article>
  const articleClose = content.lastIndexOf('</article>');
  if (articleClose !== -1) return { index: articleClose, tag: '</article>' };

  return null;
}

// ─────────────────────────────────────────────
// Main loop
// ─────────────────────────────────────────────
let modifiedCount = 0;
const modifiedFiles = [];

for (const art of articles) {
  // Skip if already has 5+ links
  if (art.internalLinkCount >= 5) continue;

  // Skip if already has 延伸閱讀 (traditional Chinese)
  if (art.hasExtendedReading) continue;

  const filePath = art.filePath;
  if (!fs.existsSync(filePath)) continue;

  const content = fs.readFileSync(filePath, 'utf8');

  // Double-check: re-detect 延伸閱讀 in content (in case audit was stale)
  if (content.includes('延伸閱讀')) continue;

  const cluster = art.cluster;
  const related = pickRelated(art.slug, cluster, 4);

  if (related.length < 2) {
    console.warn(`  WARNING: Not enough related articles for ${art.slug} (cluster: ${cluster})`);
    continue;
  }

  const block = buildExtendedReadingBlock(related);
  const insertion = findInsertionPoint(content);

  if (!insertion) {
    console.warn(`  WARNING: Could not find insertion point in ${art.slug}`);
    continue;
  }

  const newContent = content.slice(0, insertion.index) + block + '\n' + content.slice(insertion.index);
  fs.writeFileSync(filePath, newContent, 'utf8');

  modifiedCount++;
  modifiedFiles.push({ slug: art.slug, cluster, related, tag: insertion.tag });
  console.log(`  ✓ Modified: ${art.slug} (cluster: ${cluster}, inserted before ${insertion.tag})`);
}

console.log(`\nDone! Modified ${modifiedCount} articles.`);

if (modifiedFiles.length > 0) {
  console.log('\nModified files summary:');
  modifiedFiles.forEach(m => {
    console.log(`  ${m.slug} → related: ${m.related.join(', ')}`);
  });
}
