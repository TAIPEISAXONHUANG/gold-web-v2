import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '舊金回收｜老舊黃金變現｜巧品珠寶',
  description: '舊金、老金飾高價回收！不論年代、款式均可，按實際含金量計價不打折。台北巧品珠寶免費估價，電話 0986-821-626。',
  keywords: '舊金回收,老舊黃金,黃金變現',
  alternates: {
    canonical: 'https://www.gold-tw.com/blog/old-gold-recovery',
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
            "author": { "@type": "Organization", "name": "巧品珠寶", "url": "https://www.gold-tw.com", "@id": "https://www.gold-tw.com/#business" },
            "publisher": { "@type": "Organization", "name": "巧品珠寶", "url": "https://www.gold-tw.com", "logo": { "@type": "ImageObject", "url": "https://wsrv.nl/?url=https://drive.google.com/uc?id=16UrCpYWRkyEkvL7M73o0DIAvkKWtF0Lp&w=200&output=webp" } },
            "datePublished": "2026-03-12",
              "dateModified": "2026-03-16T00:00:00+08:00",
            "description": "黃金回收專業知識"
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"首頁","item":"https://www.gold-tw.com"},{"@type":"ListItem","position":2,"name":"知識專欄","item":"https://www.gold-tw.com/blog"},{"@type":"ListItem","position":3,"name":"舊金回收｜老舊黃金變現｜巧品珠寶"}]})
        }}
      />
      <h1>舊金回收｜老舊黃金變現</h1>

      <div style={{background:'#fffbeb', borderLeft:'4px solid #f59e0b', padding:'16px', margin:'16px 0', borderRadius:'8px'}}>
        <strong>📌 重點摘要：</strong> 舊金飾回收不看新舊，只看純度和重量。祖傳金飾、變色氧化的金飾都能回收，巧品珠寶專業鑑定讓舊金發揮最大價值。
      </div>
      <h2>結論：舊金也能賣好價</h2>
      <p>無論款式過時或長期收藏的舊金，我們都提供回收服務。</p>
      <h2>舊金回收優點</h2>
      <ul>
        <li>不分款式</li>
        <li>不扣耗</li>
        <li>當日現金</li>
      </ul>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"祖傳的舊金飾值多少？","acceptedAnswer":{"@type":"Answer","text":"舊金飾回收只看純度和重量，跟新舊無關。早期的台灣金飾通常純度很高（22K-24K），回收價不錯。"}},{"@type":"Question","name":"變黑的金飾是假的嗎？","acceptedAnswer":{"@type":"Answer","text":"不一定。K金含其他金屬可能氧化變色，但黃金部分的價值不變。到店鑑定就能確認。"}},{"@type":"Question","name":"沒有保證書的舊金飾能賣嗎？","acceptedAnswer":{"@type":"Answer","text":"可以。店家會現場以儀器檢測純度和重量，不需要購買證明。"}}]})
        }}
      />
      <section style={{marginTop:'2.5rem', padding:'2rem', background:'#f9fafb', borderRadius:'12px', border:'1px solid #e5e7eb'}}>
        <h2 style={{fontSize:'1.3rem', fontWeight:'bold', color:'#1f2937', marginTop:0, marginBottom:'1rem'}}>❓ 常見問題</h2>
        <div style={{marginBottom:'1rem', background:'white', padding:'1rem', borderRadius:'8px', border:'1px solid #e5e7eb'}}>
          <h3 style={{margin:'0 0 0.5rem 0', fontSize:'1rem', color:'#1f2937'}}>Q: 祖傳的舊金飾值多少？</h3>
          <p style={{margin:0, color:'#4b5563', lineHeight:'1.6'}}>A: 舊金飾回收只看純度和重量，跟新舊無關。早期的台灣金飾通常純度很高（22K-24K），回收價不錯。</p>
        </div>
        <div style={{marginBottom:'1rem', background:'white', padding:'1rem', borderRadius:'8px', border:'1px solid #e5e7eb'}}>
          <h3 style={{margin:'0 0 0.5rem 0', fontSize:'1rem', color:'#1f2937'}}>Q: 變黑的金飾是假的嗎？</h3>
          <p style={{margin:0, color:'#4b5563', lineHeight:'1.6'}}>A: 不一定。K金含其他金屬可能氧化變色，但黃金部分的價值不變。到店鑑定就能確認。</p>
        </div>
        <div style={{marginBottom:'1rem', background:'white', padding:'1rem', borderRadius:'8px', border:'1px solid #e5e7eb'}}>
          <h3 style={{margin:'0 0 0.5rem 0', fontSize:'1rem', color:'#1f2937'}}>Q: 沒有保證書的舊金飾能賣嗎？</h3>
          <p style={{margin:0, color:'#4b5563', lineHeight:'1.6'}}>A: 可以。店家會現場以儀器檢測純度和重量，不需要購買證明。</p>
        </div>
      </section>
      <div style={{ margin: '2rem 0', padding: '1.5rem', background: '#FEF9E7', borderRadius: '8px', borderLeft: '4px solid #B8860B' }}>
        <strong>延伸閱讀：</strong>
        <ul style={{ marginTop: '0.5rem', paddingLeft: '1.5rem' }}>
          <li><a href="/blog/gold-antique" style={{ color: '#B8860B' }}>古早黃金回收</a></li>
          <li><a href="/blog/broken-gold-recovery" style={{ color: '#B8860B' }}>斷裂黃金回收</a></li>
          <li><a href="/blog/inheritance-gold" style={{ color: '#B8860B' }}>繼承黃金處理</a></li>
          <li><a href="/blog/gold-appraise" style={{ color: '#B8860B' }}>黃金免費估價</a></li>
        </ul>
      </div>

      <hr style={{ margin: '2rem 0' }} />
      <p>📞 電話：0986-821-626</p>
      <p>💬 LINE：@QPD888</p>
      <p>🌐 官網：https://www.gold-tw.com/</p>
    </main>
  );
}
