path = r'C:\Users\user\.openclaw\workspace-engineer\gold-web-v2\my-gold-price\app\layout.tsx'
with open(path, encoding='utf-8') as f:
    content = f.read()

# 在 preload link 前加 critical CSS inline style
old = '        {/* 2. Hero 圖片 preload - 讓瀏覽器在 JS 執行前就開始抓，直接改善 LCP */}'
new = '''        {/* 2. Critical CSS inline - prevents render blocking for above-the-fold styles */}
        <style dangerouslySetInnerHTML={{__html: `
          body{margin:0;font-family:system-ui,-apple-system,sans-serif;background:#f3f4f6;color:#1f2937}
          .hero-section{position:relative;height:100svh;min-height:600px;background:transparent;overflow:hidden;display:flex;align-items:center;justify-content:center;text-align:center;color:#fff}
          .hero-img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;z-index:0}
          .hero-text-shadow{text-shadow:0 2px 4px rgba(0,0,0,.7)}
          .nav-sticky{position:sticky;top:0;z-index:40;background:#fff;box-shadow:0 4px 6px -1px rgba(0,0,0,.1);height:84px}
          .animate-marquee{animation:marquee 30s linear infinite}
          @keyframes marquee{0%{transform:translateX(100%)}100%{transform:translateX(-100%)}}
        `}} />

        {/* 3. Hero 圖片 preload - 讓瀏覽器在 JS 執行前就開始抓，直接改善 LCP */}'''

count = content.count(old)
content = content.replace(old, new)
print(f"{count}x: critical CSS inline added")

with open(path, 'w', encoding='utf-8', newline='\n') as f:
    f.write(content)
print('Done')
