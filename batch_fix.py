#!/usr/bin/env python3
"""
Batch fixes for gold-web-v2 blog articles.
Run from: C:/Users/user/gold-web-v2/my-gold-price
"""

import os
import re
import subprocess
import glob

BLOG_DIR = "C:/Users/user/gold-web-v2/my-gold-price/app/blog"
LAYOUT_FILE = "C:/Users/user/gold-web-v2/my-gold-price/app/layout.tsx"
REPO_DIR = "C:/Users/user/gold-web-v2/my-gold-price"

stats = {
    "fix1_author_json": 0,
    "fix1_author_display": 0,
    "fix2_og_times": 0,
    "fix3_ext_links": 0,
    "fix4_lastmodified": 0,
    "fix5_layout": 0,
    "files_changed": set(),
    "errors": [],
}


def get_git_date(filepath):
    """Get the last git commit date for a file."""
    try:
        rel_path = os.path.relpath(filepath, REPO_DIR).replace("\\", "/")
        result = subprocess.run(
            ["git", "log", "--follow", "-1", "--format=%Y-%m-%d", "--", rel_path],
            cwd=REPO_DIR,
            capture_output=True,
            text=True,
            timeout=10,
        )
        date = result.stdout.strip()
        return date if date else None
    except Exception as e:
        return None


def fix_file(filepath):
    """Apply all fixes to a single file."""
    with open(filepath, "r", encoding="utf-8") as f:
        original = f.read()

    content = original

    # =========================================================
    # Fix 1a: Author name in JSON-LD schema (author field only)
    # We need to change "name": "巧品珠寶" when it's inside an "author" block
    # Pattern: "author": { ... "name": "巧品珠寶" ... }
    # We use a careful approach - find author blocks and replace name within them
    # =========================================================

    # Handle single-line author pattern (most common):
    # "author": { "@type": "Organization", "name": "巧品珠寶", ...}
    # Also multiline author blocks

    def replace_author_name(m):
        block = m.group(0)
        # Only replace "name": "巧品珠寶" to "name": "鑑定師L" within this author block
        new_block = re.sub(r'"name":\s*"巧品珠寶"', '"name": "鑑定師L"', block, count=1)
        return new_block

    # Single-line compact author: "author": { ... "name": "巧品珠寶"... }
    # Match "author": followed by opening brace to closing brace (non-greedy)
    # We need to handle both single-line and multi-line author blocks

    # Single-line: "author": { ... } on one line
    pattern_single = r'"author":\s*\{[^}]*"name":\s*"巧品珠寶"[^}]*\}'
    new_content = re.sub(pattern_single, replace_author_name, content)
    if new_content != content:
        count = len(re.findall(pattern_single, content))
        stats["fix1_author_json"] += count
        stats["files_changed"].add(filepath)
        content = new_content

    # Multi-line author block (with newlines inside)
    # "author": {\n  ...\n  "name": "巧品珠寶"\n  ...\n}
    pattern_multi = r'"author":\s*\{[^}]*?"name":\s*"巧品珠寶"[^}]*?\}'
    new_content = re.sub(pattern_multi, replace_author_name, content, flags=re.DOTALL)
    if new_content != content:
        # count new replacements
        count_before = content.count('"name": "巧品珠寶"')
        count_after = new_content.count('"name": "巧品珠寶"')
        replaced = count_before - count_after
        if replaced > 0:
            stats["fix1_author_json"] += replaced
            stats["files_changed"].add(filepath)
        content = new_content

    # =========================================================
    # Fix 1b: Display text 作者：巧品珠寶 → 作者：鑑定師L
    # =========================================================
    if "作者：巧品珠寶" in content:
        count = content.count("作者：巧品珠寶")
        content = content.replace("作者：巧品珠寶", "作者：鑑定師L")
        stats["fix1_author_display"] += count
        stats["files_changed"].add(filepath)

    if "作者:巧品珠寶" in content:
        count = content.count("作者:巧品珠寶")
        content = content.replace("作者:巧品珠寶", "作者:鑑定師L")
        stats["fix1_author_display"] += count
        stats["files_changed"].add(filepath)

    # =========================================================
    # Fix 2: Add publishedTime and modifiedTime to openGraph
    # Only for files that have openGraph AND a datePublished value
    # =========================================================
    if "openGraph:" in content and "publishedTime" not in content:
        # Extract datePublished from the file
        date_match = re.search(r'"datePublished":\s*"(\d{4}-\d{2}-\d{2})"', content)
        if date_match:
            date_pub = date_match.group(1)

            # Find openGraph block and add type/publishedTime/modifiedTime
            # Pattern: openGraph: {\n ... type: 'article', \n ... } or without type
            # We look for the end of the openGraph block and add before closing

            # Check if type: 'article' already exists in openGraph
            # The openGraph block ends at a `}` that closes it
            # We'll find the openGraph: { ... } block

            def add_og_times(m):
                block = m.group(0)
                # If publishedTime already there, skip
                if "publishedTime" in block:
                    return block
                # Add publishedTime and modifiedTime before the closing }
                # Find last closing }
                insert_pos = block.rfind("}")
                if insert_pos == -1:
                    return block
                addition = f",\n    publishedTime: '{date_pub}',\n    modifiedTime: '{date_pub}'"
                return block[:insert_pos] + addition + block[insert_pos:]

            # Match openGraph: { ... } - handle nested objects by counting braces
            # Find openGraph start
            og_start = content.find("openGraph:")
            if og_start != -1:
                # Find the opening {
                brace_start = content.find("{", og_start)
                if brace_start != -1:
                    # Count braces to find matching closing brace
                    depth = 0
                    i = brace_start
                    while i < len(content):
                        if content[i] == "{":
                            depth += 1
                        elif content[i] == "}":
                            depth -= 1
                            if depth == 0:
                                brace_end = i
                                break
                        i += 1
                    else:
                        brace_end = None

                    if brace_end is not None:
                        og_block = content[brace_start:brace_end + 1]
                        if "publishedTime" not in og_block:
                            # Add before the last }
                            new_og = og_block[:-1] + f",\n    publishedTime: '{date_pub}',\n    modifiedTime: '{date_pub}'" + "}"
                            content = content[:brace_start] + new_og + content[brace_end + 1:]
                            stats["fix2_og_times"] += 1
                            stats["files_changed"].add(filepath)

    # =========================================================
    # Fix 3: Add rel="noopener noreferrer" to external links
    # Find <a href="http... that don't have noopener
    # =========================================================

    def add_rel_noopener(m):
        tag = m.group(0)
        # Skip if already has noopener
        if "noopener" in tag:
            return tag
        # Skip if it has rel= already
        if 'rel=' in tag:
            # Add noopener noreferrer to existing rel
            tag = re.sub(r'rel="([^"]*)"', r'rel="\1 noopener noreferrer"', tag)
            tag = re.sub(r"rel='([^']*)'", r"rel='\1 noopener noreferrer'", tag)
            return tag
        # Add rel attribute before the closing > or />
        # Find the end of the opening tag
        if tag.endswith("/>"):
            tag = tag[:-2] + ' rel="noopener noreferrer" />'
        elif tag.endswith(">"):
            tag = tag[:-1] + ' rel="noopener noreferrer">'
        return tag

    # Match <a href="https?://... potentially spanning to > but not across tags
    # We need to match the opening <a tag only
    external_link_pattern = r'<a\s+(?:[^>]*\s+)?href=["\']https?://[^"\']*["\'][^>]*>'

    new_content = re.sub(external_link_pattern, add_rel_noopener, content)
    if new_content != content:
        count = len(re.findall(external_link_pattern, content))
        # Count only those that don't have noopener yet
        without_noopener = len([m for m in re.finditer(external_link_pattern, content) if "noopener" not in m.group(0)])
        stats["fix3_ext_links"] += without_noopener
        stats["files_changed"].add(filepath)
        content = new_content

    # =========================================================
    # Fix 4: Update // lastModified: comments
    # (No files have this pattern based on grep, but handle anyway)
    # =========================================================
    lastmod_pattern = r'//\s*lastModified:\s*\d{4}-\d{2}-\d{2}'
    if re.search(lastmod_pattern, content):
        git_date = get_git_date(filepath)
        if git_date:
            new_content = re.sub(lastmod_pattern, f"// lastModified: {git_date}", content)
            if new_content != content:
                stats["fix4_lastmodified"] += 1
                stats["files_changed"].add(filepath)
                content = new_content

    # Write file if changed
    if content != original:
        with open(filepath, "w", encoding="utf-8") as f:
            f.write(content)

    return content != original


def fix_layout():
    """Fix 5: Add knowsAbout to Organization schema in layout.tsx."""
    with open(LAYOUT_FILE, "r", encoding="utf-8") as f:
        content = f.read()

    original = content

    # Check if knowsAbout already present
    if '"knowsAbout"' in content:
        print("  layout.tsx: knowsAbout already present, skipping")
        return

    knows_about = [
        "黃金投資", "黃金回收", "黃金鑑定", "K金鑑定",
        "鉑金飾品", "鑽石鑑定", "彩色寶石鑑定", "翡翠鑑定", "珠寶回收"
    ]

    # Find the Organization schema block
    # Look for "@type": "Organization" and "@id": .../#organization
    org_pattern = r'"@type":\s*"Organization"[^}]*"@id":\s*"https://www\.gold-tw\.com/#organization"'
    org_match = re.search(org_pattern, content, re.DOTALL)

    if not org_match:
        # Try alternative: find the block containing #organization
        print("  layout.tsx: Could not find Organization schema block by @id")
        # Try to find by looking for the comment before it
        fallback_search = '"@type": "Organization"'
        # Find the second occurrence (first is JewelryStore, second is Organization)
        first = content.find(fallback_search)
        second = content.find(fallback_search, first + 1) if first != -1 else -1
        if second == -1:
            print("  layout.tsx: Could not find Organization schema at all")
            stats["errors"].append("layout.tsx: Could not locate Organization schema")
            return

        # Find the closing of this JSON.stringify block
        # Look for "contactPoint" array end and then closing })
        # Instead, insert knowsAbout before "contactPoint"
        insert_marker = '"contactPoint":'
        insert_pos = content.find(insert_marker, second)
        if insert_pos == -1:
            print("  layout.tsx: Could not find contactPoint insertion point")
            stats["errors"].append("layout.tsx: Could not find contactPoint")
            return

        knows_json = '              "knowsAbout": ' + str(knows_about).replace("'", '"') + ',\n              '
        content = content[:insert_pos] + knows_json + content[insert_pos:]
    else:
        # Find contactPoint within the Organization schema
        # Navigate to find the right insertion point
        start = org_match.start()
        # Find contactPoint after Organization
        insert_marker = '"contactPoint":'
        insert_pos = content.find(insert_marker, start)
        if insert_pos == -1:
            print("  layout.tsx: Could not find contactPoint")
            stats["errors"].append("layout.tsx: Could not find contactPoint")
            return

        knows_list = '["' + '", "'.join(knows_about) + '"]'
        knows_json = f'              "knowsAbout": {knows_list},\n              '
        content = content[:insert_pos] + knows_json + content[insert_pos:]

    if content != original:
        with open(LAYOUT_FILE, "w", encoding="utf-8") as f:
            f.write(content)
        stats["fix5_layout"] = 1
        stats["files_changed"].add(LAYOUT_FILE)
        print("  layout.tsx: knowsAbout added successfully")
    else:
        print("  layout.tsx: No change made")


def main():
    # Get all blog page.tsx files
    blog_files = glob.glob(os.path.join(BLOG_DIR, "*/page.tsx"))
    blog_files.sort()

    print(f"Found {len(blog_files)} blog article files")
    print("Processing...")

    changed_count = 0
    for i, filepath in enumerate(blog_files):
        try:
            changed = fix_file(filepath)
            if changed:
                changed_count += 1
        except Exception as e:
            stats["errors"].append(f"{filepath}: {e}")
            print(f"  ERROR in {os.path.basename(os.path.dirname(filepath))}: {e}")

        if (i + 1) % 50 == 0:
            print(f"  Processed {i + 1}/{len(blog_files)}...")

    print(f"\nBlog files changed: {changed_count}/{len(blog_files)}")

    # Fix 5: layout.tsx
    print("\nApplying Fix 5: layout.tsx Organization schema...")
    fix_layout()

    # Summary
    print("\n" + "="*60)
    print("SUMMARY")
    print("="*60)
    print(f"Fix 1a - Author name in JSON-LD (schema): {stats['fix1_author_json']} occurrences changed")
    print(f"Fix 1b - Author display text: {stats['fix1_author_display']} occurrences changed")
    print(f"Fix 2  - OG publishedTime/modifiedTime added: {stats['fix2_og_times']} files")
    print(f"Fix 3  - External links rel=noopener added: {stats['fix3_ext_links']} links")
    print(f"Fix 4  - lastModified comments updated: {stats['fix4_lastmodified']} files")
    print(f"Fix 5  - Organization knowsAbout added: {stats['fix5_layout']} files")
    print(f"\nTotal unique files changed: {len(stats['files_changed'])}")

    if stats["errors"]:
        print(f"\nERRORS ({len(stats['errors'])}):")
        for e in stats["errors"]:
            print(f"  - {e}")


if __name__ == "__main__":
    main()
