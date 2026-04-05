#!/usr/bin/env node
/**
 * enrich-blogposting.mjs
 * Enriches existing BlogPosting JSON-LD in blog pages with missing AI-citation fields:
 * - mainEntityOfPage
 * - image
 * - publisher.logo
 * - inLanguage
 * - keywords (derived from headline)
 * - about
 */
import { readFileSync, writeFileSync } from 'fs'
import { glob } from 'glob'
import path from 'path'

const BLOG_DIR = path.join(process.cwd(), 'app/blog')
const BASE_URL = 'https://www.gold-tw.com'
const OG_IMAGE = 'https://www.gold-tw.com/og-image.webp'

const files = await glob(`${BLOG_DIR}/*/page.tsx`)
console.log(`Found ${files.length} blog pages`)

let updated = 0
let skipped = 0

for (const file of files) {
  const slug = path.basename(path.dirname(file))
  const pageUrl = `${BASE_URL}/blog/${slug}`
  let content = readFileSync(file, 'utf8')

  // Find BlogPosting schema - look for the JSON.stringify block
  const bpMatch = content.match(/'@type':\s*'BlogPosting'/)
  if (!bpMatch) {
    skipped++
    continue
  }

  // Check if already enriched (has mainEntityOfPage)
  if (content.includes('mainEntityOfPage')) {
    skipped++
    continue
  }

  // Extract headline for keywords
  const headlineMatch = content.match(/headline:\s*['"`]([^'"`]+)['"`]/)
  const headline = headlineMatch ? headlineMatch[1] : ''

  // Derive simple keywords from headline (split by common delimiters)
  const keywords = headline
    .replace(/[？?！!。，：:]/g, ' ')
    .split(/[\s　]+/)
    .filter(w => w.length >= 2)
    .slice(0, 6)
    .join(', ')

  // Fields to inject after dateModified line
  // We find the dateModified field and add new fields after it
  const enrichFields = `
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': '${pageUrl}',
        },
        image: {
          '@type': 'ImageObject',
          'url': '${OG_IMAGE}',
          'width': 1200,
          'height': 630,
        },
        publisher: {
          '@type': 'Organization',
          'name': '巧品珠寶',
          '@id': '${BASE_URL}/#organization',
          'logo': {
            '@type': 'ImageObject',
            'url': '${BASE_URL}/logo.webp',
            'width': 200,
            'height': 200,
          },
        },
        inLanguage: 'zh-TW',
        keywords: '黃金回收, 巧品珠寶, ${keywords}',
        about: { '@id': '${BASE_URL}/#business' },`

  // Inject after the last dateModified line in BlogPosting block
  // Strategy: find "dateModified: '..." and add after it
  const dateModifiedPattern = /(dateModified:\s*['"][^'"]+['"],?)/
  if (!dateModifiedPattern.test(content)) {
    // Try datePublished as fallback
    const datePublishedPattern = /(datePublished:\s*['"][^'"]+['"],?)/
    if (!datePublishedPattern.test(content)) {
      skipped++
      continue
    }
    content = content.replace(datePublishedPattern, `$1${enrichFields}`)
  } else {
    content = content.replace(dateModifiedPattern, `$1${enrichFields}`)
  }

  writeFileSync(file, content, 'utf8')
  updated++
  if (updated % 20 === 0) console.log(`  Updated ${updated} files...`)
}

console.log(`\nDone: ${updated} updated, ${skipped} skipped`)
