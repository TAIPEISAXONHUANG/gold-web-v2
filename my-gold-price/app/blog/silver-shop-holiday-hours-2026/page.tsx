import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '銀樓假日有開嗎？2026年台灣銀樓營業時間完整指南',
  description: '銀樓假日到底開不開？台灣各類型銀樓假日營業時間一次整理，含連假、春節、國定假日。賣黃金前先確認，免得白跑。',
  keywords: '銀樓假日有開嗎,銀樓假日營業,銀樓假日,台灣銀樓假日,銀樓週末有開嗎,銀樓連假,黃金回收假日',
  alternates: {
    canonical: 'https://www.gold-tw.com/blog/silver-shop-holiday-hours-2026',
  },
  openGraph: {
    title: '銀樓假日有開嗎？2026年台灣銀樓營業時間完整指南',
    description: '銀樓假日到底開不開？台灣各類型銀樓假日營業時間一次整理，含連假、春節、國定假日。賣黃金前先確認，免得白跑。',
    type: 'article',
    url: 'https://www.gold-tw.com/blog/silver-shop-holiday-hours-2026',
    siteName: '巧品珠寶',
    publishedTime: '2026-04-02T00:00:00+08:00',
    modifiedTime: '2026-04-02T00:00:00+08:00',
  },
};

const faqs = [
  {
    q: '銀樓假日有開嗎？',
    a: '要看類型。傳統街邊銀樓大多假日照常營業，甚至週六日是旺季；但百貨公司珠寶專櫃則跟百貨同步，連假照開。黃金回收專門店通常也有假日班，但春節期間可能縮短或關閉，建議事前電話確認。',
  },
  {
    q: '春節黃金可以賣嗎？銀樓會開嗎？',
    a: '春節（除夕到初五）大多銀樓都會暫停營業，少數初三或初四恢復。部分黃金回收業者會配合開幾天，但通常縮短至中午前。想在春節賣金，建議年前就找好店家確認，或在除夕前完成交易。',
  },
  {
    q: '週六日銀樓幾點開到幾點關？',
    a: '一般銀樓週六日營業時間約10:00–19:00，部分延至20:00。黃金回收店週六日通常同平日，有些甚至10:00–18:00即關門。建議致電確認，或查看店家Line官方帳號公告。',
  },
  {
    q: '國定假日銀樓一定休息嗎？',
    a: '不一定。傳統銀樓通常把假日當做旺日，反而生意較好，會照常開。政府機關或學校放假不代表銀樓放假。但若碰到長達3天以上的連假，部分小型店家可能選擇休息1–2天。',
  },
  {
    q: '怎麼確認銀樓假日有沒有開？',
    a: '最直接的方法：打電話或傳Line。店家Google地圖頁面通常也會標注「特殊營業時間」，連假前後系統會自動顯示調整時間。另外查店家Facebook或Instagram，通常連假前會發公告。',
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
            '@type': 'BlogPosting',
            headline: '銀樓假日有開嗎？2026年台灣銀樓假日營業時間完整指南',
            description: '銀樓假日到底開不開？台灣各類型銀樓假日營業時間一次整理，含連假、春節、國定假日。賣黃金前先確認，免得白跑。',
            mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://www.gold-tw.com/blog/silver-shop-holiday-hours-2026' },
            author: { '@type': 'Organization', name: '鑑定師L', url: 'https://www.gold-tw.com' },
            publisher: { '@type': 'Organization', name: '巧品珠寶', url: 'https://www.gold-tw.com' },
            datePublished: '2026-04-02T00:00:00+08:00',
            dateModified: '2026-04-02T00:00:00+08:00',
          }),
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
              { '@type': 'ListItem', position: 2, name: '部落格', item: 'https://www.gold-tw.com/blog' },
              {
                '@type': 'ListItem',
                position: 3,
                name: '銀樓假日有開嗎',
                item: 'https://www.gold-tw.com/blog/silver-shop-holiday-hours-2026',
              },
            ],
          }),
        }}
      />
      <article style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
        <h1>銀樓假日有開嗎？2026台灣銀樓假日營業完整指南</h1>

        <div style={{ background: '#fffbeb', borderLeft: '4px solid #f59e0b', padding: '16px', margin: '16px 0', borderRadius: '8px' }}>
          <strong>重點摘要：</strong> 傳統銀樓假日大多照常開，但春節例外。黃金回收店依店而異——想賣金前，打一通電話確認最快，免得白跑。
        </div>

        <h2>銀樓假日有沒有開？先分清楚有哪些種類？</h2>
        <p>
          「銀樓」這個詞在台灣涵蓋三種截然不同的業態，營業規則差很多：
        </p>
        <ul>
          <li><strong>傳統街邊銀樓：</strong>假日照常甚至更忙，週末是購買黃金、送禮旺季，基本不休。</li>
          <li><strong>百貨珠寶專櫃：</strong>配合百貨公司，連假全開，週一休（部分）。</li>
          <li><strong>黃金回收收購店：</strong>依店家規模而定，小店主可能週日休，連鎖店通常全年無休或僅春節短暫關閉。</li>
        </ul>
        <p>
          結論：假日想去賣黃金，傳統銀樓和黃金回收店成功率高——但春節是例外，那是全台灣唯一幾乎全面停業的時間。
        </p>

        <h2>各類型假日營業時間是怎樣的？</h2>
        <table style={{ width: '100%', borderCollapse: 'collapse', margin: '1.5rem 0' }}>
          <thead>
            <tr style={{ background: '#f5f0e8' }}>
              <th style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'left' }}>店家類型</th>
              <th style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'left' }}>週六日</th>
              <th style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'left' }}>國定假日</th>
              <th style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'left' }}>春節</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>傳統街邊銀樓</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>照常（旺季）</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>大多照開</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>除夕至初二關，初三起逐步開</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>百貨珠寶專櫃</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>照常</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>跟百貨走</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>初三後隨百貨開業</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>黃金回收收購店</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>依店家（多數開）</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>大多照常</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>除夕至初三多關，部分初四開</td>
            </tr>
          </tbody>
        </table>

        <h2>春節賣黃金有哪些注意事項？</h2>
        <p>
          春節（農曆除夕至初五）是唯一讓全台銀樓大規模停業的時段。為什麼？
        </p>
        <ul>
          <li>店主需要回家過節，家族文化優先</li>
          <li>春節黃金交易量反而以「買入」為主（送禮、壓歲），回收需求低</li>
          <li>國際金市歐美也多放假，國際金價波動較小</li>
        </ul>
        <p>
          <strong>建議：</strong>有賣金計畫的，年前（臘月二十八前）就處理完。急著在春節賣金，可以事前找好店家確認初幾開門，或透過Line詢問。
        </p>

        <h2>連假黃金回收要注意什麼？</h2>
        <p>
          連假不只是「能不能去賣」的問題，還有金價走向。連假期間國際金市仍在交易（美市、歐市），假日結束後台灣銀樓重新開門時，往往反映了連假累積的金價漲跌。
        </p>
        <p>
          如果你判斷金價在連假期間上漲，等假後去賣反而更划算。如果判斷會跌，假前賣更好。當然沒人能預測，但這是很多老手在意的細節。
        </p>

        <h2>常見問答</h2>
        {faqs.map((f, i) => (
          <div key={i} style={{ marginBottom: '1.5rem', borderTop: '1px solid #e5e7eb', paddingTop: '1rem' }}>
            <h3 style={{ color: '#92400e', margin: '0 0 0.5rem' }}>{f.q}</h3>
            <p style={{ margin: 0 }}>{f.a}</p>
          </div>
        ))}

        <div style={{ background: '#fef3c7', border: '1px solid #f59e0b', padding: '20px', borderRadius: '8px', margin: '2rem 0', textAlign: 'center' }}>
          <strong style={{ fontSize: '1.1rem' }}>巧品珠寶——假日照常收購黃金</strong>
          <br />
          <span style={{ color: '#78350f' }}>台北大安區，週一至週日 11:00–20:00，春節僅休三天</span>
          <br />
          <span style={{ fontSize: '0.9rem', color: '#92400e' }}>9999純金、22K、18K、14K、Pt900全收，不扣耗損，秤重讓你盯著看</span>
          <br />
          <strong>0986-821-626｜LINE: @QPD888</strong>
        </div>

        <h2>延伸閱讀</h2>
        <ul>
          <li><a href="/blog/gold-shop-hours-taipei">台灣銀樓幾點開幾點關——2026完整營業時間表</a></li>
          <li><a href="/blog/taipei-buy-gold-recommend-2026">台北買黃金推薦——2026五家高評價銀樓比較</a></li>
          <li><a href="/blog/gold-recovery-price-today-2026">今日黃金回收價格——2026即時更新</a></li>
          <li><a href="/blog/how-to-choose-gold-shop">怎麼選銀樓？5個讓你選到好店、不被坑的關鍵</a></li>
        </ul>
      </article>
    </>
  );
}
