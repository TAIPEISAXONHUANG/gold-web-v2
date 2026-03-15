#!/usr/bin/env python3
import os
import re

blog_dir = r"C:\Users\user\.openclaw\workspace\gold-web-v2\my-gold-price\app\blog"
updated = 0
skipped = 0
errors = []

for root, dirs, files in os.walk(blog_dir):
    for fname in files:
        if fname != "page.tsx":
            continue
        filepath = os.path.join(root, fname)
        
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Skip if file is empty or too small
        if len(content) < 100:
            errors.append(f"EMPTY: {filepath}")
            continue
        
        # Skip if already has dateModified
        if '"dateModified"' in content:
            skipped += 1
            continue
        
        # Add dateModified after datePublished
        if '"datePublished"' in content:
            new_content = re.sub(
                r'("datePublished":\s*"[^"]*")',
                r'\1,\n              "dateModified": "2026-03-16"',
                content,
                count=1
            )
            
            if new_content != content:
                with open(filepath, 'w', encoding='utf-8') as f:
                    f.write(new_content)
                updated += 1
                slug = os.path.basename(root)
                print(f"Updated: {slug}")
        else:
            # No schema at all - thin articles, skip for now
            slug = os.path.basename(root)
            print(f"No schema: {slug}")

print(f"\nDone! Updated: {updated}, Skipped (already ok): {skipped}")
if errors:
    print(f"Errors: {errors}")
