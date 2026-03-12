import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '黃金價格比較｜哪家報價最高｜巧品珠寶',
  description: '黃金回收價格怎麼比？多家比較讓你賣得更高價。',
  keywords: '黃金價格比較,報價,比價',
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
            "headline": "黃金價格比較｜哪家報價最高",
            "author": { "@type": "Organization", "name": "巧品珠寶" },
            "publisher": { "@type": "Organization", "name": "巧品珠寶" },
            "datePublished": "2026-03-12",
            "description": "黃金回收價格怎麼比？多家比較讓你賣得更高價"
          })
        }}
      />
      <h1>黃金價格比較｜哪家報價最高</h1>
      <h2>結論：多方比較不吃虧！</h2>
      <p>不同店家報價可能有差異，多方比較能賣得更好價格。</p>
      <hr style={{ margin: '2rem 0' }} />
      <p>📞 電話：0986-821-626</p>
      <p>💬 LINE：@QPD888</p>
      <p>🌐 官網：https://www.gold-tw.com/</p>
    </main>
  );
}
