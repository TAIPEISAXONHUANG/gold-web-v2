import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '黃金文化｜黃金的象徵意義與歷史｜巧品珠寶',
  description: '探索黃金在台灣的文化意義！從嫁妝、長壽禮到年節禮俗，了解黃金在台灣社會中的重要地位，讀懂黃金背後的文化故事。',
  keywords: '黃金文化,黃金意義,黃金習俗,黃金傳統文化',
  alternates: {
    canonical: 'https://www.gold-tw.com/blog/gold-culture',
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
            "headline": "黃金文化｜黃金的象徵意義與歷史｜巧品珠寶",
            "description": "探索黃金文化！黃金在台灣與華人文化中的象徵意義、習俗與傳統。",
            "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.gold-tw.com/blog/gold-culture" },
            "author": { "@type": "Organization", "name": "巧品珠寶", "url": "https://www.gold-tw.com" },
            "publisher": { "@type": "Organization", "name": "巧品珠寶", "url": "https://www.gold-tw.com" },
            "image": { "@type": "ImageObject", "url": "https://wsrv.nl/?url=https://drive.google.com/uc?id=1ASz1v5ZBQ-WV572r-BC4gZRuraywgKKv&w=1200&output=webp&q=80" },
            "datePublished": "2026-03-15T00:00:00+08:00",
            "dateModified": "2026-03-16T00:00:00+08:00"
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"首頁","item":"https://www.gold-tw.com"},{"@type":"ListItem","position":2,"name":"知識專欄","item":"https://www.gold-tw.com/blog"},{"@type":"ListItem","position":3,"name":"黃金文化｜黃金的象徵意義與歷史｜巧品珠寶"}]})
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
                "name": "傳家的金飾該如何保存？",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "存放在乾燥環境，避免與其他金屬摩擦。若不戴可考慮變現後存入黃金存摺。"
                }
              },
              {
                "@type": "Question",
                "name": "有紀念意義的金飾還是可以回收嗎？",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "當然可以，情感價值與金錢價值可以並存，由您決定。"
                }
              }
            ]
          })
        }}
      />
      <h1>黃金文化｜黃金的象徵意義與歷史</h1>

      <div style={{background:'#fffbeb', borderLeft:'4px solid #f59e0b', padding:'16px', margin:'16px 0', borderRadius:'8px'}}>
        <strong>📌 重點摘要：</strong> 黃金在華人文化中象徵富貴吉祥，從婚嫁金飾到過年金幣都有深遠意義。了解黃金文化背景，讓你的金飾更有故事。
      </div>

      <h2>結論：黃金在華人文化中代表財富、祝福與傳承</h2>
      <p>從古至今，黃金在中華文化中一直佔有特殊地位。它不只是貴金屬，更承載著祝福、傳承與財富的意涵。了解黃金的文化背景，讓我們更珍視手中這份珍貴的資產。</p>

      <h2>黃金在台灣文化中扮演什麼角色？</h2>
      <ul>
        <li><strong>嫁妝金飾</strong>：婚嫁時贈送金手鐲、金項鍊，象徵祝福新人</li>
        <li><strong>彌月禮金</strong>：新生兒滿月贈送小金飾，代表祝福平安</li>
        <li><strong>壽禮金飾</strong>：長輩大壽送金飾，象徵長壽富貴</li>
        <li><strong>神明金牌</strong>：廟宇善信製作純金牌匾供奉，表達虔誠</li>
        <li><strong>傳家之寶</strong>：世代相傳的金飾，承載家族記憶</li>
        <li><strong>開運金飾</strong>：貔貅、元寶造型金飾，據信有招財納福之效</li>
      </ul>

      <h2>黃金的歷史與現代價值是什麼？</h2>
      <p>黃金幾千年來一直是財富的象徵。即使在現代金融體系下，黃金仍是最重要的避險資產之一，各國央行都持有大量黃金儲備。</p>

      <h2>常見問題 FAQ</h2>
      <h3>Q：傳家的金飾該如何保存？</h3>
      <p>A：存放在乾燥環境，避免與其他金屬摩擦。若不戴可考慮變現後存入黃金存摺。</p>
      <h3>Q：有紀念意義的金飾還是可以回收嗎？</h3>
      <p>A：當然可以，情感價值與金錢價值可以並存，由您決定。</p>

      <div style={{ margin: '2rem 0', padding: '1.5rem', background: '#FEF9E7', borderRadius: '8px', borderLeft: '4px solid #B8860B' }}>
        <strong>延伸閱讀：</strong>
        <ul style={{ marginTop: '0.5rem', paddingLeft: '1.5rem' }}>
          <li><a href="/blog/gold-tradition" style={{ color: '#B8860B' }}>黃金傳統文化</a></li>
          <li><a href="/blog/gold-weight" style={{ color: '#B8860B' }}>黃金重量換算</a></li>
          <li><a href="/blog/gold-purity" style={{ color: '#B8860B' }}>黃金純度說明</a></li>
          <li><a href="/blog/lion-head-gold" style={{ color: '#B8860B' }}>獅頭金飾回收</a></li>
        </ul>
      </div>

      <hr style={{ margin: '2rem 0' }} />
      <h2>立即諮詢</h2>
      <p>📞 電話：<a href="tel:0986821626" style={{ color: '#B8860B' }}>0986-821-626</a></p>
      <p>💬 LINE：<a href="https://line.me/ti/p/~@QPD888" style={{ color: '#06C755' }}>@QPD888</a></p>
      <p>📍 地址：台北市大安區濟南路三段62-1號</p>
    </main>
  );
}
