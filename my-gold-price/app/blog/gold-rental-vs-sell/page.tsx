import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '黃金典當vs賣出｜當鋪比較｜巧品珠寶',
  description: '黃金可以當也可以賣，該怎麼選擇？',
  keywords: '黃金典當,當鋪,黃金質押',
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
            "headline": "黃金典當vs賣出｜當鋪比較",
            "author": { "@type": "Organization", "name": "巧品珠寶" },
            "publisher": { "@type": "Organization", "name": "巧品珠寶" },
            "datePublished": "2026-03-12",
            "description": "黃金可以當也可以賣，該怎麼選擇？"
          })
        }}
      />
      <h1>黃金典當vs賣出｜當鋪比較</h1>
      <h2>結論：看短期長期需求！</h2>
      <p>了解典當和賣出的差異，選擇最適合的方式。</p>
      <hr style={{ margin: '2rem 0' }} />
      <p>📞 電話：0986-821-626</p>
      <p>💬 LINE：@QPD888