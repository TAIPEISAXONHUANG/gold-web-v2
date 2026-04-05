import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '黃金ETF vs 實體黃金2026｜哪個更值得？費用、流動性、稅務比較',
  description: '黃金ETF和實體黃金（金條、金飾）哪個好？2026年完整比較包括：費用結構、流動性、風險、稅務，以及台灣投資人的實際操作方式。',
  keywords: '黃金ETF,實體黃金,黃金投資比較,黃金ETF推薦,黃金存摺',
  alternates: {
    canonical: 'https://www.gold-tw.com/blog/gold-etf-vs-physical-gold',
  },
};

export default function Page() {
  const articleUrl = 'https://www.gold-tw.com/blog/gold-etf-vs-physical-gold';
  const today = new Date().toISOString().split('T')[0];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: '黃金ETF vs 實體黃金2026｜哪個更值得？費用、流動性、稅務比較',
            description: '黃金ETF和實體黃金（金條、金飾）哪個好？2026年完整比較包括：費用結構、流動性、風險、稅務，以及台灣投資人的實際操作方式。',
            author: { '@type': 'Person', name: '巧品珠寶' },
            publisher: { '@type': 'Organization', name: '巧品珠寶' },
            datePublished: today,
            dateModified: today,
            mainEntityOfPage: { '@type': 'WebPage', '@id': articleUrl },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: '黃金ETF和實體黃金哪個費用比較低？',
                acceptedAnswer: { '@type': 'Answer', text: '黃金ETF的費用通常較低：交易手續費約0.1%–0.3%，加上ETF年度管理費約0.2%–0.4%。實體黃金的費用較高：銀樓買入有工藝費（5%–30%），賣出時有損耗扣款（1%–3%）。長期持有5年以上，實體黃金的隱性費用可能比ETF高出10%–20%。' },
              },
              {
                '@type': 'Question',
                name: '黃金ETF可以換成實體黃金嗎？',
                acceptedAnswer: { '@type': 'Answer', text: '多數黃金ETF支持實物交割，即你可以申請將ETF份額置換為實體金條（通常有最低數量限制，如10股=約10克）。但實物交割涉及運費和鑄造費，並不划算。建議 ETF 就當 ETF 操作，需要實物再去銀樓購買。' },
              },
              {
                '@type': 'Question',
                name: '台灣買黃金ETF要課稅嗎？',
                acceptedAnswer: { '@type': 'Answer', text: '在台灣，黃金ETF的買賣差價屬於期貨交易所得，須併入個人所得稅申報，最高稅率45%。實體黃金在拍賣或出售時的收益，屬於財產交易所得，需申報所得稅。建議投資前了解自己的課稅級距，計算實際淨報酬。' },
              },
              {
                '@type': 'Question',
                name: '黃金存摺算實體黃金還是ETF？',
                acceptedAnswer: { '@type': 'Answer', text: '黃金存摺是銀行提供的黃金簿記服務，本質上是銀行對你的債權，不是實體黃金。你可以用存摺內的黃金份額要求銀行交付實物，但不是所有銀行都支持。黃金存摺的費用結構和黃金ETF不同，通常比ETF高但比銀樓實金低。' },
              },
            ],
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
                name: '黃金ETF與實體黃金比較',
                item: articleUrl,
              },
            ],
          }),
        }}
      />
      <article style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
        <h1>黃金ETF vs 實體黃金2026｜哪個更值得？費用、流動性、稅務比較</h1>

        <div style={{ background: '#fffbeb', borderLeft: '4px solid #f59e0b', padding: '16px', margin: '16px 0', borderRadius: '8px' }}>
          <strong>直接給答案：</strong> 純投資目的，黃金ETF費用低、流動性強，是多數人的選擇。想要持有實物（傳家、收藏、审美），選實體黃金。不要 ALL IN 任何一個——黃金只是資產配置的其中一個工具。
        </div>

        <h2>黃金ETF和實體黃金有什麼本質差異？</h2>
        <p>
          在比較兩者之前，先搞清楚它們的性質完全不同：
        </p>
        <ul>
          <li><strong>黃金ETF：</strong>在證券戶交易的黃金投資工具，價格追蹤黃金現貨價格（如SPDR黃金ETF、 元大S&P黃金）。你擁有的是「黃金份額」的電子記錄，不是實物黃金。</li>
          <li><strong>實體黃金：</strong>銀樓購買的金條或金飾，你擁有實物所有權。</li>
          <li><strong>黃金存摺：</strong>銀行提供的黃金記帳服務，是銀行的無實物債權，介於兩者之間。</li>
        </ul>

        <h2>費用結構怎麼比較？</h2>

        <table style={{ width: '100%', borderCollapse: 'collapse', margin: '1.5rem 0' }}>
          <thead>
            <tr style={{ background: '#f5f0e8' }}>
              <th style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'left' }}>費用項目</th>
              <th style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'left' }}>黃金ETF</th>
              <th style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'left' }}>實體黃金（銀樓）</th>
              <th style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'left' }}>黃金存摺</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>買入費用</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>證券交易手續費約0.1%–0.3%</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>工藝費約5%–30%（金條約3%–5%，飾金10%–30%）</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>銀行報價通常高於國際金價1%–2%</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>持有費用</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>年度管理費約0.2%–0.4%</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>儲存成本（保險箱或在家存放）</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>無（銀行代保管）</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>賣出費用</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>證券交易手續費約0.1%–0.3%</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>損耗扣款約1%–3%</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>銀行回購價通常低於國際金價1%–2%</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>總費用（1年持有）</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>約0.3%–0.7%</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>約5%–35%（含工藝費）</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>約1%–3%</td>
            </tr>
          </tbody>
        </table>
        <p style={{ fontSize: '0.85rem', color: '#888' }}>
          ※ 實體黃金的高費用主要來自買入時的工藝費，長期持有後工藝費攤提會降低
        </p>

        <h2>流動性比較——急需用錢時誰更快？</h2>
        <p>
          <strong>黃金ETF：</strong>在證券戶當日買賣，收盤前賣出，資金當日可用（但交割T+2）。可用於質押貸款（少數券商支援）。
        </p>
        <p>
          <strong>實體黃金：</strong>銀樓現場變現約30–60分鐘，款項當場拿現金。大型金條（如1公斤）需要找到特定銀樓，回購管道較窄。
        </p>
        <p>
          <strong>黃金存摺：</strong>致電銀行申請回售，資金約1–2個工作天入帳，少數銀行支援當日入帳。
        </p>

        <h2>風險怎麼比較？</h2>

        <table style={{ width: '100%', borderCollapse: 'collapse', margin: '1.5rem 0' }}>
          <thead>
            <tr style={{ background: '#f5f0e8' }}>
              <th style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'left' }}>風險類型</th>
              <th style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'left' }}>黃金ETF</th>
              <th style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'left' }}>實體黃金</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>價格風險</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>與國際金價同步，無折溢價風險</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>與國際金價同步</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>交易對手風險</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>極低（交易所結算）</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>取決於銀樓信譽</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>偽造/盜竊風險</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>無</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>實物有風險，需存放保險箱</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>發行機構風險</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>追蹤誤差、管理公司倒閉</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>無</td>
            </tr>
          </tbody>
        </table>

        <h2>稅務方面怎麼比較？</h2>
        <p>
          <strong>黃金ETF：</strong>買賣差價屬期貨交易所得，須計入個人所得稅申報（最高45%）。
          如果虧損，可以抵扣其他期貨/期權收益。
        </p>
        <p>
          <strong>實體黃金：</strong>拍賣收入屬財產交易所得，須申報所得稅。
          計算方式：出售價格 - 取得成本。需保留購買發票或證明。
          如果沒有成本證明，稽徵機關可能按拍賣價格的6%核定為一時貿易所得。
        </p>
        <p>
          <strong>黃金存摺：</strong>同實體黃金課稅規定，銀行會主動通報交易資料。
        </p>

        <h2>台灣投資人有哪些實際建議？</h2>

        <h3>選黃金ETF的人：</h3>
        <ul>
          <li>有證券戶，不需要實物</li>
          <li>操作頻繁，想要高流動性</li>
          <li>不想煩惱存放和保險問題</li>
          <li>想要定期定額投資黃金</li>
        </ul>

        <h3>選實體黃金的人：</h3>
        <ul>
          <li>想要傳承給下一代（實物更有意義）</li>
          <li>對金融機構沒有信任感，只信實物</li>
          <li>有安全存放條件（保險箱等）</li>
          <li>美學收藏目的</li>
        </ul>

        <h3>選黃金存摺的人：</h3>
        <ul>
          <li>想要門檻低的黃金投資</li>
          <li>偶爾小額買入</li>
          <li>沒有證券戶</li>
        </ul>

        <h2>常見問題</h2>
        <div style={{ marginBottom: '1.5rem', borderTop: '1px solid #e5e7eb', paddingTop: '1rem' }}>
          <h3 style={{ color: '#92400e', margin: '0 0 0.5rem' }}>黃金ETF和實體黃金可以同時持有嗎？</h3>
          <p style={{ margin: 0 }}>當然可以。資產配置的角度，有些投資人會用 ETF 持有主要的黃金曝險（90%），其餘10%用實體黃金（如金豆或小金條）作為心理護城河和災難保障。</p>
        </div>
        <div style={{ marginBottom: '1.5rem', borderTop: '1px solid #e5e7eb', paddingTop: '1rem' }}>
          <h3 style={{ color: '#92400e', margin: '0 0 0.5rem' }}>長期持有（10年以上）哪個比較好？</h3>
          <p style={{ margin: 0 }}>如果持有10年以上，工藝費的攤提已經足夠長，實體黃金的實際費用可能接近 ETF。但 ETF 在流動性和管理便利性上仍優於實體黃金。建議還是以 ETF 為主，實體黃金作為衛星配置。</p>
        </div>

        <div style={{ background: '#fef3c7', border: '1px solid #f59e0b', padding: '20px', borderRadius: '8px', margin: '2rem 0', textAlign: 'center' }}>
          <strong style={{ fontSize: '1.1rem' }}>實體黃金估秤估價——現場XRF檢測成色，現金融資</strong>
          <br />
          <span style={{ color: '#78350f' }}>台北大安巧品珠寶 ｜ 0986-821-626 ｜ LINE：@QPD888</span>
        </div>

        <h2>延伸閱讀</h2>
        <ul>
          <li><a href="/blog/gold-vs-silver-investment">黃金vs白銀投資比較｜兩種貴金屬的特性與配置建議</a></li>
          <li><a href="/blog/gold-savings-plan">黃金儲蓄計劃與定期定額策略｜黃金存摺操作指南</a></li>
          <li><a href="/blog/gold-buying-guide-beginner-2026">第一次買黃金就上手2026｜新手必看</a></li>
          <li><a href="/blog/taiwan-gold-price-outlook-2026">台灣2026金價行情與展望</a></li>
          <li><a href="/blog/gold-selling-timing-guide">黃金變現時機分析｜什麼時候賣最好</a></li>
        </ul>
      </article>
    </>
  );
}
