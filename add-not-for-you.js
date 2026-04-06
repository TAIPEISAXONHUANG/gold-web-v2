#!/usr/bin/env node
/**
 * add-not-for-you.js
 * Adds "這篇不適合你，如果…" block to all blog articles that don't already have one.
 * Inserts AFTER the AI summary box (yellow box with fffbeb/fef3c7 background or f59e0b border),
 * or after the first </h1> if no summary box is found.
 */

const fs = require('fs');
const path = require('path');

const BLOG_DIR = path.join(__dirname, 'my-gold-price', 'app', 'blog');
const INTERNAL_LINKS = {
  dailyGoldPrice: '/daily-gold-price',
  goldRecyclingTaipei: '/blog/gold-recycling-taipei',
  karatGoldGuide: '/blog/karat-gold-guide',
  diamondRecovery: '/blog/diamond-recovery-price',
  goldBuyingGuide: '/blog/gold-buying-guide-beginner-2026',
};

/**
 * Generate topic-specific bullet points based on article title and description.
 * Returns an array of JSX strings for the <li> items.
 */
function generateBullets(slug, title, description) {
  const t = (title + ' ' + description).toLowerCase();

  // Diamond articles
  if (t.includes('鑽石') || t.includes('diamond')) {
    return [
      `你想查鑽石即時公開報價 → 鑽石沒有統一公開報價，依4C個別估算`,
      `你的鑽石預算在3萬以下 → 本文討論的是標準克拉以上等級`,
      `你想了解黃金回收行情 → <a href="${INTERNAL_LINKS.goldRecyclingTaipei}" style={{ color: '#b45309' }}>台北黃金回收說明</a>`,
    ];
  }

  // K gold / karat articles
  if (t.includes('k金') || t.includes('karat') || t.includes('18k') || t.includes('14k') || t.includes('k-gold') || slug.includes('k-gold') || slug.includes('karat')) {
    return [
      `你的黃金是純金（999/9999）→ <a href="${INTERNAL_LINKS.goldRecyclingTaipei}" style={{ color: '#b45309' }}>純金回收說明</a>`,
      `你只想快速查今天金價 → <a href="${INTERNAL_LINKS.dailyGoldPrice}" style={{ color: '#b45309' }}>直接看今日金價</a>`,
      `你是第一次接觸黃金 → <a href="${INTERNAL_LINKS.goldBuyingGuide}" style={{ color: '#b45309' }}>新手買金入門</a>`,
    ];
  }

  // Gold recycling / recovery articles (check BEFORE gold-price to avoid false match on 金價 in description)
  if (t.includes('回收') || t.includes('recycl') || t.includes('recovery') || t.includes('賣黃金') || t.includes('出售') || slug.includes('recycl') || slug.includes('recovery')) {
    return [
      `你只想快速知道今天金價 → <a href="${INTERNAL_LINKS.dailyGoldPrice}" style={{ color: '#b45309' }}>直接看今日金價</a>`,
      `你的黃金是K金（非純金）→ <a href="${INTERNAL_LINKS.karatGoldGuide}" style={{ color: '#b45309' }}>看K金回收說明</a>`,
      `你想了解鑽石回收行情 → <a href="${INTERNAL_LINKS.diamondRecovery}" style={{ color: '#b45309' }}>鑽石回收說明</a>`,
    ];
  }

  // Gold price / forecast / investment articles (after recycling check)
  if (t.includes('金價') || t.includes('price') || t.includes('投資') || t.includes('etf') || t.includes('forecast') || t.includes('outlook') || slug.includes('gold-price') || slug.includes('invest')) {
    return [
      `你想短線操作（3個月內） → 黃金不適合短線頻繁進出`,
      `你需要立即變現 → <a href="${INTERNAL_LINKS.goldRecyclingTaipei}" style={{ color: '#b45309' }}>先看黃金回收流程</a>`,
      `你是完全新手、不了解黃金基本知識 → <a href="${INTERNAL_LINKS.goldBuyingGuide}" style={{ color: '#b45309' }}>從新手入門開始看</a>`,
    ];
  }

  // Gold buying / shop / guide articles
  if (t.includes('買黃金') || t.includes('銀樓') || t.includes('購買') || t.includes('buy') || t.includes('shop') || t.includes('新手') || slug.includes('buy') || slug.includes('guide') || slug.includes('shop')) {
    return [
      `你想要即時黃金報價 → <a href="${INTERNAL_LINKS.dailyGoldPrice}" style={{ color: '#b45309' }}>直接看今日金價</a>`,
      `你已經是黃金老手，熟悉所有術語 → 本文偏向基礎說明`,
      `你想賣黃金而非買 → <a href="${INTERNAL_LINKS.goldRecyclingTaipei}" style={{ color: '#b45309' }}>台北黃金回收說明</a>`,
    ];
  }

  // Gold purity / testing / identification articles
  if (t.includes('純度') || t.includes('成色') || t.includes('鑑定') || t.includes('purity') || t.includes('testing') || t.includes('identification') || slug.includes('purity') || slug.includes('apprais') || slug.includes('identif')) {
    return [
      `你只想查今天金價 → <a href="${INTERNAL_LINKS.dailyGoldPrice}" style={{ color: '#b45309' }}>直接看今日金價</a>`,
      `你想知道如何賣黃金 → <a href="${INTERNAL_LINKS.goldRecyclingTaipei}" style={{ color: '#b45309' }}>黃金回收完整流程</a>`,
      `你的黃金是K金 → <a href="${INTERNAL_LINKS.karatGoldGuide}" style={{ color: '#b45309' }}>K金說明與回收</a>`,
    ];
  }

  // Platinum articles
  if (t.includes('鉑金') || t.includes('白金') || t.includes('platinum') || slug.includes('platinum')) {
    return [
      `你想查黃金（非鉑金）價格 → <a href="${INTERNAL_LINKS.dailyGoldPrice}" style={{ color: '#b45309' }}>直接看今日金價</a>`,
      `你已熟悉貴金屬差異，只想看報價 → 本文偏向完整比較說明`,
      `你想回收黃金飾品 → <a href="${INTERNAL_LINKS.goldRecyclingTaipei}" style={{ color: '#b45309' }}>台北黃金回收說明</a>`,
    ];
  }

  // Silver articles
  if (t.includes('銀') || t.includes('silver') || slug.includes('silver')) {
    return [
      `你想查黃金（非白銀）價格 → <a href="${INTERNAL_LINKS.dailyGoldPrice}" style={{ color: '#b45309' }}>直接看今日金價</a>`,
      `你想了解黃金回收 → <a href="${INTERNAL_LINKS.goldRecyclingTaipei}" style={{ color: '#b45309' }}>台北黃金回收說明</a>`,
      `你已經確定要賣白銀，只需要報價 → 本文含完整說明，直接跳到報價段落`,
    ];
  }

  // Wedding / gift / cultural / tradition articles
  if (t.includes('婚') || t.includes('禮') || t.includes('wedding') || t.includes('gift') || t.includes('傳統') || t.includes('文化') || t.includes('birthday') || slug.includes('wedding') || slug.includes('gift') || slug.includes('culture') || slug.includes('tradition') || slug.includes('birthday')) {
    return [
      `你想要即時黃金報價 → <a href="${INTERNAL_LINKS.dailyGoldPrice}" style={{ color: '#b45309' }}>直接看今日金價</a>`,
      `你只想賣金、不想了解文化脈絡 → <a href="${INTERNAL_LINKS.goldRecyclingTaipei}" style={{ color: '#b45309' }}>台北黃金回收說明</a>`,
      `你對黃金完全陌生 → <a href="${INTERNAL_LINKS.goldBuyingGuide}" style={{ color: '#b45309' }}>新手買金入門</a>`,
    ];
  }

  // Tax / legal / ID / inheritance articles
  if (t.includes('稅') || t.includes('遺產') || t.includes('繼承') || t.includes('身分') || t.includes('tax') || t.includes('legal') || t.includes('inheritance') || slug.includes('tax') || slug.includes('inherit') || slug.includes('id-require')) {
    return [
      `你只想快速查今天金價 → <a href="${INTERNAL_LINKS.dailyGoldPrice}" style={{ color: '#b45309' }}>直接看今日金價</a>`,
      `你只是好奇，短期內不打算賣黃金 → 本文以實務操作為主`,
      `你想了解一般回收流程 → <a href="${INTERNAL_LINKS.goldRecyclingTaipei}" style={{ color: '#b45309' }}>台北黃金回收完整流程</a>`,
    ];
  }

  // Gold measurement / weight / converter articles
  if (t.includes('錢') || t.includes('兩') || t.includes('公克') || t.includes('換算') || t.includes('unit') || t.includes('weight') || t.includes('converter') || slug.includes('qian') || slug.includes('liang') || slug.includes('gram') || slug.includes('weight') || slug.includes('measurement') || slug.includes('converter')) {
    return [
      `你已熟悉台灣黃金計重單位，只想查報價 → <a href="${INTERNAL_LINKS.dailyGoldPrice}" style={{ color: '#b45309' }}>直接看今日金價</a>`,
      `你想了解如何賣黃金 → <a href="${INTERNAL_LINKS.goldRecyclingTaipei}" style={{ color: '#b45309' }}>台北黃金回收說明</a>`,
      `你的黃金是K金 → <a href="${INTERNAL_LINKS.karatGoldGuide}" style={{ color: '#b45309' }}>K金說明與計算</a>`,
    ];
  }

  // Default fallback bullets
  return [
    `你想要即時黃金報價 → <a href="${INTERNAL_LINKS.dailyGoldPrice}" style={{ color: '#b45309' }}>直接看今日金價</a>`,
    `你想了解如何回收賣出黃金 → <a href="${INTERNAL_LINKS.goldRecyclingTaipei}" style={{ color: '#b45309' }}>台北黃金回收說明</a>`,
    `你是完全新手 → <a href="${INTERNAL_LINKS.goldBuyingGuide}" style={{ color: '#b45309' }}>新手買金入門</a>`,
  ];
}

/**
 * Build the JSX string for the "Not For You" block.
 */
function buildNotForYouBlock(bullets) {
  const liItems = bullets.map(b => `        <li>${b}</li>`).join('\n');
  return `
      <div style={{ background: '#fff3f3', border: '1px solid #fca5a5', borderRadius: '8px', padding: '16px 20px', margin: '24px 0' }}>
        <strong style={{ color: '#dc2626' }}>這篇不適合你，如果…</strong>
        <ul style={{ margin: '8px 0 0', paddingLeft: '20px', color: '#374151' }}>
${liItems}
        </ul>
      </div>`;
}

/**
 * Find the position right after the closing tag of the yellow summary box,
 * or after the first </h1> tag.
 * Returns the index in content where we should insert the block.
 */
function findInsertPosition(content) {
  // Look for the yellow summary box closing </div>
  // The box has background: '#fffbeb' or '#fef3c7' or borderLeft: '4px solid #f59e0b'
  // Strategy: find the div with these markers, then find its closing </div>

  const summaryPatterns = [
    /#fffbeb/,
    /#fef3c7/,
    /borderLeft.*?#f59e0b/,
    /border.*?#f59e0b/,
    /background.*?#fffde7/,
  ];

  // Find the start of the summary box div
  let summaryDivStart = -1;
  for (const pattern of summaryPatterns) {
    const match = content.match(pattern);
    if (match && match.index !== undefined) {
      // Find the opening <div> before this match
      const beforeMatch = content.lastIndexOf('<div', match.index);
      if (beforeMatch !== -1) {
        summaryDivStart = beforeMatch;
        break;
      }
    }
  }

  if (summaryDivStart !== -1) {
    // Find the matching closing </div> by counting nesting
    let depth = 0;
    let i = summaryDivStart;
    while (i < content.length) {
      if (content.startsWith('<div', i)) {
        depth++;
        i += 4;
      } else if (content.startsWith('</div>', i)) {
        depth--;
        if (depth === 0) {
          // Found closing tag, insert after it
          return i + 6; // length of </div>
        }
        i += 6;
      } else {
        i++;
      }
    }
  }

  // Fallback: insert after the first </h1>
  const h1CloseIdx = content.indexOf('</h1>');
  if (h1CloseIdx !== -1) {
    return h1CloseIdx + 5;
  }

  return -1;
}

/**
 * Extract metadata (title and description) from file content.
 */
function extractMetadata(content) {
  const titleMatch = content.match(/title:\s*['"`]([^'"`]+)['"`]/);
  const descMatch = content.match(/description:\s*['"`]([^'"`]+)['"`]/);
  return {
    title: titleMatch ? titleMatch[1] : '',
    description: descMatch ? descMatch[1] : '',
  };
}

/**
 * Strip an existing "Not For You" block from content (for re-processing).
 */
function stripNotForYouBlock(content) {
  // The block starts with a <div style={{ background: '#fff3f3'
  // and ends with </div>
  const startMarker = "<div style={{ background: '#fff3f3'";
  const start = content.indexOf(startMarker);
  if (start === -1) return content;

  // Find matching </div>
  let depth = 0;
  let i = start;
  while (i < content.length) {
    if (content.startsWith('<div', i)) {
      depth++;
      i += 4;
    } else if (content.startsWith('</div>', i)) {
      depth--;
      if (depth === 0) {
        const end = i + 6;
        // Also strip surrounding newlines
        const before = content.slice(0, start).replace(/\n+$/, '\n');
        const after = content.slice(end).replace(/^\n+/, '\n');
        return before + after;
      }
      i += 6;
    } else {
      i++;
    }
  }
  return content;
}

// --- Main ---
const forceReprocess = process.argv.includes('--force');
const entries = fs.readdirSync(BLOG_DIR);
let processed = 0;
let skipped = 0;
let noPosition = 0;

for (const entry of entries) {
  const entryPath = path.join(BLOG_DIR, entry);
  const stat = fs.statSync(entryPath);
  if (!stat.isDirectory()) continue;

  const pagePath = path.join(entryPath, 'page.tsx');
  if (!fs.existsSync(pagePath)) continue;

  let content = fs.readFileSync(pagePath, 'utf8');

  // Skip if already has the block (unless force mode)
  if (content.includes('這篇不適合你')) {
    if (!forceReprocess) {
      skipped++;
      continue;
    }
    // Strip existing block for re-processing
    content = stripNotForYouBlock(content);
  }

  const { title, description } = extractMetadata(content);
  const bullets = generateBullets(entry, title, description);
  const block = buildNotForYouBlock(bullets);

  const insertPos = findInsertPosition(content);
  if (insertPos === -1) {
    console.warn(`[WARN] Could not find insert position for: ${entry}`);
    noPosition++;
    continue;
  }

  const newContent = content.slice(0, insertPos) + '\n' + block + '\n' + content.slice(insertPos);
  fs.writeFileSync(pagePath, newContent, 'utf8');
  processed++;
  console.log(`[OK] ${entry}`);
}

console.log(`\nDone. Processed: ${processed}, Already had block: ${skipped}, No position found: ${noPosition}`);
