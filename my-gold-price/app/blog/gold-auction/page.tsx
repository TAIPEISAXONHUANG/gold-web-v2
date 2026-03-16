import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '黃金拍賣｜黃金買賣市場行情｜巧品珠寶',
  description: '了解黃金拍賣與買賣市場！台北黃金交易行情，直接找銀樓回收比拍賣平台更划算。',
  keywords: '黃金拍賣,黃金買賣,黃金市場,黃金交易台北',
  alternates: {
    canonical: 'https://www.gold-tw.com/blog/gold-auction',
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
            "headline": "黃金拍賣｜黃金買賣市場行情｜巧品珠寶",
            "description": "了解黃金拍賣與買賣市場！直接找銀樓回收比拍賣平台更划算。",
            "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.gold-tw.com/blog/gold-auction" },
            "author": { "@type": "Organization", "name": "巧品珠寶", "url": "https://www.gold-tw.com" },
            "publisher": { "@type": "Organization", "name": "巧品珠寶", "url": "https://www.gold-tw.com" },
            "image": { "@type": "ImageObject", "url": "https://wsrv.nl/?url=https://drive.google.com/uc?id=1ASz1v5ZBQ-WV572r-BC4gZRuraywgKKv&w=1200&output=webp&q=80" },
            "datePublished": "2026-03-15T00:00:00+08:00",
            "dateModified": "2026-03-16T00:00:00+08:00"
          })
        }}
      />
      <h1>黃金拍賣｜買賣市場行情完整指南</h1>

      <h2>結論：直接找銀樓回收比拍賣平台更划算</h2>
      <p>許多人想透過拍賣平台賣黃金，但往往要扣除5-15%平台手續費、等待時間長、還要擔心詐騙。相較之下，直接找專業銀樓回收，當天現金、零手續費，才是最實惠的選擇。</p>

      <h2>黃金拍賣 vs 直接回收比較</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '1.5rem' }}>
        <thead>
          <tr style={{ background: '#fef3c7' }}>
            <th style={{ padding: '10px', border: '1px solid #ddd' }}>項目</th>
            <th style={{ padding: '10px', border: '1px solid #ddd' }}>拍賣平台</th>
            <th style={{ padding: '10px', border: '1px solid #ddd' }}>巧品珠寶直接回收</th>
          </tr>
        </thead>
        <tbody>
          <tr><td style={{ padding: '8px', border: '1px solid #ddd' }}>手續費</td><td style={{ padding: '8px', border: '1px solid #ddd' }}>5-15%</td><td style={{ padding: '8px', border: '1px solid #ddd' }}>零手續費</td></tr>
          <tr><td style={{ padding: '8px', border: '1px solid #ddd' }}>付款時間</td><td style={{ padding: '8px', border: '1px solid #ddd' }}>拍賣結束後</td><td style={{ padding: '8px', border: '1px solid #ddd' }}>當場現金</td></tr>
          <tr><td style={{ padding: '8px', border: '1px solid #ddd' }}>詐騙風險</td><td style={{ padding: '8px', border: '1px solid #ddd' }}>較高</td><td style={{ padding: '8px', border: '1px solid #ddd' }}>無</td></tr>
          <tr><td style={{ padding: '8px', border: '1px solid #ddd' }}>流程</td><td style={{ padding: '8px', border: '1px solid #ddd' }}>複雜</td><td style={{ padding: '8px', border: '1px solid #ddd' }}>10-15分鐘完成</td></tr>
        </tbody>
      </table>

      <h2>常見問題 FAQ</h2>
      <h3>Q：黃金在哪裡賣最划算？</h3>
      <p>A：直接找專業回收銀樓，省去平台手續費，價格最透明。</p>
      <h3>Q：黃金價格每天都不同，什麼時候賣最好？</h3>
      <p>A：金價跟美元和國際局勢有關，很難預測高點。需要現金時就是好時機。</p>

      <hr style={{ margin: '2rem 0' }} />
      <h2>立即諮詢</h2>
      <p>📞 電話：<a href="tel:0986821626" style={{ color: '#B8860B' }}>0986-821-626</a></p>
      <p>💬 LINE：<a href="https://line.me/ti/p/~@QPD888" style={{ color: '#06C755' }}>@QPD888</a></p>
      <p>📍 地址：台北市大安區濟南路三段62-1號</p>
    </main>
  );
}
