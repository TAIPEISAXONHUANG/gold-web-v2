import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '黃金怎麼看真假｜黃金辨識｜巧品珠寶',
  description: '黃金真偽鑑定完整指南！教你用磁石、比重、酸液測試辨識真假黃金，了解K金成色標記，避免買到假貨或被低估。',
  keywords: '黃金真假,黃金辨識,黃金純度檢測',
  alternates: {
    canonical: 'https://www.gold-tw.com/blog/gold-identification',
  },
  openGraph: {
    locale: 'zh_TW',
    title: '黃金怎麼看真假｜黃金辨識｜巧品珠寶',
    description: '黃金真偽鑑定完整指南！教你用磁石、比重、酸液測試辨識真假黃金，了解K金成色標記，避免買到假貨或被低估。',
    type: 'article',
    url: 'https://www.gold-tw.com/blog/gold-identification',
    siteName: '巧品珠寶',
    publishedTime: '2026-03-12T00:00:00+08:00',
    modifiedTime: '2026-03-16T00:00:00+08:00',
    images: [{ url: '/og-image.webp', width: 1200, height: 630, alt: '巧品珠寶' }],

  },
};

// lastModified: 2026-03-19
export default function Page() {
  return (
    <main style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": "黃金真假辨識教學｜4種方法讓你不被騙",
            "author": { "@type": "Person", "name": "鑑定師L", "url": "https://www.gold-tw.com", "@id": "https://www.gold-tw.com/#business" },
            "publisher": { "@type": "Organization", "name": "巧品珠寶", "url": "https://www.gold-tw.com", "logo": { "@type": "ImageObject", "url": "https://wsrv.nl/?url=https://drive.google.com/uc?id=16UrCpYWRkyEkvL7M73o0DIAvkKWtF0Lp&w=200&output=webp" } },
            "datePublished": "2026-03-12",
              "dateModified": "2026-03-16T00:00:00+08:00",
            "description": "黃金回收專業知識"
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"首頁","item":"https://www.gold-tw.com"},{"@type":"ListItem","position":2,"name":"知識專欄","item":"https://www.gold-tw.com/blog"},{"@type":"ListItem","position":3,"name":"黃金怎麼看真假｜黃金辨識｜巧品珠寶"}]})
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({"@context":"https://schema.org","@type":"HowTo","name":"黃金真偽辨識方法教學","description":"4種辨識黃金真偽的方法，從簡易到專業一次學會。","step":[{"@type":"HowToStep","position":1,"name":"檢查印記標示","text":"正規金飾會刻有純度標示如「999」「750」「585」等，這是最基本的辨識方式。"},{"@type":"HowToStep","position":2,"name":"磁鐵測試","text":"純金不會被磁鐵吸附。如果金飾被磁鐵吸住，代表含有鐵、鎳等金屬，並非純金。"},{"@type":"HowToStep","position":3,"name":"比重測試（水測法）","text":"將金飾放入水中，純金比重約19.3，透過排水量與重量可推算純度。"},{"@type":"HowToStep","position":4,"name":"XRF螢光分析儀檢測","text":"最精確的方法。專業儀器可在不損傷物品的情況下，測出各金屬成分的精確百分比。"}]})
        }}
      />
      <h1>黃金真假辨識教學｜4種方法讓你不被騙</h1>

      <div style={{background:'#fffbeb', borderLeft:'4px solid #f59e0b', padding:'16px', margin:'16px 0', borderRadius:'8px'}}>
        <strong>📌 重點摘要：</strong> 辨識黃金真偽的方法：看印記標示、磁鐵測試、比重測試（水測法）、XRF螢光分析。建議到專業店家使用儀器鑑定最準確。
      </div>

      <h2>結論：掌握這幾招，黃金真假輕鬆辨識</h2>
      <p>市面上有鍍金、包金等各種黃金仿品，外觀與真金非常相似，不具備專業知識很難分辨。本文介紹從簡單到專業的黃金辨識方法，幫助您購買或出售黃金時保障自身權益。如果您想了解黃金回收，可先查看<a href="/blog/gold-purity" style={{ color: '#B8860B' }}>黃金純度說明</a>，了解不同純度的含金量。</p>

      <h2>方法一：看印記標示（最簡單）</h2>
      <p>正規金飾會刻有純度標示，這是最基本的辨識方式：</p>
      <ul>
        <li><strong>999 / 9999</strong>：足金（24K），含金99.9%以上</li>
        <li><strong>916</strong>：22K金，含金91.6%</li>
        <li><strong>750</strong>：18K金，含金75%</li>
        <li><strong>585</strong>：14K金，含金58.5%</li>
        <li><strong>375</strong>：9K金，含金37.5%</li>
        <li><strong>Pt950 / Pt900</strong>：鉑金（白金），非黃金</li>
        <li><strong>S925 / S950</strong>：銀飾，非黃金</li>
      </ul>
      <p>注意：印記只是初步判斷，因為印記也可能被偽造，最終還是需要儀器鑑定確認。</p>

      <h2>方法二：磁鐵測試（在家可做）</h2>
      <p>黃金是抗磁性金屬，純金不會被磁鐵吸附。測試方法：</p>
      <ol>
        <li>準備一個較強的磁鐵（如釹鐵硼磁鐵）</li>
        <li>將疑似黃金的物品靠近磁鐵</li>
        <li>若被磁鐵吸引，表示含有鐵或鎳等磁性金屬，並非純金</li>
        <li>不被吸引，則可能是黃金（但也可能是其他非磁性金屬）</li>
      </ol>
      <p>注意：此方法只能排除假金，無法確認是真金。銅、鋁等金屬也不會被磁鐵吸附，但並非黃金。</p>

      <h2>方法三：比重測試（水測法）</h2>
      <p>黃金的比重為19.3 g/cm³，遠高於大多數金屬。水測法步驟：</p>
      <ol>
        <li>將金飾放在精確的天平上秤重，記錄重量（A）</li>
        <li>在容器中裝水，放入天平後歸零</li>
        <li>將金飾懸掛在水中（不接觸容器壁），記錄此時的重量（B）</li>
        <li>計算比重：A÷B</li>
        <li>純金比重約19.3，若比重明顯偏低，可能含有其他金屬</li>
      </ol>
      <p>此方法需要精確的天平和計算，一般人在家較難操作，建議到專業店家鑑定。</p>

      <h2>方法四：XRF螢光分析儀（最精確）</h2>
      <p>XRF（X射線螢光分析儀）是最精確的黃金鑑定方法：</p>
      <ul>
        <li>可在<strong>不損傷金飾</strong>的情況下，測出各金屬成分的精確百分比</li>
        <li>測試結果精確到0.1%以內</li>
        <li>可同時分析黃金、鉑金、銀、銅等多種成分</li>
        <li>巧品珠寶使用此儀器進行免費鑑定</li>
      </ul>

      <h2>其他辨識有哪些方法？</h2>
      <ul>
        <li><strong>硝酸測試</strong>：在不顯眼的地方滴一滴硝酸，純金不反應，假金會冒泡變色。此方法較具破壞性，建議由專業人員操作</li>
        <li><strong>聲音辨別</strong>：純金落地聲音較沉穆，鍍金或合金聲音較清脆（需要熟練才能判斷）</li>
        <li><strong>顏色觀察</strong>：純金（24K）顏色最黃最亮，K數越低顏色越淡（18K已有明顯差別）</li>
        <li><strong>手感重量</strong>：黃金密度高，同體積的黃金比大多數金屬重，鍍金品往往感覺輕</li>
      </ul>

      <h2>常見黃金仿品有哪些種類？</h2>
      <p>了解市面上的仿品，有助於提高警覺：</p>
      <ul>
        <li><strong>鍍金（Gold Plated）</strong>：在其他金屬表面電鍍一層薄金，外觀相似但含金量極低</li>
        <li><strong>包金（Gold Filled）</strong>：在基底金屬上包覆較厚的金層，含金量約5-10%</li>
        <li><strong>合金假冒</strong>：以黃銅（銅鋅合金）冒充黃金，顏色相似但密度和硬度不同</li>
        <li><strong>鎢金條</strong>：鎢的密度（19.3 g/cm³）與黃金相近，有不肖業者製作鎢芯外包金的假金條</li>
      </ul>
      <p>了解如何識別這些詐騙手法，詳見<a href="/blog/gold-scam-prevent" style={{ color: '#B8860B' }}>黃金詐騙防範</a>。</p>

      <h2>到巧品珠寶免費鑑定</h2>
      <p>如果您對手中黃金的真偽或純度有疑問，最好的方式是攜帶至有信譽的回收店家進行專業鑑定。巧品珠寶提供：</p>
      <ul>
        <li>XRF螢光分析儀免費鑑定</li>
        <li>不強迫交易，鑑定後不賣也沒關係</li>
        <li>結果當場告知，公開透明</li>
        <li>專業人員解釋鑑定結果</li>
      </ul>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"怎麼辨別黃金真假？","acceptedAnswer":{"@type":"Answer","text":"四種方法：看印記標示、磁鐵測試（純金不會被吸）、水測比重法、XRF儀器檢測（最準確）。"}},{"@type":"Question","name":"假金飾很常見嗎？","acceptedAnswer":{"@type":"Answer","text":"市面上確實有鍍金、包金等仿品。建議到有專業儀器的店家鑑定，不要只靠肉眼判斷。"}},{"@type":"Question","name":"鑑定黃金要收費嗎？","acceptedAnswer":{"@type":"Answer","text":"巧品珠寶提供免費鑑定估價服務，不強迫交易，鑑定後不賣也沒關係。"}},{"@type":"Question","name":"磁鐵測試可以確認黃金是真的嗎？","acceptedAnswer":{"@type":"Answer","text":"磁鐵測試只能排除含鐵、鎳等磁性金屬的假金，但不被吸引不代表一定是真金（銅、鋁等也不被磁鐵吸附）。需要搭配其他方法或專業儀器確認。"}},{"@type":"Question","name":"沒有印記的黃金是假的嗎？","acceptedAnswer":{"@type":"Answer","text":"不一定。早期台灣金飾可能沒有印記，或印記已磨損。沒有印記不代表是假金，需要儀器鑑定確認。"}}]})
        }}
      />
      <section style={{marginTop:'2.5rem', padding:'2rem', background:'#f9fafb', borderRadius:'12px', border:'1px solid #e5e7eb'}}>
        <h2 style={{fontSize:'1.3rem', fontWeight:'bold', color:'#1f2937', marginTop:0, marginBottom:'1rem'}}>❓ 常見問題</h2>
        <div style={{marginBottom:'1rem', background:'white', padding:'1rem', borderRadius:'8px', border:'1px solid #e5e7eb'}}>
          <h3 style={{margin:'0 0 0.5rem 0', fontSize:'1rem', color:'#1f2937'}}>Q: 怎麼辨別黃金真假？</h3>
          <p style={{margin:0, color:'#4b5563', lineHeight:'1.6'}}>A: 四種方法：看印記標示、磁鐵測試（純金不會被吸）、水測比重法、XRF儀器檢測（最準確）。</p>
        </div>
        <div style={{marginBottom:'1rem', background:'white', padding:'1rem', borderRadius:'8px', border:'1px solid #e5e7eb'}}>
          <h3 style={{margin:'0 0 0.5rem 0', fontSize:'1rem', color:'#1f2937'}}>Q: 假金飾很常見嗎？</h3>
          <p style={{margin:0, color:'#4b5563', lineHeight:'1.6'}}>A: 市面上確實有鍍金、包金等仿品。建議到有專業儀器的店家鑑定，不要只靠肉眼判斷。</p>
        </div>
        <div style={{marginBottom:'1rem', background:'white', padding:'1rem', borderRadius:'8px', border:'1px solid #e5e7eb'}}>
          <h3 style={{margin:'0 0 0.5rem 0', fontSize:'1rem', color:'#1f2937'}}>Q: 鑑定黃金要收費嗎？</h3>
          <p style={{margin:0, color:'#4b5563', lineHeight:'1.6'}}>A: 巧品珠寶提供免費鑑定估價服務，不強迫交易，鑑定後不賣也沒關係。</p>
        </div>
        <div style={{marginBottom:'1rem', background:'white', padding:'1rem', borderRadius:'8px', border:'1px solid #e5e7eb'}}>
          <h3 style={{margin:'0 0 0.5rem 0', fontSize:'1rem', color:'#1f2937'}}>Q: 磁鐵測試可以確認黃金是真的嗎？</h3>
          <p style={{margin:0, color:'#4b5563', lineHeight:'1.6'}}>A: 磁鐵測試只能排除含鐵、鎳等磁性金屬的假金，但不被吸引不代表一定是真金。需要搭配其他方法或專業儀器確認。</p>
        </div>
      </section>
      <div style={{ margin: '2rem 0', padding: '1.5rem', background: '#FEF9E7', borderRadius: '8px', borderLeft: '4px solid #B8860B' }}>
        <strong>延伸閱讀：</strong>
        <ul style={{ marginTop: '0.5rem', paddingLeft: '1.5rem' }}>
          <li><a href="/blog/gold-purity" style={{ color: '#B8860B' }}>黃金純度說明</a></li>
          <li><a href="/blog/karat-gold-guide" style={{ color: '#B8860B' }}>K金完整指南</a></li>
          <li><a href="/blog/gold-appraise" style={{ color: '#B8860B' }}>黃金免費估價</a></li>
          <li><a href="/blog/gold-scam-prevent" style={{ color: '#B8860B' }}>黃金詐騙防範</a></li>
          <li><a href="/blog/old-gold-recovery" style={{ color: '#B8860B' }}>舊金回收指南</a></li>
          <li><a href="/blog/before-selling-gold" style={{ color: '#B8860B' }}>賣黃金前必知事項</a></li>
        </ul>
      </div>

      <hr style={{ margin: '2rem 0' }} />
      <h2>立即諮詢</h2>
      <p>📞 電話：<a href="tel:0986821626" style={{ color: '#B8860B' }}>0986-821-626</a></p>
      <p>💬 LINE：<a href="https://line.me/ti/p/~@QPD888" target="_blank" style={{ color: '#06C755' }} rel="noopener noreferrer">@QPD888</a></p>
      <p>🌐 官網：<a href="https://www.gold-tw.com/" style={{ color: '#B8860B' }} target="_blank" rel="noopener noreferrer">www.gold-tw.com</a></p>
    </main>
  );
}
