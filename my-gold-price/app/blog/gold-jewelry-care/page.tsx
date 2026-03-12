import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '黃金飾品保養大全｜延長首飾壽命｜巧品珠寶',
  description: '黃金飾品保養知識！如何讓你的黃金首飾保持光澤？專家告訴你正確保養方法。',
  keywords: '黃金保養,飾品保養,黃金清潔',
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
            "headline": "黃金飾品保養大全｜延長首飾壽命",
            "author": { "@type": "Organization", "name": "巧品珠寶" },
            "publisher": { "@type": "Organization", "name": "巧品珠寶" },
            "datePublished": "2026-03-12",
            "description": "黃金飾品保養知識，讓你的黃金首飾保持光澤"
          })
        }}
      />
      <h1>黃金飾品保養大全｜延長首飾壽命</h1>
      <h2>結論：正確保養讓黃金永保光澤！</h2>
      <p>黃金飾品需要定期保養，正確方法可以延長使用壽命。</p>
      <hr style={{ margin: '2rem 0' }} />
      <p>📞 電話：0986-821-626</p>
      <p>💬 LINE：@QPD888</p>
      <p>🌐 官網：https://www.gold-tw.com/</p>
    </main>
  );
}
