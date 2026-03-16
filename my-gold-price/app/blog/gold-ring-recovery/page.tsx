import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '黃金戒指回收｜結婚戒指變現｜巧品珠寶',
  description: '黃金戒指回收推薦！結婚戒指、各式K金戒指高價收購，不扣耗損台北當場付款。',
  keywords: '黃金戒指回收,結婚戒指變現,金戒指回收台北',
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
            "headline": "黃金戒指回收｜結婚戒指變現｜巧品珠寶",
            "description": "黃金戒指回收推薦！結婚戒指、各式K金戒指高價收購，不扣耗損台北當場付款。",
            "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.gold-tw.com/blog/gold-ring-recovery" },
            "author": { "@type": "Organization", "name": "巧品珠寶" },
            "publisher": { "@type": "Organization", "name": "巧品珠寶" },
            "image": { "@type": "ImageObject", "url": "https://wsrv.nl/?url=https://drive.google.com/uc?id=1ASz1v5ZBQ-WV572r-BC4gZRuraywgKKv&w=1200&output=webp&q=80" },
            "datePublished": "2026-03-15T00:00:00+08:00",
            "dateModified": "2026-03-16T00:00:00+08:00"
          })
        }}
      />
      <h1>黃金戒指回收｜各式金戒高價變現</h1>
      <h2>Conclusion: Wedding rings and all gold rings can be recovered at top prices</h2>
      <p>Whether old pure gold wedding bands, modern 18K diamond rings, or plain K-gold rings, we offer fair market prices for all.</p>
      <h2>Types we accept</h2>
      <ul>
        <li>9999, 916 pure gold rings</li>
        <li>18K, 14K gold rings</li>
        <li>Diamond-set gold rings (diamonds estimated separately)</li>
        <li>Wedding bands (pairs or singles)</li>
        <li>Deformed or damaged rings</li>
      </ul>
      <h2>FAQ</h2>
      <h3>Q: My wedding ring has sentimental value - do I have to decide right away?</h3>
      <p>A: Not at all. Get a free estimate first, decide at your own pace.</p>
      <h3>Q: The ring has a gemstone - how is the gold part calculated?</h3>
      <p>A: We separate metal and gemstone with full transparent breakdown.</p>
      <hr style={{ margin: '2rem 0' }} />
      <h2>Contact Us</h2>
      <p>Phone: <a href="tel:0986821626">0986-821-626</a></p>
      <p>LINE: @QPD888</p>
      <p>Address: Taipei Da-An District, Ji-Nan Rd Sec3, 62-1</p>
    </main>
  );
}
