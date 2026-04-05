import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'K金回收攻略2026｜14K、18K、9K哪家收？怎麼算最划算？',
  description: 'K金怎麼回收才不吃虧？本文說清楚14K、18K、9K金的回收計算方式、2026年行情、要避開的坑，以及台北哪裡回收K金給價最高。',
  alternates: {
    canonical: 'https://www.gold-tw.com/blog/k-gold-recovery-guide-2026',
  },
  openGraph: {
    type: 'article',
    publishedTime: '2026-03-01T00:00:00+08:00',
    modifiedTime: '2026-03-01T00:00:00+08:00',
    title: 'K金回收攻略2026｜14K、18K、9K哪家收？怎麼算最划算？',
    description: 'K金怎麼回收才不吃虧？本文說清楚14K、18K、9K金的回收計算方式、2026年行情、要避開的坑，以及台北哪裡回收K金給價最高。',
    type: 'article',
    siteName: '巧品珠寶',
  },
}

const faqs = [
  {
    q: 'K金回收一定要在銀樓嗎？當舖可以嗎？',
    a: '銀樓和當舖都能收，但差別很大。銀樓是「買斷」：直接按含金量給你現金，一次結清，你不需要還。當舖是「抵押借款」：金飾是擔保品，你要付利息，時間到了要贖回，否則被沒收。想賣掉換現金，就去銀樓；急需現金但未來想贖回，才考慮當舖。',
  },
  {
    q: '18K金回收是按什麼價格算？',
    a: '18K = 含金量75%（750‰）。回收計算公式：回收金額 = 重量（克）× 當日9999純金每克回收價 × 75%。例如當日純金每克回收4,960元，你有一條5克的18K金項鍊：5 × 4,960 × 75% = 18,600元。這是理論值，實際看銀樓設定，通常相差不大，但扣耗損的店會再少5%左右。',
  },
  {
    q: '14K金和18K金，哪個回收比較划算？',
    a: '從「含金量」看：18K（75%金）>14K（58.5%金），同重量18K可以拿更多錢。但換個角度：如果你買的時候付了很高的設計費，飾品回收只算金的部分，設計費完全不值錢。所以「划算」不是指14K vs 18K的比較，而是你買入價和回收價的差距。高設計費飾品，回收一定虧。',
  },
  {
    q: '回收K金會扣「火耗」是什麼意思？',
    a: '「火耗」是指熔金時會損失的重量，傳統說法大約是5%。問題是，現代回收黃金早就不用火熔，直接秤重+XRF驗成色，哪來的火耗？扣火耗只是部分業者的慣常說法，用來壓低報價的藉口。正規銀樓不應該扣火耗。問報價時，直接問清楚：「有沒有扣耗損？」沒有才是實在的報價。',
  },
  {
    q: '925銀飾可以和K金一起回收嗎？',
    a: '不能混在一起算，但兩個都可以回收，只是分開計算。925純銀（含銀92.5%）的回收價遠低於黃金：2026年3月，純銀每克約25–30元，18K金每克約3,720元，差距150倍以上。把銀飾和金飾放一起交給銀樓，對方會分類秤重、分別報價，你確認後再決定要不要賣。',
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
            headline: 'K金回收攻略2026｜14K、18K、9K哪家收？怎麼算最划算？',
            description: 'K金怎麼回收才不吃虧？本文說清楚14K、18K、9K金的回收計算方式、2026年行情、要避開的坑，以及台北哪裡回收K金給價最高。',
            mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://www.gold-tw.com/blog/k-gold-recovery-guide-2026' },
            author: { '@type': 'Organization', name: '鑑定師L', url: 'https://www.gold-tw.com' },
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
                name: 'K金回收攻略2026',
                item: 'https://www.gold-tw.com/blog/k-gold-recovery-guide-2026',
              },
            ],
          }),
        }}
      />
      <article style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
        <h1>K金回收攻略2026｜14K、18K、9K哪家收？怎麼算最划算？</h1>

        <p>
          K金回收最容易搞不清楚的是：我這條項鍊是18K，到底能賣多少？
          報價合理嗎？有沒有被坑？這篇把K金回收的計算方式、2026年行情和常見陷阱全部說清楚。
        </p>

        <h2>K金是什麼？含金量怎麼看？</h2>
        <p>
          「K」是黃金純度的計量單位，24K = 100%純金（實際上是99.99%）。
          台灣市面常見的K金飾品，通常印有K數或千分比印記：
        </p>

        <table style={{ width: '100%', borderCollapse: 'collapse', margin: '1.5rem 0' }}>
          <thead>
            <tr style={{ background: '#f5f0e8' }}>
              <th style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'left' }}>K數</th>
              <th style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'left' }}>常見印記</th>
              <th style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>含金量</th>
              <th style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>每克回收價（參考）</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>24K（純金）</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>9999、999、足金</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>99.99%</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>4,930–5,067 元</td>
            </tr>
            <tr style={{ background: '#fafafa' }}>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>22K（916金）</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>916、22K</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>91.6%</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>4,516–4,641 元</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>18K</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>750、18K、AU750</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>75%</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>3,698–3,800 元</td>
            </tr>
            <tr style={{ background: '#fafafa' }}>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>14K</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>585、14K</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>58.5%</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>2,884–2,964 元</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>10K</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>417、10K</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>41.7%</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>2,056–2,113 元</td>
            </tr>
            <tr style={{ background: '#fafafa' }}>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>9K</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>375、9K</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>37.5%</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>1,849–1,900 元</td>
            </tr>
          </tbody>
        </table>

        <p>
          以上數字以2026年3月底9999純金每克約4,960元為基準換算，僅供參考。
          實際報價請洽巧品珠寶 <strong>0986-821-626</strong>，現場XRF驗成色、秤重、即時報價。
        </p>

        <h2>K金回收的計算公式怎麼算？</h2>
        <p>
          自己算好，才知道銀樓給的價格合不合理。公式很簡單：
        </p>
        <p style={{ background: '#f5f0e8', padding: '1rem', borderRadius: '6px', fontFamily: 'monospace' }}>
          回收金額 = 飾品重量（克）× 當日9999純金每克回收價 × 含金量（%）
        </p>
        <p>
          <strong>範例：</strong>你有一只18K金戒指，重4.2克。
          當日9999純金回收每克4,960元。
          → 4.2 × 4,960 × 75% = <strong>15,624元</strong>
        </p>
        <p>
          如果銀樓給你報的是13,000元，那就是報價偏低（可能還扣了火耗）。
          如果給你16,000，那是合理甚至偏高的報價。<strong>有數字才有談判籌碼。</strong>
        </p>

        <h2>K金回收最常踩哪些坑？</h2>
        <p>
          <strong>坑1：扣火耗5%。</strong>
          有些銀樓說「熔金有損耗，要扣5%火耗」，但現代根本不用熔金，這是壓低報價的話術。
          問清楚：「你們有沒有扣火耗？」沒有扣才是實在的。
        </p>
        <p>
          <strong>坑2：把K金報成「雜金」。</strong>
          部分業者對不熟悉的顧客，故意說「這個成分複雜、不確定純度」，
          用「雜金」的低價來報。只要有印記（如750、585），正規XRF驗30秒就知道成色，
          不需要估算。
        </p>
        <p>
          <strong>坑3：附帶的寶石當廢料。</strong>
          K金飾品上若有鑲嵌寶石（鑽石、紅藍寶等），拆下來的寶石也有價值，
          但部分銀樓只算金的部分、寶石直接不計。若飾品上有鑲嵌物，
          建議先詢問「寶石怎麼處理」，確認對方有沒有估算寶石價值。
        </p>

        <h2>台北哪裡K金回收給價最高？</h2>
        <p>
          老實說，全台北沒有「絕對最高」的銀樓，因為每天金價都不同、每家設定不同。
          但<strong>影響報價最大的3個因素</strong>是：
        </p>
        <p>
          <strong>1. 有沒有扣火耗：</strong>不扣火耗的店，報價天然高出5%。
        </p>
        <p>
          <strong>2. XRF驗成色還是目測估：</strong>用儀器驗的店更精準，避免被低估成色。
        </p>
        <p>
          <strong>3. 當日參考的金價基準：</strong>不同銀樓參考的基準金價略有差異（台銀 vs 國際現貨），
          結算出來的報價也有差。
        </p>
        <p>
          巧品珠寶三個都做到：不扣耗損、XRF驗成色、參考即時國際金價報收購價。
          歡迎帶著K金飾品來比較，沒問題再賣、沒壓力。
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
            <a href="/blog/k-gold-recovery-calculation">K金回收計算公式完整版｜14K、18K、Pt900怎麼算</a>
          </li>
          <li>
            <a href="/blog/14k-gold-recovery-price-2026">14K金回收價格2026｜含金量、計算方式與行情</a>
          </li>
          <li>
            <a href="/blog/gold-recovery-traps">黃金回收被坑過嗎？5個常見話術教你識破</a>
          </li>
          <li>
            <a href="/blog/gold-id-requirement">賣黃金要帶什麼？2026台灣規定一次說清楚</a>
          </li>
          <li>
            <a href="/blog/gold-vs-k-gold-2026">純金 vs K金：投資、送禮、回收哪個值？</a>
          </li>
        </ul>
      </article>
    </>
  )
}
