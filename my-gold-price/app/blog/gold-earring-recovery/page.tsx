import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '黃金耳環回收｜金耳環高價變現｜巧品珠寶',
  description: '黃金耳環回收推薦！台北高價收購各式金耳環，純度鑑定透明，當場現金付款。',
  keywords: '黃金耳環回收,金耳環變現,耳環回收台北',
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
            "headline": "黃金耳環回收｜金耳環高價變現｜巧品珠寶",
            "description": "黃金耳環回收推薦！台北高價收購各式金耳環，純度鑑定透明，當場現金付款。",
            "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.gold-tw.com/blog/gold-earring-recovery" },
            "author": { "@type": "Organization", "name": "巧品珠寶" },
            "publisher": { "@type": "Organization", "name": "巧品珠寶" },
            "image": { "@type": "ImageObject", "url": "https://www.gold-tw.com/images/og-image.jpg" },
            "datePublished": "2026-03-15T00:00:00+08:00",
            "dateModified": "2026-03-16T00:00:00+08:00"
          })
        }}
      />
      <h1>黃金耳環回收｜金耳環高價變現</h1>
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
      <hr style={{ margin: '2rem 0' }} />
      <h2>Contact Us</h2>
      <p>Phone: <a href="tel:0986821626">0986-821-626</a></p>
      <p>LINE: @QPD888</p>
      <p>Address: Taipei Da-An District, Ji-Nan Rd Sec3, 62-1</p>
    </main>
  );
}
