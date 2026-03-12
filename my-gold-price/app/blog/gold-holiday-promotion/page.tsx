import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '黃金節日優惠｜過年過節活動｜巧品珠寶',
  description: '節日期間黃金回收有優惠嗎？過年過節活動資訊。',
  keywords: '黃金優惠,節日活動,過年黃金',
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
            "headline": "黃金節日優惠｜過年過節活動",
            "author": { "@type": "Organization", "name": "巧品珠寶" },
            "publisher": { "@type": "Organization", "name": "巧品珠寶" },
            "datePublished": "2026-03-12",
            "description": "節日期間黃金回收有優惠嗎？過年過節活動資訊"
          })
        }}
      />
      <h1>黃金節日優惠｜過年過節活動</h1>
      <h2>結論：節日價格可能更好！</h2>
      <p>了解節日期間的黃金回收優惠活動。</p>
      <hr style={{ margin: '2rem 0' }} />
      <p>📞 電話：0986-821-626</p>
      <p>💬 LINE：@QPD888</p>
      <p>🌐 官網：https://www.gold-tw.com/</p>
    </main>
  );
}
