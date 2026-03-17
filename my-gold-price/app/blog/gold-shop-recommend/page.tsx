import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '黃金回收推薦｜誠信店家｜巧品珠寶',
  description: '台北黃金回收店推薦！如何選擇誠信、高價的黃金回收商？巧品珠寶老闆親自估價，公開透明，電話 0986-821-626。',
  keywords: '黃金回收推薦,誠信黃金,可信賴店家',
  alternates: {
    canonical: 'https://www.gold-tw.com/blog/gold-shop-recommend',
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
          __html: JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"首頁","item":"https://www.gold-tw.com"},{"@type":"ListItem","position":2,"name":"知識專欄","item":"https://www.gold-tw.com/blog"},{"@type":"ListItem","position":3,"name":"黃金回收推薦｜誠信店家｜巧品珠寶"}]})
        }}
      />
      <h1>黃金回收推薦｜誠信店家</h1>
      <h2>結論：選擇黃金回收店家的關鍵要点</h2>
      <h2>如何選擇</h2>
      <ul>
        <li>誠信經營</li>
        <li>價格透明</li>
        <li>當日付款</li>
        <li>專業檢測</li>
      </ul>
      <div style={{ margin: '2rem 0', padding: '1.5rem', background: '#FEF9E7', borderRadius: '8px', borderLeft: '4px solid #B8860B' }}>
        <strong>相關文章：</strong>
        <ul style={{ marginTop: '0.5rem', paddingLeft: '1.5rem' }}>
        <li><a href="/blog/how-to-choose-gold-shop" style={{ color: "#B8860B" }}>如何選黃金回收店</a></li>
        <li><a href="/blog/gold-shop-vs-recycling-shop" style={{ color: "#B8860B" }}>銀樓vs回收商</a></li>
        <li><a href="/blog/taipei-gold-recovery" style={{ color: "#B8860B" }}>台北黃金回收推薦</a></li>
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
