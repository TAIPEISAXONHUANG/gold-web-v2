import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '黃金重量怎麼算？台錢vs公克換算｜巧品珠寶',
  description: '黃金重量單位完整說明！台錢、公克、英兩換算對照表，了解台灣黃金交易慣用單位，計算回收金額不再被搞混。',
  keywords: '黃金重量,台錢換算,黃金公克,黃金單位換算',
  alternates: {
    canonical: 'https://www.gold-tw.com/blog/gold-weight',
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
            "headline": "黃金重量怎麼算？台錢vs公克換算｜巧品珠寶",
            "description": "黃金重量換算完整說明！台錢、公克、兩、盎司換算表，讓你看懂黃金報價單位。",
            "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.gold-tw.com/blog/gold-weight" },
            "author": { "@type": "Organization", "name": "巧品珠寶", "url": "https://www.gold-tw.com" },
            "publisher": { "@type": "Organization", "name": "巧品珠寶", "url": "https://www.gold-tw.com" },
            "image": { "@type": "ImageObject", "url": "https://wsrv.nl/?url=https://drive.google.com/uc?id=1ASz1v5ZBQ-WV572r-BC4gZRuraywgKKv&w=1200&output=webp&q=80", "width": 1200, "height": 630 },
            "datePublished": "2026-03-15T00:00:00+08:00",
            "dateModified": "2026-03-16T00:00:00+08:00"
          })
        }}
      />
      <h1>黃金重量怎麼算？台錢公克換算完整說明</h1>

      <h2>結論：搞懂重量單位，讓你不被坑</h2>
      <p>黃金報價使用的重量單位有好幾種，台灣常用「台錢」，國際則用「公克」或「盎司」。搞清楚換算關係，才能正確計算你的黃金值多少錢。</p>

      <h2>黃金重量單位換算表</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '1.5rem' }}>
        <thead>
          <tr style={{ background: '#fef3c7' }}>
            <th style={{ padding: '10px', border: '1px solid #ddd' }}>單位</th>
            <th style={{ padding: '10px', border: '1px solid #ddd' }}>等於多少公克</th>
            <th style={{ padding: '10px', border: '1px solid #ddd' }}>常用場合</th>
          </tr>
        </thead>
        <tbody>
          <tr><td style={{ padding: '8px', border: '1px solid #ddd' }}>1 台錢</td><td style={{ padding: '8px', border: '1px solid #ddd' }}>3.75 公克</td><td style={{ padding: '8px', border: '1px solid #ddd' }}>台灣黃金報價</td></tr>
          <tr><td style={{ padding: '8px', border: '1px solid #ddd' }}>1 台兩</td><td style={{ padding: '8px', border: '1px solid #ddd' }}>37.5 公克</td><td style={{ padding: '8px', border: '1px solid #ddd' }}>10台錢</td></tr>
          <tr><td style={{ padding: '8px', border: '1px solid #ddd' }}>1 金衡盎司</td><td style={{ padding: '8px', border: '1px solid #ddd' }}>31.1035 公克</td><td style={{ padding: '8px', border: '1px solid #ddd' }}>國際金價報價</td></tr>
          <tr><td style={{ padding: '8px', border: '1px solid #ddd' }}>1 公克</td><td style={{ padding: '8px', border: '1px solid #ddd' }}>1 公克</td><td style={{ padding: '8px', border: '1px solid #ddd' }}>K金計算常用</td></tr>
        </tbody>
      </table>

      <h2>快速計算公式</h2>
      <ul>
        <li>重量（台錢）× 當日牌價 = 回收金額</li>
        <li>公克 ÷ 3.75 = 台錢</li>
        <li>台錢 × 3.75 = 公克</li>
      </ul>

      <h2>常見問題 FAQ</h2>
      <h3>Q：1 台錢的黃金大概有多重？</h3>
      <p>A：3.75 公克，大概是一枚1元硬幣的重量。</p>
      <h3>Q：珠寶店說的「分」是什麼單位？</h3>
      <p>A：1分 = 0.1台錢 = 0.375公克，常用於小件首飾。</p>
      <div style={{ margin: '2rem 0', padding: '1.5rem', background: '#FEF9E7', borderRadius: '8px', borderLeft: '4px solid #B8860B' }}>
        <strong>相關文章：</strong>
        <ul style={{ marginTop: '0.5rem', paddingLeft: '1.5rem' }}>
        <li><a href="/blog/gold-purity" style={{ color: "#B8860B" }}>黃金純度說明</a></li>
        <li><a href="/blog/gold-calculator" style={{ color: "#B8860B" }}>黃金回收計算</a></li>
        <li><a href="/blog/karat-gold-guide" style={{ color: "#B8860B" }}>K金完整指南</a></li>
        <li><a href="/blog/gold-culture" style={{ color: "#B8860B" }}>黃金文化歷史</a></li>
        </ul>
      </div>

      <hr style={{ margin: '2rem 0' }} />
      <h2>立即諮詢</h2>


      <p>📞 電話：<a href="tel:0986821626" style={{ color: '#B8860B' }}>0986-821-626</a></p>
      <p>💬 LINE：<a href="https://line.me/ti/p/~@QPD888" style={{ color: '#06C755' }}>@QPD888</a></p>
      <p>📍 地址：台北市大安區濟南路三段62-1號</p>
      <p>🌐 官網：<a href="https://www.gold-tw.com/" style={{ color: '#B8860B' }}>www.gold-tw.com</a></p>
    </main>
  );
}
