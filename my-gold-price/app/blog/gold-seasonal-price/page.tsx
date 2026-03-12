import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '黃金季節性價格｜淡旺季分析｜巧品珠寶',
  description: '黃金什麼季節價格最好？淡旺季分析。',
  keywords: '黃金淡季,黃金旺季,季節價格',
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
            "headline": "黃金季節性價格｜淡旺季分析",
            "author": { "@type": "Organization", "name": "巧品珠寶" },
            "publisher": { "@type": "Organization", "name": "巧品珠寶" },
            "datePublished": "2026-03-12",
            "description": "黃金什麼季節價格最好？淡旺季分析"
          })
        }}
      />
      <h1>黃金季節性價格｜淡旺季分析</h1>
      <h2>結論：選對時機賣更好！</h2>
      <p>了解黃金價格的季節性變化，選擇最佳時機變現。</p>
      <hr style={{ margin: '2rem 0' }} />
      <p>📞 電話：0986-821-626</p>
      <p>💬 LINE：@QPD888</p>
      <p>🌐 官網：https://www.gold-tw.com/</p>
    </main>
  );
}
