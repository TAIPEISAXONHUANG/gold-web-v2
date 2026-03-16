import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '白金回收｜鉑金回收｜巧品珠寶',
  description: '白金、鉑金高價回收！Pt950、Pt900各純度均可，按重量現金付款。台北大安區巧品珠寶免費估價，電話 0986-821-626。',
  keywords: '白金回收,鉑金回收,Pt950回收',
  alternates: {
    canonical: 'https://www.gold-tw.com/blog/platinum-recovery',
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
      <h1>白金回收｜鉑金回收首選</h1>
      <h2>結論：白金回收選對管道很重要</h2>
      <p>白金（鉑金）是貴金屬之一，回收價值高。</p>
      <h2>我們的服務</h2>
      <ul>
        <li>現場秤重</li>
        <li>專業檢測</li>
        <li>當日付款</li>
      </ul>
      <div style={{ margin: '2rem 0', padding: '1.5rem', background: '#FEF9E7', borderRadius: '8px', borderLeft: '4px solid #B8860B' }}>
        <strong>相關文章：</strong>
        <ul style={{ marginTop: '0.5rem', paddingLeft: '1.5rem' }}>
        <li><a href="/blog/gold-vs-platinum" style={{ color: "#B8860B" }}>黃金vs白金比較</a></li>
        <li><a href="/blog/gold-vs-k-gold-vs-platinum" style={{ color: "#B8860B" }}>黃金vs K金vs白金</a></li>
        <li><a href="/blog/karat-gold-recovery" style={{ color: "#B8860B" }}>K金回收指南</a></li>
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
