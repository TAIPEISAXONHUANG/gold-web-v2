import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '黃金季節性｜何時買賣',
  description: '黃金季節性價格規律',
  keywords: '季節性,黃金規律,何時買賣',
};

export default function Page() {
  return (
    <main style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "黃金季節性｜何時買賣",
            "author": { "@type": "Organization", "name": "巧品珠寶" },
            "publisher": { "@type": "Organization", "name": "巧品珠寶" },
            "datePublished": "2026-03-13",
            "description": "黃金季節性價格規律"
          })
        }
      />
      
      <h1>黃金季節性｜何時買賣</h1>
      <p>歡迎來到巧品珠寶黃金回收專業服務。本文將為您詳細介紹相關資訊，幫助您了解黃金回收的最新動態與注意事項。</p>

      <h2>為什麼選擇我們？</h2>
      <ul>
        <li>✓ 免費線上估價</li>
        <li>✓ 價格公開透明</li>
        <li>✓ 現場秤重確認</li>
        <li>✓ 立即現金支付</li>
      </ul>

      <h2>聯絡我們</h2>
      <p>有任何黃金回收問題，歡迎立即聯繫：</p>
      <p style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>📞 電話：0986-821-626</p>
      <p style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>💬 LINE：@QPD888</p>
      <p>🌐 官網：<a href="https://www.gold-tw.com/">https://www.gold-tw.com/</a></p>

      <hr style={{ margin: '2rem 0' }} />
      <h2>延伸閱讀</h2>
      <ul>
        <li><a href="/blog/gold-price-today">今日金價查詢</a></li>
        <li><a href="/blog/taipei-gold-recycling-recommend">台北黃金回收推薦</a></li>
        <li><a href="/blog/gold-recycling-guide-2026">黃金回收完整攻略</a></li>
      </ul>
    </main>
  );
}
