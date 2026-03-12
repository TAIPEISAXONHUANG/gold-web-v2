import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '離婚黃金分割｜夫妻財產分配｜巧品珠寶',
  description: '離婚時黃金首飾怎麼分割？財產分配須知。',
  keywords: '離婚黃金,財產分割,黃金分配',
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
            "headline": "離婚黃金分割｜夫妻財產分配",
            "author": { "@type": "Organization", "name": "巧品珠寶" },
            "publisher": { "@type": "Organization", "name": "巧品珠寶" },
            "datePublished": "2026-03-12",
            "description": "離婚時黃金首飾怎麼分割？財產分配須知"
          })
        }}
      />
      <h1>離婚黃金分割｜夫妻財產分配</h1>
      <h2>結論：黃金也是財產！</h2>
      <p>了解離婚時黃金珠寶的分割方式。</p>
      <hr style={{ margin: '2rem 0' }} />
      <p>📞 電話：0986-821-626</p>
      <p>💬 LINE：@QPD888</p>
      <p>🌐 官網：https://www.gold-tw.com/</p>
    </main>
  );
}
