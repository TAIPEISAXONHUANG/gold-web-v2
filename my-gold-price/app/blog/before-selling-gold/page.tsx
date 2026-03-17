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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"首頁","item":"https://www.gold-tw.com"},{"@type":"ListItem","position":2,"name":"知識專欄","item":"https://www.gold-tw.com/blog"},{"@type":"ListItem","position":3,"name":"賣黃金前要注意什麼｜完整攻略｜巧品珠寶"}]})
        }}
      />
      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({"@context":"https://schema.org","@type":"HowTo","name":"賣黃金前的準備工作","description":"出售黃金前應做好的4項準備，確保拿到最好的價格。","step":[{"@type":"HowToStep","position":1,"name":"確認當日金價行情","text":"上網查詢台灣銀行牌價或各家回收店報價，了解今日黃金行情。"},{"@type":"HowToStep","position":2,"name":"整理要出售的金飾","text":"把所有要賣的黃金集中整理，不同純度（24K、18K）分開放。"},{"@type":"HowToStep","position":3,"name":"準備身份證件","text":"攜帶身份證正本，未滿18歲需法定代理人陪同。"},{"@type":"HowToStep","position":4,"name":"多家比價","text":"至少比較3家回收店的報價，注意是否扣耗損、扣秤，選擇最透明的店家。"}]})
        }}
      />
      <h1>賣黃金前要注意什麼｜完整攻略</h1>

      <div style={{background:'#fffbeb', borderLeft:'4px solid #f59e0b', padding:'16px', margin:'16px 0', borderRadius:'8px'}}>
        <strong>📌 重點摘要：</strong> 賣黃金前務必準備身份證正本、確認金飾純度與重量，並比較多家回收報價。巧品珠寶提供免費估價，不強迫交易。
      </div>
      <h2>結論：做好這些準備，賣黃金不吃虧！</h2>
      <h2>賣前準備</h2>
      <ul>
        <li>查當日金價</li>
        <li>準備證件</li>
        <li>了解重量</li>
        <li>選擇店家</li>
      </ul>
      <div style={{ margin: '2rem 0', padding: '1.5rem', background: '#FEF9E7', borderRadius: '8px', borderLeft: '4px solid #B8860B' }}>
        <strong>相關文章：</strong>
        <ul style={{ marginTop: '0.5rem', paddingLeft: '1.5rem' }}>
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
