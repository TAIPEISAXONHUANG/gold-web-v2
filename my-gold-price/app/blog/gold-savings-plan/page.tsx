import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '黃金儲蓄計劃2026｜小額定期定額買金、黃金存摺與累積策略',
  description: '黃金可以像基金一樣定期定額買嗎？小額每個月固定買黃金的策略。黃金儲蓄與定期定額買金的優缺點、以及台灣的實際操作方式。',
  keywords: '黃金儲蓄,定期定額買黃金,黃金存摺,小額黃金投資,黃金累積計劃',
  alternates: {
    canonical: 'https://www.gold-tw.com/blog/gold-savings-plan',
  },
};

const faqs = [
  {
    q: '黃金可以像買基金一樣定期定額嗎？',
    a: '可以。台灣主要銀行都有「黃金存摺」服務，可以設定每個月固定金額或固定重量買入，如同基金的定期定額概念。優點：不用一次拿出一大筆錢，時間分散可以降低進場時的價格風險。缺點：沒有利息收入，只是簡單的價格投機。',
  },
  {
    q: '定期定額買黃金，報酬率怎麼算？',
    a: '報酬率的計算方式：（現在總市值 - 總投入成本）÷ 總投入成本 × 100%。假設每月投入5,000元，1年後投入60,000元，黃金上漲15%，現在市值69,000元，報酬率 = (69,000-60,000)/60,000 = 15%。注意：這個計算未扣除銀行的買賣價差（點差）和工續費。',
  },
  {
    q: '黃金存摺和銀樓買實金，哪個比較好？',
    a: '各有優缺點。黃金存摺：優點是門檻低（1公克就能開始）、變現容易（致電銀行即可），缺點是沒有實物、所有人是銀行不是你。銀樓實金：優點是持有實物心裡踏實，缺點是有工費門檻較高。需要實物 → 銀樓；只是投資 → 存摺。',
  },
  {
    q: '每個月應該拿多少錢買黃金？',
    a: '沒有標準答案，建議不超過閒置資金的10%–20%。黃金只是資產配置的一部分，不適合作為唯一的投資工具。簡單原則：先確保緊急備用金（3–6個月生活費）和基本保險都已到位，再考慮定期定額買黃金。',
  },
  {
    q: '定期定額買黃金，要持續多久才有效？',
    a: '定期定額的「平均成本」效果，通常需要3–5年才能明顯體現。時間太短的話，單筆時機的影響力太大，定期定額的效果不明顯。建議有長期持有的心理準備，至少以3年為一個週期來評估績效。',
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
            '@type': 'FAQPage',
            'author': { '@type': 'Organization', 'name': '巧品珠寶' },
            'dateModified': '2025-01-01',
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
                name: '黃金儲蓄計劃與定期定額策略',
                item: 'https://www.gold-tw.com/blog/gold-savings-plan',
              },
            ],
          }),
        }}
      />
      <article style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
        <h1>黃金儲蓄計劃2026｜小額定期定額買金、黃金存摺與累積策略</h1>

        <div style={{ background: '#fffbeb', borderLeft: '4px solid #f59e0b', padding: '16px', margin: '16px 0', borderRadius: '8px' }}>
          <strong>直接給答案：</strong> 黃金可以定期定額買，就像買基金一樣。台灣主要銀行（台灣銀行、土地銀行等）都有黃金存摺服務，1公克就能開始，每月固定日期扣款。建議每月投入閒置資金的10%–20%，以3–5年為一個檢視週期。
        </div>

        <h2>為什麼要定期定額買黃金？</h2>
        <p>
          一次拿出一筆錢買黃金，時機判斷很重要。
          買在高點，幾年後才解套；買在低點，馬上就獲利。
          沒有人能每次都準確預測低點。
        </p>
        <p>
          定期定額的邏輯很簡單：
          <strong>無論價格高低，每個月固定買入同樣金額。</strong>
          價格高的時候，買到的重量少；價格低的時候，買到的重量多。
          長期下來，自動產生「平均成本」效果，降低時機風險。
        </p>

        <h2>定期定額買黃金怎麼計算？</h2>
        <p>
          假設：每月投入5,000元，連續12個月，國際金價波動如下：
        </p>

        <table style={{ width: '100%', borderCollapse: 'collapse', margin: '1.5rem 0' }}>
          <thead>
            <tr style={{ background: '#f5f0e8' }}>
              <th style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'left' }}>月份</th>
              <th style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>金價（美元/盎司）</th>
              <th style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>每克價格（元）</th>
              <th style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>投入（元）</th>
              <th style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>累積重量（克）</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>1月</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>2,650</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>4,467</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>5,000</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>1.12克</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>2月</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>2,800</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>4,720</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>5,000</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>2.18克</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>3月</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>2,900</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>4,889</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>5,000</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>3.20克</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>（以此類推）</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>...</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>...</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>...</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>...</td>
            </tr>
          </tbody>
        </table>

        <p>
          <strong>關鍵數字：</strong>如果堅持12個月，每月5,000元，全年投入60,000元，
          平均買入成本會比「一次性在年初買入」的價格更低，假設金價年底回到3,000美元，
          年終市值約69,000元（含銀行費用前），正報酬率約15%。
        </p>

        <h2>台灣定期定額買黃金有哪些方法？</h2>

        <h3>方法一：銀行黃金存摺（最推薦）</h3>
        <p>
          台灣銀行、土地銀行、合作金庫等公股銀行都有黃金存摺服務。
        </p>
        <ul>
          <li>最低門檻：1公克（2026年約4,700元）就能開始</li>
          <li>變現方式：致電銀行即可回售，款項匯入帳戶</li>
          <li>費用：銀行的買賣價差（約1%–2%）</li>
          <li>優點：門檻低、操作便利、有保管服務</li>
          <li>缺點：沒有實物，是銀行的債權而非黃金所有權</li>
        </ul>

        <h3>方法二：銀樓定期購入（適合想累積實金者）</h3>
        <p>
          每個月去銀樓購買小額黃金（如1錢金豆）。
        </p>
        <ul>
          <li>最低門檻：1錢（2026年約17,500元起）</li>
          <li>變現方式：攜帶實金到銀樓估價</li>
          <li>費用：銀樓工費（通常高於銀行）</li>
          <li>優點：持有實物，心理踏實</li>
          <li>缺點：工費高、儲存安全要注意</li>
        </ul>

        <h3>方法三：黃金ETF（適合有股票戶的投資人）</h3>
        <p>
          在證券戶買入追蹤黃金價格的ETF（如元大S&P黃金）。
        </p>
        <ul>
          <li>最低門檻：1單位（約股價×手續費）</li>
          <li>變現方式：在證券戶卖出，當天資金可用</li>
          <li>費用：證券交易手續費（約0.1%–0.2%）</li>
          <li>優點：無實物持有問題，變現最快</li>
          <li>缺點：無實物擔保，適合純投資者</li>
        </ul>

        <h2>定期定額黃金怎麼配置？</h2>

        <table style={{ width: '100%', borderCollapse: 'collapse', margin: '1.5rem 0' }}>
          <thead>
            <tr style={{ background: '#f5f0e8' }}>
              <th style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'left' }}>投資人類型</th>
              <th style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'left' }}>建議佔閒置資金比例</th>
              <th style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'left' }}>說明</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>保守型</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>5%–10%</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>以保值為主，抗通膨</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>穩健型</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>10%–15%</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>平衡型配置</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>積極型</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>15%–20%</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>願意承受較高波動</td>
            </tr>
          </tbody>
        </table>
        <p>
          ※ 黃金建議佔總投資組合的比例，不是全部的現金存款
        </p>

        <h2>定期定額黃金有哪些注意事項？</h2>
        <ol>
          <li><strong>紀律比時機重要：</strong>設定好金額後，堅持每個月買入，不要因為價格下跌就停止，也不要因為價格上漲就多買</li>
          <li><strong>長期持有：</strong>至少3–5年才看得出平均成本效果，不要短線操作</li>
          <li><strong>評估週期：</strong>每6–12個月檢視一次，不需要頻繁查看</li>
          <li><strong>銀行 vs 銀樓：</strong>純投資用黃金存摺，有實物需求去銀樓</li>
          <li><strong>不要全押：</strong>黃金只是資產配置的一部分，不要 ALL IN</li>
        </ol>

        <h2>常見問題</h2>
        {faqs.map((f, i) => (
          <div key={i} style={{ marginBottom: '1.5rem', borderTop: '1px solid #e5e7eb', paddingTop: '1rem' }}>
            <h3 style={{ color: '#92400e', margin: '0 0 0.5rem' }}>{f.q}</h3>
            <p style={{ margin: 0 }}>{f.a}</p>
          </div>
        ))}

        <div style={{ background: '#fef3c7', border: '1px solid #f59e0b', padding: '20px', borderRadius: '8px', margin: '2rem 0', textAlign: 'center' }}>
          <strong style={{ fontSize: '1.1rem' }}>黃金估價估秤——現場XRF檢測，現金融資</strong>
          <br />
          <span style={{ color: '#78350f' }}>台北大安巧品珠寶 ｜ 0986-821-626 ｜ LINE：@QPD888</span>
        </div>

        <h2>延伸閱讀</h2>
        <ul>
          <li><a href="/blog/gold-vs-silver-investment">黃金vs白銀投資比較｜兩種貴金屬的特性與配置建議</a></li>
          <li><a href="/blog/taiwan-gold-price-outlook-2026">台灣2026金價行情與展望</a></li>
          <li><a href="/blog/gold-buying-guide-beginner-2026">第一次買黃金就上手2026</a></li>
          <li><a href="/blog/gold-selling-timing-guide">黃金變現時機分析｜什麼時候賣最好</a></li>
          <li><a href="/blog/gold-purity">黃金純度大解析｜9999、9958、18K含金量換算</a></li>
        </ul>
      </article>
    </>
  );
}
