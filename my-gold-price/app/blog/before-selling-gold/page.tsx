import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '賣黃金前要注意什麼｜完整攻略｜巧品珠寶',
  description: '賣黃金前必看！避免被扣耗損、秤重造假的完整指南。台北巧品珠寶10年經驗，老闆親自鑑定，免費估價，電話 0986-821-626。',
  keywords: '賣黃金前,黃金準備,賣黃金注意事項',
  alternates: {
    canonical: 'https://www.gold-tw.com/blog/before-selling-gold',
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
            "headline": "賣黃金前要注意什麼｜完整攻略",
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
            "description": "賣黃金前必看！完整準備事項與注意事項"
          })
        }}
      />
      <h1>賣黃金前要注意什麼｜完整攻略</h1>
      <h2>結論：做好這些準備，賣黃金不吃虧！</h2>
      <h2>賣前準備</h2>
      <ul>
        <li>查當日金價</li>
        <li>準備證件</li>
        <li>了解重量</li>
        <li>選擇店家</li>
      </ul>
      <div style={{{{ margin: '2rem 0', padding: '1.5rem', background: '#FEF9E7', borderRadius: '8px', borderLeft: '4px solid #B8860B' }}}}>
        <strong>相關文章：</strong>
        <ul style={{{{ marginTop: '0.5rem', paddingLeft: '1.5rem' }}}}>
        <li><a href="/blog/gold-should-know" style={{ color: "#B8860B" }}>賣黃金必知事項</a></li>
        <li><a href="/blog/gold-id-requirement" style={{ color: "#B8860B" }}>賣黃金要帶什麼證件</a></li>
        <li><a href="/blog/what-to-bring-when-selling-gold-2026" style={{ color: "#B8860B" }}>賣黃金要帶什麼</a></li>
        <li><a href="/blog/gold-scam-prevent" style={{ color: "#B8860B" }}>黃金詐騙防範</a></li>
        </ul>
      </div>

      <hr style={{ margin: '2rem 0' }} />
      <p>📞 電話：0986-821-626</p>
      <p>💬 LINE：@QPD888</p>
      <p>🌐 官網：https://www.gold-tw.com/</p>
    </main>
  );
}
