import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '黃金稅務查詢｜報稅相關須知｜巧品珠寶',
  description: '賣黃金要報稅嗎？稅金怎麼計算？',
  keywords: '黃金稅金,報稅,稅務查詢',
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
            "headline": "黃金稅務查詢｜報稅相關須知",
            "author": { "@type": "Organization", "name": "巧品珠寶" },
            "publisher": { "@type": "Organization", "name": "巧品珠寶" },
            "datePublished": "2026-03-12",
            "description": "賣黃金要報稅嗎？稅金怎麼計算？"
          })
        }}
      />
      <h1>黃金稅務查詢｜報稅相關須知</h1>
      <h2>結論：了解稅務不吃虧！</h2>
      <p>了解黃金交易的稅務相關規定，避免觸法。</p>
      <hr style={{ margin: '2rem 0' }} />
      <p>📞 電話：0986-821-626</p>
      <p>💬 LINE：@QPD888</p>
      <p>🌐 官網：https://www.gold-tw.com/</p>
    </main>
  );
}
