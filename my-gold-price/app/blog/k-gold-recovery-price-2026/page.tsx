import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'K金回收價格2026｜18K、14K、10K今日行情＋計算公式完整版',
  description: '2026年K金回收行情整理：18K回收每錢多少？14K、10K怎麼算？硬度對回收有沒有影響？巧品珠寶儀器驗成色，不扣耗損，當場報價現金。電洽0986-821-626。 台北巧品珠寶鑑定師L親自鑑定，10年以上珠寶鑑定資歷，透明報價不扣耗損，台北大安區濟南路三段62-1號，提供免費估價與諮詢服務。',
  alternates: {
    canonical: 'https://www.gold-tw.com/blog/k-gold-recovery-price-2026',
  },
  openGraph: {
    locale: 'zh_TW',
    type: 'article',
    publishedTime: '2026-03-01T00:00:00+08:00',
    modifiedTime: '2026-03-01T00:00:00+08:00',
    title: 'K金回收價格2026｜18K、14K、10K今日行情＋計算公式完整版',
    description: '2026年K金回收行情整理：18K回收每錢多少？14K、10K怎麼算？硬度對回收有沒有影響？巧品珠寶儀器驗成色，不扣耗損，當場報價現金。電洽0986-821-626。',
    siteName: '巧品珠寶',
    url: 'https://www.gold-tw.com/blog/k-gold-recovery-price-2026',
    images: [{ url: '/og-image.webp', width: 1200, height: 630, alt: '巧品珠寶' }],
  },
}

const faqs = [
  {
    q: '2026年18K金回收價格大概多少？',
    a: '2026年3月底，18K金（含金量75%）每錢回收行情約 12,800–13,900 元（依當日9999純金報價 × 75% 計算）。計算基準：若9999金當日報 17,800 元/錢，18K回收約 13,350 元/錢。建議電洽巧品珠寶獲得當日即時數字。',
  },
  {
    q: '14K和10K金回收，含金量怎麼算？',
    a: '14K含金量 58.5%，10K含金量 41.7%。以9999金當日報 17,800 元/錢為例：14K約 10,413 元/錢，10K約 7,424 元/錢。K數越低，含金量越低，回收價越低，但不代表沒有回收價值。',
  },
  {
    q: 'K金硬度對回收價格有影響嗎？',
    a: '硬度本身不影響回收價。K金的硬度來自合金成分（如銅、銀、鈀），回收時主要看含金量（K數）。18K比9999硬，但回收依然按75%含金量計算，不會因為「比較硬」就多給錢或少給錢。',
  },
  {
    q: 'K金飾品上標的「750」「585」是什麼意思？',
    a: '這是歐洲標示法：750表示含金量750/1000 ＝ 75% ＝ 18K；585表示 58.5% ＝ 14K；417表示 41.7% ＝ 10K。台灣部分進口首飾用這種標法，和K數是同一件事，別誤會標了「750」就是9999純金。',
  },
  {
    q: '白K金和玫瑰金，回收時怎麼算？',
    a: '白K金（White Gold）通常是18K或14K，含金量與黃K金相同，回收計算方式一樣。玫瑰金（Rose Gold）也是K金，顏色來自銅的比例，含金量看K數決定。重點：不管顏色是白是黃是玫瑰，看K數，不看顏色。',
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
            headline: 'K金回收價格2026｜18K、14K、10K今日行情＋計算公式完整版',
            description: '2026年K金回收行情整理：18K回收每錢多少？14K、10K怎麼算？硬度對回收有沒有影響？巧品珠寶儀器驗成色，不扣耗損，當場報價現金。電洽0986-821-626。',
            mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://www.gold-tw.com/blog/k-gold-recovery-price-2026' },
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
                name: 'K金回收價格2026',
                item: 'https://www.gold-tw.com/blog/k-gold-recovery-price-2026',
              },
            ],
          }),
        }}
      />
      <article style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
        <h1>K金回收價格2026｜18K、14K、10K今日行情＋計算公式完整版</h1>
      <div style={{ background: '#fffbeb', borderLeft: '4px solid #f59e0b', padding: '16px', margin: '16px 0', borderRadius: '8px' }}>
        <strong>重點摘要：</strong> 2026年K金回收行情整理：18K回收每錢多少？14K、10K怎麼算？硬度對回收有沒有影響？巧品珠寶儀器驗成色，不扣耗損，當場報價現金。電洽0986-821-626。
      </div>


        <p>
          K金回收最常遇到兩個問題：「這個到底是幾K？」和「幾K可以回收多少錢？」
          這篇把2026年K金回收的計算邏輯、各K數行情、常見疑問全部講清楚。
        </p>

        <h2>K金是什麼？K數和含金量的關係</h2>
        <p>
          「K」來自德文 Karat，代表黃金純度的單位。純金是 24K，
          含金量 100%（實際上為 99.9%以上）。
          K數越低，含金量越低，其餘成分由銅、銀、鈀等金屬填充。
        </p>
        <p>
          計算公式很直接：<strong>含金量 ＝ K數 ÷ 24</strong>
        </p>
        <p>
          18K ÷ 24 ＝ 75%；14K ÷ 24 ≈ 58.5%；10K ÷ 24 ≈ 41.7%。
          這個比例直接決定了回收價格。
        </p>

        <h2>2026年K金回收價格怎麼換算？</h2>
        <p>
          以下依2026年3月底參考行情計算（9999純金約 17,500–18,000 元/錢）：
        </p>

        <table style={{ width: '100%', borderCollapse: 'collapse', margin: '1.5rem 0' }}>
          <thead>
            <tr style={{ background: '#f5f0e8' }}>
              <th style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'left' }}>K金種類</th>
              <th style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>含金量</th>
              <th style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>歐洲印記</th>
              <th style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>每錢回收參考價</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>9999純金</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>99.9%</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>999</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>17,500–18,000 元</td>
            </tr>
            <tr style={{ background: '#fafafa' }}>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>22K金</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>91.7%</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>917</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>約 16,000–16,500 元</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>18K金（黃/白/玫瑰）</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>75%</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>750</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>約 13,100–13,500 元</td>
            </tr>
            <tr style={{ background: '#fafafa' }}>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>14K金</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>58.5%</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>585</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>約 10,200–10,500 元</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>10K金</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>41.7%</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>417</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>約 7,200–7,500 元</td>
            </tr>
          </tbody>
        </table>

        <p>
          實際報價以當日牌價為準，電洽 <strong>0986-821-626</strong> 或 LINE 巧品珠寶確認即時數字。
        </p>

        <h2>K金硬度和回收有什麼關係？</h2>
        <p>
          很多人問：「K金比純金硬，回收時需要另外處理費嗎？」
        </p>
        <p>
          答案是：<strong>不需要，硬度不影響回收報價。</strong>
          K金硬度來自合金成分（18K通常加銅和銀），熔煉提純是回收廠的事，
          不是你要負擔的成本。報價就是含金量 × 當日純金價，
          沒有額外「硬度處理費」這種說法，遇到有店家這樣說，直接走人。
        </p>

        <h2>K金回收前要搞清楚哪些問題？</h2>
        <p>
          <strong>問題一：確認K數。</strong>
          飾品上通常有印記：750＝18K、585＝14K、417＝10K。
          沒有印記的飾品，可以用 XRF 儀器現場測，幾秒鐘出結果，不用猜。
        </p>
        <p>
          <strong>問題二：有沒有鑲嵌寶石？</strong>
          如果飾品上有鑽石或彩寶，回收前通常要拆下來，
          或者整件估價（寶石可能另外有回收價值）。
        </p>
        <p>
          <strong>問題三：店家有沒有扣耗損？</strong>
          K金不是不能扣，但好的店家不扣。
          如果報價說有扣 3–5%，換算下來一錢少幾百，幾件飾品就差了上千塊。
        </p>

        <h2>巧品怎麼收K金</h2>
        <p>
          14K、18K、10K、Pt900（白金）我們都收。
          流程：XRF 儀器現場量成色 → 秤重讓你盯著看 →
          按含金量乘以當日牌價 → 不扣耗損 → 當場現金。
        </p>
        <p>
          不用先解鑲，不用預約，帶著K金來門市，
          當場出數字，你決定要不要賣。
          台北大安，電話 <strong>0986-821-626</strong>。
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
            <a href="/blog/karat-gold-recovery">K金回收2026｜18K/14K/10K計算公式完整指南</a>
          </li>
          <li>
            <a href="/blog/gold-vs-k-gold-difference">黃金和K金的差異｜純金、K金、鍍金一次搞懂</a>
          </li>
          <li>
            <a href="/blog/gold-purity">黃金純度大解析｜9999、9958、18K含金量換算</a>
          </li>
          <li>
            <a href="/blog/today-gold-sell-price-per-qian-2026">今日金價一錢賣出2026｜報價邏輯與避坑指南</a>
          </li>
        </ul>
      </article>
    </>
  )
}
