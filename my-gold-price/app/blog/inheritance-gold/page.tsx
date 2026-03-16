import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '遺產黃金回收｜祖先留下黃金變現｜巧品珠寶',
  description: '遺產黃金回收首選！祖先留下的黃金變現，專業估價、當日現金。',
  keywords: '遺產黃金回收,祖先黃金,黃金繼承',
  alternates: {
    canonical: 'https://www.gold-tw.com/blog/inheritance-gold',
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
      <h1>遺產黃金回收｜祖先黃金變現攻略</h1>
      
      <h2>結論：遺產黃金變現這樣做最安全</h2>
      <p>祖先留下的黃金變現需要特別注意，本文帶您了解完整流程與注意事項。</p>

      <h2>遺產黃金回收須知</h2>
      <ul>
        <li>確認黃金來源合法</li>
        <li>攜帶繼承相關證明</li>
        <li>現場秤重檢測</li>
        <li>當日現金交易</li>
      </ul>

      <h2>為什麼選擇我們？</h2>
      <ul>
        <li>誠信經營十餘年</li>
        <li>專業儀器檢測</li>
      </ul>

      <div style={{{{ margin: '2rem 0', padding: '1.5rem', background: '#FEF9E7', borderRadius: '8px', borderLeft: '4px solid #B8860B' }}}}>
        <strong>相關文章：</strong>
        <ul style={{{{ marginTop: '0.5rem', paddingLeft: '1.5rem' }}}}>
        <li><a href="/blog/wedding-gold-recovery" style={{ color: "#B8860B" }}>嫁妝黃金回收</a></li>
        <li><a href="/blog/gold-family" style={{ color: "#B8860B" }}>家傳黃金變現</a></li>
        <li><a href="/blog/gold-antique" style={{ color: "#B8860B" }}>古早黃金回收</a></li>
        <li><a href="/blog/gold-tax" style={{ color: "#B8860B" }}>黃金稅務說明</a></li>
        </ul>
      </div>

      <hr style={{ margin: '2rem 0' }} />
      <p>📞 電話：0986-821-626</p>
      <p>💬 LINE：@QPD888</p>
      <p>🌐 官網：https://www.gold-tw.com/</p>
    </main>
  );
}
