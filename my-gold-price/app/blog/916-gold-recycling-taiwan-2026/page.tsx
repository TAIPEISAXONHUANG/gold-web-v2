import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '916黃金回收2026｜台灣916金價行情與18K差異完整解析',
  description: '916黃金是什麼？和9999純金差多少？2026年台灣916金回收價格怎麼算？含金量91.6%的K金回收行情、與18K比較、為何916受欢迎？一篇整理。',
  keywords: '916黃金回收,916金回收,916黃金價格,916 K金,22K黃金回收台灣,916 gold recycling',
  alternates: {
    canonical: 'https://www.gold-tw.com/blog/916-gold-recycling-taiwan-2026',
  },
};

const faqs = [
  {
    q: '916黃金是22K金嗎？',
    a: '是的，916黃金就是22K金，含金量91.67%（22÷24）。916是歐洲/亞洲常見的標示法，台灣、中國、香港習慣用22K表示，兩者是同一種東西。',
  },
  {
    q: '916黃金和9999純金差多少？',
    a: '以2026年3月底行情計算：9999純金約17,500–18,000元/錢，916黃金含金量91.67%，理論回收價約16,000–16,500元/錢，差價約1,000–1,500元/錢。換句話說，一條5錢的金飾，916比9999少約5,000–7,500元。',
  },
  {
    q: '916黃金和18K金有何不同？',
    a: '916黃金（22K）含金91.67%，18K含金75%。22K更接近純金，色澤更深更黃，硬度比9999好，適合製作精緻金飾。18K硬度更高，適合日常佩戴的戒指、項鍊等。回收時，22K按91.67%計算，18K按75%計算，差距約16%。',
  },
  {
    q: '916黃金回收店家怎麼選？',
    a: '三個標準：1) 有無XRF儀器現場測成色；2) 有無扣耗損；3) 是否當場現金融資。916金因為成色明確，正常店家不應有爭議，但少數會用「混合金」藉口壓價。巧品珠寶XRF現場測，不扣耗損，現場結算。',
  },
  {
    q: '916黃金鍍金和實金的差別？',
    a: '916實金是指整件飾品都是22K合金材質。鍍金（Gold Plated）只是在其他金屬表面鍍上一層薄薄的金，厚度通常只有0.5–2.5微米。回收只算底層金屬，不算鍍金層。購買時要問清楚，916實金的價格遠高於鍍金飾品。',
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
            '@type': 'BlogPosting',
            headline: '916黃金回收2026｜台灣916金價行情與18K差異完整解析',
            description: '916黃金是什麼？和9999純金差多少？2026年台灣916金回收價格怎麼算？含金量91.6%的K金回收行情、與18K比較、為何916受欢迎？一篇整理。',
            mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://www.gold-tw.com/blog/916-gold-recycling-taiwan-2026' },
            author: { '@type': 'Organization', name: '巧品珠寶', url: 'https://www.gold-tw.com' },
            publisher: { '@type': 'Organization', name: '巧品珠寶', url: 'https://www.gold-tw.com' },
            datePublished: '2026-03-01T00:00:00+08:00',
            dateModified: '2026-03-31T00:00:00+08:00',
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
              {
                '@type': 'ListItem',
                position: 3,
                name: '916黃金回收2026',
                item: 'https://www.gold-tw.com/blog/916-gold-recycling-taiwan-2026',
              },
            ],
          }),
        }}
      />
      <article style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
        <h1>916黃金回收2026｜台灣916金價行情與18K差異完整解析</h1>

        <div style={{ background: '#fffbeb', borderLeft: '4px solid #f59e0b', padding: '16px', margin: '16px 0', borderRadius: '8px' }}>
          <strong>直接給答案：</strong> 2026年3月底，916黃金（22K）每錢回收行情約 <strong>16,000–16,500 元</strong>（以9999純金17,500元/錢 × 91.67%計算）。916比9999純金便宜約1,000–1,500元/錢，但比18K金高約2,000元/錢以上。
        </div>

        <h2>916黃金是什麼？一次搞懂22K/916的關係</h2>
        <p>
          916黃金，簡單說就是<strong>22K金</strong>。
          「916」指的是含金量為916/1000，即91.6%。
          計算方式：22 ÷ 24 ＝ 91.67%，亞洲市場習慣稱為22K金。
        </p>
        <p>
          台灣、中國、香港的珠寶市場，916黃金是僅次於9999/999純金的熱門品項。
          東南亞（泰國、馬來西亞）更是916/22K的主要消費市場。
          台灣銀樓裡常見的「鍍黃金」或「仿金」飾品有時會被誤認為916，
          但實質差異極大，回收價值完全不同。
        </p>

        <h2>916黃金、18K金、9999純金有什麼差異？</h2>
        <p>
          說數字最清楚：
        </p>

        <table style={{ width: '100%', borderCollapse: 'collapse', margin: '1.5rem 0' }}>
          <thead>
            <tr style={{ background: '#f5f0e8' }}>
              <th style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'left' }}>種類</th>
              <th style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>K數</th>
              <th style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>含金量</th>
              <th style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>2026參考回收價（元/錢）</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>9999純金</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>24K</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>99.9%+</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>17,500–18,000</td>
            </tr>
            <tr style={{ background: '#fef9e7' }}>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}><strong>916黃金（22K）</strong></td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}><strong>22K</strong></td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}><strong>91.67%</strong></td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}><strong>約 16,000–16,500</strong></td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>18K金</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>18K</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>75%</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>約 13,100–13,500</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>14K金</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>14K</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>58.5%</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>約 10,200–10,500</td>
            </tr>
          </tbody>
        </table>
        <p style={{ fontSize: '0.85rem', color: '#888' }}>
          ※ 參考價以2026年3月底行情估算。實際報價請電洽：0986-821-626
        </p>

        <h2>916黃金熱門款式——哪些東西最常被拿來回收？</h2>
        <p>
          <strong>金飾類：</strong>916因為色澤深黃，最常見於龍鳳鐲、金鏈子、古法金飾。
          台灣傳統婚嫁常見的「粗金鍊」許多就是916甚至999純金。
        </p>
        <p>
          <strong>金條/金塊：</strong>部分投資型金條是916純度（22K），而非9999。
          購買前建議看清楚标示，投資型金條若非9999，回收時會直接反映在報價上。
        </p>
        <p>
          <strong>佛像/金牌/神衊金牌：</strong>台灣宗教用金的傳統金牌常見916或22K。
          這類飾品有時會有特殊工藝價值，但回收時仍以含金量為主要定價基準。
        </p>

        <h2>916黃金回收有哪些常見陷阱？</h2>
        <p>
          <strong>陷阱一：「916不是純金，我們要扣損耗」</strong>
          <br />
          這是話術。916黃金不是9999，所以報價時按91.67%計算，這是正常的。
          但「扣損耗」是指在秤重後再扣一個百分比，那是另一回事。
          好的店家：直接按含金量乘牌價計算，不再多扣。
        </p>
        <p>
          <strong>陷阱二：「916摻雜太多，沒辦法準確測」</strong>
          <br />
          XRF儀器3秒就能測出916的精準成色。
          如果店家說測不出來，要嘛沒有儀器，要嘛不想讓你知道精準數字。
          巧品珠寶現場XRF檢測，全程讓你盯著看。
        </p>
        <p>
          <strong>陷阱三：「今天不收916，只收9999」</strong>
          <br />
          正常店家916、18K、14K都收。
          如果店家說不收，要么是借口压价，要么是真的不专业。
          916在國際市場是主流K金之一，沒有不收的道理。
        </p>

        <h2>916黃金保值嗎？和9999比起來哪個更值得買？</h2>
        <p>
          從<strong>保值角度</strong>：9999純金優於916。
          金價上漲時，含金量越高，漲幅絕對值越大。
          10萬元的9999金飾，金價漲10%就變11萬；
          10萬元的916金飾，同樣漲10%只變11萬，但本金基數略低。
        </p>
        <p>
          從<strong>佩戴實用性</strong>：916比9999硬，比較不容易變形，
          適合需要精細做工的飾品。很多人買916是因為「看起來更黃更好看」，
          這點無可否認——91.67%的金和外觀和99.9%的几乎看不出差別。
        </p>
        <p>
          結論：投資目的選9999純金；想要飾品美觀兼顧一定保值，916是合理選擇。
        </p>

        <h2>916黃金回收流程是什麼？</h2>
        <ol>
          <li><strong>來店估價：</strong>攜帶916黃金飾品及身份證，不需預約</li>
          <li><strong>XRF測成色：</strong>現場儀器檢測，3秒顯示含金量是否為91.6%左右</li>
          <li><strong>現場秤重：</strong>重量公開，全程讓你盯著看</li>
          <li><strong>計算報價：</strong>以當日9999牌價 × 91.67%，不扣耗損</li>
          <li><strong>現金結算：</strong>現場給付，15–30分鐘完成</li>
        </ol>

        <h2>常見問題</h2>
        {faqs.map((f, i) => (
          <div key={i} style={{ marginBottom: '1.5rem', borderTop: '1px solid #e5e7eb', paddingTop: '1rem' }}>
            <h3 style={{ color: '#92400e', margin: '0 0 0.5rem' }}>{f.q}</h3>
            <p style={{ margin: 0 }}>{f.a}</p>
          </div>
        ))}

        <div style={{ background: '#fef3c7', border: '1px solid #f59e0b', padding: '20px', borderRadius: '8px', margin: '2rem 0', textAlign: 'center' }}>
          <strong style={{ fontSize: '1.1rem' }}>916黃金回收——現場秤重，XRF測成色，當場現金</strong>
          <br />
          <span style={{ color: '#78350f' }}>台北大安捷運旁巧品珠寶 ｜ 0986-821-626 ｜ LINE：@QPD888</span>
          <br />
          <span style={{ fontSize: '0.9rem', color: '#92400e' }}>916、22K、18K、14K、Pt900、白金、銀飾——全品項回收</span>
        </div>

        <h2>延伸閱讀</h2>
        <ul>
          <li><a href="/blog/k-gold-recovery-price-2026">K金回收價格2026｜18K、14K、10K行情完整對照</a></li>
          <li><a href="/blog/gold-vs-k-gold-comparison">黃金和K金的差異｜9999、22K、18K、14K到底差多少</a></li>
          <li><a href="/blog/gold-purity">黃金純度大解析｜9999、9958、18K含金量換算</a></li>
          <li><a href="/blog/gold-recovery-price-today-2026">今日黃金回收價格2026｜即時行情與走勢分析</a></li>
          <li><a href="/blog/gold-recycling-taipei">台北黃金回收｜大安區當日現金融資流程</a></li>
        </ul>
      </article>
    </>
  );
}
