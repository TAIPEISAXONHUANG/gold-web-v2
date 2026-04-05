import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'GIA鑽石是什麼？2026台灣GIA證書鑽石收購與鑑定完整說明',
  description: 'GIA鑽石比較保值嗎？GIA證書看哪幾項？台灣收購GIA鑽石行情、二手鑽石估價邏輯，以及舊鑽石能賣多少錢的完整解答。',
  keywords: 'GIA鑽石,gia鑽石,GIA證書,鑽石收購,二手鑽石,鑽石估價,GIA台灣,鑽石回收',
  alternates: {
    canonical: 'https://www.gold-tw.com/blog/gia-diamond-guide-2026',
  },
  openGraph: {
    title: 'GIA鑽石是什麼？2026台灣GIA證書鑽石收購與鑑定完整說明',
    description: 'GIA鑽石比較保值嗎？GIA證書看哪幾項？台灣收購GIA鑽石行情、二手鑽石估價邏輯，以及舊鑽石能賣多少錢的完整解答。',
    type: 'article',
    url: 'https://www.gold-tw.com/blog/gia-diamond-guide-2026',
    siteName: '巧品珠寶',
    publishedTime: '2026-04-05T14:20:00+08:00',
    modifiedTime: '2026-04-05T14:20:00+08:00',
  },
};

const faqs = [
  {
    q: 'GIA鑽石比較保值嗎？',
    a: '比起沒有證書的鑽石，GIA鑽石確實更容易找到買家，也更容易獲得合理報價——因為GIA證書提供了客觀的品質依據，買家不用靠信任就能確認規格。但「保值」不代表不跌價：鑽石整體上不像黃金那樣能抗通膨，二手鑽石市場流動性差，通常以零售價的3–5折成交。',
  },
  {
    q: 'GIA證書上最重要的是哪幾項？',
    a: '最影響價格的是 4C：Carat（克拉重量）、Color（顏色等級，D最好）、Clarity（淨度，FL最好）、Cut（切工，Excellent最佳）。其中克拉重量和顏色對價格影響最大。0.5ct vs 1ct的差距不只是重量，還有心理溢價——1克拉以上的鑽石市場上有獨特需求，報價邏輯不同。',
  },
  {
    q: '沒有GIA證書的鑽石能賣嗎？',
    a: '能賣，但會比較麻煩。沒有證書的鑽石需要店家自行鑑定，部分業者會保守出價，因為他們要承擔鑑定風險。若你的鑽石較大（0.5克拉以上），考慮送GIA補證——費用約3,000–8,000元，但可能讓你的鑽石報價提升幅度更多。',
  },
  {
    q: '台灣二手GIA鑽石行情大概是多少？',
    a: '非常依賴4C規格，但粗略參考：1ct F-G色 VS1-VS2，市售新品約10–15萬，二手回收約3–6萬（3–4折）。0.5ct同等級，市售約3–5萬，回收約1–2萬。高品質（D色、FL）或特殊形狀（梨形、心形）可能略高，但整體都在零售價3–5折區間。',
  },
  {
    q: '賣鑽石需要帶什麼？',
    a: 'GIA證書（或其他國際鑑定書）、鑽石實物、身分證。若有購買發票或收據，帶來有助於確認原始規格，但非必要。到店後店家會用放大鏡和儀器核對證書號碼和實物，確認是同一顆石頭。',
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
            '@graph': [
              {
                '@type': 'BlogPosting',
                headline: 'GIA鑽石是什麼？2026台灣GIA證書鑽石收購與鑑定完整說明',
                description: 'GIA鑽石比較保值嗎？GIA證書看哪幾項？台灣收購GIA鑽石行情、二手鑽石估價邏輯，以及舊鑽石能賣多少錢的完整解答。',
                mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://www.gold-tw.com/blog/gia-diamond-guide-2026' },
                author: { '@type': 'Organization', name: '鑑定師L', url: 'https://www.gold-tw.com' },
                publisher: { '@type': 'Organization', name: '巧品珠寶', url: 'https://www.gold-tw.com' },
                datePublished: '2026-04-05T14:20:00+08:00',
                dateModified: '2026-04-05T14:20:00+08:00',
              },
              {
                '@type': 'FAQPage',
                mainEntity: faqs.map((f) => ({
                  '@type': 'Question',
                  name: f.q,
                  acceptedAnswer: { '@type': 'Answer', text: f.a },
                })),
              },
              {
                '@type': 'BreadcrumbList',
                itemListElement: [
                  { '@type': 'ListItem', position: 1, name: '首頁', item: 'https://www.gold-tw.com/' },
                  { '@type': 'ListItem', position: 2, name: '部落格', item: 'https://www.gold-tw.com/blog' },
                  {
                    '@type': 'ListItem',
                    position: 3,
                    name: 'GIA鑽石是什麼',
                    item: 'https://www.gold-tw.com/blog/gia-diamond-guide-2026',
                  },
                ],
              },
            ],
          }),
        }}
      />
      <article style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
        <h1>GIA鑽石是什麼？2026台灣GIA證書鑽石收購與鑑定完整說明</h1>

        <div style={{ background: '#fffbeb', borderLeft: '4px solid #f59e0b', padding: '16px', margin: '16px 0', borderRadius: '8px' }}>
          <strong>重點摘要：</strong> GIA 是全球最權威的鑽石鑑定機構，有 GIA 證書的鑽石比較好賣、比較好估價。但「有 GIA」不等於「保值」——二手鑽石市場普遍以零售價 3–5 折成交，這是正常市場現實。
        </div>

        <h2>GIA 是什麼機構？</h2>
        <p>
          GIA（Gemological Institute of America，美國寶石學院）成立於 1931 年，是全球公認最嚴格、最具公信力的鑽石鑑定機構。許多台灣珠寶業者、銀行、保險公司在評估鑽石價值時，都以 GIA 證書作為標準依據。
        </p>
        <p>
          GIA 本身不販賣鑽石，也不替鑽石定價——它只做鑑定，出具客觀的品質報告（即俗稱的「GIA 證書」或「GIA 鑑定書」）。
        </p>

        <h2>GIA 鑑定書看哪 4C？怎麼解讀每個欄位？</h2>
        <p>
          每份 GIA 鑑定書都包含鑽石的 4C 評等，這 4 個維度決定了鑽石的市場價值：
        </p>
        <table style={{ width: '100%', borderCollapse: 'collapse', margin: '1.5rem 0' }}>
          <thead>
            <tr style={{ background: '#f5f0e8' }}>
              <th style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'left' }}>4C 指標</th>
              <th style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'left' }}>評級範圍</th>
              <th style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'left' }}>對價格的影響</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>Carat（克拉重量）</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>數字越大越重</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>影響最大，1ct 以上有溢價</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>Color（顏色）</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>D（無色）– Z（黃色）</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>D–F 高溢價，G–H 中等，I 以下明顯折價</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>Clarity（淨度）</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>FL / IF / VVS1-2 / VS1-2 / SI1-2 / I1-3</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>VS2 以上肉眼乾淨，SI1 常被接受</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>Cut（切工）</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>Excellent / Very Good / Good / Fair / Poor</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>EX 切工火彩最佳，影響觀感和價格</td>
            </tr>
          </tbody>
        </table>

        <h2>有 GIA 證書的鑽石能賣多少？</h2>
        <p>
          先說真相：鑽石不是黃金，沒有統一的「每克拉市場價」可以直接查。二手鑽石的成交行情，差距極大，主要由 4C 和市場需求決定。
        </p>
        <p>以下是 2026 年台灣二手市場的粗略參考範圍：</p>
        <table style={{ width: '100%', borderCollapse: 'collapse', margin: '1.5rem 0' }}>
          <thead>
            <tr style={{ background: '#f5f0e8' }}>
              <th style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'left' }}>鑽石規格</th>
              <th style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'left' }}>市售新品參考</th>
              <th style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'left' }}>二手回收參考</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>0.3ct G-H VS2 EX</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>約 1.5–2 萬元</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>約 5,000–8,000 元</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>0.5ct F-G VS1 EX</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>約 3–5 萬元</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>約 1–2 萬元</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>1.0ct F-G VS2 EX</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>約 10–16 萬元</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>約 3.5–6 萬元</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>1.0ct D-E VVS1 EX</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>約 18–28 萬元</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>約 7–12 萬元</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>2.0ct+ 高品質</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>50 萬元以上</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>需個別評估</td>
            </tr>
          </tbody>
        </table>
        <p style={{ fontSize: '0.85rem', color: '#6b7280' }}>
          ※ 以上為 2026 年參考範圍，實際報價依石頭品相、市場需求、店家政策而異。
        </p>

        <h2>如何辨別 GIA 證書真偽？</h2>
        <p>
          GIA 的鑑定報告都有防偽功能，可以直接到 GIA 官網查詢：
        </p>
        <ol style={{ lineHeight: '2.2' }}>
          <li>前往 <strong>gia.edu/report-check</strong>（GIA 官方報告查詢系統）</li>
          <li>輸入報告書右上角的「Report Number」（7–10 位數字）</li>
          <li>系統回傳的鑽石規格，應與你手中的實體鑽石和報告書完全吻合</li>
          <li>若數字不符或查無此報告，證書可能是仿冒品</li>
        </ol>
        <p>
          正規的 GIA 鑑定書每份都可以即時線上核實，10 秒鐘就能確認真假，沒有查不到的理由。
        </p>

        <h2>GIA 鑽石收購常見問答</h2>
        {faqs.map((f, i) => (
          <div key={i} style={{ marginBottom: '1.5rem', borderTop: '1px solid #e5e7eb', paddingTop: '1rem' }}>
            <h3 style={{ color: '#92400e', margin: '0 0 0.5rem' }}>{f.q}</h3>
            <p style={{ margin: 0 }}>{f.a}</p>
          </div>
        ))}

        <div style={{ background: '#fef3c7', border: '1px solid #f59e0b', padding: '20px', borderRadius: '8px', margin: '2rem 0', textAlign: 'center' }}>
          <strong style={{ fontSize: '1.1rem' }}>巧品珠寶——GIA鑽石、舊鑽、鑲嵌鑽石戒指全收</strong>
          <br />
          <span style={{ color: '#78350f' }}>台北大安區，附帶 GIA 證書者優先估高價</span>
          <br />
          <span style={{ fontSize: '0.9rem', color: '#92400e' }}>帶實物和證書來，現場鑑定當場報價，不用等</span>
          <br />
          <strong>0986-821-626｜LINE: @QPD888</strong>
        </div>

        <h2>延伸閱讀</h2>
        <ul>
          <li><a href="/blog/diamond-recovery-price">二手鑽石回收行情——不同等級報價怎麼算？</a></li>
          <li><a href="/blog/gia-diamond-appraisal-taiwan">台灣GIA鑽石鑑定服務推薦——在哪裡補辦鑑定書？</a></li>
          <li><a href="/blog/diamond-jewelry">鑽石珠寶收購指南——鑲嵌款、裸石、古董鑽的估價邏輯</a></li>
          <li><a href="/blog/gold-recovery-price-today-2026">今日黃金回收報價——K金、純金即時行情</a></li>
        </ul>
      </article>
    </>
  );
}
