import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '斷掉的黃金｜黃金斷了怎麼辦｜巧品珠寶',
  description: '斷裂、損毀的黃金一樣可以回收！巧品珠寶按實際重量計價，不扣耗損，當場現金付款。台北大安區免費估價，電話 0986-821-626。',
  keywords: '斷掉的黃金,黃金斷了,飾品回收',
  alternates: {
    canonical: 'https://www.gold-tw.com/blog/broken-gold-recovery',
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
            "headline": "斷掉的黃金｜黃金斷了怎麼辦",
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
            "description": "斷掉的黃金首飾也能回收！提供專業估價服務"
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"首頁","item":"https://www.gold-tw.com"},{"@type":"ListItem","position":2,"name":"知識專欄","item":"https://www.gold-tw.com/blog"},{"@type":"ListItem","position":3,"name":"斷掉的黃金｜黃金斷了怎麼辦｜巧品珠寶"}]})
        }}
      />
      <h1>斷掉的黃金回收</h1>

      <div style={{background:'#fffbeb', borderLeft:'4px solid #f59e0b', padding:'16px', margin:'16px 0', borderRadius:'8px'}}>
        <strong>📌 重點摘要：</strong> 斷裂、變形的金飾一樣可以回收！回收價依純度和重量計算，不因外觀損壞而扣價。巧品珠寶專業鑑定，公平計價。
      </div>
      <h2>結論：斷掉的黃金一樣有價值！</h2>
      <p>斷掉的項鍊、戒指、耳環都可以回收，不影響價格。</p>
      <h2>回收項目</h2>
      <ul>
        <li>斷掉的項鍊</li>
        <li>缺角的戒指</li>
        <li>損壞的飾品</li>
      </ul>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"斷掉的金飾可以回收嗎？","acceptedAnswer":{"@type":"Answer","text":"可以。斷裂、變形、刮傷的金飾都能回收，回收價只看純度和重量，不因外觀扣價。"}},{"@type":"Question","name":"壞掉的金飾回收價會比較低嗎？","acceptedAnswer":{"@type":"Answer","text":"不會。正規回收店只看純度和重量計價，外觀損壞不影響黃金本身的價值。"}},{"@type":"Question","name":"只有一小塊碎金也收嗎？","acceptedAnswer":{"@type":"Answer","text":"收。不論大小，只要含金成分都可以回收估價。"}}]})
        }}
      />
      <section style={{marginTop:'2.5rem', padding:'2rem', background:'#f9fafb', borderRadius:'12px', border:'1px solid #e5e7eb'}}>
        <h2 style={{fontSize:'1.3rem', fontWeight:'bold', color:'#1f2937', marginTop:0, marginBottom:'1rem'}}>❓ 常見問題</h2>
        <div style={{marginBottom:'1rem', background:'white', padding:'1rem', borderRadius:'8px', border:'1px solid #e5e7eb'}}>
          <h3 style={{margin:'0 0 0.5rem 0', fontSize:'1rem', color:'#1f2937'}}>Q: 斷掉的金飾可以回收嗎？</h3>
          <p style={{margin:0, color:'#4b5563', lineHeight:'1.6'}}>A: 可以。斷裂、變形、刮傷的金飾都能回收，回收價只看純度和重量，不因外觀扣價。</p>
        </div>
        <div style={{marginBottom:'1rem', background:'white', padding:'1rem', borderRadius:'8px', border:'1px solid #e5e7eb'}}>
          <h3 style={{margin:'0 0 0.5rem 0', fontSize:'1rem', color:'#1f2937'}}>Q: 壞掉的金飾回收價會比較低嗎？</h3>
          <p style={{margin:0, color:'#4b5563', lineHeight:'1.6'}}>A: 不會。正規回收店只看純度和重量計價，外觀損壞不影響黃金本身的價值。</p>
        </div>
        <div style={{marginBottom:'1rem', background:'white', padding:'1rem', borderRadius:'8px', border:'1px solid #e5e7eb'}}>
          <h3 style={{margin:'0 0 0.5rem 0', fontSize:'1rem', color:'#1f2937'}}>Q: 只有一小塊碎金也收嗎？</h3>
          <p style={{margin:0, color:'#4b5563', lineHeight:'1.6'}}>A: 收。不論大小，只要含金成分都可以回收估價。</p>
        </div>
      </section>
      <div style={{ margin: '2rem 0', padding: '1.5rem', background: '#FEF9E7', borderRadius: '8px', borderLeft: '4px solid #B8860B' }}>
        <strong>延伸閱讀：</strong>
        <ul style={{ marginTop: '0.5rem', paddingLeft: '1.5rem' }}>
          <li><a href="/blog/gold-recycling-process" style={{ color: '#B8860B' }}>黃金回收完整流程</a></li>
          <li><a href="/blog/gold-appraise" style={{ color: '#B8860B' }}>黃金鑑定方法</a></li>
          <li><a href="/blog/gold-id-requirement" style={{ color: '#B8860B' }}>黃金回收需要什麼證件</a></li>
          <li><a href="/blog/before-selling-gold" style={{ color: '#B8860B' }}>賣黃金前必知事項</a></li>
        </ul>
      </div>

      <hr style={{ margin: '2rem 0' }} />
      <p>📞 電話：0986-821-626</p>
      <p>💬 LINE：@QPD888</p>
      <p>🌐 官網：https://www.gold-tw.com/</p>
    </main>
  );
}
