path = r'C:\Users\user\.openclaw\workspace-engineer\gold-web-v2\my-gold-price\app\ClientPage.tsx'
with open(path, encoding='utf-8') as f:
    content = f.read()

# Chart loading text: gray-400 on white bg -> gray-700
old = 'h-64 flex items-center justify-center text-gray-400 text-sm'
new = 'h-64 flex items-center justify-center text-gray-700 text-sm'
count = content.count(old)
content = content.replace(old, new)
print(f'{count}x: chart loading placeholder gray-400 -> gray-700')

with open(path, 'w', encoding='utf-8', newline='\n') as f:
    f.write(content)
print('Done')
