import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'K金回收價格指南2026｜18K、14K完整計算攻略｜巧品珠寶',
  description: '2026年K金回收完整指南：18K、14K、10K回收價格怎麼算？如何避免被坑？台北巧品珠寶XRF驗成色，不扣耗損，當場現金報價。電洽0986-821-626。',
  keywords: 'K金回收價格,18K回收2026,K金回收指南,K金含金量計算',
  alternates: {
    canonical: 'https://www.gold-tw.com/blog/k-gold-recovery-price-guide-2026',
  },
}

const faqs = [
  {
    q: '2026年18K金每錢回收大概多少錢？',
    a: '2026年以純金每錢約18,000元計算，18K金（含金量75%）每錢回收參考價約13,500元（18,000 × 75%）。實際價格依當日牌價而定，建議電洽巧品珠寶確認即時報價。',
  },
  {
    q: 'K金回收和純金回收有什麼不同？',
    a: '純金（9999/足金）含金量99.99%，K金（18K/14K/10K）含金量依K數不同（75%/58.5%/41.7%）。K金回收時，報價是「當日純金回收價 × 含金量比例」，所以同重量K金的回收價低於純金。',
  },
  {
    q: 'K金首飾上標「750」是幾K金？',
    a: '750是歐洲千分比印記，代表含金量750/1000 ＝ 75%，等同於18K金。常見的K金印記：750（18K）、585（14K）、417（10K）。這些印記和AU750、18K、14K是相同的意思，只是標示方式不同。',
  },
  {
    q: 'K金回收前如何確認K數？',
    a: '可在飾品不顯眼處（如扣頭、內圈）尋找印記，常見有：750、585、417、18K、14K等。若找不到印記，可攜帶至正規銀樓，使用XRF儀器30秒內現場驗成色，不需猜測。巧品珠寶提供免費驗成色服務。',
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
            headline: 'K金回收價格指南2026｜18K、14K完整計算攻略',
            description: '2026年K金回收完整指南：18K、14K、10K回收價格怎麼算？如何避免被坑？台北巧品珠寶XRF驗成色，不扣耗損，當場現金報價。',
            mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://www.gold-tw.com/blog/k-gold-recovery-price-guide-2026' },
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
              { '@type': 'ListItem', position: 3, name: 'K金回收價格指南2026', item: 'https://www.gold-tw.com/blog/k-gold-recovery-price-guide-2026' },
            ],
          }),
        }}
      />
      <article style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
        <h1>K金回收價格指南2026｜18K、14K完整計算攻略</h1>

        <div style={{ background: '#fffbeb', borderLeft: '4px solid #f59e0b', padding: '16px', margin: '16px 0', borderRadius: '8px' }}>
          <strong>重點摘要：</strong> K金回收價格 ＝ 當日純金回收價 × 含金量。18K為75%、14K為58.5%、10K為41.7%。回收前先自己算，確保報價合理。
        </div>

        <h2>K金回收計算公式</h2>
        <p>
          K金回收的計算邏輯非常直接：
        </p>
        <p style={{ background: '#f5f0e8', padding: '1rem', borderRadius: '6px', fontFamily: 'monospace' }}>
          回收金額 ＝ 重量（克）× 當日9999純金每克回收價 × 含金量（%）
        </p>
        <p>
          例如：你有一條18K金項鍊，重5克。當日9999純金回收每克4,960元。
          → 5 × 4,960 × 75% ＝ <strong>18,600元</strong>
        </p>

        <h2>2026年K金回收價格對照（參考）</h2>
        <table style={{ width: '100%', borderCollapse: 'collapse', margin: '1.5rem 0' }}>
          <thead>
            <tr style={{ background: '#f5f0e8' }}>
              <th style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'left' }}>K金種類</th>
              <th style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>含金量</th>
              <th style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>每克回收參考</th>
              <th style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>每錢回收參考</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>9999純金</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>99.9%</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>約 4,960 元</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>約 18,600 元</td>
            </tr>
            <tr style={{ background: '#fafafa' }}>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>18K（AU750）</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>75%</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>約 3,720 元</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>約 13,950 元</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>14K（585）</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>58.5%</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>約 2,902 元</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>約 10,882 元</td>
            </tr>
            <tr style={{ background: '#fafafa' }}>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>10K（417）</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>41.7%</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>约 2,068 元</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>约 7,755 元</td>
            </tr>
          </tbody>
        </table>
        <p>以上數字以2026年參考金價每克約4,960元計算，實際請洽當日報價。</p>

        <h2>K金回收常見陷阱</h2>
        <ul>
          <li><strong>扣火耗</strong>：正規店家不應扣除火耗，現代回收不需熔金</li>
          <li><strong>低報成色</strong>：750被說成「雜金」，用XRF驗成色可防止這類情況</li>
          <li><strong>忽視寶石</strong>：飾品有鑲嵌寶石的，寶石應另外評估價值</li>
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
            <li><a href="/blog/k-gold-recovery-guide-2026" style={{ color: '#B8860B' }}>K金回收攻略2026｜哪家收最划算？</a></li>
            <li><a href="/blog/au750-gold-price-guide" style={{ color: '#B8860B' }}>AU750黃金完整指南｜含金量與回收</a></li>
            <li><a href="/blog/gold-recovery-traps" style={{ color: '#B8860B' }}>黃金回收常見話術與陷阱</a></li>
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
