import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '黃金詐騙防範｜常見黃金騙局攻略｜巧品珠寶',
  description: '黃金回收詐騙防範完整指南！識破話術、假牌價、扣耗損等手法，教你如何選擇誠信店家，安全賣黃金不吃虧。',
  keywords: '黃金詐騙,黃金防騙,黑心銀樓,黃金回收騙局',
  alternates: {
    canonical: 'https://www.gold-tw.com/blog/gold-scam-prevent',
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
            "headline": "黃金詐騙防範｜常見黃金騙局攻略｜巧品珠寶",
            "description": "黃金詐騙防範必看！常見黃金回收騙局、黑心銀樓手法解析，教你如何安全賣黃金。",
            "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.gold-tw.com/blog/gold-scam-prevent" },
            "author": { "@type": "Organization", "name": "巧品珠寶", "url": "https://www.gold-tw.com", "@id": "https://www.gold-tw.com/#business" },
            "publisher": { "@type": "Organization", "name": "巧品珠寶", "url": "https://www.gold-tw.com", "logo": { "@type": "ImageObject", "url": "https://wsrv.nl/?url=https://drive.google.com/uc?id=16UrCpYWRkyEkvL7M73o0DIAvkKWtF0Lp&w=200&output=webp" } },
            "image": { "@type": "ImageObject", "url": "https://wsrv.nl/?url=https://drive.google.com/uc?id=1ASz1v5ZBQ-WV572r-BC4gZRuraywgKKv&w=1200&output=webp&q=80" },
            "datePublished": "2026-03-15T00:00:00+08:00",
            "dateModified": "2026-03-16T00:00:00+08:00"
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"首頁","item":"https://www.gold-tw.com"},{"@type":"ListItem","position":2,"name":"知識專欄","item":"https://www.gold-tw.com/blog"},{"@type":"ListItem","position":3,"name":"黃金詐騙防範｜常見黃金騙局攻略｜巧品珠寶"}]})
        }}
      />
      <h1>黃金詐騙防範｜常見騙局完整攻略</h1>

      <div style={{background:'#fffbeb', borderLeft:'4px solid #f59e0b', padding:'16px', margin:'16px 0', borderRadius:'8px'}}>
        <strong>📌 重點摘要：</strong> 防範黃金詐騙：不接受低於牌價的報價、拒絕私下交易、確認店家營業登記、要求出具交易明細。選擇實體店面最安全。
      </div>
      <h2>Conclusion: Know the scams to sell gold safely</h2>
      <p>While most gold dealers are honest, some use deceptive tactics. Know the common scams to protect yourself.</p>
      <h2>Common gold recovery scams</h2>
      <ul>
        <li>Scale tampering: manipulating weights when you're not watching</li>
        <li>Excessive deductions: claiming 20-30% "impurity loss"</li>
        <li>Purity underreporting: calling 916 gold 14K to lower the price</li>
        <li>Bait-and-switch: swapping your gold during appraisal</li>
        <li>Online fraud: fake dealers who disappear after receiving payment</li>
      </ul>
      <h2>How to protect yourself</h2>
      <ol>
        <li>Choose established stores with good reputation</li>
        <li>Watch the entire process: see the scale reading yourself</li>
        <li>Demand transparent appraisal</li>
        <li>Compare prices - suspiciously low offers are a red flag</li>
        <li>Never let your gold out of sight</li>
      </ol>
      <h2>FAQ</h2>
      <h3>Q: How do I verify the weight is accurate?</h3>
      <p>A: Demand on-the-spot weighing with you watching - we guarantee full transparency.</p>
      <div style={{ margin: '2rem 0', padding: '1.5rem', background: '#FEF9E7', borderRadius: '8px', borderLeft: '4px solid #B8860B' }}>
        <strong>相關文章：</strong>
        <ul style={{ marginTop: '0.5rem', paddingLeft: '1.5rem' }}>
        <li><a href="/blog/gold-scale-trap" style={{ color: "#B8860B" }}>黃金秤重陷阱</a></li>
        <li><a href="/blog/gold-recovery-traps" style={{ color: "#B8860B" }}>黃金回收陷阱</a></li>
        <li><a href="/blog/how-to-choose-gold-shop" style={{ color: "#B8860B" }}>如何選黃金回收店</a></li>
        <li><a href="/blog/gold-safety" style={{ color: "#B8860B" }}>黃金交易安全</a></li>
        </ul>
      </div>

      <hr style={{ margin: '2rem 0' }} />
      <h2>Contact Us</h2>
      <p>Phone: <a href="tel:0986821626">0986-821-626</a></p>
      <p>LINE: @QPD888</p>
      <p>Address: Taipei Da-An District, Ji-Nan Rd Sec3, 62-1</p>
    </main>
  );
}
