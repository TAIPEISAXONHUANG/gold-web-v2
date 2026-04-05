import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '白金和黃金有什麼不同？2026年台灣白金回收價格與選購指南',
  description: '白金（鉑金）vs 黃金，2026年台灣行情大比較。Pt950 vs 9999含量差異、價格走勢、回收行情，以及哪個更保值的完整解析。',
  keywords: '白金,白金回收,白金vs黃金,鉑金價格台灣,Pt950回收,白金多少錢,白金黃金差別',
  alternates: {
    canonical: 'https://www.gold-tw.com/blog/platinum-vs-gold-taiwan-2026',
  },
  openGraph: {
    locale: 'zh_TW',
    title: '白金和黃金有什麼不同？2026年台灣白金回收價格與選購指南',
    description: '白金（鉑金）vs 黃金，2026年台灣行情大比較。Pt950 vs 9999含量差異、價格走勢、回收行情，以及哪個更保值的完整解析。',
    type: 'article',
    url: 'https://www.gold-tw.com/blog/platinum-vs-gold-taiwan-2026',
    siteName: '巧品珠寶',
    publishedTime: '2026-04-02T00:00:00+08:00',
    modifiedTime: '2026-04-02T00:00:00+08:00',
    images: [{ url: '/og-image.webp', width: 1200, height: 630, alt: '巧品珠寶' }],

  },
};

const faqs = [
  {
    q: '白金和黃金哪個更保值？',
    a: '2026年來看，黃金更保值。過去10年，黃金價格呈現明顯上升趨勢，從每盎司1,200美元漲到3,100美元以上。白金（鉑金）則從2011年高峰每盎司1,900美元跌落，目前在1,000美元附近震盪，大幅跑輸黃金。如果保值是主要目的，黃金明顯勝出。',
  },
  {
    q: '台灣白金回收價格怎麼算？',
    a: '白金回收以鉑金含量為基礎。Pt950 = 含鉑量95%，Pt900 = 90%。以2026年4月初鉑金國際價格約每盎司960美元（約30,730元台幣/盎司）換算，Pt950每公克約936元，每錢（3.75公克）約3,510元。注意：鉑金近年報價低於黃金，這在歷史上是少見的倒掛。',
  },
  {
    q: '白K金和白金（鉑金）是一樣的嗎？',
    a: '完全不同，是很常見的混淆。白K金（White Gold）= 18K或14K金加上鈀/鎳合金，底材是黃金，含金量75%或58.5%，表面鍍銠使之看起來白色。白金（Platinum / 鉑金）= 鉑族金屬，化學元素符號Pt，刻印Pt950或Pt900。前者是黃金合金，後者是另一種貴金屬。',
  },
  {
    q: '婚戒選白金（鉑金）還是18K白K金？',
    a: '各有優缺點。鉑金優勢：天然白色不需電鍍，長期佩戴不變色；密度高（21.45 g/cm³）感覺更有份量；刮擦後金屬不流失，只是位移，長期保質。18K白K金優勢：價格較低（同重量比鉑金便宜40%左右）；硬度較高，不易刮傷。實際差別：鉑金長期維護成本低，白K金短期購入成本低但需要每2–3年重新電鍍。',
  },
  {
    q: '台灣哪裡可以回收白金（鉑金）飾品？',
    a: '並不是每間銀樓都收鉑金，因為鉑金的熔煉設備和市場需求與黃金不同。建議事先電話確認。巧品珠寶（台北大安）收購鉑金飾品，含戒指、項鍊、手環等，當場XRF驗成色報Pt含量，當日牌價現金結清，電話0986-821-626。',
  },
];

// lastModified: 2026-03-19
export default function PlatinumVsGoldTaiwan2026Page() {
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
                name: '白金和黃金有什麼不同',
                item: 'https://www.gold-tw.com/blog/platinum-vs-gold-taiwan-2026',
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
            headline: '白金和黃金有什麼不同？2026年台灣白金回收價格與選購指南',
            description: '白金（鉑金）vs 黃金，2026年台灣行情大比較。Pt950 vs 9999含量差異、價格走勢、回收行情，以及哪個更保值的完整解析。',
            datePublished: '2026-04-02',
            dateModified: '2026-04-02',
            author: { '@type': 'Person', name: '鑑定師L' },
            publisher: { '@type': 'Organization', name: '巧品珠寶', url: 'https://www.gold-tw.com' },
            mainEntityOfPage: 'https://www.gold-tw.com/blog/platinum-vs-gold-taiwan-2026',
          }),
        }}
      />
      <article style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
        <h1>白金和黃金有什麼不同？2026年台灣白金回收價格與選購指南</h1>

        <div style={{ background: '#fffbeb', borderLeft: '4px solid #f59e0b', padding: '16px', margin: '16px 0', borderRadius: '8px' }}>
          <strong>先澄清一個超常見的誤解：</strong>「白K金」不等於「白金（鉑金）」。
          <br />白K金是黃金做的，白金是鉑金（Platinum）。兩者是完全不同的金屬，回收方式和價格也完全不同。
        </div>

        <h2>白金是什麼？和黃金的本質差異</h2>
        <p>
          「白金」這個詞在台灣被過度濫用，造成大量混淆。正確理解如下：
        </p>
        <ul>
          <li><strong>白金 = 鉑金（Platinum）：</strong>化學元素符號Pt，獨立的貴金屬，與黃金完全不同。刻印Pt950、Pt900、Pt850。</li>
          <li><strong>白K金（White Gold）：</strong>含金量75%（18K）或58.5%（14K）的黃金合金，加入鈀或鎳使其呈白色，表面電鍍銠增加白度。底材是黃金，不是鉑金。</li>
          <li><strong>銀飾（Silver）：</strong>有人也叫「白金」，其實是純銀或925銀，更不是鉑金。</li>
        </ul>
        <p>
          這三者的回收價格差異極大。搞清楚你手上的是哪一種，再來談回收。
        </p>

        <h2>白金 vs 黃金：2026年台灣行情怎麼比較？</h2>
        <table style={{ width: '100%', borderCollapse: 'collapse', margin: '1.5rem 0' }}>
          <thead>
            <tr style={{ background: '#374151', color: '#fff' }}>
              <th style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'left' }}>比較項目</th>
              <th style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'center' }}>白金（鉑金 Pt950）</th>
              <th style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'center' }}>黃金（9999）</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>化學符號</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'center' }}>Pt</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'center' }}>Au</td>
            </tr>
            <tr style={{ background: '#fafafa' }}>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>2026年4月回收參考價/錢</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'center' }}>約 3,400–3,600元</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'center' }}>約 17,300–17,700元</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>密度（g/cm³）</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'center' }}>21.45（更重）</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'center' }}>19.30</td>
            </tr>
            <tr style={{ background: '#fafafa' }}>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>硬度（莫氏）</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'center' }}>4–4.5（較軟易刮）</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'center' }}>2.5（更軟）</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>顏色</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'center' }}>天然銀白色，不需電鍍</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'center' }}>天然金黃色</td>
            </tr>
            <tr style={{ background: '#fafafa' }}>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>過去5年價格走勢</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'center' }}>橫盤偏弱</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'center' }}>強勁上漲（+70%）</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>主要需求來源</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'center' }}>汽車觸媒、工業用途</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'center' }}>投資、珠寶、央行儲備</td>
            </tr>
            <tr style={{ background: '#fafafa' }}>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>常見刻印</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'center' }}>Pt950、Pt900、Pt850</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'center' }}>9999、24K、Au999</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>保值建議</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'center' }}>不建議作為主要保值工具</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'center' }}>推薦</td>
            </tr>
          </tbody>
        </table>

        <h2>白金（鉑金）為什麼比黃金便宜這麼多？</h2>
        <p>
          很多人直覺上認為白金比黃金貴，其實這是十幾年前的印象。2011年之前，鉑金確實高於黃金，有時每盎司達到1,900美元。
        </p>
        <p>
          但2011年後情況逆轉，原因有三：
        </p>
        <ol>
          <li><strong>電動車衝擊：</strong>鉑金最大工業需求是汽油車觸媒轉化器。電動車崛起讓市場擔憂長期需求下降，壓低了鉑金預期。</li>
          <li><strong>黃金投資需求暴增：</strong>全球央行大量增持黃金，加上地緣政治風險推動避險需求，黃金供不應求。</li>
          <li><strong>供應來源集中：</strong>全球70%以上的鉑金來自南非，礦業和勞工問題複雜，供應不穩定。</li>
        </ol>
        <p>
          2026年4月，黃金每盎司約3,100美元，鉑金約960美元。黃金是鉑金的3.2倍。這個倒掛在歷史上非常罕見。
        </p>

        <h2>白K金 vs 鉑金：外觀幾乎一樣，差異在哪？</h2>
        <p>
          這是珠寶店裡最容易搞混的比較。兩者外觀都是白色，戴起來視覺效果類似，但本質完全不同。
        </p>
        <ul>
          <li>
            <strong>白K金的白色：</strong>來自表面電鍍的銠（Rhodium）。銠比黃金更白、更亮，但電鍍層只有1–5微米厚，
            佩戴2–3年後會磨損，露出底層的淡黃色金屬。需要重新電鍍，費用約1,000–2,000元。
          </li>
          <li>
            <strong>鉑金的白色：</strong>天然金屬色，不是電鍍。長期佩戴後會出現細微刮痕（霧面質感），
            但不會「變黃」，金屬本質不改變。很多人反而喜歡這種自然磨損的光澤。
          </li>
        </ul>
        <p>
          如何辨別？看刻印：「18K」「750」是白K金；「Pt950」「Pt900」是鉑金。
        </p>

        <h2>鉑金飾品回收有哪些注意事項？</h2>
        <p>
          鉑金回收和黃金回收有幾點差異要注意：
        </p>
        <ul>
          <li><strong>不是每家銀樓都收：</strong>鉑金熔煉需要不同設備和買家，部分銀樓拒收或報價極低。建議先電話確認。</li>
          <li><strong>刻印確認含量：</strong>Pt950 = 含鉑95%，Pt900 = 90%，Pt850 = 85%。含量影響最終報價。</li>
          <li><strong>鑽石鑲嵌問題：</strong>鉑金戒指常見鑲嵌鑽石。鑽石取下後另行計算，不影響金屬回收報價。</li>
          <li><strong>不要把白K金當鉑金賣：</strong>白K金含金量75%，在4月行情下每錢約13,000元；鉑金每錢約3,500元。弄清楚類別，避免被少算。</li>
        </ul>

        <h2>2026年要買白金（鉑金）保值嗎？</h2>
        <p>
          直接說結論：<strong>不推薦以鉑金作為主要投資保值工具</strong>。
        </p>
        <p>
          理由很具體：過去5年黃金漲了70%，鉑金只有橫盤。電動車趨勢長期不利工業需求。市場流動性比黃金差，要找到好的買家相對困難。
        </p>
        <p>
          唯一值得考慮的情境：如果你相信電動車浪潮過後，氫燃料電池車（需要大量鉑金做催化劑）會崛起，
          那麼鉑金在目前低位可能有長期機會。但這是投機，不是保值。
        </p>
        <p>
          如果你已經有鉑金飾品想處理，回收的邏輯是一樣的：算清楚含量和重量，找信譽良好的店家，當場結清。
        </p>

        <h2>常見問題</h2>
        {faqs.map((f, i) => (
          <div key={i} style={{ marginBottom: '1.5rem', borderTop: '1px solid #e5e7eb', paddingTop: '1rem' }}>
            <h3 style={{ color: '#374151', margin: '0 0 0.5rem' }}>{f.q}</h3>
            <p style={{ margin: 0 }}>{f.a}</p>
          </div>
        ))}

        <div style={{ background: '#fef3c7', border: '1px solid #f59e0b', padding: '20px', borderRadius: '8px', margin: '2rem 0', textAlign: 'center' }}>
          <strong style={{ fontSize: '1.1rem' }}>白金（鉑金）＆黃金回收｜XRF驗成色，當日報價現金結清</strong>
          <br />
          <span style={{ color: '#78350f' }}>台北大安巧品珠寶 ｜ 0986-821-626 ｜ LINE：@QPD888</span>
        </div>

        <h2>延伸閱讀</h2>
        <ul>
          <li><a href="/blog/platinum-price-vs-gold-2026">鉑金與黃金價格比較2026｜歷史走勢與投資分析</a></li>
          <li><a href="/blog/au750-gold-price-guide">Au750是什麼金？等於18K嗎？2026年價格分析</a></li>
          <li><a href="/blog/k-gold-vs-gold">K金和黃金的差異｜9999、18K、14K完整比較</a></li>
          <li><a href="/blog/gold-buying-guide-beginner-2026">第一次買黃金就上手2026｜新手買金注意事項</a></li>
          <li><a href="/blog/taiwan-gold-price-today-2026">台灣今日金價2026｜每日更新行情查詢</a></li>
        </ul>
      </article>
    </>
  );
}
