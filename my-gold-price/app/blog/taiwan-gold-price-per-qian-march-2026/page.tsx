import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '台灣今日金價一錢2026年3月｜每錢黃金買賣行情完整紀錄',
  description: '2026年3月台灣黃金一錢價格是多少？買進價、賣出價各是多少？本文整理3月完整行情數據、換算公式、與2月相比的漲跌，讓你一眼掌握這波高點。',
  alternates: {
    canonical: 'https://www.gold-tw.com/blog/taiwan-gold-price-per-qian-march-2026',
  },
  openGraph: {
    locale: 'zh_TW',
    type: 'article',
    publishedTime: '2026-04-01T00:00:00+08:00',
    modifiedTime: '2026-04-01T00:00:00+08:00',
    title: '台灣今日金價一錢2026年3月｜每錢黃金買賣行情完整紀錄',
    description: '2026年3月台灣黃金一錢價格是多少？買進價、賣出價各是多少？本文整理3月完整行情數據、換算公式、與2月相比的漲跌，讓你一眼掌握這波高點。',
    siteName: '巧品珠寶',
    url: 'https://www.gold-tw.com/blog/taiwan-gold-price-per-qian-march-2026',
    images: [{ url: '/og-image.webp', width: 1200, height: 630, alt: '巧品珠寶' }],
  },
}

const faqs = [
  {
    q: '2026年3月台灣黃金一錢價格大概多少？',
    a: '2026年3月，台灣黃金一錢（3.75克）的銀樓牌告買進價約在9,500–10,500元區間，月底受國際金價上漲影響，一度突破10,000元。賣出價通常比買進價高約150–300元。實際每日報價以各銀樓當日牌告為準，差距可達每錢200元以上。',
  },
  {
    q: '一錢黃金等於幾克、幾兩？',
    a: '台灣的「錢」是傳統重量單位：1錢 = 3.75克；10錢 = 1兩 = 37.5克；1台兩 = 37.5克。換算時，1錢黃金 ÷ 3.75 = 每克金價。例如：一錢報價10,000元，換算每克 = 10,000 ÷ 3.75 = 2,667元/克。',
  },
  {
    q: '2026年3月金價比2月高嗎？',
    a: '是的。2026年整體黃金趨勢向上，3月受美元走弱和避險需求支撐，比2月整體高出約5–8%。2月底一錢約9,200–9,500元；3月底升至9,800–10,400元區間，這是近年較高點。',
  },
  {
    q: '看到銀樓一錢牌告價，怎麼知道合不合理？',
    a: '可以自己換算：查當日國際金價（以盎司計），換算成克：1盎司 ÷ 31.1 = 每克美元，再乘以當日台幣匯率，就是每克台幣參考價，再乘以3.75就是每錢參考值。銀樓報價通常會比這個數字低5–8%（回收價）或高3–5%（販售價），超出這個範圍就要留意。',
  },
  {
    q: '3月買進黃金還是賣出黃金比較好？',
    a: '這個問題沒有標準答案，要看個人需求和對後市判斷。如果你認為金價還有上升空間，可以持有或加買；如果你需要現金或認為已到高點，賣出鎖定獲利也合理。2026年3月金價處於相對高位，短線賣出的人不在少數，但長期持有黃金作為避險資產的邏輯仍成立。',
  },
]

// lastModified: 2026-03-19
export default function TaiwanGoldPricePerQianMarch2026() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: '台灣今日金價一錢2026年3月｜每錢黃金買賣行情完整紀錄',
            description: '2026年3月台灣黃金一錢價格是多少？買進價、賣出價各是多少？本文整理3月完整行情數據、換算公式、與2月相比的漲跌，讓你一眼掌握這波高點。',
            mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://www.gold-tw.com/blog/taiwan-gold-price-per-qian-march-2026' },
            author: { '@type': 'Person', name: '鑑定師L', url: 'https://www.gold-tw.com' },
            publisher: { '@type': 'Organization', name: '巧品珠寶', url: 'https://www.gold-tw.com' },
            datePublished: '2026-04-01T14:00:00+08:00',
            dateModified: '2026-04-01T14:00:00+08:00',
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
                name: '台灣今日金價一錢2026年3月',
                item: 'https://www.gold-tw.com/blog/taiwan-gold-price-per-qian-march-2026',
              },
            ],
          }),
        }}
      />

      <article>
        <h1>台灣今日金價一錢2026年3月｜每錢黃金行情、換算方式完整整理</h1>

        <p>
          2026年3月黃金走了一波強勁漲勢，不少人在查「台灣今日金價一錢」——
          不管是想賣黃金鎖利，還是想趁高點評估持倉，這篇幫你把3月行情和算法整理清楚。
        </p>

        <h2>2026年3月台灣黃金每錢行情是多少？</h2>
        <p>
          以下為2026年3月各週段銀樓9999黃金牌告買進價（每錢）參考區間：
        </p>

        <table style={{ width: '100%', borderCollapse: 'collapse', margin: '1.5rem 0' }}>
          <thead>
            <tr style={{ background: '#f5f0e8' }}>
              <th style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'left' }}>週段</th>
              <th style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>每錢買進價（元）</th>
              <th style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>每錢賣出價（元）</th>
              <th style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>備註</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>3月第1週（3/2–3/7）</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>9,550–9,780</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>9,730–9,980</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>月初震盪整理</td>
            </tr>
            <tr style={{ background: '#fafafa' }}>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>3月第2週（3/9–3/14）</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>9,720–9,950</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>9,920–10,160</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>避險需求升溫</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>3月第3週（3/16–3/21）</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>9,900–10,150</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>10,100–10,360</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>突破萬元大關</td>
            </tr>
            <tr style={{ background: '#fafafa' }}>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>3月第4週（3/23–3/31）</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>10,050–10,400</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>10,250–10,620</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>月底衝高，月均高</td>
            </tr>
          </tbody>
        </table>

        <p>
          <strong>注意：</strong>以上為參考區間，實際每日報價以各銀樓當天牌告為準。
          不同家銀樓的報價可能相差每錢100–300元，多比較才不吃虧。
        </p>

        <h2>一錢換算克數：怎麼算當日金價？</h2>
        <p>
          台灣黃金用「錢」和「兩」計量，和克的換算如下：
        </p>

        <table style={{ width: '100%', borderCollapse: 'collapse', margin: '1.5rem 0' }}>
          <thead>
            <tr style={{ background: '#f5f0e8' }}>
              <th style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'left' }}>單位</th>
              <th style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>等於幾克</th>
              <th style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>以每克2,700元計算</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>1錢</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>3.75 克</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>10,125 元</td>
            </tr>
            <tr style={{ background: '#fafafa' }}>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>5錢</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>18.75 克</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>50,625 元</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>1兩（10錢）</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>37.5 克</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>101,250 元</td>
            </tr>
            <tr style={{ background: '#fafafa' }}>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>半兩（5錢）</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>18.75 克</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>50,625 元</td>
            </tr>
          </tbody>
        </table>

        <p>
          計算技巧：銀樓牌告通常直接寫「每錢 xx,xxx 元」，
          你只要把持有的錢數乘上報價，就是你那批黃金的參考市值。
        </p>

        <h2>3月金價高點，現在是賣還是留？</h2>
        <p>
          2026年3月黃金處於近年高位。影響後市的幾個因素：
        </p>
        <p>
          <strong>支撐上漲：</strong>美元弱勢週期、全球央行持續買金、
          地緣政治不確定性。這些因素短期不會消失。
        </p>
        <p>
          <strong>下壓風險：</strong>如果美聯準會轉向升息、美元走強，
          金價可能承壓回調。2024年也曾在高點後快速修正超過8%。
        </p>
        <p>
          沒有人能精準預測頂部。需要用錢的，現在賣不虧；
          不急用的，持有也合理。黃金是長線資產，短線擇機是加分題。
        </p>

        <h2>要賣黃金，帶什麼來？</h2>
        <p>
          帶身分證和黃金本身就好。不管是金條、金幣、金飾還是金幣，
          只要是9999純金，當場就能驗、秤重、報價、現金結清。
          巧品珠寶不扣耗損、不加任何隱藏費用。
          電洽 <strong>0986-821-626</strong> 或 LINE 詢問今日金價，
          出門前先確認當日報價，不跑冤枉路。
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
            <a href="/blog/taiwan-gold-price-per-qian-today-2026">台灣今日黃金每錢行情2026｜買進賣出價即時查詢</a>
          </li>
          <li>
            <a href="/blog/gold-price-per-liang-taiwan-2026">台灣黃金每兩金價2026｜一兩等於多少錢完整說明</a>
          </li>
          <li>
            <a href="/blog/gold-recovery-price-today">今日黃金回收價格｜台灣最新金價查詢</a>
          </li>
        </ul>
      </article>
    </>
  )
}
