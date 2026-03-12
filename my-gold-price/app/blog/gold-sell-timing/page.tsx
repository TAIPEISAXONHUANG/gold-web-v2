import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '黃金變現時機｜什麼時候賣最划算｜巧品珠寶',
  description: '黃金什麼時候賣最好？掌握時機讓你賺更多。',
  keywords: '黃金時機,賣黃金時間,金價走勢',
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
            "headline": "黃金變現時機｜什麼時候賣最划算",
            "author": { "@type": "Organization", "name": "巧品珠寶" },
            "publisher": { "@type": "Organization", "name": "巧品珠寶" },
            "datePublished": "2026-03-12",
            "description": "黃金什麼時候賣最好？掌握時機讓你賺更多"
          })
        }}
      />
      <h1>黃金變現時機｜什麼時候賣最划算</h1>
      <h2>結論：掌握時機很重要！</h2>
      <p>黃金價格會波動，選擇適當時機變現可以獲得更好價格。</p>
      <hr style={{ margin: '2rem 0' }} />
      <p>📞 電話：0986-821-626</p>
      <p>💬 LINE：@QPD888</p>
      <p>🌐 官網：https://www.gold-tw.com/</p>
    </main>
  );
}
