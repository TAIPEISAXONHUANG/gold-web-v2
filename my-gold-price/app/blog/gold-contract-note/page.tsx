import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '黃金回收合約注意事項｜保障自身權益｜巧品珠寶',
  description: '賣黃金要簽約嗎？合約要注意哪些重點？',
  keywords: '黃金合約,回收注意事項,權益保障',
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
            "headline": "黃金回收合約注意事項｜保障自身權益",
            "author": { "@type": "Organization", "name": "巧品珠寶" },
            "publisher": { "@type": "Organization", "name": "巧品珠寶" },
            "datePublished": "2026-03-12",
            "description": "賣黃金要簽約嗎？合約要注意哪些重點？"
          })
        }}
      />
      <h1>黃金回收合約注意事項｜保障自身權益</h1>
      <h2>結論：簽約保障雙方！</h2>
      <p>了解合約重要條款，保護自己的權益。</p>
      <hr style={{ margin: '2rem 0' }} />
      <p>📞 電話：0986-821-626</p>
      <p>💬 LINE：@QPD888</p>
      <p>🌐 官網：https://www.gold-tw.com/</p>
    </main>
  );
}
