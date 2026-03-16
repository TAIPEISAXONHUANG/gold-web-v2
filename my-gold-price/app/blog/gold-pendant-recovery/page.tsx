import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '黃金墜子回收｜金吊墜高價變現｜巧品珠寶',
  description: '黃金墜子回收推薦！各式金墜、神明吊墜、鑲嵌寶石金墜皆可收購，台北巧品珠寶專業估價。',
  keywords: '黃金墜子回收,金吊墜變現,金墜回收台北',
  alternates: {
    canonical: 'https://www.gold-tw.com/blog/gold-pendant-recovery',
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
            "headline": "黃金墜子回收｜金吊墜高價變現｜巧品珠寶",
            "description": "黃金墜子回收推薦！各式金墜、神明吊墜、鑲嵌寶石金墜皆可收購，台北巧品珠寶專業估價。",
            "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.gold-tw.com/blog/gold-pendant-recovery" },
            "author": { "@type": "Organization", "name": "巧品珠寶" },
            "publisher": { "@type": "Organization", "name": "巧品珠寶" },
            "image": { "@type": "ImageObject", "url": "https://wsrv.nl/?url=https://drive.google.com/uc?id=1ASz1v5ZBQ-WV572r-BC4gZRuraywgKKv&w=1200&output=webp&q=80" },
            "datePublished": "2026-03-15T00:00:00+08:00",
            "dateModified": "2026-03-16T00:00:00+08:00"
          })
        }}
      />
      <h1>黃金墜子回收｜金吊墜高價變現</h1>
      <h2>Conclusion: All gold pendant styles accepted, purity and weight determine value</h2>
      <p>From religious pendants to modern designs, we accept all gold pendant types at fair market prices.</p>
      <h2>Types we accept</h2>
      <ul>
        <li>Religious pendants (Guanyin, Buddha, Pixiu)</li>
        <li>Diamond-set gold pendants</li>
        <li>Geometric and modern designs</li>
        <li>All K-gold pendant types</li>
      </ul>
      <h2>FAQ</h2>
      <h3>Q: Can religious pendants be sold?</h3>
      <p>A: Yes, this is entirely your personal choice.</p>
      <h3>Q: My pendant has small diamonds - how are they priced?</h3>
      <p>A: Gold and diamonds are appraised separately with full transparency.</p>
      <div style={{{{ margin: '2rem 0', padding: '1.5rem', background: '#FEF9E7', borderRadius: '8px', borderLeft: '4px solid #B8860B' }}}}>
        <strong>相關文章：</strong>
        <ul style={{{{ marginTop: '0.5rem', paddingLeft: '1.5rem' }}}}>
        <li><a href="/blog/gold-necklace-recovery" style={{ color: "#B8860B" }}>黃金項鍊回收</a></li>
        <li><a href="/blog/gold-ring-recovery" style={{ color: "#B8860B" }}>黃金戒指回收</a></li>
        <li><a href="/blog/diamond-jewelry" style={{ color: "#B8860B" }}>鑽石珠寶收購</a></li>
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
