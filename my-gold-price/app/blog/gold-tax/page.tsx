import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '賣黃金要繳稅嗎？黃金稅務完整說明｜巧品珠寶',
  description: '賣黃金要繳稅嗎？台灣黃金交易稅務規定完整說明，個人黃金回收的課稅情況、申報方式，讓你賣黃金不踩法律紅線。',
  keywords: '黃金稅務,賣黃金繳稅,黃金所得稅,遺產稅黃金',
  alternates: {
    canonical: 'https://www.gold-tw.com/blog/gold-tax',
  },
};

export const lastModified = new Date('2026-03-19');
export default function Page() {
  return (
    <main style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": "賣黃金要繳稅嗎？黃金稅務完整說明｜巧品珠寶",
            "description": "賣黃金要繳稅嗎？台灣黃金交易稅務規定完整說明，個人賣黃金的課稅情況一次搞懂。",
            "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.gold-tw.com/blog/gold-tax" },
            "author": { "@type": "Organization", "name": "巧品珠寶", "url": "https://www.gold-tw.com" },
            "publisher": { "@type": "Organization", "name": "巧品珠寶", "url": "https://www.gold-tw.com" },
            "image": { "@type": "ImageObject", "url": "https://wsrv.nl/?url=https://drive.google.com/uc?id=1ASz1v5ZBQ-WV572r-BC4gZRuraywgKKv&w=1200&output=webp&q=80", "width": 1200, "height": 630 },
            "datePublished": "2026-03-15T00:00:00+08:00",
            "dateModified": "2026-03-16T00:00:00+08:00"
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"首頁","item":"https://www.gold-tw.com"},{"@type":"ListItem","position":2,"name":"知識專欄","item":"https://www.gold-tw.com/blog"},{"@type":"ListItem","position":3,"name":"賣黃金要繳稅嗎？黃金稅務完整說明｜巧品珠寶"}]})
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "賣黃金要開收據嗎？",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "我們依規定開立相關憑證，並依法進行實名制登記。"
                }
              },
              {
                "@type": "Question",
                "name": "一次賣很多黃金，會被國稅局查嗎？",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "只要是正常的個人財產處分，通常不會有問題。如擔心，建議諮詢稅務專業人員。"
                }
              },
              {
                "@type": "Question",
                "name": "賣黃金超過多少要申報？",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "大額交易（單筆50萬元以上）依規定可能需要申報。建議保留交易明細作為報稅依據。"
                }
              },
              {
                "@type": "Question",
                "name": "黃金回收店會幫忙開收據嗎？",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "正規店家會出具交易明細或收據，載明重量、純度、單價和總金額。"
                }
              }
            ]
          })
        }}
      />
      <h1>賣黃金要繳稅嗎？黃金稅務完整說明</h1>

      <div style={{background:'#fffbeb', borderLeft:'4px solid #f59e0b', padding:'16px', margin:'16px 0', borderRadius:'8px'}}>
        <strong>📌 重點摘要：</strong> 台灣賣黃金的稅務規定：個人出售黃金免課營業稅，但若有獲利需申報財產交易所得。大額交易（50萬以上）可能需申報。
      </div>

      <h2>結論：一般個人賣黃金通常不需繳所得稅</h2>
      <p>很多人賣黃金時擔心要繳稅。根據台灣現行法規，個人出售黃金的財產交易所得，原則上需申報，但實務上只要有購買憑證且非以交易黃金為業，稅負通常很低甚至為零。想了解賣黃金前的準備事項，可參考<a href="/blog/before-selling-gold" style={{ color: '#B8860B' }}>賣黃金前必知事項</a>。</p>

      <h2>黃金相關稅務是什麼？</h2>
      <ul>
        <li><strong>個人財產交易所得</strong>：賣出金額減購買成本，若有獲利才需申報所得稅</li>
        <li><strong>無購買憑證</strong>：國稅局按收入的6%估算成本，但實務上鮮少被查核</li>
        <li><strong>遺產中的黃金</strong>：需計入遺產總額，超過免稅額才需繳遺產稅。詳細可參考<a href="/blog/inheritance-gold" style={{ color: '#B8860B' }}>繼承黃金處理指南</a></li>
        <li><strong>贈與黃金</strong>：超過每年244萬贈與免稅額需申報贈與稅</li>
      </ul>

      <h2>有哪些實務建議？</h2>
      <ul>
        <li>保留購買憑證，可作為成本證明</li>
        <li>若金額較大，建議諮詢會計師</li>
        <li>繼承的黃金在申報遺產時應如實列入</li>
        <li>賣黃金時需依規定<a href="/blog/gold-id-requirement" style={{ color: '#B8860B' }}>攜帶身分證件實名登記</a></li>
      </ul>

      <h2>常見問題 FAQ</h2>
      <h3>Q：賣黃金要開收據嗎？</h3>
      <p>A：我們依規定開立相關憑證，並依法進行實名制登記。</p>
      <h3>Q：一次賣很多黃金，會被國稅局查嗎？</h3>
      <p>A：只要是正常的個人財產處分，通常不會有問題。如擔心，建議諮詢稅務專業人員。</p>
      <section style={{ marginTop: '2.5rem', padding: '2rem', background: '#f9fafb', borderRadius: '12px', border: '1px solid #e5e7eb' }}>
        <h2 style={{ fontSize: '1.3rem', fontWeight: 'bold', color: '#1f2937', marginTop: 0, marginBottom: '1rem' }}>❓ 常見問題</h2>
        <div style={{ marginBottom: '1rem', background: 'white', padding: '1rem', borderRadius: '8px', border: '1px solid #e5e7eb' }}>
          <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '1rem', color: '#1f2937' }}>Q: 賣黃金超過多少要申報？</h3>
          <p style={{ margin: 0, color: '#4b5563', lineHeight: '1.6' }}>A: 大額交易（單筆50萬元以上）依規定可能需要申報。建議保留交易明細作為報稅依據。</p>
        </div>
        <div style={{ marginBottom: '1rem', background: 'white', padding: '1rem', borderRadius: '8px', border: '1px solid #e5e7eb' }}>
          <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '1rem', color: '#1f2937' }}>Q: 黃金回收店會幫忙開收據嗎？</h3>
          <p style={{ margin: 0, color: '#4b5563', lineHeight: '1.6' }}>A: 正規店家會出具交易明細或收據，載明重量、純度、單價和總金額。</p>
        </div>
      </section>

      <div style={{ margin: '2rem 0', padding: '1.5rem', background: '#FEF9E7', borderRadius: '8px', borderLeft: '4px solid #B8860B' }}>
        <strong>延伸閱讀：</strong>
        <ul style={{ marginTop: '0.5rem', paddingLeft: '1.5rem' }}>
          <li><a href="/gold-recovery-guide" style={{ color: '#B8860B' }}>黃金回收指南</a></li>
          <li><a href="https://law.moj.gov.tw" style={{ color: '#B8860B' }}>中華民國所得稅法</a></li>
          <li><a href="https://www.mof.gov.tw" style={{ color: '#B8860B' }}>財政部</a></li>
        </ul>
      </div>

      <hr style={{ margin: '2rem 0' }} />
      <h2>立即諮詢</h2>


      <p>📞 電話：<a href="tel:0986821626" style={{ color: '#B8860B' }}>0986-821-626</a></p>
      <p>💬 LINE：<a href="https://line.me/ti/p/~@QPD888" style={{ color: '#06C755' }}>@QPD888</a></p>
      <p>📍 地址：台北市大安區濟南路三段62-1號</p>
      <p>🌐 官網：<a href="https://www.gold-tw.com/" style={{ color: '#B8860B' }}>www.gold-tw.com</a></p>
    </main>
  );
}
