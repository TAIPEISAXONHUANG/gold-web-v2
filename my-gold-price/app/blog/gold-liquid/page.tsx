import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '黃金流當｜黃金典當借款說明｜巧品珠寶',
  description: '黃金流當、典當借款說明！了解黃金流當與直接回收的差異，台北巧品珠寶提供高價收購服務。',
  keywords: '黃金流當,黃金典當,黃金借款,黃金抵押',
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
            "author": { "@type": "Organization", "name": "巧品珠寶" },
            "publisher": { "@type": "Organization", "name": "巧品珠寶" },
            "image": { "@type": "ImageObject", "url": "https://www.gold-tw.com/images/og-image.jpg" },
            "datePublished": "2026-03-15",
            "dateModified": "2026-03-16"
          })
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
      <hr style={{ margin: '2rem 0' }} />
      <h2>Contact Us</h2>
      <p>Phone: <a href="tel:0986821626">0986-821-626</a></p>
      <p>LINE: @QPD888</p>
      <p>Address: Taipei Da-An District, Ji-Nan Rd Sec3, 62-1</p>
    </main>
  );
}
