import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '黃金回收收據重要性｜為什麼要拿收據｜巧品珠寶',
  description: '賣黃金一定要收據嗎？收據有什麼用處？',
  keywords: '黃金收據,交易證明,回收證明',
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
            "headline": "黃金回收收據重要性｜為什麼要拿收據",
            "author": { "@type": "Organization", "name": "巧品珠寶" },
            "publisher": { "@type": "Organization", "name": "巧品珠寶" },
            "datePublished": "2026-03-12",
            "description": "賣黃金一定要收據嗎？收據有什麼用處？"
          })
        }}
      />
      <h1>黃金回收收據重要性｜為什麼要拿收據</h1>
      <h2>結論：收據保障交易安全！</h2>
      <p>了解收據的重要性，確保交易有憑有據。</p>
      <hr style={{ margin: '2rem 0' }} />
      <p>📞 電話：0986-821-626</p>
      <p>💬 LINE：@QPD888</p>
      <p>🌐 官網：https://www.gold-tw.com/</p>
    </main>
  );
}
