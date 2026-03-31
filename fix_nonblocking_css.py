path = r'C:\Users\user\.openclaw\workspace-engineer\gold-web-v2\my-gold-price\app\layout.tsx'
with open(path, encoding='utf-8') as f:
    content = f.read()

# Critical CSS 要移到最前面（preload 之前）
# 同時把 globals.css import 改為非阻塞加載

# 找 critical style 目前位置，移到 <head> 最頂部（meta viewport 之後）
old_placement = '''        {/* 2. Critical CSS inline - prevents render blocking for above-the-fold styles */}
        <style dangerouslySetInnerHTML={{__html: `'''

# 找到 viewport meta，把 critical CSS 插到它之後
old_viewport = '      <head>\n        {/* 1. Google Search Console 驗證 */'
new_viewport = '''      <head>
        {/* CRITICAL CSS - inline first, prevents render blocking */}
        <style dangerouslySetInnerHTML={{__html: `body{margin:0;font-family:system-ui,-apple-system,sans-serif;background:#f3f4f6;color:#1f2937}.hero-section{position:relative;height:100svh;min-height:600px;background:transparent;overflow:hidden;display:flex;align-items:center;justify-content:center;text-align:center;color:#fff}.hero-img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;z-index:0}.hero-text-shadow{text-shadow:0 2px 4px rgba(0,0,0,.7)}.nav-sticky{position:sticky;top:0;z-index:40;background:#fff;box-shadow:0 4px 6px -1px rgba(0,0,0,.1);height:84px}.animate-marquee{animation:marquee 30s linear infinite}@keyframes marquee{0%{transform:translateX(100%)}100%{transform:translateX(-100%)}}`}} />
        {/* 1. Google Search Console 驗證 */'''

count = content.count(old_viewport)
content = content.replace(old_viewport, new_viewport)
print(f"{count}x: critical CSS moved to top of head")

# 移除之前加的 critical CSS block（重複了）
old_dup = '''        {/* 2. Critical CSS inline - prevents render blocking for above-the-fold styles */}
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

new_dup = '        {/* 2. Hero 圖片 preload - 讓瀏覽器在 JS 執行前就開始抓，直接改善 LCP */}'

count2 = content.count(old_dup)
content = content.replace(old_dup, new_dup)
print(f"{count2}x: duplicate CSS removed")

with open(path, 'w', encoding='utf-8', newline='\n') as f:
    f.write(content)
print('Done')
