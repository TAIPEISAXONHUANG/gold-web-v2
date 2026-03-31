import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'K金回收計算公式｜18K/14K/10K多少錢？線上試算方法完整教學',
  description: 'K金回收多少錢？18K、14K、10K怎麼算？用簡單公式自己算，附線上試算範例。含K數刻印識別、回收店家比較、以及為何有些店家報價特別低的常見原因。',
  keywords: 'K金回收計算,K金回收怎麼算,K金試算,18K多少錢,14K多少錢,10K多少錢,K金回收公式',
  alternates: {
    canonical: 'https://www.gold-tw.com/blog/k-gold-recovery-calculation',
  },
};

const faqs = [
  {
    q: 'K金回收價格怎麼算？公式是什麼？',
    a: 'K金回收價格的公式很簡單：回收價 = 當日9999純金每錢報價 × 含金量%。18K = 75%，14K = 58.5%，10K = 41.7%。範例：當日9999金 17,500元/錢，18K回收 = 17,500 × 75% = 13,125元/錢。',
  },
  {
    q: 'K金項鍊10錢大概可以賣多少錢？',
    a: '以2026年3月底行情（9999金約17,500元/錢）計算：18K × 10錢 × 17,500 = 131,250元（理論值）；14K × 10錢 × 17,500 = 102,375元；10K × 10錢 × 17,500 = 72,975元。實際報價可能因店家扣損耗而少5%–10%，建議多問2–3家比較。',
  },
  {
    q: 'K金的「K」是什麼意思？K數和含金量怎麼換算？',
    a: 'K來自德文Karat。24K = 純金（99.9%+）。各K數含金量：24K ÷ 24 × K數 = 含金量。18K = 18/24 = 75%；14K = 14/24 = 58.3%；10K = 10/24 = 41.7%。歐洲標示法用千分比：750 = 75%（18K），585 = 58.5%（14K），417 = 41.7%（10K）。',
  },
  {
    q: 'K金回收時，店家說要扣損耗是正常的嗎？',
    a: '損耗扣款指的是熔煉過程中不可避免的金料損耗，約1%–3%。扣損耗是否合理，取決於比例。如果扣3%，等於每錢少約400元，5錢就差了2,000元。好的店家不扣損耗，或把損耗成本反映在牌價而非額外扣除。問清楚再決定。',
  },
  {
    q: '我的K金飾品看不出K數怎麼辦？',
    a: '三個選項：1) 找刻印——扣頭處、項鍊尾端、耳環背後通常有刻印；2) XRF儀器測——3秒知道精準含金量，巧品珠寶現場提供此服務；3) 自己用比重法測——需要水和精密秤，比較繁瑣。建議直接到有儀器的店家，現場測不收費。',
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
                name: 'K金回收計算公式',
                item: 'https://www.gold-tw.com/blog/k-gold-recovery-calculation',
              },
            ],
          }),
        }}
      />
      <article style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
        <h1>K金回收計算公式｜18K/14K/10K多少錢？線上試算方法完整教學</h1>

        <div style={{ background: '#fffbeb', borderLeft: '4px solid #f59e0b', padding: '16px', margin: '16px 0', borderRadius: '8px' }}>
          <strong>直接給答案：</strong> K金回收價 = <strong>當日9999純金每錢報價 × 含金量%</strong>。2026年3月底行情：18K約 <strong>13,100–13,500 元/錢</strong>、14K約 <strong>10,200–10,500 元/錢</strong>、10K約 <strong>7,200–7,500 元/錢</strong>。本文提供完整試算教學，幫你在進店前心裡有數。
        </div>

        <h2>K金回收計算公式——三分鐘學會</h2>
        <p>
          K金回收價格的底層邏輯非常簡單：
        </p>
        <div style={{ background: '#f0fdf4', border: '1px solid #86efac', padding: '16px', borderRadius: '8px', margin: '1rem 0' }}>
          <strong>K金回收價（元/錢）＝ 當日9999純金報價（元/錢） × 含金量%</strong>
          <br /><br />
          其中：<br />
          18K含金量 = 75%<br />
          14K含金量 = 58.5%<br />
          10K含金量 = 41.7%
        </div>
        <p>
          為什麼是這樣？因為K金的價值完全由含金量決定。
          18K就是75%的純金，所以回收時按純金價的75%計算。
          不會因為「比較硬」或「款式比較好」而多給或少給。
        </p>

        <h2>K金回收試算——各K數行情表</h2>
        <p>以2026年3月底9999純金回收行情 17,500–18,000 元/錢為基準：</p>

        <table style={{ width: '100%', borderCollapse: 'collapse', margin: '1.5rem 0' }}>
          <thead>
            <tr style={{ background: '#f5f0e8' }}>
              <th style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'left' }}>K數</th>
              <th style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>含金量</th>
              <th style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>歐洲刻印</th>
              <th style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>每錢參考回收價</th>
              <th style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>2錢估計</th>
              <th style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>5錢估計</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>24K（9999純金）</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>99.9%+</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>999</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>17,500–18,000</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>35,000–36,000</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>87,500–90,000</td>
            </tr>
            <tr style={{ background: '#fef9e7' }}>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}><strong>22K（916）</strong></td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}><strong>91.67%</strong></td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}><strong>916</strong></td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}><strong>16,000–16,500</strong></td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}><strong>32,000–33,000</strong></td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}><strong>80,000–82,500</strong></td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}><strong>18K</strong></td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}><strong>75%</strong></td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}><strong>750</strong></td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}><strong>13,100–13,500</strong></td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}><strong>26,200–27,000</strong></td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}><strong>65,500–67,500</strong></td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}><strong>14K</strong></td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}><strong>58.5%</strong></td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}><strong>585</strong></td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}><strong>10,200–10,500</strong></td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}><strong>20,400–21,000</strong></td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}><strong>51,000–52,500</strong></td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}><strong>10K</strong></td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}><strong>41.7%</strong></td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}><strong>417</strong></td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}><strong>7,200–7,500</strong></td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}><strong>14,400–15,000</strong></td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}><strong>36,000–37,500</strong></td>
            </tr>
          </tbody>
        </table>
        <p style={{ fontSize: '0.85rem', color: '#888' }}>
          ※ 參考價以2026年3月底行情估算，正確報價請致電：0986-821-626
        </p>

        <h2>實際試算範例——一步一步帶你算</h2>
        <p>
          <strong>情境：</strong>你有一條18K金項鍊，秤起來2.5錢，想知道可以賣多少錢。
        </p>
        <p>
          <strong>Step 1：確認含金量</strong><br />
          18K = 75% = 0.75
        </p>
        <p>
          <strong>Step 2：確認今日9999純金牌價</strong><br />
          假設今日牌價：17,800 元/錢
        </p>
        <p>
          <strong>Step 3：計算18K回收價</strong><br />
          17,800 × 75% = <strong>13,350 元/錢</strong>
        </p>
        <p>
          <strong>Step 4：乘以重量</strong><br />
          13,350 × 2.5錢 = <strong>33,375 元</strong>
        </p>
        <p>
          這個數字是理論值。如果店家扣3%損耗：33,375 - 1,001 = 32,374元，差了約1,000元。
          所以估價前問清楚「有沒有扣損耗」很重要。
        </p>

        <h2>如何確認自己的K金飾品是幾K？</h2>
        <p>
          在嘗試計算之前，先確認K數：
        </p>
        <ul>
          <li><strong>看刻印：</strong>幾乎所有K金飾品都有內刻印，在扣頭處、項鍊最尾端、或耳環背面<br />
            18K → 「750」「18K」「Au750」<br />
            14K → 「585」「14K」「Au585」<br />
            10K → 「417」「10K」「Au417」<br />
            22K → 「916」「22K」「916」
          </li>
          <li><strong>XRF儀器檢測：</strong>如果看不到刻印，可以用XRF儀器現場測，3秒知道精準結果。巧品珠寶提供此服務，不收費。</li>
          <li><strong>比重法：</strong>傳統珠寶界用金屬比重來測量，需要精密天平和蒸餾水，步驟繁瑣，適合專業人士。</li>
        </ul>

        <h2>影響K金回收價格的三個變數</h2>
        <p>
          <strong>變數一：當日9999純金牌價</strong>
          <br />
          牌價每天浮動，取決於國際金價和匯率。建議在決定去店家之前，先打電話詢問當日牌價。
        </p>
        <p>
          <strong>變數二：含金量（K數）</strong>
          <br />
          K數越高，含金量越高，回收價越好。22K比18K高，18K比14K高，這是不變的原則。
        </p>
        <p>
          <strong>變數三：店家是否扣損耗</strong>
          <br />
          這是影響最大的變數。兩家店可能對同一件飾品報價差距達5%–10%，
          幾乎都是因為損耗扣款的比例不同。建議估價前直接問：「你們有沒有扣損耗？扣幾%？」
        </p>

        <h2>為什麼有些店家K金回收報價特別低？</h2>
        <p>
          如果你估完價，發現某間店的報價明顯低於其他家，常見原因：
        </p>
        <ul>
          <li><strong>扣損耗：</strong>扣3%–5%，等於每錢少400–600元</li>
          <li><strong>壓低含金量：</strong>把你的18K說成14K，再扣損耗，一魚兩吃</li>
          <li><strong>低估重量：</strong>用「行情不好」或「成色複雜」等話術，實際是想壓低報價</li>
          <li><strong>利率加乘：</strong>如果透過當鋪，利率也會吃掉報酬</li>
        </ul>
        <p>
          <strong>防範方式：</strong>去有XRF儀器的店家，現場測現場秤，全程公開。
          巧品珠寶不扣損耗，XRF現場測，秤重讓你看。
        </p>

        <h2>K金和純金——同樣重量，回收差多少？</h2>
        <p>
          以5錢為例（9999金 17,500元/錢）：
        </p>
        <ul>
          <li>9999純金5錢：5 × 17,500 = <strong>87,500元</strong></li>
          <li>22K（916）5錢：5 × 16,042 = <strong>80,208元</strong>（差7,292元）</li>
          <li>18K 5錢：5 × 13,125 = <strong>65,625元</strong>（差21,875元）</li>
          <li>14K 5錢：5 × 10,238 = <strong>51,188元</strong>（差36,312元）</li>
          <li>10K 5錢：5 × 7,298 = <strong>36,488元</strong>（差51,012元）</li>
        </ul>
        <p>
          K數越低，回收價差越大。但K金當年買的時候通常也比較便宜，不能直接用「少拿多少」來衡量得失。
        </p>

        <h2>常見問題</h2>
        {faqs.map((f, i) => (
          <div key={i} style={{ marginBottom: '1.5rem', borderTop: '1px solid #e5e7eb', paddingTop: '1rem' }}>
            <h3 style={{ color: '#92400e', margin: '0 0 0.5rem' }}>{f.q}</h3>
            <p style={{ margin: 0 }}>{f.a}</p>
          </div>
        ))}

        <div style={{ background: '#fef3c7', border: '1px solid #f59e0b', padding: '20px', borderRadius: '8px', margin: '2rem 0', textAlign: 'center' }}>
          <strong style={{ fontSize: '1.1rem' }}>K金回收估價——現場XRF測成色，不扣損耗，秤多少算多少</strong>
          <br />
          <span style={{ color: '#78350f' }}>台北大安巧品珠寶 ｜ 0986-821-626 ｜ LINE：@QPD888</span>
          <br />
          <span style={{ fontSize: '0.9rem', color: '#92400e' }}>18K、14K、10K、22K（916）、Pt900——全品項回收</span>
        </div>

        <h2>延伸閱讀</h2>
        <ul>
          <li><a href="/blog/k-gold-recovery-price-2026">K金回收價格2026｜18K、14K、10K行情完整對照</a></li>
          <li><a href="/blog/k-gold-buying-guide-taipei">K金收購台北｜18K/14K/10K收購行情與店家選擇重點</a></li>
          <li><a href="/blog/916-gold-recycling-taiwan-2026">916黃金回收2026｜22K台灣行情與18K差異解析</a></li>
          <li><a href="/blog/gold-vs-k-gold-comparison">黃金和K金的差異｜9999、22K、18K完整比較</a></li>
          <li><a href="/blog/gold-recovery-traps">黃金回收陷阱｜常見5大話術與防範對策</a></li>
        </ul>
      </article>
    </>
  );
}
