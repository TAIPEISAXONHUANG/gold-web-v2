import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '今日金價一兩多少錢？2026台灣即時行情與換算指南｜巧品珠寶',
  description: '2026年今日金價一兩最新行情。台灣黃金一兩等於5錢＝18.75克，9999純金一兩回收今日報價、各純度換算公式一次看懂。台北大安巧品珠寶不扣耗損、當場秤重報價。',
  keywords: '今日金價一兩,今日金價一兩多少,台灣今日金價一兩2026,黃金一兩多少錢,金價一兩台灣',
  alternates: {
    canonical: 'https://www.gold-tw.com/blog/gold-price-per-liang-today-2026',
  },
  openGraph: {
    title: '今日金價一兩多少錢？2026台灣即時行情與換算指南｜巧品珠寶',
    description: '2026年今日金價一兩最新行情。台灣黃金一兩等於5錢＝18.75克，9999純金一兩回收今日報價、各純度換算公式一次看懂。台北大安巧品珠寶不扣耗損、當場秤重報價。',
    type: 'article',
    url: 'https://www.gold-tw.com/blog/gold-price-per-liang-today-2026',
    siteName: '巧品珠寶',
    publishedTime: '2026-03-27T00:00:00+08:00',
    modifiedTime: '2026-03-27T09:00:00+08:00',
  },
};

const faqs = [
  {
    q: '2026年今日金價一兩大概多少錢？',
    a: '2026年3月底台灣9999純金一兩（18.75克）市場回收行情約 82,000–90,000 元，每日隨國際金價浮動。建議來電或LINE詢問巧品珠寶當日即時牌價，開盤後每小時更新一次。'
  },
  {
    q: '台灣黃金一兩等於幾克、幾錢？',
    a: '台灣金飾慣用：1兩＝5錢＝18.75克。換算公式：克數 ÷ 3.75 ＝錢數；錢數 × 5 ＝兩數。與香港兩（37.5克）不同，也和國際盎司（31.1克）不一樣，別搞混了。'
  },
  {
    q: '賣一兩黃金，18K金可以拿多少錢？',
    a: '以今日牌價 17,500 元/錢為例：18K含金量75%，一兩（5錢）回收約 5 × 17,500 × 75% ＝ 65,625 元。實際依鑑定純度為準。巧品珠寶鑑定免費，不收火耗。'
  },
  {
    q: '台灣銀行黃金牌價和回收店的差在哪？',
    a: '台灣銀行公告「買入價」是他們向民眾收購的價格，單位是台兩（5錢）。回收店報價通常接近台銀買入價，差距在每兩 500–2,000 元不等。巧品珠寶貼近國際金價報價，差距業界最小。'
  },
  {
    q: '賣黃金一兩需要帶什麼？',
    a: '攜帶身份證正本即可。現金交易單筆超過 50 萬元須填大額通報表，這是法律規定，不是店家要求。巧品珠寶全程透明，絕不拖延流程。'
  }
];

// lastModified: 2026-03-19
export default function Page() {
  return (
    <main style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map(faq => ({
              "@type": "Question",
              "name": faq.q,
              "acceptedAnswer": { "@type": "Answer", "text": faq.a }
            }))
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": "今日金價一兩多少錢？2026台灣即時行情與換算指南",
            "author": { "@type": "Organization", "name": "鑑定師L", "url": "https://www.gold-tw.com", "@id": "https://www.gold-tw.com/#business" },
            "publisher": { "@type": "Organization", "name": "巧品珠寶", "url": "https://www.gold-tw.com" },
            "datePublished": "2026-03-27",
            "dateModified": "2026-03-27T09:00:00+08:00",
            "description": "2026年今日金價一兩最新行情，台灣黃金一兩換算公式、各純度回收價對照表，巧品珠寶不扣耗損即時報價。"
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "首頁", "item": "https://www.gold-tw.com" },
              { "@type": "ListItem", "position": 2, "name": "知識專欄", "item": "https://www.gold-tw.com/blog" },
              { "@type": "ListItem", "position": 3, "name": "今日金價一兩多少錢？2026台灣即時行情" }
            ]
          })
        }}
      />

      <h1>今日金價一兩多少錢？2026台灣即時行情與換算指南</h1>

      <div style={{ background: '#fffbeb', borderLeft: '4px solid #f59e0b', padding: '16px', margin: '16px 0', borderRadius: '8px' }}>
        <strong>直接給答案：</strong> 2026年3月底，台灣9999純金<strong>一兩（5錢＝18.75克）回收行情約 82,000–90,000 元</strong>。每天隨國際金價浮動，本文教你看懂牌價、算對錢數，不被扣耗損。
      </div>

      <h2>今日金價一兩行情是多少？</h2>
      <p>很多人只知道「一錢多少」，卻搞不清楚「一兩」是幾錢。台灣黃金市場用的單位：</p>
      <ul>
        <li><strong>1兩 ＝ 5錢 ＝ 18.75克</strong></li>
        <li>國際報價單位是盎司（31.1克），和台灣的「兩」不一樣</li>
        <li>香港的「兩」是37.5克，也不同，別混用</li>
      </ul>
      <p>以 2026 年 3 月底國際金價每盎司約 3,100 美元（換算台幣約每克 3,200 元）為基準，各純度一兩回收估算如下：</p>

      <table style={{ width: '100%', borderCollapse: 'collapse', margin: '1rem 0' }}>
        <thead>
          <tr style={{ background: '#f59e0b', color: 'white' }}>
            <th style={{ padding: '10px', textAlign: 'left' }}>純度</th>
            <th style={{ padding: '10px', textAlign: 'left' }}>含金量</th>
            <th style={{ padding: '10px', textAlign: 'left' }}>每克估價（元）</th>
            <th style={{ padding: '10px', textAlign: 'left' }}>一兩回收估算（元）</th>
          </tr>
        </thead>
        <tbody>
          <tr style={{ borderBottom: '1px solid #ddd', background: '#fefce8' }}>
            <td style={{ padding: '10px' }}>9999純金</td>
            <td style={{ padding: '10px' }}>99.99%</td>
            <td style={{ padding: '10px' }}>約 4,600</td>
            <td style={{ padding: '10px' }}><strong>約 86,250</strong></td>
          </tr>
          <tr style={{ borderBottom: '1px solid #ddd' }}>
            <td style={{ padding: '10px' }}>999純金</td>
            <td style={{ padding: '10px' }}>99.9%</td>
            <td style={{ padding: '10px' }}>約 4,595</td>
            <td style={{ padding: '10px' }}><strong>約 86,156</strong></td>
          </tr>
          <tr style={{ borderBottom: '1px solid #ddd', background: '#fefce8' }}>
            <td style={{ padding: '10px' }}>22K金</td>
            <td style={{ padding: '10px' }}>91.67%</td>
            <td style={{ padding: '10px' }}>約 4,217</td>
            <td style={{ padding: '10px' }}><strong>約 79,069</strong></td>
          </tr>
          <tr style={{ borderBottom: '1px solid #ddd' }}>
            <td style={{ padding: '10px' }}>18K金</td>
            <td style={{ padding: '10px' }}>75%</td>
            <td style={{ padding: '10px' }}>約 3,450</td>
            <td style={{ padding: '10px' }}><strong>約 64,688</strong></td>
          </tr>
          <tr style={{ borderBottom: '1px solid #ddd', background: '#fefce8' }}>
            <td style={{ padding: '10px' }}>14K金</td>
            <td style={{ padding: '10px' }}>58.33%</td>
            <td style={{ padding: '10px' }}>約 2,683</td>
            <td style={{ padding: '10px' }}><strong>約 50,313</strong></td>
          </tr>
          <tr style={{ borderBottom: '1px solid #ddd' }}>
            <td style={{ padding: '10px' }}>10K金</td>
            <td style={{ padding: '10px' }}>41.67%</td>
            <td style={{ padding: '10px' }}>約 1,917</td>
            <td style={{ padding: '10px' }}><strong>約 35,944</strong></td>
          </tr>
        </tbody>
      </table>
      <p style={{ fontSize: '0.85rem', color: '#888' }}>※ 以上為估算值，實際報價隨當日牌價浮動。詳細報價請電洽巧品珠寶。</p>

      <h2>怎麼自己算今日金價一兩？</h2>
      <p>不想被業者牽著鼻子走，學會這條公式就夠了：</p>
      <div style={{ background: '#f0fdf4', border: '1px solid #86efac', padding: '16px', borderRadius: '8px', margin: '1rem 0' }}>
        <strong>一兩回收價（元）＝ 當日每錢報價 × 5 × 含金量%</strong>
        <br />
        <br />
        範例：今日每錢牌價 17,500 元，賣 9999 純金一兩：
        <br />
        17,500 × 5 × 100% ＝ <strong>87,500 元</strong>
      </div>
      <p>這個算法的前提是「<strong>不扣耗損</strong>」。台灣不少店家會扣 2%–5% 的「火耗費」，一兩下來可能少 1,750–4,375 元。巧品珠寶不扣火耗，秤重過程讓你盯著看。</p>

      <h2>今日金價一兩為什麼每天都不一樣？</h2>
      <p>黃金是全球交易的商品，牌價直接跟著紐約、倫敦市場走。影響今日一兩報價的三大因素：</p>
      <ul>
        <li><strong>美元匯率：</strong>金價以美元計價，台幣強升，換算後金價跟著縮水</li>
        <li><strong>美聯準會利率決策：</strong>利率上升通常壓制金價，降息則推升</li>
        <li><strong>地緣政治風險：</strong>戰爭、衝突、金融動盪是金價最大的催化劑</li>
      </ul>
      <p>2026 年初以來，國際金價持續突破歷史高點，一兩報價已從年初的約 75,000 元推升至 85,000 元以上。這波漲勢背後是美元走弱加上全球央行持續增持黃金儲備。</p>

      <h2>台灣銀行牌價 vs 回收店報價——哪個才是基準？</h2>
      <p>很多人以為「台灣銀行牌價」是最高標準。其實台灣銀行的黃金買入價反映的是他們的成本加管理費，<strong>不等於市場最高回收價</strong>。</p>
      <p>台銀公告一兩（5錢）買入價約 83,000–88,000 元時，巧品珠寶的即時報價通常高出 500–2,000 元，因為我們直接對接國際現貨金價，省去中間層。</p>
      <p>判斷回收店好不好的標準很簡單：<strong>報價透明不透明、有沒有扣耗損、秤重讓不讓你看</strong>。三個問題問完，高下立判。</p>

      <h2>什麼時候賣一兩黃金最划算？</h2>
      <p>沒有人能精確預測頂點。但有幾個實用的判斷方式：</p>
      <ul>
        <li>美元指數（DXY）持續走弱時，金價通常偏強，是賣出好時機</li>
        <li>看近 3 個月均線：若金價已高於均線 8%–12%，可考慮分批出售</li>
        <li>急需用錢就賣，不要賭。黃金是資產，不是彩券</li>
      </ul>
      <p>2026 年 3 月底的市場狀況是：金價在高位整理，短期回調風險存在，但中長期看多的機構仍占多數。若你的黃金購入成本在 50,000 元/兩以下，現在出手報酬率已相當可觀。</p>

      <h2>賣一兩黃金的流程——到巧品珠寶怎麼操作？</h2>
      <p>流程很簡單，不需要預約：</p>
      <ol>
        <li>帶黃金和身份證到門市（台北大安區）</li>
        <li>現場免費鑑定純度、當場秤重</li>
        <li>報出今日牌價，你決定賣不賣</li>
        <li>決定賣，當場現金結算</li>
      </ol>
      <p>整個流程大約 15–30 分鐘。我們不需要你事先告知品項，當場鑑定最準確。</p>

      <h2>常見問題 FAQ</h2>
      {faqs.map((faq, idx) => (
        <div key={idx} style={{ marginBottom: '1.5rem', borderTop: '1px solid #e5e7eb', paddingTop: '1rem' }}>
          <h3 style={{ color: '#92400e', margin: '0 0 0.5rem' }}>{faq.q}</h3>
          <p style={{ margin: 0 }}>{faq.a}</p>
        </div>
      ))}

      <div style={{ background: '#fef3c7', border: '1px solid #f59e0b', padding: '20px', borderRadius: '8px', margin: '2rem 0', textAlign: 'center' }}>
        <strong style={{ fontSize: '1.1rem' }}>今日金價一兩即時報價——免費鑑定、當場秤重</strong>
        <br />
        <span style={{ color: '#78350f' }}>台北大安巧品珠寶 ｜ 9999純金一兩行情電洽：02-2700-XXXX</span>
        <br />
        <span style={{ fontSize: '0.9rem', color: '#92400e' }}>不扣耗損、不拖時間、全程讓你盯著看</span>
      </div>

      <h2>延伸閱讀</h2>
      <ul>
        <li><a href="/blog/gold-price-per-liang-taiwan-2026">2026台灣今日金價一兩完整換算指南</a></li>
        <li><a href="/blog/taiwan-gold-recovery-price-per-qian-2026">台灣黃金回收今日每錢報價</a></li>
        <li><a href="/blog/karat-gold-recovery">K金回收怎麼算？14K、18K、22K完整指南</a></li>
        <li><a href="/blog/sell-gold-checklist-2026">賣黃金前必看：2026年完整準備清單</a></li>
        <li><a href="/blog/gold-id-requirement">賣黃金要帶什麼證件？法規一次說清楚</a></li>
      </ul>
    </main>
  );
}
