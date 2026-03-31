path = r'C:\Users\user\.openclaw\workspace-engineer\gold-web-v2\my-gold-price\app\layout.tsx'
with open(path, encoding='utf-8') as f:
    content = f.read()

# 移除 FontAwesome loader script + preconnect
old_fa = """        {/* 5. FontAwesome - lazyOnload 不阻塞渲染 */}
        <Script id="fontawesome-loader" strategy="lazyOnload">
          {`
            (function() {
              var link = document.createElement('link');
              link.rel = 'stylesheet';
              link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css';
              document.head.appendChild(link);
            })();
          `}
        </Script>"""

count = content.count(old_fa)
content = content.replace(old_fa, '        {/* FontAwesome removed - replaced with inline SVG icons */}')
print(f"{count}x: FontAwesome loader removed")

# 移除 cdnjs preconnect（不再需要）
old_preconnect = "\n        <link rel=\"preconnect\" href=\"https://cdnjs.cloudflare.com\" />"
count2 = content.count(old_preconnect)
content = content.replace(old_preconnect, '')
print(f"{count2}x: cdnjs preconnect removed")

with open(path, 'w', encoding='utf-8', newline='\n') as f:
    f.write(content)
print('Done')
