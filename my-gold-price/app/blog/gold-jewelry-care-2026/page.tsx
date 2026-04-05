import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '黃金飾品保養完整指南2026｜清潔、存放與常見損傷預防',
  description: '黃金飾品怎麼保養才對？9999純金、K金、Pt900保養方式各不同。清潔步驟、存放禁忌、常見刮損問題一次解決。',
  keywords: '黃金飾品保養,黃金清潔,金飾保養,K金保養,黃金手鍊保養,黃金項鍊變色,黃金戒指保養',
  alternates: {
    canonical: 'https://www.gold-tw.com/blog/gold-jewelry-care-2026',
  },
};

const faqs = [
  {
    q: '黃金飾品可以碰水嗎？',
    a: '9999 純金或 999 足金本身不怕水，接觸清水問題不大。但要避免接觸氯水（泳池）、溫泉水（硫磺）、海水以及含酸鹼性的清潔劑。K 金飾品因含銀、銅等合金成分，長期碰水更容易氧化變色，建議洗澡、游泳前摘下。',
  },
  {
    q: '黃金飾品變黑或變色怎麼辦？',
    a: '9999 純金通常不會變黑，但表面沾了汗漬、油脂、化妝品後可能看起來暗沉。用溫熱淡鹽水泡 5 分鐘，再用軟布輕輕擦拭，通常能恢復光澤。K 金（18K、14K）若氧化變色，可以送回銀樓做清潔拋光，費用約 200–500 元。',
  },
  {
    q: '黃金飾品可以用超音波清洗機嗎？',
    a: '純金飾品可以使用超音波清洗機。但若是鑲鑽或有寶石的金飾，不建議使用——超音波震動可能讓寶石鬆動脫落，或損傷爪鑲結構。清洗有鑲嵌的飾品，建議交給專業珠寶店處理。',
  },
  {
    q: '黃金飾品和其他金屬一起放會有問題嗎？',
    a: '有。硬度不同的金屬一起存放，容易互相刮傷。黃金莫氏硬度約 2.5–3，比鑽石（10）、鉑金（4–4.5）、鈦鋼（6）都軟。存放時最好分隔收納，每件飾品用獨立絨布袋或小格子分開放。',
  },
  {
    q: '多久需要送珠寶店做一次保養？',
    a: '一般日常配戴的金飾，建議每年送店家做一次深度清潔和檢查（確認爪鑲是否鬆動、鍊子接口是否磨損）。費用視店家而定，清潔通常免費或低費，若需拋光、修整則另計。長期不配戴的飾品，取出前先檢查有無鏽蝕或變形。',
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
            '@graph': [
              {
                '@type': 'BlogPosting',
                headline: '黃金飾品保養完整指南2026｜清潔、存放與常見損傷預防',
                description: '黃金飾品怎麼保養才對？9999純金、K金、Pt900保養方式各不同。清潔步驟、存放禁忌、常見刮損問題一次解決。',
                mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://www.gold-tw.com/blog/gold-jewelry-care-2026' },
                author: { '@type': 'Organization', name: '巧品珠寶', url: 'https://www.gold-tw.com' },
                publisher: { '@type': 'Organization', name: '巧品珠寶', url: 'https://www.gold-tw.com' },
                datePublished: '2026-04-04T15:00:00+08:00',
                dateModified: '2026-04-04T15:00:00+08:00',
              },
              {
                '@type': 'FAQPage',
                mainEntity: faqs.map((f) => ({
                  '@type': 'Question',
                  name: f.q,
                  acceptedAnswer: { '@type': 'Answer', text: f.a },
                })),
              },
              {
                '@type': 'BreadcrumbList',
                itemListElement: [
                  { '@type': 'ListItem', position: 1, name: '首頁', item: 'https://www.gold-tw.com/' },
                  { '@type': 'ListItem', position: 2, name: '部落格', item: 'https://www.gold-tw.com/blog' },
                  {
                    '@type': 'ListItem',
                    position: 3,
                    name: '黃金飾品保養指南2026',
                    item: 'https://www.gold-tw.com/blog/gold-jewelry-care-2026',
                  },
                ],
              },
            ],
          }),
        }}
      />
      <article style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
        <h1>黃金飾品保養完整指南2026｜清潔、存放與常見損傷預防</h1>

        <div style={{ background: '#fffbeb', borderLeft: '4px solid #f59e0b', padding: '16px', margin: '16px 0', borderRadius: '8px' }}>
          <strong>重點摘要：</strong> 純金（9999）相對好養，K金和Pt900需要更細心。三個核心原則：避開化學品、分開存放、定期清潔。
        </div>

        <h2>不同純度黃金飾品的保養差異？</h2>
        <p>
          很多人把「黃金飾品」當成一個類別統一保養，其實 9999 純金、18K 金、14K 金的保養需求差很多。搞清楚你手上的飾品屬於哪類，才能正確保養。
        </p>
        <table style={{ width: '100%', borderCollapse: 'collapse', margin: '1.5rem 0' }}>
          <thead>
            <tr style={{ background: '#f5f0e8' }}>
              <th style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'left' }}>類型</th>
              <th style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'left' }}>金含量</th>
              <th style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'left' }}>怕什麼</th>
              <th style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'left' }}>日常保養重點</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>9999 / 999 足金</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>99.9% 以上</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>碰撞變形（質軟）、刮傷</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>獨立存放、避免硬物摩擦</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>22K 黃金</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>91.7%</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>輕微氧化、刮傷</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>定期擦拭、避免接觸酸鹼</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>18K 黃金</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>75%</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>氧化、接觸汗水長期變色</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>運動、游泳前摘下，定期清潔</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>14K 黃金</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>58.3%</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>最容易氧化變色</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>接觸水、汗前先取下，需最勤清潔</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>Pt900 鉑金</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>90% 鉑金</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>刮痕霧面化</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>需定期拋光才能維持光澤</td>
            </tr>
          </tbody>
        </table>
        <p>
          重點：金含量越低的合金飾品，越需要避開汗水、化妝品和化學物質。9999 純金則幾乎不怕這些，主要保護目標是「別讓它變形或刮傷」。
        </p>

        <h2>日常清潔步驟的流程是什麼？</h2>
        <p>
          不需要特殊工具，以下是標準的在家清潔步驟：
        </p>
        <h3>步驟一：準備清潔液</h3>
        <p>
          用溫水（40度以下）加幾滴中性洗碗精或嬰兒沐浴乳，攪拌混合。不要用酒精、漂白水、牙膏——這些對黃金表面（尤其 K 金）有傷害。
        </p>
        <h3>步驟二：浸泡 5–10 分鐘</h3>
        <p>
          將飾品放入溶液中浸泡。純金可以長一點，K 金和有寶石鑲嵌的飾品建議縮短至 5 分鐘，避免鑲嵌處進水。
        </p>
        <h3>步驟三：軟毛牙刷輕刷縫隙</h3>
        <p>
          用一把舊牙刷（刷毛要軟）輕輕刷鍊條縫隙、花紋凹陷處。施力輕柔，不需要用力刷。
        </p>
        <h3>步驟四：清水沖洗，軟布擦乾</h3>
        <p>
          用流動清水沖洗乾淨，然後用絨布或麂皮布輕輕擦乾。不要用紙巾——紙巾的纖維會造成微小刮痕。
        </p>

        <h2>存放方式的分開收納才能保持光澤是什麼？</h2>
        <p>
          飾品刮傷，90% 是在「收納時互相摩擦」造成的，不是配戴時碰撞。正確存放方式：
        </p>
        <ul>
          <li><strong>每件單獨用絨布袋或夾鏈袋裝：</strong>市面有賣黃金專用防氧化袋，不貴但很有用。</li>
          <li><strong>珠寶盒要有隔層：</strong>避免多件飾品疊放在一起。鏈子特別需要分開，不然糾結很難解開。</li>
          <li><strong>避開潮濕高溫環境：</strong>浴室、廚房不適合長期存放黃金飾品。防潮箱是理想選擇，或者放在乾燥陰涼的抽屜。</li>
          <li><strong>遠離香水和化妝品：</strong>不要在噴香水後立刻戴金飾，化學成分會加速 K 金氧化。</li>
        </ul>

        <h2>黃金飾品保養常見問答怎麼做？</h2>
        {faqs.map((f, i) => (
          <div key={i} style={{ marginBottom: '1.5rem', borderTop: '1px solid #e5e7eb', paddingTop: '1rem' }}>
            <h3 style={{ color: '#92400e', margin: '0 0 0.5rem' }}>{f.q}</h3>
            <p style={{ margin: 0 }}>{f.a}</p>
          </div>
        ))}

        <div style={{ background: '#fef3c7', border: '1px solid #f59e0b', padding: '20px', borderRadius: '8px', margin: '2rem 0', textAlign: 'center' }}>
          <strong style={{ fontSize: '1.1rem' }}>巧品珠寶——舊金評估、黃金收購</strong>
          <br />
          <span style={{ color: '#78350f' }}>台北大安區｜9999純金、22K、18K、14K、Pt900，全種類收購</span>
          <br />
          <span style={{ fontSize: '0.9rem', color: '#92400e' }}>不扣耗損，秤重全程透明，現場付現</span>
          <br />
          <strong>0986-821-626｜LINE: @QPD888</strong>
        </div>

        <h2>延伸閱讀</h2>
        <ul>
          <li><a href="/blog/gold-purity">黃金純度說明：9999、999、22K、18K、14K 的差異與收購價差</a></li>
          <li><a href="/blog/k-gold-recovery-guide-2026">K金回收完整攻略——18K、14K、10K 如何估價變現</a></li>
          <li><a href="/blog/gold-recovery-guide-2026">黃金回收完整流程——從評估到拿現金的每個步驟</a></li>
          <li><a href="/blog/gold-identification">黃金真假辨識——在家就能做的 3 種基本檢驗方式</a></li>
        </ul>
      </article>
    </>
  );
}
