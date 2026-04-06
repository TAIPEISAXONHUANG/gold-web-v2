import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '黃金純度鑑定2026｜999、18K、14K怎麼測？方法與注意事項完整說明',
  description: '黃金純度怎麼鑑定？火試法、X光螢光儀、酸測三種方法各有什麼差異？2026年帶你看清楚黃金純度標記與鑑定實務，賣金前先看這篇。 台北巧品珠寶鑑定師L親自鑑定，10年以上珠寶鑑定資歷，透明報價不扣耗損，台北大安區濟南路三段62-1號，提供免費估價與諮詢服務。',
  keywords: '黃金純度鑑定,黃金鑑定,黃金成色,K金純度,黃金純度測試,999黃金,18K純度,14K純度,黃金真假',
  alternates: {
    canonical: 'https://www.gold-tw.com/blog/gold-purity-testing-2026',
  },
  openGraph: {
    locale: 'zh_TW',
    title: '黃金純度鑑定2026｜999、18K、14K怎麼測？方法與注意事項完整說明',
    description: '黃金純度怎麼鑑定？火試法、X光螢光儀、酸測三種方法各有什麼差異？2026年帶你看清楚黃金純度標記與鑑定實務，賣金前先看這篇。',
    type: 'article',
    url: 'https://www.gold-tw.com/blog/gold-purity-testing-2026',
    siteName: '巧品珠寶',
    publishedTime: '2026-04-06T14:00:00+08:00',
    modifiedTime: '2026-04-06T14:00:00+08:00',
    images: [{ url: '/og-image.webp', width: 1200, height: 630, alt: '巧品珠寶' }],
  },
};

const faqs = [
  {
    q: '黃金純度的標記是什麼意思？',
    a: '常見標記有幾種系統：999 代表純金 99.9%；999.9 是四九金。K金系統：24K 理論上是純金，18K 是 75%（750/1000），14K 是 58.3%（585/1000），10K 是 41.7%（417/1000）。GF 代表包金（Gold Filled），GP 代表鍍金——這兩種不是實心黃金，不能以黃金價格收購。',
  },
  {
    q: '酸測法可靠嗎？家裡可以自己做嗎？',
    a: '酸測法（硝酸試金法）有一定準確度，但有風險：硝酸是強酸，操作不當會傷手或腐蝕台面。正確做法是在磨石上留下金樣，滴硝酸觀察反應——純金無反應，K金依成色反應不同。家裡操作可行但建議謹慎；送到有 XRF 儀器的銀樓，30 秒出結果，比自己測更精確。',
  },
  {
    q: 'XRF（X光螢光儀）鑑定準確嗎？',
    a: 'XRF 是目前最常用的非破壞性黃金成色分析工具，準確率相當高，誤差通常在 0.1% 以內。正規銀樓、當舖都有這台設備。測試只需 30 秒，不需刮削或破壞飾品表面。測試費用一般免費（帶去評估回收時附帶測試）。',
  },
  {
    q: '如果飾品上沒有標記，還能知道純度嗎？',
    a: '可以，這就是 XRF 或火試法的用武之地。許多古董金飾、古董金條、以及部分手工飾品沒有現代標準刻印，但成色仍可透過儀器精確測定。帶來店裡，我們現場測完直接告訴你成分和換算報價，不需要標記。',
  },
  {
    q: '拿到的黃金報價是依什麼純度計算？',
    a: '依照實際測定純度折算。例如你有 18K 飾品（75% 純度），今日黃金現貨每克 3,200 元，扣掉工本後你拿到的大約是：重量 × 3,200 × 0.75 × 回收折扣率。有些店會扣 5% 火耗，巧品珠寶不扣耗損，秤重和成色都讓你全程確認。',
  },
];

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
                headline: '黃金純度鑑定2026｜999、18K、14K怎麼測？方法與注意事項完整說明',
                description: '黃金純度怎麼鑑定？火試法、X光螢光儀、酸測三種方法各有什麼差異？2026年帶你看清楚黃金純度標記與鑑定實務，賣金前先看這篇。',
                mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://www.gold-tw.com/blog/gold-purity-testing-2026' },
                author: { '@type': 'Organization', name: '巧品珠寶', url: 'https://www.gold-tw.com' },
                publisher: { '@type': 'Organization', name: '巧品珠寶', url: 'https://www.gold-tw.com' },
                datePublished: '2026-04-06',
                dateModified: '2026-04-06',
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
                    name: '黃金純度鑑定',
                    item: 'https://www.gold-tw.com/blog/gold-purity-testing-2026',
                  },
                ],
              },
            ],
          }),
        }}
      />
      <article style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
        <h1>黃金純度鑑定2026｜999、18K、14K怎麼測？方法與注意事項完整說明</h1>
      <div style={{ background: '#fffbeb', borderLeft: '4px solid #f59e0b', padding: '16px', margin: '16px 0', borderRadius: '8px' }}>
        <strong>重點摘要：</strong> 黃金純度怎麼鑑定？火試法、X光螢光儀、酸測三種方法各有什麼差異？2026年帶你看清楚黃金純度標記與鑑定實務，賣金前先看這篇。
      </div>

      <div style={{ background: '#fff3f3', border: '1px solid #fca5a5', borderRadius: '8px', padding: '16px 20px', margin: '24px 0' }}>
        <strong style={{ color: '#dc2626' }}>這篇不適合你，如果…</strong>
        <ul style={{ margin: '8px 0 0', paddingLeft: '20px', color: '#374151' }}>
        <li>你的黃金是純金（999/9999）→ <a href="/blog/gold-recycling-taipei" style={{ color: '#b45309' }}>純金回收說明</a></li>
        <li>你只想快速查今天金價 → <a href="/daily-gold-price" style={{ color: '#b45309' }}>直接看今日金價</a></li>
        <li>你是第一次接觸黃金 → <a href="/blog/gold-buying-guide-beginner-2026" style={{ color: '#b45309' }}>新手買金入門</a></li>
        </ul>
      </div>


      
        <div style={{ background: '#fffbeb', borderLeft: '4px solid #f59e0b', padding: '16px', margin: '16px 0', borderRadius: '8px' }}>
          <strong>重點先說：</strong> 黃金純度決定你能拿到多少錢。同樣重量的飾品，999 純金和 14K 的報價可以差到一倍以上。帶去有 XRF 儀器的銀樓，30 秒就能知道確切成色，不用靠猜。
        </div>

        <h2>黃金純度標記怎麼看？一張表讀懂所有刻印</h2>
        <p>
          黃金飾品上通常有刻印，但不同國家、不同年代的刻印系統不一樣。以下是你最常遇到的標記：
        </p>
        <table style={{ width: '100%', borderCollapse: 'collapse', margin: '1.5rem 0' }}>
          <thead>
            <tr style={{ background: '#f5f0e8' }}>
              <th style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'left' }}>標記</th>
              <th style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'left' }}>黃金純度</th>
              <th style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'left' }}>說明</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>999 / 999.9</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>99.9% / 99.99%</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>純金，俗稱足金、四九金</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>24K</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>≈99.9%</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>理論最高，實務上等同 999</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>18K / 750</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>75%</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>最常見的K金，歐洲進口珠寶多用 750 標記</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>14K / 585</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>58.3%</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>美國珠寶常見，耐用性高</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>10K / 417</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>41.7%</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>美國合法最低K金，較硬</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>GF / GP</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>包金 / 鍍金</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>非實心黃金，幾乎無回收價值</td>
            </tr>
          </tbody>
        </table>
        <p style={{ fontSize: '0.85rem', color: '#6b7280' }}>
          ※ 若飾品上同時有多個刻印，以黃金純度標記為主，製造商品牌戳記為輔，不衝突。
        </p>

        <h2>三種常見黃金純度鑑定方法比較</h2>
        <p>
          市面上主要有三種鑑定方式，各有優缺點：
        </p>
        <table style={{ width: '100%', borderCollapse: 'collapse', margin: '1.5rem 0' }}>
          <thead>
            <tr style={{ background: '#f5f0e8' }}>
              <th style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'left' }}>方法</th>
              <th style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'left' }}>原理</th>
              <th style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'left' }}>準確度</th>
              <th style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'left' }}>會損壞飾品？</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>XRF（X光螢光儀）</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>X 射線激發元素發光分析</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>誤差 &lt; 0.1%</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>不會</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>火試法（熔解分析）</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>取樣熔解分離金屬</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>最精確</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>需取樣（破壞性）</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>酸測法（硝酸試金）</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>不同成色的黃金對硝酸反應不同</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>中等，誤差較大</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>輕微（磨石留痕）</td>
            </tr>
          </tbody>
        </table>
        <p>
          正規銀樓都配備 XRF 儀器，是目前最快、最準、不損壞飾品的鑑定方式。如果業者堅持只用肉眼或拒絕讓你看測試結果，要小心。
        </p>

        <h2>純度鑑定直接影響你的報價</h2>
        <p>
          以 2026 年黃金現貨行情（假設每錢約 11,000 元）為例，同樣是 1 錢（3.75 克）的飾品：
        </p>
        <table style={{ width: '100%', borderCollapse: 'collapse', margin: '1.5rem 0' }}>
          <thead>
            <tr style={{ background: '#f5f0e8' }}>
              <th style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'left' }}>純度</th>
              <th style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'left' }}>含金量</th>
              <th style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'left' }}>1 錢飾品估算報價</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>999 純金</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>99.9%</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>約 10,800–11,000 元</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>18K（750）</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>75%</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>約 7,800–8,200 元</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>14K（585）</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>58.3%</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>約 6,000–6,400 元</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>10K（417）</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>41.7%</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>約 4,200–4,600 元</td>
            </tr>
          </tbody>
        </table>
        <p style={{ fontSize: '0.85rem', color: '#6b7280' }}>
          ※ 實際報價依當日金價與店家政策調整，以上為估算參考。
        </p>

        <h2>常見鑑定陷阱：這幾種情況要注意</h2>
        <p>
          黃金鑑定看似簡單，但有幾個常見問題要防範：
        </p>
        <ul style={{ lineHeight: '2' }}>
          <li><strong>包金（GF）被當K金賣：</strong> GF 只有表面是金，芯是銅，重量可觀但金含量極低。XRF 掃一下立刻辨別。</li>
          <li><strong>合金飾品：</strong> 部分東南亞或中國進口飾品刻有「18K」但實測只有 14K 甚至更低，建議每件都測。</li>
          <li><strong>中空飾品：</strong> 項鍊或手環有時是中空設計，外觀大但實際重量輕，報價自然按重量計。</li>
          <li><strong>表面鍍層：</strong> 鍍金在最外層，XRF 若只掃表面可能誤判。正規業者會刮開測試點確認。</li>
        </ul>

        <h2>黃金純度鑑定常見問答</h2>
        {faqs.map((f, i) => (
          <div key={i} style={{ marginBottom: '1.5rem', borderTop: '1px solid #e5e7eb', paddingTop: '1rem' }}>
            <h3 style={{ color: '#92400e', margin: '0 0 0.5rem' }}>{f.q}</h3>
            <p style={{ margin: 0 }}>{f.a}</p>
          </div>
        ))}

        <div style={{ background: '#fef3c7', border: '1px solid #f59e0b', padding: '20px', borderRadius: '8px', margin: '2rem 0', textAlign: 'center' }}>
          <strong style={{ fontSize: '1.1rem' }}>巧品珠寶——XRF 現場測定，成色透明公開</strong>
          <br />
          <span style={{ color: '#78350f' }}>台北大安區濟南路，不扣耗損、測完直接報價</span>
          <br />
          <span style={{ fontSize: '0.9rem', color: '#92400e' }}>任何 K 數黃金、白金、銀飾都歡迎帶來估價</span>
          <br />
          <strong>0986-821-626｜LINE: @QPD888</strong>
        </div>

        <h2>延伸閱讀</h2>
        <ul>
          <li><a href="/blog/gold-recycling-process-2026">黃金回收流程——帶金來要準備什麼、怎麼走才最順</a></li>
          <li><a href="/blog/k-gold-recycle-guide-2026">K金回收完整指南——14K、18K、Pt900收購流程與報價邏輯</a></li>
          <li><a href="/blog/au750-gold-price-2026">AU750是什麼？18K黃金收購價與純度完整說明</a></li>
          <li><a href="/blog/gold-price-taiwan-today-2026">今日黃金價格台灣——一錢、一兩、一克即時行情查詢</a></li>
        </ul>
      </article>
    </>
  );
}
