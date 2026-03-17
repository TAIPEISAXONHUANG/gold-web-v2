import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'K金回收｜18K/14K回收價格一篇搞懂',
  description: 'K金回收完整指南！18K/14K/10K各成色計價方式，台北巧品珠寶公開透明報價，不扣耗損，當場現金，電話 0986-821-626。',
  keywords: 'K金回收,18K回收,14K回收,珠寶回收',
  alternates: {
    canonical: 'https://www.gold-tw.com/blog/karat-gold-recovery',
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
          __html: JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"首頁","item":"https://www.gold-tw.com"},{"@type":"ListItem","position":2,"name":"知識專欄","item":"https://www.gold-tw.com/blog"},{"@type":"ListItem","position":3,"name":"K金回收｜18K/14K回收價格一篇搞懂"}]})
        }}
      />
      <h1>K金回收價格一篇搞懂</h1>

      <div style={{background:'#fffbeb', borderLeft:'4px solid #f59e0b', padding:'16px', margin:'16px 0', borderRadius:'8px'}}>
        <strong>📌 重點摘要：</strong> K金回收不限K數：18K、14K、10K、9K、8K都可以回收。價格依含金比例計算，不因品牌或款式打折。
      </div>

      <h2>什麼是K金？</h2>
      <p>K金是指黃金與其他金屬的合金，用「K」表示純度：</p>
      <ul>
        <li><strong>18K</strong> = 75% 黃金 + 25% 其他金屬</li>
        <li><strong>14K</strong> = 58.5% 黃金 + 41.5% 其他金屬</li>
      </ul>

      <h2>K金回收計算方式</h2>
      <p><strong>回收價格 = 黃金牌價 × 純度 × 重量</strong></p>

      <h2>為什麼要選專業回收？</h2>
      <ul>
        <li>專業儀器檢測精準</li>
        <li>價格透明不扣秤</li>
        <li>當日付款快速</li>
      </ul>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"K金回收價怎麼算？","acceptedAnswer":{"@type":"Answer","text":"公式：當日24K牌價 × K金含金比例 × 重量。例如18K = 牌價 × 75%、14K = 牌價 × 58.5%。"}},{"@type":"Question","name":"什麼K數的金飾都收嗎？","acceptedAnswer":{"@type":"Answer","text":"是的。18K、14K、10K、9K、8K都可以回收，依含金比例計價。"}},{"@type":"Question","name":"K金顏色不同價格會不同嗎？","acceptedAnswer":{"@type":"Answer","text":"不會。玫瑰金、白K金、黃K金只是合金配方不同，同K數的含金量一樣，回收價也一樣。"}}]})
        }}
      />
      <section style={{marginTop:'2.5rem', padding:'2rem', background:'#f9fafb', borderRadius:'12px', border:'1px solid #e5e7eb'}}>
        <h2 style={{fontSize:'1.3rem', fontWeight:'bold', color:'#1f2937', marginTop:0, marginBottom:'1rem'}}>❓ 常見問題</h2>
        <div style={{marginBottom:'1rem', background:'white', padding:'1rem', borderRadius:'8px', border:'1px solid #e5e7eb'}}>
          <h3 style={{margin:'0 0 0.5rem 0', fontSize:'1rem', color:'#1f2937'}}>Q: K金回收價怎麼算？</h3>
          <p style={{margin:0, color:'#4b5563', lineHeight:'1.6'}}>A: 公式：當日24K牌價 × K金含金比例 × 重量。例如18K = 牌價 × 75%、14K = 牌價 × 58.5%。</p>
        </div>
        <div style={{marginBottom:'1rem', background:'white', padding:'1rem', borderRadius:'8px', border:'1px solid #e5e7eb'}}>
          <h3 style={{margin:'0 0 0.5rem 0', fontSize:'1rem', color:'#1f2937'}}>Q: 什麼K數的金飾都收嗎？</h3>
          <p style={{margin:0, color:'#4b5563', lineHeight:'1.6'}}>A: 是的。18K、14K、10K、9K、8K都可以回收，依含金比例計價。</p>
        </div>
        <div style={{marginBottom:'1rem', background:'white', padding:'1rem', borderRadius:'8px', border:'1px solid #e5e7eb'}}>
          <h3 style={{margin:'0 0 0.5rem 0', fontSize:'1rem', color:'#1f2937'}}>Q: K金顏色不同價格會不同嗎？</h3>
          <p style={{margin:0, color:'#4b5563', lineHeight:'1.6'}}>A: 不會。玫瑰金、白K金、黃K金只是合金配方不同，同K數的含金量一樣，回收價也一樣。</p>
        </div>
      </section>
      <div style={{ margin: '2rem 0', padding: '1.5rem', background: '#FEF9E7', borderRadius: '8px', borderLeft: '4px solid #B8860B' }}>
        <strong>相關文章：</strong>
        <ul style={{ marginTop: '0.5rem', paddingLeft: '1.5rem' }}>
        <li><a href="/blog/gold-9999-recovery" style={{ color: "#B8860B" }}>9999純金回收</a></li>
        <li><a href="/blog/karat-gold-guide" style={{ color: "#B8860B" }}>K金完整指南</a></li>
        <li><a href="/blog/gold-purity" style={{ color: "#B8860B" }}>黃金純度說明</a></li>
        <li><a href="/blog/gold-identification" style={{ color: "#B8860B" }}>黃金鑑定方法</a></li>
        </ul>
      </div>

      <hr style={{ margin: '2rem 0' }} />
      <p>📞 電話：0986-821-626</p>
      <p>💬 LINE：@QPD888</p>
      <p>🌐 官網：https://www.gold-tw.com/</p>
    </main>
  );
}
