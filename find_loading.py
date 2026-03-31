path = r'C:\Users\user\.openclaw\workspace-engineer\gold-web-v2\my-gold-price\app\ClientPage.tsx'
with open(path, encoding='utf-8') as f:
    lines = f.readlines()

for i, line in enumerate(lines):
    if 'loading' in line.lower() or 'skeleton' in line.lower() or 'animate-pulse' in line.lower() or 'gray-200' in line or 'gray-300' in line:
        print(f"{i+1}: {line.rstrip()[:120]}")
