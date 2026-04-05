import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '14K金回收價格2026｜當日行情、計算公式與避坑指南',
  description: '2026年14K金回收價格怎麼算？每錢大概多少？本文給出完整公式、當日行情區間，還有去銀樓前你必須知道的3個避坑重點。巧品珠寶不扣耗損、XRF驗成色。',
  alternates: {
    canonical: 'https://www.gold-tw.com/blog/14k-gold-recovery-price-2026',
  },
}

const faqs = [
  {
    q: '2026年14K金回收價格大概是多少？',
    a: '2026年3月底，14K金（含金量58.5%）的回收價約為當日9999純金一錢價格×58.5%，約落在10,000–10,820元/錢之間。每日隨國際金價浮動，需電洽或現場確認當日報價。',
  },
  {
    q: '14K金和18K金的回收價差多少？',
    a: '14K含金量58.5%，18K含金量75%，相差16.5個百分點。以一錢17,500元純金行情為例，14K回收約10,238元，18K回收約13,125元，同重量差了將近3,000元。K數越高，回收價越接近純金。',
  },
  {
    q: '14K金上面的印記怎麼看？有哪些可能是假的？',
    a: '14K金正常印記是「14K」「585」「14KT」。585是58.5%含金量的意思。如果印記是「14KGF」（包金）或「14KP」（鍍金），那不是實心14K，含金量極低，回收價差很多。驗成色用XRF儀器最準，不靠肉眼。',
  },
  {
    q: '14K金飾品有焊接點、有鑲嵌寶石，回收時怎麼算？',
    a: '焊接點通常是較低K數的焊料，整體含金量會略低於14K。鑲嵌的寶石（鑽石、紅藍寶等）另計，不納入黃金重量。正規店家會把寶石取下後單獨稱黃金部分，再依XRF測出的實際含金量報價。',
  },
  {
    q: '14K金回收需要帶什麼？現場流程多久？',
    a: '帶身分證和要賣的14K金飾品。現場流程：驗成色（XRF，約30秒）→秤重（你盯著看）→報價→現金，整個5到10分鐘。巧品珠寶不收鑑定費，不扣耗損，報價透明。',
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
            headline: '14K金回收價格2026｜當日行情、計算公式與避坑指南',
            description: '2026年14K金回收價格怎麼算？每錢大概多少？本文給出完整公式、當日行情區間，還有去銀樓前你必須知道的3個避坑重點。巧品珠寶不扣耗損、XRF驗成色。',
            mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://www.gold-tw.com/blog/14k-gold-recovery-price-2026' },
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
                name: '14K金回收價格2026',
                item: 'https://www.gold-tw.com/blog/14k-gold-recovery-price-2026',
              },
            ],
          }),
        }}
      />
      <article style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
        <h1>14K金回收價格2026｜當日行情、計算公式與避坑指南</h1>

        <p>
          手上有14K金戒指、項鍊、手鍊想賣，但不知道現在行情多少？
          14K金的回收報價比純金複雜一點——因為含金量只有58.5%，算法和純金不同，
          而且很多店在這個環節最容易動手腳。
        </p>
        <p>這篇把14K金回收的公式、2026年行情和避坑重點全部整理好。</p>

        <h2>14K金含金量是多少？為什麼叫「585」？</h2>
        <p>
          14K的「K」是開（Karat）的縮寫，24K = 純金100%。
          14K的含金量 = 14 ÷ 24 = <strong>58.5%</strong>。
          這就是為什麼14K金飾品背面常打「585」——是含金量的千分比表示法。
        </p>
        <p>
          剩下的41.5%是其他金屬（銅、銀、鋅等），這些沒有回收價值，
          所以14K金回收時只計算其中58.5%的含金量。
        </p>

        <h2>2026年14K金回收價格區間是多少？</h2>
        <p>
          計算公式：<strong>14K回收價 = 當日9999純金一錢報價 × 58.5%</strong>
        </p>
        <p>以2026年3月底行情為例：</p>

        <table style={{ width: '100%', borderCollapse: 'collapse', margin: '1.5rem 0' }}>
          <thead>
            <tr style={{ background: '#f5f0e8' }}>
              <th style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'left' }}>純金一錢行情</th>
              <th style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>14K一錢回收價</th>
              <th style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>14K一克回收價</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>17,000 元</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>9,945 元</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>2,652 元</td>
            </tr>
            <tr style={{ background: '#fafafa' }}>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>17,500 元</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>10,238 元</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>2,730 元</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>18,000 元</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>10,530 元</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>2,808 元</td>
            </tr>
            <tr style={{ background: '#fafafa' }}>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>18,500 元</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>10,823 元</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>2,886 元</td>
            </tr>
          </tbody>
        </table>

        <p>
          <strong>重要：</strong>以上是理論計算值，實際報價以當日牌價為準。
          電洽 <strong>0986-821-626</strong> 或帶實物來，現場 XRF 驗成色後再報精確數字。
        </p>

        <h2>各K數回收價比較（同樣一錢重量）？</h2>

        <table style={{ width: '100%', borderCollapse: 'collapse', margin: '1.5rem 0' }}>
          <thead>
            <tr style={{ background: '#f5f0e8' }}>
              <th style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'left' }}>K數</th>
              <th style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>含金量</th>
              <th style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>一錢回收參考（純金17,500元基準）</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>9999純金／24K</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>99.99%</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>17,500 元</td>
            </tr>
            <tr style={{ background: '#fafafa' }}>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>22K（916）</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>91.6%</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>16,030 元</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>18K</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>75.0%</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>13,125 元</td>
            </tr>
            <tr style={{ background: '#fafafa' }}>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>14K</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>58.5%</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>10,238 元</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>10K</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>41.7%</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>7,298 元</td>
            </tr>
          </tbody>
        </table>

        <h2>14K金回收的3個常見坑，去之前要知道有哪些？</h2>
        <p>
          <strong>第一個坑：「14K全部照58.5%算」，但實際XRF量出來只有56%甚至54%。</strong>
          便宜的進口飾品有時候標14K但實際含金量不足。
          這不是說你被騙了，而是你買的時候就是這個成色。
          用XRF驗是保護你，確認實際含金量後才能報準確的回收價。
        </p>
        <p>
          <strong>第二個坑：扣耗損。</strong>
          有些店在K金回收時扣「熔煉損耗」3–5%，
          說是「K金含其他金屬，熔煉後損耗大」。
          正規做法是依XRF測出的含金量×重量×當日金價，不另外扣損耗。
          問一句「有沒有扣耗損」就能辨別。
        </p>
        <p>
          <strong>第三個坑：鑲石的重量沒扣。</strong>
          有些店把整件飾品（含鑲嵌的寶石）一起秤，用金的重量算價。
          鑽石、紅藍寶的重量不算黃金，要扣掉。正規做法是取下寶石後再秤金。
        </p>

        <h2>巧品的14K金回收流程是什麼？</h2>
        <p>
          帶著你的14K飾品來大安門市，全程5分鐘：
          XRF驗成色（測出實際含金量，不是光看印記）、
          取下鑲嵌寶石後秤金重、
          依實際含金量報價，不扣耗損、
          當場現金。
        </p>
        <p>
          電洽 <strong>0986-821-626</strong> 或直接帶來，先報價、再決定賣不賣，沒壓力。
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
            <a href="/blog/karat-gold-recovery">K金回收懶人包｜14K、18K、9K怎麼賣最划算</a>
          </li>
          <li>
            <a href="/blog/k-gold-recovery-price-2026">2026年K金回收行情整理｜各K數每克、每錢報價</a>
          </li>
          <li>
            <a href="/blog/k-gold-difference-guide">14K、18K、24K有什麼差？K金選購與回收全攻略</a>
          </li>
          <li>
            <a href="/blog/before-selling-gold">賣黃金前必看｜5個讓你多拿幾百塊的準備動作</a>
          </li>
        </ul>
      </article>
    </>
  )
}
