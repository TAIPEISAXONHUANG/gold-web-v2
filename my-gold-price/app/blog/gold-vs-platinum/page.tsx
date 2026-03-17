import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '黃金、白金、K金有何不同？一篇搞懂',
  description: '黃金 vs 白金：哪個更值得投資？比較兩者的價格走勢、稀有度、工業需求，2026年行情分析，讓你做出更聰明的投資決策。',
  keywords: '黃金vs白金,K金是什麼,珠寶材質比較',
  alternates: {
    canonical: 'https://www.gold-tw.com/blog/gold-vs-platinum',
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
            "author": { "@type": "Organization", "name": "巧品珠寶", "url": "https://www.gold-tw.com", "@id": "https://www.gold-tw.com/#business" },
            "publisher": { "@type": "Organization", "name": "巧品珠寶", "url": "https://www.gold-tw.com", "logo": { "@type": "ImageObject", "url": "https://wsrv.nl/?url=https://drive.google.com/uc?id=16UrCpYWRkyEkvL7M73o0DIAvkKWtF0Lp&w=200&output=webp" } },
            "datePublished": "2026-03-12",
              "dateModified": "2026-03-16T00:00:00+08:00",
            "description": "黃金回收專業知識"
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"首頁","item":"https://www.gold-tw.com"},{"@type":"ListItem","position":2,"name":"知識專欄","item":"https://www.gold-tw.com/blog"},{"@type":"ListItem","position":3,"name":"黃金、白金、K金有何不同？一篇搞懂"}]})
        }}
      />
      <h1>黃金、白金、K金差異比較</h1>

      <table style={{ width: '100%', borderCollapse: 'collapse', margin: '1rem 0' }}>
        <thead>
          <tr style={{ background: '#f5f5f5' }}>
            <th style={{ padding: '10px', border: '1px solid #ddd' }}>材質</th>
            <th style={{ padding: '10px', border: '1px solid #ddd' }}>黃金含量</th>
            <th style={{ padding: '10px', border: '1px solid #ddd' }}>特性</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ padding: '10px', border: '1px solid #ddd' }}>黃金</td>
            <td style={{ padding: '10px', border: '1px solid #ddd' }}>99.9%</td>
            <td style={{ padding: '10px', border: '1px solid #ddd' }}>純金本色</td>
          </tr>
          <tr>
            <td style={{ padding: '10px', border: '1px solid #ddd' }}>K金</td>
            <td style={{ padding: '10px', border: '1px solid #ddd' }}>75%</td>
            <td style={{ padding: '10px', border: '1px solid #ddd' }}>合金，硬度高</td>
          </tr>
          <tr>
            <td style={{ padding: '10px', border: '1px solid #ddd' }}>白金</td>
            <td style={{ padding: '10px', border: '1px solid #ddd' }}>85-90%</td>
            <td style={{ padding: '10px', border: '1px solid #ddd' }}>銀白色澤</td>
          </tr>
        </tbody>
      </table>

      <div style={{ margin: '2rem 0', padding: '1.5rem', background: '#FEF9E7', borderRadius: '8px', borderLeft: '4px solid #B8860B' }}>
        <strong>相關文章：</strong>
        <ul style={{ marginTop: '0.5rem', paddingLeft: '1.5rem' }}>
        <li><a href="/blog/gold-vs-k-gold-vs-platinum" style={{ color: "#B8860B" }}>黃金vs K金vs白金</a></li>
        <li><a href="/blog/platinum-recovery" style={{ color: "#B8860B" }}>白金回收指南</a></li>
        <li><a href="/blog/gold-vs-platinum-investment" style={{ color: "#B8860B" }}>黃金vs白金投資</a></li>
        <li><a href="/blog/gold-price-2026" style={{ color: "#B8860B" }}>2026黃金行情</a></li>
        </ul>
      </div>

      <hr style={{ margin: '2rem 0' }} />
      <p>📞 電話：0986-821-626</p>
      <p>💬 LINE：@QPD888</p>
      <p>🌐 官網：https://www.gold-tw.com/</p>
    </main>
  );
}
