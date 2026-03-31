path = r'C:\Users\user\.openclaw\workspace-engineer\gold-web-v2\my-gold-price\app\ClientPage.tsx'
with open(path, encoding='utf-8') as f:
    lines = f.readlines()

for i, line in enumerate(lines):
    if 'hero' in line.lower() or 'hero-img' in line.lower():
        start = max(0, i-2)
        end = min(len(lines), i+3)
        for j in range(start, end):
            print(f"{j+1}: {lines[j].rstrip()[:120]}")
        print('---')
