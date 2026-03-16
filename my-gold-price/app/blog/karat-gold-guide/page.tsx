import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'K金回收完全攻略｜18K/14K多少錢｜巧品珠寶',
  description: 'K金回收必看！18K/14K/10K回收行情分析，教您了解K金回收價格計算方式。',
  keywords: 'K金回收,18K回收,14K回收,K金價格',
  alternates: {
    canonical: 'https://www.gold-tw.com/blog/karat-gold-guide',
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
      <h1>K金回收完全攻略｜18K/14K價格分析</h1>
      
      <h2>結論：K金回收這樣卖最划算</h2>
      <p>K金的回收價格根據純度計算，不同K數對應不同回收比例，本文完整說明。</p>

      <h2>K金回收行情表</h2>
      <ul>
        <li>18K：75%純度</li>
        <li>14K：58.3%純度</li>
        <li>10K：41.7%純度</li>
      </ul>

      <h2>K金回收注意事項</h2>
      <ul>
        <li>先確認K數與重量</li>
        <li>現場儀器檢測</li>
      </ul>

      <div style={{{{ margin: '2rem 0', padding: '1.5rem', background: '#FEF9E7', borderRadius: '8px', borderLeft: '4px solid #B8860B' }}}}>
        <strong>相關文章：</strong>
        <ul style={{{{ marginTop: '0.5rem', paddingLeft: '1.5rem' }}}}>
        <li><a href="/blog/karat-gold-recovery" style={{ color: "#B8860B" }}>K金回收指南</a></li>
        <li><a href="/blog/gold-purity" style={{ color: "#B8860B" }}>黃金純度說明</a></li>
        <li><a href="/blog/gold-identification" style={{ color: "#B8860B" }}>黃金鑑定方法</a></li>
        <li><a href="/blog/gold-vs-k-gold-vs-platinum" style={{ color: "#B8860B" }}>黃金vs K金vs白金</a></li>
        </ul>
      </div>

      <hr style={{ margin: '2rem 0' }} />
      <p>📞 電話：0986-821-626</p>
      <p>💬 LINE：@QPD888</p>
      <p>🌐 官網：https://www.gold-tw.com/</p>
    </main>
  );
}
