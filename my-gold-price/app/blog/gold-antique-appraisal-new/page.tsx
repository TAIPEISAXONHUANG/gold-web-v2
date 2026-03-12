import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '古早黃金估價｜古董金飾回收',
  description: '古早黃金飾品估價推薦，專業評估讓您賣得合理價格。',
  keywords: '古早黃金,古董金飾,黃金估價',
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
            "headline": "古早黃金估價｜古董金飾回收",
            "author": { "@type": "Organization", "name": "巧品珠寶" },
            "publisher": { "@type": "Organization", "name": "巧品珠寶" },
            "datePublished": "2026-03-13",
            "description": "古早黃金飾品估價推薦，專業評估"
          })
        }}
      />
      <h1>古早黃金估價｜古董金飾回收</h1>
      <p>歡迎來到巧品珠寶黃金回收專業服務。</p>
      <h2>為什麼選擇我們？</h2>
      <ul>
        <li>免費線上估價</li>
        <li>價格公開透明</li>
        <li>現場秤重確認</li>
        <li>立即現金支付</li>
      </ul>
      <h2>聯絡我們</h2>
      <p>📞 電話：0986-821-626</p>
      <p>💬 LINE：@QPD888</p>
      <p>🌐 官網：https://www.gold-tw.com/</p>
    </main>
  );
}
