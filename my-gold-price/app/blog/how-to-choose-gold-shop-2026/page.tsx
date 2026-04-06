import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '台北銀樓怎麼選2026｜賣黃金前必看的4個判斷指標',
  description: '台北這麼多銀樓，哪家報價高？哪家不扣耗損？4個實用指標幫你在賣金前判斷業者是否可信，不再靠運氣。',
  keywords: '銀樓選擇,台北銀樓推薦,哪家銀樓好,銀樓比較,賣黃金哪裡好,黃金回收選哪家,台北收金銀樓,巧品珠寶',
  alternates: {
    canonical: 'https://www.gold-tw.com/blog/how-to-choose-gold-shop-2026',
  },
  openGraph: {
    locale: 'zh_TW',
    title: '台北銀樓怎麼選2026｜賣黃金前必看的4個判斷指標',
    description: '台北這麼多銀樓，哪家報價高？哪家不扣耗損？4個實用指標幫你在賣金前判斷業者是否可信，不再靠運氣。',
    type: 'article',
    url: 'https://www.gold-tw.com/blog/how-to-choose-gold-shop-2026',
    siteName: '巧品珠寶',
    publishedTime: '2026-04-06T15:00:00+08:00',
    modifiedTime: '2026-04-06T15:00:00+08:00',
    images: [{ url: '/og-image.webp', width: 1200, height: 630, alt: '巧品珠寶' }],
  },
};

const faqs = [
  {
    q: '銀樓報價差多少才算「差很多」？',
    a: '同一天、同一件飾品，不同業者報價相差 5% 以內算正常範圍；相差超過 8% 就值得懷疑。差異主要來自三個地方：有沒有扣耗損（3–5%）、報價參考的是台灣今日金價還是昨日金價、業者自身利潤設定。多問兩家，差距自然明顯。',
  },
  {
    q: '去銀樓賣黃金安全嗎？需要擔心被詐騙嗎？',
    a: '正規立案的銀樓是安全的。判斷方式：店面有固定地址、有明顯招牌、有統一編號可查、收購時要求登記身分證。若對方到府收購、無固定店面、報價異常高（超過當日行情 10% 以上），這些是警示信號。台北大安區、中山區有許多有信譽的老字號，多做功課即可。',
  },
  {
    q: '網路上說「高於行情收金」是真的嗎？',
    a: '多數是行銷用語。真實情況是：任何業者的收購價都不可能長期高於當日現貨金價，那樣業者自己虧本。所謂「高價收購」通常的意思是：「比同業其他人的回收折扣更好」，例如不扣 5% 耗損。真正比較的點應該是「回收折扣率」和「有沒有額外扣費」，不是誰說自己最高就最高。',
  },
  {
    q: '可以同時帶到多家銀樓比較嗎？',
    a: '完全可以，這是正確做法。帶同一件飾品去兩三家詢問，比較報價。記住：你在確認成交之前，飾品仍然屬於你，任何業者都無權強迫你成交。如果對方態度強硬、拿走飾品後「不方便退回」，這是違法行為，立刻離開並報警。',
  },
  {
    q: '銀樓的黃金報價和今日金價差多少才合理？',
    a: '正規市場的回收折扣通常在 96%–99% 之間（視類型和當日市況）。例如今日純金每克 3,200 元，合理的回收報價約在 3,072–3,168 元之間。若報價低於現貨的 90%，代表折扣太深，可以詢問扣費理由或換家。',
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
                headline: '台北銀樓怎麼選2026｜賣黃金前必看的4個判斷指標',
                description: '台北這麼多銀樓，哪家報價高？哪家不扣耗損？4個實用指標幫你在賣金前判斷業者是否可信，不再靠運氣。',
                mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://www.gold-tw.com/blog/how-to-choose-gold-shop-2026' },
                author: { '@type': 'Organization', name: '巧品珠寶', url: 'https://www.gold-tw.com' },
                publisher: { '@type': 'Organization', name: '巧品珠寶', url: 'https://www.gold-tw.com' },
                datePublished: '2026-04-06',
                dateModified: '2026-04-06',
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
                    name: '台北銀樓怎麼選',
                    item: 'https://www.gold-tw.com/blog/how-to-choose-gold-shop-2026',
                  },
                ],
              },
            ],
          }),
        }}
      />
      <article style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
        <h1>台北銀樓怎麼選2026｜賣黃金前必看的4個判斷指標</h1>
      <div style={{ background: '#fffbeb', borderLeft: '4px solid #f59e0b', padding: '16px', margin: '16px 0', borderRadius: '8px' }}>
        <strong>重點摘要：</strong> 台北這麼多銀樓，哪家報價高？哪家不扣耗損？4個實用指標幫你在賣金前判斷業者是否可信，不再靠運氣。
      </div>


        <div style={{ background: '#fffbeb', borderLeft: '4px solid #f59e0b', padding: '16px', margin: '16px 0', borderRadius: '8px' }}>
          <strong>核心觀念：</strong> 銀樓報價沒有「查表就知道誰最好」這種事。但有 4 個指標可以在事前篩掉不合理的業者——不是靠口碑，是靠具體行為。
        </div>

        <h2>指標一：有沒有 XRF 儀器，而且讓你看螢幕</h2>
        <p>
          X 光螢光儀（XRF）是現代黃金成色分析的標準工具。正規業者應該有這台機器，而且在測定你的飾品時，應該讓你看到儀器上的數字輸出——例如「Au: 75.2%」。
        </p>
        <p>
          如果業者只用肉眼判斷、磁鐵測試，或說「我們老師傅看得出來」，這不是技術力強，是缺乏透明度的信號。你的黃金值多少，不應該靠猜。
        </p>

        <h2>指標二：報價說得清楚計算過程</h2>
        <p>
          好的業者報完價後，應該能直接告訴你：「今天金價每錢 X 元，你這條 18K 有 3 錢，換算含金量後，我們這樣報。」
        </p>
        <p>
          如果只是說一個數字、不解釋怎麼算出來的，這不代表他們在算，更可能是憑感覺壓價。一句「這樣收」不算報價，算是殺價開場白。
        </p>

        <h2>指標三：明確告知有沒有扣耗損</h2>
        <p>
          「耗損」或「火耗」是業界術語，意指黃金熔解時的損耗。部分業者會直接從報價中扣除 3–5%，名義上是這個理由。
        </p>
        <p>
          但問題是：並非每家業者都有熔金需求。如果只是按重量收購轉手，扣耗損就是多收費用。問清楚：「你們有扣耗損嗎？扣幾%？」如果答案是「這是行業慣例」而不是直接說數字，換家。
        </p>

        <h2>指標四：有固定店面、要求登記身分</h2>
        <p>
          有固定地址、正式招牌、統一編號的業者，才有辦法追責。「到府收購」或「車上交易」的模式，一旦出問題很難處理。
        </p>
        <p>
          收購時要求登記身分證是合法義務，不是麻煩——依《洗錢防制法》，貴金屬收購超過門檻必須記錄身份。反過來說，如果對方根本不問你是誰就收一大批金，你才應該謹慎：合規業者不會這樣操作。
        </p>

        <h2>台北主要地區銀樓分布概況</h2>
        <table style={{ width: '100%', borderCollapse: 'collapse', margin: '1.5rem 0' }}>
          <thead>
            <tr style={{ background: '#f5f0e8' }}>
              <th style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'left' }}>地區</th>
              <th style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'left' }}>特色</th>
              <th style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'left' }}>適合族群</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>大安區（仁愛路、濟南路一帶）</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>精品級銀樓聚集，服務較細緻</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>K金飾品、鑽石、精品珠寶</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>迪化街（大同區）</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>老字號多，純金金飾為主</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>傳統純金飾品、金條</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>中山區（南京東路一帶）</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>中型業者，量大詢問方便</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>一般黃金回收</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>萬華區</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>當舖與銀樓混合，成交快</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>急需現金、量少散金</td>
            </tr>
          </tbody>
        </table>

        <h2>選銀樓的錯誤方式：這些判斷沒用</h2>
        <ul style={{ lineHeight: '2' }}>
          <li><strong>Google 評論很多星：</strong> 可以人為操作，參考但不要全信。</li>
          <li><strong>店面裝潢很氣派：</strong> 裝潢費不等於報價好，成本最後也可能轉嫁給你。</li>
          <li><strong>說自己「業界最高價」：</strong> 沒有第三方認證的自我聲稱，需要實際對比數字才算數。</li>
          <li><strong>親友推薦：</strong> 可以作為起點，但建議自己也做功課比較。</li>
        </ul>

        <h2>銀樓選擇常見問答</h2>
        {faqs.map((f, i) => (
          <div key={i} style={{ marginBottom: '1.5rem', borderTop: '1px solid #e5e7eb', paddingTop: '1rem' }}>
            <h3 style={{ color: '#92400e', margin: '0 0 0.5rem' }}>{f.q}</h3>
            <p style={{ margin: 0 }}>{f.a}</p>
          </div>
        ))}

        <div style={{ background: '#fef3c7', border: '1px solid #f59e0b', padding: '20px', borderRadius: '8px', margin: '2rem 0', textAlign: 'center' }}>
          <strong style={{ fontSize: '1.1rem' }}>巧品珠寶——報價計算說清楚，秤重讓你全程監督</strong>
          <br />
          <span style={{ color: '#78350f' }}>台北大安區濟南路，不扣耗損，XRF 測完直接報數字</span>
          <br />
          <span style={{ fontSize: '0.9rem', color: '#92400e' }}>K金、純金、鑽石、白金都收，帶來估價不收費</span>
          <br />
          <strong>0986-821-626｜LINE: @QPD888</strong>
        </div>

        <h2>延伸閱讀</h2>
        <ul>
          <li><a href="/blog/gold-recycling-process-2026">黃金回收流程——從帶金入店到拿現金完整步驟說明</a></li>
          <li><a href="/blog/gold-selling-checklist-2026">賣黃金前檢查清單——估價前必做的 7 個步驟</a></li>
          <li><a href="/blog/gold-purity-testing-2026">黃金純度鑑定——999、18K、14K怎麼測？方法完整說明</a></li>
          <li><a href="/blog/taipei-buy-gold-recommend-2026">台北銀樓推薦——大安區收購K金、純金報價比較</a></li>
        </ul>
      </article>
    </>
  );
}
