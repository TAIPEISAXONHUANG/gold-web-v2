import os, re

blog_dir = r"C:\Users\user\.openclaw\workspace\gold-web-v2\my-gold-price\app\blog"
new_img = "https://wsrv.nl/?url=https://drive.google.com/uc?id=1ASz1v5ZBQ-WV572r-BC4gZRuraywgKKv&w=1200&output=webp&q=80"
count = 0

for slug in os.listdir(blog_dir):
    fpath = os.path.join(blog_dir, slug, "page.tsx")
    if not os.path.exists(fpath):
        continue
    with open(fpath, "r", encoding="utf-8") as f:
        content = f.read()
    new = content.replace(
        '"url": "https://www.gold-tw.com/images/og-image.jpg"',
        f'"url": "{new_img}"'
    )
    if new != content:
        with open(fpath, "w", encoding="utf-8") as f:
            f.write(new)
        count += 1

print(f"Fixed image URL in {count} blog files")
