import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '黃金純度怎麼看？K數、9999完整說明｜巧品珠寶',
  description: '黃金純度完整說明！9999、999、916、18K、14K各成色差異、辨識方式與回收價格對照表，一篇搞懂黃金純度計算。',
  keywords: '黃金純度,K金純度,9999黃金,916黃金,18K黃金',
  alternates: {
    canonical: 'https://www.gold-tw.com/blog/gold-purity',
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
            "headline": "黃金純度怎麼看？K數、9999完整說明｜巧品珠寶",
            "description": "黃金純度完整說明！9999、999、916、18K、14K差異解析，如何識別黃金純度印記。",
            "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.gold-tw.com/blog/gold-purity" },
            "author": { "@type": "Organization", "name": "巧品珠寶" },
            "publisher": { "@type": "Organization", "name": "巧品珠寶" },
            "image": { "@type": "ImageObject", "url": "https://wsrv.nl/?url=https://drive.google.com/uc?id=1ASz1v5ZBQ-WV572r-BC4gZRuraywgKKv&w=1200&output=webp&q=80" },
            "datePublished": "2026-03-15T00:00:00+08:00",
            "dateModified": "2026-03-16T00:00:00+08:00"
          })
        }}
      />
      <h1>黃金純度怎麼看？K數完整說明</h1>
      <h2>Conclusion: Know your purity markings to avoid being shortchanged</h2>
      <p>Gold purity directly affects recovery price. Understanding purity markings is essential knowledge for every gold holder.</p>
      <h2>Common gold purity reference</h2>
      <ul>
        <li>9999 / 999.9 = 24K = 99.99% pure (gold bars, coins)</li>
        <li>916 = 22K = 91.6% (traditional Taiwanese jewelry)</li>
        <li>750 / 18K = 75% (modern jewelry mainstream)</li>
        <li>585 / 14K = 58.5% (common in Western jewelry)</li>
        <li>375 / 9K = 37.5% (lower purity pieces)</li>
      </ul>
      <h2>FAQ</h2>
      <h3>Q: I can't find any markings - how do I know the purity?</h3>
      <p>A: Bring it to us for a professional instrument test - takes just a few minutes.</p>
      <h3>Q: Does higher purity mean higher recovery price?</h3>
      <p>A: Yes, 9999 pure gold commands the highest unit price; K-gold is calculated proportionally.</p>
      <div style={{ margin: '2rem 0', padding: '1.5rem', background: '#FEF9E7', borderRadius: '8px', borderLeft: '4px solid #B8860B' }}>
        <strong>相關文章：</strong>
        <ul style={{ marginTop: '0.5rem', paddingLeft: '1.5rem' }}>
        <li><a href="/blog/gold-identification" style={{ color: "#B8860B" }}>黃金鑑定方法</a></li>
        <li><a href="/blog/karat-gold-guide" style={{ color: "#B8860B" }}>K金完整指南</a></li>
        <li><a href="/blog/gold-9999-recovery" style={{ color: "#B8860B" }}>9999純金回收</a></li>
        <li><a href="/blog/gold-weight" style={{ color: "#B8860B" }}>黃金重量換算</a></li>
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
