import os, re

blog_dir = r"C:\Users\user\.openclaw\workspace\gold-web-v2\my-gold-price\app\blog"
count = 0

for slug in os.listdir(blog_dir):
    fpath = os.path.join(blog_dir, slug, "page.tsx")
    if not os.path.exists(fpath):
        continue
    with open(fpath, "r", encoding="utf-8") as f:
        content = f.read()
    new = content
    new = re.sub(r'"datePublished":\s*"2026-03-15"', '"datePublished": "2026-03-15T00:00:00+08:00"', new)
    new = re.sub(r'"dateModified":\s*"2026-03-16"', '"dateModified": "2026-03-16T00:00:00+08:00"', new)
    if new != content:
        with open(fpath, "w", encoding="utf-8") as f:
            f.write(new)
        count += 1

print(f"Total fixed: {count} files")
