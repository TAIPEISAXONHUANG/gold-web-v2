import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '鑽石珠寶收購｜GIA鑽石估價｜巧品珠寶',
  description: '台北鑽石珠寶高價收購！GIA鑽石、名品珠寶免費估價，10年經驗老闆親自鑑定，當場現金付款，不強迫成交。電話 0986-821-626。',
  keywords: '鑽石收購,珠寶收購,GIA鑽石,鑽石回收台北',
  alternates: {
    canonical: 'https://www.gold-tw.com/blog/diamond-jewelry',
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
            "headline": "鑽石珠寶收購｜GIA鑽石估價｜巧品珠寶",
            "description": "台北專業鑽石珠寶收購！GIA鑽石、彩鑽、珠寶首飾高價回收。",
            "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.gold-tw.com/blog/diamond-jewelry" },
            "author": { "@type": "Organization", "name": "巧品珠寶", "url": "https://www.gold-tw.com" },
            "publisher": { "@type": "Organization", "name": "巧品珠寶", "url": "https://www.gold-tw.com" },
            "image": { "@type": "ImageObject", "url": "https://wsrv.nl/?url=https://drive.google.com/uc?id=1ASz1v5ZBQ-WV572r-BC4gZRuraywgKKv&w=1200&output=webp&q=80" },
            "datePublished": "2026-03-15T00:00:00+08:00",
            "dateModified": "2026-03-16T00:00:00+08:00"
          })
        }}
      />
      <h1>鑽石珠寶收購｜GIA鑽石高價回收</h1>

      <h2>結論：鑽石珠寶也能高價變現，關鍵在選對店家</h2>
      <p>很多人不知道，鑽石和珠寶首飾也可以高價回收變現。巧品珠寶提供專業的鑽石珠寶收購服務，無論是 GIA 裸鑽、彩鑽、鑽戒還是各種珠寶首飾，我們都能給出市場上最合理的價格。</p>

      <h2>我們收購哪些鑽石珠寶？</h2>
      <ul>
        <li><strong>GIA 國際鑑定鑽石</strong>：附 GIA 證書的裸鑽或成品</li>
        <li><strong>彩色鑽石</strong>：黃鑽、粉鑽、藍鑽等稀有彩鑽</li>
        <li><strong>珠寶首飾</strong>：鑽戒、項鍊、手鐲、耳環</li>
        <li><strong>品牌珠寶</strong>：Tiffany、Cartier、Bulgari 等名品</li>
        <li><strong>無證書鑽石</strong>：即使沒有證書也可現場鑑定估價</li>
      </ul>

      <h2>鑽石估價流程（約15-20分鐘）</h2>
      <ol>
        <li>攜帶鑽石及相關證書到店</li>
        <li>現場以專業儀器鑑定 4C 等級（Carat、Cut、Color、Clarity）</li>
        <li>參考當日市場行情報價</li>
        <li>確認價格後現場現金付款</li>
      </ol>

      <h2>常見問題 FAQ</h2>
      <h3>Q：沒有 GIA 證書的鑽石可以收購嗎？</h3>
      <p>A：可以。我們有專業儀器可現場鑑定，無需證書也能估價。</p>
      <h3>Q：鑽石估價要收費嗎？</h3>
      <p>A：完全免費，不收任何鑑定費用。</p>
      <h3>Q：品牌珠寶盒和保證書有影響嗎？</h3>
      <p>A：有保留的話可以提高收購價，但沒有也照樣收購。</p>

      <div style={{ margin: '2rem 0', padding: '1.5rem', background: '#FEF9E7', borderRadius: '8px', borderLeft: '4px solid #B8860B' }}>
        <strong>相關文章：</strong>
        <ul style={{ marginTop: '0.5rem', paddingLeft: '1.5rem' }}>
        <li><a href="/blog/gold-earring-recovery" style={{ color: "#B8860B" }}>黃金耳環回收</a></li>
        <li><a href="/blog/gold-ring-recovery" style={{ color: "#B8860B" }}>黃金戒指回收</a></li>
        <li><a href="/blog/gold-appraise" style={{ color: "#B8860B" }}>黃金免費估價</a></li>
        <li><a href="/blog/gold-shop-recommend" style={{ color: "#B8860B" }}>台北黃金回收推薦</a></li>
        </ul>
      </div>

      <hr style={{ margin: '2rem 0' }} />
      <h2>立即諮詢</h2>
      <p>📞 電話：<a href="tel:0986821626" style={{ color: '#B8860B' }}>0986-821-626</a></p>
      <p>💬 LINE：<a href="https://line.me/ti/p/~@QPD888" style={{ color: '#06C755' }}>@QPD888</a></p>
      <p>📍 地址：台北市大安區濟南路三段62-1號</p>
    </main>
  );
}
