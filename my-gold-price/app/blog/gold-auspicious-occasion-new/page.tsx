import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '吉祥節日黃金｜過年結婚禮俗',
  description: '結婚過年送黃金最吉祥，傳統禮俗黃金推薦。',
  keywords: '吉祥黃金,結婚金飾,過年禮俗',
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
            "headline": "吉祥節日黃金｜過年結婚禮俗",
            "author": { "@type": "Organization", "name": "巧品珠寶" },
            "publisher": { "@type": "Organization", "name": "巧品珠寶" },
            "datePublished": "2026-03-13",
            "description": "結婚過年送黃金最吉祥，傳統禮俗黃金推薦"
          })
        }}
      />
      <h1>吉祥節日黃金｜過年結婚禮俗</h1>
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
