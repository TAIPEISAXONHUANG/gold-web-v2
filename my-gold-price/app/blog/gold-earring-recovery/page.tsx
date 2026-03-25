import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '黃金耳環回收｜金耳環高價變現｜巧品珠寶',
  description: '黃金耳環高價回收！各款式K金耳環、墜子均可，按重量現金付款不扣耗損。台北巧品珠寶免費估價，電話 0986-821-626。',
  keywords: '黃金耳環回收,金耳環變現,耳環回收台北',
  alternates: {
    canonical: 'https://www.gold-tw.com/blog/gold-earring-recovery',
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
            "headline": "黃金耳環回收｜金耳環高價變現｜巧品珠寶",
            "description": "黃金耳環回收推薦！台北高價收購各式金耳環，純度鑑定透明，當場現金付款。",
            "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.gold-tw.com/blog/gold-earring-recovery" },
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
          __html: JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"首頁","item":"https://www.gold-tw.com"},{"@type":"ListItem","position":2,"name":"知識專欄","item":"https://www.gold-tw.com/blog"},{"@type":"ListItem","position":3,"name":"黃金耳環回收｜金耳環高價變現｜巧品珠寶"}]})
        }}
      />
      <h1>黃金耳環回收｜金耳環高價變現</h1>

      <div style={{background:'#fffbeb', borderLeft:'4px solid #f59e0b', padding:'16px', margin:'16px 0', borderRadius:'8px'}}>
        <strong>📌 重點摘要：</strong> 黃金耳環不論大小都可回收，依純度與重量計價。K金耳環按含金比例計算。鑲鑽款式可分開估價貴金屬與鑽石。
      </div>
      <h2>Results: Even small gold earrings are worth recovering</h2>
      <p>Many people think earrings are too small to bother recovering. But a pair of 18K gold earrings weighing 1-2 grams can still be worth hundreds. We accept all types of gold earrings, even single pieces.</p>
      <h2>What we accept</h2>
      <ul>
        <li>9999 pure gold, 916 gold earrings</li>
        <li>18K, 14K, 10K gold earrings</li>
        <li>Diamond-set gold earrings (diamonds estimated separately)</li>
        <li>Single pieces accepted (no pair required)</li>
      </ul>
      <h2>FAQ</h2>
      <h3>Q: I only have one earring, can it be recovered?</h3>
      <p>A: Yes, we price by weight so single earrings are accepted.</p>
      <h3>Q: My earrings have small diamonds, how are they priced?</h3>
      <p>A: Gold and diamonds are estimated separately, we give you a total.</p>
      <div style={{ margin: '2rem 0', padding: '1.5rem', background: '#FEF9E7', borderRadius: '8px', borderLeft: '4px solid #B8860B' }}>
        <strong>延伸閱讀：</strong>
        <ul style={{ marginTop: '0.5rem', paddingLeft: '1.5rem' }}>
          <li><a href="/blog/gold-necklace-recovery" style={{ color: '#B8860B' }}>黃金項鍊回收</a></li>
          <li><a href="/blog/gold-ring-recovery" style={{ color: '#B8860B' }}>黃金戒指回收</a></li>
          <li><a href="/blog/gold-bracelet-recovery" style={{ color: '#B8860B' }}>黃金手鐲回收</a></li>
          <li><a href="/blog/gold-pendant-recovery" style={{ color: '#B8860B' }}>黃金墜子回收</a></li>
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
