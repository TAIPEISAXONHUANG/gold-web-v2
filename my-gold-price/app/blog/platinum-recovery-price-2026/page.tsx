import type { Metadata } from 'next'
import Script from 'next/script'

export const metadata: Metadata = {
  title: '白金回收價格2026｜Pt900、Pt950即時行情與收購流程',
  description: '白金（鉑金）回收行情完整說明。Pt900、Pt950目前收購價格、計算方式、與黃金差異，台北巧品珠寶24小時收購，不扣耗損、秤重全程透明。',
  openGraph: {
    title: '白金回收價格2026｜Pt900、Pt950即時行情與收購流程',
    description: '白金（鉑金）回收行情完整說明。Pt900、Pt950目前收購價格、計算方式、與黃金差異，台北巧品珠寶24小時收購，不扣耗損、秤重全程透明。',
    type: 'article',
    locale: 'zh_TW',
  },
}

const jsonLdBlogPosting = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: '白金回收價格2026｜Pt900、Pt950即時行情與收購流程',
  description: '白金（鉑金）回收行情完整說明。Pt900、Pt950目前收購價格、計算方式、與黃金差異，台北巧品珠寶24小時收購，不扣耗損、秤重全程透明。',
  author: { '@type': 'Organization', name: '巧品珠寶' },
  publisher: { '@type': 'Organization', name: '巧品珠寶' },
  datePublished: '2026-04-06',
  dateModified: '2026-04-06',
  inLanguage: 'zh-TW',
  mainEntityOfPage: 'https://gold-web-v2.vercel.app/blog/platinum-recovery-price-2026',
}

const jsonLdBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: '首頁', item: 'https://gold-web-v2.vercel.app' },
    { '@type': 'ListItem', position: 2, name: '部落格', item: 'https://gold-web-v2.vercel.app/blog' },
    { '@type': 'ListItem', position: 3, name: '白金回收價格2026', item: 'https://gold-web-v2.vercel.app/blog/platinum-recovery-price-2026' },
  ],
}

const jsonLdFAQ = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '白金和黃金哪個回收價值更高？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '目前（2026年）白金國際現貨價約每盎司1,050-1,100美元，而黃金約3,100-3,200美元，黃金回收價值明顯高於白金。但白金的工藝加工品質好、密度高，同重量的白金飾品往往純度更穩定。',
      },
    },
    {
      '@type': 'Question',
      name: 'Pt900和Pt950差在哪裡？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Pt900表示鉑金純度90%，Pt950純度95%。日本製銀樓飾品多用Pt900，歐美高端珠寶較常見Pt950。回收時Pt950每克收購價比Pt900高約5-8%。',
      },
    },
    {
      '@type': 'Question',
      name: '白金戒指上面沒有刻字還能回收嗎？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '可以。沒有刻字的白金飾品我們會現場用XRF螢光儀器測試純度，測完才報價，整個過程5分鐘，不需要你先說是幾K或Pt幾。',
      },
    },
    {
      '@type': 'Question',
      name: '白金回收需要帶身分證嗎？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '根據貴金屬回收相關法規，回收金額達一定門檻需登記身分。帶身分證、健保卡或駕照任一種即可，現場登記流程3分鐘完成。',
      },
    },
    {
      '@type': 'Question',
      name: '白金混搭了鑽石或寶石，回收時怎麼算？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '鑲嵌飾品的回收價以金屬本體計算，鑽石和寶石會另外鑑定報價。如果鑽石有GIA證書，溢價空間更大。兩個都算，都給你報價，不強迫拆開賣。',
      },
    },
  ],
}

export default function PlatinumRecoveryPrice2026() {
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
          <span>白金回收價格2026</span>
        </nav>

        <h1 style={{ fontSize: '28px', fontWeight: 'bold', lineHeight: '1.4', marginBottom: '16px' }}>
          白金回收價格2026｜Pt900、Pt950即時行情與收購流程
        </h1>
      <div style={{ background: '#fffbeb', borderLeft: '4px solid #f59e0b', padding: '16px', margin: '16px 0', borderRadius: '8px' }}>
        <strong>重點摘要：</strong> 白金（鉑金）回收行情完整說明。Pt900、Pt950目前收購價格、計算方式、與黃金差異，台北巧品珠寶24小時收購，不扣耗損、秤重全程透明。
      </div>


        <p style={{ fontSize: '16px', color: '#555', marginBottom: '32px', lineHeight: '1.8' }}>
          更新：2026年4月6日。白金（鉑金）這兩年價格走勢和黃金完全不同，很多人以為白金更貴，但目前國際現貨價白金其實比黃金便宜不少。這篇說清楚白金回收怎麼算、Pt900和Pt950差在哪、拿來收購能拿多少。
        </p>

        {/* Section 1 */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontSize: '22px', fontWeight: 'bold', borderLeft: '4px solid #b8860b', paddingLeft: '12px', marginBottom: '16px' }}>
            白金現在多少錢一克？
          </h2>
          <p style={{ lineHeight: '1.8', marginBottom: '12px' }}>
            2026年4月，白金（鉑金，Platinum）國際現貨價格約落在每盎司1,050～1,100美元之間，換算新台幣每克約1,050～1,100元（依匯率浮動）。
          </p>
          <p style={{ lineHeight: '1.8', marginBottom: '12px' }}>
            黃金同期約每克3,200元台幣，白金大約是黃金的三分之一價格。這和2015年以前黃金、白金價格相當接近的時代已經不同了。
          </p>
          <p style={{ lineHeight: '1.8', marginBottom: '16px' }}>
            收購報價會在國際價基礎上抓一個折扣係數，通常是現貨價的88-93%，具體報價看成色和市場流動性。
          </p>

          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '15px' }}>
              <thead>
                <tr style={{ backgroundColor: '#f5f0e8' }}>
                  <th style={{ padding: '12px 16px', textAlign: 'left', border: '1px solid #ddd', fontWeight: 'bold' }}>成色標記</th>
                  <th style={{ padding: '12px 16px', textAlign: 'left', border: '1px solid #ddd', fontWeight: 'bold' }}>純度</th>
                  <th style={{ padding: '12px 16px', textAlign: 'left', border: '1px solid #ddd', fontWeight: 'bold' }}>參考收購價（台幣/克）</th>
                  <th style={{ padding: '12px 16px', textAlign: 'left', border: '1px solid #ddd', fontWeight: 'bold' }}>常見來源</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ padding: '11px 16px', border: '1px solid #ddd' }}>Pt999</td>
                  <td style={{ padding: '11px 16px', border: '1px solid #ddd' }}>99.9%</td>
                  <td style={{ padding: '11px 16px', border: '1px solid #ddd' }}>約 1,020–1,080 元</td>
                  <td style={{ padding: '11px 16px', border: '1px solid #ddd' }}>鉑金條、投資型</td>
                </tr>
                <tr style={{ backgroundColor: '#fafafa' }}>
                  <td style={{ padding: '11px 16px', border: '1px solid #ddd' }}>Pt950</td>
                  <td style={{ padding: '11px 16px', border: '1px solid #ddd' }}>95%</td>
                  <td style={{ padding: '11px 16px', border: '1px solid #ddd' }}>約 970–1,030 元</td>
                  <td style={{ padding: '11px 16px', border: '1px solid #ddd' }}>歐美高端珠寶</td>
                </tr>
                <tr>
                  <td style={{ padding: '11px 16px', border: '1px solid #ddd' }}>Pt900</td>
                  <td style={{ padding: '11px 16px', border: '1px solid #ddd' }}>90%</td>
                  <td style={{ padding: '11px 16px', border: '1px solid #ddd' }}>約 920–980 元</td>
                  <td style={{ padding: '11px 16px', border: '1px solid #ddd' }}>日系銀樓、戒指</td>
                </tr>
                <tr style={{ backgroundColor: '#fafafa' }}>
                  <td style={{ padding: '11px 16px', border: '1px solid #ddd' }}>Pt850</td>
                  <td style={{ padding: '11px 16px', border: '1px solid #ddd' }}>85%</td>
                  <td style={{ padding: '11px 16px', border: '1px solid #ddd' }}>約 870–920 元</td>
                  <td style={{ padding: '11px 16px', border: '1px solid #ddd' }}>部分舊款項鍊</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p style={{ fontSize: '13px', color: '#888', marginTop: '8px' }}>
            ※ 上表為參考區間，實際報價依當日國際鉑金現貨價及成色測試結果調整。
          </p>
        </section>

        {/* Section 2 */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontSize: '22px', fontWeight: 'bold', borderLeft: '4px solid #b8860b', paddingLeft: '12px', marginBottom: '16px' }}>
            白金怎麼辨認？刻字說明
          </h2>
          <p style={{ lineHeight: '1.8', marginBottom: '12px' }}>
            白金（鉑金）和白K金常被搞混，但兩者差很多。白K金是黃金加了鈀或銠電鍍，本體還是K金；白金（Platinum）是另一種金屬，密度更高、更耐磨。
          </p>
          <p style={{ lineHeight: '1.8', marginBottom: '12px' }}>
            辨認方式很直接：看刻字。白金飾品刻字是「Pt900」、「Pt950」、「Platinum」或「Plat」；白K金刻字是「18K White」或「750」搭配白色外觀。
          </p>
          <p style={{ lineHeight: '1.8', marginBottom: '16px' }}>
            如果刻字磨損看不清楚，我們現場用XRF儀器測，5分鐘出結果。不需要你先猜是什麼，測完再說。
          </p>
        </section>

        {/* Section 3 */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontSize: '22px', fontWeight: 'bold', borderLeft: '4px solid #b8860b', paddingLeft: '12px', marginBottom: '16px' }}>
            白金收購流程：5步驟完成
          </h2>
          <ol style={{ paddingLeft: '20px', lineHeight: '2' }}>
            <li style={{ marginBottom: '10px' }}>
              <strong>帶件來店</strong>——白金戒指、項鍊、手環、金條都行，鑲石的也沒關係
            </li>
            <li style={{ marginBottom: '10px' }}>
              <strong>XRF純度測試</strong>——現場測試，5分鐘，完全非破壞性，不傷飾品
            </li>
            <li style={{ marginBottom: '10px' }}>
              <strong>精密電子秤秤重</strong>——秤重全程透明，你可以在旁邊看，我們不用彈簧秤
            </li>
            <li style={{ marginBottom: '10px' }}>
              <strong>報價確認</strong>——當場告訴你今日報價，確認後才繼續，不滿意可以直接離開
            </li>
            <li style={{ marginBottom: '10px' }}>
              <strong>現金或轉帳付款</strong>——確認成交後，現金或匯款都行，大額可事先聯繫
            </li>
          </ol>
          <div style={{ backgroundColor: 'rgba(255,215,0,0.1)', border: '1px solid #e6c200', borderRadius: '8px', padding: '16px', marginTop: '16px' }}>
            <p style={{ margin: 0, fontWeight: 'bold', color: '#7a5c00' }}>
              重要：我們不扣耗損、不收鑑定費，報價就是到手價。很多店說「高價收購」然後在秤重後扣5%「加工耗損」，這種情況在我們這裡不會發生。
            </p>
          </div>
        </section>

        {/* Section 4 */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontSize: '22px', fontWeight: 'bold', borderLeft: '4px solid #b8860b', paddingLeft: '12px', marginBottom: '16px' }}>
            白金 vs 黃金 vs K金回收比較
          </h2>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '15px' }}>
              <thead>
                <tr style={{ backgroundColor: '#f5f0e8' }}>
                  <th style={{ padding: '12px 16px', textAlign: 'left', border: '1px solid #ddd' }}>比較項目</th>
                  <th style={{ padding: '12px 16px', textAlign: 'left', border: '1px solid #ddd' }}>白金（Pt）</th>
                  <th style={{ padding: '12px 16px', textAlign: 'left', border: '1px solid #ddd' }}>黃金（Au）</th>
                  <th style={{ padding: '12px 16px', textAlign: 'left', border: '1px solid #ddd' }}>K金（14K/18K）</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ padding: '11px 16px', border: '1px solid #ddd' }}>2026年每克參考收購價</td>
                  <td style={{ padding: '11px 16px', border: '1px solid #ddd' }}>約 920–1,080 元</td>
                  <td style={{ padding: '11px 16px', border: '1px solid #ddd' }}>約 2,900–3,100 元</td>
                  <td style={{ padding: '11px 16px', border: '1px solid #ddd' }}>750–2,300 元（依K數）</td>
                </tr>
                <tr style={{ backgroundColor: '#fafafa' }}>
                  <td style={{ padding: '11px 16px', border: '1px solid #ddd' }}>純度標記</td>
                  <td style={{ padding: '11px 16px', border: '1px solid #ddd' }}>Pt850/900/950/999</td>
                  <td style={{ padding: '11px 16px', border: '1px solid #ddd' }}>9999/999/990</td>
                  <td style={{ padding: '11px 16px', border: '1px solid #ddd' }}>333/585/750</td>
                </tr>
                <tr>
                  <td style={{ padding: '11px 16px', border: '1px solid #ddd' }}>密度</td>
                  <td style={{ padding: '11px 16px', border: '1px solid #ddd' }}>21.45 g/cm³</td>
                  <td style={{ padding: '11px 16px', border: '1px solid #ddd' }}>19.32 g/cm³</td>
                  <td style={{ padding: '11px 16px', border: '1px solid #ddd' }}>依K數變化</td>
                </tr>
                <tr style={{ backgroundColor: '#fafafa' }}>
                  <td style={{ padding: '11px 16px', border: '1px solid #ddd' }}>市場流動性</td>
                  <td style={{ padding: '11px 16px', border: '1px solid #ddd' }}>中等</td>
                  <td style={{ padding: '11px 16px', border: '1px solid #ddd' }}>高</td>
                  <td style={{ padding: '11px 16px', border: '1px solid #ddd' }}>中等</td>
                </tr>
                <tr>
                  <td style={{ padding: '11px 16px', border: '1px solid #ddd' }}>測試方式</td>
                  <td style={{ padding: '11px 16px', border: '1px solid #ddd' }}>XRF螢光分析</td>
                  <td style={{ padding: '11px 16px', border: '1px solid #ddd' }}>XRF / 試金石</td>
                  <td style={{ padding: '11px 16px', border: '1px solid #ddd' }}>XRF螢光分析</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 5 */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontSize: '22px', fontWeight: 'bold', borderLeft: '4px solid #b8860b', paddingLeft: '12px', marginBottom: '16px' }}>
            鑲鑽白金戒指能收嗎？
          </h2>
          <p style={{ lineHeight: '1.8', marginBottom: '12px' }}>
            可以，而且金屬和鑽石分開報價，你不需要把鑽石拆出來才能交。
          </p>
          <p style={{ lineHeight: '1.8', marginBottom: '12px' }}>
            白金戒台本體按克重和純度計算。鑽石另外用4C評估（克拉、切工、顏色、淨度），如果有GIA、AGS等國際證書，報價會更準確也更高。
          </p>
          <p style={{ lineHeight: '1.8', marginBottom: '12px' }}>
            沒有證書也沒關係，我們現場鑑定，鑑定費0元，看完報價你決定要不要賣。
          </p>
        </section>

        {/* Section 6 */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontSize: '22px', fontWeight: 'bold', borderLeft: '4px solid #b8860b', paddingLeft: '12px', marginBottom: '16px' }}>
            白金回收常見地雷
          </h2>
          <ul style={{ paddingLeft: '20px', lineHeight: '2' }}>
            <li style={{ marginBottom: '8px' }}>
              <strong>秤重不透明</strong>——看不到秤的數字，或用不校正的彈簧秤。我們的秤你看得到。
            </li>
            <li style={{ marginBottom: '8px' }}>
              <strong>說是Pt但刻字是750白色</strong>——白K金刻字750，不是Pt，兩者材質和價格完全不同。
            </li>
            <li style={{ marginBottom: '8px' }}>
              <strong>扣「加工費」或「熔煉費」</strong>——正規收購不應該在報價後再扣這些，一開始就應該說清楚。
            </li>
            <li style={{ marginBottom: '8px' }}>
              <strong>不出報價單</strong>——開口報價但不給書面，事後可能反悔說報錯。我們有書面確認流程。
            </li>
          </ul>
        </section>

        {/* FAQ */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontSize: '22px', fontWeight: 'bold', borderLeft: '4px solid #b8860b', paddingLeft: '12px', marginBottom: '24px' }}>
            常見問題
          </h2>

          {[
            {
              q: '白金和黃金哪個回收價值更高？',
              a: '目前（2026年）黃金每克約3,100–3,200元台幣，白金約1,050–1,100元，黃金收購價值明顯更高。但白金密度大，同體積的白金飾品通常比黃金更重，實際到手金額要秤完才知道。',
            },
            {
              q: 'Pt900和Pt950差在哪裡？',
              a: 'Pt900純度90%，Pt950純度95%。日本銀樓製品多用Pt900，歐美高端珠寶較常見Pt950。回收時Pt950每克收購價比Pt900高約5–8%。',
            },
            {
              q: '白金戒指上面沒有刻字還能回收嗎？',
              a: '可以。我們現場用XRF螢光儀器測試純度，5分鐘出結果，測完才報價，不需要你先猜材質。',
            },
            {
              q: '白金回收需要帶身分證嗎？',
              a: '金額達一定門檻需要登記身分，帶身分證、健保卡或駕照任一種即可，現場登記3分鐘完成。',
            },
            {
              q: '白金混搭了鑽石，回收時怎麼算？',
              a: '金屬和鑽石分開報價，金屬按克重算，鑽石按4C另評，有GIA證書溢價空間更大。不強迫拆開，兩個都給你報價。',
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
          <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '12px' }}>白金收購找巧品珠寶</h2>
          <p style={{ lineHeight: '1.8', marginBottom: '16px', color: '#555' }}>
            台北大安區，24小時收購。Pt900、Pt950、鑲鑽白金都收。<br />
            XRF現場測試，秤重全程透明，報價不扣耗損。
          </p>
          <p style={{ fontWeight: 'bold', fontSize: '17px', color: '#7a5c00', margin: 0 }}>
            地址：台北市大安區濟南路二段
          </p>
        </section>

        {/* Related Articles */}
        <section>
          <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '16px' }}>延伸閱讀</h2>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            <li style={{ marginBottom: '12px', borderLeft: '3px solid #b8860b', paddingLeft: '12px' }}>
              <a href="/blog/platinum-price-taiwan-2026" style={{ color: '#b8860b', textDecoration: 'none', fontWeight: 'bold' }}>
                2026台灣鉑金價格走勢｜白金還值得投資嗎？
              </a>
            </li>
            <li style={{ marginBottom: '12px', borderLeft: '3px solid #b8860b', paddingLeft: '12px' }}>
              <a href="/blog/k-gold-recovery-price-2026" style={{ color: '#b8860b', textDecoration: 'none', fontWeight: 'bold' }}>
                K金回收價格2026｜14K、18K、22K收購行情完整說明
              </a>
            </li>
            <li style={{ marginBottom: '12px', borderLeft: '3px solid #b8860b', paddingLeft: '12px' }}>
              <a href="/blog/gold-vs-platinum-guide" style={{ color: '#b8860b', textDecoration: 'none', fontWeight: 'bold' }}>
                黃金 vs 白金｜投資與收藏哪個更值錢？完整比較
              </a>
            </li>
            <li style={{ marginBottom: '12px', borderLeft: '3px solid #b8860b', paddingLeft: '12px' }}>
              <a href="/blog/gia-diamond-guide-2026" style={{ color: '#b8860b', textDecoration: 'none', fontWeight: 'bold' }}>
                GIA鑽石收購說明2026｜證書鑽戒回收怎麼算？
              </a>
            </li>
          </ul>
        </section>
      </main>
    </>
  )
}
