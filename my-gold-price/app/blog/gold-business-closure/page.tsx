import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '公司結束黃金處理｜營業用黃金變現｜巧品珠寶',
  description: '公司結束營業，黄黄金融資如何處理？',
  keywords: '公司黃金,營業黃金,黃金變現',
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
            "headline": "公司結束黃金處理｜營業用黃金變現",
            "author": { "@type": "Organization", "name": "巧品珠寶" },
            "publisher": { "@type": "Organization", "name": "巧品珠寶" },
            "datePublished": "2026-03-12",
            "description": "公司結束營業，黄黄金融資如何處理？"
          })
        }}
      />
      <h1>公司結束黃金處理｜營業用黃金變現</h1>
      <h2>結論：公司黃金也能變現！</h2>
      <p>了解公司結束時的黃金資產處理方式。</p>
      <hr style={{ margin: '2rem 0' }} />
      <p>📞 電話：0986-821-626</p>
      <p>💬 LINE：@QPD888</p>
      <p>🌐 官網：https://www.gold-tw.com/</p>
    </main>
  );
}
