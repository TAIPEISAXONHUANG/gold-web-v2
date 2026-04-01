import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AU750黃金是什麼？含金量、回收價格完整指南｜巧品珠寶',
  description: 'AU750是18K黃金，含金量75%。本文說明AU750印記意義、2026年回收價格計算方式，以及如何辨別AU750首飾。巧品珠寶即時報價。',
  keywords: 'AU750黃金,AU750含金量,18K回收價格,AU750是什麼',
  alternates: {
    canonical: 'https://www.gold-tw.com/blog/au750-gold-price-guide',
  },
}

const faqs = [
  {
    q: 'AU750是什麼意思？',
    a: 'AU750是黃金印記，AU代表黃金（拉丁文Aurum），750代表千分之750即含金量75%，等同於18K黃金。這是國際通用的歐式印記標法，台灣進口首飾常見此標記。',
  },
  {
    q: 'AU750和18K金有什麼不同？',
    a: '兩者完全相同。AU750＝18K金，含金量都是75%。AU750是歐洲工業標準的千分比標法，18K是傳統克拉（Karat）標法，只是表示方式不同，成分和價值完全一樣。',
  },
  {
    q: 'AU750黃金回收價格怎麼計算？',
    a: '計算公式：AU750回收價 ＝ 重量（克）× 當日9999純金每克回收價 × 75%。以2026年純金每克約4,960元為例：1克AU750黃金回收約4,960 × 75% ＝ 3,720元。實際報價請洽巧品珠寶確認當日行情。',
  },
  {
    q: '如何辨別首飾是否為AU750？',
    a: '可以在首飾的扣頭、內圈或不顯眼處尋找刻印。AU750、750、18K、18KGP（鍍金）都是常見印記。注意「18KGP」表示鍍18K金而非實心18K，回收價值極低。正規銀樓可用XRF儀器現場驗成色，幾秒出結果。',
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
            headline: 'AU750黃金是什麼？含金量、回收價格完整指南',
            description: 'AU750是18K黃金，含金量75%。本文說明AU750印記意義、2026年回收價格計算方式，以及如何辨別AU750首飾。',
            mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://www.gold-tw.com/blog/au750-gold-price-guide' },
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
              { '@type': 'ListItem', position: 3, name: 'AU750黃金完整指南', item: 'https://www.gold-tw.com/blog/au750-gold-price-guide' },
            ],
          }),
        }}
      />
      <article style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
        <h1>AU750黃金是什麼？含金量、回收價格完整指南</h1>

        <div style={{ background: '#fffbeb', borderLeft: '4px solid #f59e0b', padding: '16px', margin: '16px 0', borderRadius: '8px' }}>
          <strong>重點摘要：</strong> AU750 ＝ 18K金，含金量75%。2026年每克AU750回收參考價約3,720元，每錢（3.75克）約13,950元。
        </div>

        <h2>AU750是什麼？</h2>
        <p>
          AU是黃金的化學符號（源自拉丁文 Aurum），750代表千分之750，
          即含金量為75%。AU750是歐洲EN 29162工業標準的黃金印記，
          等同於中文常說的18K金或18克拉金。
          台灣市場的進口首飾（尤其義大利、香港製造）常以AU750標示。
        </p>

        <h2>AU750含金量與常見黃金印記對照</h2>
        <table style={{ width: '100%', borderCollapse: 'collapse', margin: '1.5rem 0' }}>
          <thead>
            <tr style={{ background: '#f5f0e8' }}>
              <th style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'left' }}>印記</th>
              <th style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'left' }}>等同說法</th>
              <th style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>含金量</th>
              <th style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>每克回收參考價</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>9999 / 999</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>足金、純金、24K</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>99.9%</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>約 4,960 元</td>
            </tr>
            <tr style={{ background: '#fafafa' }}>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>AU916 / 916</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>22K金</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>91.6%</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>約 4,544 元</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>AU750 / 750</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>18K金</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>75%</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>約 3,720 元</td>
            </tr>
            <tr style={{ background: '#fafafa' }}>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>585</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>14K金</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>58.5%</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>約 2,902 元</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>417</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>10K金</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>41.7%</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>約 2,068 元</td>
            </tr>
          </tbody>
        </table>

        <h2>AU750回收注意事項</h2>
        <p>
          攜帶AU750首飾前往回收時，以下幾點需要注意：
        </p>
        <ul>
          <li><strong>確認印記</strong>：在扣頭或不顯眼處找到AU750、750或18K的印記</li>
          <li><strong>儀器驗成色</strong>：正規業者（如巧品珠寶）使用XRF儀器現場驗成色，不靠目測</li>
          <li><strong>無扣耗損</strong>：好的回收商不應扣除「火耗」，報價就是含金量 × 當日金價</li>
          <li><strong>鑲嵌寶石</strong>：如有鑽石或彩寶，回收時會分別評估寶石與黃金的價值</li>
        </ul>

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
            <li><a href="/blog/k-gold-recovery-price-2026" style={{ color: '#B8860B' }}>K金回收價格2026｜18K、14K今日行情</a></li>
            <li><a href="/blog/gold-purity" style={{ color: '#B8860B' }}>黃金純度大解析｜9999、9958、18K換算</a></li>
            <li><a href="/blog/karat-gold-guide" style={{ color: '#B8860B' }}>K金完整指南｜從18K到10K全說明</a></li>
            <li><a href="/blog/gold-identification" style={{ color: '#B8860B' }}>黃金真偽鑑定方法</a></li>
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
