import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '2026黃金價格走勢分析與預測',
  description: '2026年金價會漲會跌？專家分析黃金價格趨勢，買賣黃金最佳時機！',
  keywords: '2026黃金價格,金價走勢,黃金投資',
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
            "description": "黃金回收專業知識"
          })
        }}
      />
      <h1>2026黃金價格走勢分析</h1>

      <h2>近期金價回顧</h2>
      <p>2026年初金價維持在高檔運行，創下近年新高紀錄。根據最新報價，黃金回收價格約在每錢 19,800-20,000 元左右。</p>

      <h2>影響金價的關鍵因素</h2>
      <ul>
        <li><strong>全球經濟不確定性</strong> - 景氣放緩時避險需求增</li>
        <li><strong>通膨壓力</strong> - 通膨升溫推動金價上漲</li>
        <li><strong>央行政策</strong> - 各國央行升息循環影響</li>
        <li><strong>地緣政治</strong> - 國際局勢動盪增加避險需求</li>
        <li><strong>美元走勢</strong> - 美元貶值時金價通常上漲</li>
      </ul>

      <h2>2026年展望</h2>
      <p>專家認為2026年黃金仍有支撐因素：</p>
      <ul>
        <li>各國央行持續增持黃金儲備</li>
        <li>ETF投資需求回溫</li>
        <li>珠寶需求特別是亞洲市場穩健</li>
      </ul>

      <h2>買賣建議</h2>
      <ul>
        <li><strong>如需現金</strong> - 現在脫手可獲好價</li>
        <li><strong>如不急</strong> - 可等待更高價</li>
        <li><strong>投資</strong> - 建議分散風險</li>
      </ul>

      <hr style={{ margin: '2rem 0' }} />

      <h2>立即查詢今日金價</h2>
      <a href="/" style={{ color: '#B8860B', fontSize: '1.2rem' }}>
        → 前往報價頁面
      </a>
    </main>
  );
}
