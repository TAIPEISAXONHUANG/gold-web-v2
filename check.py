path = r'C:\Users\user\.openclaw\workspace-engineer\gold-web-v2\my-gold-price\app\ClientPage.tsx'
with open(path, encoding='utf-8') as f:
    content = f.read()

# footer
idx = content.find('<footer')
while idx != -1:
    print('FOOTER:', content[idx:idx+100])
    idx = content.find('<footer', idx+1)

# address link
idx = content.find('maps.google')
if idx != -1:
    print('MAPS:', content[idx-50:idx+150])

# gray-400 remaining
import re
for m in re.finditer(r'text-gray-400', content):
    print('gray-400 at', m.start(), ':', content[max(0,m.start()-30):m.start()+60])
