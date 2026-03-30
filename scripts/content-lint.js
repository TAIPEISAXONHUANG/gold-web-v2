#!/usr/bin/env node
'use strict';

const fs = require('fs');
const path = require('path');

// ---------------------------------------------------------------------------
// Config
// ---------------------------------------------------------------------------
const ROOT = path.resolve(__dirname, '..');
const BLOG_DIR = path.join(ROOT, 'my-gold-price', 'app', 'blog');

// ---------------------------------------------------------------------------
// CLI flags
// ---------------------------------------------------------------------------
const args = process.argv.slice(2);
if (args.includes('--fix')) {
  console.log('--fix not yet implemented');
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/**
 * Discover all blog article page.tsx files (one-level subdirectories only).
 * Skips the blog index (app/blog/page.tsx).
 */
function discoverArticles() {
  const entries = fs.readdirSync(BLOG_DIR, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    if (!entry.isDirectory()) continue;
    const candidate = path.join(BLOG_DIR, entry.name, 'page.tsx');
    if (fs.existsSync(candidate)) {
      files.push(candidate);
    }
  }
  return files.sort();
}

/**
 * Extract all JSON-LD objects from a TSX source string.
 *
 * Supports two common patterns found in the codebase:
 *   1. JSON.stringify({...}) with a literal object
 *   2. JSON.stringify({...mainEntity: faqs.map(...)}) — dynamic content
 *
 * For pattern 1 we try to parse the object directly.
 * For pattern 2 (contains expressions like faqs.map) we do our best to
 * detect the @type and the presence of fields via regex.
 *
 * Returns an array of { raw: string, parsed: object|null, type: string|null }
 */
function extractJsonLdBlocks(source) {
  const blocks = [];

  // Match <script type="application/ld+json" ... dangerouslySetInnerHTML={{ __html: ... }} />
  // We find each script block and grab everything between the opening tag and the closing />
  const scriptRegex = /<script[\s\S]*?type\s*=\s*["']application\/ld\+json["'][\s\S]*?\/>/g;
  let match;
  while ((match = scriptRegex.exec(source)) !== null) {
    const block = match[0];
    blocks.push(block);
  }

  const results = [];
  for (const block of blocks) {
    // Try to extract the JSON content from JSON.stringify(...)
    const stringifyIdx = block.indexOf('JSON.stringify(');
    if (stringifyIdx === -1) continue;

    const start = stringifyIdx + 'JSON.stringify('.length;
    // Find the matching closing paren by counting braces/parens
    let depth = 0;
    let jsonStart = -1;
    let jsonEnd = -1;
    for (let i = start; i < block.length; i++) {
      const ch = block[i];
      if (ch === '{' || ch === '[') {
        if (jsonStart === -1) jsonStart = i;
        depth++;
      } else if (ch === '}' || ch === ']') {
        depth--;
        if (depth === 0) {
          jsonEnd = i + 1;
          break;
        }
      }
    }

    if (jsonStart === -1 || jsonEnd === -1) continue;

    const raw = block.substring(jsonStart, jsonEnd);

    // Try to parse as JSON (works for literal objects with quoted keys)
    let parsed = null;
    try {
      // Normalise single quotes to double quotes for JSON parsing
      // and handle unquoted keys like  mainEntity:  ->  "mainEntity":
      let jsonCandidate = raw;
      // Replace single-quoted keys/values with double-quoted
      // This is a rough transform; works for the patterns in this codebase
      jsonCandidate = jsonCandidate
        .replace(/'/g, '"');
      // Add quotes around unquoted keys:  mainEntity: -> "mainEntity":
      jsonCandidate = jsonCandidate
        .replace(/(\{|,)\s*([a-zA-Z_@][a-zA-Z0-9_@]*)\s*:/g, '$1 "$2":');
      parsed = JSON.parse(jsonCandidate);
    } catch {
      // Could not parse — likely contains JS expressions like faqs.map(...)
      parsed = null;
    }

    // Determine @type from parsed or raw
    let schemaType = null;
    if (parsed) {
      schemaType = parsed['@type'] || null;
    }
    if (!schemaType) {
      const typeMatch = raw.match(/["']@type["']\s*:\s*["']([^"']+)["']/);
      if (typeMatch) schemaType = typeMatch[1];
    }

    results.push({ raw, parsed, type: schemaType });
  }

  return results;
}

/**
 * Check if a value is non-empty. Handles strings, objects, arrays.
 */
function isNonEmpty(val) {
  if (val === undefined || val === null) return false;
  if (typeof val === 'string') return val.trim().length > 0;
  if (Array.isArray(val)) return val.length > 0;
  if (typeof val === 'object') return Object.keys(val).length > 0;
  return true;
}

/**
 * Check a raw block string for presence of a field pattern (fallback when
 * JSON parsing fails, e.g. when the block contains JS expressions).
 */
function rawHasField(raw, fieldName) {
  // Match "fieldName" or 'fieldName' or bare fieldName followed by :
  const pattern = new RegExp(`["']?${fieldName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}["']?\\s*:`);
  return pattern.test(raw);
}

/**
 * Check if the source has at least one internal link (href starting with /).
 */
function hasInternalLink(source) {
  // href="/..." or href={"/..." or href={`/...
  return /href\s*=\s*["']\//. test(source) ||
         /href\s*=\s*\{\s*["'`]\//.test(source);
}

// ---------------------------------------------------------------------------
// Main lint logic
// ---------------------------------------------------------------------------
function lintFile(filePath) {
  const source = fs.readFileSync(filePath, 'utf-8');
  const relPath = path.relative(ROOT, filePath).replace(/\\/g, '/');
  const issues = [];

  const jsonLdBlocks = extractJsonLdBlocks(source);

  // Filter to only BlogPosting, FAQPage types (skip BreadcrumbList, HowTo, etc.)
  const contentBlocks = jsonLdBlocks.filter(
    (b) => b.type === 'BlogPosting' || b.type === 'FAQPage'
  );

  if (contentBlocks.length === 0) {
    issues.push('no BlogPosting or FAQPage JSON-LD schema found');
    // Still check internal links
    if (!hasInternalLink(source)) {
      issues.push('no internal link found (href starting with /)');
    }
    return { relPath, issues };
  }

  let hasAuthorAnywhere = false;
  let hasDateModifiedAnywhere = false;

  for (const block of contentBlocks) {
    const { raw, parsed, type } = block;

    // --- BlogPosting checks ---
    if (type === 'BlogPosting') {
      const requiredFields = ['headline', 'description', 'datePublished', 'dateModified'];

      if (parsed) {
        // Check author
        const author = parsed.author;
        if (!isNonEmpty(author)) {
          issues.push('BlogPosting: missing or empty "author"');
        } else if (typeof author === 'object' && !isNonEmpty(author.name)) {
          issues.push('BlogPosting: author.name is missing or empty');
        } else {
          hasAuthorAnywhere = true;
        }

        // Check other required fields
        for (const field of requiredFields) {
          if (!isNonEmpty(parsed[field])) {
            issues.push(`BlogPosting: missing or empty "${field}"`);
          }
        }

        if (isNonEmpty(parsed.dateModified)) {
          hasDateModifiedAnywhere = true;
        }
      } else {
        // Fallback: check raw string for field presence
        if (!rawHasField(raw, 'author')) {
          issues.push('BlogPosting: missing "author" field');
        } else {
          hasAuthorAnywhere = true;
        }

        for (const field of requiredFields) {
          if (!rawHasField(raw, field)) {
            issues.push(`BlogPosting: missing "${field}" field`);
          }
        }

        if (rawHasField(raw, 'dateModified')) {
          hasDateModifiedAnywhere = true;
        }
      }
    }

    // --- FAQPage checks ---
    if (type === 'FAQPage') {
      if (parsed) {
        const mainEntity = parsed.mainEntity;
        if (!Array.isArray(mainEntity) || mainEntity.length === 0) {
          issues.push('FAQPage: mainEntity is missing or has no Questions');
        } else {
          // Verify at least one item is a Question
          const hasQuestion = mainEntity.some(
            (item) => item['@type'] === 'Question'
          );
          if (!hasQuestion) {
            issues.push('FAQPage: mainEntity has no items with @type Question');
          }
        }

        // Check author if present
        if (isNonEmpty(parsed.author)) {
          hasAuthorAnywhere = true;
          if (typeof parsed.author === 'object' && !isNonEmpty(parsed.author.name)) {
            issues.push('FAQPage: author.name is missing or empty');
          }
        }

        if (isNonEmpty(parsed.dateModified)) {
          hasDateModifiedAnywhere = true;
        }
      } else {
        // Fallback: raw checks
        // Check for mainEntity with Questions — look for @type.*Question pattern
        if (!rawHasField(raw, 'mainEntity')) {
          // Check if it uses an expression like faqs.map
          if (!/mainEntity\s*:/.test(raw) && !/faqs\.map/.test(raw)) {
            issues.push('FAQPage: mainEntity is missing');
          }
        }

        // For dynamic content (faqs.map), check the source file for the faqs array
        if (/faqs\.map/.test(raw)) {
          // The faqs array should be defined elsewhere in the source
          if (!/const\s+faqs\s*=\s*\[/.test(source)) {
            issues.push('FAQPage: references faqs.map but no faqs array found');
          }
        }

        if (rawHasField(raw, 'author')) {
          hasAuthorAnywhere = true;
        }
        if (rawHasField(raw, 'dateModified')) {
          hasDateModifiedAnywhere = true;
        }
      }
    }
  }

  // Global checks across all content blocks
  if (!hasAuthorAnywhere) {
    // Only add if we haven't already flagged specific author issues
    const hasAuthorIssue = issues.some((i) => i.includes('author'));
    if (!hasAuthorIssue) {
      issues.push('no "author" field found in any content schema');
    }
  }

  if (!hasDateModifiedAnywhere) {
    const hasDateModifiedIssue = issues.some((i) => i.includes('dateModified'));
    if (!hasDateModifiedIssue) {
      issues.push('no "dateModified" field found in any content schema');
    }
  }

  // Internal link check
  if (!hasInternalLink(source)) {
    issues.push('no internal link found (href starting with /)');
  }

  return { relPath, issues };
}

// ---------------------------------------------------------------------------
// Run
// ---------------------------------------------------------------------------
function main() {
  const articles = discoverArticles();
  console.log(`Scanning ${articles.length} blog articles...\n`);

  let totalIssues = 0;
  const results = [];

  for (const filePath of articles) {
    const result = lintFile(filePath);
    results.push(result);
    if (result.issues.length > 0) {
      totalIssues += result.issues.length;
    }
  }

  // Print results
  for (const { relPath, issues } of results) {
    if (issues.length > 0) {
      console.log(`FAIL  ${relPath}`);
      for (const issue of issues) {
        console.log(`      - ${issue}`);
      }
      console.log();
    }
  }

  // Summary
  const filesWithIssues = results.filter((r) => r.issues.length > 0).length;
  console.log('---');
  console.log(
    `${articles.length} files checked, ${totalIssues} issues found` +
      (filesWithIssues > 0 ? ` (in ${filesWithIssues} files)` : '')
  );

  process.exit(totalIssues > 0 ? 1 : 0);
}

main();
