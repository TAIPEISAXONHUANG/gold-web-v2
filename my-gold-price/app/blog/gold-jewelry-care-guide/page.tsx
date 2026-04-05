import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '黃金飾品保養、清潔與保存｜K金、9999、22K各類型完整指南',
  description: '黃金飾品怎麼保養？K金、9999純金、22K金的清潔與保存方法。戴著洗澡可以嗎？要注意什麼？附常見保養疑問解答。',
  keywords: '黃金飾品保養,黃金保養,黃金清潔,K金保養,純金飾品保存,黃金飾品注意事項',
  alternates: {
    canonical: 'https://www.gold-tw.com/blog/gold-jewelry-care-guide',
  },
  openGraph: {
    locale: 'zh_TW',
    title: '黃金飾品保養、清潔與保存｜K金、9999、22K各類型完整指南',
    description: '黃金飾品怎麼保養？K金、9999純金、22K金的清潔與保存方法。戴著洗澡可以嗎？要注意什麼？附常見保養疑問解答。',
    type: 'article',
    url: 'https://www.gold-tw.com/blog/gold-jewelry-care-guide',
    siteName: '巧品珠寶',
    publishedTime: '2025-01-01T00:00:00+08:00',
    modifiedTime: '2025-01-01T00:00:00+08:00',
    images: [{ url: '/og-image.webp', width: 1200, height: 630, alt: '巧品珠寶' }],

  },
};

const faqs = [
  {
    q: '黃金飾品可以戴著洗澡嗎？',
    a: '不建議。洗澡時接觸沐浴露、洗髮精、化妝品等，長期會讓黃金表面光澤變暗。游泳池的氯也會對黃金造成影響。建議：洗澡、游泳、運動之前先將黃金飾品取下，妥善放置後再活動。',
  },
  {
    q: '9999純金和K金的保養方式有何不同？',
    a: '9999純金（24K）特別軟，容易變形和刮傷，保存時要用軟布包好，单独存放，不要疊放。K金（18K/14K）硬度較高，但也怕磨損——不同K金飾品疊放會互相摩擦造成刮痕。兩者都建議在游泳、洗澡、運動時取下。',
  },
  {
    q: '黃金飾品自己怎麼清潔？',
    a: '最安全的方法：溫水＋中性洗碗精，浸泡10分鐘後用軟毛刷輕刷，再用清水沖洗，最後用軟布擦乾。千萬不要用牙膏、清潔劑、酒精——牙膏磨損顆粒會刮傷表面，漂白水會破壞光澤。有鍍層的白K金更不能用這些東西，會破壞電鍍。',
  },
  {
    q: '黃金飾品刮傷了怎麼辦？可以修復嗎？',
    a: '可以。銀樓可以進行重新拋光打磨，幾乎能恢復原本光澤。但每次拋光會損耗少量金屬（約0.1%–0.3%），這個損耗是正常的。如果變形嚴重，可能需要重新熔鑄，損耗更高。建議輕柔對待飾品，減少需要修復的頻率。',
  },
  {
    q: '黃金飾品不戴時怎麼保存？',
    a: '三原則：1) 乾燥——濕度高的環境會加速表面氧化，用密封袋或乾燥劑；2) 分開——每件飾品单独存放，用軟布包裹或放入分格珠寶盒，避免碰撞刮傷；3) 陰涼——避開陽光直射和溫度急劇變化。不要把黃金隨手放在桌上或口袋裡，容易遺失。',
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
                name: '黃金飾品保養與清潔指南',
                item: 'https://www.gold-tw.com/blog/gold-jewelry-care-guide',
              },
            ],
          }),
        }}
      />
      <article style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
        <h1>黃金飾品保養、清潔與保存｜K金、9999、22K各類型完整指南</h1>

        <div style={{ background: '#fffbeb', borderLeft: '4px solid #f59e0b', padding: '16px', margin: '16px 0', borderRadius: '8px' }}>
          <strong>直接給答案：</strong> 黃金飾品保養三原則——<strong>戴著不碰水、单独存放、定期清潔</strong>。9999純金比K金軟，更容易變形，保存要更小心。保養得當，黃金飾品可以維持數十年光澤。
        </div>

        <h2>黃金飾品的基本認識——為什麼要保養？</h2>
        <p>
          黃金是惰性金屬，原則上不會氧化變質。
          但飾品不是純金塊——它們有設計、有工藝、有電鍍層（白K金）。
          日常佩戴會累積：汗水、油脂、灰塵、化妝品、空氣中的微粒。
          這些物質附著在表面，會讓光澤變暗、看起來「舊舊的」。
          這不是金屬變質，而是表面髒了，清潔就能恢復。
        </p>

        <h2>不同類型黃金有哪些保養重點？</h2>

        <h3>9999純金（24K）——最軟，最需要溫柔對待</h3>
        <p>
          24K黃金的摩氏硬度只有2.5–3（指甲約2.5），比想像中軟得多。
        </p>
        <ul>
          <li>容易變形：大力碰撞、用力拉扯都可能讓項鍊變形或手環凹陷</li>
          <li>容易刮傷：和硬物接觸就會留下痕跡</li>
          <li>容易磨損：頻繁磨損的地方（如戒指內側）會慢慢變薄</li>
        </ul>
        <p>
          <strong>保養方式：</strong>取下後用軟布擦拭，单独放珠寶盒，出門在外用附拉鍊的珠寶收纳袋。
        </p>

        <h3>22K金（916）——比純金硬，但仍有風險</h3>
        <p>
          22K含金量91.67%，比24K硬度稍高，但仍然偏軟。
          許多亞洲傳統金飾（龍鳳鐲、古法金）採用22K。
        </p>
        <ul>
          <li>古法金工藝表面有特殊紋理，清潔時不要用刷子刷紋理處</li>
          <li>龍鳳鐲的鏤空設計容易卡髒，要用棉花棒清潔縫隙</li>
        </ul>

        <h3>18K金（750/Au750）——硬度最好，日常佩戴最推薦</h3>
        <p>
          18K硬度適中，是珠寶品牌最常使用的K金。
        </p>
        <ul>
          <li>比純金堅固，但仍需避免極端撞擊</li>
          <li>白K金的鍍銠層（約0.5–1 micron）會隨時間磨損，露出底層淡黃色</li>
          <li>玫瑰金的銅含量高，長期接觸化學物質可能輕微變色</li>
        </ul>

        <h3>14K金和10K金——最硬，但也最需要擔心電鍍層</h3>
        <p>
          K數越低，合金中的其他金屬越多，
          越容易與汗水和化妝品發生化學反應。
        </p>
        <ul>
          <li>電鍍層比18K更容易磨損和變色</li>
          <li>部分人對合金中的鎳過敏（低K金常含鎳）</li>
        </ul>

        <h2>黃金飾品有哪些清潔方法？</h2>

        <table style={{ width: '100%', borderCollapse: 'collapse', margin: '1.5rem 0' }}>
          <thead>
            <tr style={{ background: '#f5f0e8' }}>
              <th style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'left' }}>清潔方式</th>
              <th style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'left' }}>適用情況</th>
              <th style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'left' }}>安全性</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>清水＋軟布擦拭</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>日常維護，灰塵和輕微油垢</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>最安全，隨時可用</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>溫水＋中性洗碗精＋軟毛刷</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>明顯髒污、出汗後保養</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>安全，注意輕刷</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>珠寶專用清潔布</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>定期保養，輕度拋光</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>安全，選購專用產品</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>牙膏、清潔劑</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}><strong>不建議</strong></td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>有磨損風險</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>超聲波清潔機</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>銀樓專業使用</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>有寶石鑲嵌者有風險，自行操作需謹慎</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>銀樓重新拋光</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>深度清潔，恢復光澤</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>安全，會損耗少量金屬</td>
            </tr>
          </tbody>
        </table>

        <h2>日常佩戴有哪些注意事項？</h2>
        <ol>
          <li><strong>最後戴上、最先取下：</strong>化妝品、香水、定型噴霧都先使用，等乾燥後再戴黃金</li>
          <li><strong>洗澡/游泳/運動時取下：</strong>汗水、海水、氯都會影響光澤</li>
          <li><strong>做家事時取下：</strong>清潔劑會傷害表面，包裝紙和鋼絲球更是刮傷大敵</li>
          <li><strong>睡覺時取下：</strong>翻身時項鍊容易被拉斷，手鍊也可能變形</li>
          <li><strong>香水最後噴：</strong>先戴黃金再噴香水，酒精和香精會附著在表面</li>
          <li><strong>使用頭髮產品時取下：</strong>髮膠、造型噴霧對金屬光澤影響大</li>
          <li><strong>金子分類存放：</strong>不同純度的金子分開放，K金之間也最好分开</li>
        </ol>

        <h2>常見保養疑問有哪些？</h2>

        <p>
          <strong>Q：白K金變黃了怎麼辦？</strong>
          <br />
          這是正常現象。白K金的「白」是表面電鍍的銠（rhodium）層，磨損後會露出底層的淡黃色。
          解決方式：重新電鍍即可，費用約300–800元，視飾品大小而異。
        </p>

        <p>
          <strong>Q：黃金飾品氧化變黑了怎麼處理？</strong>
          <br />
          黃金本身不會氧化，變黑通常是表面附著的油脂或雜質。
          用溫水＋洗碗精浸泡30分鐘，軟毛刷輕刷，通常能恢復。
          如果仍無改善，帶去銀樓用超聲波清潔。
        </p>

        <p>
          <strong>Q：可以戴著黃金入睡嗎？</strong>
          <br />
          不建議。睡眠時翻身容易拉斷項鍊或扯傷耳洞，耳環也可能變形。
        </p>

        <p>
          <strong>Q：黃金飾品放超聲波清潔機可以嗎？</strong>
          <br />
          有寶石鑲嵌的飾品（如鑽石戒指）使用超聲波前要特別小心，
          超聲波振動可能讓爪子鬆動。一般純金飾品可以用，但建議在銀樓由專業人員操作。
        </p>

        <h2>常見問題</h2>
        {faqs.map((f, i) => (
          <div key={i} style={{ marginBottom: '1.5rem', borderTop: '1px solid #e5e7eb', paddingTop: '1rem' }}>
            <h3 style={{ color: '#92400e', margin: '0 0 0.5rem' }}>{f.q}</h3>
            <p style={{ margin: 0 }}>{f.a}</p>
          </div>
        ))}

        <div style={{ background: '#fef3c7', border: '1px solid #f59e0b', padding: '20px', borderRadius: '8px', margin: '2rem 0', textAlign: 'center' }}>
          <strong style={{ fontSize: '1.1rem' }}>黃金飾品估價——攜帶保證書到店，現場XRF檢測</strong>
          <br />
          <span style={{ color: '#78350f' }}>台北大安巧品珠寶 ｜ 0986-821-626 ｜ LINE：@QPD888</span>
        </div>

        <h2>延伸閱讀</h2>
        <ul>
          <li><a href="/blog/gold-identification">黃金真假識別｜5種方法自己初步判斷</a></li>
          <li><a href="/blog/gold-jewelry-types-recovery">金飾類型回收指南｜項鍊、戒指、手鍊、耳環估價重點</a></li>
          <li><a href="/blog/k-gold-recovery-price-2026">K金回收價格2026｜18K、14K、10K行情完整對照</a></li>
          <li><a href="/blog/gold-vs-k-gold-comparison">黃金和K金的差異｜9999、22K、18K完整比較</a></li>
          <li><a href="/blog/gold-buying-guide-beginner-2026">第一次買黃金就上手2026｜新手必看指南</a></li>
        </ul>
      </article>
    </>
  );
}
