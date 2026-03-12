import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '黃金保險建議｜交易安全保障｜巧品珠寶',
  description: '黃金交易要保險嗎？如何保障安全？',
  keywords: '黃金保險,交易保險,安全保障',
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
            "headline": "黃金保險建議｜交易安全保障",
            "author": { "@type": "Organization", "name": "巧品珠寶" },
            "publisher": { "@type": "Organization", "name": "巧品珠寶" },
            "datePublished": "2026-03-12",
            "description": "黃金交易要保險嗎？如何保障安全？"
          })
        }}
      />
      <h1>黃金保險建議｜交易安全保障</h1>
      <h2>結論：確保交易安全！</h2>
      <p>了解黃金交易的保險與安全保障措施。</p>
      <hr style={{ margin: '2rem 0' }} />
      <p>📞 電話：0986-821-626</p>
      <p>💬 LINE：@QPD888</p>
      <p>🌐 官網：https://www.gold-tw.com/</p>
    </main>
  );
}
