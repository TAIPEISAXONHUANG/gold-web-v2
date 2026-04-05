#!/usr/bin/env python
"""
Fix SEO: add locale: 'zh_TW' and images to openGraph blocks in all blog page.tsx files.
"""

import os
import re

BLOG_DIR = r"C:\Users\user\.openclaw\workspace-engineer\gold-web-v2\my-gold-price\app\blog"

LOCALE_LINE = "    locale: 'zh_TW',"
IMAGES_LINE = "    images: [{ url: '/og-image.webp', width: 1200, height: 630, alt: '巧品珠寶' }],"

# For the blog index page (no openGraph block) — insert after keywords or description
OG_BLOCK_TEMPLATE = """  openGraph: {{
    locale: 'zh_TW',
    images: [{{ url: '/og-image.webp', width: 1200, height: 630, alt: '巧品珠寶' }}],
  }},"""

modified = 0
skipped = 0
errors = []

def fix_file(filepath):
    global modified, skipped

    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    original = content

    has_og = 'openGraph:' in content
    has_locale = "locale:" in content and "zh_TW" in content
    has_images = re.search(r'images\s*:', content) is not None

    if has_og:
        # Already has openGraph block
        # Check if locale is already in the openGraph block specifically
        og_match = re.search(r'openGraph:\s*\{', content)
        if not og_match:
            errors.append(f"Could not find openGraph block in: {filepath}")
            return

        # Find the openGraph block boundaries
        og_start = og_match.start()
        # Find matching closing brace for the openGraph block
        brace_count = 0
        og_block_start = content.index('{', og_start)
        og_block_end = -1
        for i in range(og_block_start, len(content)):
            if content[i] == '{':
                brace_count += 1
            elif content[i] == '}':
                brace_count -= 1
                if brace_count == 0:
                    og_block_end = i
                    break

        if og_block_end == -1:
            errors.append(f"Could not find end of openGraph block in: {filepath}")
            return

        og_block = content[og_block_start:og_block_end+1]
        og_inner = content[og_block_start+1:og_block_end]  # content between { and }

        # Check locale presence within openGraph block specifically
        og_has_locale = "locale:" in og_block and "zh_TW" in og_block
        og_has_images = bool(re.search(r'images\s*:', og_block))

        if og_has_locale and og_has_images:
            skipped += 1
            return

        new_og_inner = og_inner

        # Add locale as first property if missing
        if not og_has_locale:
            # Find the first property in the block (first non-whitespace after opening brace)
            # Insert locale as the first line inside the block
            # Find position right after the opening brace + newline
            first_prop_match = re.search(r'\n(\s+\S)', og_inner)
            if first_prop_match:
                insert_pos = first_prop_match.start() + 1  # after the \n
                indent = re.match(r'(\s+)', first_prop_match.group(0).lstrip('\n')).group(1)
                locale_insertion = f"    locale: 'zh_TW',\n"
                new_og_inner = og_inner[:insert_pos] + locale_insertion + og_inner[insert_pos:]
            else:
                # fallback: prepend
                new_og_inner = f"\n    locale: 'zh_TW',\n" + new_og_inner

        # Add images before closing brace if missing
        if not og_has_images:
            # Find the last line before the closing brace
            # The closing brace in content is at og_block_end
            # In new_og_inner, find the position before the closing }
            # We just append before the end
            # Strip trailing whitespace from og_inner to find insertion point
            rstrip_inner = new_og_inner.rstrip()
            trailing = new_og_inner[len(rstrip_inner):]
            new_og_inner = rstrip_inner + "\n" + IMAGES_LINE + "\n" + trailing

        new_og_block = '{' + new_og_inner + '}'
        content = content[:og_block_start] + new_og_block + content[og_block_end+1:]

    else:
        # No openGraph block — this is the blog index page
        # Insert after keywords: line, or after description: line
        keywords_match = re.search(r'(  keywords:[^\n]+\n)', content)
        alternates_match = re.search(r'(  alternates:\s*\{[^}]+\},?\n)', content, re.DOTALL)

        if alternates_match:
            # Insert after alternates block
            insert_after = alternates_match.end()
            og_insert = OG_BLOCK_TEMPLATE.format() + "\n"
            content = content[:insert_after] + og_insert + content[insert_after:]
        elif keywords_match:
            insert_after = keywords_match.end()
            og_insert = OG_BLOCK_TEMPLATE.format() + "\n"
            content = content[:insert_after] + og_insert + content[insert_after:]
        else:
            # After description
            desc_match = re.search(r'(  description:[^\n]+\n)', content)
            if desc_match:
                insert_after = desc_match.end()
                og_insert = OG_BLOCK_TEMPLATE.format() + "\n"
                content = content[:insert_after] + og_insert + content[insert_after:]
            else:
                errors.append(f"Could not find insertion point in: {filepath}")
                return

    if content != original:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        modified += 1
        print(f"  MODIFIED: {os.path.relpath(filepath, BLOG_DIR)}")
    else:
        skipped += 1

# Walk all blog subdirectories
for entry in sorted(os.listdir(BLOG_DIR)):
    subdir = os.path.join(BLOG_DIR, entry)
    if os.path.isdir(subdir):
        page = os.path.join(subdir, 'page.tsx')
        if os.path.exists(page):
            fix_file(page)

# Also handle blog/page.tsx (index)
blog_index = os.path.join(BLOG_DIR, 'page.tsx')
if os.path.exists(blog_index):
    fix_file(blog_index)

print(f"\n=== SUMMARY ===")
print(f"Modified: {modified}")
print(f"Already OK (skipped): {skipped}")
if errors:
    print(f"ERRORS ({len(errors)}):")
    for e in errors:
        print(f"  {e}")
