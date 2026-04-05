import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'K金回收價格2026年4月｜18K、14K、10K最新行情與計算方式',
  description: '2026年4月K金回收價格行情。18K、14K、10K每錢收購價格即時查詢，含金量換算公式、不扣耗損說明，台北大安巧品珠寶當日報價。',
  keywords: 'K金回收價格,18K回收價,14K回收價,K金回收行情2026,k金回收多少錢,K金收購台北',
  alternates: {
    canonical: 'https://www.gold-tw.com/blog/k-gold-recycle-price-april-2026',
  },
};

const faqs = [
  {
    q: '2026年4月K金回收價格怎麼算？',
    a: '公式很簡單：K金回收價 = 當日9999牌價 × 含金量 × 重量。以2026年4月初9999牌價約17,500元/錢為基準：18K（75%）約13,100元/錢；14K（58.5%）約10,200元/錢；10K（41.7%）約7,300元/錢。實際報價請致電當日確認，因為牌價每日浮動。',
  },
  {
    q: '什麼是火耗？回收K金時會被扣嗎？',
    a: '火耗是部分銀樓在回收時，以「熔煉損耗」為由扣除3–5%重量的手法。例如收3錢18K，扣5%火耗後只算2.85錢，等於少給你156元。巧品珠寶的政策：不扣火耗，秤重全程公開，實際重量 = 計算重量。',
  },
  {
    q: 'K金飾品刻有「18K」就代表含金75%嗎？',
    a: '正常情況是的。國際認可標準：18K = 含金量75%，14K = 58.5%，10K = 41.7%。但市場上確實存在少數以合金仿冒的情況。建議找有XRF儀器（螢光X射線光譜儀）的店家現場驗成色，3秒確認含金量，有數據才安心。',
  },
  {
    q: '白K金（白色18K）和黃K金回收價格一樣嗎？',
    a: '是的，回收價格只看「含金量」，不看顏色。白K金的白色是表面電鍍銠造成的，底材同樣是75%的金，回收時計算的是底材含金量，電鍍部分忽略不計。所以18K黃K金和18K白K金，在同等重量下回收價格相同。',
  },
  {
    q: '玫瑰金（Rose Gold）回收怎麼算？',
    a: '玫瑰金的含金量標示也是用K數，例如18K玫瑰金含金量同樣是75%。玫瑰金顏色來自較高比例的銅合金，銅的市場價格很低，回收時僅計算金的含量。因此18K玫瑰金的回收價格 = 18K黃K金的回收價格，不會因為顏色不同而有差異。',
  },
];

export const lastModified = new Date('2026-03-19');
export default function KGoldRecyclePriceApril2026Page() {
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
                name: 'K金回收價格2026年4月',
                item: 'https://www.gold-tw.com/blog/k-gold-recycle-price-april-2026',
              },
            ],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: 'K金回收價格2026年4月｜18K、14K、10K最新行情與計算方式',
            description: '2026年4月K金回收價格行情。18K、14K、10K每錢收購價格即時查詢，含金量換算公式、不扣耗損說明，台北大安巧品珠寶當日報價。',
            datePublished: '2026-04-02',
            dateModified: '2026-04-02',
            author: { '@type': 'Organization', name: '巧品珠寶' },
            publisher: { '@type': 'Organization', name: '巧品珠寶', url: 'https://www.gold-tw.com' },
            mainEntityOfPage: 'https://www.gold-tw.com/blog/k-gold-recycle-price-april-2026',
          }),
        }}
      />
      <article style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
        <h1>K金回收價格2026年4月｜18K、14K、10K最新行情與計算方式</h1>

        <div style={{ background: '#fffbeb', borderLeft: '4px solid #f59e0b', padding: '16px', margin: '16px 0', borderRadius: '8px' }}>
          <strong>4月初即時行情（以9999牌價17,500元/錢為基準）：</strong>
          <br />18K → 約 <strong>13,100元/錢</strong>｜14K → 約 <strong>10,200元/錢</strong>｜10K → 約 <strong>7,300元/錢</strong>
          <br />不扣火耗，秤重公開。即時報價：<strong>0986-821-626</strong>
        </div>

        <h2>K金回收價格怎麼計算？</h2>
        <p>
          K金回收的邏輯只有一條主線：含金量決定一切。
        </p>
        <p>
          含金量是由K數決定的固定比例，不是店家說了算：
        </p>
        <ul>
          <li><strong>24K / 9999：</strong>含金量 99.9%</li>
          <li><strong>22K / 916：</strong>含金量 91.6%</li>
          <li><strong>18K / Au750：</strong>含金量 75%</li>
          <li><strong>14K / Au585：</strong>含金量 58.5%</li>
          <li><strong>10K / Au417：</strong>含金量 41.7%</li>
        </ul>
        <p>
          公式：<strong>K金回收價 = 9999牌價 × 含金量比例 × 重量（錢）</strong>
        </p>
        <div style={{ background: '#f0fdf4', border: '1px solid #86efac', padding: '16px', borderRadius: '8px', margin: '1rem 0' }}>
          <strong>實際試算（2026年4月初，9999牌價17,500元/錢）：</strong>
          <br />18K 3錢：17,500 × 0.75 × 3 = <strong>39,375元</strong>
          <br />14K 5錢：17,500 × 0.585 × 5 = <strong>51,187元</strong>
          <br />10K 2錢：17,500 × 0.417 × 2 = <strong>14,595元</strong>
        </div>

        <h2>2026年4月K金回收價格怎麼換算？</h2>
        <table style={{ width: '100%', borderCollapse: 'collapse', margin: '1.5rem 0' }}>
          <thead>
            <tr style={{ background: '#92400e', color: '#fff' }}>
              <th style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'left' }}>K數</th>
              <th style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'left' }}>含金量</th>
              <th style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>回收參考價/錢</th>
              <th style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>回收參考價/公克</th>
              <th style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'left' }}>常見飾品</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>24K / 9999</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>99.9%</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>17,465元</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>4,624元</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>金條、金幣</td>
            </tr>
            <tr style={{ background: '#fafafa' }}>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>22K / 916</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>91.6%</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>16,030元</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>4,247元</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>婚戒、印度飾品</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>18K / Au750</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>75%</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>13,125元</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>3,477元</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>精品珠寶、Cartier</td>
            </tr>
            <tr style={{ background: '#fafafa' }}>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>14K / Au585</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>58.5%</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>10,238元</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>2,713元</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>日常飾品、美系珠寶</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>10K / Au417</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>41.7%</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>7,298元</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>1,934元</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>時尚飾品、美國市場</td>
            </tr>
          </tbody>
        </table>
        <p style={{ fontSize: '0.875rem', color: '#6b7280' }}>
          ※ 以上價格以9999牌價17,500元/錢為基準試算，實際報價依當日牌價調整。
        </p>

        <h2>為什麼各家報價差這麼多？</h2>
        <p>
          表面上，K金回收公式人人都會算。但最終到手的錢，差距可以高達10%–15%。關鍵在三個變數：
        </p>

        <h3>1. 火耗扣不扣</h3>
        <p>
          最常見的坑。部分銀樓以「熔煉需要損耗金屬」為由，在計算時直接扣掉5%重量。
          實際上，現代熔煉技術下火耗遠低於此，這5%多半是額外利潤。
        </p>
        <p>
          計算差距：你拿3錢18K飾品，扣5%火耗等於只算2.85錢，少算的0.15錢在4月初行情下 = 少拿1,969元。
        </p>

        <h3>2. 牌價折扣</h3>
        <p>
          有些店家公告「照牌價收」，但實際上對你的牌價打折，例如只給牌價的95%。
          建議直接問：「你們今天18K報多少錢？」要求給出明確數字，不接受「視情況而定」。
        </p>

        <h3>3. 含金量認定</h3>
        <p>
          少數店家對成色有爭議，例如主張你的「18K」實際是「仿製品」或含金量不足，
          藉此壓低報價。防範方法：要求現場XRF驗成色，3秒出結果，有數據就不怕被坑。
        </p>

        <h2>K金回收流程——巧品珠寶</h2>
        <p>
          整個流程不到15分鐘：
        </p>
        <ol>
          <li><strong>帶身分證 + K金飾品到店</strong>（台北大安，近捷運大安站）</li>
          <li><strong>XRF驗成色</strong>——現場操作，客人全程在場，3秒出含金量數據</li>
          <li><strong>電子秤秤重</strong>——重量數字你親眼看到，沒有黑箱</li>
          <li><strong>當日牌價報價</strong>——含金量 × 重量 × 牌價，公開計算</li>
          <li><strong>同意後現金或轉帳</strong>——當場結清，不拖延</li>
        </ol>
        <p>
          不扣火耗，不打折牌價，不玩含金量爭議。這是制度，不是口號。
        </p>

        <h2>哪些K金飾品最值得回收？</h2>
        <p>
          重量越重、K數越高，回收金額越大。以下三類特別值得回收：
        </p>
        <ul>
          <li><strong>精品品牌18K飾品：</strong>Cartier、Tiffany、Van Cleef的18K款，含金量有保障，XRF一測即知，回收價格直接</li>
          <li><strong>不再佩戴的婚戒：</strong>18K婚戒通常在5–10錢之間，含金量高，是最常見的回收來源</li>
          <li><strong>美國或日本帶回的14K飾品：</strong>14K在亞洲市場不流行，但回收完全沒問題，含金量58.5%</li>
        </ul>
        <p>
          相反地，以下物品回收前請先確認：
        </p>
        <ul>
          <li>標示「GF」（Gold Filled）或「GP」（Gold Plated）——這是鍍金，底材不是金，回收價幾乎可忽略</li>
          <li>標示「KGF」——也是金包金，非實金</li>
          <li>無任何刻印的飾品——建議先驗成色再決定</li>
        </ul>

        <h2>K金與純金回收怎麼取捨？</h2>
        <p>
          純金（9999）的回收最直接，因為含金量接近100%，不需要複雜計算。
          K金的回收稍微複雜一點，但邏輯完全相同，只是含金量比例不同。
        </p>
        <p>
          兩者都值得回收，不要因為K金「不是純金」就覺得不值錢。
          5錢18K飾品，在4月初行情下可換回65,000元以上，不是小數目。
        </p>

        <h2>常見問題</h2>
        {faqs.map((f, i) => (
          <div key={i} style={{ marginBottom: '1.5rem', borderTop: '1px solid #e5e7eb', paddingTop: '1rem' }}>
            <h3 style={{ color: '#92400e', margin: '0 0 0.5rem' }}>{f.q}</h3>
            <p style={{ margin: 0 }}>{f.a}</p>
          </div>
        ))}

        <div style={{ background: '#fef3c7', border: '1px solid #f59e0b', padding: '20px', borderRadius: '8px', margin: '2rem 0', textAlign: 'center' }}>
          <strong style={{ fontSize: '1.1rem' }}>K金回收｜XRF驗成色 × 不扣耗損 × 當場現金</strong>
          <br />
          <span style={{ color: '#78350f' }}>台北大安巧品珠寶 ｜ 0986-821-626 ｜ LINE：@QPD888</span>
        </div>

        <h2>延伸閱讀</h2>
        <ul>
          <li><a href="/blog/au750-gold-price-guide">Au750是什麼金？等於18K嗎？2026年價格分析</a></li>
          <li><a href="/blog/k-gold-vs-gold">K金和黃金的差異｜9999、18K、14K完整比較</a></li>
          <li><a href="/blog/recycle-k-gold-guide-2026">回收K金怎麼算？2026年K金收購價格完整攻略</a></li>
          <li><a href="/blog/916-gold-recycling-taiwan-2026">916黃金回收2026｜22K台灣行情與18K差異解析</a></li>
          <li><a href="/blog/gold-measurement-unit-converter">黃金單位換算｜錢/兩/盎司/公克完整對照表</a></li>
        </ul>
      </article>
    </>
  );
}
