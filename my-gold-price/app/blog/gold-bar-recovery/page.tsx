import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '黃金條塊回收｜金條變現｜巧品珠寶',
  description: '黃金條塊回收推薦！金條變現專業估價，當日現金支付。',
  keywords: '黃金條塊回收,金條變現,金條回收',
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
            "headline": "黃金條塊回收｜金條變現首選",
            "author": {
              "@type": "Organization",
              "name": "巧品珠寶"
            },
            "publisher": {
              "@type": "Organization",
              "name": "巧品珠寶"
            },
            "datePublished": "2026-03-12",
            "description": "黃金條塊回收專業估價，當日現金支付"
          })
        }}
      />
      <h1>黃金條塊回收｜金條變現首選</h1>
      
      <h2>結論：黃金條塊回收這樣做最划算</h2>
      <p>黃金條塊（又稱金條）是投資者常見的黃金形式，變現時建議選擇誠信店家進行專業估價。</p>

      <h2>黃金條塊回收優勢</h2>
      <ul>
        <li>依據純度報價</li>
        <li>當日現金支付</li>
        <li>專業檢測儀器</li>
      </ul>

      <hr style={{ margin: '2rem 0' }} />

      <h2>立即聯繫</h2>
      <p>📞 電話：0986-821-626</p>
      <p>💬 LINE：@QPD888</p>
      <p>🌐 官網：https://www.gold-tw.com/</p>
    </main>
  );
}
