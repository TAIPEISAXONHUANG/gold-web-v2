import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '黃金回收詐騙類型｜常見手法公開｜巧品珠寶',
  description: '黃金回收常見詐騙手法！教你如何避免被騙。',
  keywords: '黃金詐騙,回收陷阱,防騙指南',
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
            "headline": "黃金回收詐騙類型｜常見手法公開",
            "author": { "@type": "Organization", "name": "巧品珠寶" },
            "publisher": { "@type": "Organization", "name": "巧品珠寶" },
            "datePublished": "2026-03-12",
            "description": "黃金回收常見詐騙手法！教你如何避免被騙"
          })
        }}
      />
      <h1>黃金回收詐騙類型｜常見手法公開</h1>
      <h2>結論：提高警覺不受騙！</h2>
      <p>了解常見詐騙手法，保護自己的黃金資產安全。</p>
      <hr style={{ margin: '2rem 0' }} />
      <p>📞 電話：0986-821-626</p>
      <p>💬 LINE：@QPD888</p>
      <p>🌐 官網：https://www.gold-tw.com/</p>
    </main>
  );
}
