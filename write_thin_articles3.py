#!/usr/bin/env python3
# -*- coding: utf-8 -*-
import os

blog_dir = r"C:\Users\user\.openclaw\workspace\gold-web-v2\my-gold-price\app\blog"

articles = {
"gold-tax": {
"title": "賣黃金要繳稅嗎？黃金稅務完整說明｜巧品珠寶",
"desc": "賣黃金要繳稅嗎？台灣黃金交易稅務規定完整說明，個人賣黃金的課稅情況一次搞懂。",
"keywords": "黃金稅務,賣黃金繳稅,黃金所得稅,遺產稅黃金",
"h1": "賣黃金要繳稅嗎？黃金稅務完整說明",
"content": """
      <h2>結論：一般個人賣黃金通常不需繳所得稅</h2>
      <p>很多人賣黃金時擔心要繳稅。根據台灣現行法規，個人出售黃金的財產交易所得，原則上需申報，但實務上只要有購買憑證且非以交易黃金為業，稅負通常很低甚至為零。</p>

      <h2>黃金相關稅務說明</h2>
      <ul>
        <li><strong>個人財產交易所得</strong>：賣出金額減購買成本，若有獲利才需申報所得稅</li>
        <li><strong>無購買憑證</strong>：國稅局按收入的6%估算成本，但實務上鮮少被查核</li>
        <li><strong>遺產中的黃金</strong>：需計入遺產總額，超過免稅額才需繳遺產稅</li>
        <li><strong>贈與黃金</strong>：超過每年244萬贈與免稅額需申報贈與稅</li>
      </ul>

      <h2>實務建議</h2>
      <ul>
        <li>保留購買憑證，可作為成本證明</li>
        <li>若金額較大，建議諮詢會計師</li>
        <li>繼承的黃金在申報遺產時應如實列入</li>
      </ul>

      <h2>常見問題 FAQ</h2>
      <h3>Q：賣黃金要開收據嗎？</h3>
      <p>A：我們依規定開立相關憑證，並依法進行實名制登記。</p>
      <h3>Q：一次賣很多黃金，會被國稅局查嗎？</h3>
      <p>A：只要是正常的個人財產處分，通常不會有問題。如擔心，建議諮詢稅務專業人員。</p>
      <hr style={{ margin: '2rem 0' }} />
      <h2>立即諮詢</h2>
"""},
"gold-tradition": {
"title": "黃金傳統習俗｜台灣黃金文化習俗｜巧品珠寶",
"desc": "台灣黃金傳統習俗完整介紹！嫁妝金飾、彌月禮金、神明金牌等黃金文化習俗說明。",
"keywords": "黃金傳統,黃金習俗,嫁妝金飾,彌月黃金",
"h1": "黃金傳統習俗｜台灣黃金文化完整介紹",
"content": """
      <h2>結論：黃金在台灣傳統文化中不可或缺</h2>
      <p>黃金在台灣人的生命禮俗中扮演重要角色，從出生到婚嫁到身後，每個重要時刻都可能有黃金的身影。了解這些傳統，讓我們更珍視手中的黃金。</p>

      <h2>台灣黃金傳統習俗</h2>
      <ul>
        <li><strong>彌月禮金</strong>：新生兒滿月，親友贈送小金飾，祝福平安健康成長</li>
        <li><strong>結婚嫁妝</strong>：女方父母準備黃金首飾作為嫁妝，象徵財富與祝福</li>
        <li><strong>訂婚金飾</strong>：男方準備「三金」（金戒指、金手鍊、金耳環）</li>
        <li><strong>壽禮</strong>：長輩大壽，子女贈送金飾以表孝心與祝福</li>
        <li><strong>神明金牌</strong>：廟宇善信製作純金牌匾供奉，表達虔誠</li>
        <li><strong>開運金飾</strong>：貔貅、元寶造型金飾，據信有招財納福之效</li>
      </ul>

      <h2>現代變化</h2>
      <p>雖然年輕一代對金飾的需求有所改變，但黃金作為保值資產的地位依然穩固。許多家庭會將傳統金飾在適當時機回收變現，用於更靈活的財務規劃。</p>

      <h2>常見問題 FAQ</h2>
      <h3>Q：彌月收到的金飾可以賣掉嗎？</h3>
      <p>A：完全可以，黃金保值性高，待孩子長大後可以視需求決定。</p>
      <h3>Q：三金應該買哪種純度？</h3>
      <p>A：傳統偏好9999純金，現代也有選擇18K款式，依個人喜好。</p>
      <hr style={{ margin: '2rem 0' }} />
      <h2>立即諮詢</h2>
"""},
"gold-watch-recovery": {
"title": "黃金手錶回收｜勞力士等名錶收購｜巧品珠寶",
"desc": "黃金手錶回收推薦！勞力士、OMEGA等品牌黃金錶殼收購，台北巧品珠寶專業估價現金付款。",
"keywords": "黃金手錶回收,勞力士回收,名錶收購,金錶回收台北",
"h1": "黃金手錶回收｜名錶黃金材質高價收購",
"content": """
      <h2>結論：黃金手錶的黃金部分可以高價回收</h2>
      <p>名牌黃金手錶不只是計時工具，更是貴重資產。無論是整支黃金錶、黃金錶殼還是黃金錶帶，巧品珠寶都提供專業的黃金材質回收服務。</p>

      <h2>我們回收哪些黃金手錶？</h2>
      <ul>
        <li><strong>全金錶</strong>：18K金、14K金錶殼+錶帶</li>
        <li><strong>知名品牌</strong>：勞力士 Rolex、OMEGA、Cartier 等</li>
        <li><strong>黃金錶帶</strong>：拆下的金錶帶單獨回收</li>
        <li><strong>損壞黃金錶</strong>：機芯損壞，黃金部分仍有價值</li>
      </ul>

      <h2>估價方式</h2>
      <p>黃金手錶的回收分兩部分：</p>
      <ol>
        <li><strong>黃金重量</strong>：以18K或其他K數計算黃金含量</li>
        <li><strong>品牌附加值</strong>：知名品牌（如勞力士）可能有品牌溢價</li>
      </ol>

      <h2>常見問題 FAQ</h2>
      <h3>Q：勞力士黃金款回收價值高嗎？</h3>
      <p>A：勞力士保值性極佳，二手市場價格可能超過黃金材質本身，建議先評估整體市場行情。</p>
      <h3>Q：手錶壞掉了，還有收購價值嗎？</h3>
      <p>A：有，黃金材質的價值不受機芯狀況影響。</p>
      <hr style={{ margin: '2rem 0' }} />
      <h2>立即諮詢</h2>
"""},
"gold-weight": {
"title": "黃金重量怎麼算？台錢vs公克換算｜巧品珠寶",
"desc": "黃金重量換算完整說明！台錢、公克、兩、盎司換算表，讓你看懂黃金報價單位。",
"keywords": "黃金重量,台錢換算,黃金公克,黃金單位換算",
"h1": "黃金重量怎麼算？台錢公克換算完整說明",
"content": """
      <h2>結論：搞懂重量單位，讓你不被坑</h2>
      <p>黃金報價使用的重量單位有好幾種，台灣常用「台錢」，國際則用「公克」或「盎司」。搞清楚換算關係，才能正確計算你的黃金值多少錢。</p>

      <h2>黃金重量單位換算表</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '1.5rem' }}>
        <thead>
          <tr style={{ background: '#fef3c7' }}>
            <th style={{ padding: '10px', border: '1px solid #ddd' }}>單位</th>
            <th style={{ padding: '10px', border: '1px solid #ddd' }}>等於多少公克</th>
            <th style={{ padding: '10px', border: '1px solid #ddd' }}>常用場合</th>
          </tr>
        </thead>
        <tbody>
          <tr><td style={{ padding: '8px', border: '1px solid #ddd' }}>1 台錢</td><td style={{ padding: '8px', border: '1px solid #ddd' }}>3.75 公克</td><td style={{ padding: '8px', border: '1px solid #ddd' }}>台灣黃金報價</td></tr>
          <tr><td style={{ padding: '8px', border: '1px solid #ddd' }}>1 台兩</td><td style={{ padding: '8px', border: '1px solid #ddd' }}>37.5 公克</td><td style={{ padding: '8px', border: '1px solid #ddd' }}>10台錢</td></tr>
          <tr><td style={{ padding: '8px', border: '1px solid #ddd' }}>1 金衡盎司</td><td style={{ padding: '8px', border: '1px solid #ddd' }}>31.1035 公克</td><td style={{ padding: '8px', border: '1px solid #ddd' }}>國際金價報價</td></tr>
          <tr><td style={{ padding: '8px', border: '1px solid #ddd' }}>1 公克</td><td style={{ padding: '8px', border: '1px solid #ddd' }}>1 公克</td><td style={{ padding: '8px', border: '1px solid #ddd' }}>K金計算常用</td></tr>
        </tbody>
      </table>

      <h2>快速計算公式</h2>
      <ul>
        <li>重量（台錢）× 當日牌價 = 回收金額</li>
        <li>公克 ÷ 3.75 = 台錢</li>
        <li>台錢 × 3.75 = 公克</li>
      </ul>

      <h2>常見問題 FAQ</h2>
      <h3>Q：1 台錢的黃金大概有多重？</h3>
      <p>A：3.75 公克，大概是一枚1元硬幣的重量。</p>
      <h3>Q：珠寶店說的「分」是什麼單位？</h3>
      <p>A：1分 = 0.1台錢 = 0.375公克，常用於小件首飾。</p>
      <hr style={{ margin: '2rem 0' }} />
      <h2>立即諮詢</h2>
"""},
"lion-head-gold": {
"title": "金牌回收｜紀念金牌｜奧運金牌變現｜巧品珠寶",
"desc": "金牌回收推薦！奧運金牌、紀念金牌、廟宇神明牌高價收購，台北巧品珠寶專業估價。",
"keywords": "金牌回收,紀念金牌,神明金牌回收,純金牌回收",
"h1": "金牌回收｜各式金牌高價變現",
"content": """
      <h2>結論：金牌也是黃金，一樣可以高價回收</h2>
      <p>無論是廟宇的神明金牌、體育競賽的金牌，還是各種紀念用純金牌，只要是真金製成，都能在巧品珠寶以當日市價收購。</p>

      <h2>我們回收哪些金牌？</h2>
      <ul>
        <li><strong>廟宇神明金牌</strong>：各種宗教用途的純金牌</li>
        <li><strong>彌月金牌</strong>：嬰兒滿月贈送的小金牌</li>
        <li><strong>紀念金牌</strong>：特殊場合製作的純金紀念幣/牌</li>
        <li><strong>獎項金牌</strong>：比賽或活動的純金獎牌</li>
      </ul>

      <h2>金牌回收注意事項</h2>
      <p>金牌通常為薄片設計，鍍金或表面處理可能影響純度，我們會進行鑑定確認：</p>
      <ul>
        <li>確認是純金製作還是鍍金</li>
        <li>去除表面保護膜後計算純金重量</li>
        <li>部分金牌因焊藥較多，重量可能略有減少</li>
      </ul>

      <h2>常見問題 FAQ</h2>
      <h3>Q：神明金牌有宗教意義，回收前需要做什麼儀式嗎？</h3>
      <p>A：這是個人信仰的選擇，我們尊重客戶的決定。</p>
      <h3>Q：金牌很薄，有沒有最低重量限制？</h3>
      <p>A：沒有，任何重量的黃金我們都回收。</p>
      <hr style={{ margin: '2rem 0' }} />
      <h2>立即諮詢</h2>
"""}
}

CTA = """
      <p>📞 電話：<a href="tel:0986821626" style={{ color: '#B8860B' }}>0986-821-626</a></p>
      <p>💬 LINE：<a href="https://line.me/ti/p/~@QPD888" style={{ color: '#06C755' }}>@QPD888</a></p>
      <p>📍 地址：台北市大安區濟南路三段62-1號</p>
      <p>🌐 官網：<a href="https://www.gold-tw.com/" style={{ color: '#B8860B' }}>www.gold-tw.com</a></p>"""

TEMPLATE = '''import {{ Metadata }} from 'next';

export const metadata: Metadata = {{
  title: '{title}',
  description: '{desc}',
  keywords: '{keywords}',
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
            "mainEntityOfPage": {{ "@type": "WebPage", "@id": "https://www.gold-tw.com/blog/{slug}" }},
            "author": {{ "@type": "Organization", "name": "巧品珠寶", "url": "https://www.gold-tw.com" }},
            "publisher": {{ "@type": "Organization", "name": "巧品珠寶", "url": "https://www.gold-tw.com" }},
            "image": {{ "@type": "ImageObject", "url": "https://www.gold-tw.com/images/og-image.jpg", "width": 1200, "height": 630 }},
            "datePublished": "2026-03-15",
            "dateModified": "2026-03-16"
          }})
        }}}}
      />
      <h1>{h1}</h1>
{content}
{cta}
    </main>
  );
}}
'''

updated = 0
for slug, info in articles.items():
    filepath = os.path.join(blog_dir, slug, "page.tsx")
    if not os.path.exists(os.path.dirname(filepath)):
        print(f"Dir not found: {slug}")
        continue
    
    content_str = TEMPLATE.format(
        title=info['title'],
        desc=info['desc'],
        keywords=info['keywords'],
        slug=slug,
        h1=info['h1'],
        content=info['content'],
        cta=CTA
    )
    
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content_str)
    updated += 1
    print(f"Done: {slug}")

print(f"\nTotal: {updated} articles written")
