import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const blogDir = path.join(__dirname, 'app', 'blog');
const blogDirs = fs.readdirSync(blogDir).filter(d => {
  try { return fs.statSync(path.join(blogDir, d)).isDirectory(); } catch { return false; }
});
const blogFiles = blogDirs.map(d => path.join(blogDir, d, 'page.tsx')).filter(f => fs.existsSync(f));

let task1Count = 0, task2Count = 0, task4Count = 0;

for (const file of blogFiles) {
  let content = fs.readFileSync(file, 'utf8');
  const orig = content;

  // === Task 1: Replace author name in JSON-LD ===
  // author blocks with double quotes
  content = content.replace(
    /("author"\s*:\s*\{[^}]*?)"name"\s*:\s*"巧品珠寶"/g,
    '$1"name": "鑑定師L"'
  );
  // author blocks with single quotes
  content = content.replace(
    /(author\s*:\s*\{[^}]*?)name\s*:\s*'巧品珠寶'/g,
    "$1name: '鑑定師L'"
  );
  // visible text
  content = content.replace(/作者：巧品珠寶/g, '作者：鑑定師L');

  if (content !== orig) task1Count++;

  // === Task 2: Add publishedTime/modifiedTime to existing openGraph ===
  const beforeT2 = content;
  if (content.includes('openGraph') && !content.includes('publishedTime')) {
    const dateMatch = content.match(/datePublished["']?\s*:\s*["'](\d{4}-\d{2}-\d{2})/);
    if (dateMatch) {
      const timeStr = dateMatch[1] + 'T00:00:00+08:00';
      content = content.replace(
        /(openGraph\s*:\s*\{)/,
        `$1\n    type: 'article',\n    publishedTime: '${timeStr}',\n    modifiedTime: '${timeStr}',`
      );
    }
  }
  if (content !== beforeT2) task2Count++;

  // === Task 4: Add missing openGraph block ===
  const beforeT4 = content;
  if (!content.includes('openGraph')) {
    const titleMatch = content.match(/title\s*:\s*['"](.+?)['"]/);
    const descMatch = content.match(/description\s*:\s*['"](.+?)['"]/);
    const dateMatch = content.match(/datePublished["']?\s*:\s*["'](\d{4}-\d{2}-\d{2})/);
    const slugMatch = file.match(/blog[\\/]([^\\/]+)[\\/]page\.tsx/);

    if (titleMatch && descMatch && slugMatch) {
      const title = titleMatch[1].replace(/'/g, "\\'");
      const desc = descMatch[1].replace(/'/g, "\\'");
      const slug = slugMatch[1];
      const date = dateMatch ? dateMatch[1] : '2026-04-01';
      const timeStr = date + 'T00:00:00+08:00';

      const ogBlock = `,\n  openGraph: {\n    title: '${title}',\n    description: '${desc}',\n    url: 'https://www.gold-tw.com/blog/${slug}',\n    type: 'article',\n    publishedTime: '${timeStr}',\n    modifiedTime: '${timeStr}',\n  }`;

      // Insert before the closing }; of metadata
      content = content.replace(
        /(export const metadata\s*:\s*Metadata\s*=\s*\{[\s\S]*?)(,?\s*\n\};\s*\n)/,
        '$1' + ogBlock + '\n};\n'
      );
    }
  }
  if (content !== beforeT4) task4Count++;

  if (content !== orig) {
    fs.writeFileSync(file, content, 'utf8');
  }
}

console.log('Task 1 (author replace):', task1Count, 'files');
console.log('Task 2 (OG article times):', task2Count, 'files');
console.log('Task 4 (missing OG):', task4Count, 'files');

// === Task 3: Add rel="noopener noreferrer" to external links in ALL app tsx files ===
function walkDir(dir) {
  let results = [];
  for (const entry of fs.readdirSync(dir)) {
    const full = path.join(dir, entry);
    try {
      const stat = fs.statSync(full);
      if (stat.isDirectory()) results = results.concat(walkDir(full));
      else if (full.endsWith('.tsx')) results.push(full);
    } catch {}
  }
  return results;
}

const appDir = path.join(__dirname, 'app');
const allTsx = walkDir(appDir);
let task3Count = 0;

for (const file of allTsx) {
  let content = fs.readFileSync(file, 'utf8');
  const orig = content;

  // Match <a tags with href="https://..." that don't have rel="noopener noreferrer"
  // We need to handle:
  // 1. <a ... href="https://..." ...> with no rel attribute at all
  // 2. <a ... href="https://..." rel="noopener" ...> (missing noreferrer)

  // First: add rel="noopener noreferrer" where rel is completely missing
  // Match <a ... href="https://..." ...> without rel=
  content = content.replace(
    /(<a\s+(?:(?!rel=)[^>])*?href="https?:\/\/[^"]*")((?:(?!rel=)[^>])*?>)/g,
    (match, before, after) => {
      // Check if this already has rel somewhere we missed
      if (match.includes('rel=')) return match;
      return before + ' rel="noopener noreferrer"' + after;
    }
  );

  // Also handle JSX style with single quotes in href
  content = content.replace(
    /(<a\s+(?:(?!rel=)[^>])*?href='https?:\/\/[^']*')((?:(?!rel=)[^>])*?>)/g,
    (match, before, after) => {
      if (match.includes('rel=')) return match;
      return before + ' rel="noopener noreferrer"' + after;
    }
  );

  // Fix rel="noopener" → rel="noopener noreferrer"
  content = content.replace(/rel="noopener"(?!\s*noreferrer)/g, 'rel="noopener noreferrer"');

  if (content !== orig) {
    task3Count++;
    fs.writeFileSync(file, content, 'utf8');
  }
}

console.log('Task 3 (external link rel):', task3Count, 'files');
