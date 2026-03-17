import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '金幣回收｜紀念金幣變現｜巧品珠寶',
  description: '金幣、紀念幣高價回收！各國金幣、台灣銀行金幣均可，按含金量計價。台北巧品珠寶免費估價，電話 0986-821-626。',
  keywords: '金幣回收,紀念金幣,投資金幣',
  alternates: {
    canonical: 'https://www.gold-tw.com/blog/gold-coin-recovery',
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
          __html: JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"首頁","item":"https://www.gold-tw.com"},{"@type":"ListItem","position":2,"name":"知識專欄","item":"https://www.gold-tw.com/blog"},{"@type":"ListItem","position":3,"name":"金幣回收｜紀念金幣變現｜巧品珠寶"}]})
        }}
      />
      <h1>金幣回收｜紀念金幣變現</h1>
      <h2>結論：金幣收藏也能變現！</h2>
      <p>各種紀念金幣、投資金幣都可以回收。</p>
      <h2>回收項目</h2>
      <ul>
        <li>紀念金幣</li>
        <li>投資金幣</li>
        <li>套幣</li>
      </ul>
      <div style={{ margin: '2rem 0', padding: '1.5rem', background: '#FEF9E7', borderRadius: '8px', borderLeft: '4px solid #B8860B' }}>
        <strong>相關文章：</strong>
        <ul style={{ marginTop: '0.5rem', paddingLeft: '1.5rem' }}>
        <li><a href="/blog/gold-coin-invest" style={{ color: "#B8860B" }}>黃金硬幣投資</a></li>
        <li><a href="/blog/gold-bar-recovery" style={{ color: "#B8860B" }}>黃金條塊回收</a></li>
        <li><a href="/blog/gold-9999-recovery" style={{ color: "#B8860B" }}>9999純金回收</a></li>
        <li><a href="/blog/gold-appraise" style={{ color: "#B8860B" }}>黃金免費估價</a></li>
        </ul>
      </div>

      <hr style={{ margin: '2rem 0' }} />
      <p>📞 電話：0986-821-626</p>
      <p>💬 LINE：@QPD888</p>
      <p>🌐 官網：https://www.gold-tw.com/</p>
    </main>
  );
}
