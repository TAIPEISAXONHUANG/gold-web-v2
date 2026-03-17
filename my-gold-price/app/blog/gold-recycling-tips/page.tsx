import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '黃金回收注意事項｜賣黃金不被坑｜巧品珠寶',
  description: '賣黃金不吃虧！黃金回收實用技巧大全，選對時機、選對店家，讓你每次賣黃金都能拿到最划算的價格。',
  keywords: '黃金回收注意,賣黃金不被坑,黃金回收陷阱',
  alternates: {
    canonical: 'https://www.gold-tw.com/blog/gold-recycling-tips',
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
          __html: JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"首頁","item":"https://www.gold-tw.com"},{"@type":"ListItem","position":2,"name":"知識專欄","item":"https://www.gold-tw.com/blog"},{"@type":"ListItem","position":3,"name":"黃金回收注意事項｜賣黃金不被坑｜巧品珠寶"}]})
        }}
      />
      <h1>黃金回收注意事項｜賣黃金必看攻略</h1>

      <div style={{background:'#fffbeb', borderLeft:'4px solid #f59e0b', padding:'16px', margin:'16px 0', borderRadius:'8px'}}>
        <strong>📌 重點摘要：</strong> 賣黃金小技巧：趁金價高點出售、多家比價、選擇不扣耗損的店家、確認秤重單位（台錢vs公克）、保留交易收據。
      </div>
      
      <h2>結論：記住這幾點，賣黃金不吃虧</h2>
      <p>市場上有許多回收話術，本文帶您了解常見陷阱與應對方法。</p>

      <h2>黃金回收常見話術</h2>
      <ul>
        <li>「扣耗損」- 其實不用</li>
        <li>「扣秤」- 正常的秤應該精準</li>
        <li>「行情不好」- 實際行情可查詢</li>
      </ul>

      <h2>自保方法</h2>
      <ul>
        <li>先查當日金價</li>
        <li>選擇誠信店家</li>
        <li>現場秤重確認</li>
        <li>拒絕不合理扣款</li>
      </ul>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"賣黃金可以議價嗎？","acceptedAnswer":{"@type":"Answer","text":"正規店家以當日牌價計算，通常不議價。但大量交易（10兩以上）部分店家可能給優惠價。"}},{"@type":"Question","name":"要一次全部賣掉嗎？","acceptedAnswer":{"@type":"Answer","text":"不用。可以分批出售，也可以只賣部分。沒有最低重量限制。"}},{"@type":"Question","name":"賣完後悔可以買回嗎？","acceptedAnswer":{"@type":"Answer","text":"已完成的交易無法逆轉。如果猶豫，建議先只詢價不交易，考慮清楚再決定。"}}]})
        }}
      />
      <section style={{marginTop:'2.5rem', padding:'2rem', background:'#f9fafb', borderRadius:'12px', border:'1px solid #e5e7eb'}}>
        <h2 style={{fontSize:'1.3rem', fontWeight:'bold', color:'#1f2937', marginTop:0, marginBottom:'1rem'}}>❓ 常見問題</h2>
        <div style={{marginBottom:'1rem', background:'white', padding:'1rem', borderRadius:'8px', border:'1px solid #e5e7eb'}}>
          <h3 style={{margin:'0 0 0.5rem 0', fontSize:'1rem', color:'#1f2937'}}>Q: 賣黃金可以議價嗎？</h3>
          <p style={{margin:0, color:'#4b5563', lineHeight:'1.6'}}>A: 正規店家以當日牌價計算，通常不議價。但大量交易（10兩以上）部分店家可能給優惠價。</p>
        </div>
        <div style={{marginBottom:'1rem', background:'white', padding:'1rem', borderRadius:'8px', border:'1px solid #e5e7eb'}}>
          <h3 style={{margin:'0 0 0.5rem 0', fontSize:'1rem', color:'#1f2937'}}>Q: 要一次全部賣掉嗎？</h3>
          <p style={{margin:0, color:'#4b5563', lineHeight:'1.6'}}>A: 不用。可以分批出售，也可以只賣部分。沒有最低重量限制。</p>
        </div>
        <div style={{marginBottom:'1rem', background:'white', padding:'1rem', borderRadius:'8px', border:'1px solid #e5e7eb'}}>
          <h3 style={{margin:'0 0 0.5rem 0', fontSize:'1rem', color:'#1f2937'}}>Q: 賣完後悔可以買回嗎？</h3>
          <p style={{margin:0, color:'#4b5563', lineHeight:'1.6'}}>A: 已完成的交易無法逆轉。如果猶豫，建議先只詢價不交易，考慮清楚再決定。</p>
        </div>
      </section>
      <div style={{ margin: '2rem 0', padding: '1.5rem', background: '#FEF9E7', borderRadius: '8px', borderLeft: '4px solid #B8860B' }}>
        <strong>相關文章：</strong>
        <ul style={{ marginTop: '0.5rem', paddingLeft: '1.5rem' }}>
        <li><a href="/blog/sell-gold-tips" style={{ color: "#B8860B" }}>賣黃金技巧</a></li>
        <li><a href="/blog/why-some-get-better-gold-price" style={{ color: "#B8860B" }}>為什麼有人拿到更高價</a></li>
        <li><a href="/blog/gold-appraise" style={{ color: "#B8860B" }}>黃金免費估價</a></li>
        <li><a href="/blog/gold-shop-recommend" style={{ color: "#B8860B" }}>台北黃金回收推薦</a></li>
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
