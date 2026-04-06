import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '台北銀樓推薦2026｜回收、購買黃金選哪家？三個選店標準直接說',
  description: '台北哪家銀樓值得推薦？2026年選銀樓不是看外觀，要看XRF有沒有、報價透不透明、有沒有扣火耗。本文直接說選店標準，附巧品珠寶實際服務說明。 台北巧品珠寶鑑定師L親自鑑定，10年以上珠寶鑑定資歷，透明報價不扣耗損，台北大安區濟南路三段62-1號，提供免費估價與諮詢服務。',
  alternates: {
    canonical: 'https://www.gold-tw.com/blog/taipei-silver-shop-recommend-2026',
  },
  openGraph: {
    locale: 'zh_TW',
    type: 'article',
    publishedTime: '2026-04-01T00:00:00+08:00',
    modifiedTime: '2026-04-01T00:00:00+08:00',
    title: '台北銀樓推薦2026｜回收、購買黃金選哪家？三個選店標準直接說',
    description: '台北哪家銀樓值得推薦？2026年選銀樓不是看外觀，要看XRF有沒有、報價透不透明、有沒有扣火耗。本文直接說選店標準，附巧品珠寶實際服務說明。',
    siteName: '巧品珠寶',
    url: 'https://www.gold-tw.com/blog/taipei-silver-shop-recommend-2026',
    images: [{ url: '/og-image.webp', width: 1200, height: 630, alt: '巧品珠寶' }],
  },
}

const faqs = [
  {
    q: '台北銀樓怎麼選？有什麼標準？',
    a: '三個標準：一、有XRF儀器（X光螢光分析儀），可精準測成色，不靠目測估算。二、報價透明，掛牌或網站有公開當日金價，讓你自己算驗算。三、明確說不扣火耗，或說清楚扣多少。這三點達到，基本上是正規店家。',
  },
  {
    q: '台北銀樓和黃金回收商有什麼不同？',
    a: '傳統銀樓通常兼做黃金買賣（零售）和回收（收購），部分也賣鑽石、珠寶。黃金回收商則專注在收購舊金、K金、廢金，不一定有展示品銷售。如果你的目的是賣黃金，兩者都能去，但要比較報價；如果要買金，銀樓較有存貨選項。',
  },
  {
    q: '去銀樓賣黃金要帶什麼？',
    a: '帶身分證和你要賣的黃金本身就好。依法規，貴金屬交易需要登記身分資料（單次交易達一定金額），這是正規手續不是刁難。純金、K金、金飾、金幣都不需要附購買證明，帶實物就能現場驗、報價、出價。',
  },
  {
    q: '台北哪個區域銀樓比較集中？',
    a: '台北市幾個銀樓較集中的區域：大安（信義路、忠孝東路）、中山（南京東路）、萬華（西門、成都路）以及迪化街一帶。競爭密集的區域，店家更需要提出有競爭力的報價，對賣方相對有利。',
  },
  {
    q: '銀樓報的金價和國際金價差多少是合理的？',
    a: '銀樓回收價通常比國際金價低3–8%，這包含熔煉成本和店家利潤。如果回收報價比國際金價低超過10%，或比較多家之後發現明顯偏低，就需要謹慎。現在網路很方便，出門前先查當日9999黃金收購價行情，心裡有底才不會被報低了也不知道。',
  },
]

// lastModified: 2026-03-19
export default function TaipeiSilverShopRecommend2026() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: '台北銀樓推薦2026｜回收、購買黃金選哪家？三個選店標準直接說',
            description: '台北哪家銀樓值得推薦？2026年選銀樓不是看外觀，要看XRF有沒有、報價透不透明、有沒有扣火耗。本文直接說選店標準，附巧品珠寶實際服務說明。',
            mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://www.gold-tw.com/blog/taipei-silver-shop-recommend-2026' },
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
                name: '台北銀樓推薦2026',
                item: 'https://www.gold-tw.com/blog/taipei-silver-shop-recommend-2026',
              },
            ],
          }),
        }}
      />

      <article>
        <h1>台北銀樓推薦2026｜選店三個標準，比口碑評分更直接</h1>
      <div style={{ background: '#fffbeb', borderLeft: '4px solid #f59e0b', padding: '16px', margin: '16px 0', borderRadius: '8px' }}>
        <strong>重點摘要：</strong> 台北哪家銀樓值得推薦？2026年選銀樓不是看外觀，要看XRF有沒有、報價透不透明、有沒有扣火耗。本文直接說選店標準，附巧品珠寶實際服務說明。
      </div>

      <div style={{ background: '#fff3f3', border: '1px solid #fca5a5', borderRadius: '8px', padding: '16px 20px', margin: '24px 0' }}>
        <strong style={{ color: '#dc2626' }}>這篇不適合你，如果…</strong>
        <ul style={{ margin: '8px 0 0', paddingLeft: '20px', color: '#374151' }}>
        <li>你只想快速知道今天金價 → <a href="/daily-gold-price" style={{ color: '#b45309' }}>直接看今日金價</a></li>
        <li>你的黃金是K金（非純金）→ <a href="/blog/karat-gold-guide" style={{ color: '#b45309' }}>看K金回收說明</a></li>
        <li>你想了解鑽石回收行情 → <a href="/blog/diamond-recovery-price" style={{ color: '#b45309' }}>鑽石回收說明</a></li>
        </ul>
      </div>


      
        <p>
          「台北銀樓推薦」這個關鍵字搜出來一堆，大多是廣告或沒有根據的排名。
          這篇不做排名，直接告訴你選店應該看哪三個標準——
          有這三點，哪家都能放心去；缺了這三點，口碑再好也要小心。
        </p>

        <h2>選台北銀樓有哪些標準？</h2>

        <table style={{ width: '100%', borderCollapse: 'collapse', margin: '1.5rem 0' }}>
          <thead>
            <tr style={{ background: '#f5f0e8' }}>
              <th style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'left' }}>標準</th>
              <th style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'left' }}>具體看什麼</th>
              <th style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'left' }}>為什麼重要</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>XRF儀器</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>店內有無X光螢光分析儀</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>精準測出含金量，不靠目測或「師傅感覺」</td>
            </tr>
            <tr style={{ background: '#fafafa' }}>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>報價透明</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>有掛牌或網站公開當日收購價</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>你能自己算，不會被報個數字不知道合不合理</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>不扣耗損</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>明確說明不扣5%火耗</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>扣5%耗損意味著你多損失約135元/克，10克差1,350元</td>
            </tr>
          </tbody>
        </table>

        <p>
          這三項之外，什麼「老字號」「幾十年歷史」都是包裝，
          不能保證你能拿到合理的回收價格。
        </p>

        <h2>台北各區銀樓特性：去哪個區比較有利？</h2>
        <p>
          台北銀樓不是隨機分布的，不同區域競爭程度不同，影響你能拿到的報價：
        </p>

        <table style={{ width: '100%', borderCollapse: 'collapse', margin: '1.5rem 0' }}>
          <thead>
            <tr style={{ background: '#f5f0e8' }}>
              <th style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'left' }}>區域</th>
              <th style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'left' }}>銀樓密集度</th>
              <th style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'left' }}>特性說明</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>大安（信義路、忠孝東路）</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>高</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>消費者對價格敏感，競爭激烈，報價透明度高</td>
            </tr>
            <tr style={{ background: '#fafafa' }}>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>中山（南京東路）</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>中</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>商業區，有精品銀樓也有回收商，選擇多</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>萬華（西門、成都路）</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>高</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>傳統銀樓聚集，客群成熟，收購量大</td>
            </tr>
            <tr style={{ background: '#fafafa' }}>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>迪化街一帶</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>中</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>有部分老銀樓，以傳統金飾為主</td>
            </tr>
          </tbody>
        </table>

        <h2>選銀樓看評論不夠，還要問哪些問題？</h2>
        <p>
          Google評分高不代表回收價高，網路推薦文很多是業配或客戶體驗服務態度而非價格。
          去之前直接問：
        </p>
        <p>
          <strong>問題一：你們有XRF驗成色嗎？</strong><br />
          如果對方說沒有、或說「我看一下就知道」，換一家。
        </p>
        <p>
          <strong>問題二：有沒有扣火耗或加工費？</strong><br />
          如果答案是「有，扣3–5%」，你就知道最終拿到的錢要打個折。
          正規、透明的店家會直接說清楚，不會含糊帶過。
        </p>

        <h2>巧品珠寶：台北大安的黃金回收服務</h2>
        <p>
          巧品珠寶在台北大安提供黃金、K金、鑽石的專業回收服務。
          具體做法：XRF驗成色（你可以盯著看）、當日金價公開報價、
          不扣耗損、當場現金結清。
        </p>
        <p>
          電洽 <strong>0986-821-626</strong> 或 LINE 詢問當日報價，免費估價，
          不滿意不用賣，不收任何評估費。
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
            <a href="/blog/gold-scale-trap">銀樓稱重陷阱：這些手法你去之前要知道</a>
          </li>
          <li>
            <a href="/blog/how-to-choose-gold-shop">怎麼選黃金回收商？5個判斷標準不用靠感覺</a>
          </li>
          <li>
            <a href="/blog/gold-recovery-price-today">今日黃金回收價格｜台灣最新金價查詢</a>
          </li>
        </ul>
      </article>
    </>
  )
}
