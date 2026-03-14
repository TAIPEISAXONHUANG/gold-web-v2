import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '金幣回收｜紀念金幣變現｜巧品珠寶',
  description: '金幣回收推薦！紀念金幣、投資金幣變現。',
  keywords: '金幣回收,紀念金幣,投資金幣',
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
            "author": { "@type": "Organization", "name": "巧品珠寶" },
            "publisher": { "@type": "Organization", "name": "巧品珠寶" },
            "datePublished": "2026-03-12",
            "description": "黃金回收專業知識"
          })
        }}
      />
      <h1>金幣回收｜紀念金幣變現</h1>
      <h2>結論：金幣收藏也能變現！</h2>
      <p>各種紀念金幣、投資金幣都可以回收。</p>
      <h2>回收項目</h2>
      <ul>
        <li>紀念金幣</li>
        <li>投資金幣</li>
        <li>套幣</li>
      </ul>
      <hr style={{ margin: '2rem 0' }} />
      <p>📞 電話：0986-821-626</p>
      <p>💬 LINE：@QPD888</p>
      <p>🌐 官網：https://www.gold-tw.com/</p>
    </main>
  );
}
