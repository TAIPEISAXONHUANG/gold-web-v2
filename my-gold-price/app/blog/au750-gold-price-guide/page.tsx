import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Au750是什麼金？等於18K嗎？2026年Au750價格與K金市場分析',
  description: 'Au750是什麼？等於18K金嗎？含金量75%的K金，2026年台灣Au750回收與購買價格行情。含金刻印解讀、與24K/22K差異、以及市場現況分析。',
  keywords: 'Au750是什麼,Au750等於18K嗎,Au750價格,750黃金,K金刻印,18K金價格',
  alternates: {
    canonical: 'https://www.gold-tw.com/blog/au750-gold-price-guide',
  },
  openGraph: {
    locale: 'zh_TW',
    title: 'Au750是什麼金？等於18K嗎？2026年Au750價格與K金市場分析',
    description: 'Au750是什麼？等於18K金嗎？含金量75%的K金，2026年台灣Au750回收與購買價格行情。含金刻印解讀、與24K/22K差異、以及市場現況分析。',
    type: 'article',
    url: 'https://www.gold-tw.com/blog/au750-gold-price-guide',
    siteName: '巧品珠寶',
    publishedTime: '2026-03-01T00:00:00+08:00',
    modifiedTime: '2026-04-01T00:00:00+08:00',
    images: [{ url: '/og-image.webp', width: 1200, height: 630, alt: '巧品珠寶' }],

  },
};

const faqs = [
  {
    q: 'Au750是什麼意思？等於18K嗎？',
    a: '是的，Au750就是18K金。「Au」是黃金的化學符號，「750」代表含金量為750/1000，即75%。所以Au750 = 含金量75% = 18K。歐洲和部分亞洲市場習慣用Au750標示，取代K數標示，兩者指的是完全相同的含金量。',
  },
  {
    q: 'Au750和24K金差多少？',
    a: '含金量差距：24K = 99.9%+, Au750 = 75%。以2026年3月底行情計算，同樣5錢：24K回收約87,500–90,000元；Au750（18K）回收約65,500–67,500元。差了約20,000元。24K更純、報價更好；Au750更硬、更適合精細工藝。',
  },
  {
    q: 'Au750的「750」刻印是真的嗎？需要驗證嗎？',
    a: '正常情況下，刻印是真實的。但少數不良店家會在高K數飾品上鍍金或用合金假冒。建議：1) 找有XRF儀器的店家現場驗；2) 巧品珠寶提供現場XRF檢測服務，3秒知道精準含金量，全程公開。',
  },
  {
    q: 'Au750飾品購買時要注意什麼？',
    a: '三個重點：1) 問清楚工藝費佔比——Au750飾品的工藝費有時比純金還高，因為涉及進口設計和精細工藝；2) 刻印是否完整——正品應有「Au750」或「18K」刻印在扣頭或不易磨損處；3) 考慮CP值——如果純粹在乎保值，9999比Au750合適。',
  },
  {
    q: '2026年Au750回收價格多少？',
    a: '以2026年3月底行情，9999純金牌價17,500–18,000元/錢為基準，Au750（18K）參考回收價13,100–13,500元/錢。實際數字因店家損耗扣款和當日牌價浮動。建議致電巧品珠寶0986-821-626確認當日即時數字。',
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
            '@type': 'BlogPosting',
            'headline': 'Au750是什麼金？等於18K嗎？2026年Au750價格與K金市場分析',
            'author': { '@type': 'Person', 'name': '鑑定師L' },
            'publisher': { '@type': 'Organization', 'name': '巧品珠寶', 'url': 'https://www.gold-tw.com' },
            'datePublished': '2026-03-01',
            'dateModified': '2026-04-01',
            'description': 'Au750是什麼？等於18K金嗎？含金量75%的K金，2026年台灣Au750回收與購買價格行情。',
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
                name: 'Au750是什麼金',
                item: 'https://www.gold-tw.com/blog/au750-gold-price-guide',
              },
            ],
          }),
        }}
      />
      <article style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
        <h1>Au750是什麼金？等於18K嗎？2026年Au750價格與K金市場分析</h1>

        <div style={{ background: '#fffbeb', borderLeft: '4px solid #f59e0b', padding: '16px', margin: '16px 0', borderRadius: '8px' }}>
          <strong>直接給答案：</strong> Au750 = 含金量75% = 18K金，兩者完全相同。歐洲市場用Au750標示，亞洲市場用K數。2026年3月底，Au750（18K）回收行情約 <strong>13,100–13,500 元/錢</strong>（9999牌價17,500元 × 75%）。
        </div>

        <h2>Au750是什麼？三分鐘搞懂</h2>
        <p>
          Au750的意思是「含金量75%的金屬合金」。
        </p>
        <ul>
          <li><strong>Au</strong> = 黃金的化學元素符號（拉丁文Aurum）</li>
          <li><strong>750</strong> = 750/1000 = 75% 含金量</li>
          <li><strong>其餘25%</strong> = 銅、銀、鈀等合金金屬（決定顏色：黃、白、玫瑰）</li>
        </ul>
        <p>
          等號：<strong>Au750 = 18K = 含金量75%</strong>，三者完全相同，只是標示方式不同。
        </p>
        <p>
          各市場慣例：
        </p>
        <ul>
          <li><strong>台灣/中國/香港：</strong>習慣用「18K」或「18K金」</li>
          <li><strong>歐洲（法國、義大利等）：</strong>習慣用「Au750」或「750」</li>
          <li><strong>日本：</strong>習慣用「K18」或「18K」</li>
          <li><strong>美國：</strong>兩種都常見</li>
        </ul>

        <h2>Au750和其他K數有什麼差異？</h2>

        <table style={{ width: '100%', borderCollapse: 'collapse', margin: '1.5rem 0' }}>
          <thead>
            <tr style={{ background: '#f5f0e8' }}>
              <th style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'left' }}>刻印</th>
              <th style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'left' }}>K數</th>
              <th style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>含金量</th>
              <th style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'left' }}>硬度</th>
              <th style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'left' }}>常見用途</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>999 / 24K</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>24K</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>99.9%+</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>軟，易變形</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>金條、投資金、龍鳳鐲</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>916 / 22K</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>22K</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>91.67%</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>中等</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>亞洲金飾、古法金</td>
            </tr>
            <tr style={{ background: '#fef9e7' }}>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}><strong>750 / Au750 / 18K</strong></td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}><strong>18K</strong></td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}><strong>75%</strong></td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}><strong>硬，耐磨</strong></td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}><strong>戒指、項鍊、精品珠寶</strong></td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>585 / 14K</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>14K</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>58.5%</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>更硬</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>日常飾品、美國市場主流</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>417 / 10K</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>10K</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>41.7%</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>最硬</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>時尚飾品、美國市場常見</td>
            </tr>
          </tbody>
        </table>

        <h2>Au750有哪些顏色種類？</h2>
        <p>
          Au750的顏色由那25%的合金成分決定：
        </p>
        <ul>
          <li><strong>黃K金（Yellow Gold）：</strong>合金中加入銀和少量銅，呈現淡黃色，和純金外觀接近</li>
          <li><strong>白K金（White Gold）：</strong>合金中加入鈀或鎳，表面鍍銠（俗稱電金），外觀接近鉑金</li>
          <li><strong>玫瑰金（Rose Gold）：</strong>合金中銅比例較高，呈現淡粉紅色</li>
        </ul>
        <p>
          <strong>重要提醒：</strong>白K金的「白」是表面電鍍的顏色，長久佩戴後電鍍層磨損，會露出底層的淡黃色。這不是品質問題，而是正常損耗。如需恢復白色，可重新電鍍。
        </p>

        <h2>Au750回收價格怎麼算？</h2>
        <p>
          Au750的回收價格，與所有18K金相同：
        </p>
        <div style={{ background: '#f0fdf4', border: '1px solid #86efac', padding: '16px', borderRadius: '8px', margin: '1rem 0' }}>
          <strong>Au750回收價 = 當日9999純金牌價 × 75%</strong>
          <br /><br />
          2026年3月底參考：17,500 × 75% = <strong>13,125 元/錢</strong>
          <br />
          以此類推：3錢 = 39,375元；5錢 = 65,625元
        </div>

        <h2>Au750常見刻印有哪些？</h2>
        <p>
          國際市場對Au750/K18的標示方式多樣，以下都是同一含金量：
        </p>
        <ul>
          <li><strong>Au750</strong>（最常見於歐洲進口珠寶）</li>
          <li><strong>750</strong>（僅標數字，常與品牌logo一起刻印）</li>
          <li><strong>18K</strong>（台灣、中國、香港最常見）</li>
          <li><strong>K18</strong>（日本、韓國常見）</li>
          <li><strong>G18K</strong>（Gold 18K的縮寫，常見於泰國珠寶）</li>
          <li><strong>18kt</strong>（美國市場有時用此標示）</li>
        </ul>
        <p>
          如果飾品上標示的是「GF」或「GP」，代表「鍍金」（Gold Filled/ Gold Plated），
          不是Au750實金。兩者回收價值相差極大，GF/GP的底層通常是其他金屬。
        </p>

        <h2>為什麼很多精品珠寶品牌都用Au750/18K？</h2>
        <p>
          卡地亞（Cartier）、香奈兒（Chanel）、Tiffany等國際精品珠寶品牌，
          幾乎全部使用18K（Au750）作為主要材質，原因很實際：
        </p>
        <ul>
          <li><strong>硬度夠：</strong>純金太軟，鑲嵌的寶石容易脫落；18K足夠硬，爪子能牢牢抓住鑽石</li>
          <li><strong>顏色可控：</strong>透過調整合金配方，可以做出黃、白、玫瑰三種顏色</li>
          <li><strong>耐腐蝕：</strong>比純金更耐日常磨損，適合日常佩戴</li>
          <li><strong>仍有一定保值性：</strong>含金量75%，仍有金屬保值功能</li>
        </ul>
        <p>
          但要注意：精品品牌的Au750飾品，購買時的「品牌溢價」極高，
          可能比金料本身價值高出3–5倍。回收時，店家只算含金量，不算品牌價值。
        </p>

        <h2>常見問題</h2>
        {faqs.map((f, i) => (
          <div key={i} style={{ marginBottom: '1.5rem', borderTop: '1px solid #e5e7eb', paddingTop: '1rem' }}>
            <h3 style={{ color: '#92400e', margin: '0 0 0.5rem' }}>{f.q}</h3>
            <p style={{ margin: 0 }}>{f.a}</p>
          </div>
        ))}

        <div style={{ background: '#fef3c7', border: '1px solid #f59e0b', padding: '20px', borderRadius: '8px', margin: '2rem 0', textAlign: 'center' }}>
          <strong style={{ fontSize: '1.1rem' }}>Au750/18K回收估價——XRF現場測成色，不扣耗損</strong>
          <br />
          <span style={{ color: '#78350f' }}>台北大安巧品珠寶 ｜ 0986-821-626 ｜ LINE：@QPD888</span>
        </div>

        <h2>延伸閱讀</h2>
        <ul>
          <li><a href="/blog/k-gold-recovery-price-2026">K金回收價格2026｜18K、14K、10K行情完整對照</a></li>
          <li><a href="/blog/k-gold-recovery-price-guide-2026">K金回收價格指南｜計算方式與店家選擇重點</a></li>
          <li><a href="/blog/916-gold-recycling-taiwan-2026">916黃金回收2026｜22K台灣行情與18K差異解析</a></li>
          <li><a href="/blog/gold-vs-k-gold-comparison">黃金和K金的差異｜9999、22K、18K完整比較</a></li>
          <li><a href="/blog/gold-purity">黃金純度大解析｜9999、9958、18K含金量換算</a></li>
        </ul>
      </article>
    </>
  );
}
