import os, re

blog_dir = r"C:\Users\user\.openclaw\workspace\gold-web-v2\my-gold-price\app\blog"
results = []

for slug in sorted(os.listdir(blog_dir)):
    fpath = os.path.join(blog_dir, slug, "page.tsx")
    if not os.path.exists(fpath):
        continue
    with open(fpath, "r", encoding="utf-8") as f:
        content = f.read()
    m = re.search(r"description: '([^']+)'", content)
    if m:
        desc = m.group(1)
        length = len(desc)
        if length < 100:
            flag = "SHORT"
        elif length > 160:
            flag = "LONG"
        else:
            flag = "OK"
        results.append((slug, length, flag, desc))
    else:
        results.append((slug, 0, "MISSING", ""))

short = [r for r in results if r[2] == "SHORT"]
ok = [r for r in results if r[2] == "OK"]
long_ = [r for r in results if r[2] == "LONG"]
missing = [r for r in results if r[2] == "MISSING"]

print(f"OK: {len(ok)} | Short: {len(short)} | Long: {len(long_)} | Missing: {len(missing)}")
print()
print("=== SHORT (need to expand) ===")
for r in short:
    print(f"[{r[1]}] {r[0]}")
    print(f"  -> {r[3]}")
    print()
