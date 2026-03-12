import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '黃金運輸安全｜快遞保險建議｜巧品珠寶',
  description: '黃金可以郵寄嗎？快遞黃金安全嗎？',
  keywords: '黃金運輸,快遞保險,黃金郵寄',
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
            "headline": "黃金運輸安全｜快遞保險建議",
            "author": { "@type": "Organization", "name": "巧品珠寶" },
            "publisher": { "@type": "Organization", "name": "巧品珠寶" },
            "datePublished": "2026-03-12",
            "description": "黃金可以郵寄嗎？快遞黃金安全嗎？"
          })
        }}
      />
      <h1>黃金運輸安全｜快遞保險建議</h1>
      <h2>結論：親自攜帶最安全！</h2>
      <p>了解黃金運輸的安全考量與保險建議。</p>
      <hr style={{ margin: '2rem 0' }} />
      <p>📞 電話：0986-821-626</p>
      <p>💬 LINE：@QPD888</p>
      <p>🌐 官網：https://www.gold-tw.com/</p>
    </main>
  );
}
