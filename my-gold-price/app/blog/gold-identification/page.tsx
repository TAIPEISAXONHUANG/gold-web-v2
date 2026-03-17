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
      <h1>黃金真假辨識教學</h1>
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
