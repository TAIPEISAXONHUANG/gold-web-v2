import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '今日金價一錢賣出2026｜賣黃金前必看的報價邏輯與避坑指南',
  description: '2026年今日黃金賣出價一錢多少？搞清楚「賣出價」和「買入價」的差異，才不會白白少領幾百塊。巧品珠寶不扣耗損、秤重透明，當場現金，電洽即時報價。',
  alternates: {
    canonical: 'https://www.gold-tw.com/blog/today-gold-sell-price-per-qian-2026',
  },
  openGraph: {
    locale: 'zh_TW',
    type: 'article',
    publishedTime: '2026-03-01T00:00:00+08:00',
    modifiedTime: '2026-03-01T00:00:00+08:00',
    title: '今日金價一錢賣出2026｜賣黃金前必看的報價邏輯與避坑指南',
    description: '2026年今日黃金賣出價一錢多少？搞清楚「賣出價」和「買入價」的差異，才不會白白少領幾百塊。巧品珠寶不扣耗損、秤重透明，當場現金，電洽即時報價。',
    siteName: '巧品珠寶',
    url: 'https://www.gold-tw.com/blog/today-gold-sell-price-per-qian-2026',
    images: [{ url: '/og-image.webp', width: 1200, height: 630, alt: '巧品珠寶' }],
  },
}

const faqs = [
  {
    q: '2026年今日黃金一錢賣出價大概多少？',
    a: '2026年3月底，台灣9999純金一錢（3.75克）的賣出行情約落在 16,500–18,500 元之間，每日隨國際金價和匯率浮動。要拿到當日最準確報價，直接電洽或 LINE 巧品珠寶，開盤後即時更新。',
  },
  {
    q: '「賣出價」和「買入價」哪個是我賣黃金能拿到的錢？',
    a: '你賣黃金，拿到的是店家的「買入價」（也叫回收價）。「賣出價」是店家賣黃金給你的價格，通常比買入價高出 200–600 元/錢。很多人搞混這兩個，比價時一定要確認對方報的是哪一個。',
  },
  {
    q: '為什麼同一天不同店的一錢賣出價差那麼多？',
    a: '主要差在：1) 耗損費（有些店扣 3–5%）；2) 鑑定費（有些收幾百元）；3) 對接的報價速度（有些店用前一天的價）。價格看起來差不多，但扣完一堆費用後實拿差很多。',
  },
  {
    q: '黃金飾品和金條賣出，一錢報價會不同嗎？',
    a: '會。黃金飾品因為有工費和純度問題，報價通常比金條低。9999純金條回收幾乎照市價；18K飾品因含金量 75%，報價會依含金量計算，不能直接套用「一錢金條」的報價。',
  },
  {
    q: '今日金價一錢賣出前，我應該怎麼確認沒被坑？',
    a: '三個確認：1) 問清楚「這個報價有沒有扣耗損？」；2) 秤重時站在旁邊盯著看；3) 跟國際現貨金價換算比對。巧品珠寶的流程是：秤重你盯著、成色儀器驗、報價不含坑，當場現金。',
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
            headline: '今日金價一錢賣出2026｜賣黃金前必看的報價邏輯與避坑指南',
            description: '2026年今日黃金賣出價一錢多少？搞清楚「賣出價」和「買入價」的差異，才不會白白少領幾百塊。巧品珠寶不扣耗損、秤重透明，當場現金，電洽即時報價。',
            mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://www.gold-tw.com/blog/today-gold-sell-price-per-qian-2026' },
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
                name: '今日金價一錢賣出2026',
                item: 'https://www.gold-tw.com/blog/today-gold-sell-price-per-qian-2026',
              },
            ],
          }),
        }}
      />
      <article style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
        <h1>今日金價一錢賣出2026｜賣黃金前必看的報價邏輯與避坑指南</h1>
      <div style={ background: '#fffbeb', borderLeft: '4px solid #f59e0b', padding: '16px', margin: '16px 0', borderRadius: '8px' }>
        <strong>重點摘要：</strong> 2026年今日黃金賣出價一錢多少？搞清楚「賣出價」和「買入價」的差異，才不會白白少領幾百塊。巧品珠寶不扣耗損、秤重透明，當場現金，電洽即時報價。
      </div>


        <p>
          很多人拿著黃金去賣，回家才發現拿到的錢比預期少了好幾百。原因通常不是店家報錯——
          而是你搞混了「賣出價」和「買入價」，或者沒搞清楚有沒有扣耗損。
        </p>
        <p>這篇把2026年今日金價一錢賣出的完整邏輯講清楚，賣前先看，少虧幾百塊。</p>

        <h2>「賣出價」vs「買入價」：你能拿的是哪個？</h2>
        <p>
          先釐清一個最基本的問題：你把黃金賣給店家，拿到的是店家的<strong>買入價（回收價）</strong>，
          不是「賣出價」。
        </p>
        <p>
          「賣出價」是店家賣黃金給消費者的價格，比買入價高出 200–600 元/錢。
          如果你拿到的報價是「今日賣出價 17,800 元/錢」，
          那是店家賣給你的價，不是你賣給店家能拿到的錢。
          很多人在網路比價時沒分清楚，以為自己找到高報價，結果白跑一趟。
        </p>

        <h2>2026年3月台灣今日金價一錢多少？</h2>
        <p>
          2026年3月底，國際金價維持強勢，台幣匯率相對穩定，台灣市場黃金回收行情如下：
        </p>

        <table style={{ width: '100%', borderCollapse: 'collapse', margin: '1.5rem 0' }}>
          <thead>
            <tr style={{ background: '#f5f0e8' }}>
              <th style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'left' }}>黃金類型</th>
              <th style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>回收買入價（每錢）</th>
              <th style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>備註</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>9999純金條／金豆</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>17,200–18,500 元</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>最接近國際金價</td>
            </tr>
            <tr style={{ background: '#fafafa' }}>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>9999純金飾品</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>17,000–18,300 元</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>視工費略低</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>9958黃金（港金）</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>16,800–18,000 元</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>含金量 99.58%</td>
            </tr>
            <tr style={{ background: '#fafafa' }}>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>18K金飾品</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>依當日9999金價 × 75% 計算</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>含金量 75%</td>
            </tr>
          </tbody>
        </table>

        <p>
          <strong>注意：</strong>以上為參考區間，實際報價以當日開盤後牌價為準。
          直接電洽 <strong>0986-821-626</strong> 或 LINE 巧品珠寶，可拿到當日即時報價，
          開盤後每小時更新。
        </p>

        <h2>為什麼同樣是一錢，不同店報價差 500 塊？</h2>
        <p>很多人以為黃金報價是固定的，其實差異藏在這三個地方：</p>
        <p>
          <strong>第一：有沒有扣耗損。</strong>有些店會扣 3–5% 的「火耗」或「加工損耗」，
          一錢報 18,000 元，扣完實拿可能只剩 17,100 元。
          問一句「有沒有扣耗損」，就能判斷這家值不值得去。
        </p>
        <p>
          <strong>第二：鑑定費怎麼算。</strong>有些店收一口價鑑定費幾百元，
          如果你的量不大，這個費用直接侵蝕你的利潤。
        </p>
        <p>
          <strong>第三：用的是哪個時間點的報價。</strong>有些店早上報價就不再更新，
          下午國際金價漲了，他們還用早上的低價。要拿到當日最高報價，
          建議下午 2–4 點，等美股開盤訊號出來後再詢問。
        </p>

        <h2>賣黃金正確流程是什麼？</h2>
        <p>
          不管去哪家，這三個動作要做到：
        </p>
        <p>
          <strong>1. 自己先換算一下。</strong>查當日 XAUUSD 現貨金價，
          乘以當日台幣匯率，再除以 26.667（換算成一錢），
          就是理論上的一錢最高回收上限。
        </p>
        <p>
          <strong>2. 秤重要當場盯著看。</strong>秤重是報價的基礎，
          你不盯著，事後說不清楚。
        </p>
        <p>
          <strong>3. 問清楚「這個價有沒有扣耗損？」</strong>
          不敢正面回答這個問題的店，就不用多聊了。
        </p>

        <h2>巧品的做法：秤重讓你盯、成色儀器量、不扣耗損</h2>
        <p>
          在台北大安，巧品珠寶做的就是這三件事：
          秤重全程讓你看、用 X 射線螢光儀（XRF）現場量成色、不扣耗損報一個透明的數。
          當場現金，不拖時間。
        </p>
        <p>
          今日金價一錢賣出想拿到最好的數，電洽 <strong>0986-821-626</strong>，
          或直接帶著黃金來大安門市，當場報價，當場決定。
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
            <a href="/blog/gold-recovery-price-today-2026">今日黃金回收價2026｜各純度報價一次整理</a>
          </li>
          <li>
            <a href="/blog/gold-scale-trap">黃金秤重陷阱大公開｜這些動作你要注意</a>
          </li>
          <li>
            <a href="/blog/before-selling-gold">賣黃金前必看｜5個讓你多拿幾百塊的準備動作</a>
          </li>
        </ul>
      </article>
    </>
  )
}
