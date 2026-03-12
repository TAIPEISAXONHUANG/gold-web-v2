import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '黃金回收付款方式｜現金匯款優缺點｜巧品珠寶',
  description: '黃金回收可以選哪些付款方式？現金好還是匯款好？',
  keywords: '黃金付款,現金匯款,回收付款',
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
            "headline": "黃金回收付款方式｜現金匯款優缺點",
            "author": { "@type": "Organization", "name": "巧品珠寶" },
            "publisher": { "@type": "Organization", "name": "巧品珠寶" },
            "datePublished": "2026-03-12",
            "description": "黃金回收可以選哪些付款方式？現金好還是匯款好？"
          })
        }}
      />
      <h1>黃金回收付款方式｜現金匯款優缺點</h1>
      <h2>結論：選最適合你的方式！</h2>
      <p>了解不同付款方式的優缺點，選擇最安全便利的方式。</p>
      <hr style={{ margin: '2rem 0' }} />
      <p>📞 電話：0986-821-626</p>
      <p>💬 LINE：@QPD888</p>
      <p>🌐 官網：https://www.gold-tw.com/</p>
    </main>
  );
}
