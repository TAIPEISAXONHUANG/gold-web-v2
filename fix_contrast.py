import re

path = r'C:\Users\user\.openclaw\workspace-engineer\gold-web-v2\my-gold-price\app\ClientPage.tsx'
with open(path, encoding='utf-8') as f:
    content = f.read()

replacements = [
    ('text-gray-400 text-xs">-<', 'text-gray-600 text-xs">-<'),
    ('"table-cell text-xs font-mono text-gray-500"', '"table-cell text-xs font-mono text-gray-600"'),
    ('"table-cell text-slate-500"', '"table-cell text-slate-600"'),
    ('"table-cell text-gray-500"', '"table-cell text-gray-600"'),
    ('text-gray-400 py-10 border-t border-gray-800 text-center text-xs', 'text-gray-300 py-10 border-t border-gray-800 text-center text-xs'),
    ('"text-xs text-gray-500 mt-1"', '"text-xs text-gray-600 mt-1"'),
]

for old, new in replacements:
    count = content.count(old)
    content = content.replace(old, new)
    print(f'{count}x replaced: {old[:60]}')

with open(path, 'w', encoding='utf-8', newline='\n') as f:
    f.write(content)
print('Done - file saved as UTF-8')
