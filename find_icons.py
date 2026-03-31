import re
path = r'C:\Users\user\.openclaw\workspace-engineer\gold-web-v2\my-gold-price\app\ClientPage.tsx'
with open(path, encoding='utf-8') as f:
    content = f.read()

icons = re.findall(r'fa-[\w-]+', content)
unique = sorted(set(icons))
for i in unique:
    print(i)
