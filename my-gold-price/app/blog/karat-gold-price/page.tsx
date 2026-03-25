import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'K金回收價格怎麼算？2026年K金回收行情｜巧品珠寶',
  description: 'K金回收行情2026！18K/14K/10K每台錢值多少？完整計算方式、當日行情查詢，巧品珠寶按市場金價報價，電話 0986-821-626。',
  keywords: 'K金回收價格,K金回收計算,18K回收多少錢,14K回收',
  alternates: {
    canonical: 'https://www.gold-tw.com/blog/karat-gold-price',
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
            "@type": "BlogPosting",
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
          __html: JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"首頁","item":"https://www.gold-tw.com"},{"@type":"ListItem","position":2,"name":"知識專欄","item":"https://www.gold-tw.com/blog"},{"@type":"ListItem","position":3,"name":"K金回收價格怎麼算？2026年K金回收行情｜巧品珠寶"}]})
        }}
      />
      <h1>K金回收價格怎麼算？2026年最新行情</h1>

      <div style={{background:'#fffbeb', borderLeft:'4px solid #f59e0b', padding:'16px', margin:'16px 0', borderRadius:'8px'}}>
        <strong>📌 重點摘要：</strong> K金回收價計算：當日黃金牌價 × K金含金比例 × 重量。例如18K：牌價×75%×重量。巧品珠寶各種K數都回收。
      </div>
      
      <h2>K金回收計算公式</h2>
      <p><strong>K金回收價格 = 當日純金牌價 × 重量 × K金純度</strong></p>
      
      <h2>K金純度對照表</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <tr style={{ background: '#f5f5f5' }}>
          <th style={{ padding: '10px', border: '1px solid #ddd' }}>K數</th>
          <th style={{ padding: '10px', border: '1px solid #ddd' }}>純度</th>
        </tr>
        <tr>
          <td style={{ padding: '10px', border: '1px solid #ddd' }}>18K</td>
          <td style={{ padding: '10px', border: '1px solid #ddd' }}>75%</td>
        </tr>
        <tr>
          <td style={{ padding: '10px', border: '1px solid #ddd' }}>14K</td>
          <td style={{ padding: '10px', border: '1px solid #ddd' }}>58.3%</td>
        </tr>
      </table>

      <div style={{ margin: '2rem 0', padding: '1.5rem', background: '#FEF9E7', borderRadius: '8px', borderLeft: '4px solid #B8860B' }}>
        <strong>延伸閱讀：</strong>
        <ul style={{ marginTop: '0.5rem', paddingLeft: '1.5rem' }}>
          <li><a href="/blog/karat-gold-guide" style={{ color: '#B8860B' }}>K金回收完整攻略</a></li>
          <li><a href="/blog/karat-gold-recovery" style={{ color: '#B8860B' }}>K金回收方式</a></li>
          <li><a href="/blog/karat-gold-report" style={{ color: '#B8860B' }}>K金完整報告</a></li>
          <li><a href="/blog/k-gold-vs-gold" style={{ color: '#B8860B' }}>K金與黃金比較</a></li>
        </ul>
      </div>

      <hr style={{ margin: '2rem 0' }} />
      <p>📞 電話：0986-821-626</p>
      <p>💬 LINE：@QPD888</p>
      <p>🌐 官網：https://www.gold-tw.com/</p>
    </main>
  );
}
