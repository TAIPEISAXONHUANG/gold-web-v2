import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '黃金投資｜金幣金條買賣入門｜巧品珠寶',
  description: '黃金硬幣投資完整指南！比較金幣、金條、黃金ETF的優缺點，了解台灣黃金投資管道，掌握2026年黃金行情走勢。',
  keywords: '黃金投資,金幣投資,金條買賣,黃金理財',
  alternates: {
    canonical: 'https://www.gold-tw.com/blog/gold-coin-invest',
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
            "@type": "BlogPosting",
            "headline": "黃金投資｜金幣金條買賣入門｜巧品珠寶",
            "description": "黃金投資入門指南！金幣、金條、黃金ETF比較分析。",
            "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.gold-tw.com/blog/gold-coin-invest" },
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
          __html: JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"首頁","item":"https://www.gold-tw.com"},{"@type":"ListItem","position":2,"name":"知識專欄","item":"https://www.gold-tw.com/blog"},{"@type":"ListItem","position":3,"name":"黃金投資｜金幣金條買賣入門｜巧品珠寶"}]})
        }}
      />
      <h1>黃金投資｜金幣金條入門完整指南</h1>

      <div style={{background:'#fffbeb', borderLeft:'4px solid #f59e0b', padding:'16px', margin:'16px 0', borderRadius:'8px'}}>
        <strong>📌 重點摘要：</strong> 黃金金幣兼具投資與收藏價值。投資型金幣（如楓葉幣、袋鼠幣）流通性高，回收價接近國際金價。
      </div>

      <h2>結論：實體黃金是最穩健的避險投資</h2>
      <p>在通膨、地緣政治風險、貨幣貶值的當下，實體黃金一直是最受信賴的避險資產。本文帶你了解黃金投資的各種方式和注意事項。</p>

      <h2>黃金投資方式比較</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '1.5rem' }}>
        <thead>
          <tr style={{ background: '#fef3c7' }}>
            <th style={{ padding: '10px', border: '1px solid #ddd' }}>方式</th>
            <th style={{ padding: '10px', border: '1px solid #ddd' }}>優點</th>
            <th style={{ padding: '10px', border: '1px solid #ddd' }}>缺點</th>
          </tr>
        </thead>
        <tbody>
          <tr><td style={{ padding: '8px', border: '1px solid #ddd' }}>實體金條/金幣</td><td style={{ padding: '8px', border: '1px solid #ddd' }}>真實持有、可隨時變現</td><td style={{ padding: '8px', border: '1px solid #ddd' }}>需要保管</td></tr>
          <tr><td style={{ padding: '8px', border: '1px solid #ddd' }}>黃金ETF</td><td style={{ padding: '8px', border: '1px solid #ddd' }}>方便交易</td><td style={{ padding: '8px', border: '1px solid #ddd' }}>有管理費、無實體</td></tr>
          <tr><td style={{ padding: '8px', border: '1px solid #ddd' }}>銀行黃金存摺</td><td style={{ padding: '8px', border: '1px solid #ddd' }}>方便、可零買</td><td style={{ padding: '8px', border: '1px solid #ddd' }}>買賣價差大</td></tr>
        </tbody>
      </table>

      <h2>實體黃金投資建議</h2>
      <ul>
        <li>選擇9999純金（純度最高，最易變現）</li>
        <li>保留購買憑證</li>
        <li>選擇知名銀行或有信譽的銀樓購買</li>
        <li>分批買入，降低均價風險</li>
      </ul>

      <h2>常見問題 FAQ</h2>
      <h3>Q：現在是買黃金的好時機嗎？</h3>
      <p>A：金價長期看漲，分批購入是穩健策略。</p>
      <h3>Q：買來的金幣之後可以回收嗎？</h3>
      <p>A：可以，我們依當日牌價高價收購。</p>

      <div style={{ margin: '2rem 0', padding: '1.5rem', background: '#FEF9E7', borderRadius: '8px', borderLeft: '4px solid #B8860B' }}>
        <strong>延伸閱讀：</strong>
        <ul style={{ marginTop: '0.5rem', paddingLeft: '1.5rem' }}>
          <li><a href="/blog/gold-bar-recovery" style={{ color: '#B8860B' }}>黃金條塊回收</a></li>
          <li><a href="/blog/gold-9999-recovery" style={{ color: '#B8860B' }}>9999純金回收</a></li>
          <li><a href="/blog/gold-liquid" style={{ color: '#B8860B' }}>黃金變現指南</a></li>
          <li><a href="/blog/gold-coin-recovery" style={{ color: '#B8860B' }}>金幣回收</a></li>
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
