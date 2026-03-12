import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '黃金借款vs賣出｜哪個更划算｜巧品珠寶',
  description: '黃金可以借款也能賣出，哪個更划算？',
  keywords: '黃金借款,黃金質押,賣出比較',
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
            "headline": "黃金借款vs賣出｜哪個更划算",
            "author": { "@type": "Organization", "name": "巧品珠寶" },
            "publisher": { "@type": "Organization", "name": "巧品珠寶" },
            "datePublished": "2026-03-12",
            "description": "黃金可以借款也能賣出，哪個更划算？"
          })
        }}
      />
      <h1>黃金借款vs賣出｜哪個更划算</h1>
      <h2>結論：看需求選擇！</h2>
      <p>了解黃金借款和賣出的優缺點，做出最適合的選擇。</p>
      <hr style={{ margin: '2rem 0' }} />
      <p>📞 電話：0986-821-626</p>
      <p>💬 LINE：@QPD888</p>
      <p>🌐 官網：https://www.gold-tw.com/</p>
    </main>
  );
}
