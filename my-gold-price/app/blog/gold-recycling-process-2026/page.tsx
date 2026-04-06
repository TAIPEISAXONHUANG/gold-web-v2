import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '黃金回收流程2026｜從帶金入店到拿現金，完整步驟說明',
  description: '賣黃金要帶什麼？怎麼秤重？報價怎麼算？2026年黃金回收完整流程，從預約到拿錢每一步都說清楚，不讓你走冤枉路。',
  keywords: '黃金回收流程,黃金回收步驟,賣黃金流程,黃金回收怎麼賣,黃金收購流程,黃金回收需要什麼,台北黃金回收',
  alternates: {
    canonical: 'https://www.gold-tw.com/blog/gold-recycling-process-2026',
  },
  openGraph: {
    locale: 'zh_TW',
    title: '黃金回收流程2026｜從帶金入店到拿現金，完整步驟說明',
    description: '賣黃金要帶什麼？怎麼秤重？報價怎麼算？2026年黃金回收完整流程，從預約到拿錢每一步都說清楚，不讓你走冤枉路。',
    type: 'article',
    url: 'https://www.gold-tw.com/blog/gold-recycling-process-2026',
    siteName: '巧品珠寶',
    publishedTime: '2026-04-06T14:30:00+08:00',
    modifiedTime: '2026-04-06T14:30:00+08:00',
    images: [{ url: '/og-image.webp', width: 1200, height: 630, alt: '巧品珠寶' }],
  },
};

const faqs = [
  {
    q: '賣黃金一定要帶身分證嗎？',
    a: '是，依台灣《貴金屬及珠寶業防制洗錢辦法》，銀樓收購黃金超過一定金額（一般是單筆 5 萬元以上）必須登記身分。部分業者習慣每筆都登記，這是合規要求，不是刁難你。帶身分證是必要的，如果對方不要求身分證卻又收大量黃金，要反過來小心。',
  },
  {
    q: '銀樓回收黃金是當場付現嗎？',
    a: '大多數台北正規銀樓都是當場付現，或轉帳到你指定帳戶（同樣當天）。不應該出現「等幾天」「先簽切結再拿錢」的情況。巧品珠寶的做法是：測完成色、秤完重、報價確認後，你同意了我們當場付現，沒有隔夜等待。',
  },
  {
    q: '回收黃金有最低重量限制嗎？',
    a: '多數銀樓沒有硬性最低限制，但如果只有幾克的碎金或耳環，店家可能會提供較保守的價格，因為分析成本相對偏高。1 錢（3.75 克）以上一般都能拿到正常市場行情。碎金、斷鍊、古董金飾都可帶來，不限款式。',
  },
  {
    q: '黃金飾品有損壞或不完整可以賣嗎？',
    a: '可以。斷鍊、壓扁、缺件、熔化過的金塊、甚至是金牙，只要成色確認，都能按重量和純度收購。外觀損壞不影響金的含量，純金就是純金。唯一影響的是：如果有額外寶石或鑲嵌件，拆除後的淨重才是計費基礎。',
  },
  {
    q: '什麼是「扣耗損」？怎麼知道業者有沒有扣？',
    a: '「扣耗損」是某些銀樓的做法：在報價時扣除 3–5% 的「熔解損耗費用」，理由是黃金熔解提煉時會有損失。但如果業者只是按重量收購（不直接熔金），扣耗損就是不合理的扣費。事前直接問清楚：「你們有扣耗損嗎？」如果答案閃爍或說「行業慣例」，換一家。巧品珠寶不扣耗損。',
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
                headline: '黃金回收流程2026｜從帶金入店到拿現金，完整步驟說明',
                description: '賣黃金要帶什麼？怎麼秤重？報價怎麼算？2026年黃金回收完整流程，從預約到拿錢每一步都說清楚，不讓你走冤枉路。',
                mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://www.gold-tw.com/blog/gold-recycling-process-2026' },
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
                    name: '黃金回收流程',
                    item: 'https://www.gold-tw.com/blog/gold-recycling-process-2026',
                  },
                ],
              },
            ],
          }),
        }}
      />
      <article style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
        <h1>黃金回收流程2026｜從帶金入店到拿現金，完整步驟說明</h1>
      <div style={{ background: '#fffbeb', borderLeft: '4px solid #f59e0b', padding: '16px', margin: '16px 0', borderRadius: '8px' }}>
        <strong>重點摘要：</strong> 賣黃金要帶什麼？怎麼秤重？報價怎麼算？2026年黃金回收完整流程，從預約到拿錢每一步都說清楚，不讓你走冤枉路。
      </div>


        <div style={{ background: '#fffbeb', borderLeft: '4px solid #f59e0b', padding: '16px', margin: '16px 0', borderRadius: '8px' }}>
          <strong>簡短版：</strong> 帶金 + 帶身分證 → 店家用 XRF 測成色 → 電子秤秤重 → 報價確認 → 你同意 → 當場拿現金。整個過程快的話 15 分鐘搞定。
        </div>

        <h2>黃金回收完整流程：7 個步驟</h2>

        <div style={{ margin: '1.5rem 0' }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '1.5rem', gap: '1rem' }}>
            <div style={{ background: '#f59e0b', color: '#fff', borderRadius: '50%', width: '32px', height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', flexShrink: 0 }}>1</div>
            <div>
              <strong>準備物品</strong>
              <p style={{ margin: '0.25rem 0 0' }}>黃金實物 + 身分證（必要）。有原始購買發票、保養單、品牌盒裝，可以帶來參考，但不影響報價邏輯——黃金以成色和重量計，不是品牌名稱。</p>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '1.5rem', gap: '1rem' }}>
            <div style={{ background: '#f59e0b', color: '#fff', borderRadius: '50%', width: '32px', height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', flexShrink: 0 }}>2</div>
            <div>
              <strong>聯繫或直接到店</strong>
              <p style={{ margin: '0.25rem 0 0' }}>可以先 LINE 或電話詢問當日金價方向，也可以直接帶來。如果量大（超過 5 兩），先電話確認現金備量是好習慣。</p>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '1.5rem', gap: '1rem' }}>
            <div style={{ background: '#f59e0b', color: '#fff', borderRadius: '50%', width: '32px', height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', flexShrink: 0 }}>3</div>
            <div>
              <strong>XRF 成色測定</strong>
              <p style={{ margin: '0.25rem 0 0' }}>店家用 XRF 儀器掃描你的飾品，30 秒內得出精確的黃金純度數據（如 75.2%、99.7%）。這個步驟你應該可以看到螢幕上的數字，不讓你看是不正常的。</p>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '1.5rem', gap: '1rem' }}>
            <div style={{ background: '#f59e0b', color: '#fff', borderRadius: '50%', width: '32px', height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', flexShrink: 0 }}>4</div>
            <div>
              <strong>電子秤秤重</strong>
              <p style={{ margin: '0.25rem 0 0' }}>精密電子秤秤量淨重（克或錢）。如果飾品有鑲嵌寶石，通常需要先拆除（或估算寶石重量扣除），以純金屬部分計價。你應該可以全程看著秤盤。</p>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '1.5rem', gap: '1rem' }}>
            <div style={{ background: '#f59e0b', color: '#fff', borderRadius: '50%', width: '32px', height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', flexShrink: 0 }}>5</div>
            <div>
              <strong>計算報價</strong>
              <p style={{ margin: '0.25rem 0 0' }}>依「今日黃金現貨價 × 純度 × 重量 × 回收折扣」算出報價。正規業者會直接告訴你計算邏輯，不會只丟一個數字。</p>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '1.5rem', gap: '1rem' }}>
            <div style={{ background: '#f59e0b', color: '#fff', borderRadius: '50%', width: '32px', height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', flexShrink: 0 }}>6</div>
            <div>
              <strong>確認同意</strong>
              <p style={{ margin: '0.25rem 0 0' }}>你有權利不接受報價。如果覺得不夠好，說「我再考慮一下」，帶回去再比較。正規業者不會有強迫或語言施壓，成交建立在你自願同意的基礎上。</p>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '1.5rem', gap: '1rem' }}>
            <div style={{ background: '#f59e0b', color: '#fff', borderRadius: '50%', width: '32px', height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', flexShrink: 0 }}>7</div>
            <div>
              <strong>登記身分 + 拿現金</strong>
              <p style={{ margin: '0.25rem 0 0' }}>填寫收購登記表（法律要求），確認身分後當場現金支付或即時轉帳。拿到收據留存。</p>
            </div>
          </div>
        </div>

        <h2>帶來的黃金類型與注意事項</h2>
        <table style={{ width: '100%', borderCollapse: 'collapse', margin: '1.5rem 0' }}>
          <thead>
            <tr style={{ background: '#f5f0e8' }}>
              <th style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'left' }}>黃金類型</th>
              <th style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'left' }}>可以回收嗎</th>
              <th style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'left' }}>注意事項</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>999 純金飾品、金條、金幣</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>可以</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>金幣需確認是純金非紀念幣（收藏版可能有溢價）</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>K金飾品（18K/14K/10K）</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>可以</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>按純度和重量計，款式不影響</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>破損、斷鍊、碎金</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>可以</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>外觀無影響，成色才是關鍵</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>鑲石飾品</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>可以</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>金台部分按金計，寶石另議</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>包金（GF）/ 鍍金（GP）</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>幾乎無回收價值</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>含金量太低，多數不收或象徵價</td>
            </tr>
          </tbody>
        </table>

        <h2>回收報價公式透明說明</h2>
        <p>
          黃金回收報價的核心公式是：
        </p>
        <div style={{ background: '#f0fdf4', border: '1px solid #86efac', padding: '16px', borderRadius: '8px', margin: '1rem 0', fontFamily: 'monospace', fontSize: '1rem' }}>
          報價 = 重量（克）× 純度（%）× 今日黃金現貨每克價格 × 回收折扣率
        </div>
        <p>
          舉例：你有一條 10 克的 18K 項鍊，今日金價每克 3,200 元，回收折扣率 97%（即不扣火耗）：
        </p>
        <p style={{ fontFamily: 'monospace', background: '#f9fafb', padding: '12px', borderRadius: '6px' }}>
          10g × 75% × 3,200 × 0.97 = <strong>23,280 元</strong>
        </p>
        <p>
          如果業者扣 5% 耗損（折扣率 92%），同樣的條件只能拿到約 22,080 元，相差 1,200 元。問清楚有沒有扣耗損，能省的錢不要讓出去。
        </p>

        <h2>黃金回收流程常見問答</h2>
        {faqs.map((f, i) => (
          <div key={i} style={{ marginBottom: '1.5rem', borderTop: '1px solid #e5e7eb', paddingTop: '1rem' }}>
            <h3 style={{ color: '#92400e', margin: '0 0 0.5rem' }}>{f.q}</h3>
            <p style={{ margin: 0 }}>{f.a}</p>
          </div>
        ))}

        <div style={{ background: '#fef3c7', border: '1px solid #f59e0b', padding: '20px', borderRadius: '8px', margin: '2rem 0', textAlign: 'center' }}>
          <strong style={{ fontSize: '1.1rem' }}>巧品珠寶——流程透明，秤重全程讓你盯著看</strong>
          <br />
          <span style={{ color: '#78350f' }}>台北大安區濟南路，不扣耗損，成色測完直接報價</span>
          <br />
          <span style={{ fontSize: '0.9rem', color: '#92400e' }}>15 分鐘完成，帶金帶證件，當場拿現金</span>
          <br />
          <strong>0986-821-626｜LINE: @QPD888</strong>
        </div>

        <h2>延伸閱讀</h2>
        <ul>
          <li><a href="/blog/gold-purity-testing-2026">黃金純度鑑定——999、18K、14K怎麼測？方法完整說明</a></li>
          <li><a href="/blog/gold-selling-checklist-2026">賣黃金前檢查清單——估價前必做的 7 個步驟</a></li>
          <li><a href="/blog/k-gold-recycle-guide-2026">K金回收完整指南——14K、18K、Pt900收購流程與報價邏輯</a></li>
          <li><a href="/blog/how-to-choose-gold-shop-2026">台北銀樓怎麼選？4 個指標判斷報價是否合理</a></li>
        </ul>
      </article>
    </>
  );
}
