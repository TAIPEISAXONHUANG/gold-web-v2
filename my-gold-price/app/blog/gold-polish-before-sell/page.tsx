import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '黃金拋光後賣出｜拋光是否值得｜巧品珠寶',
  description: '黃金首飾拋光後賣出，價格會更好嗎？',
  keywords: '黃金拋光,珠寶拋光,拋光價值',
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
            "headline": "黃金拋光後賣出｜拋光是否值得",
            "author": { "@type": "Organization", "name": "巧品珠寶" },
            "publisher": { "@type": "Organization", "name": "巧品珠寶" },
            "datePublished": "2026-03-12",
            "description": "黃金首飾拋光後賣出，價格會更好嗎？"
          })
        }}
      />
      <h1>黃金拋光後賣出｜拋光是否值得</h1>
      <h2>結論：拋光有成本考量！</h2>
      <p>了解黃金拋光對回收價值的影響。</p>
      <hr style={{ margin: '2rem 0' }} />
      <p>📞 電話：0986-821-626</p>
      <p>💬 LINE：@QPD888</p>
      <p>🌐 官網：https://www.gold-tw.com/</p>
    </main>
  );
}
