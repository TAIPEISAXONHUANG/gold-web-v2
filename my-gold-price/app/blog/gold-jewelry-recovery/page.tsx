import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '金飾回收｜黃金首飾變現｜巧品珠寶',
  description: '各式黃金首飾高價回收！戒指、項鍊、手鍊、耳環、吊墜均可，按實際重量計價。台北巧品珠寶免費估價，電話 0986-821-626。',
  keywords: '金飾回收,黃金首飾,飾品變現',
  alternates: {
    canonical: 'https://www.gold-tw.com/blog/gold-jewelry-recovery',
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
            "author": { "@type": "Organization", "name": "巧品珠寶" },
            "publisher": { "@type": "Organization", "name": "巧品珠寶" },
            "datePublished": "2026-03-12",
              "dateModified": "2026-03-16T00:00:00+08:00",
            "description": "黃金回收專業知識"
          })
        }}
      />
      <h1>金飾回收｜黃金首飾變現</h1>
      <h2>結論：金飾回收選對店家很重要</h2>
      <p>各種黃金首飾、戒指、項鍊、手鐲皆可回收。</p>
      <h2>回收項目</h2>
      <ul>
        <li>結婚金飾</li>
        <li>情人節禮物</li>
        <li>紀念飾品</li>
      </ul>
      <div style={{ margin: '2rem 0', padding: '1.5rem', background: '#FEF9E7', borderRadius: '8px', borderLeft: '4px solid #B8860B' }}>
        <strong>相關文章：</strong>
        <ul style={{ marginTop: '0.5rem', paddingLeft: '1.5rem' }}>
        <li><a href="/blog/gold-ring-recovery" style={{ color: "#B8860B" }}>黃金戒指回收</a></li>
        <li><a href="/blog/gold-necklace-recovery" style={{ color: "#B8860B" }}>黃金項鍊回收</a></li>
        <li><a href="/blog/diamond-jewelry" style={{ color: "#B8860B" }}>鑽石珠寶收購</a></li>
        <li><a href="/blog/gold-appraise" style={{ color: "#B8860B" }}>黃金免費估價</a></li>
        </ul>
      </div>

      <hr style={{ margin: '2rem 0' }} />
      <p>📞 電話：0986-821-626</p>
      <p>💬 LINE：@QPD888</p>
      <p>🌐 官網：https://www.gold-tw.com/</p>
    </main>
  );
}
