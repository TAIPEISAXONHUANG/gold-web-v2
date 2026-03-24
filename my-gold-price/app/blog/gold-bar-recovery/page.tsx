import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '黃金條塊回收｜金條變現｜巧品珠寶',
  description: '黃金條塊、金幣高價回收！9999純金、銀行金條均可，按重量現金付款。台北巧品珠寶免費估價，電話 0986-821-626。',
  keywords: '黃金條塊回收,金條變現,金條回收',
  alternates: {
    canonical: 'https://www.gold-tw.com/blog/gold-bar-recovery',
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
              "dateModified": "2026-03-16T00:00:00+08:00",
            "description": "黃金條塊回收專業估價，當日現金支付"
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"首頁","item":"https://www.gold-tw.com"},{"@type":"ListItem","position":2,"name":"知識專欄","item":"https://www.gold-tw.com/blog"},{"@type":"ListItem","position":3,"name":"黃金條塊回收｜金條變現｜巧品珠寶"}]})
        }}
      />
      <h1>黃金條塊回收｜金條變現首選</h1>

      <div style={{background:'#fffbeb', borderLeft:'4px solid #f59e0b', padding:'16px', margin:'16px 0', borderRadius:'8px'}}>
        <strong>📌 重點摘要：</strong> 金條回收依國際金價×重量計算，需確認金條品牌、純度標示及序號。知名品牌金條（如台銀、PAMP）回收價較高。
      </div>
      
      <h2>結論：黃金條塊回收這樣做最划算</h2>
      <p>黃金條塊（又稱金條）是投資者常見的黃金形式，變現時建議選擇誠信店家進行專業估價。</p>

      <h2>黃金條塊回收優勢</h2>
      <ul>
        <li>依據純度報價</li>
        <li>當日現金支付</li>
        <li>專業檢測儀器</li>
      </ul>

      <div style={{ margin: '2rem 0', padding: '1.5rem', background: '#FEF9E7', borderRadius: '8px', borderLeft: '4px solid #B8860B' }}>
        <strong>延伸閱讀：</strong>
        <ul style={{ marginTop: '0.5rem', paddingLeft: '1.5rem' }}>
          <li><a href="/blog/gold-necklace-recovery" style={{ color: '#B8860B' }}>黃金項鍊回收</a></li>
          <li><a href="/blog/gold-ring-recovery" style={{ color: '#B8860B' }}>黃金戒指回收</a></li>
          <li><a href="/blog/gold-bracelet-recovery" style={{ color: '#B8860B' }}>黃金手鐲回收</a></li>
          <li><a href="/blog/gold-earring-recovery" style={{ color: '#B8860B' }}>黃金耳環回收</a></li>
        </ul>
      </div>

      <hr style={{ margin: '2rem 0' }} />

      <h2>立即聯繫</h2>
      <p>📞 電話：0986-821-626</p>
      <p>💬 LINE：@QPD888</p>
      <p>🌐 官網：https://www.gold-tw.com/</p>
    </main>
  );
}
