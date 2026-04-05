import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '黃金傳家｜傳家黃金保存與變現｜巧品珠寶',
  description: '家傳黃金如何處理最划算？了解清點、鑑定、變現的完整流程，台北巧品珠寶老闆親自鑑定，免費估價，電話 0986-821-626。',
  keywords: '黃金傳家,傳家寶黃金,金飾傳承',
  alternates: {
    canonical: 'https://www.gold-tw.com/blog/gold-family',
  },
  openGraph: {
    title: '黃金傳家｜傳家黃金保存與變現｜巧品珠寶',
    description: '家傳黃金如何處理最划算？了解清點、鑑定、變現的完整流程，台北巧品珠寶老闆親自鑑定，免費估價，電話 0986-821-626。',
    type: 'article',
    url: 'https://www.gold-tw.com/blog/gold-family',
    siteName: '巧品珠寶',
    publishedTime: '2026-03-15T00:00:00+08:00',
    modifiedTime: '2026-03-16T00:00:00+08:00',
  },
};

// lastModified: 2026-03-19
export default function Page() {
  return (
    <main style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": "黃金傳家｜傳家黃金保存與變現｜巧品珠寶",
            "description": "黃金傳家意義深遠！了解傳家寶金飾的保存方式與變現時機，台北巧品珠寶提供專業諮詢。",
            "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.gold-tw.com/blog/gold-family" },
            "author": { "@type": "Organization", "name": "鑑定師L", "url": "https://www.gold-tw.com", "@id": "https://www.gold-tw.com/#business" },
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
          __html: JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"首頁","item":"https://www.gold-tw.com"},{"@type":"ListItem","position":2,"name":"知識專欄","item":"https://www.gold-tw.com/blog"},{"@type":"ListItem","position":3,"name":"黃金傳家｜傳家黃金保存與變現｜巧品珠寶"}]})
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Grandmother's jewelry has no receipt, can it be recovered?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Absolutely. We appraise on-site, no proof of purchase needed."
                }
              },
              {
                "@type": "Question",
                "name": "Can I get a free estimate without committing to sell?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, appraisal is always free with no obligation."
                }
              }
            ]
          })
        }}
      />
      <h1>黃金傳家｜傳承與變現的智慧</h1>

      <div style={{background:'#fffbeb', borderLeft:'4px solid #f59e0b', padding:'16px', margin:'16px 0', borderRadius:'8px'}}>
        <strong>📌 重點摘要：</strong> 家傳黃金飾品回收前建議先確認家人意願，並了解市場行情。若決定出售，選擇公開透明的店家，保障家傳金飾的價值。
      </div>
      <h2>Heirloom gold is both sentimental and financial value?</h2>
      <p>Gold jewelry passed down through generations carries precious family memories. When life requires funds or pieces go unworn, selling is a practical choice. We respect every customer's story.</p>
      <h2>How to storage tips for heirloom gold?</h2>
      <ul>
        <li>Keep in dry, dark environment</li>
        <li>Wrap in soft cloth, separate from other metals</li>
        <li>Check periodically for damage</li>
        <li>Record weight and any purchase info if available</li>
      </ul>
      <h2>FAQ</h2>
      <h3>Q: Grandmother's jewelry has no receipt, can it be recovered?</h3>
      <p>A: Absolutely. We appraise on-site, no proof of purchase needed.</p>
      <h3>Q: Can I get a free estimate without committing to sell?</h3>
      <p>A: Yes, appraisal is always free with no obligation.</p>
      <div style={{ margin: '2rem 0', padding: '1.5rem', background: '#FEF9E7', borderRadius: '8px', borderLeft: '4px solid #B8860B' }}>
        <strong>延伸閱讀：</strong>
        <ul style={{ marginTop: '0.5rem', paddingLeft: '1.5rem' }}>
          <li><a href="/blog/inheritance-gold" style={{ color: '#B8860B' }}>繼承黃金處理</a></li>
          <li><a href="/blog/wedding-gold-recovery" style={{ color: '#B8860B' }}>嫁妝黃金回收</a></li>
          <li><a href="/blog/gold-antique" style={{ color: '#B8860B' }}>古早黃金回收</a></li>
          <li><a href="/blog/gold-appraise" style={{ color: '#B8860B' }}>黃金免費估價</a></li>
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
