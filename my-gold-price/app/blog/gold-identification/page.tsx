import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '黃金怎麼看真假｜黃金辨識｜巧品珠寶',
  description: '黃金真偽鑑定完整指南！教你用磁石、比重、酸液測試辨識真假黃金，了解K金成色標記，避免買到假貨或被低估。',
  keywords: '黃金真假,黃金辨識,黃金純度檢測',
  alternates: {
    canonical: 'https://www.gold-tw.com/blog/gold-identification',
  },
};

export default function Page() {
  return (
    <main style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "author": { "@type": "Organization", "name": "巧品珠寶", "url": "https://www.gold-tw.com", "@id": "https://www.gold-tw.com/#business" },
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
      <h1>黃金真假辨識教學</h1>

      <div style={{background:'#fffbeb', borderLeft:'4px solid #f59e0b', padding:'16px', margin:'16px 0', borderRadius:'8px'}}>
        <strong>📌 重點摘要：</strong> 辨識黃金真偽的方法：看印記標示、磁鐵測試、比重測試（水測法）、XRF螢光分析。建議到專業店家使用儀器鑑定最準確。
      </div>
      <h2>結論：掌握這幾招，黃金真假輕鬆辨識</h2>
      <h2>簡易辨識方法</h2>
      <ul>
        <li>📍 觀察標記</li>
        <li>📍 測試吸磁</li>
        <li>📍 比重測試</li>
      </ul>
      <h2>專業檢測</h2>
      <p>我們提供專業儀器檢測，確保準確。</p>
      <div style={{ margin: '2rem 0', padding: '1.5rem', background: '#FEF9E7', borderRadius: '8px', borderLeft: '4px solid #B8860B' }}>
        <strong>相關文章：</strong>
        <ul style={{ marginTop: '0.5rem', paddingLeft: '1.5rem' }}>
        <li><a href="/blog/gold-purity" style={{ color: "#B8860B" }}>黃金純度說明</a></li>
        <li><a href="/blog/karat-gold-guide" style={{ color: "#B8860B" }}>K金完整指南</a></li>
        <li><a href="/blog/gold-appraise" style={{ color: "#B8860B" }}>黃金免費估價</a></li>
        <li><a href="/blog/gold-scam-prevent" style={{ color: "#B8860B" }}>黃金詐騙防範</a></li>
        </ul>
      </div>

      <hr style={{ margin: '2rem 0' }} />
      <p>📞 電話：0986-821-626</p>
      <p>💬 LINE：@QPD888</p>
      <p>🌐 官網：https://www.gold-tw.com/</p>
    </main>
  );
}
