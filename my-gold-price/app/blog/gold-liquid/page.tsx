import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '黃金流當｜黃金典當借款說明｜巧品珠寶',
  description: '黃金變現完整攻略！比較直接回收、拍賣、銀行的差異，教你找到最快速、最高價的黃金變現方式。台北巧品珠寶當場現金。',
  keywords: '黃金流當,黃金典當,黃金借款,黃金抵押',
  alternates: {
    canonical: 'https://www.gold-tw.com/blog/gold-liquid',
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
            "headline": "黃金流當｜黃金典當借款說明｜巧品珠寶",
            "description": "黃金流當、典當借款說明！了解黃金流當與直接回收的差異，台北巧品珠寶提供高價收購服務。",
            "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.gold-tw.com/blog/gold-liquid" },
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
          __html: JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"首頁","item":"https://www.gold-tw.com"},{"@type":"ListItem","position":2,"name":"知識專欄","item":"https://www.gold-tw.com/blog"},{"@type":"ListItem","position":3,"name":"黃金流當｜黃金典當借款說明｜巧品珠寶"}]})
        }}
      />
      <h1>黃金流當｜典當與直接回收的選擇</h1>
      <h2>Conclusion: Direct recovery usually beats pawning</h2>
      <p>Pawning gold gives you only 70-80% of market value plus monthly interest. Direct recovery at market price with no fees is often more profitable.</p>
      <h2>Pawning vs Direct Recovery</h2>
      <ul>
        <li>Pawning: 70-80% value, monthly interest, can reclaim item</li>
        <li>Direct recovery: full market price, no fees, no reclaim</li>
      </ul>
      <h2>FAQ</h2>
      <h3>Q: I want to keep the option to get my gold back - can I still pawn it?</h3>
      <p>A: Yes, pawning is the only option if you want to reclaim. Direct recovery is better if you're sure you want to sell.</p>
      <h3>Q: Do you offer pawn services?</h3>
      <p>A: We specialize in direct recovery. For pawning, please inquire at a local pawn shop.</p>
      <div style={{ margin: '2rem 0', padding: '1.5rem', background: '#FEF9E7', borderRadius: '8px', borderLeft: '4px solid #B8860B' }}>
        <strong>相關文章：</strong>
        <ul style={{ marginTop: '0.5rem', paddingLeft: '1.5rem' }}>
        <li><a href="/blog/gold-auction" style={{ color: "#B8860B" }}>黃金拍賣vs回收</a></li>
        <li><a href="/blog/gold-appraise" style={{ color: "#B8860B" }}>黃金免費估價</a></li>
        <li><a href="/blog/before-selling-gold" style={{ color: "#B8860B" }}>賣黃金前準備</a></li>
        <li><a href="/blog/gold-shop-recommend" style={{ color: "#B8860B" }}>台北黃金回收推薦</a></li>
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
