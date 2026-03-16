import os

base_dir = r"C:\Users\user\.openclaw\workspace\gold-web-v2\my-gold-price\app\district"
base_url = "https://www.gold-tw.com"

districts = {
    "xin-yi": ("信義區", "台北市", "搭板南線至忠孝新生站（從市政府站約2站），出站步行5分鐘", "信義區居民賣黃金，不用在信義區找店！巧品珠寶位於鄰近的大安區濟南路，搭捷運板南線到忠孝新生站，步行5分鐘即到。"),
    "zhong-zheng": ("中正區", "台北市", "搭板南線至忠孝新生站（從台大醫院站1站），出站步行5分鐘", "中正區居民賣黃金推薦巧品珠寶！從台北車站搭板南線到忠孝新生站只需一站，出站步行5分鐘即到。"),
    "zhongshan": ("中山區", "台北市", "搭捷運至忠孝新生站（中山站轉板南線約3站），出站步行5分鐘", "中山區居民賣黃金，推薦前往巧品珠寶！從中山站搭捷運松山新店線或板南線轉乘，約15分鐘可達大安區濟南路。"),
    "songshan": ("松山區", "台北市", "搭板南線至忠孝新生站（從忠孝復興站約1站），出站步行5分鐘", "松山區居民賣黃金，推薦巧品珠寶！從南京三民站搭板南線轉乘，約10分鐘可達大安區濟南路。"),
    "datong": ("大同區", "台北市", "搭板南線至忠孝新生站（從台北橋站約4站），出站步行5分鐘", "大同區居民賣黃金，推薦巧品珠寶！從大橋頭站搭板南線，約20分鐘可達大安區濟南路。"),
    "wanhua": ("萬華區", "台北市", "搭板南線至忠孝新生站（從西門站約3站），出站步行5分鐘", "萬華區居民賣黃金，推薦巧品珠寶！從龍山寺站搭板南線，約15分鐘可達大安區濟南路。"),
    "wenshan": ("文山區", "台北市", "搭文湖線至忠孝復興站，轉板南線一站至忠孝新生站，出站步行5分鐘", "文山區居民賣黃金，推薦巧品珠寶！從木柵或萬芳搭捷運文湖線，轉板南線約20分鐘可達。"),
    "neihu": ("內湖區", "台北市", "搭文湖線至忠孝復興站，轉板南線一站至忠孝新生站，出站步行5分鐘", "內湖區居民賣黃金，推薦巧品珠寶！從內湖搭捷運文湖線，在忠孝復興站轉板南線，約25分鐘可達。"),
    "nangang": ("南港區", "台北市", "搭板南線至忠孝新生站（從南港站約5站），出站步行5分鐘", "南港區居民賣黃金，推薦巧品珠寶！從南港站搭板南線，約20分鐘可直達忠孝新生站。"),
    "shilin": ("士林區", "台北市", "搭淡水信義線至中正紀念堂站，轉板南線兩站至忠孝新生站，出站步行5分鐘", "士林區居民賣黃金，推薦巧品珠寶！從士林站搭捷運淡水信義線，約20分鐘可轉乘至忠孝新生站。"),
    "beitou": ("北投區", "台北市", "搭淡水信義線至中正紀念堂站，轉板南線兩站至忠孝新生站，出站步行5分鐘", "北投區居民賣黃金，推薦巧品珠寶！從北投站搭捷運淡水信義線，轉乘約30分鐘可達大安區。"),
    "banqiao": ("板橋區", "新北市", "搭板南線至忠孝新生站（從板橋站約6站），出站步行5分鐘", "板橋居民賣黃金，推薦巧品珠寶！從板橋站搭捷運板南線，約20分鐘直達忠孝新生站，步行5分鐘即到。"),
    "xinzhuang": ("新莊區", "新北市", "搭蘆洲線至台北橋站，轉板南線至忠孝新生站，出站步行5分鐘", "新莊居民賣黃金，推薦巧品珠寶！從新莊站搭捷運，轉板南線約25分鐘可達大安區濟南路。"),
    "sanchong": ("三重區", "新北市", "搭蘆洲線至台北橋站，轉板南線至忠孝新生站，出站步行5分鐘", "三重居民賣黃金，推薦巧品珠寶！從三重站搭捷運，轉板南線約20分鐘可達大安區濟南路。"),
    "zhonghe": ("中和區", "新北市", "搭中和新蘆線至忠孝新生站（直達），出站步行5分鐘", "中和居民賣黃金，推薦巧品珠寶！從中和站搭捷運中和新蘆線，直達忠孝新生站，約20分鐘。"),
    "xindian": ("新店區", "新北市", "搭松山新店線至古亭站，轉板南線兩站至忠孝新生站，出站步行5分鐘", "新店居民賣黃金，推薦巧品珠寶！從新店站搭捷運松山新店線，在古亭站轉板南線，約20分鐘可達。"),
    "yonghe": ("永和區", "新北市", "搭中和新蘆線至忠孝新生站（從頂溪站約4站），出站步行5分鐘", "永和居民賣黃金，推薦巧品珠寶！從頂溪站搭捷運中和新蘆線，直達忠孝新生站，約15分鐘。"),
    "luzhou": ("蘆洲區", "新北市", "搭蘆洲線至台北橋站，轉板南線至忠孝新生站，出站步行5分鐘", "蘆洲居民賣黃金，推薦巧品珠寶！從蘆洲站搭捷運蘆洲線，轉板南線約25分鐘可達大安區濟南路。"),
    "shulin": ("樹林區", "新北市", "搭台鐵至台北車站，轉板南線至忠孝新生站，出站步行5分鐘", "樹林居民賣黃金，推薦巧品珠寶！從樹林搭台鐵至台北，轉捷運板南線，約40分鐘可達大安區。"),
    "tucheng": ("土城區", "新北市", "搭板南線至忠孝新生站（從土城站約7站），出站步行5分鐘", "土城居民賣黃金，推薦巧品珠寶！從土城站搭捷運板南線，約25分鐘直達忠孝新生站。"),
    "tamsui": ("淡水區", "新北市", "搭淡水信義線至中正紀念堂站，轉板南線兩站至忠孝新生站，出站步行5分鐘", "淡水居民賣黃金，推薦巧品珠寶！從淡水站搭捷運淡水信義線，轉板南線約40分鐘可達大安區。"),
    "xizhi": ("汐止區", "新北市", "搭台鐵至松山站，轉板南線至忠孝新生站，出站步行5分鐘", "汐止居民賣黃金，推薦巧品珠寶！從汐科站搭台鐵至松山，轉捷運板南線，約35分鐘可達大安區。"),
}

def make_page(slug, name, city, transit, intro):
    canon = f"{base_url}/district/{slug}"
    kw = f"{name}黃金回收,{name}黃金估價,{name}賣黃金,{city}{name}黃金回收"
    title = f"{name}黃金回收推薦2026｜免費估價・當場現金｜巧品珠寶"
    desc = f"{city}{name}黃金回收推薦！巧品珠寶台北大安區店，{transit[:15]}。老闆親自鑑定、免費估價、現金付款不扣耗損。電話 0986-821-626"

    return f"""import {{ Metadata }} from 'next';

export const metadata: Metadata = {{
  title: '{title}',
  description: '{desc}',
  keywords: '{kw}',
  alternates: {{
    canonical: '{canon}',
  }},
}};

export default function Page() {{
  return (
    <main style={{{{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}}}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{{{
          __html: JSON.stringify({{
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "{title}",
            "description": "{desc}",
            "mainEntityOfPage": {{ "@type": "WebPage", "@id": "{canon}" }},
            "author": {{ "@type": "Organization", "name": "巧品珠寶", "url": "https://www.gold-tw.com" }},
            "publisher": {{ "@type": "Organization", "name": "巧品珠寶", "url": "https://www.gold-tw.com" }},
            "image": {{ "@type": "ImageObject", "url": "https://wsrv.nl/?url=https://drive.google.com/uc?id=1ASz1v5ZBQ-WV572r-BC4gZRuraywgKKv&w=1200&output=webp&q=80" }},
            "datePublished": "2026-03-15T00:00:00+08:00",
            "dateModified": "2026-03-17T00:00:00+08:00"
          }})
        }}}}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{{{
          __html: JSON.stringify({{
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {{
                "@type": "Question",
                "name": "{name}哪裡可以賣黃金？",
                "acceptedAnswer": {{ "@type": "Answer", "text": "推薦巧品珠寶！位於台北市大安區濟南路三段62-1號。{transit}。免費估價、老闆親自鑑定、現場現金付款。" }}
              }},
              {{
                "@type": "Question",
                "name": "{name}黃金回收價格怎麼算？",
                "acceptedAnswer": {{ "@type": "Answer", "text": "黃金回收價格 = 重量（台錢）× 當日收購牌價。巧品珠寶依當日國際金價即時報價，不扣耗損、不扣手續費，公開透明。" }}
              }},
              {{
                "@type": "Question",
                "name": "從{name}到巧品珠寶怎麼去？",
                "acceptedAnswer": {{ "@type": "Answer", "text": "{transit}。地址：台北市大安區濟南路三段62-1號。電話：0986-821-626。" }}
              }}
            ]
          }})
        }}}}
      />

      <h1>{name}黃金回收推薦2026｜巧品珠寶・老闆親自鑑定</h1>

      <p style={{{{ fontSize: '1.1rem', color: '#555', borderLeft: '4px solid #B8860B', paddingLeft: '1rem', margin: '1.5rem 0' }}}}>
        {intro}
      </p>

      <h2>為什麼{name}居民選擇巧品珠寶？</h2>
      <ul>
        <li><strong>老闆親自鑑定</strong>：每筆交易由老闆本人操作，不是工讀生，鑑定準確、報價公道</li>
        <li><strong>公開秤重</strong>：讓您親眼確認重量數字，不私下操作</li>
        <li><strong>不扣耗損</strong>：許多業者扣 5-10% 耗損，我們不扣，按實際重量計價</li>
        <li><strong>當場現金</strong>：確認價格後立即付款，不需等隔天</li>
        <li><strong>免費估價</strong>：估完不賣可直接帶走，完全不強迫</li>
      </ul>

      <h2>2026年黃金回收參考價格</h2>
      <table style={{{{ width: '100%', borderCollapse: 'collapse', margin: '1rem 0' }}}}>
        <thead>
          <tr style={{{{ background: '#FEF3C7' }}}}>
            <th style={{{{ padding: '10px', border: '1px solid #ddd', textAlign: 'left' }}}}>黃金種類</th>
            <th style={{{{ padding: '10px', border: '1px solid #ddd', textAlign: 'center' }}}}>純度</th>
            <th style={{{{ padding: '10px', border: '1px solid #ddd', textAlign: 'center' }}}}>回收價（每台錢）</th>
          </tr>
        </thead>
        <tbody>
          <tr><td style={{{{ padding: '10px', border: '1px solid #ddd' }}}}>9999純金（24K）</td><td style={{{{ padding: '10px', border: '1px solid #ddd', textAlign: 'center' }}}}>99.99%</td><td style={{{{ padding: '10px', border: '1px solid #ddd', textAlign: 'center' }}}}>約 19,000-19,500</td></tr>
          <tr style={{{{ background: '#fafafa' }}}}><td style={{{{ padding: '10px', border: '1px solid #ddd' }}}}>916金（傳統金飾）</td><td style={{{{ padding: '10px', border: '1px solid #ddd', textAlign: 'center' }}}}>91.6%</td><td style={{{{ padding: '10px', border: '1px solid #ddd', textAlign: 'center' }}}}>約 17,400-17,900</td></tr>
          <tr><td style={{{{ padding: '10px', border: '1px solid #ddd' }}}}>18K金</td><td style={{{{ padding: '10px', border: '1px solid #ddd', textAlign: 'center' }}}}>75%</td><td style={{{{ padding: '10px', border: '1px solid #ddd', textAlign: 'center' }}}}>約 14,200-14,600</td></tr>
          <tr style={{{{ background: '#fafafa' }}}}><td style={{{{ padding: '10px', border: '1px solid #ddd' }}}}>14K金</td><td style={{{{ padding: '10px', border: '1px solid #ddd', textAlign: 'center' }}}}>58.5%</td><td style={{{{ padding: '10px', border: '1px solid #ddd', textAlign: 'center' }}}}>約 11,100-11,400</td></tr>
        </tbody>
      </table>
      <p style={{{{ fontSize: '0.85rem', color: '#888' }}}}>※ 以上為參考價，實際以到店當日國際金價為準。建議來電確認即時報價。</p>

      <h2>從{name}到巧品珠寶的交通方式</h2>
      <p>{transit}</p>
      <p><strong>地址：</strong>台北市大安區濟南路三段62-1號1樓</p>

      <h2>常見問題 FAQ</h2>
      <h3>Q：{name}哪裡可以賣黃金？</h3>
      <p>A：推薦巧品珠寶！{transit}。免費估價、老闆親自鑑定、現場現金付款。</p>
      <h3>Q：{name}黃金回收可以當場拿現金嗎？</h3>
      <p>A：可以。確認報價後立即現金付款，不需等隔天。</p>
      <h3>Q：在{name}買的黃金可以到巧品回收嗎？</h3>
      <p>A：完全可以，不限購買地點，任何品牌購買的黃金我們都回收。</p>

      <hr style={{{{ margin: '2rem 0' }}}} />
      <h2>立即諮詢・免費估價</h2>
      <p>📞 電話：<a href="tel:0986821626" style={{{{ color: '#B8860B', fontWeight: 'bold' }}}}>0986-821-626</a></p>
      <p>💬 LINE：<a href="https://pse.is/8hndu3" style={{{{ color: '#06C755' }}}}>@Hh0986481626（點此加入）</a></p>
      <p>📍 地址：台北市大安區濟南路三段62-1號1樓（捷運忠孝新生站步行5分鐘）</p>
      <p style={{{{ color: '#B8860B', fontWeight: 'bold' }}}}>估完不賣完全沒關係，歡迎比較後再決定。</p>
    </main>
  );
}}
"""

count = 0
for slug, (name, city, transit, intro) in districts.items():
    fpath = os.path.join(base_dir, slug, "page.tsx")
    if not os.path.exists(os.path.dirname(fpath)):
        os.makedirs(os.path.dirname(fpath))
    with open(fpath, "w", encoding="utf-8") as f:
        f.write(make_page(slug, name, city, transit, intro))
    print(f"Done: {slug} ({name})")
    count += 1

print(f"\nTotal: {count} district pages written")
