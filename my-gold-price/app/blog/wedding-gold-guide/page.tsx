import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '結婚金飾習俗與預算2026｜龍鳳鐲、項鍊、耳環習俗與行情',
  description: '結婚金飾習俗有哪些？2026年龍鳳鐲、項鍊、耳環預算怎麼抓？台灣傳統結婚金飾習俗由來、款式選擇，以及現在的行情參考。',
  keywords: '結婚金飾,結婚金飾習俗,龍鳳鐲,結婚金飾預算,台灣結婚金飾,婚禮黃金',
  alternates: {
    canonical: 'https://www.gold-tw.com/blog/wedding-gold-guide',
  },
};

const faqs = [
  {
    q: '台灣結婚金飾習俗有哪些？',
    a: '台灣傳統結婚金飾習俗主要包含：1) 婆家送娘家龍鳳鐲或金項鍊，作為聘禮的一部分；2) 娘家送準新娘金飾（項鍊、耳環、戒指），稱為「添嫁妝」；3) 男方送給女方的「過大禮」金飾；4) 結婚當天配戴全部金飾，展示夫家經濟實力。現在這些習俗在城鄉之間仍有差異，年輕一輩也有簡化趨勢。',
  },
  {
    q: '結婚金飾預算怎麼抓？',
    a: '沒有標準答案，取決於雙方家庭條件和協商結果。傳統上，男方送的黃金價值約為禮金的10%–30%。實務參考：基本款（龍鳳鐲一對＋項鍊）約50,000–80,000元；完整款（加耳環、戒指）約100,000–200,000元。現在也有新人直接折現不收黃金，把預算用在其他地方。',
  },
  {
    q: '結婚金飾要買哪種純度？9999還是22K？',
    a: '傳統習俗上，結婚金飾多使用22K（916）或9999。22K硬度適中，適合精細工藝（如龍鳳鐲的浮雕紋路）；9999純金則是最保值純度。兩者都是好選擇，取決於你更在乎工藝精緻度還是純度保值性。選18K較少見，傳統上認為結婚金飾應該用高純度。',
  },
  {
    q: '結婚金飾婆婆要求買龍鳳鐲，預算怎麼評估？',
    a: '龍鳳鐲的價格取決於重量和工藝。一對約15–30錢（56–112公克），以2026年3月底行情計算：9999純金約87,500–175,000元（不含工藝費）。傳統上婆家負責這筆費用，娘家則回贈金飾作為嫁妝。如果預算有限，建議直接與長輩溝通，說明實際情況，親情比面子重要。',
  },
  {
    q: '結婚後結婚金飾要一直戴嗎？',
    a: '沒有規定要一直戴。傳統上新娘在結婚當天會佩戴所有金飾，象徵夫家經濟實力。此後日常是否佩戴，取決於個人喜好和實際考量。需要注意的是：公共場合全身穿戴結婚金飾有安全風險，建議低調或不戴。',
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
                name: '結婚金飾習俗與預算指南',
                item: 'https://www.gold-tw.com/blog/wedding-gold-guide',
              },
            ],
          }),
        }}
      />
      <article style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
        <h1>結婚金飾習俗與預算2026｜龍鳳鐲、項鍊、耳環習俗與行情</h1>

        <div style={{ background: '#fffbeb', borderLeft: '4px solid #f59e0b', padding: '16px', margin: '16px 0', borderRadius: '8px' }}>
          <strong>直接給答案：</strong> 台灣結婚金飾習俗核心是「送好命婆的金飾」——傳統上婆家送新娘金飾作為尊重。2026年行情：龍鳳鐲一對（15–30錢）約 <strong>87,500–175,000元</strong>（不含工藝費）。沒有絕對標準，雙方協商最重要。
        </div>

        <h2>台灣結婚金飾習俗是什麼？</h2>
        <p>
          黃金在華人傳統婚禮中的角色，超過了裝飾品本身，
          它代表的是「祝福、財富、對婚姻的重視」。
        </p>
        <p>
          婚禮送黃金的習俗，可追溯至宋代，當時稱為「納徵」或「过大礼」。
          黃金作為婚禮禮品，有幾個核心意義：
        </p>
        <ul>
          <li><strong>祝福：</strong>親友送黃金，祝願新人生活富足</li>
          <li><strong>保障：</strong>黃金是變現性極強的資產，萬一新娘需要緊急用錢，黃金就是底氣</li>
          <li><strong>傳承：</strong>結婚金飾常作為傳家寶，由母親傳給女兒</li>
          <li><strong>面子：</strong>展示夫家經濟實力，是婚禮社交的一部分</li>
        </ul>

        <h2>結婚金飾習俗——誰送誰？送什麼？</h2>

        <h3>婆家要送哪些金飾給新娘？</h3>
        <ul>
          <li><strong>龍鳳鐲（一對）：</strong>最具代表性的結婚金飾，象徵龍鳳呈祥、成雙成對。傳統上由婆婆或丈夫贈送。</li>
          <li><strong>金項鍊：</strong>通常是較粗的款式，結婚當天配戴。</li>
          <li><strong>金耳環：</strong>傳統款式，通常是龍鳳或花紋造型。</li>
        </ul>

        <h3>娘家要準備哪些嫁妝金飾？</h3>
        <ul>
          <li>娘家會為新娘添購金飾，作為「嫁妝」的一部分</li>
          <li>傳統認為嫁妝越厚實，女兒在夫家越有地位</li>
          <li>現代也有娘家直接折現禮金，讓新娘自行決定用途</li>
        </ul>

        <h3>新郎要送哪些金飾給新娘？</h3>
        <ul>
          <li>求婚戒指通常為金戒指（非鑽石）</li>
          <li>結婚戒指可選對戒或分開的金戒指</li>
        </ul>

        <h2>2026年結婚金飾行情是多少？</h2>

        <table style={{ width: '100%', borderCollapse: 'collapse', margin: '1.5rem 0' }}>
          <thead>
            <tr style={{ background: '#f5f0e8' }}>
              <th style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'left' }}>品項</th>
              <th style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'left' }}>重量範圍</th>
              <th style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>2026行情參考（元）</th>
              <th style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'left' }}>說明</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>龍鳳鐲（一對）</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>15–30錢</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>87,500–175,000</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>主要金飾，傳統必備</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>金項鍊（粗鏈）</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>5–15錢</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>29,000–87,500</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>結婚當天配戴主力</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>金耳環（一對）</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>2–8錢</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>11,600–46,600</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>傳統款式，龍鳳或花卉造型</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>金戒指</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>1–5錢</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>5,800–29,000</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>結婚戒指可選簡約款</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>彌月金飾</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>1–5錢/件</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>5,800–29,000/件</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>滿月送給baby的金飾</td>
            </tr>
          </tbody>
        </table>
        <p style={{ fontSize: '0.85rem', color: '#888' }}>
          ※ 9999純金行情，2026年3月底參考價17,500元/錢，含工藝費另計。實際報價請致電：0986-821-626
        </p>

        <h2>結婚金飾款式怎麼選？</h2>
        <p>
          <strong>龍鳳鐲：</strong>選擇時注意花紋是否精細、龍鳳是否對稱、重量是否均勻。
          傳統上認為左右手各一隻，龍在左手、鳳在右手。
          實用考量：結婚後日常生活配戴機會不多，可選擇日常也可配戴的款式。
        </p>
        <p>
          <strong>金項鍊：</strong>結婚項鍊通常選擇較粗的款式，展示效果佳。
          考慮日常配搭，可選長度在鎖骨左右的長度。
          扣頭設計要注意：彈簧扣比傳統扣頭方便，但傳統扣頭更牢固。
        </p>
        <p>
          <strong>金耳環：</strong>結婚耳環傳統上是龍鳳或花卉造型。
          有耳洞和無耳洞的款式不同，购买前要先確認。
          日常配戴頻率高的話，可選擇較小款的造型。
        </p>

        <h2>結婚金飾預算怎麼抓？</h2>
        <p>
          沒有硬性標準，傳統參考是「禮金的10%–30%」用於黃金。
          但這只是習俗參考，現代婚禮預算應該根據雙方家庭實際情況決定。
        </p>
        <p>
          <strong>務實建議：</strong>
        </p>
        <ul>
          <li>結婚金飾是「祝福」不是「負擔」，預算要在能力範圍內</li>
          <li>事先和長輩溝通，了解雙方期待，避免結婚後產生嫌隙</li>
          <li>現代也有新人選擇「黃金存摺」或「黃金ETF」代替實體金飾，變現時同樣方便</li>
          <li>結婚金飾日後可變現，是比較實際的禮品選擇</li>
        </ul>

        <h2>結婚金飾變現有哪些注意事項？</h2>
        <p>
          結婚金飾在婚後可能因為各種原因需要變現：
          經濟需要、款式過時、或純粹想轉換形式。
          變現時的重點：
        </p>
        <ul>
          <li>龍鳳鐲和精細工藝金飾，工藝價值在變現時通常不退</li>
          <li>傳統銀樓回收只算含金量，不算工藝費</li>
          <li>保留購買時的保證書，有助於估價和交易</li>
          <li>選擇公開秤重、有XRF儀器的店家估價</li>
        </ul>

        <h2>常見問題</h2>
        {faqs.map((f, i) => (
          <div key={i} style={{ marginBottom: '1.5rem', borderTop: '1px solid #e5e7eb', paddingTop: '1rem' }}>
            <h3 style={{ color: '#92400e', margin: '0 0 0.5rem' }}>{f.q}</h3>
            <p style={{ margin: 0 }}>{f.a}</p>
          </div>
        ))}

        <div style={{ background: '#fef3c7', border: '1px solid #f59e0b', padding: '20px', borderRadius: '8px', margin: '2rem 0', textAlign: 'center' }}>
          <strong style={{ fontSize: '1.1rem' }}>結婚金飾估價——攜帶保證書到店，現場XRF檢測，秤多少算多少</strong>
          <br />
          <span style={{ color: '#78350f' }}>台北大安巧品珠寶 ｜ 0986-821-626 ｜ LINE：@QPD888</span>
        </div>

        <h2>延伸閱讀</h2>
        <ul>
          <li><a href="/blog/gold-jewelry-types-recovery">金飾類型回收指南｜項鍊、戒指、手鍊、耳環估價重點</a></li>
          <li><a href="/blog/wedding-gold-recovery">結婚金飾變現估價｜龍鳳鐲、項鍊、耳環回收</a></li>
          <li><a href="/blog/gold-jewelry-care-guide">黃金飾品保養與清潔｜各類型完整指南</a></li>
          <li><a href="/blog/gold-buying-guide-beginner-2026">第一次買黃金就上手2026｜新手必看</a></li>
          <li><a href="/blog/k-gold-recovery-price-2026">K金回收價格2026｜18K、14K、10K行情完整對照</a></li>
        </ul>
      </article>
    </>
  );
}
