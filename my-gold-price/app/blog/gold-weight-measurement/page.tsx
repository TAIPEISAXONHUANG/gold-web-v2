import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '黃金重量測量｜秤重注意事項｜巧品珠寶',
  description: '黃金秤重要注意什麼？讓你了解重量計算不被騙。',
  keywords: '黃金重量,秤重,黃金單位',
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
            "headline": "黃金重量測量｜秤重注意事項",
            "author": { "@type": "Organization", "name": "巧品珠寶" },
            "publisher": { "@type": "Organization", "name": "巧品珠寶" },
            "datePublished": "2026-03-12",
            "description": "黃金秤重要注意什麼？讓你了解重量計算不被騙"
          })
        }}
      />
      <h1>黃金重量測量｜秤重注意事項</h1>
      <h2>結論：親眼看秤最安心！</h2>
      <p>了解黃金重量計算方式，現場秤重時確保過程透明。</p>
      <hr style={{ margin: '2rem 0' }} />
      <p>📞 電話：0986-821-626</p>
      <p>💬 LINE：@QPD888</p>
      <p>🌐 官網：https://www.gold-tw.com/</p>
    </main>
  );
}
