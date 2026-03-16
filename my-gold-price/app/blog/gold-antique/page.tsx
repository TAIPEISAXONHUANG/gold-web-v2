import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '古早黃金回收｜老金飾變現｜巧品珠寶',
  description: '古早黃金、老金飾高價回收！祖傳金飾、年代久遠的黃金首飾，巧品珠寶專業鑑定現金收購。',
  keywords: '古早黃金,老金回收,祖傳金飾,老黃金收購',
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
            "headline": "古早黃金回收｜老金飾變現｜巧品珠寶",
            "description": "古早黃金、老金飾高價回收！祖傳金飾、年代久遠的黃金首飾。",
            "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.gold-tw.com/blog/gold-antique" },
            "author": { "@type": "Organization", "name": "巧品珠寶", "url": "https://www.gold-tw.com" },
            "publisher": { "@type": "Organization", "name": "巧品珠寶", "url": "https://www.gold-tw.com" },
            "image": { "@type": "ImageObject", "url": "https://www.gold-tw.com/images/og-image.jpg" },
            "datePublished": "2026-03-15T00:00:00+08:00",
            "dateModified": "2026-03-16T00:00:00+08:00"
          })
        }}
      />
      <h1>古早黃金回收｜老金飾高價變現</h1>

      <h2>結論：古早黃金一樣有高價值，純度才是關鍵</h2>
      <p>很多人家中都有祖傳的古早金飾。早期台灣金飾多為916或990以上高純度，只要是真金，就有回收價值。巧品珠寶專業鑑定各類古早黃金，依純度和重量給出公道價格。</p>

      <h2>古早黃金的特色</h2>
      <ul>
        <li><strong>純度較高</strong>：早期台灣金飾多為916或990以上高純度</li>
        <li><strong>款式老舊</strong>：不影響回收，以重量計價</li>
        <li><strong>可能有焊接</strong>：修復部位純度可能較低，鑑定時會區分計算</li>
        <li><strong>無保證書</strong>：不影響回收，現場鑑定確認純度</li>
      </ul>

      <h2>古早黃金鑑定方式</h2>
      <p>老式金飾可能含有銅等雜質，我們採用火燒+儀器雙重鑑定，確保純度測量準確，讓您安心變現。</p>

      <h2>常見問題 FAQ</h2>
      <h3>Q：祖傳金飾沒有任何憑證，可以回收嗎？</h3>
      <p>A：完全可以。我們現場鑑定，不需要任何購買證明。</p>
      <h3>Q：古早金飾的純度怎麼判斷？</h3>
      <p>A：我們使用儀器檢測加火燒確認，測量誤差極小。</p>
      <h3>Q：斷掉或變形的古早金飾可以收嗎？</h3>
      <p>A：可以，我們以純度和重量計價，外觀不影響回收價格。</p>

      <hr style={{ margin: '2rem 0' }} />
      <h2>立即諮詢</h2>
      <p>📞 電話：<a href="tel:0986821626" style={{ color: '#B8860B' }}>0986-821-626</a></p>
      <p>💬 LINE：<a href="https://line.me/ti/p/~@QPD888" style={{ color: '#06C755' }}>@QPD888</a></p>
      <p>📍 地址：台北市大安區濟南路三段62-1號</p>
    </main>
  );
}
