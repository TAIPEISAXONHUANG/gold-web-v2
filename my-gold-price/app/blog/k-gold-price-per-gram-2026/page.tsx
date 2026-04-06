import type { Metadata } from 'next'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'K金回收價格怎麼算？2026最新14K/18K每克行情表',
  description: 'K金回收價格計算方式完整說明。14K、18K、22K每克收購行情、計算公式、常見扣分項目，台北巧品珠寶報價透明、不扣耗損。',
  openGraph: {
    title: 'K金回收價格怎麼算？2026最新14K/18K每克行情表',
    description: 'K金回收價格計算方式完整說明。14K、18K、22K每克收購行情、計算公式、常見扣分項目，台北巧品珠寶報價透明、不扣耗損。',
    type: 'article',
    locale: 'zh_TW',
  },
}

const jsonLdBlogPosting = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'K金回收價格怎麼算？2026最新14K/18K每克行情表',
  description: 'K金回收價格計算方式完整說明。14K、18K、22K每克收購行情、計算公式、常見扣分項目，台北巧品珠寶報價透明、不扣耗損。',
  author: { '@type': 'Organization', name: '巧品珠寶' },
  publisher: { '@type': 'Organization', name: '巧品珠寶' },
  datePublished: '2026-04-06',
  dateModified: '2026-04-06',
  inLanguage: 'zh-TW',
  mainEntityOfPage: 'https://gold-web-v2.vercel.app/blog/k-gold-price-per-gram-2026',
}

const jsonLdBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: '首頁', item: 'https://gold-web-v2.vercel.app' },
    { '@type': 'ListItem', position: 2, name: '部落格', item: 'https://gold-web-v2.vercel.app/blog' },
    { '@type': 'ListItem', position: 3, name: 'K金回收價格2026', item: 'https://gold-web-v2.vercel.app/blog/k-gold-price-per-gram-2026' },
  ],
}

const jsonLdFAQ = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'K金回收價格怎麼算？有公式嗎？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '基本公式：K金回收價 = 當日黃金現貨價（每克）× K數純度係數 × 收購折扣率。以18K為例：3,100元/克 × 0.75 × 0.92 = 約2,139元/克。實際收購時各店折扣率不同，通常在88%-93%之間。',
      },
    },
    {
      '@type': 'Question',
      name: '18K和14K回收價差多少？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '18K純度75%，14K純度58.5%。以2026年4月黃金約3,100元/克計算，18K每克收購約2,100-2,300元，14K每克約1,650-1,800元，差距約450-500元/克。',
      },
    },
    {
      '@type': 'Question',
      name: '白K金的回收價和黃K金一樣嗎？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '一樣。白K金是黃金加入鈀或銀等金屬，外層電鍍白銠。回收時只算黃金含量，白色外觀不影響報價。18K白金和18K黃金回收價格相同。',
      },
    },
    {
      '@type': 'Question',
      name: 'K金飾品有損傷或斷掉，還能回收嗎？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '可以。K金回收按重量和純度計算，外觀損傷不影響報價。斷鍊、壓扁的戒指、缺少搭扣的手環都能正常收購，不會因為「壞掉」就扣價。',
      },
    },
    {
      '@type': 'Question',
      name: '沒有購買憑證，K金還能回收嗎？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '可以。現場用XRF儀器測純度，不需要購買憑證或原廠包裝。測完純度再報價，確認後才交易，不強迫。',
      },
    },
  ],
}

export default function KGoldPricePerGram2026() {
  return (
    <>
      <Script
        id="ld-blogposting"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBlogPosting) }}
      />
      <Script
        id="ld-breadcrumb"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
      />
      <Script
        id="ld-faq"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFAQ) }}
      />

      <main style={{ maxWidth: '800px', margin: '0 auto', padding: '24px 16px', fontFamily: 'sans-serif', color: '#1a1a1a' }}>
        {/* Breadcrumb */}
        <nav style={{ fontSize: '14px', color: '#666', marginBottom: '24px' }}>
          <a href="/" style={{ color: '#b8860b' }}>首頁</a>
          {' › '}
          <a href="/blog" style={{ color: '#b8860b' }}>部落格</a>
          {' › '}
          <span>K金回收價格2026</span>
        </nav>

        <h1 style={{ fontSize: '28px', fontWeight: 'bold', lineHeight: '1.4', marginBottom: '16px' }}>
          K金回收價格怎麼算？2026最新14K/18K每克行情表
        </h1>
      <div style={ background: '#fffbeb', borderLeft: '4px solid #f59e0b', padding: '16px', margin: '16px 0', borderRadius: '8px' }>
        <strong>重點摘要：</strong> K金回收價格計算方式完整說明。14K、18K、22K每克收購行情、計算公式、常見扣分項目，台北巧品珠寶報價透明、不扣耗損。
      </div>


        <p style={{ fontSize: '16px', color: '#555', marginBottom: '32px', lineHeight: '1.8' }}>
          更新：2026年4月6日。「K金回收多少錢」這個問題沒有固定答案，因為每天黃金現貨價都在動。但計算方式是固定的，這篇說清楚公式、各K數折算係數、以及哪些因素會讓報價變高或變低。
        </p>

        {/* Section 1 */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontSize: '22px', fontWeight: 'bold', borderLeft: '4px solid #b8860b', paddingLeft: '12px', marginBottom: '16px' }}>
            K金回收價格計算公式
          </h2>
          <p style={{ lineHeight: '1.8', marginBottom: '12px' }}>
            K金回收價的計算很直接，就三個變數：
          </p>
          <div style={{ backgroundColor: '#f8f4ec', border: '1px solid #d4b84a', borderRadius: '8px', padding: '20px', marginBottom: '16px' }}>
            <p style={{ fontWeight: 'bold', fontSize: '17px', margin: '0 0 8px 0', color: '#7a5c00' }}>
              K金回收價 = 當日金價（元/克）× 純度係數 × 收購折扣率
            </p>
            <p style={{ margin: 0, color: '#555', fontSize: '14px' }}>
              舉例：2026年4月，黃金約3,100元/克，18K純度0.75，收購折扣率92%<br />
              → 3,100 × 0.75 × 0.92 ≈ 2,139 元/克
            </p>
          </div>
          <p style={{ lineHeight: '1.8', marginBottom: '12px' }}>
            收購折扣率各店不同，大多在88%–93%之間。低於88%通常是黑心店；高於93%少見但也有，要看市場狀況。我們巧品珠寶目前折扣率維持在92%–93%，不扣耗損。
          </p>
        </section>

        {/* Section 2 - Price Table */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontSize: '22px', fontWeight: 'bold', borderLeft: '4px solid #b8860b', paddingLeft: '12px', marginBottom: '16px' }}>
            2026年4月各K數收購參考價格表
          </h2>
          <p style={{ lineHeight: '1.8', marginBottom: '16px', color: '#555' }}>
            以2026年4月6日黃金現貨價約3,100元/克為基準計算（含折扣率92%）：
          </p>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '15px' }}>
              <thead>
                <tr style={{ backgroundColor: '#f5f0e8' }}>
                  <th style={{ padding: '12px 16px', textAlign: 'left', border: '1px solid #ddd', fontWeight: 'bold' }}>K數</th>
                  <th style={{ padding: '12px 16px', textAlign: 'left', border: '1px solid #ddd', fontWeight: 'bold' }}>純度</th>
                  <th style={{ padding: '12px 16px', textAlign: 'left', border: '1px solid #ddd', fontWeight: 'bold' }}>純度係數</th>
                  <th style={{ padding: '12px 16px', textAlign: 'left', border: '1px solid #ddd', fontWeight: 'bold' }}>參考收購價（元/克）</th>
                  <th style={{ padding: '12px 16px', textAlign: 'left', border: '1px solid #ddd', fontWeight: 'bold' }}>常見刻字</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ padding: '11px 16px', border: '1px solid #ddd', fontWeight: 'bold' }}>24K</td>
                  <td style={{ padding: '11px 16px', border: '1px solid #ddd' }}>99.9%</td>
                  <td style={{ padding: '11px 16px', border: '1px solid #ddd' }}>0.999</td>
                  <td style={{ padding: '11px 16px', border: '1px solid #ddd', color: '#7a5c00', fontWeight: 'bold' }}>約 2,850–2,950 元</td>
                  <td style={{ padding: '11px 16px', border: '1px solid #ddd' }}>9999、999</td>
                </tr>
                <tr style={{ backgroundColor: '#fafafa' }}>
                  <td style={{ padding: '11px 16px', border: '1px solid #ddd', fontWeight: 'bold' }}>22K</td>
                  <td style={{ padding: '11px 16px', border: '1px solid #ddd' }}>91.6%</td>
                  <td style={{ padding: '11px 16px', border: '1px solid #ddd' }}>0.916</td>
                  <td style={{ padding: '11px 16px', border: '1px solid #ddd', color: '#7a5c00', fontWeight: 'bold' }}>約 2,610–2,700 元</td>
                  <td style={{ padding: '11px 16px', border: '1px solid #ddd' }}>916</td>
                </tr>
                <tr>
                  <td style={{ padding: '11px 16px', border: '1px solid #ddd', fontWeight: 'bold' }}>18K</td>
                  <td style={{ padding: '11px 16px', border: '1px solid #ddd' }}>75%</td>
                  <td style={{ padding: '11px 16px', border: '1px solid #ddd' }}>0.750</td>
                  <td style={{ padding: '11px 16px', border: '1px solid #ddd', color: '#7a5c00', fontWeight: 'bold' }}>約 2,100–2,200 元</td>
                  <td style={{ padding: '11px 16px', border: '1px solid #ddd' }}>750、18K</td>
                </tr>
                <tr style={{ backgroundColor: '#fafafa' }}>
                  <td style={{ padding: '11px 16px', border: '1px solid #ddd', fontWeight: 'bold' }}>14K</td>
                  <td style={{ padding: '11px 16px', border: '1px solid #ddd' }}>58.5%</td>
                  <td style={{ padding: '11px 16px', border: '1px solid #ddd' }}>0.585</td>
                  <td style={{ padding: '11px 16px', border: '1px solid #ddd', color: '#7a5c00', fontWeight: 'bold' }}>約 1,640–1,700 元</td>
                  <td style={{ padding: '11px 16px', border: '1px solid #ddd' }}>585、14K</td>
                </tr>
                <tr>
                  <td style={{ padding: '11px 16px', border: '1px solid #ddd', fontWeight: 'bold' }}>10K</td>
                  <td style={{ padding: '11px 16px', border: '1px solid #ddd' }}>41.7%</td>
                  <td style={{ padding: '11px 16px', border: '1px solid #ddd' }}>0.417</td>
                  <td style={{ padding: '11px 16px', border: '1px solid #ddd', color: '#7a5c00', fontWeight: 'bold' }}>約 1,180–1,220 元</td>
                  <td style={{ padding: '11px 16px', border: '1px solid #ddd' }}>417、10K</td>
                </tr>
                <tr style={{ backgroundColor: '#fafafa' }}>
                  <td style={{ padding: '11px 16px', border: '1px solid #ddd', fontWeight: 'bold' }}>9K</td>
                  <td style={{ padding: '11px 16px', border: '1px solid #ddd' }}>37.5%</td>
                  <td style={{ padding: '11px 16px', border: '1px solid #ddd' }}>0.375</td>
                  <td style={{ padding: '11px 16px', border: '1px solid #ddd', color: '#7a5c00', fontWeight: 'bold' }}>約 1,060–1,100 元</td>
                  <td style={{ padding: '11px 16px', border: '1px solid #ddd' }}>375、9K</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p style={{ fontSize: '13px', color: '#888', marginTop: '8px' }}>
            ※ 上表為參考區間，實際報價依當日黃金現貨價及成色測試結果調整。以上不含鑲嵌鑽石或寶石。
          </p>
        </section>

        {/* Section 3 */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontSize: '22px', fontWeight: 'bold', borderLeft: '4px solid #b8860b', paddingLeft: '12px', marginBottom: '16px' }}>
            影響K金回收價格的因素
          </h2>
          <p style={{ lineHeight: '1.8', marginBottom: '12px' }}>
            同樣是18K，不同店的報價可能差10%–15%，原因不一定是「比較好心」，而是以下幾個實際因素：
          </p>
          <ul style={{ paddingLeft: '20px', lineHeight: '2' }}>
            <li style={{ marginBottom: '8px' }}>
              <strong>當日黃金現貨價</strong>——每天都在動，差一天可能差50元/克以上
            </li>
            <li style={{ marginBottom: '8px' }}>
              <strong>收購折扣率</strong>——各店不同，88%–93%都有，這個差異最大
            </li>
            <li style={{ marginBottom: '8px' }}>
              <strong>是否扣耗損</strong>——部分店報高價但扣3%–5%「加工耗損」，實際到手更低
            </li>
            <li style={{ marginBottom: '8px' }}>
              <strong>測試方式精準度</strong>——XRF儀器比試金石精準，影響純度認定
            </li>
            <li style={{ marginBottom: '8px' }}>
              <strong>飾品重量</strong>——鑲嵌寶石不算在金重裡，要扣掉寶石重量
            </li>
          </ul>
          <div style={{ backgroundColor: 'rgba(255,215,0,0.1)', border: '1px solid #e6c200', borderRadius: '8px', padding: '16px', marginTop: '16px' }}>
            <p style={{ margin: 0, color: '#7a5c00' }}>
              <strong>實際案例：</strong>A店說18K收2,300元/克，B店說2,100元/克，看起來A店更好。但A店秤完後扣5%耗損，實際是2,185元/克。B店不扣，最後到手反而更高。看清楚是否扣耗損，比看表面報價更重要。
            </p>
          </div>
        </section>

        {/* Section 4 */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontSize: '22px', fontWeight: 'bold', borderLeft: '4px solid #b8860b', paddingLeft: '12px', marginBottom: '16px' }}>
            白K金、玫瑰金、黑K金——顏色影響報價嗎？
          </h2>
          <p style={{ lineHeight: '1.8', marginBottom: '12px' }}>
            不影響。K金的顏色是由混入的金屬種類決定的：
          </p>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '15px', marginBottom: '16px' }}>
              <thead>
                <tr style={{ backgroundColor: '#f5f0e8' }}>
                  <th style={{ padding: '12px 16px', textAlign: 'left', border: '1px solid #ddd' }}>顏色</th>
                  <th style={{ padding: '12px 16px', textAlign: 'left', border: '1px solid #ddd' }}>混入金屬</th>
                  <th style={{ padding: '12px 16px', textAlign: 'left', border: '1px solid #ddd' }}>回收計算方式</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ padding: '11px 16px', border: '1px solid #ddd' }}>黃K金</td>
                  <td style={{ padding: '11px 16px', border: '1px solid #ddd' }}>銀、銅</td>
                  <td style={{ padding: '11px 16px', border: '1px solid #ddd' }}>按K數計算黃金含量</td>
                </tr>
                <tr style={{ backgroundColor: '#fafafa' }}>
                  <td style={{ padding: '11px 16px', border: '1px solid #ddd' }}>白K金</td>
                  <td style={{ padding: '11px 16px', border: '1px solid #ddd' }}>鈀、銀 + 表面鍍銠</td>
                  <td style={{ padding: '11px 16px', border: '1px solid #ddd' }}>按K數計算黃金含量（顏色不影響）</td>
                </tr>
                <tr>
                  <td style={{ padding: '11px 16px', border: '1px solid #ddd' }}>玫瑰金</td>
                  <td style={{ padding: '11px 16px', border: '1px solid #ddd' }}>銅比例較高</td>
                  <td style={{ padding: '11px 16px', border: '1px solid #ddd' }}>按K數計算黃金含量</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p style={{ lineHeight: '1.8' }}>
            簡單說：不管你的戒指是黃色、白色還是玫瑰色，只要刻字是18K，就按18K的黃金含量計算。混入的銅、銀、鈀另計，通常可忽略不計。
          </p>
        </section>

        {/* Section 5 */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontSize: '22px', fontWeight: 'bold', borderLeft: '4px solid #b8860b', paddingLeft: '12px', marginBottom: '16px' }}>
            K金回收流程
          </h2>
          <ol style={{ paddingLeft: '20px', lineHeight: '2' }}>
            <li style={{ marginBottom: '10px' }}>
              <strong>攜帶飾品到店</strong>——不需預約，也不需要原廠盒或購買證明
            </li>
            <li style={{ marginBottom: '10px' }}>
              <strong>XRF純度測試</strong>——5分鐘，非破壞性，現場出結果
            </li>
            <li style={{ marginBottom: '10px' }}>
              <strong>精密電子秤秤重</strong>——你可以在旁邊盯著秤，數字當場確認
            </li>
            <li style={{ marginBottom: '10px' }}>
              <strong>報價</strong>——當日金價 × 純度係數 × 折扣率，現場計算，報價透明
            </li>
            <li style={{ marginBottom: '10px' }}>
              <strong>確認成交，現金或轉帳</strong>——你確認後才算成交，不滿意可以拿回去
            </li>
          </ol>
        </section>

        {/* FAQ */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontSize: '22px', fontWeight: 'bold', borderLeft: '4px solid #b8860b', paddingLeft: '12px', marginBottom: '24px' }}>
            常見問題
          </h2>

          {[
            {
              q: 'K金回收價格怎麼算？有公式嗎？',
              a: '基本公式：K金回收價 = 當日黃金現貨價（元/克）× K數純度係數 × 收購折扣率。以18K為例：3,100 × 0.75 × 0.92 ≈ 2,139元/克。各店折扣率不同，通常在88%-93%之間。',
            },
            {
              q: '18K和14K回收價差多少？',
              a: '18K純度75%，14K純度58.5%。以2026年4月黃金約3,100元/克計算，18K每克收購約2,100–2,200元，14K每克約1,640–1,700元，差距約450–500元/克。',
            },
            {
              q: '白K金的回收價和黃K金一樣嗎？',
              a: '一樣。白K金是黃金加入鈀或銀，表面電鍍白銠。回收時只算黃金含量，白色外觀不影響報價。18K白金和18K黃金回收價相同。',
            },
            {
              q: 'K金飾品有損傷或斷掉，還能回收嗎？',
              a: '可以。K金回收按重量和純度計算，外觀損傷不影響報價。斷鍊、壓扁的戒指、缺少搭扣的手環都能正常收購。',
            },
            {
              q: '沒有購買憑證，K金還能回收嗎？',
              a: '可以。現場用XRF儀器測純度，不需要購買憑證或原廠包裝。測完純度再報價，確認後才交易。',
            },
          ].map(({ q, a }) => (
            <div key={q} style={{ marginBottom: '20px', borderBottom: '1px solid #eee', paddingBottom: '20px' }}>
              <h3 style={{ fontSize: '17px', fontWeight: 'bold', marginBottom: '8px', color: '#333' }}>Q：{q}</h3>
              <p style={{ lineHeight: '1.8', color: '#555', margin: 0 }}>A：{a}</p>
            </div>
          ))}
        </section>

        {/* CTA */}
        <section style={{ backgroundColor: 'rgba(255,215,0,0.1)', border: '1px solid #e6c200', borderRadius: '12px', padding: '24px', marginBottom: '40px', textAlign: 'center' }}>
          <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '12px' }}>K金回收找巧品珠寶</h2>
          <p style={{ lineHeight: '1.8', marginBottom: '16px', color: '#555' }}>
            14K、18K、22K、白K金、玫瑰金都收。<br />
            XRF現場測試，秤重全程透明，不扣耗損，報價就是到手價。
          </p>
          <p style={{ fontWeight: 'bold', fontSize: '17px', color: '#7a5c00', margin: 0 }}>
            台北市大安區濟南路二段｜24小時收購
          </p>
        </section>

        {/* Related */}
        <section>
          <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '16px' }}>延伸閱讀</h2>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            <li style={{ marginBottom: '12px', borderLeft: '3px solid #b8860b', paddingLeft: '12px' }}>
              <a href="/blog/k-gold-recovery-price-2026" style={{ color: '#b8860b', textDecoration: 'none', fontWeight: 'bold' }}>
                K金回收完整說明2026｜14K、18K收購流程與報價邏輯
              </a>
            </li>
            <li style={{ marginBottom: '12px', borderLeft: '3px solid #b8860b', paddingLeft: '12px' }}>
              <a href="/blog/14k-gold-recovery-price-2026" style={{ color: '#b8860b', textDecoration: 'none', fontWeight: 'bold' }}>
                14K黃金回收價格2026｜計算方式與現場報價說明
              </a>
            </li>
            <li style={{ marginBottom: '12px', borderLeft: '3px solid #b8860b', paddingLeft: '12px' }}>
              <a href="/blog/gold-recovery-traps" style={{ color: '#b8860b', textDecoration: 'none', fontWeight: 'bold' }}>
                黃金回收常見陷阱｜這5種店請直接離開
              </a>
            </li>
            <li style={{ marginBottom: '12px', borderLeft: '3px solid #b8860b', paddingLeft: '12px' }}>
              <a href="/blog/gold-vs-k-gold-2026" style={{ color: '#b8860b', textDecoration: 'none', fontWeight: 'bold' }}>
                黃金 vs K金差異說明2026｜回收前必看
              </a>
            </li>
          </ul>
        </section>
      </main>
    </>
  )
}
