import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '斷掉的黃金｜黃金斷了怎麼辦｜巧品珠寶',
  description: '斷掉的黃金首飾也能回收！提供專業估價服務。',
  keywords: '斷掉的黃金,黃金斷了,飾品回收',
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
            "headline": "斷掉的黃金｜黃金斷了怎麼辦",
            "author": {
              "@type": "Organization",
              "name": "巧品珠寶"
            },
            "publisher": {
              "@type": "Organization",
              "name": "巧品珠寶"
            },
            "datePublished": "2026-03-12",
              "dateModified": "2026-03-16T00:00:00+08:00",
            "description": "斷掉的黃金首飾也能回收！提供專業估價服務"
          })
        }}
      />
      <h1>斷掉的黃金回收</h1>
      <h2>結論：斷掉的黃金一樣有價值！</h2>
      <p>斷掉的項鍊、戒指、耳環都可以回收，不影響價格。</p>
      <h2>回收項目</h2>
      <ul>
        <li>斷掉的項鍊</li>
        <li>缺角的戒指</li>
        <li>損壞的飾品</li>
      </ul>
      <hr style={{ margin: '2rem 0' }} />
      <p>📞 電話：0986-821-626</p>
      <p>💬 LINE：@QPD888</p>
      <p>🌐 官網：https://www.gold-tw.com/</p>
    </main>
  );
}
