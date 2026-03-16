import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '黃金重量計算機｜線上黃金秤重｜巧品珠寶',
  description: '黃金重量計算機｜線上黃金秤重估價。',
  keywords: '黃金計算機,黃金秤重,黃金重量計算',
  alternates: {
    canonical: 'https://www.gold-tw.com/blog/gold-calculator',
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
            "headline": "黃金重量計算機｜線上黃金秤重",
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
            "description": "黃金重量計算機，線上估價服務"
          })
        }}
      />
      <h1>黃金重量計算機｜線上黃金秤重</h1>
      
      <h2>結論：黃金重量這樣算最準確</h2>
      <p>黃金重量計算很簡單，主要以錢、兩、克為單位計算。</p>

      <h2>黃金重量單位換算</h2>
      <ul>
        <li>1兩 = 37.5克</li>
        <li>1錢 = 3.75克</li>
        <li>1分 = 0.375克</li>
      </ul>

      <div style={{{{ margin: '2rem 0', padding: '1.5rem', background: '#FEF9E7', borderRadius: '8px', borderLeft: '4px solid #B8860B' }}}}>
        <strong>相關文章：</strong>
        <ul style={{{{ marginTop: '0.5rem', paddingLeft: '1.5rem' }}}}>
        <li><a href="/blog/gold-weight" style={{ color: "#B8860B" }}>黃金重量換算</a></li>
        <li><a href="/blog/gold-purity" style={{ color: "#B8860B" }}>黃金純度說明</a></li>
        <li><a href="/blog/gold-appraise" style={{ color: "#B8860B" }}>黃金免費估價</a></li>
        <li><a href="/blog/gold-price-2026" style={{ color: "#B8860B" }}>2026黃金行情</a></li>
        </ul>
      </div>

      <hr style={{ margin: '2rem 0' }} />

      <h2>立即聯繫</h2>
      <p>📞 電話：0986-821-626</p>
      <p>💬 LINE：@QPD888</p>
      <p>🌐 官網：https://www.gold-tw.com/</p>
    </main>
  );
}
