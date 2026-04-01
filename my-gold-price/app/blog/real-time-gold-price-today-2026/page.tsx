import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '今日即時金價2026｜一錢、一兩台灣黃金報價即時查詢',
  description: '想查今日即時金價？2026年台灣黃金買入、賣出報價每天更新，一錢、一兩換算一次搞懂。附今日行情參考、走勢說明、哪裡可以查到最即時的金價。',
  alternates: {
    canonical: 'https://www.gold-tw.com/blog/real-time-gold-price-today-2026',
  },
}

const faqs = [
  {
    q: '哪裡可以查到台灣最即時的金價？',
    a: '三個主要來源：1）台灣銀樓公會官網——每個工作日更新牌告金價，一錢和一兩都有買入/賣出報價；2）各大銀樓官網或LINE官方帳號——部分銀樓有當日掛牌價更新；3）國際金價換算——用COMEX或倫敦現貨金價，乘以當日美元兌台幣匯率，再換算成台制重量單位。第一個方法最直觀，直接查就好。',
  },
  {
    q: '今日金價「買入」和「賣出」差在哪？',
    a: '「賣出」是銀樓賣黃金給你的價格，「買入（回收）」是銀樓從你那裡買黃金的價格。買入價比賣出價低，差距通常是每錢200–600元，這是店家的利潤空間。你去賣黃金，拿到的是「買入價」。你去買黃金，付的是「賣出價」。',
  },
  {
    q: '台灣一錢黃金等於幾克？',
    a: '台制一錢 = 3.75克。一兩 = 10錢 = 37.5克。這是台灣銀樓的標準單位。注意：中國大陸的一錢不同（約3.73克），海外的troy ounce（英兩）更不一樣（31.1克）。在台灣銀樓報價，全部用台制一錢計算，不會搞混。',
  },
  {
    q: '金價每天都在變嗎？變化幅度有多大？',
    a: '是的，金價每天跟著國際市場浮動。2026年初以來，金價波動幅度大約是每錢100–500元/天，金價高點時單日波動可能更大。如果你計劃買賣大量黃金，建議當天確認報價再決定，不要用昨天或前天的數字估算。',
  },
  {
    q: '國際金價跌了，台灣金價也一定跌嗎？',
    a: '基本上是的，但有匯率緩衝。台灣金價 = 國際金價（美元/盎司）× 匯率（USD/TWD）÷ 換算係數。如果國際金價跌了3%，但美元同時升值2%，台灣金價只會跌約1%。反過來也是，所以台灣金價和國際金價方向一致，但幅度可能不同。',
  },
]

export default function RealTimeGoldPriceToday2026() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: '今日即時金價2026｜一錢、一兩台灣黃金報價即時查詢',
            description: '想查今日即時金價？2026年台灣黃金買入、賣出報價每天更新，一錢、一兩換算一次搞懂。附今日行情參考、走勢說明、哪裡可以查到最即時的金價。',
            mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://www.gold-tw.com/blog/real-time-gold-price-today-2026' },
            author: { '@type': 'Organization', name: '巧品珠寶', url: 'https://www.gold-tw.com' },
            publisher: { '@type': 'Organization', name: '巧品珠寶', url: 'https://www.gold-tw.com' },
            datePublished: '2026-04-01T00:00:00+08:00',
            dateModified: '2026-04-01T00:00:00+08:00',
          }),
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
              {
                '@type': 'ListItem',
                position: 3,
                name: '今日即時金價2026',
                item: 'https://www.gold-tw.com/blog/real-time-gold-price-today-2026',
              },
            ],
          }),
        }}
      />

      <article>
        <h1>今日即時金價2026｜台灣一錢、一兩黃金報價即時更新</h1>

        <p>
          要查今日金價，直接看數字最快。以下是2026年4月初的台灣市場參考行情，
          每個工作日更新。<strong>實際交易前，請再向店家確認當日報價——金價每天變動，
          表格僅供參考。</strong>
        </p>

        <h2>2026年4月今日金價參考（台制）</h2>

        <table style={{ width: '100%', borderCollapse: 'collapse', margin: '1.5rem 0' }}>
          <thead>
            <tr style={{ background: '#f5f0e8' }}>
              <th style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'left' }}>單位</th>
              <th style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>銀樓賣出價（參考）</th>
              <th style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>銀樓買入（回收）價（參考）</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>1錢（3.75克）</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>18,200–19,000 元</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>17,700–18,500 元</td>
            </tr>
            <tr style={{ background: '#fafafa' }}>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>5錢（18.75克）</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>91,000–95,000 元</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>88,500–92,500 元</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>1兩（37.5克）</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>182,000–190,000 元</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>177,000–185,000 元</td>
            </tr>
            <tr style={{ background: '#fafafa' }}>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>1克（散金換算）</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>4,850–5,070 元</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>4,720–4,930 元</td>
            </tr>
          </tbody>
        </table>

        <p>
          以上是9999純金（24K）的參考報價。K金（18K、14K）的回收計算方式不同，
          請參考<a href="/blog/k-gold-recovery-price-2026">K金回收價格計算說明</a>。
        </p>

        <h2>台灣即時金價怎麼查？3個來源</h2>
        <p>
          <strong>1. 台灣銀樓公會牌告金價</strong>（最直接）
          每個工作日更新一錢/一兩的買入和賣出牌告價，是全台銀樓的參考基準。
          不同店家的實際報價可能略有不同，但偏差通常在100元/錢以內。
        </p>
        <p>
          <strong>2. 國際金價換算</strong>（追蹤最及時）
          國際金價用美元/盎司計算，交易所（COMEX、倫敦金）24小時報價。
          換算公式：台灣每克金價（台幣）= 國際金價（美元/盎司）× 匯率 ÷ 31.1
          換算成一錢再乘3.75。
        </p>
        <p>
          <strong>3. 直接問銀樓</strong>（最準確）
          打電話或LINE問當日買入價，不超過30秒。
          要賣黃金前這一步不能省——即使你知道牌告價，
          個別店家的報價還是可能差100–300元/錢。
        </p>

        <h2>2026年金價走勢：你需要知道的背景</h2>
        <p>
          2026年初至今，黃金維持在歷史相對高位。主要驅動因素包括：
          美聯準會降息預期、地緣政治緊張、各國央行持續增加黃金儲備。
        </p>
        <p>
          對一般消費者的意思是：現在賣黃金是好時機（高金價），
          但買黃金短期追高有風險。長期持有（3–5年）的話，任何時間點分批買入都是合理策略。
        </p>

        <h2>一錢換算成克：常用的換算表</h2>

        <table style={{ width: '100%', borderCollapse: 'collapse', margin: '1.5rem 0' }}>
          <thead>
            <tr style={{ background: '#f5f0e8' }}>
              <th style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'left' }}>台制重量</th>
              <th style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>等於幾克</th>
              <th style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>等於幾盎司（troy oz）</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>1分（0.1錢）</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>0.375 克</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>0.012 oz</td>
            </tr>
            <tr style={{ background: '#fafafa' }}>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>5分（0.5錢）</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>1.875 克</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>0.060 oz</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>1錢</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>3.75 克</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>0.121 oz</td>
            </tr>
            <tr style={{ background: '#fafafa' }}>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>5錢</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>18.75 克</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>0.603 oz</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>1兩（10錢）</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>37.5 克</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>1.206 oz</td>
            </tr>
          </tbody>
        </table>

        <h2>今日想賣黃金？直接報價最快</h2>
        <p>
          不用等銀樓開門再跑一趟。巧品珠寶提供LINE即時詢價：
          告訴我們你有幾錢、是純金還是K金，我們報今日回收參考價。
        </p>
        <p>
          電話：<strong>0986-821-626</strong>｜LINE：隨時留言
          地址：台北市大安區（請電洽確認）
          到店服務：XRF驗成色、不扣耗損、當場現金
        </p>

        <h2>常見問題</h2>
        {faqs.map((f, i) => (
          <div key={i} style={{ marginBottom: '1.5rem' }}>
            <h3>{f.q}</h3>
            <p>{f.a}</p>
          </div>
        ))}

        <h2>延伸閱讀</h2>
        <ul>
          <li>
            <a href="/blog/taiwan-gold-price-daily-2026">2026台灣每日黃金行情彙整｜一錢、一兩歷史報價</a>
          </li>
          <li>
            <a href="/blog/gold-price-per-liang-today-2026">今日黃金一兩多少錢？2026年台灣最新報價</a>
          </li>
          <li>
            <a href="/blog/gold-calculator">黃金重量換算計算機｜錢、兩、克、盎司互換</a>
          </li>
          <li>
            <a href="/blog/factors-affecting-gold-price">影響金價的5大因素｜為什麼黃金價格每天都不同？</a>
          </li>
        </ul>
      </article>
    </>
  )
}
