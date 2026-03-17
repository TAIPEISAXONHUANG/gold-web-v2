import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '黃金回收必知｜新手必看｜巧品珠寶',
  description: '賣黃金必知5件事！了解計價方式、常見陷阱、所需證件，選對店家讓你每台錢多拿 500 元。台北巧品珠寶免費估價。',
  keywords: '黃金回收必知,第一次賣黃金,黃金新手',
  alternates: {
    canonical: 'https://www.gold-tw.com/blog/gold-should-know',
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
          __html: JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"首頁","item":"https://www.gold-tw.com"},{"@type":"ListItem","position":2,"name":"知識專欄","item":"https://www.gold-tw.com/blog"},{"@type":"ListItem","position":3,"name":"黃金回收必知｜新手必看｜巧品珠寶"}]})
        }}
      />
      <h1>黃金回收必知｜新手必看</h1>
      <h2>結論：第一次賣黃金要注意這幾點！</h2>
      <h2>新手教學</h2>
      <ul>
        <li>📍 查當日金價</li>
        <li>📍 攜帶證件</li>
        <li>📍 現場秤重</li>
        <li>📍 選擇誠信店家</li>
      </ul>
      <div style={{ margin: '2rem 0', padding: '1.5rem', background: '#FEF9E7', borderRadius: '8px', borderLeft: '4px solid #B8860B' }}>
        <strong>相關文章：</strong>
        <ul style={{ marginTop: '0.5rem', paddingLeft: '1.5rem' }}>
        <li><a href="/blog/before-selling-gold" style={{ color: "#B8860B" }}>賣黃金前準備</a></li>
        <li><a href="/blog/gold-appraise" style={{ color: "#B8860B" }}>黃金免費估價</a></li>
        <li><a href="/blog/gold-id-requirement" style={{ color: "#B8860B" }}>賣黃金要帶什麼證件</a></li>
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
