import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '回收K金怎麼算？2026年K金收購價格完整攻略',
  description: '回收K金前必看：18K、14K、10K收購價怎麼算？扣耗損是什麼陷阱？實際到手金額怎麼估？一篇說清楚。 台北巧品珠寶鑑定師L親自鑑定，10年以上珠寶鑑定資歷，透明報價不扣耗損，台北大安區濟南路三段62-1號，提供免費估價與諮詢服務。',
  keywords: '回收k金,k金回收,k金收購,回收黃金k金,k金回收價格2026,18k金回收,14k金回收',
  alternates: {
    canonical: 'https://www.gold-tw.com/blog/recycle-k-gold-guide-2026',
  },
  openGraph: {
    locale: 'zh_TW',
    title: '回收K金怎麼算？2026年K金收購價格完整攻略',
    description: '回收K金前必看：18K、14K、10K收購價怎麼算？扣耗損是什麼陷阱？實際到手金額怎麼估？一篇說清楚。',
    type: 'article',
    url: 'https://www.gold-tw.com/blog/recycle-k-gold-guide-2026',
    siteName: '巧品珠寶',
    publishedTime: '2026-04-02T00:00:00+08:00',
    modifiedTime: '2026-04-02T00:00:00+08:00',
    images: [{ url: '/og-image.webp', width: 1200, height: 630, alt: '巧品珠寶' }],

  },
};

const faqs = [
  {
    q: '回收K金和回收純金（9999）有什麼差別？',
    a: '純金（9999）含金量99.99%，計算直接：重量×今日金價。K金則依純度折算：18K含金量75%、14K約58.5%、10K約41.7%。所以同樣10克，18K只算7.5克黃金，而不是10克。回收店的K金報價就是先折算出純金克重，再乘以金價，最後可能還扣耗損費。',
  },
  {
    q: '回收K金被扣「耗損費」合理嗎？',
    a: '這是行業中常見但不透明的費用。有些店說「K金需要火燒提煉，會耗損5%」，所以扣5%。但實際上現代提煉技術耗損遠低於此，多數是利潤。正規店家應該直接說清楚收購價，不扣耗損；或明確告知扣多少。如果店家扣耗損又不說清楚，就換一家。',
  },
  {
    q: '回收K金哪裡比較划算？銀樓還是黃金回收店？',
    a: '黃金回收專門店通常比傳統銀樓出價更高，因為他們的主業就是回收，會靠量賺差價，而不是靠單筆暴利。傳統銀樓則可能對K金較不積極，報價保守。建議至少比較2家，差距可以到每克台幣10–30元。',
  },
  {
    q: '斷掉的K金項鍊、壞掉的K金戒指也可以賣嗎？',
    a: '可以。回收看的是含金量，不是外觀。斷了、歪了、缺了寶石都沒關係，照重量計算含金量後給價。但如果K金上鑲有鑽石或寶石，回收商通常把石頭取下另算，或整體出個「打包價」，這時建議先問清楚各別報價。',
  },
  {
    q: '回收K金需要帶身分證嗎？',
    a: '依法規定，黃金回收交易需登記身分。台灣貴金屬回收業者應依「貴金屬及寶石買賣業管理辦法」要求核驗身分證件，交易超過一定金額還需簽署交易紀錄。帶身分證去才能完成交易。',
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
            headline: '回收K金怎麼算？2026年K金收購價格完整攻略',
            description: '回收K金前必看：18K、14K、10K收購價怎麼算？扣耗損是什麼陷阱？實際到手金額怎麼估？一篇說清楚。',
            mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://www.gold-tw.com/blog/recycle-k-gold-guide-2026' },
            author: { '@type': 'Person', name: '鑑定師L', url: 'https://www.gold-tw.com' },
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
                name: '回收K金攻略',
                item: 'https://www.gold-tw.com/blog/recycle-k-gold-guide-2026',
              },
            ],
          }),
        }}
      />
      <article style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
        <h1>回收K金怎麼算？2026年K金收購完整攻略</h1>

        <div style={{ background: '#fffbeb', borderLeft: '4px solid #f59e0b', padding: '16px', margin: '16px 0', borderRadius: '8px' }}>
          <strong>重點摘要：</strong> 回收K金的價格 = 克重 × 含金比例 × 今日金價。18K乘75%、14K乘58.5%、10K乘41.7%。被扣耗損的直接說「我不接受」或換一家。
        </div>

        <h2>K金回收價格怎麼算？公式一步到位</h2>
        <p>
          很多人去賣K金，拿到報價後完全不知道對不對。其實計算邏輯很簡單，記住這個公式就夠了：
        </p>
        <p style={{ background: '#f9fafb', padding: '12px', borderRadius: '6px', fontWeight: 'bold', textAlign: 'center' }}>
          回收金額 = 克重 × 含金比例 × 今日黃金收購價（每克）
        </p>
        <p>
          舉例：今日黃金收購價每克3,000元，你有一條10克的18K金項鍊：
          10克 × 75% × 3,000元 = <strong>22,500元</strong>
        </p>
        <p>
          如果同樣10克但是14K：10克 × 58.5% × 3,000元 = <strong>17,550元</strong>。差距明顯，所以帶去前先確認K數。
        </p>

        <h2>各K數含金比例怎麼換算？</h2>
        <table style={{ width: '100%', borderCollapse: 'collapse', margin: '1.5rem 0' }}>
          <thead>
            <tr style={{ background: '#f5f0e8' }}>
              <th style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'left' }}>K數標示</th>
              <th style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'left' }}>含金比例</th>
              <th style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'left' }}>常見印記</th>
              <th style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'left' }}>10克回收估值（金價3,000/克）</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>24K（9999）</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>99.99%</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>9999、24K</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>約 29,997元</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>22K（916）</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>91.6%</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>916</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>約 27,480元</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>18K（750）</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>75%</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>750、18K、Au750</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>約 22,500元</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>14K（585）</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>58.5%</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>585、14K</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>約 17,550元</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>10K（416）</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>41.7%</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>416、10K</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>約 12,510元</td>
            </tr>
          </tbody>
        </table>

        <h2>「扣耗損」是什麼？為什麼你該拒絕</h2>
        <p>
          走進某些銀樓，報價時你會聽到：「K金要提煉，耗損5%，所以幫你扣一下。」
        </p>
        <p>
          這是一個半真半假的說法。K金確實需要提煉分離合金成分，但現代酸洗提煉法耗損率不到1%，5%耗損費純粹是利潤空間。正規店家的做法是：直接告訴你K金收購價（已反映提煉成本），不另外扣耗損。
        </p>
        <p>
          <strong>遇到要扣耗損的店，你有兩個選擇：</strong>要求他們說清楚扣多少錢、剩多少；或直接換一家。這不是規定，是可以談的。
        </p>

        <h2>回收K金前要做哪些準備？</h2>
        <ul>
          <li>確認K數：看首飾上的印記，18K會刻750、18K或Au750；14K會刻585</li>
          <li>查今日金價：上台灣銀行或台灣黃金交易所看當日收購報價，心裡有底</li>
          <li>帶身分證：法規要求，沒帶無法完成交易</li>
        </ul>
        <p>
          有斷裂、變形或缺少寶石的K金飾品都可以賣，外觀不影響回收金額，重量和K數才是關鍵。
        </p>

        <h2>常見問答</h2>
        {faqs.map((f, i) => (
          <div key={i} style={{ marginBottom: '1.5rem', borderTop: '1px solid #e5e7eb', paddingTop: '1rem' }}>
            <h3 style={{ color: '#92400e', margin: '0 0 0.5rem' }}>{f.q}</h3>
            <p style={{ margin: 0 }}>{f.a}</p>
          </div>
        ))}

        <div style={{ background: '#fef3c7', border: '1px solid #f59e0b', padding: '20px', borderRadius: '8px', margin: '2rem 0', textAlign: 'center' }}>
          <strong style={{ fontSize: '1.1rem' }}>巧品珠寶——K金不扣耗損，秤重全程讓你盯著看</strong>
          <br />
          <span style={{ color: '#78350f' }}>18K、14K、10K、Pt900全收，當場出價，現金結清</span>
          <br />
          <strong>0986-821-626｜LINE: @QPD888</strong>
          <br />
          <span style={{ fontSize: '0.9rem', color: '#92400e' }}>台北大安區，週一至週日 11:00–20:00</span>
        </div>

        <h2>延伸閱讀</h2>
        <ul>
          <li><a href="/blog/k-gold-recovery-price-2026">K金回收價格2026——18K、14K、10K當日報價說明</a></li>
          <li><a href="/blog/14k-gold-recovery-price-2026">14K金回收價格——計算方式與注意事項</a></li>
          <li><a href="/blog/gold-recovery-traps">黃金回收5大陷阱——業內人說別人不敢說的</a></li>
          <li><a href="/blog/gold-id-requirement">賣黃金要帶身分證嗎？台灣黃金交易規定一次說清楚</a></li>
        </ul>
      </article>
    </>
  );
}
