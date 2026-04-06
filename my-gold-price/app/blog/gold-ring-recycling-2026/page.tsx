import type { Metadata } from 'next'
import Script from 'next/script'

export const metadata: Metadata = {
  title: '黃金戒指回收2026｜各K數報價、流程與注意事項完整說明',
  description: '黃金戒指回收完整指南。24K純金戒、18K戒指、鑲鑽金戒怎麼算？帶什麼去、要注意什麼、哪裡收購最划算，巧品珠寶台北大安24小時收購。 台北巧品珠寶鑑定師L親自鑑定，10年以上珠寶鑑定資歷，透明報價不扣耗損，台北大安區濟南路三段62-1號，提供免費估價與諮詢服務。',
  openGraph: {
    title: '黃金戒指回收2026｜各K數報價、流程與注意事項完整說明',
    description: '黃金戒指回收完整指南。24K純金戒、18K戒指、鑲鑽金戒怎麼算？帶什麼去、要注意什麼、哪裡收購最划算，巧品珠寶台北大安24小時收購。',
    type: 'article',
    locale: 'zh_TW',
  },
}

const jsonLdBlogPosting = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: '黃金戒指回收2026｜各K數報價、流程與注意事項完整說明',
  description: '黃金戒指回收完整指南。24K純金戒、18K戒指、鑲鑽金戒怎麼算？帶什麼去、要注意什麼、哪裡收購最划算，巧品珠寶台北大安24小時收購。',
  author: { '@type': 'Organization', name: '巧品珠寶' },
  publisher: { '@type': 'Organization', name: '巧品珠寶' },
  datePublished: '2026-04-06',
  dateModified: '2026-04-06',
  inLanguage: 'zh-TW',
  mainEntityOfPage: 'https://gold-web-v2.vercel.app/blog/gold-ring-recycling-2026',
}

const jsonLdBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: '首頁', item: 'https://gold-web-v2.vercel.app' },
    { '@type': 'ListItem', position: 2, name: '部落格', item: 'https://gold-web-v2.vercel.app/blog' },
    { '@type': 'ListItem', position: 3, name: '黃金戒指回收2026', item: 'https://gold-web-v2.vercel.app/blog/gold-ring-recycling-2026' },
  ],
}

const jsonLdFAQ = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '黃金戒指回收需要帶什麼？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '帶戒指本身和一張身分證明文件（身分證、健保卡或駕照擇一）即可。不需要購買憑證、原廠盒或收據。若有鑑定書或GIA證書，帶來可以加快流程、提升報價準確性。',
      },
    },
    {
      '@type': 'Question',
      name: '婚戒可以回收嗎？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '可以。婚戒的回收方式和一般戒指完全相同，按材質（黃金含量或白金含量）和重量計算報價。如果婚戒上有刻字，不影響報價，也不需要特別打磨。',
      },
    },
    {
      '@type': 'Question',
      name: '鑲鑽石的黃金戒指怎麼回收？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '金屬戒台和鑽石分開計算。戒台按黃金克重和K數報價；鑽石另外用4C（克拉、切工、顏色、淨度）鑑定報價。有GIA等國際證書的鑽石，溢價空間更高。不強迫拆開，兩個都給你報價。',
      },
    },
    {
      '@type': 'Question',
      name: '戒指變形或有刮痕，回收價會受影響嗎？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '黃金和K金的回收按材質和重量計算，外觀損傷不影響報價。壓扁、刮花、氧化變黑的戒指都可以正常回收，不會因為「外觀不好」而扣價。',
      },
    },
    {
      '@type': 'Question',
      name: '黃金戒指回收和銀樓收購有什麼差別？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '傳統銀樓的收購報價通常比專業回收商低10%-20%，因為銀樓主要做零售，回收是附帶服務。專業黃金回收商的折扣率較高（92%-93%），報價更接近市場價。建議多問幾家比較。',
      },
    },
  ],
}

export default function GoldRingRecycling2026() {
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
          <span>黃金戒指回收2026</span>
        </nav>

        <h1 style={{ fontSize: '28px', fontWeight: 'bold', lineHeight: '1.4', marginBottom: '16px' }}>
          黃金戒指回收2026｜各K數報價、流程與注意事項完整說明
        </h1>
      <div style={{ background: '#fffbeb', borderLeft: '4px solid #f59e0b', padding: '16px', margin: '16px 0', borderRadius: '8px' }}>
        <strong>重點摘要：</strong> 黃金戒指回收完整指南。24K純金戒、18K戒指、鑲鑽金戒怎麼算？帶什麼去、要注意什麼、哪裡收購最划算，巧品珠寶台北大安24小時收購。
      </div>

      <div style={{ background: '#fff3f3', border: '1px solid #fca5a5', borderRadius: '8px', padding: '16px 20px', margin: '24px 0' }}>
        <strong style={{ color: '#dc2626' }}>這篇不適合你，如果…</strong>
        <ul style={{ margin: '8px 0 0', paddingLeft: '20px', color: '#374151' }}>
        <li>你的黃金是純金（999/9999）→ <a href="/blog/gold-recycling-taipei" style={{ color: '#b45309' }}>純金回收說明</a></li>
        <li>你只想快速查今天金價 → <a href="/daily-gold-price" style={{ color: '#b45309' }}>直接看今日金價</a></li>
        <li>你是第一次接觸黃金 → <a href="/blog/gold-buying-guide-beginner-2026" style={{ color: '#b45309' }}>新手買金入門</a></li>
        </ul>
      </div>


      
        <p style={{ fontSize: '16px', color: '#555', marginBottom: '32px', lineHeight: '1.8' }}>
          更新：2026年4月6日。黃金戒指是最常見的黃金回收品項之一，從24K純金戒、18K鑲鑽婚戒、到14K K金飾戒都有人拿來收購。這篇說清楚不同類型黃金戒指的報價方式、帶什麼去、哪些地方容易被坑。
        </p>

        {/* Section 1 */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontSize: '22px', fontWeight: 'bold', borderLeft: '4px solid #b8860b', paddingLeft: '12px', marginBottom: '16px' }}>
            黃金戒指回收報價：按類型分說明
          </h2>
          <p style={{ lineHeight: '1.8', marginBottom: '16px' }}>
            黃金戒指的回收價取決於三件事：材質（K數）、重量（克）、以及有沒有鑲嵌寶石。以下按常見類型說明：
          </p>

          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '15px' }}>
              <thead>
                <tr style={{ backgroundColor: '#f5f0e8' }}>
                  <th style={{ padding: '12px 16px', textAlign: 'left', border: '1px solid #ddd', fontWeight: 'bold' }}>戒指類型</th>
                  <th style={{ padding: '12px 16px', textAlign: 'left', border: '1px solid #ddd', fontWeight: 'bold' }}>K數</th>
                  <th style={{ padding: '12px 16px', textAlign: 'left', border: '1px solid #ddd', fontWeight: 'bold' }}>2026年4月參考收購價（元/克）</th>
                  <th style={{ padding: '12px 16px', textAlign: 'left', border: '1px solid #ddd', fontWeight: 'bold' }}>備註</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ padding: '11px 16px', border: '1px solid #ddd' }}>廟宇金戒 / 千足金</td>
                  <td style={{ padding: '11px 16px', border: '1px solid #ddd' }}>24K（99.9%）</td>
                  <td style={{ padding: '11px 16px', border: '1px solid #ddd', fontWeight: 'bold', color: '#7a5c00' }}>約 2,850–2,950 元</td>
                  <td style={{ padding: '11px 16px', border: '1px solid #ddd' }}>最高收購價，純金含量高</td>
                </tr>
                <tr style={{ backgroundColor: '#fafafa' }}>
                  <td style={{ padding: '11px 16px', border: '1px solid #ddd' }}>婚戒 / 訂婚戒（黃金款）</td>
                  <td style={{ padding: '11px 16px', border: '1px solid #ddd' }}>18K–24K</td>
                  <td style={{ padding: '11px 16px', border: '1px solid #ddd', fontWeight: 'bold', color: '#7a5c00' }}>約 2,100–2,950 元</td>
                  <td style={{ padding: '11px 16px', border: '1px solid #ddd' }}>依K數計算，刻字不影響報價</td>
                </tr>
                <tr>
                  <td style={{ padding: '11px 16px', border: '1px solid #ddd' }}>K金飾戒（無鑲嵌）</td>
                  <td style={{ padding: '11px 16px', border: '1px solid #ddd' }}>14K / 18K</td>
                  <td style={{ padding: '11px 16px', border: '1px solid #ddd', fontWeight: 'bold', color: '#7a5c00' }}>約 1,640–2,200 元</td>
                  <td style={{ padding: '11px 16px', border: '1px solid #ddd' }}>白K金、玫瑰金同等報價</td>
                </tr>
                <tr style={{ backgroundColor: '#fafafa' }}>
                  <td style={{ padding: '11px 16px', border: '1px solid #ddd' }}>鑲鑽戒指</td>
                  <td style={{ padding: '11px 16px', border: '1px solid #ddd' }}>18K / Pt950</td>
                  <td style={{ padding: '11px 16px', border: '1px solid #ddd', fontWeight: 'bold', color: '#7a5c00' }}>戒台按克重 + 鑽石另計</td>
                  <td style={{ padding: '11px 16px', border: '1px solid #ddd' }}>GIA證書可提升鑽石報價</td>
                </tr>
                <tr>
                  <td style={{ padding: '11px 16px', border: '1px solid #ddd' }}>白金（鉑金）戒指</td>
                  <td style={{ padding: '11px 16px', border: '1px solid #ddd' }}>Pt900 / Pt950</td>
                  <td style={{ padding: '11px 16px', border: '1px solid #ddd', fontWeight: 'bold', color: '#7a5c00' }}>約 920–1,030 元</td>
                  <td style={{ padding: '11px 16px', border: '1px solid #ddd' }}>鉑金報價低於黃金，正常現象</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p style={{ fontSize: '13px', color: '#888', marginTop: '8px' }}>
            ※ 上表為參考區間，實際報價依當日國際金價及成色測試結果調整。
          </p>
        </section>

        {/* Section 2 */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontSize: '22px', fontWeight: 'bold', borderLeft: '4px solid #b8860b', paddingLeft: '12px', marginBottom: '16px' }}>
            回收前要做什麼準備？
          </h2>
          <p style={{ lineHeight: '1.8', marginBottom: '12px' }}>
            黃金戒指回收沒有太多準備，主要注意這幾點：
          </p>
          <ul style={{ paddingLeft: '20px', lineHeight: '2' }}>
            <li style={{ marginBottom: '8px' }}>
              <strong>查刻字</strong>——戒指內圈通常有刻字，例如「750」（18K）、「585」（14K）、「9999」（純金）。拍照留存，方便事後確認。
            </li>
            <li style={{ marginBottom: '8px' }}>
              <strong>帶身分證明</strong>——身分證、健保卡、駕照擇一，回收登記用
            </li>
            <li style={{ marginBottom: '8px' }}>
              <strong>有鑑定書記得帶</strong>——鑽石或寶石的鑑定書（GIA、GRS等）帶來，有書報價更準確且更高
            </li>
            <li style={{ marginBottom: '8px' }}>
              <strong>不需要清洗</strong>——不需要先清洗或打磨，回收時直接秤重，清潔度不影響報價
            </li>
          </ul>
          <div style={{ backgroundColor: 'rgba(255,215,0,0.1)', border: '1px solid #e6c200', borderRadius: '8px', padding: '16px', marginTop: '16px' }}>
            <p style={{ margin: 0, color: '#7a5c00' }}>
              <strong>不需要帶的：</strong>購買收據、原廠盒、保養記錄。這些不影響報價，忘帶了沒關係。
            </p>
          </div>
        </section>

        {/* Section 3 */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontSize: '22px', fontWeight: 'bold', borderLeft: '4px solid #b8860b', paddingLeft: '12px', marginBottom: '16px' }}>
            鑲鑽黃金戒指回收：金屬和鑽石分開算
          </h2>
          <p style={{ lineHeight: '1.8', marginBottom: '12px' }}>
            很多人以為鑲鑽戒指要先把鑽石拆掉才能回收。不需要。我們直接整只評估，分開報價：
          </p>
          <ol style={{ paddingLeft: '20px', lineHeight: '2' }}>
            <li style={{ marginBottom: '8px' }}>
              <strong>戒台部分</strong>——XRF測K數，電子秤秤戒台重量（鑲嵌的鑽石重量會扣除），報黃金或白金價格
            </li>
            <li style={{ marginBottom: '8px' }}>
              <strong>主鑽部分</strong>——用放大鏡和儀器評估4C（克拉、切工、顏色、淨度），有GIA/AGS國際證書溢價更高
            </li>
            <li style={{ marginBottom: '8px' }}>
              <strong>配鑽和小碎鑽</strong>——通常按整批重量計算，單顆太小的碎鑽報價較低
            </li>
          </ol>
          <p style={{ lineHeight: '1.8', marginBottom: '12px' }}>
            整只一起報價，你確認後才決定要不要賣。不強迫整只賣，也不強迫只賣金屬不賣鑽石。
          </p>
        </section>

        {/* Section 4 */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontSize: '22px', fontWeight: 'bold', borderLeft: '4px solid #b8860b', paddingLeft: '12px', marginBottom: '16px' }}>
            黃金戒指回收常見地雷
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {[
              {
                title: '說「高價收購」但事後扣耗損',
                content: '報價後以「熔煉損耗」為由扣3%-5%重量，等於實際少拿。問清楚：報價有沒有扣耗損？',
              },
              {
                title: '用彈簧秤或不校正的秤',
                content: '差0.1克在14K就差160元，差0.5克差800元。堅持用電子精密秤，且秤重過程你要能看到數字。',
              },
              {
                title: '說K數不對、純度打折',
                content: '如果刻字寫750（18K），正規測試應確認75%純度。如果店家說「我們測出來只有70%」，要求看測試報告。',
              },
              {
                title: '鑲嵌戒指不告知鑽石重量',
                content: '鑽石不計入黃金重量，但有些店不說清楚扣了多少。要問：扣掉鑽石後的純金重是多少克？',
              },
            ].map(({ title, content }) => (
              <div key={title} style={{ border: '1px solid #e0d5c0', borderRadius: '8px', padding: '16px' }}>
                <h3 style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '8px', color: '#c0392b' }}>⚠ {title}</h3>
                <p style={{ margin: 0, lineHeight: '1.8', color: '#555' }}>{content}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 5 */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontSize: '22px', fontWeight: 'bold', borderLeft: '4px solid #b8860b', paddingLeft: '12px', marginBottom: '16px' }}>
            黃金戒指回收流程（巧品珠寶）
          </h2>
          <ol style={{ paddingLeft: '20px', lineHeight: '2' }}>
            <li style={{ marginBottom: '10px' }}>
              <strong>攜帶戒指到店</strong>——台北市大安區濟南路二段，24小時服務，無需預約
            </li>
            <li style={{ marginBottom: '10px' }}>
              <strong>XRF純度測試</strong>——確認K數或鉑金成色，5分鐘非破壞性測試
            </li>
            <li style={{ marginBottom: '10px' }}>
              <strong>精密電子秤秤重</strong>——你可以在旁邊盯著，數字清楚顯示
            </li>
            <li style={{ marginBottom: '10px' }}>
              <strong>鑽石/寶石鑑定</strong>（如有）——4C評估，有GIA證書加快流程
            </li>
            <li style={{ marginBottom: '10px' }}>
              <strong>報價確認</strong>——當場計算，你確認後才算成交
            </li>
            <li style={{ marginBottom: '10px' }}>
              <strong>現金或轉帳付款</strong>——大額可事先聯繫，當天取款方便
            </li>
          </ol>
        </section>

        {/* Section 6 */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontSize: '22px', fontWeight: 'bold', borderLeft: '4px solid #b8860b', paddingLeft: '12px', marginBottom: '16px' }}>
            婚戒回收：情感問題先放一邊
          </h2>
          <p style={{ lineHeight: '1.8', marginBottom: '12px' }}>
            婚戒是台灣常見的黃金戒指回收品項。很多人在婚姻結束後或是需要現金時，選擇把婚戒賣掉。
          </p>
          <p style={{ lineHeight: '1.8', marginBottom: '12px' }}>
            從回收的角度，婚戒就是一只黃金或K金戒指，報價方式和其他戒指完全相同。內圈刻有名字或日期不影響報價，也不需要打磨掉。
          </p>
          <p style={{ lineHeight: '1.8' }}>
            如果是有品牌的婚戒（Tiffany、Cartier、Mikimoto等），品牌溢價在二手市場可能有加分，建議先詢問是否有品牌加價空間，再決定是否整售或只收金屬。
          </p>
        </section>

        {/* FAQ */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontSize: '22px', fontWeight: 'bold', borderLeft: '4px solid #b8860b', paddingLeft: '12px', marginBottom: '24px' }}>
            常見問題
          </h2>

          {[
            {
              q: '黃金戒指回收需要帶什麼？',
              a: '帶戒指本身和一張身分證明（身分證、健保卡或駕照）即可。不需要購買憑證或原廠盒。有鑑定書或GIA證書記得帶來，可提升鑽石報價準確性。',
            },
            {
              q: '婚戒可以回收嗎？',
              a: '可以。婚戒的回收方式和一般戒指完全相同，按材質和重量計算報價。戒指內圈刻字不影響報價，也不需要打磨。',
            },
            {
              q: '鑲鑽石的黃金戒指怎麼回收？',
              a: '金屬戒台和鑽石分開計算。戒台按克重和K數報價；鑽石按4C另評。不強迫拆開，兩個都給你報價，你決定怎麼賣。',
            },
            {
              q: '戒指變形或有刮痕，回收價會受影響嗎？',
              a: '黃金和K金按材質和重量計算，外觀損傷不影響報價。壓扁、刮花、氧化的戒指都可以正常回收。',
            },
            {
              q: '黃金戒指回收和銀樓收購有什麼差別？',
              a: '傳統銀樓收購報價通常比專業回收商低10%-20%，因為銀樓以零售為主，回收是附帶服務。建議多比較幾家，特別注意是否有扣耗損。',
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
          <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '12px' }}>黃金戒指回收找巧品珠寶</h2>
          <p style={{ lineHeight: '1.8', marginBottom: '16px', color: '#555' }}>
            24K純金戒、18K婚戒、鑲鑽戒指、白金戒指都收。<br />
            XRF現場測試，秤重透明，不扣耗損，報價就是到手價。
          </p>
          <p style={{ fontWeight: 'bold', fontSize: '17px', color: '#7a5c00', margin: 0 }}>
            台北市大安區濟南路二段｜24小時開放
          </p>
        </section>

        {/* Related */}
        <section>
          <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '16px' }}>延伸閱讀</h2>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            <li style={{ marginBottom: '12px', borderLeft: '3px solid #b8860b', paddingLeft: '12px' }}>
              <a href="/blog/gold-ring-recovery" style={{ color: '#b8860b', textDecoration: 'none', fontWeight: 'bold' }}>
                黃金戒指回收說明｜舊戒指賣掉能拿多少？
              </a>
            </li>
            <li style={{ marginBottom: '12px', borderLeft: '3px solid #b8860b', paddingLeft: '12px' }}>
              <a href="/blog/gia-diamond-guide-2026" style={{ color: '#b8860b', textDecoration: 'none', fontWeight: 'bold' }}>
                GIA鑽石收購說明2026｜鑽戒回收怎麼算最划算？
              </a>
            </li>
            <li style={{ marginBottom: '12px', borderLeft: '3px solid #b8860b', paddingLeft: '12px' }}>
              <a href="/blog/gold-recovery-traps" style={{ color: '#b8860b', textDecoration: 'none', fontWeight: 'bold' }}>
                黃金回收常見陷阱｜這5種店請直接離開
              </a>
            </li>
            <li style={{ marginBottom: '12px', borderLeft: '3px solid #b8860b', paddingLeft: '12px' }}>
              <a href="/blog/k-gold-recovery-price-2026" style={{ color: '#b8860b', textDecoration: 'none', fontWeight: 'bold' }}>
                K金回收價格2026｜14K、18K收購行情完整說明
              </a>
            </li>
          </ul>
        </section>
      </main>
    </>
  )
}
