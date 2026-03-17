import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '黃金回收注意事項｜賣黃金不被坑｜巧品珠寶',
  description: '賣黃金不吃虧！黃金回收實用技巧大全，選對時機、選對店家，讓你每次賣黃金都能拿到最划算的價格。',
  keywords: '黃金回收注意,賣黃金不被坑,黃金回收陷阱',
  alternates: {
    canonical: 'https://www.gold-tw.com/blog/gold-recycling-tips',
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
            "author": { "@type": "Organization", "name": "巧品珠寶" },
            "publisher": { "@type": "Organization", "name": "巧品珠寶" },
            "datePublished": "2026-03-12",
              "dateModified": "2026-03-16T00:00:00+08:00",
            "description": "黃金回收專業知識"
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"首頁","item":"https://www.gold-tw.com"},{"@type":"ListItem","position":2,"name":"知識專欄","item":"https://www.gold-tw.com/blog"},{"@type":"ListItem","position":3,"name":"黃金回收注意事項｜賣黃金不被坑｜巧品珠寶"}]})
        }}
      />
      <h1>黃金回收注意事項｜賣黃金必看攻略</h1>
      
      <h2>結論：記住這幾點，賣黃金不吃虧</h2>
      <p>市場上有許多回收話術，本文帶您了解常見陷阱與應對方法。</p>

      <h2>黃金回收常見話術</h2>
      <ul>
        <li>「扣耗損」- 其實不用</li>
        <li>「扣秤」- 正常的秤應該精準</li>
        <li>「行情不好」- 實際行情可查詢</li>
      </ul>

      <h2>自保方法</h2>
      <ul>
        <li>先查當日金價</li>
        <li>選擇誠信店家</li>
        <li>現場秤重確認</li>
        <li>拒絕不合理扣款</li>
      </ul>

      <div style={{ margin: '2rem 0', padding: '1.5rem', background: '#FEF9E7', borderRadius: '8px', borderLeft: '4px solid #B8860B' }}>
        <strong>相關文章：</strong>
        <ul style={{ marginTop: '0.5rem', paddingLeft: '1.5rem' }}>
        <li><a href="/blog/sell-gold-tips" style={{ color: "#B8860B" }}>賣黃金技巧</a></li>
        <li><a href="/blog/why-some-get-better-gold-price" style={{ color: "#B8860B" }}>為什麼有人拿到更高價</a></li>
        <li><a href="/blog/gold-appraise" style={{ color: "#B8860B" }}>黃金免費估價</a></li>
        <li><a href="/blog/gold-shop-recommend" style={{ color: "#B8860B" }}>台北黃金回收推薦</a></li>
        </ul>
      </div>

      <hr style={{ margin: '2rem 0' }} />

      <h2>立即聯繫</h2>
      <p>📞 電話：0986-821-626</p>
      <p>💬 LINE：@QPD888</p>
      <p>🌐 官網：https://www.gold-tw.com/</p>
    </main>
  );
}
