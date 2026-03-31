import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'K金回收完整攻略｜18K/14K/10K回收價格怎麼算｜巧品珠寶',
  description: 'K金回收懶人包！18K、14K、10K回收價格計算公式全公開，不扣耗損、不扣火耗，秤重讓你盯著看。台北巧品珠寶當場現金，電話 0986-821-626。',
  keywords: 'K金回收,k金 回收,18K回收,14K回收,K金回收價格',
  alternates: {
    canonical: 'https://www.gold-tw.com/blog/k-gold-recycling-guide',
  },
};

export default function Page() {
  return (
    <main style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: 'K金回收完整攻略｜18K/14K/10K回收價格怎麼算｜巧品珠寶',
            description: 'K金回收懶人包！18K、14K、10K回收價格計算公式全公開，不扣耗損、不扣火耗，秤重讓你盯著看。台北巧品珠寶當場現金，電話 0986-821-626。',
            mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://www.gold-tw.com/blog/k-gold-recycling-guide' },
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
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "K金回收價格怎麼計算？",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "K金回收價 = 當日24K黃金牌價 × 該K數含金比例 × 重量（台錢）。18K含金75%，14K含金58.5%，10K含金41.7%。例如當日牌價每台錢10,000元，10台錢18K項鍊的回收價約為10,000 × 75% × 10 = 75,000元。"
                }
              },
              {
                "@type": "Question",
                "name": "K金回收需要帶什麼？",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "帶身分證（或健保卡）及要回收的K金飾品即可。不需要收據或保證書，到場約15分鐘完成鑑定秤重付款。"
                }
              },
              {
                "@type": "Question",
                "name": "玫瑰金和白K金回收價一樣嗎？",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "是的，同K數的玫瑰金、白K金、黃K金含金量相同，回收價格一樣。顏色差異來自合金配方，不影響含金比例。"
                }
              },
              {
                "@type": "Question",
                "name": "K金上面沒有標記還能回收嗎？",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "可以。巧品珠寶使用XRF螢光儀器鑑定，不依賴印記，直接測出含金比例，結果更準確，標示磨損的老件也沒問題。"
                }
              },
              {
                "@type": "Question",
                "name": "K金回收和黃金（999/916）回收哪個划算？",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "純度越高回收價越接近牌價。999黃金含金99.9%，回收比例最高；18K含金75%，14K含金58.5%。但K金通常比純金更精緻，評估時看重量和含金量，不要單看表面。"
                }
              },
              {
                "@type": "Question",
                "name": "巧品珠寶K金回收有扣耗損嗎？",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "不扣。市面很多店會扣5%「火耗」，我們不扣。秤多少重量，就用多少重量計價，全程你可以盯著電子秤看。"
                }
              }
            ]
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "首頁", "item": "https://www.gold-tw.com" },
              { "@type": "ListItem", "position": 2, "name": "知識專欄", "item": "https://www.gold-tw.com/blog" },
              { "@type": "ListItem", "position": 3, "name": "K金回收完整攻略｜18K/14K/10K回收價格怎麼算", "item": "https://www.gold-tw.com/blog/k-gold-recycling-guide" }
            ]
          })
        }}
      />

      <h1>K金回收完整攻略｜18K/14K/10K價格怎麼算</h1>

      <div style={{ background: '#fffbeb', borderLeft: '4px solid #f59e0b', padding: '16px', margin: '16px 0', borderRadius: '8px' }}>
        <strong>重點摘要：</strong> K金回收依「K數含金比例 × 當日牌價 × 重量」計算。18K含金75%、14K含金58.5%、10K含金41.7%。巧品珠寶不扣耗損，XRF儀器即測即報，15分鐘完成現金交易。
      </div>

      <h2>K金回收，你最需要知道這一件事</h2>
      <p>K金不等於黃金。18K的「金」只有75%，剩下25%是銀、銅或鈀等合金。所以拿18K去回收，不能用黃金牌價打9折，要用牌價乘以0.75才是正確基準。</p>
      <p>聽起來複雜？其實一個公式就夠：<strong>回收價 = 當日24K牌價 × 含金比例 × 重量（台錢）</strong>。你拿手機查一下今天牌價，再看一下K金重量，自己就能估出底線。</p>

      <h2>各K數含金比例對照</h2>
      <p>以下是標準含金換算，拿到手機計算機就可以自估：</p>

      <div style={{ overflowX: 'auto', margin: '1.5rem 0' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.95rem' }}>
          <thead>
            <tr style={{ background: '#fef3c7' }}>
              <th style={{ padding: '10px 14px', border: '1px solid #e5e7eb', textAlign: 'left' }}>K數</th>
              <th style={{ padding: '10px 14px', border: '1px solid #e5e7eb', textAlign: 'left' }}>含金比例</th>
              <th style={{ padding: '10px 14px', border: '1px solid #e5e7eb', textAlign: 'left' }}>常見用途</th>
              <th style={{ padding: '10px 14px', border: '1px solid #e5e7eb', textAlign: 'left' }}>10台錢估算（牌價10,000/錢）</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ padding: '10px 14px', border: '1px solid #e5e7eb' }}>24K（純金）</td>
              <td style={{ padding: '10px 14px', border: '1px solid #e5e7eb' }}>99.9%</td>
              <td style={{ padding: '10px 14px', border: '1px solid #e5e7eb' }}>金條、金幣</td>
              <td style={{ padding: '10px 14px', border: '1px solid #e5e7eb' }}>約 99,900 元</td>
            </tr>
            <tr style={{ background: '#f9fafb' }}>
              <td style={{ padding: '10px 14px', border: '1px solid #e5e7eb' }}>22K（916）</td>
              <td style={{ padding: '10px 14px', border: '1px solid #e5e7eb' }}>91.6%</td>
              <td style={{ padding: '10px 14px', border: '1px solid #e5e7eb' }}>傳統金飾</td>
              <td style={{ padding: '10px 14px', border: '1px solid #e5e7eb' }}>約 91,600 元</td>
            </tr>
            <tr>
              <td style={{ padding: '10px 14px', border: '1px solid #e5e7eb' }}>18K</td>
              <td style={{ padding: '10px 14px', border: '1px solid #e5e7eb' }}>75%</td>
              <td style={{ padding: '10px 14px', border: '1px solid #e5e7eb' }}>西式珠寶、名品首飾</td>
              <td style={{ padding: '10px 14px', border: '1px solid #e5e7eb' }}>約 75,000 元</td>
            </tr>
            <tr style={{ background: '#f9fafb' }}>
              <td style={{ padding: '10px 14px', border: '1px solid #e5e7eb' }}>14K</td>
              <td style={{ padding: '10px 14px', border: '1px solid #e5e7eb' }}>58.5%</td>
              <td style={{ padding: '10px 14px', border: '1px solid #e5e7eb' }}>輕珠寶、時尚飾品</td>
              <td style={{ padding: '10px 14px', border: '1px solid #e5e7eb' }}>約 58,500 元</td>
            </tr>
            <tr>
              <td style={{ padding: '10px 14px', border: '1px solid #e5e7eb' }}>10K</td>
              <td style={{ padding: '10px 14px', border: '1px solid #e5e7eb' }}>41.7%</td>
              <td style={{ padding: '10px 14px', border: '1px solid #e5e7eb' }}>平價飾品</td>
              <td style={{ padding: '10px 14px', border: '1px solid #e5e7eb' }}>約 41,700 元</td>
            </tr>
            <tr style={{ background: '#f9fafb' }}>
              <td style={{ padding: '10px 14px', border: '1px solid #e5e7eb' }}>9K</td>
              <td style={{ padding: '10px 14px', border: '1px solid #e5e7eb' }}>37.5%</td>
              <td style={{ padding: '10px 14px', border: '1px solid #e5e7eb' }}>歐洲飾品</td>
              <td style={{ padding: '10px 14px', border: '1px solid #e5e7eb' }}>約 37,500 元</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p style={{ fontSize: '0.85rem', color: '#6b7280' }}>※ 以上為示意計算，實際回收價以當日黃金牌價為準，請現場確認。</p>

      <h2>K金回收常見迷思，直接破解</h2>

      <h3>迷思一：「K金印記磨掉就不能回收了」</h3>
      <p>完全不對。巧品珠寶使用XRF螢光光譜儀，直接照射金屬表面即可測出含金量，不靠印記。你從美國帶回來的古董戒指、沒有任何標記的老件，一樣測得出來。</p>

      <h3>迷思二：「白K金含有鉑金，回收更貴」</h3>
      <p>白K金（White Gold）不是鉑金（Platinum）。白K金是黃金加鈀、鎳等白色金屬製成，外表鍍銠讓它看起來像鉑金，但實際含金量就是對應K數。鉑金（Pt900、Pt950）是另一種貴金屬，兩者分開計算。</p>

      <h3>迷思三：「K金因為款式精緻，回收價應該更高」</h3>
      <p>回收看的是金屬含量，不是設計費。一件Tiffany 18K戒指和路邊攤18K戒指，同重量同K數，回收價一樣。品牌溢價在轉售市場才有意義，回收就是秤重計金。</p>

      <h2>巧品珠寶K金回收流程</h2>
      <p>整個流程非常快，你帶著飾品來，我們做這幾件事：</p>
      <ol>
        <li><strong>儀器鑑定</strong>：XRF直接測含金量，約3分鐘出結果，你可以在旁邊看螢幕</li>
        <li><strong>電子秤稱重</strong>：你盯著秤，重量沒有模糊空間</li>
        <li><strong>當場報價</strong>：公式透明，你自己算得出來</li>
        <li><strong>確認付款</strong>：現金交付，不需要等待，不需要隔天取款</li>
      </ol>
      <p>全程約15分鐘。不扣耗損，不扣火耗，沒有神秘費用。</p>

      <h2>什麼K金最值得現在賣？</h2>
      <p>2026年黃金牌價持續在歷史高位。手上有閒置的K金飾品，現在變現的時機點比三年前好很多。特別是18K以上的飾品，含金量高，受益於高金價更明顯。</p>
      <p>14K以下的輕珠寶因含金比例較低，但如果重量夠，累積起來金額也可觀。兩件14K手鍊加起來20台錢，在現在牌價下仍有相當金額。</p>

      <h2>K金回收地點：台北巧品珠寶</h2>
      <p>地址：台北市（來電預約確認地址）<br />電話：0986-821-626<br />服務時間：每天 10:00–21:30</p>
      <p>不需預約，直接來。如果想先估個大概，可以先電話告訴我們K數和大約重量，我們給你一個範圍報價。</p>

      <section style={{ marginTop: '2.5rem', padding: '2rem', background: '#f9fafb', borderRadius: '12px', border: '1px solid #e5e7eb' }}>
        <h2 style={{ fontSize: '1.3rem', fontWeight: 'bold', color: '#1f2937', marginTop: 0, marginBottom: '1rem' }}>常見問題 FAQ</h2>

        <div style={{ marginBottom: '1rem', background: 'white', padding: '1rem', borderRadius: '8px', border: '1px solid #e5e7eb' }}>
          <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '1rem', color: '#1f2937' }}>Q：K金回收價格怎麼計算？</h3>
          <p style={{ margin: 0, color: '#4b5563', lineHeight: '1.6' }}>A：公式：當日24K黃金牌價 × 該K數含金比例 × 重量（台錢）。18K含金75%，14K含金58.5%，10K含金41.7%。例如牌價每錢10,000元，10錢18K項鍊回收約75,000元。</p>
        </div>

        <div style={{ marginBottom: '1rem', background: 'white', padding: '1rem', borderRadius: '8px', border: '1px solid #e5e7eb' }}>
          <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '1rem', color: '#1f2937' }}>Q：K金回收需要帶什麼？</h3>
          <p style={{ margin: 0, color: '#4b5563', lineHeight: '1.6' }}>A：帶身分證（或健保卡）及要回收的K金飾品即可。不需要收據或保證書，到場約15分鐘完成鑑定秤重付款。</p>
        </div>

        <div style={{ marginBottom: '1rem', background: 'white', padding: '1rem', borderRadius: '8px', border: '1px solid #e5e7eb' }}>
          <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '1rem', color: '#1f2937' }}>Q：玫瑰金和白K金回收價一樣嗎？</h3>
          <p style={{ margin: 0, color: '#4b5563', lineHeight: '1.6' }}>A：是的，同K數的玫瑰金、白K金、黃K金含金量相同，回收價格一樣。顏色差異來自合金配方，不影響含金比例。</p>
        </div>

        <div style={{ marginBottom: '1rem', background: 'white', padding: '1rem', borderRadius: '8px', border: '1px solid #e5e7eb' }}>
          <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '1rem', color: '#1f2937' }}>Q：K金上面沒有標記還能回收嗎？</h3>
          <p style={{ margin: 0, color: '#4b5563', lineHeight: '1.6' }}>A：可以。巧品珠寶使用XRF螢光儀器鑑定，不依賴印記，直接測出含金比例，結果更準確，標示磨損的老件也沒問題。</p>
        </div>

        <div style={{ marginBottom: '1rem', background: 'white', padding: '1rem', borderRadius: '8px', border: '1px solid #e5e7eb' }}>
          <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '1rem', color: '#1f2937' }}>Q：巧品珠寶K金回收有扣耗損嗎？</h3>
          <p style={{ margin: 0, color: '#4b5563', lineHeight: '1.6' }}>A：不扣。市面很多店會扣5%「火耗」，我們不扣。秤多少就是多少，全程你可以盯著電子秤看。</p>
        </div>

        <div style={{ background: 'white', padding: '1rem', borderRadius: '8px', border: '1px solid #e5e7eb' }}>
          <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '1rem', color: '#1f2937' }}>Q：K金回收和黃金（999/916）哪個划算？</h3>
          <p style={{ margin: 0, color: '#4b5563', lineHeight: '1.6' }}>A：純度越高越接近牌價。999黃金含金99.9%最高，18K含金75%次之，14K含金58.5%。判斷划不划算要看重量，不要只看看起來有多大件。</p>
        </div>
      </section>

      <div style={{ margin: '2rem 0', padding: '1.5rem', background: '#FEF9E7', borderRadius: '8px', borderLeft: '4px solid #B8860B' }}>
        <strong>延伸閱讀：</strong>
        <ul style={{ margin: '0.5rem 0 0 0', paddingLeft: '1.2rem' }}>
          <li><a href="/blog/karat-gold-recovery" style={{ color: '#B8860B' }}>K金回收｜18K/14K回收價格一篇搞懂</a></li>
          <li><a href="/blog/karat-gold-price" style={{ color: '#B8860B' }}>K金今日價格查詢</a></li>
          <li><a href="/blog/gold-identification" style={{ color: '#B8860B' }}>黃金鑑定方法｜如何辨別真假黃金</a></li>
          <li><a href="/sell-gold-guide" style={{ color: '#B8860B' }}>賣黃金完整指南｜7步驟拿到最高現金</a></li>
        </ul>
      </div>

      <div style={{ marginTop: '2rem', padding: '1.5rem', background: '#1f2937', color: 'white', borderRadius: '12px', textAlign: 'center' }}>
        <p style={{ margin: '0 0 0.5rem 0', fontSize: '1.1rem', fontWeight: 'bold' }}>K金要回收？直接電話來</p>
        <p style={{ margin: '0 0 1rem 0', color: '#d1d5db' }}>告訴我們K數和大約重量，立刻給你報價範圍</p>
        <a href="tel:0986821626" style={{ display: 'inline-block', background: '#f59e0b', color: '#1f2937', padding: '10px 28px', borderRadius: '8px', fontWeight: 'bold', textDecoration: 'none', fontSize: '1.1rem' }}>
          0986-821-626
        </a>
      </div>
    </main>
  );
}
