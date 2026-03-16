import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '9999純金回收｜24K黃金高價收購｜巧品珠寶',
  description: '台北9999純金（24K黃金）高價回收！巧品珠寶按當日國際金價報價，不扣耗損，當場現金。免費估價電話 0986-821-626。',
  keywords: '9999黃金回收,24K黃金回收,純金回收,黃金條塊回收',
  alternates: {
    canonical: 'https://www.gold-tw.com/blog/gold-9999-recovery',
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
            "headline": "9999純金回收｜24K黃金高價收購｜巧品珠寶",
            "description": "台北9999純金回收推薦！24K黃金條塊、金幣、純金飾品高價回收。",
            "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.gold-tw.com/blog/gold-9999-recovery" },
            "author": { "@type": "Organization", "name": "巧品珠寶", "url": "https://www.gold-tw.com" },
            "publisher": { "@type": "Organization", "name": "巧品珠寶", "url": "https://www.gold-tw.com" },
            "image": { "@type": "ImageObject", "url": "https://wsrv.nl/?url=https://drive.google.com/uc?id=1ASz1v5ZBQ-WV572r-BC4gZRuraywgKKv&w=1200&output=webp&q=80" },
            "datePublished": "2026-03-15T00:00:00+08:00",
            "dateModified": "2026-03-16T00:00:00+08:00"
          })
        }}
      />
      <h1>9999純金回收｜24K黃金高價收購</h1>

      <h2>結論：9999純金是最好變現的貴金屬</h2>
      <p>9999純金（24K金）純度高達99.99%，是貴金屬中最保值、最容易變現的品項。巧品珠寶依當日國際金價即時報價，不扣耗損、不扣手續費，當場現金付款。</p>

      <h2>我們收購哪些9999純金？</h2>
      <ul>
        <li><strong>金條/金塊</strong>：各大銀行、銀樓出品的標準金條</li>
        <li><strong>金幣</strong>：中央造幣廠、外國官方金幣</li>
        <li><strong>純金飾品</strong>：9999純金項鍊、手鍊、戒指</li>
        <li><strong>神明金牌</strong>：廟宇金牌、宗教純金飾品</li>
        <li><strong>彌月金飾</strong>：各種彌月禮盒純金品項</li>
      </ul>

      <h2>9999純金回收計算方式</h2>
      <p>公式：<strong>重量（台錢）× 當日收購牌價 = 你拿到的金額</strong></p>
      <p>我們的收購價與國際金價連動，每小時更新。建議來店前先查詢即時報價，或直接來電詢問當下牌價。</p>

      <h2>常見問題 FAQ</h2>
      <h3>Q：9999和9990的黃金有差嗎？</h3>
      <p>A：有，9999純度更高，回收價格也略高。我們會現場鑑定確認純度。</p>
      <h3>Q：黃金條塊上的印記有影響嗎？</h3>
      <p>A：不影響重量計價，但知名銀行或大廠出的金條可能有額外品牌加成。</p>
      <h3>Q：需要原始購買憑證嗎？</h3>
      <p>A：不需要，但有的話可以加快流程。</p>

      <div style={{ margin: '2rem 0', padding: '1.5rem', background: '#FEF9E7', borderRadius: '8px', borderLeft: '4px solid #B8860B' }}>
        <strong>相關文章：</strong>
        <ul style={{ marginTop: '0.5rem', paddingLeft: '1.5rem' }}>
        <li><a href="/blog/karat-gold-recovery" style={{ color: "#B8860B" }}>K金回收指南</a></li>
        <li><a href="/blog/gold-purity" style={{ color: "#B8860B" }}>黃金純度說明</a></li>
        <li><a href="/blog/gold-bar-recovery" style={{ color: "#B8860B" }}>黃金條塊回收</a></li>
        <li><a href="/blog/gold-vs-k-gold-vs-platinum" style={{ color: "#B8860B" }}>黃金vs K金vs白金</a></li>
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
