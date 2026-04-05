import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '黃金送禮習俗與場合｜生日、婚禮、滿月、春節黃金禮品完整指南',
  description: '黃金送禮有哪些習俗？結婚要送多少？滿月送金飾好嗎？生日、春節該送什麼黃金？台灣傳統與現代黃金送禮場合、行情參考與選擇建議。',
  keywords: '黃金送禮,結婚禮金,滿月送金飾,生日禮物黃金,春節送黃金,黃金禮品習俗',
  alternates: {
    canonical: 'https://www.gold-tw.com/blog/gold-gift-guide',
  },
  openGraph: {
    title: '黃金送禮習俗與場合｜生日、婚禮、滿月、春節黃金禮品完整指南',
    description: '黃金送禮有哪些習俗？結婚要送多少？滿月送金飾好嗎？生日、春節該送什麼黃金？台灣傳統與現代黃金送禮場合、行情參考與選擇建議。',
    type: 'article',
    url: 'https://www.gold-tw.com/blog/gold-gift-guide',
    siteName: '巧品珠寶',
    publishedTime: '2025-01-01T00:00:00+08:00',
    modifiedTime: '2025-01-01T00:00:00+08:00',
  },
};

const faqs = [
  {
    q: '結婚要送多少黃金？習俗上怎麼說？',
    a: '沒有固定金額，取決於關係親疏和經濟能力。傳統習俗上，男方送給女方的結婚金飾（龍鳳鐲、項鍊等）由婆家負責，娘家則回贈金飾作為嫁妝。朋友或親戚參加婚禮，傳統上送「人情」而非黃金，黃金通常是長輩送給晚輩或平輩間非常親密的禮物。',
  },
  {
    q: '滿月要送金飾嗎？送什麼好？',
    a: '滿月送金子是華人傳統習俗，叫「彌月之喜」。傳統上送的金飾重量較輕（1–5錢/件），款式以長命富貴、平安等寓意為主。現代也有送「金牌」（紀念幣形式）代替飾金，方便保存又不失體面。行情參考：每件約5,800–29,000元（視關係親疏）。',
  },
  {
    q: '生日可以送黃金嗎？送什麼款式好？',
    a: '當然可以。生日送黃金越來越普遍，尤其是送給長輩或摯愛。款式選擇：1) 長輩——龍鳳款、福祿壽圖案，象徵吉祥；2) 年輕人——時尚金飾或金豆（可自行加工）；3) 小孩——健康成長主題，如平安鎖、金湯匙等。',
  },
  {
    q: '過年送黃金好還是包紅包好？',
    a: '兩者各有優缺點。紅包：彈性大，收禮者可以自由運用，但包完就沒了。黃金：有紀念價值，可傳承，長期有保值功能，但金額較大且變現需要管道。建議：送長輩或重視傳統的親友，黃金是好選擇；送年輕人或喜好彈性者，紅包可能更實用。兩者皆有的話，金額可以相應調整。',
  },
  {
    q: '送出去的黃金可以拿回來嗎？',
    a: '從送禮角度，沒有規定要拿回。但華人傳統有所謂「添嫁妝」的習俗——女方家長可能將收到的金飾「加碼」後傳給女兒。朋友間送的黃金，一般不會拿回。簡單說：親戚長輩送的，常有「傳承」意味；平輩朋友送的，就是純祝福，不需要拿回。',
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
            '@type': 'FAQPage',
            'author': { '@type': 'Person', 'name': '鑑定師L' },
            'datePublished': '2025-01-01',
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
                name: '黃金送禮習俗與場合指南',
                item: 'https://www.gold-tw.com/blog/gold-gift-guide',
              },
            ],
          }),
        }}
      />
      <article style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
        <h1>黃金送禮習俗與場合｜生日、婚禮、滿月、春節黃金禮品完整指南</h1>

        <div style={{ background: '#fffbeb', borderLeft: '4px solid #f59e0b', padding: '16px', margin: '16px 0', borderRadius: '8px' }}>
          <strong>直接給答案：</strong> 黃金送禮沒有硬性金額標準，習俗上取決於關係和場合。結婚由婆家負責金飾（龍鳳鐲為主）；滿月送輕量金飾（1–5錢）；生日和春節則看預算和關係。新習俗：直接包「黃金存摺」或「黃金ETF份額」，收禮者有彈性又保值。
        </div>

        <h2>黃金在華人送禮文化中有什麼地位？</h2>
        <p>
          黃金在華人社會中，不只是貴金屬，更承載著「珍貴、祝福、傳承」的文化意涵。
          紅包送的是錢，黃金送的是「具體的財富」——有重量、有質感、有紀念意義。
        </p>
        <p>
          黃金送禮的優點：
        </p>
        <ul>
          <li><strong>保值：</strong>紅包錢花掉就沒了，黃金有長期保存價值</li>
          <li><strong>傳承：</strong>金飾可以一代傳一代，有家族情感連結</li>
          <li><strong>紀念性：</strong>刻有年份和祝賀語的金飾，是獨一無二的禮物</li>
          <li><strong>實用：</strong>急需用錢時可以變現，有流動性</li>
        </ul>

        <h2>結婚時黃金送禮有哪些傳統？</h2>
        <p>
          結婚是黃金送禮最大、最傳統的場合。黃金在婚禮中的角色：
        </p>
        <ul>
          <li><strong>婆家送新娘：</strong>龍鳳鐲、金項鍊，代表對新娘的重視和未來生活的祝福</li>
          <li><strong>娘家回贈：</strong>為新娘添購嫁妝金飾，「傳嫁妝」是父母給女兒的保障</li>
          <li><strong>親友祝賀：</strong>平輩或晚輩間，有些家庭會互送黃金表示祝賀</li>
        </ul>
        <p>
          行情參考（2026年3月底）：
        </p>
        <ul>
          <li>龍鳳鐲（一對）：約87,500–175,000元</li>
          <li>金項鍊：約29,000–87,500元</li>
          <li>金耳環：約11,600–46,600元</li>
        </ul>

        <h2>滿月彌月之喜要送什麼金飾？</h2>
        <p>
          寶寶滿月送黃金，是華人傳統習俗。象徵對新生兒的祝福：
          金者，珍貴也；送金子，就是送「珍貴」給孩子。
        </p>
        <p>
          常見的滿月金飾款式：
        </p>
        <ul>
          <li><strong>平安鎖：</strong>最常見的滿月金飾款式，象徵平安健康</li>
          <li><strong>金湯匙：</strong>象徵「吃穿不愁」，有祝福嬰兒一生豐足的寓意</li>
          <li><strong>金手鍊/腳鍊：</strong>輕巧可愛，寶寶可以戴著成長</li>
          <li><strong>金牌（紀念幣）：</strong>無需加工，可直接送，現代人越來越偏好這個選項</li>
          <li><strong>金元寶/金條：</strong>適合送給有實力的長輩或親友</li>
        </ul>
        <p>
          行情參考：每件1–5錢，約5,800–29,000元
        </p>

        <h2>生日可以送哪些黃金禮物？</h2>
        <p>
          生日送黃金在華人圈越來越普遍，尤其是：
        </p>
        <ul>
          <li><strong>長輩大壽：</strong>送金子比包紅包更有紀念價值</li>
          <li><strong>父母：</strong>感謝父母的養育之恩，金子是實質又體面的禮物</li>
          <li><strong>另一半：</strong>情人節、生日送黃金，既浪漫又有實際價值</li>
          <li><strong>自己：</strong>很多人會在生日時買一個金豆或小金飾，犒賞自己</li>
        </ul>
        <p>
          款式選擇建議：
        </p>
        <ul>
          <li>長輩：龍鳳款、福祿壽、金花生（象徵好事會發生）</li>
          <li>年輕人：時尚簡約款、金豆（可自行加工成項鍊或手鍊）</li>
          <li>小孩：平安鎖、金手鍊、十二生肖款</li>
        </ul>

        <h2>春節送黃金有哪些習俗？</h2>
        <p>
          春節送黃金的習俗在近年越來越流行。春節送金子有「開年見金」的寓意：
        </p>
        <ul>
          <li><strong>送長輩：</strong>表達孝心，金子是既體面又實用的禮物</li>
          <li><strong>送晚輩：</strong>給孩子壓歲錢，不如給金子——有紀念價值又不會被亂花</li>
          <li><strong>送重要客户/合作夥伴：</strong>金子禮品比紅包更有品味和紀念性</li>
        </ul>
        <p>
          春節黃金禮品的選擇：
        </p>
        <ul>
          <li><strong>金元寶：</strong>象徵財富，春節送最應景</li>
          <li><strong>金條/金豆：</strong>實用導向，收禮者可自行決定用途</li>
          <li><strong>黃金紅包：</strong>黃金主題的紅包袋，內含金飾，現代年輕人接受度高</li>
        </ul>

        <h2>其他場合適合送黃金嗎？</h2>

        <h3>升學/畢業</h3>
        <p>
          考上理想學校，送一塊「学业有成」金牌或金飾，是很有意義的禮物。
          款式建議：文昌塔、金筆形吊墜、一帆風順主題金飾。
        </p>

        <h3>喬遷/入厝</h3>
        <p>
          朋友新居入夥，送金子有「入金」的好兆頭。
          款式建議：金元寶、金磚（迷你版）、聚寶盆造型金飾。
        </p>

        <h3>公司成立/創業</h3>
        <p>
          送金子給創業者或新公司，有「生意興隆、財源廣進」的祝福意味。
          款式建議：金元寶、金算盤、財神主題金飾。
        </p>

        <h2>黃金送禮的預算怎麼抓？</h2>

        <table style={{ width: '100%', borderCollapse: 'collapse', margin: '1.5rem 0' }}>
          <thead>
            <tr style={{ background: '#f5f0e8' }}>
              <th style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'left' }}>場合</th>
              <th style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'left' }}>傳統習俗</th>
              <th style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>參考預算（元）</th>
              <th style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'left' }}>建議款式</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>結婚（婆家送新娘）</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>必備，龍鳳鐲為核心</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>87,500–175,000+</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>龍鳳鐲、金項鍊</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>滿月/彌月</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>傳統習俗</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>5,800–29,000</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>平安鎖、金湯匙</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>生日（長輩）</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>非習俗，視關係</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>5,800–58,000</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>龍鳳款、福祿壽</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>生日（平輩/朋友）</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>非習俗，送的是心意</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>1,750–11,600</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>時尚金飾、金豆</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>春節</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>現代新習俗</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>視關係和預算</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>金元寶、金條</td>
            </tr>
          </tbody>
        </table>
        <p style={{ fontSize: '0.85rem', color: '#888' }}>
          ※ 以上為9999純金行情參考，含工藝費另計
        </p>

        <h2>常見問題</h2>
        {faqs.map((f, i) => (
          <div key={i} style={{ marginBottom: '1.5rem', borderTop: '1px solid #e5e7eb', paddingTop: '1rem' }}>
            <h3 style={{ color: '#92400e', margin: '0 0 0.5rem' }}>{f.q}</h3>
            <p style={{ margin: 0 }}>{f.a}</p>
          </div>
        ))}

        <div style={{ background: '#fef3c7', border: '1px solid #f59e0b', padding: '20px', borderRadius: '8px', margin: '2rem 0', textAlign: 'center' }}>
          <strong style={{ fontSize: '1.1rem' }}>黃金送禮估價——現場XRF檢測，重量公開讓你看</strong>
          <br />
          <span style={{ color: '#78350f' }}>台北大安巧品珠寶 ｜ 0986-821-626 ｜ LINE：@QPD888</span>
        </div>

        <h2>延伸閱讀</h2>
        <ul>
          <li><a href="/blog/wedding-gold-guide">結婚金飾習俗與預算2026｜龍鳳鐲行情與選擇</a></li>
          <li><a href="/blog/gold-jewelry-care-guide">黃金飾品保養與清潔｜各類型完整指南</a></li>
          <li><a href="/blog/gold-buying-guide-beginner-2026">第一次買黃金就上手2026｜新手必看</a></li>
          <li><a href="/blog/gold-jewelry-types-recovery">金飾類型回收估價｜項鍊、戒指、手鍊估價重點</a></li>
          <li><a href="/blog/temple-gold-medal-sell-guide">神明金牌可以賣嗎？廟宇金牌回收估價</a></li>
        </ul>
      </article>
    </>
  );
}
