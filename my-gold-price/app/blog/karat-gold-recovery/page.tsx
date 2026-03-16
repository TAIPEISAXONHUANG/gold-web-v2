import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'K金回收｜18K/14K回收價格一篇搞懂',
  description: 'K金回收價格怎麼算？18K/14K分別值多少？完整攻略讓你賣黃金不吃虧。',
  keywords: 'K金回收,18K回收,14K回收,珠寶回收',
  alternates: {
    canonical: 'https://www.gold-tw.com/blog/karat-gold-recovery',
  },
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
              "dateModified": "2026-03-16T00:00:00+08:00",
            "description": "黃金回收專業知識"
          })
        }}
      />
      <h1>K金回收價格一篇搞懂</h1>

      <h2>什麼是K金？</h2>
      <p>K金是指黃金與其他金屬的合金，用「K」表示純度：</p>
      <ul>
        <li><strong>18K</strong> = 75% 黃金 + 25% 其他金屬</li>
        <li><strong>14K</strong> = 58.5% 黃金 + 41.5% 其他金屬</li>
      </ul>

      <h2>K金回收計算方式</h2>
      <p><strong>回收價格 = 黃金牌價 × 純度 × 重量</strong></p>

      <h2>為什麼要選專業回收？</h2>
      <ul>
        <li>專業儀器檢測精準</li>
        <li>價格透明不扣秤</li>
        <li>當日付款快速</li>
      </ul>

      <hr style={{ margin: '2rem 0' }} />
      <p>📞 電話：0986-821-626</p>
      <p>💬 LINE：@QPD888</p>
      <p>🌐 官網：https://www.gold-tw.com/</p>
    </main>
  );
}
