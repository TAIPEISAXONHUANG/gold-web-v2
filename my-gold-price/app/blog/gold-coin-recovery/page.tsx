import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '金幣回收｜紀念金幣變現｜巧品珠寶',
  description: '金幣、紀念幣高價回收！各國金幣、台灣銀行金幣均可，按含金量計價。台北巧品珠寶免費估價，電話 0986-821-626。',
  keywords: '金幣回收,紀念金幣,投資金幣',
  alternates: {
    canonical: 'https://www.gold-tw.com/blog/gold-coin-recovery',
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
          __html: JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"首頁","item":"https://www.gold-tw.com"},{"@type":"ListItem","position":2,"name":"知識專欄","item":"https://www.gold-tw.com/blog"},{"@type":"ListItem","position":3,"name":"金幣回收｜紀念金幣變現｜巧品珠寶"}]})
        }}
      />
      <h1>金幣回收｜紀念金幣變現</h1>

      <div style={{background:'#fffbeb', borderLeft:'4px solid #f59e0b', padding:'16px', margin:'16px 0', borderRadius:'8px'}}>
        <strong>📌 重點摘要：</strong> 金幣回收看純度、重量和品牌。投資型金幣按金價計算，紀念幣可能有額外收藏溢價。巧品珠寶免費鑑定估價。
      </div>
      <h2>結論：金幣收藏也能變現！</h2>
      <p>各種紀念金幣、投資金幣都可以回收。</p>
      <h2>回收項目</h2>
      <ul>
        <li>紀念金幣</li>
        <li>投資金幣</li>
        <li>套幣</li>
      </ul>
      <div style={{ margin: '2rem 0', padding: '1.5rem', background: '#FEF9E7', borderRadius: '8px', borderLeft: '4px solid #B8860B' }}>
        <strong>延伸閱讀：</strong>
        <ul style={{ marginTop: '0.5rem', paddingLeft: '1.5rem' }}>
          <li><a href="/blog/gold-necklace-recovery" style={{ color: '#B8860B' }}>黃金項鍊回收</a></li>
          <li><a href="/blog/gold-ring-recovery" style={{ color: '#B8860B' }}>黃金戒指回收</a></li>
          <li><a href="/blog/gold-bracelet-recovery" style={{ color: '#B8860B' }}>黃金手鐲回收</a></li>
          <li><a href="/blog/gold-earring-recovery" style={{ color: '#B8860B' }}>黃金耳環回收</a></li>
        </ul>
      </div>

      <hr style={{ margin: '2rem 0' }} />
      <p>📞 電話：0986-821-626</p>
      <p>💬 LINE：@QPD888</p>
      <p>🌐 官網：https://www.gold-tw.com/</p>
    </main>
  );
}
