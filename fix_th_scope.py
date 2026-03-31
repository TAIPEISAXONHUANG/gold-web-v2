path = r'C:\Users\user\.openclaw\workspace-engineer\gold-web-v2\my-gold-price\app\ClientPage.tsx'
with open(path, encoding='utf-8') as f:
    content = f.read()

# 找 th 並加 scope="col"
import re
old = '<th className="table-header">'
new = '<th scope="col" className="table-header">'
count = content.count(old)
content = content.replace(old, new)
print(f"{count}x: th scope=col added")

# 同樣針對有顏色的 th
old2 = '<th className="table-header text-yellow-900">'
new2 = '<th scope="col" className="table-header text-yellow-900">'
count2 = content.count(old2)
content = content.replace(old2, new2)
print(f"{count2}x: th scope=col (yellow) added")

with open(path, 'w', encoding='utf-8', newline='\n') as f:
    f.write(content)
print('Done')
