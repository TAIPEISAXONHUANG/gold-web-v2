import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '2026年台灣黃金每錢行情｜每日牌價查詢與換算指南｜巧品珠寶',
  description: '2026年台灣黃金每錢（一錢）價格行情完整說明。台灣銀行黃金牌價換算、每錢計算方式、即時回收報價。巧品珠寶電話0986-821-626。',
  keywords: '台灣黃金每錢,黃金一錢價格,2026黃金牌價,台灣金價每錢',
  alternates: {
    canonical: 'https://www.gold-tw.com/blog/taiwan-gold-price-per-qian-every-2026',
  },
}

const faqs = [
  {
    q: '2026年台灣黃金一錢（每錢）價格大約多少？',
    a: '2026年台灣黃金每錢（1錢＝3.75克）參考行情約17,500–18,600元（依當日台灣銀行牌價及即時國際金價而定）。回收價格通常略低於銀行牌價，建議直接電洽巧品珠寶確認當日回收報價。',
  },
  {
    q: '台灣「一錢黃金」是多少公克？',
    a: '台灣的「一錢」黃金重量為3.75公克（克）。這是傳統台制重量單位，廣泛用於黃金珠寶買賣與回收計價。',
  },
  {
    q: '哪裡可以查台灣黃金每日牌價？',
    a: '可至台灣銀行官網（www.bot.com.tw）查詢每日黃金牌價，分為「本行買入」與「本行賣出」兩種價格。回收商（如巧品珠寶）參考即時國際金價，報價可能略有不同，建議電洽詢問。',
  },
  {
    q: '黃金每錢回收和銀行牌價差多少？',
    a: '一般而言，民間回收商的每錢回收價格比銀行牌價低約200–500元，主要因為業者需保留一定的利潤空間。選擇正規、報價透明的銀樓（如巧品珠寶），可以確保獲得合理回收價格，不會被大幅壓低。',
  },
]

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: '2026年台灣黃金每錢行情｜每日牌價查詢與換算指南',
            description: '2026年台灣黃金每錢（一錢）價格行情完整說明。台灣銀行黃金牌價換算、每錢計算方式、即時回收報價。',
            mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://www.gold-tw.com/blog/taiwan-gold-price-per-qian-every-2026' },
            author: { '@type': 'Organization', name: '巧品珠寶', url: 'https://www.gold-tw.com' },
            publisher: { '@type': 'Organization', name: '巧品珠寶', url: 'https://www.gold-tw.com' },
            datePublished: '2026-03-20T00:00:00+08:00',
            dateModified: '2026-04-01T00:00:00+08:00',
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqs.map((f) => ({
              '@type': 'Question',
              name: f.q,
              acceptedAnswer: { '@type': 'Answer', text: f.a },
            })),
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: '首頁', item: 'https://www.gold-tw.com/' },
              { '@type': 'ListItem', position: 2, name: '黃金知識', item: 'https://www.gold-tw.com/blog' },
              { '@type': 'ListItem', position: 3, name: '2026年台灣黃金每錢行情', item: 'https://www.gold-tw.com/blog/taiwan-gold-price-per-qian-every-2026' },
            ],
          }),
        }}
      />
      <article style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
        <h1>2026年台灣黃金每錢行情｜每日牌價查詢與換算指南</h1>

        <div style={{ background: '#fffbeb', borderLeft: '4px solid #f59e0b', padding: '16px', margin: '16px 0', borderRadius: '8px' }}>
          <strong>重點摘要：</strong> 台灣黃金「一錢」＝3.75公克。2026年每錢黃金行情約17,500–18,600元。回收價依當日國際金價計算，建議直接詢問當日報價。
        </div>

        <h2>台灣黃金計價單位：「錢」是什麼？</h2>
        <p>
          「錢」是台灣傳統黃金計量單位，源自中國古制：
          1台兩 ＝ 10錢，1錢 ＝ 3.75公克。
          台灣銀樓報價幾乎都以「每錢多少元」為單位，
          消費者買賣黃金時習慣用「錢」來換算，例如「這條項鍊3錢重」。
        </p>

        <h2>2026年黃金每錢行情參考</h2>
        <table style={{ width: '100%', borderCollapse: 'collapse', margin: '1.5rem 0' }}>
          <thead>
            <tr style={{ background: '#f5f0e8' }}>
              <th style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'left' }}>時間</th>
              <th style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>台銀買入（每錢）</th>
              <th style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>台銀賣出（每錢）</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>2026年1月（參考）</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>約 17,500 元</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>約 17,800 元</td>
            </tr>
            <tr style={{ background: '#fafafa' }}>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>2026年2月（參考）</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>約 17,800 元</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>約 18,100 元</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>2026年3月（參考）</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>約 18,100 元</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>約 18,600 元</td>
            </tr>
          </tbody>
        </table>
        <p>以上數字僅供參考，實際牌價請至台灣銀行官網或電洽巧品珠寶確認。</p>

        <h2>如何計算黃金回收金額？</h2>
        <p>
          計算公式：<strong>回收金額 ＝ 重量（錢）× 當日每錢回收價</strong>
        </p>
        <p>
          例如：你有一條黃金項鍊重2.5錢，當日每錢回收價18,000元，
          則估算回收金額約 2.5 × 18,000 ＝ <strong>45,000元</strong>。
          實際報價會依黃金純度（9999、9958等）略有調整。
        </p>

        <h2>台灣銀行牌價與民間回收商報價的差異</h2>
        <p>
          台灣銀行的「買入價」是銀行向民眾買入黃金的價格，相對保守。
          民間正規銀樓（如巧品珠寶）參考即時國際金價計算，
          在部分時段報價可能與台銀相當甚至更高，因此不要只看台銀牌價，
          多比較幾家才能獲得最好的回收價格。
        </p>

        <h2>常見問題</h2>
        {faqs.map((f, i) => (
          <div key={i} style={{ marginBottom: '1.5rem' }}>
            <h3>{f.q}</h3>
            <p>{f.a}</p>
          </div>
        ))}

        <div style={{ margin: '2rem 0', padding: '1.5rem', background: '#FEF9E7', borderRadius: '8px', borderLeft: '4px solid #B8860B' }}>
          <strong>延伸閱讀：</strong>
          <ul style={{ marginTop: '0.5rem', paddingLeft: '1.5rem' }}>
            <li><a href="/blog/daily-gold-price-per-qian" style={{ color: '#B8860B' }}>黃金每日報價查詢｜每錢最新行情</a></li>
            <li><a href="/blog/gold-price-per-liang-taiwan-2026" style={{ color: '#B8860B' }}>2026年台灣黃金每兩價格行情</a></li>
            <li><a href="/blog/gold-recovery-price-today" style={{ color: '#B8860B' }}>今日黃金回收價格查詢</a></li>
            <li><a href="/blog/gold-calculator" style={{ color: '#B8860B' }}>黃金回收計算機</a></li>
          </ul>
        </div>

        <hr style={{ margin: '2rem 0' }} />
        <h2>立即諮詢</h2>
        <p>電話：<a href="tel:0986821626" style={{ color: '#B8860B' }}>0986-821-626</a></p>
        <p>LINE：<a href="https://line.me/ti/p/~@QPD888" style={{ color: '#06C755' }}>@QPD888</a></p>
        <p>地址：台北市大安區濟南路三段62-1號</p>
        <p>官網：<a href="https://www.gold-tw.com/" style={{ color: '#B8860B' }}>www.gold-tw.com</a></p>
      </article>
    </>
  )
}
