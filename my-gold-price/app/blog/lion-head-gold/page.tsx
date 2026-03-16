import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '金牌回收｜紀念金牌｜奧運金牌變現｜巧品珠寶',
  description: '金牌回收推薦！奧運金牌、紀念金牌、廟宇神明牌高價收購，台北巧品珠寶專業估價。',
  keywords: '金牌回收,紀念金牌,神明金牌回收,純金牌回收',
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
            "headline": "金牌回收｜紀念金牌｜奧運金牌變現｜巧品珠寶",
            "description": "金牌回收推薦！奧運金牌、紀念金牌、廟宇神明牌高價收購，台北巧品珠寶專業估價。",
            "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.gold-tw.com/blog/lion-head-gold" },
            "author": { "@type": "Organization", "name": "巧品珠寶", "url": "https://www.gold-tw.com" },
            "publisher": { "@type": "Organization", "name": "巧品珠寶", "url": "https://www.gold-tw.com" },
            "image": { "@type": "ImageObject", "url": "https://www.gold-tw.com/images/og-image.jpg", "width": 1200, "height": 630 },
            "datePublished": "2026-03-15",
            "dateModified": "2026-03-16"
          })
        }}
      />
      <h1>金牌回收｜各式金牌高價變現</h1>

      <h2>結論：金牌也是黃金，一樣可以高價回收</h2>
      <p>無論是廟宇的神明金牌、體育競賽的金牌，還是各種紀念用純金牌，只要是真金製成，都能在巧品珠寶以當日市價收購。</p>

      <h2>我們回收哪些金牌？</h2>
      <ul>
        <li><strong>廟宇神明金牌</strong>：各種宗教用途的純金牌</li>
        <li><strong>彌月金牌</strong>：嬰兒滿月贈送的小金牌</li>
        <li><strong>紀念金牌</strong>：特殊場合製作的純金紀念幣/牌</li>
        <li><strong>獎項金牌</strong>：比賽或活動的純金獎牌</li>
      </ul>

      <h2>金牌回收注意事項</h2>
      <p>金牌通常為薄片設計，鍍金或表面處理可能影響純度，我們會進行鑑定確認：</p>
      <ul>
        <li>確認是純金製作還是鍍金</li>
        <li>去除表面保護膜後計算純金重量</li>
        <li>部分金牌因焊藥較多，重量可能略有減少</li>
      </ul>

      <h2>常見問題 FAQ</h2>
      <h3>Q：神明金牌有宗教意義，回收前需要做什麼儀式嗎？</h3>
      <p>A：這是個人信仰的選擇，我們尊重客戶的決定。</p>
      <h3>Q：金牌很薄，有沒有最低重量限制？</h3>
      <p>A：沒有，任何重量的黃金我們都回收。</p>
      <hr style={{ margin: '2rem 0' }} />
      <h2>立即諮詢</h2>


      <p>📞 電話：<a href="tel:0986821626" style={{ color: '#B8860B' }}>0986-821-626</a></p>
      <p>💬 LINE：<a href="https://line.me/ti/p/~@QPD888" style={{ color: '#06C755' }}>@QPD888</a></p>
      <p>📍 地址：台北市大安區濟南路三段62-1號</p>
      <p>🌐 官網：<a href="https://www.gold-tw.com/" style={{ color: '#B8860B' }}>www.gold-tw.com</a></p>
    </main>
  );
}
