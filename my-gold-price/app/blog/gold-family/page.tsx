import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '黃金傳家｜傳家黃金保存與變現｜巧品珠寶',
  description: '黃金傳家意義深遠！了解傳家寶金飾的保存方式與變現時機，台北巧品珠寶提供專業諮詢。',
  keywords: '黃金傳家,傳家寶黃金,金飾傳承',
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
            "headline": "黃金傳家｜傳家黃金保存與變現｜巧品珠寶",
            "description": "黃金傳家意義深遠！了解傳家寶金飾的保存方式與變現時機，台北巧品珠寶提供專業諮詢。",
            "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.gold-tw.com/blog/gold-family" },
            "author": { "@type": "Organization", "name": "巧品珠寶" },
            "publisher": { "@type": "Organization", "name": "巧品珠寶" },
            "image": { "@type": "ImageObject", "url": "https://www.gold-tw.com/images/og-image.jpg" },
            "datePublished": "2026-03-15T00:00:00+08:00",
            "dateModified": "2026-03-16T00:00:00+08:00"
          })
        }}
      />
      <h1>黃金傳家｜傳承與變現的智慧</h1>
      <h2>Conclusion: Heirloom gold is both sentimental and financial value</h2>
      <p>Gold jewelry passed down through generations carries precious family memories. When life requires funds or pieces go unworn, selling is a practical choice. We respect every customer's story.</p>
      <h2>Storage tips for heirloom gold</h2>
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
      <hr style={{ margin: '2rem 0' }} />
      <h2>Contact Us</h2>
      <p>Phone: <a href="tel:0986821626">0986-821-626</a></p>
      <p>LINE: @QPD888</p>
      <p>Address: Taipei Da-An District, Ji-Nan Rd Sec3, 62-1</p>
    </main>
  );
}
