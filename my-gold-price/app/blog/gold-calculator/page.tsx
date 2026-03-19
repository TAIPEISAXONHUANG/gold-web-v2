import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '黃金重量計算機｜線上黃金秤重｜巧品珠寶',
  description: '黃金回收價格計算教學：重量（台錢）× 當日牌價 = 你能拿到的金額。巧品珠寶按公開金價報價，絕不偷斤減兩。',
  keywords: '黃金計算機,黃金秤重,黃金重量計算',
  alternates: {
    canonical: 'https://www.gold-tw.com/blog/gold-calculator',
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
            "headline": "黃金重量計算機｜線上黃金秤重",
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
            "description": "黃金重量計算機，線上估價服務"
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"首頁","item":"https://www.gold-tw.com"},{"@type":"ListItem","position":2,"name":"知識專欄","item":"https://www.gold-tw.com/blog"},{"@type":"ListItem","position":3,"name":"黃金重量計算機｜線上黃金秤重｜巧品珠寶"}]})
        }}
      />
      <h1>黃金重量計算機｜線上黃金秤重</h1>

      <div style={{background:'#fffbeb', borderLeft:'4px solid #f59e0b', padding:'16px', margin:'16px 0', borderRadius:'8px'}}>
        <strong>📌 重點摘要：</strong> 黃金回收試算公式：當日回收牌價 × 重量（台錢）= 預估回收金額。K金需再乘以純度比例（如18K = 75{'%'}）。
      </div>
      
      <h2>結論：黃金重量這樣算最準確</h2>
      <p>黃金重量計算很簡單，主要以錢、兩、克為單位計算。</p>

      <h2>黃金重量單位換算</h2>
      <ul>
        <li>1兩 = 37.5克</li>
        <li>1錢 = 3.75克</li>
        <li>1分 = 0.375克</li>
      </ul>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"黃金回收怎麼算價錢？","acceptedAnswer":{"@type":"Answer","text":"公式：當日牌價 × 重量（台錢）× 純度。例如24K金5錢 = 牌價 × 5 × 100%。"}},{"@type":"Question","name":"台錢和公克怎麼換算？","acceptedAnswer":{"@type":"Answer","text":"1台錢 = 3.75公克、1兩 = 10台錢 = 37.5公克、1盎司 = 31.1公克 ≈ 8.294台錢。"}},{"@type":"Question","name":"K金怎麼算回收價？","acceptedAnswer":{"@type":"Answer","text":"18K按75%計算、14K按58.5%、10K按41.7%。例如18K金3錢 = 牌價 × 3 × 75%。"}}]})
        }}
      />
      <section style={{marginTop:'2.5rem', padding:'2rem', background:'#f9fafb', borderRadius:'12px', border:'1px solid #e5e7eb'}}>
        <h2 style={{fontSize:'1.3rem', fontWeight:'bold', color:'#1f2937', marginTop:0, marginBottom:'1rem'}}>❓ 常見問題</h2>
        <div style={{marginBottom:'1rem', background:'white', padding:'1rem', borderRadius:'8px', border:'1px solid #e5e7eb'}}>
          <h3 style={{margin:'0 0 0.5rem 0', fontSize:'1rem', color:'#1f2937'}}>Q: 黃金回收怎麼算價錢？</h3>
          <p style={{margin:0, color:'#4b5563', lineHeight:'1.6'}}>A: 公式：當日牌價 × 重量（台錢）× 純度。例如24K金5錢 = 牌價 × 5 × 100%。</p>
        </div>
        <div style={{marginBottom:'1rem', background:'white', padding:'1rem', borderRadius:'8px', border:'1px solid #e5e7eb'}}>
          <h3 style={{margin:'0 0 0.5rem 0', fontSize:'1rem', color:'#1f2937'}}>Q: 台錢和公克怎麼換算？</h3>
          <p style={{margin:0, color:'#4b5563', lineHeight:'1.6'}}>A: 1台錢 = 3.75公克、1兩 = 10台錢 = 37.5公克、1盎司 = 31.1公克 ≈ 8.294台錢。</p>
        </div>
        <div style={{marginBottom:'1rem', background:'white', padding:'1rem', borderRadius:'8px', border:'1px solid #e5e7eb'}}>
          <h3 style={{margin:'0 0 0.5rem 0', fontSize:'1rem', color:'#1f2937'}}>Q: K金怎麼算回收價？</h3>
          <p style={{margin:0, color:'#4b5563', lineHeight:'1.6'}}>A: 18K按75%計算、14K按58.5%、10K按41.7%。例如18K金3錢 = 牌價 × 3 × 75%。</p>
        </div>
      </section>
      <div style={{ margin: '2rem 0', padding: '1.5rem', background: '#FEF9E7', borderRadius: '8px', borderLeft: '4px solid #B8860B' }}>
        <strong>相關文章：</strong>
        <ul style={{ marginTop: '0.5rem', paddingLeft: '1.5rem' }}>
        <li><a href="/blog/gold-weight" style={{ color: "#B8860B" }}>黃金重量換算</a></li>
        <li><a href="/blog/gold-purity" style={{ color: "#B8860B" }}>黃金純度說明</a></li>
        <li><a href="/blog/gold-appraise" style={{ color: "#B8860B" }}>黃金免費估價</a></li>
        <li><a href="/blog/gold-price-2026" style={{ color: "#B8860B" }}>2026黃金行情</a></li>
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
