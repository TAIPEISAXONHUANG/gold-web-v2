import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '黃金維修後賣出｜修復價值分析｜巧品珠寶',
  description: '黃金首飾損壞了，維修後賣出更值錢？',
  keywords: '黃金維修,珠寶修復,修復價值',
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
            "headline": "黃金維修後賣出｜修復價值分析",
            "author": { "@type": "Organization", "name": "巧品珠寶" },
            "publisher": { "@type": "Organization", "name": "巧品珠寶" },
            "datePublished": "2026-03-12",
            "description": "黃金首飾損壞了，維修後賣出更值錢？"
          })
        }}
      />
      <h1>黃金維修後賣出｜修復價值分析</h1>
      <h2>結論：維修不一定划算！</h2>
      <p>了解黃金維修後的價值變化，做出聰明決定。</p>
      <hr style={{ margin: '2rem 0' }} />
      <p>📞 電話：0986-821-626</p>
      <p>💬 LINE：@QPD888</p>
      <p>🌐 官網：https://www.gold-tw.com/</p>
    </main>
  );
}
