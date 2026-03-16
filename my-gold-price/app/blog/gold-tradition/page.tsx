import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '黃金傳統習俗｜台灣黃金文化習俗｜巧品珠寶',
  description: '台灣黃金傳統習俗完整介紹！嫁妝金飾、彌月禮金、神明金牌等黃金文化習俗說明。',
  keywords: '黃金傳統,黃金習俗,嫁妝金飾,彌月黃金',
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
            "headline": "黃金傳統習俗｜台灣黃金文化習俗｜巧品珠寶",
            "description": "台灣黃金傳統習俗完整介紹！嫁妝金飾、彌月禮金、神明金牌等黃金文化習俗說明。",
            "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.gold-tw.com/blog/gold-tradition" },
            "author": { "@type": "Organization", "name": "巧品珠寶", "url": "https://www.gold-tw.com" },
            "publisher": { "@type": "Organization", "name": "巧品珠寶", "url": "https://www.gold-tw.com" },
            "image": { "@type": "ImageObject", "url": "https://www.gold-tw.com/images/og-image.jpg", "width": 1200, "height": 630 },
            "datePublished": "2026-03-15T00:00:00+08:00",
            "dateModified": "2026-03-16T00:00:00+08:00"
          })
        }}
      />
      <h1>黃金傳統習俗｜台灣黃金文化完整介紹</h1>

      <h2>結論：黃金在台灣傳統文化中不可或缺</h2>
      <p>黃金在台灣人的生命禮俗中扮演重要角色，從出生到婚嫁到身後，每個重要時刻都可能有黃金的身影。了解這些傳統，讓我們更珍視手中的黃金。</p>

      <h2>台灣黃金傳統習俗</h2>
      <ul>
        <li><strong>彌月禮金</strong>：新生兒滿月，親友贈送小金飾，祝福平安健康成長</li>
        <li><strong>結婚嫁妝</strong>：女方父母準備黃金首飾作為嫁妝，象徵財富與祝福</li>
        <li><strong>訂婚金飾</strong>：男方準備「三金」（金戒指、金手鍊、金耳環）</li>
        <li><strong>壽禮</strong>：長輩大壽，子女贈送金飾以表孝心與祝福</li>
        <li><strong>神明金牌</strong>：廟宇善信製作純金牌匾供奉，表達虔誠</li>
        <li><strong>開運金飾</strong>：貔貅、元寶造型金飾，據信有招財納福之效</li>
      </ul>

      <h2>現代變化</h2>
      <p>雖然年輕一代對金飾的需求有所改變，但黃金作為保值資產的地位依然穩固。許多家庭會將傳統金飾在適當時機回收變現，用於更靈活的財務規劃。</p>

      <h2>常見問題 FAQ</h2>
      <h3>Q：彌月收到的金飾可以賣掉嗎？</h3>
      <p>A：完全可以，黃金保值性高，待孩子長大後可以視需求決定。</p>
      <h3>Q：三金應該買哪種純度？</h3>
      <p>A：傳統偏好9999純金，現代也有選擇18K款式，依個人喜好。</p>
      <hr style={{ margin: '2rem 0' }} />
      <h2>立即諮詢</h2>


      <p>📞 電話：<a href="tel:0986821626" style={{ color: '#B8860B' }}>0986-821-626</a></p>
      <p>💬 LINE：<a href="https://line.me/ti/p/~@QPD888" style={{ color: '#06C755' }}>@QPD888</a></p>
      <p>📍 地址：台北市大安區濟南路三段62-1號</p>
      <p>🌐 官網：<a href="https://www.gold-tw.com/" style={{ color: '#B8860B' }}>www.gold-tw.com</a></p>
    </main>
  );
}
