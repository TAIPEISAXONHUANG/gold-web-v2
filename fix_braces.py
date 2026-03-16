import os

blog_dir = r"C:\Users\user\.openclaw\workspace\gold-web-v2\my-gold-price\app\blog"
count = 0

for slug in os.listdir(blog_dir):
    fpath = os.path.join(blog_dir, slug, "page.tsx")
    if not os.path.exists(fpath):
        continue
    with open(fpath, "r", encoding="utf-8") as f:
        content = f.read()
    if "{{{{" not in content and "}}}}" not in content:
        continue
    new = content.replace("{{{{", "{{").replace("}}}}", "}}")
    if new != content:
        with open(fpath, "w", encoding="utf-8") as f:
            f.write(new)
        count += 1

print(f"Fixed: {count} files")
