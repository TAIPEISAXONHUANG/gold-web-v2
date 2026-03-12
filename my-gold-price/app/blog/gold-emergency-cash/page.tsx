import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '黃金緊急變現｜急需用錢怎麼辦｜巧品珠寶',
  description: '急需用錢時，黃金怎麼快速變現？',
  keywords: '緊急變現,急需用錢,黃金周轉',
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
            "headline": "黃金緊急變現｜急需用錢怎麼辦",
            "author": { "@type": "Organization", "name": "巧品珠寶" },
            "publisher": { "@type": "Organization", "name": "巧品珠寶" },
            "datePublished": "2026-03-12",
            "description": "急需用錢時，黃金怎麼快速變現？"
          })
        }}
      />
      <h1>黃金緊急變現｜急需用錢怎麼辦</h1>
      <h2>結論：黃金變現超快！</h2>
      <p>了解如何快速將黃金變現，解決急需用錢的問題。</p>
      <hr style={{ margin: '2rem 0' }} />
      <p>📞 電話：0986-821-626</p>
      <p>💬 LINE：@QPD888</p>
      <p>🌐 官網：https://www.gold-tw.com/</p>
    </main>
  );
}
