import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '台灣黃金每公克價格2026｜每錢與每公克換算公式完整說明',
  description: '台灣黃金每公克多少錢？2026年最新行情。每公克與每錢怎麼換算？附線上試算公式，以及為何台灣不用公克報價的原因。',
  keywords: '台灣黃金每公克價格,金價每公克,黃金一公克多少錢,錢轉公克,公克轉錢',
  alternates: {
    canonical: 'https://www.gold-tw.com/blog/gold-per-gram-taiwan-2026',
  },
};

const faqs = [
  {
    q: '台灣黃金每公克多少錢？',
    a: '2026年3月底，9999純金參考報價約4,670–4,800元/公克（視店家而定）。但台灣銀樓主要以「每錢」計價，1錢 = 3.75公克，所以每錢約17,500–18,000元。直接問「每公克多少錢」時，建議同時問清楚是9999、999還是18K。',
  },
  {
    q: '每錢和每公克怎麼換算？',
    a: '標準公式：1錢 = 3.75公克，1公克 = 0.26667錢。線性換算：每錢價格 ÷ 3.75 = 每公克價格；每公克價格 × 3.75 = 每錢價格。',
  },
  {
    q: '台灣為什麼用「錢」而不是「公克」計算黃金？',
    a: '這是歷史傳統。台灣的黃金計價單位沿襲自中國傳統的「斤兩制」：1斤 = 16兩，1兩 = 10錢，1錢 = 3.75公克。這個單位制度在台灣珠寶業已使用超過百年，即使台灣已公制化，銀樓業界仍保留「錢」這個傳統單位。',
  },
  {
    q: '國際金價是以盎司計算，和台灣的「錢」如何換算？',
    a: '國際金價以金衡盎司（troy ounce）計算：1盎司 = 31.1035公克。台灣銀樓用「錢」，所以完整公式：國際金價（美元/盎司）× 美元兌台幣匯率 ÷ 31.1035 × 3.75 = 每錢台幣報價。實務上店家會預先計算並每日公告牌價。',
  },
  {
    q: '不同純度的黃金，每公克價格怎麼算？',
    a: '先確認國際金價 × 匯率算出每公克9999純金的價格，再乘以該純度的含金比例。例如：每公克9999 = 4,700元，18K（75%）= 4,700 × 75% = 3,525元/公克。',
  },
];

export const lastModified = new Date('2026-03-19');
export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: '台灣黃金每公克價格2026｜每錢與每公克換算公式完整說明',
            description: '台灣每克黃金即時價格查詢，提供最新金價行情與歷史走勢分析。',
            datePublished: '2026-04-02',
            author: { '@type': 'Organization', 'name': '巧品珠寶' },
            dateModified: '2026-04-02',
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': 'https://www.gold-tw.com/blog/gold-per-gram-taiwan-2026',
        },
        image: {
          '@type': 'ImageObject',
          'url': 'https://www.gold-tw.com/og-image.webp',
          'width': 1200,
          'height': 630,
        },
        publisher: {
          '@type': 'Organization',
          'name': '巧品珠寶',
          '@id': 'https://www.gold-tw.com/#organization',
          'logo': {
            '@type': 'ImageObject',
            'url': 'https://www.gold-tw.com/logo.webp',
            'width': 200,
            'height': 200,
          },
        },
        inLanguage: 'zh-TW',
        keywords: '黃金回收, 巧品珠寶, 台灣黃金每公克價格2026｜每錢與每公克換算公式完整說明',
        about: { '@id': 'https://www.gold-tw.com/#business' },
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
                name: '台灣黃金每公克價格2026',
                item: 'https://www.gold-tw.com/blog/gold-per-gram-taiwan-2026',
              },
            ],
          }),
        }}
      />
      <article style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
        <h1>台灣黃金每公克價格2026｜每錢與每公克換算公式完整說明</h1>

        <div style={{ background: '#fffbeb', borderLeft: '4px solid #f59e0b', padding: '16px', margin: '16px 0', borderRadius: '8px' }}>
          <strong>直接給答案：</strong> 2026年3月底，台灣9999純金每公克參考報價約 <strong>4,670–4,800 元/公克</strong>。台灣銀樓主要用「每錢」計價，1錢 = 3.75公克，每錢約17,500–18,000元。若看到「每公克」報價，請先確認純度。
        </div>

        <h2>台灣黃金為什麼用「錢」而不是「公克」？</h2>
        <p>
          台灣黃金傳統上使用「兩、錢、分」的計價制度，源自中國古代16兩制：
        </p>
        <ul>
          <li>1斤 = 16兩（台斤，600克）</li>
          <li>1兩 = 10錢</li>
          <li>1錢 = 3.75公克</li>
          <li>1分 = 0.375公克</li>
        </ul>
        <p>
          這個制度在台灣珠寶業已使用超過百年。即使台灣已在日常使用公制，
          銀樓業界仍保留「錢」這個傳統單位作為黃金報價標準。
          好處是：銀樓從業人員和資深消費者已經習慣用「錢」來快速溝通。
        </p>

        <h2>每錢和每公克怎麼換算？</h2>
        <div style={{ background: '#f0fdf4', border: '1px solid #86efac', padding: '16px', borderRadius: '8px', margin: '1rem 0' }}>
          <strong>基本換算（固定值）：</strong>
          <br />1 錢 = 3.75 公克
          <br />1 公克 = 0.2667 錢
          <br />
          <br /><strong>價格換算：</strong>
          <br />每公克價格 = 每錢價格 ÷ 3.75
          <br />每錢價格 = 每公克價格 × 3.75
        </div>

        <h3>實用怎麼換算？</h3>
        <table style={{ width: '100%', borderCollapse: 'collapse', margin: '1.5rem 0' }}>
          <thead>
            <tr style={{ background: '#f5f0e8' }}>
              <th style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'left' }}>重量</th>
              <th style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>等於多少錢</th>
              <th style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>等於多少公克</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>1錢</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>1錢</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>3.75公克</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>5錢</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>5錢</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>18.75公克</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>1兩</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>10錢</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>37.5公克</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>1盎司（troy oz）</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>約8.29錢</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>31.1公克</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>10公克</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>約2.67錢</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>10公克</td>
            </tr>
          </tbody>
        </table>

        <h2>2026年台灣黃金每公克行情是多少？</h2>
        <p>以2026年3月底行情，9999純金每錢 17,500–18,000元為基準：</p>

        <table style={{ width: '100%', borderCollapse: 'collapse', margin: '1.5rem 0' }}>
          <thead>
            <tr style={{ background: '#f5f0e8' }}>
              <th style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'left' }}>純度</th>
              <th style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>每錢（元）</th>
              <th style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>每公克參考（元）</th>
              <th style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>每盎司參考（元）</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>9999純金</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>17,500–18,000</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>4,670–4,800</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>145,200–149,280</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>999純金</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>17,400–17,900</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>4,640–4,770</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>144,200–148,347</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>22K（916）</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>16,000–16,500</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>4,267–4,400</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>132,600–136,800</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>18K（750）</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>13,100–13,500</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>3,493–3,600</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>108,560–111,888</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>14K（585）</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>10,200–10,500</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>2,720–2,800</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>84,512–87,024</td>
            </tr>
          </tbody>
        </table>
        <p style={{ fontSize: '0.85rem', color: '#888' }}>
          ※ 參考價以2026年3月底行情估算。實際報價請致電：0986-821-626
        </p>

        <h2>線上試算：錢與公克的簡單怎麼算？</h2>
        <p>以下為常見試算情境（以9999純金17,500元/錢為例）：</p>
        <ul>
          <li><strong>5錢 = 18.75公克：</strong>5 × 17,500 = 87,500元，87,500 ÷ 18.75 = 每公克約4,667元</li>
          <li><strong>10錢 = 37.5公克：</strong>10 × 17,500 = 175,000元，175,000 ÷ 37.5 = 每公克約4,667元</li>
          <li><strong>1兩 = 10錢 = 37.5公克：</strong>與上相同</li>
          <li><strong>1盎司 = 31.1公克 ≈ 8.29錢：</strong>8.29 × 17,500 ≈ 145,000元</li>
        </ul>

        <h2>國際金價（美元/盎司）如何轉換成台灣每錢報價？</h2>
        <p>
          國際金價以「金衡盎司」計價，但台灣銀樓用「錢」報價。
          轉換步驟如下：
        </p>
        <div style={{ background: '#f0fdf4', border: '1px solid #86efac', padding: '16px', borderRadius: '8px', margin: '1rem 0' }}>
          <strong>完整轉換公式：</strong>
          <br /><br />
          Step 1：國際金價（美元/盎司）× 美元/台幣匯率
          <br />= 每盎司台幣報價
          <br /><br />
          Step 2：每盎司台幣 ÷ 31.1035
          <br />= 每公克台幣報價
          <br /><br />
          Step 3：每公克台幣 × 3.75
          <br />= 每錢台幣報價
          <br /><br />
          <strong>快速估算：</strong>每盎司美元 ÷ 31.1 × 匯率 × 3.75 ≈ 每錢台幣
        </div>
        <p>
          <strong>實例：</strong>XAUUSD = 3,100美元/盎司，USD/TWD = 30.8
          <br />3,100 ÷ 31.1 × 30.8 × 3.75 ≈ 11,508元/錢（理論值）
          <br />實務牌價通常為11,000–12,000元/錢（視店家加價）
        </p>

        <h2>為什麼國際報價和台灣銀樓報價不同？</h2>
        <p>
          國際金價是「原料價格」，銀樓報價是「零售價格」，兩者之間有幾個差異：
        </p>
        <ul>
          <li><strong>店家利潤：</strong>銀樓需要支付店租、人事、店損等成本</li>
          <li><strong>熔煉損耗：</strong>熔化舊金時會有1%–3%的損耗</li>
          <li><strong>國際運費和關稅：</strong>台灣黃金進口有關稅和運費</li>
          <li><strong>飾金工費差異：</strong>飾金比金條多一道鑄造成本</li>
        </ul>
        <p>
          一般來說，銀樓飾金的零售價比國際原料價高3%–8%是正常的。
          這個差距稱為「工費」，購買時已預付，賣出時不退工費。
        </p>

        <h2>常見問題</h2>
        {faqs.map((f, i) => (
          <div key={i} style={{ marginBottom: '1.5rem', borderTop: '1px solid #e5e7eb', paddingTop: '1rem' }}>
            <h3 style={{ color: '#92400e', margin: '0 0 0.5rem' }}>{f.q}</h3>
            <p style={{ margin: 0 }}>{f.a}</p>
          </div>
        ))}

        <div style={{ background: '#fef3c7', border: '1px solid #f59e0b', padding: '20px', borderRadius: '8px', margin: '2rem 0', textAlign: 'center' }}>
          <strong style={{ fontSize: '1.1rem' }}>黃金估價——每日即時牌價，錢/公克/盎司單位皆可計算</strong>
          <br />
          <span style={{ color: '#78350f' }}>台北大安巧品珠寶 ｜ 0986-821-626 ｜ LINE：@QPD888</span>
        </div>

        <h2>延伸閱讀</h2>
        <ul>
          <li><a href="/blog/taiwan-gold-price-per-qian-today-2026">台灣今日金價每錢2026｜即時報價與換算公式</a></li>
          <li><a href="/blog/taiwan-gold-price-outlook-2026">台灣2026金價行情與展望</a></li>
          <li><a href="/blog/gold-weight">黃金重量單位解析｜錢/兩/盎司/公克完整換算</a></li>
          <li><a href="/blog/gold-purity">黃金純度大解析｜9999、9958、18K含金量換算</a></li>
          <li><a href="/blog/k-gold-recovery-price-2026">K金回收價格2026｜18K、14K、10K行情完整對照</a></li>
        </ul>
      </article>
    </>
  );
}
