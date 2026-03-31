path = r'C:\Users\user\.openclaw\workspace-engineer\gold-web-v2\my-gold-price\app\ClientPage.tsx'
with open(path, encoding='utf-8') as f:
    lines = f.readlines()

# show lines 18-60
for i, line in enumerate(lines[17:65], start=18):
    print(f"{i}: {line.rstrip()[:100]}")
