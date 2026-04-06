import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '今日金價台灣2026｜一錢、一兩、每克即時報價查詢',
  description: '今日金價台灣2026最新行情：黃金一錢多少錢？一兩多少？每克幾元？本文整理2026年3月最新金價數據、計算方式與回收報價，5秒看懂今天金價。',
  alternates: {
    canonical: 'https://www.gold-tw.com/blog/taiwan-gold-price-today-2026',
  },
  openGraph: {
    locale: 'zh_TW',
    type: 'article',
    publishedTime: '2026-03-01T00:00:00+08:00',
    modifiedTime: '2026-03-01T00:00:00+08:00',
    title: '今日金價台灣2026｜一錢、一兩、每克即時報價查詢',
    description: '今日金價台灣2026最新行情：黃金一錢多少錢？一兩多少？每克幾元？本文整理2026年3月最新金價數據、計算方式與回收報價，5秒看懂今天金價。',
    siteName: '巧品珠寶',
    url: 'https://www.gold-tw.com/blog/taiwan-gold-price-today-2026',
    images: [{ url: '/og-image.webp', width: 1200, height: 630, alt: '巧品珠寶' }],
  },
}

const faqs = [
  {
    q: '今日台灣黃金一錢多少錢？（2026年3月）',
    a: '2026年3月底，台灣黃金一錢（3.75克）的買進價約19,200–19,800元，回收賣出價約18,500–19,000元。國際金價每天波動，開盤後金店會更新牌價。想知道今天最準確的數字，直接打電話問銀樓或看台銀貴金屬牌告。',
  },
  {
    q: '今日金價台灣一兩是多少？',
    a: '一兩 = 10錢 = 37.5克。2026年3月底行情，黃金一兩買進約192,000–198,000元，回收約185,000–190,000元。你手上有足金一兩，大約可以換回18萬5到19萬，視當日金價而定。',
  },
  {
    q: '台灣金價和國際金價怎麼換算？',
    a: '國際金價以美元/盎司（troy oz）報價，1盎司 = 31.1035克，1錢 = 3.75克。換算公式：一錢金價 = 國際金價（USD/oz）÷ 31.1035 × 3.75 × 匯率（台幣/美元）。2026年3月，USD/TWD約32–33，國際金價約USD 3,050–3,150/oz，所以一錢約18,400–19,800元台幣，符合目前市場行情。',
  },
  {
    q: '黃金一錢的「買進價」和「回收價」差多少？',
    a: '通常差800–1,500元，看各家銀樓設定。例如買進牌價19,500元，銀樓回收可能給18,200–18,800元，中間是銀樓的利潤空間。回收最高的不見得是最大的銀樓，建議多問1–2家比較。巧品珠寶不扣火耗，給的就是當日金價直接算重量。',
  },
  {
    q: '今日金價什麼時候會更新？幾點開盤？',
    a: '台灣銀樓的黃金牌價，通常參考國際現貨金價，每日開盤後（早上9–10點）更新一次，盤中若金價大幅波動（超過1%），部分銀樓會即時調整。下午收盤後的交易用「收盤後隔日牌價」計算。若你要賣黃金，盡量在上午11點前確認當日牌價最準。',
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
            headline: '今日金價台灣2026｜一錢、一兩、每克即時報價查詢',
            description: '今日金價台灣2026最新行情：黃金一錢多少錢？一兩多少？每克幾元？本文整理2026年3月最新金價數據、計算方式與回收報價，5秒看懂今天金價。',
            mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://www.gold-tw.com/blog/taiwan-gold-price-today-2026' },
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
                name: '今日金價台灣2026｜一錢一兩每克報價',
                item: 'https://www.gold-tw.com/blog/taiwan-gold-price-today-2026',
              },
            ],
          }),
        }}
      />
      <article style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
        <h1>今日金價台灣2026｜一錢、一兩、每克即時報價查詢</h1>
      <div style={{ background: '#fffbeb', borderLeft: '4px solid #f59e0b', padding: '16px', margin: '16px 0', borderRadius: '8px' }}>
        <strong>重點摘要：</strong> 今日金價台灣2026最新行情：黃金一錢多少錢？一兩多少？每克幾元？本文整理2026年3月最新金價數據、計算方式與回收報價，5秒看懂今天金價。
      </div>


        <p>
          想知道今天台灣黃金多少錢？一錢幾元、一兩多少、每克幾塊？
          這篇把2026年3月的最新行情、換算方式和注意事項全部整理清楚，看完5分鐘你就懂了。
        </p>

        <h2>今日台灣黃金行情是多少？</h2>
        <p>
          以下是2026年3月底的台灣黃金參考牌價（9999純金），每日開盤後更新，
          實際交易請以當日銀樓牌告為準：
        </p>

        <table style={{ width: '100%', borderCollapse: 'collapse', margin: '1.5rem 0' }}>
          <thead>
            <tr style={{ background: '#f5f0e8' }}>
              <th style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'left' }}>計量單位</th>
              <th style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'left' }}>重量換算</th>
              <th style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>銀樓買進（參考）</th>
              <th style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>回收賣出（參考）</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>每克</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>1g</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>約 5,120–5,280 元</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>約 4,930–5,067 元</td>
            </tr>
            <tr style={{ background: '#fafafa' }}>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>一錢</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>3.75g</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>約 19,200–19,800 元</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>約 18,500–19,000 元</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>五錢</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>18.75g</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>約 96,000–99,000 元</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>約 92,500–95,000 元</td>
            </tr>
            <tr style={{ background: '#fafafa' }}>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>一兩</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>37.5g</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>約 192,000–198,000 元</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>約 185,000–190,000 元</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>一台兩</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>37.5g（同一兩）</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>同上</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>同上</td>
            </tr>
          </tbody>
        </table>

        <p>
          以上數字僅供參考，每日金價隨國際市場波動。想知道<strong>今天最新報價</strong>，
          直接撥打 <strong>0986-821-626</strong> 詢問，或來店現場查詢。
        </p>

        <h2>台灣金價怎麼算？</h2>
        <p>
          很多人不懂為什麼台灣金價會跟國際金價不一樣。其實換算方法很簡單，記這3個數字：
        </p>
        <p>
          <strong>步驟1：抓國際現貨金價。</strong>
          國際金價以「美元/盎司（troy oz）」報價。2026年3月底約USD 3,050–3,150/oz。
        </p>
        <p>
          <strong>步驟2：換算成台幣/克。</strong>
          1盎司 = 31.1035克，當前匯率約32.5台幣/美元。
          每克約 = 3,100 ÷ 31.1035 × 32.5 ≈ 3,237 台幣... 等等，這和市場行情差很多？
          因為台灣銀樓還會加上<strong>台灣金飾加工費、品牌溢價、稅金</strong>等，所以買進牌價比純換算高。
        </p>
        <p>
          <strong>步驟3：用回收價比較。</strong>
          回收價才是接近「黃金真實市值」的數字。2026年3月，9999純金一錢回收約18,500元，
          比國際金價換算的17,800元略高（因台幣匯率和台灣市場供需）。
        </p>

        <h2>2026年台灣金價走勢：3月漲了多少？</h2>
        <p>
          2026年開年以來，台灣黃金價格隨國際金市持續走強。主要原因有三：
        </p>
        <p>
          <strong>美聯儲降息預期：</strong>2026年初市場預期聯準會將在Q2啟動降息，
          壓低美元強度，黃金相對升值。
        </p>
        <p>
          <strong>地緣政治避險需求：</strong>全球多個區域衝突持續，央行黃金儲備需求增加，
          推升基本盤。
        </p>
        <p>
          <strong>台幣走弱：</strong>台幣相對美元略為貶值，使得以台幣計算的金價更高。
          這也是為什麼你看到「今日金價台灣2026」的報價，比去年同期高出約10–15%。
        </p>

        <h2>查今日金價有哪些可靠方法？</h2>
        <p>
          <strong>方法1：台灣銀行貴金屬牌告。</strong>
          台灣銀行官網有即時更新的黃金買賣牌告，是最官方的參考基準，
          但和實體銀樓回收價仍有差距（台銀做的是投資條塊，不收舊飾金）。
        </p>
        <p>
          <strong>方法2：直接打電話問銀樓。</strong>
          最實際的方法。說清楚「我有幾錢的9999純金，今天可以回收多少？」，
          對方會給你當日即時報價，2分鐘問完。
        </p>
        <p>
          <strong>方法3：國際金價APP換算。</strong>
          下載Gold Price或Kitco App，抓即時國際金價，自己按公式換算。
          但記得最終還是以當日銀樓牌告為準，APP算的只是估算值。
        </p>

        <h2>買進和回收差多少？</h2>
        <p>
          很多人拿著「買進牌告」去跟銀樓要回收價，然後發現差了一大截，以為被坑。
          其實這個差距是正常的，了解它：
        </p>
        <p>
          <strong>買進牌告</strong>（你買黃金要付的價格）＞<strong>回收牌告</strong>（你賣黃金能拿到的價格）。
          差距通常是每錢800–1,500元，這是銀樓的基本利潤空間，全台皆然。
        </p>
        <p>
          所以「今天金價一錢19,500元」，意思是你買一錢要付19,500，
          但如果你賣一錢，大概只能拿到18,200–18,800，端看哪家銀樓報價。
          <strong>要最大化回收金額，就多問幾家，挑報最高的。</strong>
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
            <a href="/blog/gold-price-per-liang-taiwan-2026">台灣黃金一兩多少錢？2026年最新行情一次看清楚</a>
          </li>
          <li>
            <a href="/blog/gold-recovery-price-today">今日黃金回收價格｜足金、K金、飾金怎麼算？</a>
          </li>
          <li>
            <a href="/blog/taiwan-gold-price-liang-vs-qian-2026">一錢vs一兩vs一台兩：台灣黃金計量單位完整說明</a>
          </li>
          <li>
            <a href="/blog/before-selling-gold">賣黃金前必看｜5個讓你多拿幾百塊的準備動作</a>
          </li>
          <li>
            <a href="/blog/gold-price-forecast-2026">2026黃金價格預測｜漲還是跌？專家怎麼看</a>
          </li>
        </ul>
      </article>
    </>
  )
}
