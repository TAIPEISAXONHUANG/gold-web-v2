import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '黃金項鍊回收｜金鍊高價變現｜巧品珠寶',
  description: '黃金項鍊回收推薦！台北高價收購各式金項鍊，斷鍊、舊款皆可，不扣耗損當場付款。',
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
            "@type": "Article",
            "headline": "黃金項鍊回收｜金鍊高價變現｜巧品珠寶",
            "description": "黃金項鍊回收推薦！台北高價收購各式金項鍊，斷鍊、舊款皆可，不扣耗損當場付款。",
            "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.gold-tw.com/blog/gold-necklace-recovery" },
            "author": { "@type": "Organization", "name": "巧品珠寶" },
            "publisher": { "@type": "Organization", "name": "巧品珠寶" },
            "image": { "@type": "ImageObject", "url": "https://wsrv.nl/?url=https://drive.google.com/uc?id=1ASz1v5ZBQ-WV572r-BC4gZRuraywgKKv&w=1200&output=webp&q=80" },
            "datePublished": "2026-03-15T00:00:00+08:00",
            "dateModified": "2026-03-16T00:00:00+08:00"
          })
        }}
      />
      <h1>黃金項鍊回收｜金鍊高價變現</h1>
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
      <div style={{{{ margin: '2rem 0', padding: '1.5rem', background: '#FEF9E7', borderRadius: '8px', borderLeft: '4px solid #B8860B' }}}}>
        <strong>相關文章：</strong>
        <ul style={{{{ marginTop: '0.5rem', paddingLeft: '1.5rem' }}}}>
        <li><a href="/blog/gold-ring-recovery" style={{ color: "#B8860B" }}>黃金戒指回收</a></li>
        <li><a href="/blog/gold-bracelet-recovery" style={{ color: "#B8860B" }}>黃金手鍊回收</a></li>
        <li><a href="/blog/gold-pendant-recovery" style={{ color: "#B8860B" }}>黃金吊墜回收</a></li>
        <li><a href="/blog/gold-appraise" style={{ color: "#B8860B" }}>黃金免費估價</a></li>
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
