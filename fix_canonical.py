import os, re

blog_dir = r"C:\Users\user\.openclaw\workspace\gold-web-v2\my-gold-price\app\blog"
base_url = "https://www.gold-tw.com"
count = 0

for slug in os.listdir(blog_dir):
    fpath = os.path.join(blog_dir, slug, "page.tsx")
    if not os.path.exists(fpath):
        continue
    with open(fpath, "r", encoding="utf-8") as f:
        content = f.read()

    # Skip if already has alternates/canonical
    if "alternates" in content:
        continue

    canonical = f"{base_url}/blog/{slug}"

    # Add alternates to existing metadata object
    # Find the closing }; of metadata and insert before it
    old = "export const metadata: Metadata = {"
    if old not in content:
        continue

    # Find keywords line and add alternates after it
    # Pattern: find the metadata object and add alternates before closing };
    new = re.sub(
        r"(export const metadata: Metadata = \{)(.*?)(^\};)",
        lambda m: m.group(1) + m.group(2) + f"  alternates: {{\n    canonical: '{canonical}',\n  }},\n" + m.group(3),
        content,
        flags=re.DOTALL | re.MULTILINE
    )

    if new != content:
        with open(fpath, "w", encoding="utf-8") as f:
            f.write(new)
        count += 1

print(f"Added canonical to {count} files")
