import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '黃金現場比較｜線上vs實體店家｜巧品珠寶',
  description: '線上估價和現場估價哪個準？各有什麼優缺點？',
  keywords: '現場估價,線上比較,實體店家',
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
            "headline": "黃金現場比較｜線上vs實體店家",
            "author": { "@type": "Organization", "name": "巧品珠寶" },
            "publisher": { "@type": "Organization", "name": "巧品珠寶" },
            "datePublished": "2026-03-12",
            "description": "線上估價和現場估價哪個準？各有什麼優缺點？"
          })
        }}
      />
      <h1>黃金現場比較｜線上vs實體店家</h1>
      <h2>結論：現場估價最準確！</h2>
      <p>了解線上和現場估價的差異，選擇最適合的方式。</p>
      <hr style={{ margin: '2rem 0' }} />
      <p>📞 電話：0986-821-626</p>
      <p>💬 LINE：@QPD888</p>
      <p>🌐 官網：https://www.gold-tw.com/</p>
    </main>
  );
}
