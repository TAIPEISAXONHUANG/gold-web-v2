import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '今日黃金價格台灣 2026年4月——每日更新金價查詢指南',
  description: '2026年台灣今日黃金價格怎麼查？銀行牌告、國際金價、回收價差在哪？本篇整理黃金價格查詢管道與判讀方式，讓你每天看懂金價。',
  keywords: '今日黃金價格台灣2026,台灣黃金價格,今日金價台灣,台灣黃金今日行情,黃金價格2026,台灣黃金報價',
  alternates: {
    canonical: 'https://www.gold-tw.com/blog/taiwan-gold-price-today-april-2026',
  },
  openGraph: {
    title: '今日黃金價格台灣 2026年4月——每日更新金價查詢指南',
    description: '2026年台灣今日黃金價格怎麼查？銀行牌告、國際金價、回收價差在哪？本篇整理黃金價格查詢管道與判讀方式，讓你每天看懂金價。',
    type: 'article',
    url: 'https://www.gold-tw.com/blog/taiwan-gold-price-today-april-2026',
    siteName: '巧品珠寶',
    publishedTime: '2026-04-02T00:00:00+08:00',
    modifiedTime: '2026-04-02T00:00:00+08:00',
  },
};

const faqs = [
  {
    q: '台灣今日黃金價格去哪裡查最準確？',
    a: '最官方的是台灣銀行黃金牌告匯率（每日開盤後更新）和台灣黃金交易所即時報價。一般民眾去銀樓賣金，會以銀樓當日收購價為主，通常略低於台銀牌告。建議多比較2–3個管道，差距超過1%就要問清楚。',
  },
  {
    q: '今日台灣黃金價格和國際金價有關嗎？',
    a: '直接掛鉤。台灣黃金報價基本上是國際現貨金價（以美元計）乘以當日匯率，再加減各店家的手續費或利差。國際金價漲，台灣跟著漲；國際跌，台灣也跌，通常時差不超過1個交易日。',
  },
  {
    q: '2026年台灣黃金價格大概在什麼水位？',
    a: '2026年初受美聯儲政策與地緣政治影響，國際金價持續高位震盪，台灣黃金每錢（3.75克）報價大致落在8,000–9,000元區間，每克約2,100–2,400元。具體當日價格請查台灣銀行或各銀樓當日報價。',
  },
  {
    q: '銀行牌告買入價和賣出價差很多，是為什麼？',
    a: '買入價（你賣給銀行）和賣出價（你向銀行買）之間的價差就是銀行的利潤空間，通常每克差50–100元台幣。這叫「買賣價差」，是正常現象。銀樓的價差通常比銀行小，但也要看店家。',
  },
  {
    q: '假日台灣黃金價格還會動嗎？',
    a: '國際金市（倫敦、紐約）假日期間仍在交易，所以國際金價會動。但台灣銀行在本地假日不更新牌告，銀樓也多半以前一交易日收盤價作為參考。實際開盤後才會更新當日正式報價。',
  },
];

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
            headline: '今日黃金價格台灣 2026年4月——每日更新金價查詢指南',
            description: '2026年台灣今日黃金價格怎麼查？銀行牌告、國際金價、回收價差在哪？本篇整理黃金價格查詢管道與判讀方式，讓你每天看懂金價。',
            mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://www.gold-tw.com/blog/taiwan-gold-price-today-april-2026' },
            author: { '@type': 'Organization', name: '鑑定師L', url: 'https://www.gold-tw.com' },
            publisher: { '@type': 'Organization', name: '巧品珠寶', url: 'https://www.gold-tw.com' },
            datePublished: '2026-04-02T00:00:00+08:00',
            dateModified: '2026-04-02T00:00:00+08:00',
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
              { '@type': 'ListItem', position: 2, name: '部落格', item: 'https://www.gold-tw.com/blog' },
              {
                '@type': 'ListItem',
                position: 3,
                name: '今日黃金價格台灣2026',
                item: 'https://www.gold-tw.com/blog/taiwan-gold-price-today-april-2026',
              },
            ],
          }),
        }}
      />
      <article style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
        <h1>今日黃金價格台灣 2026——每日金價查詢完整指南</h1>

        <div style={{ background: '#fffbeb', borderLeft: '4px solid #f59e0b', padding: '16px', margin: '16px 0', borderRadius: '8px' }}>
          <strong>重點摘要：</strong> 2026年台灣黃金每錢大致在8,000–9,000元區間波動。查金價最直接：台灣銀行官網或各銀樓當日公告。銀行牌告買賣價差每克約50–100元，銀樓收購通常再低一點，但速度快、免排隊。
        </div>

        <h2>台灣今日黃金價格在哪查？5個管道怎麼比較？</h2>
        <p>
          很多人問「台灣今日金價去哪看」，答案不只一個，而且各有差異，看懂差別很重要：
        </p>

        <table style={{ width: '100%', borderCollapse: 'collapse', margin: '1.5rem 0' }}>
          <thead>
            <tr style={{ background: '#f5f0e8' }}>
              <th style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'left' }}>查詢管道</th>
              <th style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'left' }}>更新頻率</th>
              <th style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'left' }}>適合用途</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>台灣銀行黃金牌告</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>每日開盤後更新</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>作為基準參考、查買賣差</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>台灣黃金交易所</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>即時（盤中連續）</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>即時追蹤、適合投資者</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>各大銀樓官網/Line</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>每日公告</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>直接對應回收或購買報價</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>國際現貨金價（XAU/USD）</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>24小時即時</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>判斷台幣金價走向趨勢</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>各商業銀行app</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>每日更新</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>帳戶型黃金存摺買賣</td>
            </tr>
          </tbody>
        </table>

        <h2>2026年台灣黃金價格走勢如何？</h2>
        <p>
          2026年初，受到美國聯準會利率政策、地緣政治風險與美元走弱等多重因素影響，國際金價持續在高位震盪整理。台灣黃金價格與國際金市直接掛鉤，換算匯率後：
        </p>
        <ul>
          <li><strong>每克（公克）：</strong>約 2,100–2,400 元台幣</li>
          <li><strong>每錢（3.75克）：</strong>約 7,900–9,000 元台幣</li>
          <li><strong>每兩（37.5克）：</strong>約 79,000–90,000 元台幣</li>
        </ul>
        <p>
          請注意，這是2026年Q1的大致區間，具體當日報價仍需查詢台灣銀行或各銀樓。金價每天都在動，這裡的數字只是參考底線，不是當日報價。
        </p>

        <h2>為什麼銀樓收購價比銀行低？</h2>
        <p>
          台灣銀行的黃金牌告價，是以國際金價換算後的「參考基準」。銀樓收購價通常會比台銀牌告的買入價再低一些，差距大約每克50–150元不等。
        </p>
        <p>
          這差距來自三個地方：第一是銀樓的利潤；第二是運送與保管成本；第三是流動性差異——銀樓收購後需要時間找下家或送提煉，有時間成本。
        </p>
        <p>
          <strong>所以想賣金，多問幾家才是正解。</strong>報價差距可達每克100元，10克就差1,000元，不是小數字。
        </p>

        <h2>今日金價看懂了，賣之前要確認哪件事？</h2>
        <p>
          知道今日金價只是第一步。實際賣出前還要確認：店家用哪個基準算？有沒有額外扣耗損？秤重是不是你可以看到的？這三件事決定你實際到手多少錢。
        </p>
        <p>
          正規店家的流程是：秤重讓你看著→乘以今日收購價→直接出價→現金結清。沒有暗扣、沒有等待電話報價、不搞神秘。
        </p>

        <h2>常見問答</h2>
        {faqs.map((f, i) => (
          <div key={i} style={{ marginBottom: '1.5rem', borderTop: '1px solid #e5e7eb', paddingTop: '1rem' }}>
            <h3 style={{ color: '#92400e', margin: '0 0 0.5rem' }}>{f.q}</h3>
            <p style={{ margin: 0 }}>{f.a}</p>
          </div>
        ))}

        <div style={{ background: '#fef3c7', border: '1px solid #f59e0b', padding: '20px', borderRadius: '8px', margin: '2rem 0', textAlign: 'center' }}>
          <strong style={{ fontSize: '1.1rem' }}>巧品珠寶——今日收購金價即時公告</strong>
          <br />
          <span style={{ color: '#78350f' }}>每日開盤後更新當日黃金收購報價，不含暗扣，秤重透明</span>
          <br />
          <strong>0986-821-626｜LINE: @QPD888</strong>
          <br />
          <span style={{ fontSize: '0.9rem', color: '#92400e' }}>台北大安區 • 週一至週日 11:00–20:00 • 9999純金、22K、18K、14K全收</span>
        </div>

        <h2>延伸閱讀</h2>
        <ul>
          <li><a href="/blog/real-time-gold-price-today-2026">今日即時金價——台灣黃金最新報價查詢</a></li>
          <li><a href="/blog/today-gold-sell-price-per-qian-2026">今日金價一錢賣出多少錢——賣金前必查</a></li>
          <li><a href="/blog/gold-price-forecast-2026">2026黃金價格走勢預測——漲還是跌？</a></li>
          <li><a href="/blog/gold-recovery-price-today-2026">今日黃金回收價格——銀樓收購報價整理</a></li>
        </ul>
      </article>
    </>
  );
}
