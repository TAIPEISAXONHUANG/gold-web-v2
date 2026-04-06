import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '台灣今日金價每錢2026｜即時報價＋換算公式一次看懂｜巧品珠寶',
  description: '2026年台灣今日黃金每錢最新報價。9999純金一錢今日回收多少錢？附各純度換算表、台銀牌價對照、不扣耗損回收流程。台北大安巧品珠寶當日牌價最透明。',
  keywords: '台灣今日金價每錢2026,台灣今日金價一錢,今日金價每錢台灣,黃金每錢報價2026,台灣金價一錢2026',
  alternates: {
    canonical: 'https://www.gold-tw.com/blog/taiwan-gold-price-per-qian-today-2026',
  },
  openGraph: {
    locale: 'zh_TW',
    title: '台灣今日金價每錢2026｜即時報價＋換算公式一次看懂｜巧品珠寶',
    description: '2026年台灣今日黃金每錢最新報價。9999純金一錢今日回收多少錢？附各純度換算表、台銀牌價對照、不扣耗損回收流程。台北大安巧品珠寶當日牌價最透明。',
    type: 'article',
    url: 'https://www.gold-tw.com/blog/taiwan-gold-price-per-qian-today-2026',
    siteName: '巧品珠寶',
    publishedTime: '2026-03-27T00:00:00+08:00',
    modifiedTime: '2026-03-27T09:00:00+08:00',
    images: [{ url: '/og-image.webp', width: 1200, height: 630, alt: '巧品珠寶' }],

  },
};

const faqs = [
  {
    q: '2026年台灣今日黃金每錢多少錢？',
    a: '2026年3月底，台灣9999純金每錢（3.75克）回收行情約 16,500–18,000 元，每日隨國際金價浮動。電洽或LINE巧品珠寶可獲當日即時報價，開盤後每小時更新牌價。'
  },
  {
    q: '「每錢」和「一錢」是同一個意思嗎？',
    a: '是的，完全相同。台灣黃金市場習慣說「一錢」或「每錢」，1錢＝3.75克。報價通常以「每錢 XX 元」呈現，例如「今日每錢 17,500 元」，意思是每 3.75 克黃金的收購價格。'
  },
  {
    q: '今日金價每錢會因為哪些原因波動？',
    a: '三大主因：1) 國際現貨金價（XAUUSD）；2) 美元兌台幣匯率；3) 本地市場供需。通常開盤後兩小時報價最能反映當日行情，接近收盤前若美市還沒開，報價相對平穩。'
  },
  {
    q: '台灣銀行每錢買入價和回收店差多少？',
    a: '台銀公告買入價通常比市場即時報價低 200–800 元/錢，因為含了他們的管理成本。巧品珠寶直接對接國際金價，報價通常優於台銀買入價，差距最小。'
  },
  {
    q: '賣黃金每錢報價前，要怎麼確認店家沒有扣耗損？',
    a: '直接問：「你們有沒有扣火耗或損耗費？」正派業者會直接說沒有，或明確告知比例。巧品珠寶的答案是：不扣，秤多少算多少，全程讓你盯著秤看。'
  }
];

// lastModified: 2026-03-19
export default function Page() {
  return (
    <main style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map(faq => ({
              "@type": "Question",
              "name": faq.q,
              "acceptedAnswer": { "@type": "Answer", "text": faq.a }
            }))
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": "台灣今日金價每錢2026｜即時報價＋換算公式一次看懂",
            "author": { "@type": "Person", "name": "鑑定師L", "url": "https://www.gold-tw.com", "@id": "https://www.gold-tw.com/#business" },
            "publisher": { "@type": "Organization", "name": "巧品珠寶", "url": "https://www.gold-tw.com" },
            "datePublished": "2026-03-27",
            "dateModified": "2026-03-27T09:00:00+08:00",
            "description": "2026年台灣今日黃金每錢即時報價，各純度換算公式、台銀牌價對照，巧品珠寶不扣耗損即時報價。"
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "首頁", "item": "https://www.gold-tw.com" },
              { "@type": "ListItem", "position": 2, "name": "知識專欄", "item": "https://www.gold-tw.com/blog" },
              { "@type": "ListItem", "position": 3, "name": "台灣今日金價每錢2026即時報價" }
            ]
          })
        }}
      />

      <h1>台灣今日金價每錢2026｜即時報價＋換算公式一次看懂</h1>
      <div style={{ background: '#fffbeb', borderLeft: '4px solid #f59e0b', padding: '16px', margin: '16px 0', borderRadius: '8px' }}>
        <strong>重點摘要：</strong> 2026年台灣今日黃金每錢最新報價。9999純金一錢今日回收多少錢？附各純度換算表、台銀牌價對照、不扣耗損回收流程。台北大安巧品珠寶當日牌價最透明。
      </div>


      <div style={{ background: '#fffbeb', borderLeft: '4px solid #f59e0b', padding: '16px', margin: '16px 0', borderRadius: '8px' }}>
        <strong>直接給答案：</strong> 2026年3月底，台灣9999純金<strong>每錢（3.75克）回收行情約 16,500–18,000 元</strong>。換算公式、各純度對照表、不被坑的防踩雷指南——本文一次整理完。
      </div>

      <h2>台灣今日金價每錢是多少？</h2>
      <p>以 2026 年 3 月底國際金價 XAUUSD 約 3,100 美元/盎司、台幣匯率 USD/TWD 約 30.8 為基準：</p>

      <table style={{ width: '100%', borderCollapse: 'collapse', margin: '1rem 0' }}>
        <thead>
          <tr style={{ background: '#f59e0b', color: 'white' }}>
            <th style={{ padding: '10px', textAlign: 'left' }}>純度</th>
            <th style={{ padding: '10px', textAlign: 'left' }}>含金量</th>
            <th style={{ padding: '10px', textAlign: 'left' }}>每錢估算（元）</th>
            <th style={{ padding: '10px', textAlign: 'left' }}>五錢估算（元）</th>
          </tr>
        </thead>
        <tbody>
          <tr style={{ borderBottom: '1px solid #ddd', background: '#fefce8' }}>
            <td style={{ padding: '10px' }}>9999純金</td>
            <td style={{ padding: '10px' }}>99.99%</td>
            <td style={{ padding: '10px' }}><strong>約 17,250</strong></td>
            <td style={{ padding: '10px' }}>約 86,250</td>
          </tr>
          <tr style={{ borderBottom: '1px solid #ddd' }}>
            <td style={{ padding: '10px' }}>999純金</td>
            <td style={{ padding: '10px' }}>99.9%</td>
            <td style={{ padding: '10px' }}><strong>約 17,231</strong></td>
            <td style={{ padding: '10px' }}>約 86,156</td>
          </tr>
          <tr style={{ borderBottom: '1px solid #ddd', background: '#fefce8' }}>
            <td style={{ padding: '10px' }}>22K金</td>
            <td style={{ padding: '10px' }}>91.67%</td>
            <td style={{ padding: '10px' }}><strong>約 15,814</strong></td>
            <td style={{ padding: '10px' }}>約 79,069</td>
          </tr>
          <tr style={{ borderBottom: '1px solid #ddd' }}>
            <td style={{ padding: '10px' }}>18K金</td>
            <td style={{ padding: '10px' }}>75%</td>
            <td style={{ padding: '10px' }}><strong>約 12,938</strong></td>
            <td style={{ padding: '10px' }}>約 64,688</td>
          </tr>
          <tr style={{ borderBottom: '1px solid #ddd', background: '#fefce8' }}>
            <td style={{ padding: '10px' }}>14K金</td>
            <td style={{ padding: '10px' }}>58.33%</td>
            <td style={{ padding: '10px' }}><strong>約 10,063</strong></td>
            <td style={{ padding: '10px' }}>約 50,313</td>
          </tr>
          <tr style={{ borderBottom: '1px solid #ddd' }}>
            <td style={{ padding: '10px' }}>10K金</td>
            <td style={{ padding: '10px' }}>41.67%</td>
            <td style={{ padding: '10px' }}><strong>約 7,189</strong></td>
            <td style={{ padding: '10px' }}>約 35,944</td>
          </tr>
        </tbody>
      </table>
      <p style={{ fontSize: '0.85rem', color: '#888' }}>※ 估算值，實際報價隨當日牌價浮動。正確報價請電洽或LINE巧品珠寶。</p>

      <h2>每錢怎麼算？公式一條搞定</h2>
      <p>只要知道今日每錢報價，什麼純度都能自己算：</p>
      <div style={{ background: '#f0fdf4', border: '1px solid #86efac', padding: '16px', borderRadius: '8px', margin: '1rem 0' }}>
        <strong>每錢回收價（元）＝ 今日9999純金每錢報價 × 含金量%</strong>
        <br /><br />
        範例：今日報價 17,500 元/錢，你有 18K 金項鍊：
        <br />
        17,500 × 75% ＝ <strong>13,125 元/錢</strong>
        <br /><br />
        若項鍊重 2.5 錢：2.5 × 13,125 ＝ <strong>32,813 元</strong>
      </div>
      <p>這個公式有個前提：<strong>業者不扣耗損</strong>。如果業者扣 3% 火耗，上面那條項鍊你就少拿 985 元。業界大多不說，我們直接說清楚。</p>

      <h2>2026年台灣金價每錢走勢如何？</h2>
      <p>從 2026 年初到 3 月底，台灣黃金每錢報價走勢如下：</p>
      <ul>
        <li><strong>1 月初：</strong>約 15,000–15,500 元/錢（國際金約 2,650 美元/盎司）</li>
        <li><strong>2 月中：</strong>突破 16,000 元/錢，美元走弱支撐</li>
        <li><strong>3 月初：</strong>16,500–17,000 元/錢，美聯準會暗示降息預期升溫</li>
        <li><strong>3 月底：</strong>17,000–18,000 元/錢，地緣政治緊張推升避險需求</li>
      </ul>
      <p>2026 年前三個月，每錢報價累計漲幅約 15%–20%。持有黃金的民眾若在這波賣出，報酬率相當可觀。</p>

      <h2>查今日金價每錢有哪些方式？</h2>
      <p>不想被業者吃豆腐，先查好再去：</p>
      <ol>
        <li><strong>台灣銀行官網：</strong>查「黃金存摺買入/賣出價」，單位是台兩（5錢），除以 5 就是每錢</li>
        <li><strong>巧品珠寶官網：</strong>每日開盤更新即時牌價，單位直接顯示每錢</li>
        <li><strong>國際金價換算：</strong>XAUUSD 盎司價 ÷ 31.1 克 × 3.75 克 × 匯率</li>
        <li><strong>直接電話詢問：</strong>最準確，開盤後隨時報即時價</li>
      </ol>

      <h2>台銀牌價、金飾店、回收行有什麼差異？</h2>
      <p>很多人搞不清楚這三個管道的差別，這裡直接說數字：</p>

      <table style={{ width: '100%', borderCollapse: 'collapse', margin: '1rem 0' }}>
        <thead>
          <tr style={{ background: '#d97706', color: 'white' }}>
            <th style={{ padding: '10px', textAlign: 'left' }}>管道</th>
            <th style={{ padding: '10px', textAlign: 'left' }}>每錢回收價差（vs 即時市價）</th>
            <th style={{ padding: '10px', textAlign: 'left' }}>特色</th>
          </tr>
        </thead>
        <tbody>
          <tr style={{ borderBottom: '1px solid #ddd', background: '#fefce8' }}>
            <td style={{ padding: '10px' }}>台灣銀行</td>
            <td style={{ padding: '10px' }}>低 200–600 元</td>
            <td style={{ padding: '10px' }}>流程正式、但報價偏保守</td>
          </tr>
          <tr style={{ borderBottom: '1px solid #ddd' }}>
            <td style={{ padding: '10px' }}>一般金飾店</td>
            <td style={{ padding: '10px' }}>低 500–1,500 元</td>
            <td style={{ padding: '10px' }}>通常扣耗損、報價不透明</td>
          </tr>
          <tr style={{ borderBottom: '1px solid #ddd', background: '#fefce8' }}>
            <td style={{ padding: '10px' }}>當鋪</td>
            <td style={{ padding: '10px' }}>低 1,000–3,000 元</td>
            <td style={{ padding: '10px' }}>快速但報價最差</td>
          </tr>
          <tr style={{ borderBottom: '1px solid #ddd' }}>
            <td style={{ padding: '10px' }}>巧品珠寶</td>
            <td style={{ padding: '10px' }}>差距最小、貼近即時市價</td>
            <td style={{ padding: '10px' }}>不扣耗損、現場秤重、當場結算</td>
          </tr>
        </tbody>
      </table>

      <h2>今日去賣黃金——在台北哪裡找巧品珠寶？</h2>
      <p>巧品珠寶位於台北市大安區，捷運大安站步行 5 分鐘。不需預約，帶著黃金和身份證就可以直接來。</p>
      <p>現場提供：免費純度鑑定、當場秤重、即時報價、現金結算。15–30 分鐘完成交易，沒有模糊空間。</p>

      <h2>常見問題 FAQ</h2>
      {faqs.map((faq, idx) => (
        <div key={idx} style={{ marginBottom: '1.5rem', borderTop: '1px solid #e5e7eb', paddingTop: '1rem' }}>
          <h3 style={{ color: '#92400e', margin: '0 0 0.5rem' }}>{faq.q}</h3>
          <p style={{ margin: 0 }}>{faq.a}</p>
        </div>
      ))}

      <div style={{ background: '#fef3c7', border: '1px solid #f59e0b', padding: '20px', borderRadius: '8px', margin: '2rem 0', textAlign: 'center' }}>
        <strong style={{ fontSize: '1.1rem' }}>台灣今日金價每錢——即時報價、不扣耗損</strong>
        <br />
        <span style={{ color: '#78350f' }}>台北大安巧品珠寶 ｜ 每日開盤更新牌價，電洽即時確認</span>
        <br />
        <span style={{ fontSize: '0.9rem', color: '#92400e' }}>9999純金、14K、18K、22K、鉑金、銀飾全收</span>
      </div>

      <h2>延伸閱讀</h2>
      <ul>
        <li><a href="/blog/gold-price-per-liang-today-2026">今日金價一兩多少錢？2026台灣即時行情</a></li>
        <li><a href="/blog/gold-price-per-liang-taiwan-2026">2026台灣今日金價一兩完整換算指南</a></li>
        <li><a href="/blog/taiwan-gold-recovery-price-per-qian-2026">台灣黃金回收每錢報價完整指南</a></li>
        <li><a href="/blog/why-register-when-selling-gold">賣黃金為什麼要登記？法律規定一次說清楚</a></li>
        <li><a href="/blog/sell-gold-checklist-2026">賣黃金前必看：2026年完整準備清單</a></li>
      </ul>
    </main>
  );
}
