import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '賣黃金要繳稅嗎？黃金稅務完整說明｜巧品珠寶',
  description: '賣黃金要繳稅嗎？台灣黃金交易稅務規定完整說明，個人賣黃金的課稅情況一次搞懂。',
  keywords: '黃金稅務,賣黃金繳稅,黃金所得稅,遺產稅黃金',
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
      <h1>賣黃金要繳稅嗎？黃金稅務完整說明</h1>

      <h2>結論：一般個人賣黃金通常不需繳所得稅</h2>
      <p>很多人賣黃金時擔心要繳稅。根據台灣現行法規，個人出售黃金的財產交易所得，原則上需申報，但實務上只要有購買憑證且非以交易黃金為業，稅負通常很低甚至為零。</p>

      <h2>黃金相關稅務說明</h2>
      <ul>
        <li><strong>個人財產交易所得</strong>：賣出金額減購買成本，若有獲利才需申報所得稅</li>
        <li><strong>無購買憑證</strong>：國稅局按收入的6%估算成本，但實務上鮮少被查核</li>
        <li><strong>遺產中的黃金</strong>：需計入遺產總額，超過免稅額才需繳遺產稅</li>
        <li><strong>贈與黃金</strong>：超過每年244萬贈與免稅額需申報贈與稅</li>
      </ul>

      <h2>實務建議</h2>
      <ul>
        <li>保留購買憑證，可作為成本證明</li>
        <li>若金額較大，建議諮詢會計師</li>
        <li>繼承的黃金在申報遺產時應如實列入</li>
      </ul>

      <h2>常見問題 FAQ</h2>
      <h3>Q：賣黃金要開收據嗎？</h3>
      <p>A：我們依規定開立相關憑證，並依法進行實名制登記。</p>
      <h3>Q：一次賣很多黃金，會被國稅局查嗎？</h3>
      <p>A：只要是正常的個人財產處分，通常不會有問題。如擔心，建議諮詢稅務專業人員。</p>
      <hr style={{ margin: '2rem 0' }} />
      <h2>立即諮詢</h2>


      <p>📞 電話：<a href="tel:0986821626" style={{ color: '#B8860B' }}>0986-821-626</a></p>
      <p>💬 LINE：<a href="https://line.me/ti/p/~@QPD888" style={{ color: '#06C755' }}>@QPD888</a></p>
      <p>📍 地址：台北市大安區濟南路三段62-1號</p>
      <p>🌐 官網：<a href="https://www.gold-tw.com/" style={{ color: '#B8860B' }}>www.gold-tw.com</a></p>
    </main>
  );
}
