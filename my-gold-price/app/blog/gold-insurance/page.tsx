import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '黃金保險｜黃金保障規劃指南｜巧品珠寶',
  description: '黃金保險完整說明！了解如何保障黃金資產安全，比較各種保管方式的風險。台北巧品珠寶提供安全的黃金回收服務。 台北巧品珠寶鑑定師L親自鑑定，10年以上珠寶鑑定資歷，透明報價不扣耗損，台北大安區濟南路三段62-1號，提供免費估價與諮詢服務。',
  keywords: '黃金保險,黃金保管,黃金安全,黃金保障',
  alternates: {
    canonical: 'https://www.gold-tw.com/blog/gold-insurance',
  },
  openGraph: {
    locale: 'zh_TW',
    title: '黃金保險｜黃金保障規劃指南｜巧品珠寶',
    description: '黃金保險完整說明！了解如何保障黃金資產安全，比較各種保管方式的風險。台北巧品珠寶提供安全的黃金回收服務。',
    type: 'article',
    url: 'https://www.gold-tw.com/blog/gold-insurance',
    siteName: '巧品珠寶',
    publishedTime: '2026-03-15T00:00:00+08:00',
    modifiedTime: '2026-03-16T00:00:00+08:00',
    images: [{ url: '/og-image.webp', width: 1200, height: 630, alt: '巧品珠寶' }],

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
            "headline": "黃金保險｜黃金保障規劃指南｜巧品珠寶",
            "description": "黃金保險建議！了解實體黃金的保管風險與保障規劃，台北巧品珠寶提供專業諮詢服務。",
            "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.gold-tw.com/blog/gold-insurance" },
            "author": { "@type": "Person", "name": "鑑定師L", "url": "https://www.gold-tw.com", "@id": "https://www.gold-tw.com/#business" },
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
          __html: JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"首頁","item":"https://www.gold-tw.com"},{"@type":"ListItem","position":2,"name":"知識專欄","item":"https://www.gold-tw.com/blog"},{"@type":"ListItem","position":3,"name":"黃金保險｜黃金保障規劃指南｜巧品珠寶"}]})
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
                "name": "Is it safe to keep gold at home?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Small amounts are fine; large amounts are better in a bank safe deposit box."
                }
              }
            ]
          })
        }}
      />
      <h1>黃金保險｜實體黃金保障完整指南</h1>

      <div style={{background:'#fffbeb', borderLeft:'4px solid #f59e0b', padding:'16px', margin:'16px 0', borderRadius:'8px'}}>
        <strong>📌 重點摘要：</strong> 黃金保險主要保障金飾遺失與竊盜風險。高價金飾建議投保，理賠時需提供購買證明與鑑定報告。
      </div>
      <h2>Physical gold needs proper storage and protection?</h2>
      <p>Owning physical gold is great, but poor storage can lead to loss or theft. Learn how to protect your gold properly.</p>
      <h2>How to storage options?</h2>
      <ul>
        <li>Home safe: convenient, bolt to wall for security</li>
        <li>Bank safe deposit box: highest security, annual fee</li>
        <li>Gold passbook: no physical storage needed</li>
      </ul>
      <h2>What are the insurance tips?</h2>
      <ul>
        <li>Record weight, purity and purchase receipts</li>
        <li>Take photos for records</li>
        <li>Ask your insurer about personal property coverage</li>
      </ul>
      <h2>FAQ</h2>
      <h3>Q: Is it safe to keep gold at home?</h3>
      <p>A: Small amounts are fine; large amounts are better in a bank safe deposit box.</p>
      <div style={{ margin: '2rem 0', padding: '1.5rem', background: '#FEF9E7', borderRadius: '8px', borderLeft: '4px solid #B8860B' }}>
        <strong>延伸閱讀：</strong>
        <ul style={{ marginTop: '0.5rem', paddingLeft: '1.5rem' }}>
          <li><a href="/blog/gold-safety" style={{ color: '#B8860B' }}>黃金交易安全</a></li>
          <li><a href="/blog/gold-liquid" style={{ color: '#B8860B' }}>黃金變現指南</a></li>
          <li><a href="/blog/gold-coin-invest" style={{ color: '#B8860B' }}>黃金硬幣投資</a></li>
          <li><a href="/blog/gold-bar-recovery" style={{ color: '#B8860B' }}>黃金條塊回收</a></li>
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
