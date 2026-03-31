path = r'C:\Users\user\.openclaw\workspace-engineer\gold-web-v2\my-gold-price\app\ClientPage.tsx'
with open(path, encoding='utf-8') as f:
    content = f.read()

# aria-hidden={view !== 'home'} -> 靜態 aria-hidden="true"（hero 本身是裝飾圖）
old = '          aria-hidden={view !== \'home\'}'
new = '          aria-hidden="true"'
count = content.count(old)
content = content.replace(old, new)
print(f"{count}x: aria-hidden fixed")

# alt={view === 'home' ? '...' : ''} -> 靜態 alt（SSR/client 一致）
# 找並替換
import re
old2_pattern = r"          alt=\{view === 'home' \? '[^']+' : ''\}"
replacement = "          alt=\"巧品珠寶店面 - 台北大安區黃金回收專門店\""
content, n = re.subn(old2_pattern, replacement, content)
print(f"{n}x: alt attr fixed (static)")

with open(path, 'w', encoding='utf-8', newline='\n') as f:
    f.write(content)
print('Done')
