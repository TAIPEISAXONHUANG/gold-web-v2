path = r'C:\Users\user\.openclaw\workspace-engineer\gold-web-v2\my-gold-price\app\ClientPage.tsx'
with open(path, encoding='utf-8') as f:
    content = f.read()

replacements = [
    # 「預估價值」label 在深灰背景上 gray-400 → gray-300
    ('"text-sm text-gray-400">', '"text-sm text-gray-300">'),
]

for old, new in replacements:
    count = content.count(old)
    content = content.replace(old, new)
    print(f'{count}x: {old}')

with open(path, 'w', encoding='utf-8', newline='\n') as f:
    f.write(content)
print('Done')
