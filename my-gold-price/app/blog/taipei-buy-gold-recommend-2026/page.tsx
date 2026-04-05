import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '台北買黃金推薦2026｜在哪裡買、怎麼買、哪些坑要避開',
  description: '台北哪裡買黃金最划算？2026年黃金高點行情下，買金條、金豆、金飾前必讀。本文整理台北購金管道比較、購買流程與常見陷阱，選對地方才不會多花冤枉錢。',
  alternates: {
    canonical: 'https://www.gold-tw.com/blog/taipei-buy-gold-recommend-2026',
  },
}

const faqs = [
  {
    q: '台北買黃金，銀樓、銀行、電商哪個最便宜？',
    a: '通常銀樓（珠寶店）的金條賣出價最接近市價，銀行因為有服務費和手續費，溢價通常比銀樓高出1–3%。電商平台（如蝦皮、露天）的價格差異很大，要特別注意賣家資質和憑證。實體銀樓可以現場驗貨、討論報價，是最透明的選擇。',
  },
  {
    q: '買金條還是金飾比較划算？差在哪？',
    a: '純投資用途，買金條（9999純金條）最划算——溢價低、回收時也最接近市價。金飾有工費（通常每錢加收500–2,000元），回收時工費不退。如果是送禮兼投資，金豆或小金條是折衷選擇，工費低、造型好看，回收也方便。',
  },
  {
    q: '台北買黃金需要帶什麼？要繳稅嗎？',
    a: '帶身分證和現金（或行動支付）就好。台灣購買黃金不需要繳稅，但店家須登記買賣資料（依貴金屬交易實名制規定）。金額較大時，部分店家會有申報義務，這是法規要求，正規店家都會告知。',
  },
  {
    q: '怎麼判斷台北買到的黃金是真的？',
    a: '三個方法：1）看憑證——正規銀樓會附純度保證書或標籤；2）看印記——金條上打有「9999」「999」及廠牌；3）事後驗——帶到其他店用XRF儀器驗成色，和印記對比。不要只靠肉眼或手感判斷，儀器最準。',
  },
  {
    q: '2026年這個時間點，台北買黃金值得嗎？',
    a: '2026年3月金價處於歷史相對高位，短線追高有一定風險。但黃金作為長期資產配置（建議占總資產5–10%），任何時間點分批買入都是合理策略。如果是短線投機，風險遠高於長期持有。買前先問自己：這批黃金打算持有幾年？',
  },
]

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: '台北買黃金推薦2026｜在哪裡買、怎麼買、哪些坑要避開',
            description: '台北哪裡買黃金最划算？2026年黃金高點行情下，買金條、金豆、金飾前必讀。本文整理台北購金管道比較、購買流程與常見陷阱，選對地方才不會多花冤枉錢。',
            mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://www.gold-tw.com/blog/taipei-buy-gold-recommend-2026' },
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
                name: '台北買黃金推薦2026',
                item: 'https://www.gold-tw.com/blog/taipei-buy-gold-recommend-2026',
              },
            ],
          }),
        }}
      />
      <article style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
        <h1>台北買黃金推薦2026｜在哪裡買、怎麼買、哪些坑要避開</h1>

        <p>
          2026年國際金價創歷史新高，台灣一堆人開始問：「台北哪裡買黃金比較好？」
          銀樓、銀行、網路平台都有賣，但價格和服務差很多。
        </p>
        <p>這篇把台北購金管道、流程和常見陷阱整理好，買前花5分鐘看，省下不必要的錢。</p>

        <h2>台北買黃金有哪些管道？怎麼比較？</h2>

        <table style={{ width: '100%', borderCollapse: 'collapse', margin: '1.5rem 0' }}>
          <thead>
            <tr style={{ background: '#f5f0e8' }}>
              <th style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'left' }}>購買管道</th>
              <th style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'center' }}>溢價程度</th>
              <th style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'center' }}>憑證保障</th>
              <th style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'left' }}>適合對象</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>實體銀樓／珠寶店</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'center' }}>低–中（1–3%）</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'center' }}>有</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>一般投資、送禮</td>
            </tr>
            <tr style={{ background: '#fafafa' }}>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>銀行（台銀、兆豐等）</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'center' }}>中（3–5%）</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'center' }}>有</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>信任品牌、不在意溢價</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>電商平台（蝦皮等）</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'center' }}>差異大</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'center' }}>視賣家</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>需仔細篩選賣家</td>
            </tr>
            <tr style={{ background: '#fafafa' }}>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>黃金ETF（不實體）</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'center' }}>低</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'center' }}>N/A</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>不需要實體、純金融操作</td>
            </tr>
          </tbody>
        </table>

        <p>
          如果你要的是<strong>實體黃金</strong>，台北實體銀樓（珠寶店）是最划算的選擇——
          溢價最低，可以現場驗貨，回收時也有依據。
        </p>

        <h2>台北買黃金推薦：選什麼品項？</h2>
        <p>
          <strong>純投資用：9999金條或金豆。</strong>
          金條溢價最低，1錢、5錢、1兩都有。金豆（1錢以下的小金粒）適合小資金分批買入。
          缺點是造型不如飾品，送禮不太合適。
        </p>
        <p>
          <strong>投資兼送禮：小金條、金幣。</strong>
          有紀念幣設計的金幣（如龍年金幣、鼠年金幣）溢價略高，但造型好看，
          送長輩或小孩的成年禮很適合。回收時按含金量算，工費不退。
        </p>
        <p>
          <strong>日常配戴：K金飾品。</strong>
          18K、14K飾品耐用、設計感強，但含金量低，回收價比純金低很多。
          純投資用途不建議；日常配戴有喜歡的款式再考慮。
        </p>

        <h2>2026年台北黃金賣出參考行情是多少？</h2>
        <p>買黃金前先知道「賣出價」的範圍，才能判斷報價是否合理：</p>

        <table style={{ width: '100%', borderCollapse: 'collapse', margin: '1.5rem 0' }}>
          <thead>
            <tr style={{ background: '#f5f0e8' }}>
              <th style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'left' }}>品項</th>
              <th style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>市場賣出價參考（每錢）</th>
              <th style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>說明</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>9999金條（1錢）</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>17,800–19,000 元</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>最接近國際金價</td>
            </tr>
            <tr style={{ background: '#fafafa' }}>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>9999金豆（0.5錢以下）</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>18,000–19,500 元</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>小重量溢價略高</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>紀念金幣</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>18,500–21,000 元</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>設計工費含在內</td>
            </tr>
          </tbody>
        </table>

        <p>
          <strong>提醒：</strong>以上是「賣出價」（店家賣給你的價格），
          未來你要賣黃金時，拿到的是「買入價（回收價）」，通常低200–600元/錢。
          這個價差是正常利潤空間，不是被坑。
        </p>

        <h2>台北買黃金的4個常見坑有哪些？</h2>
        <p>
          <strong>第一：報價沒說清楚是含工費還是不含。</strong>
          「一錢18,000」可能是純金條，也可能是含工費的飾品定價。
          問清楚「這個包含所有費用嗎？」才不會結帳時多付。
        </p>
        <p>
          <strong>第二：沒有附保證書或純度標籤。</strong>
          正規金條、金幣都有品牌鋼印和純度保證。沒有任何標示的「散金」，
          未來回收時只能靠驗成色，增加麻煩。買的時候要求附憑證。
        </p>
        <p>
          <strong>第三：被「限時優惠」催促。</strong>
          「今天才有這個價，明天就漲了」是典型的催單話術。
          黃金報價確實每天浮動，但不會因為你不買「就沒了」。別被催，比完價再決定。
        </p>
        <p>
          <strong>第四：電商買黃金沒看清楚規格。</strong>
          「黃金飾品」不等於「純金投資品」。電商有些賣的是K金、鍍金或包金，
          頁面寫「黃金」但含金量很低。買之前仔細看商品規格欄的「成色」和「純度」。
        </p>

        <h2>巧品珠寶：台北大安的實體黃金選擇</h2>
        <p>
          在台北大安，巧品珠寶提供黃金買賣、K金回收、珠寶評估的一站式服務。
          買黃金：透明報價，附純度保證；賣黃金：XRF驗成色、不扣耗損、當場現金。
        </p>
        <p>
          想知道今日買黃金的價格，或者手上有黃金想估價，
          電洽 <strong>0986-821-626</strong> 或 LINE 即時詢問。
        </p>

        <h2>常見問題</h2>
        {faqs.map((f, i) => (
          <div key={i} style={{ marginBottom: '1.5rem' }}>
            <h3>{f.q}</h3>
            <p>{f.a}</p>
          </div>
        ))}

        <h2>延伸閱讀</h2>
        <ul>
          <li>
            <a href="/blog/taipei-gold-recovery">台北黃金回收推薦2026｜哪裡收得最高？</a>
          </li>
          <li>
            <a href="/blog/gold-coin-invest">黃金投資新手指南｜金條、金幣、ETF怎麼選？</a>
          </li>
          <li>
            <a href="/blog/taiwan-gold-price-daily-2026">2026台灣每日黃金行情｜一錢、一兩報價彙整</a>
          </li>
          <li>
            <a href="/blog/how-to-choose-gold-shop">台北銀樓怎麼選？4個判斷標準讓你不踩雷</a>
          </li>
        </ul>
      </article>
    </>
  )
}
