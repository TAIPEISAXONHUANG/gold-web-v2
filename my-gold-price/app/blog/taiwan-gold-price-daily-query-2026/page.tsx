import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '今日黃金價格台灣2026｜每日報價查詢、漲跌原因與回收建議',
  description: '今日黃金價格台灣2026：每日更新的黃金報價、漲跌分析、一錢一兩換算，以及黃金回收最佳時機判斷。看這一篇就夠了。',
  alternates: {
    canonical: 'https://www.gold-tw.com/blog/taiwan-gold-price-daily-query-2026',
  },
}

const faqs = [
  {
    q: '今日黃金價格在哪裡查最準確？',
    a: '台灣查黃金價格最可靠的3個來源：①台灣銀行貴金屬牌告（官方基準，每日開盤後更新）②直接打電話問銀樓（最貼近回收行情）③金融資訊App如Kitco、Gold Price Live（國際即時行情，需自行換算台幣）。要「賣黃金」，就看銀樓報價；要「了解金市」，就看台銀+國際App。',
  },
  {
    q: '台灣黃金價格2026年為何持續高位？',
    a: '2026年台灣金價高位的主要原因：①美聯儲降息周期啟動，美元走弱支撐金價②全球地緣政治不確定性持續，避險需求旺盛③台幣相對美元小幅貶值，使台幣計價金價更高④亞洲央行（包括中國人民銀行）持續增加黃金儲備，推升需求基本盤。這些因素短期不容易消退，黃金維持高位的結構性因素仍在。',
  },
  {
    q: '今天黃金漲了，我應該現在賣還是等？',
    a: '這個問題沒有標準答案，但有個實務原則：如果你今天賣掉，用這筆錢能做比金價漲幅更好的事，就賣；如果你只是想「等更高」，那等的時間成本也要算進去。黃金沒有股息、不生利息。一般來說，手上有不需要的黃金飾品，趁高位賣掉換現金，是合理的決定。不要等到「最高點」，那是不可能預測的。',
  },
  {
    q: '黃金價格一天內會波動嗎？賣黃金要選什麼時間？',
    a: '會。國際黃金現貨市場24小時交易，台灣銀樓通常在開盤後更新一次牌價，盤中若金價大幅波動（1%以上）可能再調整。建議：①上午10點後、下午3點前是台灣銀樓最活躍的交易時段②如果你有超過5錢的黃金要賣，先電話確認當日牌價再出發③不需要等「完美時機」，賣出當天的價格就是你的價格，多猶豫一天也可能跌回去。',
  },
  {
    q: '今日黃金回收價和買進價差多少，正常嗎？',
    a: '正常。2026年3月，台灣黃金買賣差距每錢約800–1,500元，這是銀樓的合理利潤空間。例如今日買進牌告19,500元/錢，回收給你的大約是18,200–18,800元/錢。如果差距超過2,000元，或者銀樓報價比台銀牌告低了很多，就值得多問幾家比較。比價是你的權利，正規銀樓不會因此不報價。',
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
            headline: '今日黃金價格台灣2026｜每日報價查詢、漲跌原因與回收建議',
            description: '今日黃金價格台灣2026：每日更新的黃金報價、漲跌分析、一錢一兩換算，以及黃金回收最佳時機判斷。看這一篇就夠了。',
            mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://www.gold-tw.com/blog/taiwan-gold-price-daily-query-2026' },
            author: { '@type': 'Organization', name: '巧品珠寶', url: 'https://www.gold-tw.com' },
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
                name: '今日黃金價格台灣2026',
                item: 'https://www.gold-tw.com/blog/taiwan-gold-price-daily-query-2026',
              },
            ],
          }),
        }}
      />
      <article style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
        <h1>今日黃金價格台灣2026｜每日報價查詢、漲跌原因與回收建議</h1>

        <p>
          今天台灣黃金多少錢？2026年黃金一路漲，很多人手上有老飾金、金條、金幣，
          想知道現在賣划不划算。這篇把今日黃金價格的查詢方式、影響漲跌的關鍵因素、
          以及黃金回收的實務建議全部說清楚。
        </p>

        <h2>今日台灣黃金價格（2026年3月底參考）是多少？</h2>
        <p>以下為2026年3月底9999純金參考行情，每日開盤後更新：</p>

        <table style={{ width: '100%', borderCollapse: 'collapse', margin: '1.5rem 0' }}>
          <thead>
            <tr style={{ background: '#f5f0e8' }}>
              <th style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'left' }}>日期</th>
              <th style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>買進（元/錢）</th>
              <th style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>回收（元/錢）</th>
              <th style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>漲跌</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>2026/03/31</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>19,700</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>18,900</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right', color: '#cc4400' }}>▲ +150</td>
            </tr>
            <tr style={{ background: '#fafafa' }}>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>2026/03/30</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>19,550</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>18,750</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right', color: '#cc4400' }}>▲ +200</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>2026/03/29</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>19,350</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>18,550</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right', color: '#336600' }}>▼ -100</td>
            </tr>
            <tr style={{ background: '#fafafa' }}>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>2026/03/28</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>19,450</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>18,650</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right', color: '#cc4400' }}>▲ +300</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>2026/03/27</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>19,150</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>18,350</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right', color: '#cc4400' }}>▲ +250</td>
            </tr>
          </tbody>
        </table>

        <p>
          以上為參考數據，實際成交價以各銀樓當日牌告為準。
          查詢最新今日金價，直接電洽 <strong>0986-821-626</strong>，或來店現場確認。
        </p>

        <h2>2026年台灣黃金為什麼這麼貴？5個關鍵因素</h2>
        <p>
          2026年初到3月，台灣黃金一錢從約17,500元漲到19,700元，漲幅超過12%。主要原因：
        </p>
        <p>
          <strong>① 美聯儲降息週期：</strong>
          美國從2025年底開始降息，美元指數下滑，黃金以美元計價，美元弱=金價強，這是最直接的推力。
        </p>
        <p>
          <strong>② 全球避險需求：</strong>
          中東、東歐地區衝突持續，加上貿易政策不確定性，資金持續流向黃金避險。
        </p>
        <p>
          <strong>③ 央行大量購金：</strong>
          中國、印度、土耳其等央行2025–2026年大量增加黃金儲備，推升需求基本盤。
        </p>
        <p>
          <strong>④ 台幣匯率影響：</strong>
          台幣兌美元從2025年底的31.5貶至2026年3月的32.5左右，
          使得台幣計算的金價「被動上漲」了約3%。
        </p>
        <p>
          <strong>⑤ 通膨黏性：</strong>
          全球通膨雖然回落，但核心通膨仍超過央行目標，黃金作為抗通膨資產的吸引力持續。
        </p>

        <h2>今日黃金報價：你需要知道的3種價格是多少？</h2>
        <p>
          「黃金價格」其實有3種，搞混了就容易計算錯誤：
        </p>
        <p>
          <strong>1. 國際現貨金價：</strong>以USD/troy oz報價，24小時波動。
          這是全球基準，台灣所有銀樓的牌價都參考這個。
        </p>
        <p>
          <strong>2. 銀樓買進牌告：</strong>你「買黃金」要付的價格，
          含台灣市場加成（加工費、品牌、稅等），通常比純換算高5–10%。
        </p>
        <p>
          <strong>3. 回收/賣出報價：</strong>你「賣黃金給銀樓」可以拿到的錢，
          這才是你真正能入袋的金額，比買進牌告低800–1,500元/錢。
        </p>
        <p>
          如果你要賣黃金，關注的是「回收報價」，不是「買進牌告」。
          兩者差距約4–8%，搞清楚再談判。
        </p>

        <h2>回收建議：2026年高金價下，現在是賣的好時機嗎？</h2>
        <p>
          從純粹的數字來看：<strong>是的。</strong>
          2026年3月的台灣黃金回收價，是近年來的相對高位。
          如果你手上有長年沒在戴的金飾、老金條、婚戒等，這個時間點賣掉，實際回收金額都比2023、2024年高出很多。
        </p>
        <p>
          當然，沒有人知道金價會不會繼續漲。但等待的成本是真實的——
          黃金放在抽屜裡不生利息，而你現在賣掉的錢，可以做別的配置。
        </p>
        <p>
          <strong>實務建議：</strong>
          現在回收一錢，大約可拿到18,900元。一年前大約是16,500元。
          多了2,400元/錢，就算再漲，漲幅也未必大於你把這筆錢做定存或其他配置的收益。
          <strong>不需要追最高點，抓到相對高位就是好決定。</strong>
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
            <a href="/blog/taiwan-gold-price-today-2026">今日金價台灣2026｜一錢、一兩、每克報價查詢</a>
          </li>
          <li>
            <a href="/blog/gold-price-forecast-2026">2026黃金價格預測：漲到多少？專家怎麼看</a>
          </li>
          <li>
            <a href="/blog/gold-recovery-price-today">今日黃金回收價｜足金、K金、飾金怎麼算</a>
          </li>
          <li>
            <a href="/blog/sell-gold-tips">賣黃金技巧：怎麼讓回收金額最大化？</a>
          </li>
          <li>
            <a href="/blog/gold-price-per-qian-buy-vs-sell">黃金買進價 vs 回收價：差距這麼大，正常嗎？</a>
          </li>
        </ul>
      </article>
    </>
  )
}
