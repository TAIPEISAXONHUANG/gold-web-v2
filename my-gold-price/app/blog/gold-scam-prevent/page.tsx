import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '黃金詐騙防範｜常見黃金騙局攻略｜巧品珠寶',
  description: '黃金詐騙防範必看！常見黃金回收騙局、黑心銀樓手法解析，教你如何安全賣黃金。',
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
            "author": { "@type": "Organization", "name": "巧品珠寶" },
            "publisher": { "@type": "Organization", "name": "巧品珠寶" },
            "image": { "@type": "ImageObject", "url": "https://wsrv.nl/?url=https://drive.google.com/uc?id=1ASz1v5ZBQ-WV572r-BC4gZRuraywgKKv&w=1200&output=webp&q=80" },
            "datePublished": "2026-03-15T00:00:00+08:00",
            "dateModified": "2026-03-16T00:00:00+08:00"
          })
        }}
      />
      <h1>黃金詐騙防範｜常見騙局完整攻略</h1>
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
      <hr style={{ margin: '2rem 0' }} />
      <h2>Contact Us</h2>
      <p>Phone: <a href="tel:0986821626">0986-821-626</a></p>
      <p>LINE: @QPD888</p>
      <p>Address: Taipei Da-An District, Ji-Nan Rd Sec3, 62-1</p>
    </main>
  );
}
