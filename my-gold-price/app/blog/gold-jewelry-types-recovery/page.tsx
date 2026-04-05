import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '金飾類型回收指南｜金項鍊、金戒指、金手鍊回收行情與估價重點',
  description: '金項鍊、金戒指、金手鍊、金耳環——不同金飾類型回收價格怎麼算？哪種金飾回收最划算？附估價重點與選擇店家建議。',
  keywords: '金飾回收,金項鍊回收,金戒指回收,金手鍊回收,金耳環回收,黃金飾品回收價格',
  alternates: {
    canonical: 'https://www.gold-tw.com/blog/gold-jewelry-types-recovery',
  },
};

const faqs = [
  {
    q: '不同金飾類型，回收價格有差嗎？',
    a: '回收價格本身沒有差異——含金量×重量×牌價，就是你的報酬。但金飾類型會間接影響：1) 有無附扣頭（項鍊）：扣頭如果是其他金屬，秤重時可能會被扣除；2) 有無寶石鑲嵌：需先拆除寶石再估價，過程較繁；3) 一體成型vs焊接款：焊接點越多，熔煉損耗略高。同一純度下，簡單款比複雜款處理成本低。',
  },
  {
    q: '金項鍊回收——有扣頭怎麼算？',
    a: '鍊子的扣頭通常不是純金（太軟無法做扣），可能是14K或合金材質。專業店家在秤重時會把扣頭分開計算：純金部分按含金量報價，扣頭另議或直接不收。申報時要主動說「項鍊有扣頭」，否則有些店家會直接全部用K金低價估算。巧品珠寶會分開測、分開算，扣頭現場告知你材質和處理方式。',
  },
  {
    q: '有钻石或宝石的金戒指，回收怎麼算？',
    a: '钻石和彩色宝石的价值在黄金回收时不会计入，因为回收业者专注于黄金本身。处理方式有两种：1) 先拆除宝石，裸金部分按含金量报价；2) 部分业者会一并评估宝石价值（特别是钻石），如果钻石够大够好，可能额外加价。无论如何，先问清楚再决定是否卖出。巧品珠宝可以协助拆除钻石后再报价，也可以介绍专业钻石收购商。',
  },
  {
    q: '古法金、3D硬金——和普通金飾回收差很多嗎？',
    a: '古法金和3D硬金都是工藝名稱，不影響含金量。古法金通常是9999或999純金，工藝費附加在售價上，但回收時只算金料價值，工藝費不退。3D硬金則是一種特殊的鍍金或高壓工藝，含金量可能只有足金（99%以上）而非9999。買的時候工藝費可能占比30%–50%，回收時這部分等同蒸發，報價只按金料含金量計算。',
  },
  {
    q: '黃金飾品有刮痕或变形，回收会扣价吗？',
    a: '正常磨损不影响含金量，但如果变形严重到无法精准秤重，店家会先进行整形再秤。巧品珠宝不会因为饰品刮了就压价，含金量由XRF仪器测定，和外观状态无关。真正影响价格的就三个变数：含金量、重量、当日牌价。',
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
            headline: '金飾類型回收指南｜金項鍊、金戒指、金手鍊回收行情與估價重點',
            description: '金項鍊、金戒指、金手鍊、金耳環——不同金飾類型回收價格怎麼算？哪種金飾回收最划算？附估價重點與選擇店家建議。',
            mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://www.gold-tw.com/blog/gold-jewelry-types-recovery' },
            author: { '@type': 'Organization', name: '巧品珠寶', url: 'https://www.gold-tw.com' },
            publisher: { '@type': 'Organization', name: '巧品珠寶', url: 'https://www.gold-tw.com' },
            datePublished: '2026-03-01T00:00:00+08:00',
            dateModified: '2026-03-31T00:00:00+08:00',
          })
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
                name: '金飾類型回收指南',
                item: 'https://www.gold-tw.com/blog/gold-jewelry-types-recovery',
              },
            ],
          }),
        }}
      />
      <article style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
        <h1>金飾類型回收指南｜金項鍊、金戒指、金手鍊回收行情與估價重點</h1>

        <div style={{ background: '#fffbeb', borderLeft: '4px solid #f59e0b', padding: '16px', margin: '16px 0', borderRadius: '8px' }}>
          <strong>直接給答案：</strong> 黃金飾品回收，<strong>含金量和重量</strong>是決定價格的核心變數，款式本身不影響回收報價。但不同金飾類型要注意不同細節：項鍊注意扣頭，耳環注意前後桿，寶石鑲嵌件要先拆寶石。古法金和3D硬金買的時候工藝費不退，回收時只算金料錢。
        </div>

        <h2>2026年金飾回收行情是多少？</h2>
        <p>以9999純金回收牌價 17,500–18,000 元/錢為基準：</p>

        <table style={{ width: '100%', borderCollapse: 'collapse', margin: '1.5rem 0' }}>
          <thead>
            <tr style={{ background: '#f5f0e8' }}>
              <th style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'left' }}>飾品類型</th>
              <th style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'left' }}>含金量</th>
              <th style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>參考回收價（元/錢）</th>
              <th style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'left' }}>估價重點</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>金項鍊（9999）</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>99.9%+</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>17,500–18,000</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>注意扣頭材質</td>
            </tr>
            <tr style={{ background: '#fafafa' }}>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>金戒指（9999）</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>99.9%+</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>17,500–18,000</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>有寶石需先拆除</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>金手鍊（9999）</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>99.9%+</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>17,500–18,000</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>開扣樣式影響秤重</td>
            </tr>
            <tr style={{ background: '#fafafa' }}>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>金耳環（9999）</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>99.9%+</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>17,500–18,000</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>注意耳針和後扣</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>古法金飾（9999）</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>99.9%+</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>17,500–18,000</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>工藝費不退，只算金料</td>
            </tr>
            <tr style={{ background: '#fafafa' }}>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>3D硬金飾品</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>足金~999</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>視成色而定</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>工藝附加費高，回收偏低</td>
            </tr>
          </tbody>
        </table>
        <p style={{ fontSize: '0.85rem', color: '#888' }}>
          ※ 參考價以2026年3月底行情估算，K金飾品另有對應行情表
        </p>

        <h2>金項鍊回收——估價要注意什麼？</h2>
        <p>
          金項鍊是所有黃金飾品中回收最常見的品項，但也是最容易被低估的。
          關鍵在於<strong>扣頭</strong>。
        </p>
        <p>
          項鍊的扣頭因為需要機械強度，不能用純金（太軟，一彎就斷），
          通常是14K金或合金。秤重時：
        </p>
        <ul>
          <li><strong>做法正確的店家：</strong>扣頭分開秤，告知你「扣頭不是純金，按14K估」</li>
          <li><strong>做法有問題的店家：</strong>扣頭也用純金秤，最後算出的重量比實際金量高，但報價壓低，羊毛出在羊身上</li>
          <li><strong>做法惡劣的店家：</strong>直接扣你損耗不說，扣頭直接不給錢</li>
        </ul>
        <p>
          估價前主動聲明：「這條項鍊有XX扣頭，請分開算。」
          如果店家不願意分開，直接走人。
        </p>

        <h2>金戒指回收——有寶石怎麼辦？</h2>
        <p>
          黃金戒指分兩種：
        </p>
        <ul>
          <li><strong>素金戒：</strong>整只都是黃金，沒有任何鑲嵌。直接秤重×含金量×牌價，最簡單。</li>
          <li><strong>寶石戒：</strong>主石是鑽石、藍寶石、紅寶石等，戒台是K金或純金。</li>
        </ul>
        <p>
          寶石戒的處理方式：
        </p>
        <ol>
          <li>店家會先建議拆除寶石（專業工具10分鐘內完成）</li>
          <li>裸金台按含金量計算回收價格</li>
          <li>寶石部分如有意願，可以另估或介紹給專門收購商</li>
        </ol>
        <p>
          <strong>重要原則：</strong>決定先估裸金台的價格，再決定要不要委託拆除。
          不要先拆除再後悔——拆除後的金台比較難以原樣出售。
        </p>

        <h2>金手鍊與金手環回收有哪些注意事項？</h2>
        <p>
          金手鍊通常有三種款式：
        </p>
        <ul>
          <li><strong>蛇鱗鍊/水波鍊：</strong>柔軟，，克重輕，扣頭相對簡單</li>
          <li><strong>元寶鍊/坦克鍊：</strong>厚實，克重重，扣頭通常是14K或合金</li>
          <li><strong>一體成型手環：</strong>無接縫，無扣頭，直接套戴，克重最實在</li>
        </ul>
        <p>
          一體成型的手環估價最單純——秤多少算多少，沒有扣頭問題。
          開扣款則和項鍊一樣，要確認扣頭分開算。
        </p>

        <h2>古法金、3D硬金等工藝金飾怎麼回收？</h2>
        <p>
          很多人買古法金或3D硬金，是因為「好看」「硬度高」「不變形」。
          這些工藝上的優點，在回收時<strong>完全不算在內</strong>。
        </p>
        <p>
          <strong>古法金：</strong>9999純金，工藝費可能比普通金飾貴20%–50%，
          因為手工雕花費時。回收時，這筆工藝費不退，報價就是金料錢。
          簡單說：你花了10萬買，現在金價相同，金料還是10萬，但工藝費那2萬已經是別人的了。
        </p>
        <p>
          <strong>3D硬金：</strong>「硬金」是一種特殊電鑄工藝，含金量通常是足金（990–999），
          比9999略低。而且因為空心的關係，同樣大小的飾品，用金量比實心的少。
          這就是為什麼3D硬金飾品看起來大，秤起來輕，回收時可能感覺「變現少」。
        </p>
        <p>
          <strong>建議：</strong>如果你在乎保值，買普通9999實心金飾。
          如果你買的是工藝金飾，請當作已經花了工藝費的錢，賣出時不要預期能完全回本。
        </p>

        <h2>金飾回收店家怎麼選？三個標準</h2>
        <p>
          <strong>標準一：XRF儀器檢測</strong>
          <br />
          有XRF的店家能3秒測出精準含金量，雙方都不用猜。
          沒有儀器的店家只能靠經驗猜，誤差可以達5%–10%。
        </p>
        <p>
          <strong>標準二：當場現金融資</strong>
          <br />
          有些店家會說「下週再付款」或要求你留質。
          正常交易應該是：秤完、測完、確認價格、當場付款，三個步驟15分鐘。
        </p>
        <p>
          <strong>標準三：不扣耗損</strong>
          <br />
          扣耗損是把熔煉損耗的成本轉嫁到消費者身上。
          專業回收的金料量大，損耗攤提後極低，不應由你負擔。
          問清楚：「你們這邊扣耗損嗎？」答案如果不是「不扣」，就再多問幾家。
        </p>

        <h2>常見問題</h2>
        {faqs.map((f, i) => (
          <div key={i} style={{ marginBottom: '1.5rem', borderTop: '1px solid #e5e7eb', paddingTop: '1rem' }}>
            <h3 style={{ color: '#92400e', margin: '0 0 0.5rem' }}>{f.q}</h3>
            <p style={{ margin: 0 }}>{f.a}</p>
          </div>
        ))}

        <div style={{ background: '#fef3c7', border: '1px solid #f59e0b', padding: '20px', borderRadius: '8px', margin: '2rem 0', textAlign: 'center' }}>
          <strong style={{ fontSize: '1.1rem' }}>金飾回收——XRF現場測成色，不扣耗損，現場現金融資</strong>
          <br />
          <span style={{ color: '#78350f' }}>台北大安巧品珠寶 ｜ 0986-821-626 ｜ LINE：@QPD888</span>
          <br />
          <span style={{ fontSize: '0.9rem', color: '#92400e' }}>金項鍊、金戒指、金手鍊、金耳環——全品項回收，附寶石可協助處理</span>
        </div>

        <h2>延伸閱讀</h2>
        <ul>
          <li><a href="/blog/gold-necklace-recovery">金項鍊回收｜扣頭怎麼算、估價重點完整說明</a></li>
          <li><a href="/blog/gold-ring-recovery">金戒指回收｜有鑽石怎麼辦、估價流程說明</a></li>
          <li><a href="/blog/gold-recovery-price-today-2026">黃金回收價格2026｜今日最新行情與走勢分析</a></li>
          <li><a href="/blog/gold-purity">黃金純度大解析｜9999、9958、18K含金量換算</a></li>
          <li><a href="/blog/k-gold-recovery-price-2026">K金回收價格2026｜18K、14K、10K完整行情</a></li>
        </ul>
      </article>
    </>
  );
}
