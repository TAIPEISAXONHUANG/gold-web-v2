import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'K金收購指南2026｜台北18K/14K/10K收購行情與店家選擇重點',
  description: '台北K金收購行情整理：18K、14K、10K收購怎麼算？大安、板橋、北投K金收購推薦哪裡？K金收購注意事項、估價標準、為何不扣耗損才是合理的店家。',
  keywords: 'K金收購,K金收購台北,18K收購,14K收購,10K收購,台北K金收購推薦,大安K金收購,板橋K金收購',
  alternates: {
    canonical: 'https://www.gold-tw.com/blog/k-gold-buying-guide-taipei',
  },
};

const faqs = [
  {
    q: 'K金收購和K金回收是同一件事嗎？',
    a: '在消費者的語境裡，K金收購和K金回收幾乎是同一件事——都是把K金飾品賣給店家換現金。差別在於：「收購」有時暗示店家批量收購商業用料，「回收」則偏向消費者變現個人飾品。實際上巧品珠寶兩種都做，流程和報價方式完全一樣。',
  },
  {
    q: 'K金收購價格怎麼算出來的？',
    a: 'K金收購價＝當日9999純金每錢報價 × 含金量%。18K（75%）、14K（58.5%）、10K（41.7%）以此類推。以2026年3月底9999約17,500元/錢計算：18K約13,125元/錢，14K約10,238元/錢，10K約7,298元/錢。',
  },
  {
    q: 'K金收購時，店家說要扣損耗合理嗎？',
    a: '扣損耗是一種店家控制成本的方式，但好的店家不扣。損耗指的是熔煉過程中的損耗，約1%–3%。如果扣3%，一錢就少約400–500元。巧品珠寶不扣耗損，秤多少算多少，全程公開。',
  },
  {
    q: 'K金收購需要帶什麼證件？',
    a: '根據台灣《洗錢防制法》規定，珠寶買賣需要登記買賣雙方身分。來巧品賣K金，請帶身份證（或其他附照片證件）。店家會現場登錄，不會額外收費，也不會留難。',
  },
  {
    q: 'K金項鍊、戒指、耳環——哪種比較好賣？',
    a: '回收時只看你含金多少，不看你什麼款式。但，以下幾點影響估價：1) 裸鍊比有附扣頭的好估；2) 一體成型的比焊接款損耗低；3) 無寶石鑲嵌的比有寶石的好處理。款式本身不影響報價，只有含金量和重量兩個變數。',
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
            headline: 'K金收購指南2026｜台北18K/14K/10K收購行情與店家選擇重點',
            description: '台北K金收購行情整理：18K、14K、10K收購怎麼算？大安、板橋、北投K金收購推薦哪裡？K金收購注意事項、估價標準、為何不扣耗損才是合理的店家。',
            mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://www.gold-tw.com/blog/k-gold-buying-guide-taipei' },
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
                name: 'K金收購指南',
                item: 'https://www.gold-tw.com/blog/k-gold-buying-guide-taipei',
              },
            ],
          }),
        }}
      />
      <article style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
        <h1>K金收購指南2026｜台北18K/14K/10K收購行情與店家選擇重點</h1>

        <div style={{ background: '#fffbeb', borderLeft: '4px solid #f59e0b', padding: '16px', margin: '16px 0', borderRadius: '8px' }}>
          <strong>直接給答案：</strong> 2026年3月底，台北K金收購行情：18K約 <strong>13,100–13,500 元/錢</strong>、14K約 <strong>10,200–10,500 元/錢</strong>、10K約 <strong>7,200–7,500 元/錢</strong>（以9999純金17,500元/錢為基準，含金量計算）。選店家重點：不扣耗損、XRF現場測、有儀器才是專業。
        </div>

        <h2>K金收購第一步：先搞清楚自己的K數</h2>
        <p>
          K金飾品通常都有內刻印，在扣頭處或項鍊最尾端：
        </p>
        <ul>
          <li><strong>18K</strong> → 刻印通常為「750」「18K」「Au750」</li>
          <li><strong>14K</strong> → 刻印為「585」「14K」「Au585」</li>
          <li><strong>10K</strong> → 刻印為「417」「10K」「Au417」</li>
          <li><strong>22K / 916</strong> → 刻印為「916」「22K」「22K Gold」</li>
        </ul>
        <p>
          看不到刻印？可能是磨損了，可能是鍍金飾品，也可能是進口時工廠沒打。
          這種情況建議找有XRF儀器的店家現場測，3秒知道結果，不用猜。
        </p>

        <h2>2026年台北K金收購價格對照表</h2>
        <p>以2026年3月底9999純金回收牌價 17,500–18,000 元/錢為基準：</p>

        <table style={{ width: '100%', borderCollapse: 'collapse', margin: '1.5rem 0' }}>
          <thead>
            <tr style={{ background: '#f5f0e8' }}>
              <th style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'left' }}>K金種類</th>
              <th style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>含金量</th>
              <th style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>參考收購價（元/錢）</th>
              <th style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>5錢總價參考</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>9999純金</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>99.9%</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>17,500–18,000</td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}>87,500–90,000</td>
            </tr>
            <tr style={{ background: '#fef9e7' }}>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}><strong>22K（916）</strong></td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}><strong>91.67%</strong></td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}><strong>16,000–16,500</strong></td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}><strong>80,000–82,500</strong></td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}><strong>18K</strong></td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}><strong>75%</strong></td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}><strong>13,100–13,500</strong></td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}><strong>65,500–67,500</strong></td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}><strong>14K</strong></td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}><strong>58.5%</strong></td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}><strong>10,200–10,500</strong></td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}><strong>51,000–52,500</strong></td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}><strong>10K</strong></td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}><strong>41.7%</strong></td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}><strong>7,200–7,500</strong></td>
              <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'right' }}><strong>36,000–37,500</strong></td>
            </tr>
          </tbody>
        </table>
        <p style={{ fontSize: '0.85rem', color: '#888' }}>
          ※ 參考價以2026年3月底行情估算，正確報價請電洽：0986-821-626
        </p>

        <h2>台北市K金收購——大安、板橋、北投、士林哪裡找？</h2>
        <p>
          台北市要找K金收購，通常有幾個選項：
        </p>
        <ul>
          <li><strong>銀樓：</strong>最傳統管道，良莠不齊。大型連鎖銀樓報價較穩定，但可能扣損耗；小型銀樓有時能給更好價格，但需要有一定判斷力。</li>
          <li><strong>當鋪：</strong>速度最快，流程15分鐘，但報價普遍比銀樓差。適合急需現金、數量小的情況。</li>
          <li><strong>珠寶工作室：</strong>專門收購特定品項（如K金、鑽石），有時能給出比銀樓更好的價格，但並非每種K金都收。</li>
          <li><strong>巧品珠寶：</strong>18K、14K、10K、22K、Pt900全品項收購，XRF現場測成色，不扣耗損，現場現金融資，大安站步行5分鐘。</li>
        </ul>

        <h2>K金收購3個常見話術——遇到就小心</h2>
        <p>
          <strong>話術一：「你這個22K，市場上不好脫手，要扣一點」</strong>
          <br />
          22K（916）在國際珠寶市場是主流品項，倫敦金的K金珠寶應用非常廣泛。
          「不好脫手」是藉口，實情是想壓低報價。
        </p>
        <p>
          <strong>話術二：「現在金價波動大，我只能給你估一個保守價」</strong>
          <br />
          金價每天都在報，如果店家說波動大所以保守報價，潛台詞是「我不想跟隨市價浮動」。
          正派店家每天更新牌價，保守報價不等於誠信。
        </p>
        <p>
          <strong>話術三：「你的K金看起來不純，我要扣損耗」</strong>
          <br />
          「看起來不純」是主觀說法。
          XRF儀器能量化到小數點後兩位，說「看起來不純」而不願意儀器檢測的店家，絕對有問題。
        </p>

        <h2>K金收購流程——在巧品珠寶的標準流程</h2>
        <ol>
          <li><strong>致電或LINE詢問：</strong>說明品項和大概重量，獲得初步評估</li>
          <li><strong>到店估價：</strong>大安站步行5分鐘，不需預約，營業時間隨時來</li>
          <li><strong>XRF現場檢測：</strong>3秒測出精準含金量，全程讓你看</li>
          <li><strong>現場秤重：</strong>重量公開，秤後讓你確認數字</li>
          <li><strong>報價計算：</strong>9999牌價 × 實測含金量，不扣損耗</li>
          <li><strong>現金結算：</strong>確認後馬上付款，完成交易</li>
        </ol>
        <p>整個流程15–30分鐘，不需要留質，也不需要填寫複雜資料。</p>

        <h2>K金和純金——收購時哪個划算？</h2>
        <p>
          以同樣重量相比：
        </p>
        <ul>
          <li>9999純金：含金量最高，報價最好</li>
          <li>22K / 916：接近純金，差距不大，但仍然比K金好</li>
          <li>18K：日常生活中最受歡迎的K金，報價適中</li>
          <li>14K / 10K：報價較低，但這些K數在工業和時尚珠寶領域用途廣泛</li>
        </ul>
        <p>
          如果同時有純金和K金要賣，優先處理純金，再處理K金。
          K金的價值主要在含金量，款式和工藝在回收時不會另外加價。
        </p>

        <h2>常見問題</h2>
        {faqs.map((f, i) => (
          <div key={i} style={{ marginBottom: '1.5rem', borderTop: '1px solid #e5e7eb', paddingTop: '1rem' }}>
            <h3 style={{ color: '#92400e', margin: '0 0 0.5rem' }}>{f.q}</h3>
            <p style={{ margin: 0 }}>{f.a}</p>
          </div>
        ))}

        <div style={{ background: '#fef3c7', border: '1px solid #f59e0b', padding: '20px', borderRadius: '8px', margin: '2rem 0', textAlign: 'center' }}>
          <strong style={{ fontSize: '1.1rem' }}>K金收購——不扣耗損，XRF現場測，現場現金融資</strong>
          <br />
          <span style={{ color: '#78350f' }}>台北大安巧品珠寶 ｜ 0986-821-626 ｜ LINE：@QPD888</span>
          <br />
          <span style={{ fontSize: '0.9rem', color: '#92400e' }}>18K、14K、10K、22K（916）、Pt900——全品項收購</span>
        </div>

        <h2>延伸閱讀</h2>
        <ul>
          <li><a href="/blog/k-gold-recovery-price-2026">K金回收價格2026｜18K、14K、10K行情完整對照</a></li>
          <li><a href="/blog/916-gold-recycling-taiwan-2026">916黃金回收2026｜22K台灣行情與18K差異解析</a></li>
          <li><a href="/blog/karat-gold-recovery">K金回收怎麼算｜18K/14K/10K含金量計算方式</a></li>
          <li><a href="/blog/gold-vs-k-gold-comparison">黃金和K金的差異｜9999、22K、18K完整比較</a></li>
          <li><a href="/blog/gold-recovery-traps">黃金回收陷阱｜常見5大話術與防範對策</a></li>
        </ul>
      </article>
    </>
  );
}
