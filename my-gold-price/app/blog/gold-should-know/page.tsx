import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '黃金回收必知｜新手必看｜巧品珠寶',
  description: '賣黃金必知5件事！了解計價方式、常見陷阱、所需證件，選對店家讓你每台錢多拿 500 元。台北巧品珠寶免費估價。',
  keywords: '黃金回收必知,第一次賣黃金,黃金新手',
  alternates: {
    canonical: 'https://www.gold-tw.com/blog/gold-should-know',
  },
  openGraph: {
    title: '黃金回收必知｜新手必看｜巧品珠寶',
    description: '賣黃金必知5件事！了解計價方式、常見陷阱、所需證件，選對店家讓你每台錢多拿 500 元。台北巧品珠寶免費估價。',
    type: 'article',
    url: 'https://www.gold-tw.com/blog/gold-should-know',
    siteName: '巧品珠寶',
    publishedTime: '2026-03-12T00:00:00+08:00',
    modifiedTime: '2026-03-16T00:00:00+08:00',
  },
};

// lastModified: 2026-03-19
export default function Page() {
  return (
    <main style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": "黃金回收必知｜新手必看完整教學",
            "author": { "@type": "Organization", "name": "鑑定師L", "url": "https://www.gold-tw.com", "@id": "https://www.gold-tw.com/#business" },
            "publisher": { "@type": "Organization", "name": "巧品珠寶", "url": "https://www.gold-tw.com", "logo": { "@type": "ImageObject", "url": "https://wsrv.nl/?url=https://drive.google.com/uc?id=16UrCpYWRkyEkvL7M73o0DIAvkKWtF0Lp&w=200&output=webp" } },
            "datePublished": "2026-03-12",
            "dateModified": "2026-03-16T00:00:00+08:00",
            "description": "黃金回收新手必知：計價方式、陷阱預防、所需證件完整說明"
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"首頁","item":"https://www.gold-tw.com"},{"@type":"ListItem","position":2,"name":"知識專欄","item":"https://www.gold-tw.com/blog"},{"@type":"ListItem","position":3,"name":"黃金回收必知｜新手必看｜巧品珠寶"}]})
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              { '@type': 'Question', name: '第一次賣黃金要帶什麼？', acceptedAnswer: { '@type': 'Answer', text: '主要攜帶本人身份證。如果有購買憑證或保證書可一同帶來，但並非必備。' } },
              { '@type': 'Question', name: '黃金回收價格是固定的嗎？', acceptedAnswer: { '@type': 'Answer', text: '否，黃金回收價格每日隨國際金價波動，建議賣前先查當日牌價。' } },
              { '@type': 'Question', name: '1台錢等於多少公克？', acceptedAnswer: { '@type': 'Answer', text: '1台錢等於3.75公克。台灣黃金交易慣用「台錢」為單位。' } },
              { '@type': 'Question', name: '店家說要扣「損耗」合理嗎？', acceptedAnswer: { '@type': 'Answer', text: '正規回收店不應扣損耗費。若對方提及損耗費，建議到其他店家比價。' } },
              { '@type': 'Question', name: '在哪裡可以查今日黃金牌價？', acceptedAnswer: { '@type': 'Answer', text: '可查詢台灣銀行官網的黃金牌價，或直接電洽巧品珠寶詢問當日報價。' } },
            ],
          })
        }}
      />
      <h1>黃金回收必知｜新手必看完整教學</h1>

      <div style={{background:'#fffbeb', borderLeft:'4px solid #f59e0b', padding:'16px', margin:'16px 0', borderRadius:'8px'}}>
        <strong>📌 重點摘要：</strong> 買賣黃金必知：了解純度標示、學會看當日牌價、知道台錢與公克換算（1台錢=3.75公克）、攜帶身份證、多家比價。
      </div>

      <h2>第一次賣黃金要知道哪些事？</h2>
      <p>很多人手上有閒置的黃金飾品，卻不知道從哪裡開始。賣黃金並不複雜，但若不了解基本規則，很容易讓自己少拿幾千元。以下是<a href="/" style={{color:'#B8860B'}}>巧品珠寶</a>整理的新手必知重點，讓您賣得安心、賣得划算。</p>

      <h2>重點一：查當日金價</h2>
      <p>黃金價格每天隨國際市場波動，台灣以「台銀牌價」為基準。賣黃金前，先上台灣銀行官網或參考<a href="/blog/gold-price-guide-2026" style={{color:'#B8860B'}}>2026年黃金價格指南</a>查詢當日牌價，心裡有底才不容易被低估。也可使用<a href="/blog/gold-calculator" style={{color:'#B8860B'}}>黃金回收計算機</a>估算您的黃金大概值多少錢。</p>

      <h2>重點二：了解計價單位</h2>
      <p>台灣黃金交易使用「台錢」計算，<strong>1台錢 = 3.75公克</strong>。若您的金飾重15公克，就是4台錢重。了解換算方式，才能核對店家的報價是否合理。回收價格計算公式為：<strong>當日牌價（元/台錢）× 重量（台錢）× 純度</strong>。</p>

      <h2>重點三：攜帶身份證</h2>
      <p>依台灣法規，黃金交易需要登記身份，請攜帶本人身份證前往。不需要購買憑證或原廠包裝。詳細說明可參考<a href="/blog/gold-id-requirement" style={{color:'#B8860B'}}>賣黃金需要什麼證件</a>一文。</p>

      <h2>重點四：現場秤重並核對</h2>
      <p>到店後務必親眼看見秤重過程，確認電子秤顯示的數字。正規店家會使用<strong>校正過的精密電子秤</strong>，不會事先預設扣重或收損耗費。若對方說要扣「耗損」或「工本費」，可能是<a href="/blog/gold-recovery-traps" style={{color:'#B8860B'}}>黃金回收常見陷阱</a>，建議立即離開換家比價。</p>

      <h2>重點五：選擇誠信店家</h2>
      <p>選擇有實體門市、明確標示地址的店家。巧品珠寶位於台北市大安區濟南路三段62-1號，老闆親自鑑定，公開透明報價，不收任何手續費。如果您想了解如何挑選值得信賴的回收商，可參考<a href="/blog/how-to-choose-gold-shop" style={{color:'#B8860B'}}>如何選擇黃金回收店</a>。</p>

      <h2>黃金純度標示是什麼意思？</h2>
      <ul>
        <li><strong>9999 / 24K</strong>：純度99.99%，最高回收價</li>
        <li><strong>916 / 22K</strong>：純度91.6%，常見於傳統金飾</li>
        <li><strong>18K</strong>：純度75%，歐美流行款式</li>
        <li><strong>14K</strong>：純度58.5%，輕盈款式常見</li>
        <li><strong>10K</strong>：純度41.7%，入門款K金</li>
      </ul>
      <p>不確定手上金飾的純度？可參考<a href="/blog/gold-identification" style={{color:'#B8860B'}}>黃金真偽與純度鑑別方法</a>，或直接帶來店免費鑑定。</p>

      <h2>常見問題 FAQ</h2>

      <h3>Q：第一次賣黃金要帶什麼？</h3>
      <p>A：主要攜帶本人身份證。如果有購買憑證或保證書可一同帶來，但並非必備。</p>

      <h3>Q：黃金回收價格是固定的嗎？</h3>
      <p>A：否，黃金回收價格每日隨國際金價波動，建議賣前先查當日牌價。</p>

      <h3>Q：1台錢等於多少公克？</h3>
      <p>A：1台錢等於3.75公克。台灣黃金交易慣用「台錢」為單位。</p>

      <h3>Q：店家說要扣「損耗」合理嗎？</h3>
      <p>A：正規回收店不應扣損耗費。若對方提及損耗費，建議到其他店家比價。相關陷阱可參考<a href="/blog/gold-scale-trap" style={{color:'#B8860B'}}>黃金秤重陷阱揭露</a>。</p>

      <h3>Q：在哪裡可以查今日黃金牌價？</h3>
      <p>A：可查詢台灣銀行官網的黃金牌價，或直接電洽巧品珠寶詢問當日報價。</p>

      <div style={{ margin: '2rem 0', padding: '1.5rem', background: '#FEF9E7', borderRadius: '8px', borderLeft: '4px solid #B8860B' }}>
        <strong>延伸閱讀：</strong>
        <ul style={{ marginTop: '0.5rem', paddingLeft: '1.5rem' }}>
          <li><a href="/blog/before-selling-gold" style={{ color: '#B8860B' }}>賣黃金前的準備事項</a></li>
          <li><a href="/blog/gold-scam-prevent" style={{ color: '#B8860B' }}>黃金詐騙防範指南</a></li>
          <li><a href="/blog/gold-scale-trap" style={{ color: '#B8860B' }}>黃金秤重陷阱揭露</a></li>
          <li><a href="/blog/gold-recovery-traps" style={{ color: '#B8860B' }}>黃金回收常見陷阱</a></li>
          <li><a href="/blog/gold-safety" style={{ color: '#B8860B' }}>黃金交易安全指南</a></li>
          <li><a href="/blog/gold-recovery-faq" style={{ color: '#B8860B' }}>黃金回收常見問題</a></li>
          <li><a href="/blog/gold-recycling-precautions" style={{ color: '#B8860B' }}>黃金回收注意事項</a></li>
        </ul>
      </div>

      <hr style={{ margin: '2rem 0' }} />
      <h2>立即聯繫巧品珠寶</h2>
      <p>📞 電話：<a href="tel:0986821626">0986-821-626</a></p>
      <p>💬 LINE：@QPD888</p>
      <p>🕐 營業時間：週一至週六 10:00–19:00</p>
      <p>📍 地址：台北市大安區濟南路三段62-1號</p>
      <p>🌐 官網：<a href="https://www.gold-tw.com/" rel="noopener noreferrer">https://www.gold-tw.com/</a></p>
    </main>
  );
}
