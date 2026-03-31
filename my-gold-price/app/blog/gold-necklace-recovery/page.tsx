import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '黃金項鍊回收｜金鍊高價變現｜巧品珠寶',
  description: '黃金項鍊高價回收！各款式K金項鍊均可，按重量計價不扣耗損。台北巧品珠寶老闆親自鑑定，當場現金，電話 0986-821-626。',
  keywords: '黃金項鍊回收,金鍊變現,項鍊回收台北',
  alternates: {
    canonical: 'https://www.gold-tw.com/blog/gold-necklace-recovery',
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
            "headline": "黃金項鍊回收｜金鍊高價變現｜巧品珠寶",
            "description": "黃金項鍊回收推薦！台北高價收購各式金項鍊，斷鍊、舊款皆可，不扣耗損當場付款。",
            "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.gold-tw.com/blog/gold-necklace-recovery" },
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
          __html: JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"首頁","item":"https://www.gold-tw.com"},{"@type":"ListItem","position":2,"name":"知識專欄","item":"https://www.gold-tw.com/blog"},{"@type":"ListItem","position":3,"name":"黃金項鍊回收｜金鍊高價變現｜巧品珠寶"}]})
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              { '@type': 'Question', name: '我的項鍊斷了，會影響回收價嗎？', acceptedAnswer: { '@type': 'Answer', text: '不影響，我們依重量計價，斷鍊和完整的項鍊報價一樣。' } },
              { '@type': 'Question', name: '項鍊有墜子，怎麼計價？', acceptedAnswer: { '@type': 'Answer', text: '金鍊和墜子一起秤重計算，寶石部分另行估價。' } },
            ],
          })
        }}
      />
      <h1>黃金項鍊回收｜金鍊高價變現</h1>

      <div style={{background:'#fffbeb', borderLeft:'4px solid #f59e0b', padding:'16px', margin:'16px 0', borderRadius:'8px'}}>
        <strong>📌 重點摘要：</strong> 黃金項鍊回收依純度與重量計價，斷鏈、單邊都可回收。18K、14K項鍊按含金比例計算，不因款式新舊影響回收價。
      </div>
      <h2>Conclusion: Gold necklaces are the most common recovery item - fast and simple</h2>
      <p>Whether 9999 pure gold, 18K, or broken chains, we offer top market prices for all gold necklaces.</p>
      <h2>Types we accept</h2>
      <ul>
        <li>9999 pure gold, 916 gold necklaces</li>
        <li>18K, 14K, 10K gold necklaces</li>
        <li>Platinum necklaces</li>
        <li>Broken or damaged necklaces</li>
        <li>Necklaces with pendants (pendants estimated separately)</li>
      </ul>
      <h2>FAQ</h2>
      <h3>Q: My necklace is broken - does that reduce the price?</h3>
      <p>A: No, we price by weight so broken necklaces get the same price.</p>
      <h3>Q: My necklace has a pendant - how is it priced?</h3>
      <p>A: Gold chain and pendant are weighed together; gemstones estimated separately.</p>
      <div style={{ margin: '2rem 0', padding: '1.5rem', background: '#FEF9E7', borderRadius: '8px', borderLeft: '4px solid #B8860B' }}>
        <strong>延伸閱讀：</strong>
        <ul style={{ marginTop: '0.5rem', paddingLeft: '1.5rem' }}>
          <li><a href="/blog/gold-ring-recovery" style={{ color: '#B8860B' }}>黃金戒指回收</a></li>
          <li><a href="/blog/gold-bracelet-recovery" style={{ color: '#B8860B' }}>黃金手鐲回收</a></li>
          <li><a href="/blog/gold-earring-recovery" style={{ color: '#B8860B' }}>黃金耳環回收</a></li>
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
