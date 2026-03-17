import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'K金回收｜18K/14K回收價格一篇搞懂',
  description: 'K金回收完整指南！18K/14K/10K各成色計價方式，台北巧品珠寶公開透明報價，不扣耗損，當場現金，電話 0986-821-626。',
  keywords: 'K金回收,18K回收,14K回收,珠寶回收',
  alternates: {
    canonical: 'https://www.gold-tw.com/blog/karat-gold-recovery',
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"首頁","item":"https://www.gold-tw.com"},{"@type":"ListItem","position":2,"name":"知識專欄","item":"https://www.gold-tw.com/blog"},{"@type":"ListItem","position":3,"name":"K金回收｜18K/14K回收價格一篇搞懂"}]})
        }}
      />
      <h1>K金回收價格一篇搞懂</h1>

      <h2>什麼是K金？</h2>
      <p>K金是指黃金與其他金屬的合金，用「K」表示純度：</p>
      <ul>
        <li><strong>18K</strong> = 75% 黃金 + 25% 其他金屬</li>
        <li><strong>14K</strong> = 58.5% 黃金 + 41.5% 其他金屬</li>
      </ul>

      <h2>K金回收計算方式</h2>
      <p><strong>回收價格 = 黃金牌價 × 純度 × 重量</strong></p>

      <h2>為什麼要選專業回收？</h2>
      <ul>
        <li>專業儀器檢測精準</li>
        <li>價格透明不扣秤</li>
        <li>當日付款快速</li>
      </ul>

      <div style={{ margin: '2rem 0', padding: '1.5rem', background: '#FEF9E7', borderRadius: '8px', borderLeft: '4px solid #B8860B' }}>
        <strong>相關文章：</strong>
        <ul style={{ marginTop: '0.5rem', paddingLeft: '1.5rem' }}>
        <li><a href="/blog/gold-9999-recovery" style={{ color: "#B8860B" }}>9999純金回收</a></li>
        <li><a href="/blog/karat-gold-guide" style={{ color: "#B8860B" }}>K金完整指南</a></li>
        <li><a href="/blog/gold-purity" style={{ color: "#B8860B" }}>黃金純度說明</a></li>
        <li><a href="/blog/gold-identification" style={{ color: "#B8860B" }}>黃金鑑定方法</a></li>
        </ul>
      </div>

      <hr style={{ margin: '2rem 0' }} />
      <p>📞 電話：0986-821-626</p>
      <p>💬 LINE：@QPD888</p>
      <p>🌐 官網：https://www.gold-tw.com/</p>
    </main>
  );
}
