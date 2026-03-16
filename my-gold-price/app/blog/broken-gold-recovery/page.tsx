import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '斷掉的黃金｜黃金斷了怎麼辦｜巧品珠寶',
  description: '斷裂、損毀的黃金一樣可以回收！巧品珠寶按實際重量計價，不扣耗損，當場現金付款。台北大安區免費估價，電話 0986-821-626。',
  keywords: '斷掉的黃金,黃金斷了,飾品回收',
  alternates: {
    canonical: 'https://www.gold-tw.com/blog/broken-gold-recovery',
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
            "headline": "斷掉的黃金｜黃金斷了怎麼辦",
            "author": {
              "@type": "Organization",
              "name": "巧品珠寶"
            },
            "publisher": {
              "@type": "Organization",
              "name": "巧品珠寶"
            },
            "datePublished": "2026-03-12",
              "dateModified": "2026-03-16T00:00:00+08:00",
            "description": "斷掉的黃金首飾也能回收！提供專業估價服務"
          })
        }}
      />
      <h1>斷掉的黃金回收</h1>
      <h2>結論：斷掉的黃金一樣有價值！</h2>
      <p>斷掉的項鍊、戒指、耳環都可以回收，不影響價格。</p>
      <h2>回收項目</h2>
      <ul>
        <li>斷掉的項鍊</li>
        <li>缺角的戒指</li>
        <li>損壞的飾品</li>
      </ul>
      <div style={{ margin: '2rem 0', padding: '1.5rem', background: '#FEF9E7', borderRadius: '8px', borderLeft: '4px solid #B8860B' }}>
        <strong>相關文章：</strong>
        <ul style={{ marginTop: '0.5rem', paddingLeft: '1.5rem' }}>
        <li><a href="/blog/old-gold-recovery" style={{ color: "#B8860B" }}>舊金回收指南</a></li>
        <li><a href="/blog/gold-jewelry-recovery" style={{ color: "#B8860B" }}>黃金首飾回收</a></li>
        <li><a href="/blog/gold-appraise" style={{ color: "#B8860B" }}>黃金免費估價</a></li>
        <li><a href="/blog/gold-recycling-process" style={{ color: "#B8860B" }}>黃金回收流程</a></li>
        </ul>
      </div>

      <hr style={{ margin: '2rem 0' }} />
      <p>📞 電話：0986-821-626</p>
      <p>💬 LINE：@QPD888</p>
      <p>🌐 官網：https://www.gold-tw.com/</p>
    </main>
  );
}
