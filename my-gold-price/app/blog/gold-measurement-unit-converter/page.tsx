import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '黃金單位換算｜錢/兩/盎司/公克完整對照表與實用試算',
  description: '黃金單位怎麼算？1錢多少克？1兩、1盎司、1公克之間的換算關係。附線上試算範例與2026年台灣金價行情參考。',
  keywords: '黃金單位換算,黃金錢兩換算,1錢多少克,黃金盎司換算,金衡盎司,台灣黃金單位',
  alternates: {
    canonical: 'https://www.gold-tw.com/blog/gold-measurement-unit-converter',
  },
};

const faqs = [
  {
    q: '1錢黃金等於多少公克？',
    a: '1錢 = 3.75公克。這是台灣銀樓業界的固定標準，源自傳統16兩制。1公克 = 0.2667錢。',
  },
  {
    q: '1兩黃金等於多少錢？1兩等於多少公克？',
    a: '1兩 = 10錢，1兩 = 37.5公克。台灣的「兩」是傳統黃金單位，與中國13兩制不同，要特別注意。',
  },
  {
    q: '國際金價的「盎司」和台灣的「錢」如何換算？',
    a: '1金衡盎司（troy oz）= 31.1035公克 = 8.294錢。所以：國際金價 ÷ 31.1035 × 匯率 × 3.75 = 每錢台幣。實用速算：國際金價 ÷ 31.1 × 匯率 × 3.75。',
  },
  {
    q: '黃金條塊的「盎司」和飾金的「錢」是一樣的嗎？',
    a: '同一個概念，都是重量單位。金條以盎司或公克標示，飾金以錢或兩標示，但都是重量。國際投資金條以盎司計價，台灣飾金以錢計價，兩者可以互相換算。',
  },
  {
    q: '黃金測量需要精密儀器嗎？在家能量嗎？',
    a: '基本的珠寶秤（0.01克精度）可以測量飾金重量，淘寶或蝦皮有售，約500–1,500元。如果只是估算重量，家用食品秤精度不夠。如果要精準測量含金量，需要XRF儀器，銀樓才有。',
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
            headline: '黃金單位換算｜錢/兩/盎司/公克完整對照表與實用試算',
            description: '黃金重量單位換算工具，支援兩、錢、克、盎司等單位互換，即時計算黃金價值。',
            datePublished: '2026-04-02',
            author: { '@type': 'Organization', 'name': '巧品珠寶' },
            dateModified: '2026-04-02',
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
                name: '黃金單位換算對照表',
                item: 'https://www.gold-tw.com/blog/gold-measurement-unit-converter',
              },
            ],
          }),
        }}
      />
      <article style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
        <h1>黃金單位換算｜錢/兩/盎司/公克完整對照表與實用試算</h1>

        <div style={{ background: '#fffbeb', borderLeft: '4px solid #f59e0b', padding: '16px', margin: '16px 0', borderRadius: '8px' }}>
          <strong>直接給答案：</strong> 1錢 = 3.75公克，1兩 = 10錢 = 37.5公克，1盎司 = 31.1公克 ≈ 8.29錢。只要記住這三個數字，所有黃金單位換算都能自己算。
        </div>

        <h2>台灣黃金重量單位——錢/兩/分</h2>
        <p>
          台灣黃金業界使用的重量單位，源自中國傳統的「16兩制」（注意：中國的「兩」約37.5克，台灣的「兩」也是約37.5克，但中國某些地區的「兩」只有31.25克，購買中國黃金時要注意這個差異）。
        </p>

        <table style={{ width: '100%', borderCollapse: 'collapse', margin: '1.5rem 0' }}>
          <thead>
            <tr style={{ background: '#f5f0e8' }}>
              <th style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'left' }}>單位</th>
              <th style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'left' }}>等於多少錢</th>
              <th style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'left' }}>等於多少公克</th>
              <th style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'left' }}>說明</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>1分</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>0.1錢</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>0.375公克</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>最小計算單位，珠寶用</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}><strong>1錢</strong></td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>1錢</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}><strong>3.75公克</strong></td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>台灣銀樓報價基準單位</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>1兩</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>10錢</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>37.5公克</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>傳統大額交易單位</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>1斤（台斤）</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>160錢</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>600公克</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>平時食用油的量詞，不用於黃金</td>
            </tr>
          </tbody>
        </table>

        <h2>國際黃金重量單位——盎司（oz）</h2>
        <p>
          國際金價以「金衡盎司」（troy ounce，簡稱ozt）計價，不是普通的盎司（oz）。
          <strong>兩者不同：</strong>
        </p>
        <ul>
          <li>普通盎司（oz）：1oz = 28.35公克，用於食品和日常測量</li>
          <li>金衡盎司（ozt）：1ozt = 31.1035公克，專門用於貴金屬（黃金、白銀、鉑金）</li>
        </ul>
        <p>
          <strong>關鍵數字：</strong>1盎司（ozt）= 31.1035公克 = 8.294錢
        </p>

        <h2>黃金單位完整對照表（錢/公克/盎司）</h2>
        <table style={{ width: '100%', borderCollapse: 'collapse', margin: '1.5rem 0' }}>
          <thead>
            <tr style={{ background: '#f5f0e8' }}>
              <th style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'left' }}>錢</th>
              <th style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>公克</th>
              <th style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>盎司（ozt）</th>
              <th style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'left' }}>參考價值（元）</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>1錢</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>3.75克</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>0.1206ozt</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>約17,500元（9999金）</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>5錢</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>18.75克</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>0.6029ozt</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>約87,500元（9999金）</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>10錢</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>37.5克</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>1.2058ozt</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>約175,000元（9999金）</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>1兩（10錢）</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>37.5克</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>1.2058ozt</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>約175,000元（9999金）</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>1盎司（ozt）</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>31.1克</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>1ozt</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>約145,000元（9999金）</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>10盎司（ozt）</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>311克</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>10ozt</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>約1,450,000元（9999金）</td>
            </tr>
          </tbody>
        </table>
        <p style={{ fontSize: '0.85rem', color: '#888' }}>
          ※ 參考價值以2026年3月底9999金17,500元/錢計算
        </p>

        <h2>實用試算：國際金價 → 台灣每錢</h2>
        <div style={{ background: '#f0fdf4', border: '1px solid #86efac', padding: '16px', borderRadius: '8px', margin: '1rem 0' }}>
          <strong>公式：</strong>
          <br />每錢台幣 = （國際金價 ÷ 31.1035）× 美元/台幣匯率 × 3.75
          <br /><br />
          <strong>實例：</strong>XAUUSD = 3,100美元/盎司，USD/TWD = 30.8
          <br />(3,100 ÷ 31.1035) × 30.8 × 3.75
          <br />= 99.68 × 30.8 × 3.75
          <br />= <strong>約11,548元/錢（理論價）</strong>
          <br /><br />
          <strong>實務牌價：</strong>約11,300–11,800元/錢（正常波動範圍）
        </div>

        <h2>實用試算：飾金重量估計</h2>
        <p>常見飾金的典型重量（僅供參考，實際差異很大）：</p>
        <ul>
          <li><strong>女裝金項鍊（細鏈）：</strong>約1–3錢（3.75–11.25公克）</li>
          <li><strong>男裝金項鍊（粗鏈）：</strong>約5–15錢（18.75–56.25公克）</li>
          <li><strong>金手鍊（女生）：</strong>約1–5錢（3.75–18.75公克）</li>
          <li><strong>金手鐲：</strong>約5–20錢（18.75–75公克）</li>
          <li><strong>結婚龍鳳鐲（一對）：</strong>約15–30錢（56–112公克）</li>
          <li><strong>金戒指（女）：</strong>約0.5–2錢（1.9–7.5公克）</li>
          <li><strong>金戒指（男）：</strong>約2–5錢（7.5–18.75公克）</li>
          <li><strong>金耳環（輕巧款）：</strong>約0.3–1錢（1.1–3.75公克）</li>
        </ul>

        <h2>黃金重量單位——常見問題</h2>
        <p>
          <strong>Q：我在國外買的金飾，單位怎麼算？</strong>
          <br />
          國外通常用公克（g）或盎司（oz）。用克數 × 0.2667 = 錢數。例如：20公克 = 5.33錢。
        </p>
        <p>
          <strong>Q：銀樓秤準嗎？會被偷重量嗎？</strong>
          <br />
          正規銀樓使用的珠寶秤精密度是0.01克，並受度量衡單位檢定。選擇公開秤重的店家，離開前先問：「可以讓我看秤嗎？」正常的店家都會同意。
        </p>
        <p>
          <strong>Q：我的金飾重量和當年買的不一樣，是被偷了嗎？</strong>
          <br />
          可能原因：1) 磨損——長期佩戴的金飾會有正常損耗；2) 純度沒那麼高；3) 當年購買時就沒有秤對。建議去有XRF儀器的店家檢測，看實際含金量是否符合當年的標示。
        </p>

        <h2>常見問題</h2>
        {faqs.map((f, i) => (
          <div key={i} style={{ marginBottom: '1.5rem', borderTop: '1px solid #e5e7eb', paddingTop: '1rem' }}>
            <h3 style={{ color: '#92400e', margin: '0 0 0.5rem' }}>{f.q}</h3>
            <p style={{ margin: 0 }}>{f.a}</p>
          </div>
        ))}

        <div style={{ background: '#fef3c7', border: '1px solid #f59e0b', padding: '20px', borderRadius: '8px', margin: '2rem 0', textAlign: 'center' }}>
          <strong style={{ fontSize: '1.1rem' }}>黃金估秤——現場XRF檢測，重量公開讓你看</strong>
          <br />
          <span style={{ color: '#78350f' }}>台北大安巧品珠寶 ｜ 0986-821-626 ｜ LINE：@QPD888</span>
        </div>

        <h2>延伸閱讀</h2>
        <ul>
          <li><a href="/blog/gold-weight">黃金重量解析｜錢/兩/盎司/公克的換算與歷史由來</a></li>
          <li><a href="/blog/gold-per-gram-taiwan-2026">台灣黃金每公克價格與錢/公克換算</a></li>
          <li><a href="/blog/gold-purity">黃金純度大解析｜9999、9958、18K含金量換算</a></li>
          <li><a href="/blog/taiwan-gold-price-per-qian-today-2026">台灣今日金價每錢2026｜即時報價</a></li>
          <li><a href="/blog/gold-coin-invest">金幣投資2026｜常見金幣種類與投資價值分析</a></li>
        </ul>
      </article>
    </>
  );
}
