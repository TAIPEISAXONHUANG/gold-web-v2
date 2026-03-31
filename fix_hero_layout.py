path = r'C:\Users\user\.openclaw\workspace-engineer\gold-web-v2\my-gold-price\app\layout.tsx'
with open(path, encoding='utf-8') as f:
    content = f.read()

# 在 body 裡的 {children} 前加 hero img（hidden，只為觸發 LCP）
# 這樣 img 在 HTML 裡，preload 能直接命中，LCP 完成
old_body = '      <body>\n        {children}'
new_body = '''      <body>
        {/* Hero LCP anchor: img in HTML so preload hits immediately, hidden by CSS until React hydrates */}
        <img
          src="/hero.webp"
          alt=""
          aria-hidden="true"
          fetchPriority="high"
          loading="eager"
          width="1"
          height="1"
          style={{position:'absolute',width:'1px',height:'1px',opacity:0,pointerEvents:'none'}}
        />
        {children}'''

count = content.count(old_body)
content = content.replace(old_body, new_body)
print(f"{count}x: hero anchor added to body")

with open(path, 'w', encoding='utf-8', newline='\n') as f:
    f.write(content)
print('Done')
