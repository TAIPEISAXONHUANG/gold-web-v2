import re

# === 1. 修改 page.tsx，在 ClientPage 前加 Hero server render ===
page_path = r'C:\Users\user\.openclaw\workspace-engineer\gold-web-v2\my-gold-price\app\page.tsx'
with open(page_path, encoding='utf-8') as f:
    page = f.read()

old_page = """export default function Page() {
  return (
    <main>
      <ClientPage gasApiUrl={GAS_API_URL} />
    </main>
  );
}"""

new_page = """export default function Page() {
  return (
    <main>
      {/* Hero 在 server component 直出 HTML，preload 立刻生效，LCP 不等 React hydration */}
      <header className="hero-section" style={{position:'relative',height:'100svh',minHeight:'600px',overflow:'hidden',display:'flex',alignItems:'center',justifyContent:'center',textAlign:'center',color:'white'}}>
        <img
          src="/hero.webp"
          className="hero-img"
          alt="巧品珠寶店面 - 台北大安區黃金回收專門店"
          loading="eager"
          fetchPriority="high"
          width="1200"
          height="630"
          style={{position:'absolute',inset:0,width:'100%',height:'100%',objectFit:'cover',zIndex:0}}
        />
        <div style={{position:'absolute',inset:0,background:'rgba(0,0,0,0.45)',zIndex:1}} />
        <div className="relative z-20 text-center text-white px-4 max-w-4xl hero-text-shadow" style={{position:'relative',zIndex:2}}>
          <div className="inline-block px-4 py-1 border-2 border-yellow-400 bg-yellow-900/80 rounded-full text-yellow-300 text-sm font-bold mb-6 backdrop-blur-md shadow-lg">
            經營十餘年 · 誠信老字號
          </div>
          <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
            黃金回收 <span className="text-amber-400">價值最大化</span>
          </h1>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#rates-desktop" className="bg-amber-500 text-slate-900 font-bold py-3 px-10 rounded-full shadow-lg hover:bg-amber-400 transition border-2 border-amber-600">查看今日金價</a>
            <a href="#calculator-section-desktop" className="bg-green-600 text-white font-bold py-3 px-10 rounded-full shadow-lg hover:bg-green-500 transition border-2 border-green-700">舊金回收試算</a>
            <a href="/faq" className="bg-blue-600 text-white font-bold py-3 px-10 rounded-full shadow-lg hover:bg-blue-500 transition border-2 border-blue-700">常見問題</a>
            <a href="/district/da-an" className="bg-purple-600 text-white font-bold py-3 px-10 rounded-full shadow-lg hover:bg-purple-500 transition border-2 border-purple-700">黃金回收</a>
          </div>
        </div>
      </header>
      <ClientPage gasApiUrl={GAS_API_URL} />
    </main>
  );
}"""

count = page.count(old_page)
page = page.replace(old_page, new_page)
print(f"{count}x: page.tsx hero added")

with open(page_path, 'w', encoding='utf-8', newline='\n') as f:
    f.write(page)

# === 2. 修改 ClientPage.tsx，移除 Hero header（避免重複渲染）===
client_path = r'C:\Users\user\.openclaw\workspace-engineer\gold-web-v2\my-gold-price\app\ClientPage.tsx'
with open(client_path, encoding='utf-8') as f:
    client = f.read()

old_hero = """                {/* Hero */}
                <header className="hero-section">
                    <img src="/hero.webp" className="hero-img" alt="巧品珠寶店面 - 台北大安區黃金回收專門店" loading="eager" fetchPriority="high" width="1200" height="400" />
                    <div className="relative z-20 text-center text-white px-4 max-w-4xl hero-text-shadow">
                        <div className="inline-block px-4 py-1 border-2 border-yellow-400 bg-yellow-900/80 rounded-full text-yellow-300 text-sm font-bold mb-6 backdrop-blur-md shadow-lg">經營十餘年 · 誠信老字號</div>
                        <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">黃金回收 <span className="text-amber-400">價值最大化</span></h1>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button onClick={() => scrollToId('rates-desktop')} className="bg-amber-500 text-slate-900 font-bold py-3 px-10 rounded-full shadow-lg hover:bg-amber-400 transition border-2 border-amber-600">查看今日金價</button>
                            <button onClick={() => scrollToId('calculator-section-desktop')} className="bg-green-600 text-white font-bold py-3 px-10 rounded-full shadow-lg hover:bg-green-500 transition border-2 border-green-700">舊金回收試算</button>
                            <a href="/faq" className="bg-blue-600 text-white font-bold py-3 px-10 rounded-full shadow-lg hover:bg-blue-500 transition border-2 border-blue-700">常見問題</a>
                            <a href="/district/da-an" className="bg-purple-600 text-white font-bold py-3 px-10 rounded-full shadow-lg hover:bg-purple-500 transition border-2 border-purple-700">黃金回收</a>
                        </div>
                    </div>
                </header>"""

new_hero = "                {/* Hero 已移至 page.tsx server component，此處不重複渲染 */}"

count2 = client.count(old_hero)
client = client.replace(old_hero, new_hero)
print(f"{count2}x: ClientPage hero removed")

with open(client_path, 'w', encoding='utf-8', newline='\n') as f:
    f.write(client)

print('Done')
