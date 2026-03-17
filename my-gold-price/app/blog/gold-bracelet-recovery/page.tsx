import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '黃金手鐲回收｜金手鐲高價變現｜巧品珠寶',
  description: '黃金手鍊、手環高價回收！各款式K金手鍊均可，按重量計價不扣耗損。台北巧品珠寶當場現金付款，電話 0986-821-626。',
  keywords: '黃金手鐲回收,金手鐲變現,手鐲回收台北',
  alternates: {
    canonical: 'https://www.gold-tw.com/blog/gold-bracelet-recovery',
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
            "headline": "黃金手鐲回收｜金手鐲高價變現｜巧品珠寶",
            "description": "黃金手鐲回收推薦！台北高價收購金手鐲，不扣耗損當場付款。",
            "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.gold-tw.com/blog/gold-bracelet-recovery" },
            "author": { "@type": "Organization", "name": "巧品珠寶", "url": "https://www.gold-tw.com" },
            "publisher": { "@type": "Organization", "name": "巧品珠寶", "url": "https://www.gold-tw.com" },
            "image": { "@type": "ImageObject", "url": "https://wsrv.nl/?url=https://drive.google.com/uc?id=1ASz1v5ZBQ-WV572r-BC4gZRuraywgKKv&w=1200&output=webp&q=80" },
            "datePublished": "2026-03-15T00:00:00+08:00",
            "dateModified": "2026-03-16T00:00:00+08:00"
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"首頁","item":"https://www.gold-tw.com"},{"@type":"ListItem","position":2,"name":"知識專欄","item":"https://www.gold-tw.com/blog"},{"@type":"ListItem","position":3,"name":"黃金手鐲回收｜金手鐲高價變現｜巧品珠寶"}]})
        }}
      />
      <h1>黃金手鐲回收｜金手鐲高價變現</h1>

      <h2>結論：黃金手鐲回收，重量就是你的錢</h2>
      <p>黃金手鐲是許多家庭的傳家之寶，也是最常見的黃金首飾之一。無論是嫁妝手鐲、長輩贈送的金鐲，或是自己購買的投資型手鐲，都可以在巧品珠寶以最高市場價回收變現。</p>

      <h2>手鐲回收注意事項</h2>
      <ul>
        <li><strong>純度確認</strong>：手鐲上通常有999、916或K數印記</li>
        <li><strong>重量計算</strong>：我們以台錢（3.75克）為單位計算</li>
        <li><strong>不扣耗損</strong>：巧品珠寶保證不扣任何耗損費用</li>
        <li><strong>鑲嵌寶石</strong>：若有鑲嵌，寶石部分會單獨估價</li>
      </ul>

      <h2>回收流程（約10-15分鐘）</h2>
      <ol>
        <li>攜帶手鐲及身份證到店</li>
        <li>當面秤重，您親眼看到數字</li>
        <li>鑑定純度</li>
        <li>計算金額報價</li>
        <li>確認後現場現金付款</li>
      </ol>

      <h2>常見問題 FAQ</h2>
      <h3>Q：手鐲內圈有刻字，回收時要磨掉嗎？</h3>
      <p>A：不需要，刻字不影響重量計算。</p>
      <h3>Q：變形或裂掉的手鐲可以回收嗎？</h3>
      <p>A：完全可以，我們以重量和純度計價，外觀不影響回收價格。</p>

      <div style={{ margin: '2rem 0', padding: '1.5rem', background: '#FEF9E7', borderRadius: '8px', borderLeft: '4px solid #B8860B' }}>
        <strong>相關文章：</strong>
        <ul style={{ marginTop: '0.5rem', paddingLeft: '1.5rem' }}>
        <li><a href="/blog/gold-necklace-recovery" style={{ color: "#B8860B" }}>黃金項鍊回收</a></li>
        <li><a href="/blog/gold-ring-recovery" style={{ color: "#B8860B" }}>黃金戒指回收</a></li>
        <li><a href="/blog/karat-gold-recovery" style={{ color: "#B8860B" }}>K金回收指南</a></li>
        <li><a href="/blog/gold-appraise" style={{ color: "#B8860B" }}>黃金免費估價</a></li>
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
