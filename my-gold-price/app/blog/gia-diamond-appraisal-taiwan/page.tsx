import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'GIA鑽石鑑定台灣｜GIA證書說明與鑽石回收指南｜巧品珠寶',
  description: 'GIA鑽石鑑定證書在台灣的意義與應用。如何看懂GIA證書4C評級？有GIA證書的鑽石回收價格更高嗎？巧品珠寶專業鑑定收購。',
  keywords: 'GIA鑽石鑑定,GIA證書台灣,鑽石回收台灣,GIA鑽石價格',
  alternates: {
    canonical: 'https://www.gold-tw.com/blog/gia-diamond-appraisal-taiwan',
  },
}

const faqs = [
  {
    q: '什麼是GIA鑽石鑑定？',
    a: 'GIA（Gemological Institute of America，美國寶石學院）是全球最權威的寶石鑑定機構。GIA鑽石鑑定證書詳細記錄鑽石的4C評級（Carat重量、Cut切工、Color顏色、Clarity淨度），是全球最受認可的鑽石品質證明文件。',
  },
  {
    q: '台灣哪裡可以查詢GIA證書？',
    a: '可至GIA官網（gia.edu）輸入證書編號查詢真偽。台灣也有GIA認可的珠寶鑑定機構，可進行鑽石鑑定。巧品珠寶收購鑽石時，GIA有證書的鑽石可獲得更精確的評估。',
  },
  {
    q: '有GIA證書的鑽石回收價格比較高嗎？',
    a: '有GIA證書能幫助買賣雙方確認鑽石品質，減少爭議，通常可獲得較精確的評估。但回收價格主要還是由鑽石本身的4C品質決定，而非證書本身。沒有GIA證書的鑽石仍可送鑑定後再回收，或由專業鑑定師現場評估。',
  },
  {
    q: '鑽石回收前需要準備什麼？',
    a: '準備好身分證（回收依法需要實名登記）。如有GIA或其他鑑定證書，請一併攜帶。沒有證書也可以，巧品珠寶會由專業鑑定師現場評估鑽石品質後報價。過程透明，你確認報價後再決定是否出售。',
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
            headline: 'GIA鑽石鑑定台灣｜GIA證書說明與鑽石回收指南',
            description: 'GIA鑽石鑑定證書在台灣的意義與應用。如何看懂GIA證書4C評級？有GIA證書的鑽石回收價格更高嗎？',
            mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://www.gold-tw.com/blog/gia-diamond-appraisal-taiwan' },
            author: { '@type': 'Organization', name: '巧品珠寶', url: 'https://www.gold-tw.com' },
            publisher: { '@type': 'Organization', name: '巧品珠寶', url: 'https://www.gold-tw.com' },
            datePublished: '2026-03-15T00:00:00+08:00',
            dateModified: '2026-04-01T00:00:00+08:00',
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
              { '@type': 'ListItem', position: 3, name: 'GIA鑽石鑑定台灣', item: 'https://www.gold-tw.com/blog/gia-diamond-appraisal-taiwan' },
            ],
          }),
        }}
      />
      <article style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
        <h1>GIA鑽石鑑定台灣｜GIA證書說明與鑽石回收指南</h1>

        <div style={{ background: '#fffbeb', borderLeft: '4px solid #f59e0b', padding: '16px', margin: '16px 0', borderRadius: '8px' }}>
          <strong>重點摘要：</strong> GIA是全球最權威的鑽石鑑定機構。持有GIA證書的鑽石可獲得更精確的品質評估。鑽石回收建議找有鑑定資質的珠寶商，如巧品珠寶。
        </div>

        <h2>GIA是什麼？</h2>
        <p>
          GIA（Gemological Institute of America）是美國寶石學院，
          成立於1931年，是全球寶石鑑定與研究領域最具公信力的機構。
          GIA建立了鑽石4C評級標準（Carat、Cut、Color、Clarity），
          目前已成為全球珠寶業界的通用語言。
          GIA的鑽石鑑定報告（Diamond Grading Report）被視為
          鑽石品質最權威的憑證。
        </p>

        <h2>如何看懂GIA鑽石證書？</h2>
        <h3>4C評級說明</h3>
        <table style={{ width: '100%', borderCollapse: 'collapse', margin: '1.5rem 0' }}>
          <thead>
            <tr style={{ background: '#f5f0e8' }}>
              <th style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'left' }}>評級項目</th>
              <th style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'left' }}>說明</th>
              <th style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'left' }}>最高等級</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>Carat（克拉重量）</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>1克拉＝0.2公克</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>越大越珍貴</td>
            </tr>
            <tr style={{ background: '#fafafa' }}>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>Cut（切工）</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>影響閃光亮度最關鍵的因素</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>Excellent (EX)</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>Color（顏色）</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>D-Z等級，D為最無色</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>D（無色）</td>
            </tr>
            <tr style={{ background: '#fafafa' }}>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>Clarity（淨度）</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>內外部瑕疵的程度</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>FL（無瑕疵）</td>
            </tr>
          </tbody>
        </table>

        <h2>台灣鑽石回收流程</h2>
        <p>
          在台灣出售或回收鑽石，建議前往信譽良好的珠寶商（如巧品珠寶），
          流程通常如下：
        </p>
        <ol style={{ paddingLeft: '1.5rem', lineHeight: '2' }}>
          <li>攜帶鑽石及身分證前往門市（依法需實名登記）</li>
          <li>如有GIA或其他鑑定書，一併攜帶</li>
          <li>由鑑定師現場評估鑽石的4C品質</li>
          <li>依品質給出報價，你確認後再決定是否出售</li>
          <li>確認出售後，當場現金交付</li>
        </ol>

        <h2>常見問題</h2>
        {faqs.map((f, i) => (
          <div key={i} style={{ marginBottom: '1.5rem' }}>
            <h3>{f.q}</h3>
            <p>{f.a}</p>
          </div>
        ))}

        <div style={{ margin: '2rem 0', padding: '1.5rem', background: '#FEF9E7', borderRadius: '8px', borderLeft: '4px solid #B8860B' }}>
          <strong>延伸閱讀：</strong>
          <ul style={{ marginTop: '0.5rem', paddingLeft: '1.5rem' }}>
            <li><a href="/blog/diamond-recovery-price" style={{ color: '#B8860B' }}>鑽石回收價格行情｜台灣收購說明</a></li>
            <li><a href="/blog/diamond-jewelry" style={{ color: '#B8860B' }}>鑽石珠寶完整指南</a></li>
            <li><a href="/blog/second-hand-jewelry-purchase" style={{ color: '#B8860B' }}>二手珠寶收購服務</a></li>
            <li><a href="/blog/gold-appraise" style={{ color: '#B8860B' }}>黃金與珠寶鑑價說明</a></li>
          </ul>
        </div>

        <hr style={{ margin: '2rem 0' }} />
        <h2>立即諮詢</h2>
        <p>電話：<a href="tel:0986821626" style={{ color: '#B8860B' }}>0986-821-626</a></p>
        <p>LINE：<a href="https://line.me/ti/p/~@QPD888" style={{ color: '#06C755' }}>@QPD888</a></p>
        <p>地址：台北市大安區濟南路三段62-1號</p>
        <p>官網：<a href="https://www.gold-tw.com/" style={{ color: '#B8860B' }}>www.gold-tw.com</a></p>
      </article>
    </>
  )
}
