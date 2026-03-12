import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '黃金線上估價｜快速了解行情｜巧品珠寶',
  description: '黃金可以線上估價嗎？怎麼獲得快速報價？',
  keywords: '線上估價,黃金估價,線上報價',
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
            "headline": "黃金線上估價｜快速了解行情",
            "author": { "@type": "Organization", "name": "巧品珠寶" },
            "publisher": { "@type": "Organization", "name": "巧品珠寶" },
            "datePublished": "2026-03-12",
            "description": "黃金可以線上估價嗎？怎麼獲得快速報價？"
          })
        }}
      />
      <h1>黃金線上估價｜快速了解行情</h1>
      <h2>結論：線上估價超方便！</h2>
      <p>了解如何使用線上估價服務，快速了解黃金行情。</p>
      <hr style={{ margin: '2rem 0' }} />
      <p>📞 電話：0986-821-626</p>
      <p>💬 LINE：@QPD888</p>
      <p>🌐 官網：https://www.gold-tw.com/</p>
    </main>
  );
}
