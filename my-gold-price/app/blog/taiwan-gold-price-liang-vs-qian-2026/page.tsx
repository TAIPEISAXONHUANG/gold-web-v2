import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '台灣黃金一兩價格2026｜一兩等於幾錢幾克？換算表＋今日行情',
  description: '2026年台灣黃金一兩價格多少？1兩＝10錢＝37.5克，今日行情、換算公式、與「一錢」的差異全部一次說清楚。巧品珠寶不扣耗損，透明報價，當場現金。',
  alternates: {
    canonical: 'https://www.gold-tw.com/blog/taiwan-gold-price-liang-vs-qian-2026',
  },
  openGraph: {
    type: 'article',
    publishedTime: '2026-03-01T00:00:00+08:00',
    modifiedTime: '2026-03-01T00:00:00+08:00',
    title: '台灣黃金一兩價格2026｜一兩等於幾錢幾克？換算表＋今日行情',
    description: '2026年台灣黃金一兩價格多少？1兩＝10錢＝37.5克，今日行情、換算公式、與「一錢」的差異全部一次說清楚。巧品珠寶不扣耗損，透明報價，當場現金。',
    type: 'article',
    siteName: '巧品珠寶',
  },
}

const faqs = [
  {
    q: '2026年台灣黃金一兩價格大概多少？',
    a: '2026年3月底，台灣9999純金一兩（37.5克）的回收行情約 172,000–185,000 元之間（約等於一錢行情 × 10）。每日隨國際金價和台幣匯率浮動，要拿最新報價請直接電洽巧品珠寶 0986-821-626。',
  },
  {
    q: '台灣黃金「一兩」等於多少克？多少錢？',
    a: '台灣慣用的「台兩」：1兩＝10錢＝37.5克。不要和「公兩」（100克）搞混——兩個是完全不同的單位。黃金交易習慣用台兩，市場報價說的「一兩」都是指37.5克。',
  },
  {
    q: '「一兩黃金」和「一錢黃金」差多少錢？',
    a: '剛好差 10 倍。一錢＝3.75克，一兩＝37.5克。如果今日一錢回收價是 17,500 元，那一兩就是 175,000 元。計算公式：一兩報價 ＝ 一錢報價 × 10。',
  },
  {
    q: '黃金飾品賣出，店家報的是「一兩」還是「一錢」？',
    a: '台灣市場大多以「一錢」為單位報價，因為一般飾品量不大，用一錢更直觀。但批量金條、金塊有時會用一兩報。換算時記得：一兩＝10錢，別搞錯了乘法方向。',
  },
  {
    q: '帶一兩黃金去回收，流程跟帶一錢一樣嗎？',
    a: '完全一樣。不管量多量少，巧品珠寶的流程都是：現場秤重（你盯著看）→ XRF儀器驗成色 → 當日牌價計算 → 當場現金。量大的話報價有可能更優，建議先電話確認當日行情。',
  },
]

// lastModified: 2026-03-19
export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: '台灣黃金一兩價格2026｜一兩等於幾錢幾克？換算表＋今日行情',
            description: '2026年台灣黃金一兩價格多少？1兩＝10錢＝37.5克，今日行情、換算公式、與「一錢」的差異全部一次說清楚。巧品珠寶不扣耗損，透明報價，當場現金。',
            mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://www.gold-tw.com/blog/taiwan-gold-price-liang-vs-qian-2026' },
            author: { '@type': 'Person', name: '鑑定師L', url: 'https://www.gold-tw.com' },
            publisher: { '@type': 'Organization', name: '巧品珠寶', url: 'https://www.gold-tw.com' },
            datePublished: '2026-03-01T00:00:00+08:00',
            dateModified: '2026-03-31T00:00:00+08:00',
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
              {
                '@type': 'ListItem',
                position: 3,
                name: '台灣黃金一兩價格2026',
                item: 'https://www.gold-tw.com/blog/taiwan-gold-price-liang-vs-qian-2026',
              },
            ],
          }),
        }}
      />
      <article style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
        <h1>台灣黃金一兩價格2026｜一兩等於幾錢幾克？換算表＋今日行情</h1>

        <p>
          「一兩黃金多少錢？」這個問題聽起來簡單，但台灣市場有兩個「兩」，
          搞錯了差距可以高達兩倍以上。
          這篇把台灣黃金一兩的定義、今日行情、和一錢的換算關係全部說清楚。
        </p>

        <h2>台灣黃金「一兩」是多少克？</h2>
        <p>
          台灣黃金市場用的是<strong>台兩</strong>，不是公兩。
          很多人以為「一兩」就是 100 克（公兩），這個誤解很常見，也很貴。
        </p>
        <p>
          <strong>台兩換算：1兩 ＝ 10錢 ＝ 37.5克</strong>
        </p>
        <p>
          公兩（香港部分地方習慣）＝ 100 克，是完全不同的系統。
          如果你在台灣賣黃金，報價說的「一兩」都是指 37.5 克。
        </p>

        <h2>台灣黃金重量怎麼換算？</h2>

        <table style={{ width: '100%', borderCollapse: 'collapse', margin: '1.5rem 0' }}>
          <thead>
            <tr style={{ background: '#f5f0e8' }}>
              <th style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'left' }}>台灣單位</th>
              <th style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>等於（克）</th>
              <th style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>2026年3月底參考回收價</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>1分（0.1錢）</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>0.375 克</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>約 1,700–1,850 元</td>
            </tr>
            <tr style={{ background: '#fafafa' }}>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>1錢</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>3.75 克</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>約 17,000–18,500 元</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>5錢</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>18.75 克</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>約 85,000–92,500 元</td>
            </tr>
            <tr style={{ background: '#fafafa' }}>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>1兩（10錢）</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>37.5 克</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>約 170,000–185,000 元</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>5兩</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>187.5 克</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>約 850,000–925,000 元</td>
            </tr>
          </tbody>
        </table>

        <p>
          以上為9999純金參考區間。實際報價以當日開盤牌價為準，
          電洽 <strong>0986-821-626</strong> 可拿當日即時數字。
        </p>

        <h2>2026年台灣黃金一兩為什麼這麼貴？</h2>
        <p>
          2026年初至今，國際金價持續位於歷史高位。
          主要原因有三：美聯儲降息預期支撐、全球央行持續增持黃金儲備、
          地緣政治緊張帶動避險需求。
        </p>
        <p>
          台幣相對穩定，沒有大幅貶值，所以台幣計價的金價漲幅大致跟國際同步。
          一兩黃金從 2023 年的 12 萬元區間，漲到 2026 年的 17–18 萬元，
          漲幅超過 40%。
        </p>

        <h2>賣一兩黃金前要確認哪三件事？</h2>
        <p>
          <strong>第一：確認純度。</strong>
          一兩黃金如果是 9999，報價最高。
          如果是 9958（港金）或飾品成色，報價會依實際含金量計算，
          不能直接用一兩 × 純金報價。
        </p>
        <p>
          <strong>第二：問清楚有沒有扣耗損。</strong>
          一兩的量，如果店家扣 5% 耗損，你就少拿 8,500–9,200 元。
          這個數字不小，問清楚是必要的。
        </p>
        <p>
          <strong>第三：報的是「一兩」還是「一錢」？</strong>
          別被報價單位搞混。一兩報 180,000 元，
          和一錢報 18,000 元是同一件事，確認清楚再比較。
        </p>

        <h2>巧品的做法</h2>
        <p>
          不管你帶來的是一錢還是一兩，巧品珠寶的流程都一樣：
          現場秤重讓你盯著看、XRF 儀器現場驗成色、
          不扣耗損報一個透明的數、當場現金不拖時間。
        </p>
        <p>
          台北大安巧品珠寶，電話 <strong>0986-821-626</strong>，
          帶著黃金來，當場出數字，你決定要不要賣。
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
            <a href="/blog/taiwan-gold-price-per-qian-today-2026">台灣今日金價每錢2026｜即時報價＋換算公式</a>
          </li>
          <li>
            <a href="/blog/today-gold-sell-price-per-qian-2026">今日金價一錢賣出2026｜報價邏輯與避坑指南</a>
          </li>
          <li>
            <a href="/blog/gold-weight">黃金重量單位全解析｜台兩、公克、英兩怎麼換算</a>
          </li>
          <li>
            <a href="/blog/gold-recovery-price-today-2026">今日黃金回收價2026｜各純度報價一次整理</a>
          </li>
        </ul>
      </article>
    </>
  )
}
