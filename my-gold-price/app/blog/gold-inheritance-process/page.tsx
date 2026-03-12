import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '遺產黃金回收｜繼承黃金變現流程｜巧品珠寶',
  description: '繼承的黃金怎麼處理？遺產黃金回收流程說明。',
  keywords: '遺產黃金,繼承黃金,黃金變現',
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
            "headline": "遺產黃金回收｜繼承黃金變現流程",
            "author": { "@type": "Organization", "name": "巧品珠寶" },
            "publisher": { "@type": "Organization", "name": "巧品珠寶" },
            "datePublished": "2026-03-12",
            "description": "繼承的黃金怎麼處理？遺產黃金回收流程說明"
          })
        }}
      />
      <h1>遺產黃金回收｜繼承黃金變現流程</h1>
      <h2>結論：繼承黃金也能變現！</h2>
      <p>了解遺產黃金的回收流程，順利將黃金變現。</p>
      <hr style={{ margin: '2rem 0' }} />
      <p>📞 電話：0986-821-626</p>
      <p>💬 LINE：@QPD888</p>
      <p>🌐 官網：https://www.gold-tw.com/</p>
    </main>
  );
}
