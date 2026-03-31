path_client = r'C:\Users\user\.openclaw\workspace-engineer\gold-web-v2\my-gold-price\app\ClientPage.tsx'
with open(path_client, encoding='utf-8') as f:
    content = f.read()

# 在 return 的最開頭（div 之後，社群按鈕之前）加 hero img（always rendered for LCP）
# 用 position:fixed/absolute + visibility:hidden 在非首頁時隱藏
old = '    <div>\n        {/* 手機版底部浮動按鈕 */'
new = '''    <div>
        {/* Hero LCP image: always in DOM for preload to work, hidden when not on home view */}
        <img
          src="/hero.webp"
          alt={view === 'home' ? '巧品珠寶店面 - 台北大安區黃金回收專門店' : ''}
          fetchPriority="high"
          loading="eager"
          width="1200"
          height="630"
          aria-hidden={view !== 'home'}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100svh',
            objectFit: 'cover',
            zIndex: view === 'home' ? 0 : -1,
            visibility: view === 'home' ? 'visible' : 'hidden',
            pointerEvents: 'none',
          }}
        />
        {/* 手機版底部浮動按鈕 */'''

count = content.count(old)
content = content.replace(old, new)
print(f"{count}x: hero always-render img added")

with open(path_client, 'w', encoding='utf-8', newline='\n') as f:
    f.write(content)

# 同時把 page.tsx 的 hero 移回去（不需要重複）
path_page = r'C:\Users\user\.openclaw\workspace-engineer\gold-web-v2\my-gold-price\app\page.tsx'
with open(path_page, encoding='utf-8') as f:
    page = f.read()

# 移除 page.tsx 的 hero（讓 ClientPage 管）
old_page_hero = '''      {/* Hero \xd4\xda server component \xd6\xb1\xb3\xf6 HTML\xa3\xacpreload \xc1\xa2\xc2\xcc\xc9\xe8\xd7\xa4\xd0\xa7\xa3\xacLCP \xb2\xbb\xb5\xc8 React hydration */}
      <header className="hero-section" style={{position:'relative',height:'100svh',minHeight:'600px',overflow:'hidden',display:'flex',alignItems:'center',justifyContent:'center',textAlign:'center',color:'white'}}>
        <img
          src="/hero.webp"
          className="hero-img"
          alt="\xc7\xc9\xc6\xb7\xd6\xe9\xb1\xa6\xb5\xea\xc3\xe6 - \xcc\xa8\xb1\xc6\xb4\xf3\xb0\xb2\xc7\xf8\xbb\xc6\xbd\xf0\xbb\xd8\xca\xd5\xd7\xa8\xc3\xc5\xb5\xea"
          loading="eager"
          fetchPriority="high"
          width="1200"
          height="630"
          style={{position:'absolute',inset:0,width:'100%',height:'100%',objectFit:'cover',zIndex:0}}
        />
        <div style={{position:'absolute',inset:0,background:'rgba(0,0,0,0.45)',zIndex:1}} />
        <div className="relative z-20 text-center text-white px-4 max-w-4xl hero-text-shadow" style={{position:'relative',zIndex:2}}>
          <div className="inline-block px-4 py-1 border-2 border-yellow-400 bg-yellow-900/80 rounded-full text-yellow-300 text-sm font-bold mb-6 backdrop-blur-md shadow-lg">
            \xbe\xad\xd3\xaa\xca\xae\xd3\xe0\xc4\xea\xa1\xa4\xd5\xcf\xd0\xc5\xc0\xcf\xd7\xd6\xba\xc5
          </div>
          <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
            \xbb\xc6\xbd\xf0\xbb\xd8\xca\xd5 <span className="text-amber-400">\xbc\xdb\xd6\xb5\xd7\xee\xb4\xf3\xbb\xaf</span>
          </h1>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#rates-desktop" className="bg-amber-500 text-slate-900 font-bold py-3 px-10 rounded-full shadow-lg hover:bg-amber-400 transition border-2 border-amber-600">\xb2\xe9\xbf\xb4\xbd\xf1\xc8\xd5\xbd\xf0\xbc\xdb</a>
            <a href="#calculator-section-desktop" className="bg-green-600 text-white font-bold py-3 px-10 rounded-full shadow-lg hover:bg-green-500 transition border-2 border-green-700">\xbe\xc9\xbd\xf0\xbb\xd8\xca\xd5\xca\xd4\xcb\xe3</a>
            <a href="/faq" className="bg-blue-600 text-white font-bold py-3 px-10 rounded-full shadow-lg hover:bg-blue-500 transition border-2 border-blue-700">\xb3\xa3\xbc\xfb\xce\xca\xcc\xe2</a>
            <a href="/district/da-an" className="bg-purple-600 text-white font-bold py-3 px-10 rounded-full shadow-lg hover:bg-purple-500 transition border-2 border-purple-700">\xbb\xc6\xbd\xf0\xbb\xd8\xca\xd5</a>
          </div>
        </div>
      </header>
      '''

# 用 Python bytes 比對
import re
# 找到 header 區塊並替換
hero_pattern = r'\{/\* Hero.*?</header>\n      '
match = re.search(hero_pattern, page, re.DOTALL)
if match:
    page = page[:match.start()] + page[match.end():]
    print("1x: page.tsx hero removed")
else:
    print("WARNING: Could not find hero block in page.tsx to remove")

with open(path_page, 'w', encoding='utf-8', newline='\n') as f:
    f.write(page)

print('Done')
