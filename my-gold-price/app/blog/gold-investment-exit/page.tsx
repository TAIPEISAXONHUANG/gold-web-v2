import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '黃金投資退出策略｜何時賣出獲利了結｜巧品珠寶',
  description: '黃金投資怎麼退場？什麼時候賣最適合？',
  keywords: '黃金投資,退出策略,獲利了結',
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
            "headline": "黃金投資退出策略｜何時賣出獲利了結",
            "author": { "@type": "Organization", "name": "巧品珠寶" },
            "publisher": { "@type": "Organization", "name": "巧品珠寶" },
            "datePublished": "2026-03-12",
            "description": "黃金投資怎麼退場？什麼時候賣最適合？"
          })
        }}
      />
      <h1>黃金投資退出策略｜何時賣出獲利了結</h1>
      <h2>結論：掌握時機獲利了結！</h2>
      <p>了解黃金投資的退出策略，聰明獲利。</p>
      <hr style={{ margin: '2rem 0' }} />
      <p>📞 電話：0986-821-626</p>
      <p>💬 LINE：@QPD888</p>
      <p>🌐 官網：https://www.gold-tw.com/</p>
    </main>
  );
}
