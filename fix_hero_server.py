path = r'C:\Users\user\.openclaw\workspace-engineer\gold-web-v2\my-gold-price\app\page.tsx'
with open(path, encoding='utf-8') as f:
    content = f.read()

# 把 Hero 圖直接放進 server component，讓它在 HTML 裡直接出現，不等 JS
old = '''  return (
     <main>
       <ClientPage initialData={data} />
     </main>
  );'''

new = '''  return (
     <main>
       {/* Hero 圖在 server component 直出，不等 JS hydration，大幅改善 FCP/LCP */}
       <div className="relative overflow-hidden" style={{height: '100svh', minHeight: '600px'}}>
         <img
           src="/hero.webp"
           alt="巧品珠寶黃金回收 - 台北大安區黃金回收專業估價"
           fetchPriority="high"
           loading="eager"
           decoding="async"
           style={{position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover'}}
         />
         <div style={{position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.35)'}} />
       </div>
       <ClientPage initialData={data} />
     </main>
  );'''

count = content.count(old)
content = content.replace(old, new)
print(f'{count}x: hero moved to server component')

with open(path, 'w', encoding='utf-8', newline='\n') as f:
    f.write(content)
print('Done')
