import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '銀樓假日有開嗎？2026台灣銀樓節假日營業時間完整說明',
  description: '銀樓假日開嗎？週末、國定假日、農曆春節銀樓幾點開門？本文整理台灣銀樓節假日營業規律，讓你不白跑一趟。',
  keywords: '銀樓假日有開嗎,銀樓假日營業,銀樓週末開嗎,銀樓節日有開,銀樓春節,銀樓假日,台灣銀樓營業時間',
  alternates: {
    canonical: 'https://www.gold-tw.com/blog/gold-shop-holiday-hours-2026',
  },
};

const faqs = [
  {
    q: '銀樓週六、週日有開嗎？',
    a: '大多數台灣銀樓週六照常營業，因為週末是購買金飾、賣黃金的高峰時段。週日則依店家而定：部分連鎖銀樓全週七天開，傳統家族式小店可能週日休息或縮短營業。出發前打電話確認是最保險的做法。',
  },
  {
    q: '國定假日（元旦、國慶日）銀樓開嗎？',
    a: '國定假日通常開。台灣銀樓把這類假日視為黃金飾品採購旺季，很少無故休息。但例外存在：家族式小店老闆自己放假時就關門。農曆春節是最大例外（詳見下方）。',
  },
  {
    q: '農曆春節銀樓關幾天？',
    a: '農曆初一到初四多數銀樓休息，部分初三或初四就開門。連鎖型銀樓（如老天祿、銘記）休假天數較短，傳統家族銀樓可能從除夕前一天就關到初五甚至初七。春節前若想賣黃金，建議在農曆年前兩週就去，避免趕到最後幾天撲空。',
  },
  {
    q: '颱風假銀樓有開嗎？',
    a: '颱風停班停課日，大多數銀樓不開。台北市政府宣布停班後，銀樓基本上跟進休息，保全和店員安全優先。若急需賣金，可嘗試電話聯絡——有些老闆住附近，小颱風可能還是開門。',
  },
  {
    q: '有沒有24小時的銀樓或黃金回收店？',
    a: '台北有少數黃金回收店標榜24小時服務，但實際上大多是「可預約深夜到訪」，而非真正不間斷開門。若有急需，先電話確認是否有人當班，再前往較有保障。',
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
                headline: '銀樓假日有開嗎？2026台灣銀樓節假日營業時間完整說明',
                description: '銀樓假日開嗎？週末、國定假日、農曆春節銀樓幾點開門？本文整理台灣銀樓節假日營業規律，讓你不白跑一趟。',
                mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://www.gold-tw.com/blog/gold-shop-holiday-hours-2026' },
                author: { '@type': 'Organization', name: '巧品珠寶', url: 'https://www.gold-tw.com' },
                publisher: { '@type': 'Organization', name: '巧品珠寶', url: 'https://www.gold-tw.com' },
                datePublished: '2026-04-05T14:10:00+08:00',
                dateModified: '2026-04-05T14:10:00+08:00',
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
                    name: '銀樓假日有開嗎',
                    item: 'https://www.gold-tw.com/blog/gold-shop-holiday-hours-2026',
                  },
                ],
              },
            ],
          }),
        }}
      />
      <article style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
        <h1>銀樓假日有開嗎？2026台灣銀樓節假日營業時間完整說明</h1>

        <div style={{ background: '#fffbeb', borderLeft: '4px solid #f59e0b', padding: '16px', margin: '16px 0', borderRadius: '8px' }}>
          <strong>重點摘要：</strong> 台灣銀樓假日大多開，但農曆春節是大例外。週末通常照常，國定假日視店家而定。想確保不白跑，出發前 10 分鐘打一通電話比搜尋任何資訊都可靠。
        </div>

        <h2>台灣銀樓假日營業：整體規律</h2>
        <p>
          台灣的銀樓和黃金回收店，本質上是零售服務業，假日客流量往往比平日更高。因此，絕大多數銀樓在假日是<strong>開門的</strong>——這跟很多人的直覺相反。
        </p>
        <p>
          原因很簡單：上班族週間沒時間，假日才有空買金飾或賣黃金。銀樓不開假日，等於拒絕了一半客源。
        </p>

        <h2>各類假日銀樓開門情況一覽</h2>
        <table style={{ width: '100%', borderCollapse: 'collapse', margin: '1.5rem 0' }}>
          <thead>
            <tr style={{ background: '#f5f0e8' }}>
              <th style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'left' }}>假日類型</th>
              <th style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'left' }}>多數銀樓狀況</th>
              <th style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'left' }}>注意事項</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>週六</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>幾乎全開</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>通常是最熱鬧的一天</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>週日</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>多數開，部分小店休</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>電話確認較保險</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>國定假日（元旦、清明等）</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>多數開</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>家族小店可能休</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>農曆年初一至初四</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>多數關門</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>最長可能休至初七</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>颱風假</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>通常關門</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>以政府停班公告為準</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>連假最後一天</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>通常開</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>部分縮短至下午</td>
            </tr>
          </tbody>
        </table>

        <h2>農曆春節：最需要提前計畫的時間點</h2>
        <p>
          台灣春節是銀樓停業時間最長的節日。一般規律是：
        </p>
        <ul style={{ lineHeight: '2.2' }}>
          <li><strong>除夕：</strong>下午打烊，部分早上就關了。</li>
          <li><strong>初一至初四：</strong>幾乎全數暫停，只有少數連鎖店初三就開。</li>
          <li><strong>初五：</strong>傳統「開工日」，多數銀樓這天重新開門。</li>
          <li><strong>初七（人日）：</strong>無論如何，初七前全面恢復正常。</li>
        </ul>
        <p>
          如果你的黃金要在春節附近變現，<strong>最遲在農曆年前一週</strong>就要去。等到除夕前兩天才去，可能撲空或遇到店家太忙無法仔細服務。
        </p>

        <h2>2026年台灣主要連假銀樓營業參考</h2>
        <table style={{ width: '100%', borderCollapse: 'collapse', margin: '1.5rem 0' }}>
          <thead>
            <tr style={{ background: '#f5f0e8' }}>
              <th style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'left' }}>節日</th>
              <th style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'left' }}>2026年日期</th>
              <th style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'left' }}>銀樓營業建議</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>元旦連假</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>1/1–1/3</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>多數開，1/1 部分休</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>農曆春節</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>1/28 除夕 – 2/2 初六</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>初一至初四多休，初五起漸開</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>清明節</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>4/4–4/5</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>多數開門</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>端午節</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>6/19–6/21</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>多數開門</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>中秋節</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>10/2–10/4</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>多數開門</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>國慶連假</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>10/9–10/10</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>多數開門</td>
            </tr>
          </tbody>
        </table>
        <p style={{ fontSize: '0.85rem', color: '#6b7280' }}>
          ※ 以上為一般規律，各家店家實際營業時間以其公告為準。建議出發前電話確認。
        </p>

        <h2>實用建議：不白跑的 3 個習慣</h2>
        <h3>1. 出發前打電話</h3>
        <p>
          比 Google 地圖上的「營業中」更可靠。銀樓不一定即時更新Google資訊，但電話一定能確認。10 秒鐘，省你一趟白跑。
        </p>
        <h3>2. 避開開門後第一小時和收攤前半小時</h3>
        <p>
          銀樓剛開門時還在準備，老闆心情比較緊，可能沒辦法仔細幫你估。收攤前半小時催著你快，也容易忽略細節。最佳到訪時段：開門後 1.5–2 小時，下班前 1 小時以上。
        </p>
        <h3>3. 大量黃金先預約</h3>
        <p>
          超過 30 錢以上的黃金，建議事先電話預約，確認店家當日有足夠現金備用。臨時到訪大量黃金，店家可能要求隔日付款或分批，不夠順暢。
        </p>

        <h2>銀樓假日常見問答</h2>
        {faqs.map((f, i) => (
          <div key={i} style={{ marginBottom: '1.5rem', borderTop: '1px solid #e5e7eb', paddingTop: '1rem' }}>
            <h3 style={{ color: '#92400e', margin: '0 0 0.5rem' }}>{f.q}</h3>
            <p style={{ margin: 0 }}>{f.a}</p>
          </div>
        ))}

        <div style={{ background: '#fef3c7', border: '1px solid #f59e0b', padding: '20px', borderRadius: '8px', margin: '2rem 0', textAlign: 'center' }}>
          <strong style={{ fontSize: '1.1rem' }}>巧品珠寶——週一至週日全開，清明節照常營業</strong>
          <br />
          <span style={{ color: '#78350f' }}>台北大安區，農曆春節除外全年無休</span>
          <br />
          <span style={{ fontSize: '0.9rem', color: '#92400e' }}>現場付現，不扣耗損，身分證帶來就能交易</span>
          <br />
          <strong>0986-821-626｜LINE: @QPD888</strong>
        </div>

        <h2>延伸閱讀</h2>
        <ul>
          <li><a href="/blog/24hr-gold-shop-taipei-2026">台北24小時銀樓2026——哪些地點深夜也能賣黃金？</a></li>
          <li><a href="/blog/gold-id-requirement">賣黃金需要帶身分證嗎？台灣黃金回收實名制說明</a></li>
          <li><a href="/blog/taipei-gold-recovery-recommend">台北黃金回收推薦2026——口碑好、報價透明的店家指南</a></li>
          <li><a href="/blog/gold-recovery-price-today-2026">今日黃金回收報價——即時更新</a></li>
        </ul>
      </article>
    </>
  );
}
