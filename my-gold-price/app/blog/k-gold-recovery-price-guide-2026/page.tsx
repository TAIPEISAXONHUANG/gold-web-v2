import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'K金回收價格2026｜18K/14K/10K回收行情、計算方式與店家選擇',
  description: 'K金回收價格多少？2026年18K、14K、10K回收行情表＋計算方式。k金回收價格怎麼算？不同店家報價差異原因與選擇建議。',
  keywords: 'K金回收價格,K金回收價格2026,18K回收多少錢,14K回收價格,10K回收行情,k金回收計算',
  alternates: {
    canonical: 'https://www.gold-tw.com/blog/k-gold-recovery-price-guide-2026',
  },
};

const faqs = [
  {
    q: 'K金回收價格怎麼算？',
    a: 'K金回收價 = 當日9999純金報價 × 含金量%。18K = 75%、14K = 58.5%、10K = 41.7%。以2026年3月底9999金17,500元/錢計算：18K回收約13,125元/錢，14K約10,238元/錢，10K約7,298元/錢。實際報價視店家是否扣耗損浮動。',
  },
  {
    q: 'k金回收價格和k金售價一樣嗎？',
    a: '完全不一樣。K金「售價」包含工藝費、品牌溢價和店家利潤，通常比純金料價高20%–50%。K金「回收價」只算金料價值，按含金量計算。簡單說：你買的時候是「金價＋工費」，你賣的時候只有「金價」，工費不退。所以買的時候，建議把「工費佔比」考慮進去。',
  },
  {
    q: '為什麼不同店家k金回收價格差很多？',
    a: '兩個主因：損耗扣款比例不同、對含金量的認定不同。損耗扣款1%–5%都有，扣3%等於每錢少400–600元。含金量認定方面，如果店家沒有儀器，可能用猜的；有XRF儀器的店家能量化到小數點後兩位。建議估價前問清楚這兩點。',
  },
  {
    q: '18K金回收大概多少錢一錢？',
    a: '以2026年3月底行情：當日9999金17,500–18,000元/錢，18K（75%）參考回收價13,100–13,500元/錢。實際數字會因店家損耗扣款和當日牌價浮動而有差異。',
  },
  {
    q: 'k金項鍊和k金戒指，回收價格有差嗎？',
    a: '含金量和重量相同的情況下，款式本身不影響回收報價。但項鍊有扣頭問題（扣頭通常不是純金），需要分開計算重量。戒指若有寶石，須先拆除再估價。影響回收價格的就三個變數：含金量、重量、當日9999牌價。',
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
            'headline': 'K金回收價格2026｜18K/14K/10K回收行情、計算方式與店家選擇',
            'author': { '@type': 'Person', 'name': '巧品珠寶' },
            'publisher': { '@type': 'Organization', 'name': '巧品珠寶', 'url': 'https://www.gold-tw.com' },
            'datePublished': '2026-03-01',
            'dateModified': '2026-04-01',
            'description': 'K金回收價格多少？2026年18K、14K、10K回收行情表＋計算方式。',
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
                name: 'K金回收價格指南2026',
                item: 'https://www.gold-tw.com/blog/k-gold-recovery-price-guide-2026',
              },
            ],
          }),
        }}
      />
      <article style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
        <h1>K金回收價格2026｜18K/14K/10K回收行情、計算方式與店家選擇</h1>

        <div style={{ background: '#fffbeb', borderLeft: '4px solid #f59e0b', padding: '16px', margin: '16px 0', borderRadius: '8px' }}>
          <strong>直接給答案：</strong> 2026年3月底，K金回收參考行情：18K約 <strong>13,100–13,500 元/錢</strong>、14K約 <strong>10,200–10,500 元/錢</strong>、10K約 <strong>7,200–7,500 元/錢</strong>（9999牌價17,500元/錢 × 各K數含金量）。選店家重點：問清楚有沒有扣耗損。
        </div>

        <h2>K金回收價格怎麼計算？</h2>
        <p>
          K金回收價格只有一個計算邏輯：
        </p>
        <div style={{ background: '#f0fdf4', border: '1px solid #86efac', padding: '16px', borderRadius: '8px', margin: '1rem 0' }}>
          <strong>K金回收價（元/錢）＝ 當日9999純金牌價（元/錢） × 含金量%</strong>
          <br /><br />
          含金量對照：<br />
          24K（9999）= 99.9%+ → 乘以 99.9%<br />
          22K（916） = 91.67% → 乘以 91.67%<br />
          18K（750） = 75% → 乘以 75%<br />
          14K（585） = 58.5% → 乘以 58.5%<br />
          10K（417） = 41.7% → 乘以 41.7%
        </div>
        <p>
          這個公式適用於所有K金，不分款式、品牌、購買地點。
          品牌知名度和工藝設計在回收時不算錢——只算含金量和重量。
        </p>

        <h2>2026年K金回收行情是多少？</h2>
        <p>以2026年3月底9999純金回收牌價 17,500–18,000 元/錢為基準：</p>

        <table style={{ width: '100%', borderCollapse: 'collapse', margin: '1.5rem 0' }}>
          <thead>
            <tr style={{ background: '#f5f0e8' }}>
              <th style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'left' }}>K金類型</th>
              <th style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>含金量</th>
              <th style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>每錢參考回收價</th>
              <th style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>3錢估計</th>
              <th style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>5錢估計</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>9999純金（24K）</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>99.9%+</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>17,500–18,000</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>52,500–54,000</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>87,500–90,000</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}><strong>22K（916）</strong></td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}><strong>91.67%</strong></td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}><strong>16,000–16,500</strong></td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}><strong>48,000–49,500</strong></td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}><strong>80,000–82,500</strong></td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}><strong>18K（750）</strong></td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}><strong>75%</strong></td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}><strong>13,100–13,500</strong></td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}><strong>39,300–40,500</strong></td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}><strong>65,500–67,500</strong></td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}><strong>14K（585）</strong></td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}><strong>58.5%</strong></td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}><strong>10,200–10,500</strong></td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}><strong>30,600–31,500</strong></td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}><strong>51,000–52,500</strong></td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}><strong>10K（417）</strong></td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}><strong>41.7%</strong></td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}><strong>7,200–7,500</strong></td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}><strong>21,600–22,500</strong></td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}><strong>36,000–37,500</strong></td>
            </tr>
          </tbody>
        </table>
        <p style={{ fontSize: '0.85rem', color: '#888' }}>
          ※ 參考價以2026年3月底行情估算，未扣耗損。實際報價請致電：0986-821-626
        </p>

        <h2>K金回收 vs K金購買——為什麼價格差這麼多？</h2>
        <p>
          很多人發現，K金飾品買的時候很貴，賣的時候卻差很多。
          原因是「購買價格」和「回收價格」是兩個不同的定價邏輯：
        </p>
        <ul>
          <li><strong>購買價格：</strong>金料價 + 工藝費 + 品牌溢價 + 店家利潤<br />
            工藝費可能佔總價的 20%–50%（設計師款、古法金、進口品牌更高）
          </li>
          <li><strong>回收價格：</strong>只有金料價，不含工藝費<br />
            計算：含金量 × 當日純金牌價<br />
            一分錢一分錢算，沒有工藝補貼</li>
        </ul>
        <p>
          <strong>實際案例：</strong>一條18K金項鍊，當年買入價：
          金料（5錢 × 13,500）67,500元 + 工藝費 15,000元 = 82,500元。<br />
          現在回收：金料（5錢 × 13,125）= 65,625元。<br />
          工藝費的15,000元基本蒸發了，損失約18%。
        </p>
        <p>
          這個例子不是說K金不值得買，而是要了解遊戲規則。
          如果你在乎保值，買9999純金；如果你在乎美觀和耐用，K金是合理選擇。
        </p>

        <h2>不同店家K金回收報價為什麼會有差異？</h2>
        <p>
          同一件K金飾品，A店報65,000元，B店報55,000元，
          差額10,000元，差別通常來自以下三個原因：
        </p>

        <table style={{ width: '100%', borderCollapse: 'collapse', margin: '1.5rem 0' }}>
          <thead>
            <tr style={{ background: '#f5f0e8' }}>
              <th style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'left' }}>差異原因</th>
              <th style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'left' }}>說明</th>
              <th style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'left' }}>影響幅度</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>損耗扣款</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>熔煉損耗成本轉嫁消費者</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>每錢少300–600元</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>含金量認定</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>有儀器vs沒儀器，測量精度差很多</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>同一飾品可能差3%–5%</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>9999牌價浮動</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>不同店家更新頻率不同</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>每天可能差100–200元/錢</td>
            </tr>
          </tbody>
        </table>

        <h2>如何選擇K金回收店家？</h2>
        <p>
          選K金回收店家，三個問題幫你過濾：
        </p>
        <ol>
          <li><strong>Q: 你們K金回收有沒有扣耗損？</strong><br />
            答案如果不是「不扣」，就再多問兩家</li>
          <li><strong>Q: 有沒有儀器可以現場測含金量？</strong><br />
            XRF儀器3秒知道精準數字，比肉眼靠譜</li>
          <li><strong>Q: 當日9999牌價是多少？</strong><br />
            可以拿來自己算一遍，對一下數字</li>
        </ol>
        <p>
          回答閃爍其詞、含糊帶過的店家，建議直接跳過。
          巧品珠寶：XRF現場測成色，不扣耗損，現場現金融資。
        </p>

        <h2>K金回收前要準備什麼？</h2>
        <ul>
          <li><strong>確認K數：</strong>看扣頭或項鍊尾端的刻印（750=18K，585=14K，417=10K）</li>
          <li><strong>秤重量：</strong>家裡有珠寶秤的先秤一下，心裡有數</li>
          <li><strong>附帶物品：</strong>保卡、盒子、證書（對估價沒有幫助，但可能影響當時購買的信任感）</li>
          <li><strong>身份證件：</strong>合法交易需要登記，不需要留證</li>
          <li><strong>不要先拆寶石：</strong>有寶石的戒指/項鍊，先估完再決定要不要拆除</li>
        </ul>

        <h2>K金回收流程——在巧品珠寶</h2>
        <ol>
          <li>致電或LINE詢問當日9999牌價和大約回收金額範圍</li>
          <li>到店（免預約），攜帶K金飾品和身份證</li>
          <li>XRF儀器現場檢測含金量，3秒知道結果</li>
          <li>現場公開秤重，重量數字讓你確認</li>
          <li>計算報價：牌價 × 實測含金量，不扣耗損</li>
          <li>雙方確認數字，現場給付現金</li>
        </ol>

        <h2>常見問題</h2>
        {faqs.map((f, i) => (
          <div key={i} style={{ marginBottom: '1.5rem', borderTop: '1px solid #e5e7eb', paddingTop: '1rem' }}>
            <h3 style={{ color: '#92400e', margin: '0 0 0.5rem' }}>{f.q}</h3>
            <p style={{ margin: 0 }}>{f.a}</p>
          </div>
        ))}

        <div style={{ background: '#fef3c7', border: '1px solid #f59e0b', padding: '20px', borderRadius: '8px', margin: '2rem 0', textAlign: 'center' }}>
          <strong style={{ fontSize: '1.1rem' }}>K金回收估價——XRF現場測成色，不扣耗損，現場現金融資</strong>
          <br />
          <span style={{ color: '#78350f' }}>台北大安巧品珠寶 ｜ 0986-821-626 ｜ LINE：@QPD888</span>
          <br />
          <span style={{ fontSize: '0.9rem', color: '#92400e' }}>18K、14K、10K、22K（916）、Pt900——全品項回收</span>
        </div>

        <h2>延伸閱讀</h2>
        <ul>
          <li><a href="/blog/k-gold-recovery-price-2026">K金回收價格2026｜18K、14K、10K行情完整對照</a></li>
          <li><a href="/blog/916-gold-recycling-taiwan-2026">916黃金回收2026｜22K台灣行情與18K差異解析</a></li>
          <li><a href="/blog/k-gold-recovery-calculation">K金回收計算公式｜18K/14K/10K多少錢線上試算</a></li>
          <li><a href="/blog/gold-vs-k-gold-comparison">黃金和K金的差異｜9999、22K、18K完整比較</a></li>
          <li><a href="/blog/gold-recovery-traps">黃金回收陷阱｜常見5大話術與防範對策</a></li>
        </ul>
      </article>
    </>
  );
}
