import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '黃金遺產規劃2026｜黃金傳承、遺產繼承與過戶完整指南',
  description: '黃金如何寫進遺囑？如何傳承給下一代？黃金遺產的遺產稅計算、繼承流程、以及黃金作為傳家寶的規劃策略。',
  keywords: '黃金遺產,黃金傳承,遺產稅黃金,黃金繼承,遺囑黃金',
  alternates: {
    canonical: 'https://www.gold-tw.com/blog/gold-inheritance-guide',
  },
  openGraph: {
    locale: 'zh_TW',
    type: 'article',
    title: '黃金遺產規劃2026｜黃金傳承、遺產繼承與過戶完整指南',
    description: '黃金如何寫進遺囑？如何傳承給下一代？黃金遺產的遺產稅計算、繼承流程、以及黃金作為傳家寶的規劃策略。',
    url: 'https://www.gold-tw.com/blog/gold-inheritance-guide',
    siteName: '巧品珠寶',
    images: [{ url: '/og-image.webp', width: 1200, height: 630, alt: '巧品珠寶' }],
  },
};

export default function Page() {
  const articleUrl = 'https://www.gold-tw.com/blog/gold-inheritance-guide';
  const today = new Date().toISOString().split('T')[0];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: '黃金遺產規劃2026｜黃金傳承、遺產繼承與過戶完整指南',
            description: '黃金如何寫進遺囑？如何傳承給下一代？黃金遺產的遺產稅計算、繼承流程、以及黃金作為傳家寶的規劃策略。',
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
                name: '黃金要計入遺產稅嗎？',
                acceptedAnswer: { '@type': 'Answer', text: '要。黃金屬於遺產稅課稅範圍內的財產。依台灣遺產及贈與稅法規定，被繼承人死亡時所遺留的全部財產，都需要申報遺產稅。黃金的價值以死亡時的市場價值計算。2026年遺產稅免稅額為1,333萬元，超過部分按10%–20%稅率課徵。' },
              },
              {
                '@type': 'Question',
                name: '黃金傳承給下一代，用贈與好還是遺產繼承好？',
                acceptedAnswer: { '@type': 'Answer', text: '兩者各有優缺點。生前贈與：可以趁在世時將黃金交付，但要繳贈與稅（每年免稅額244元，超過部分按10%–20%課徵，且5年內不能移轉否則會被視為遺產）。遺產繼承：黃金計入遺產總額，符合條件可用遺產稅免稅額，但程序較繁瑣。建議視黃金總價值和家庭情況決定。' },
              },
              {
                '@type': 'Question',
                name: '黃金飾品可以指定特定繼承人嗎？',
                acceptedAnswer: { '@type': 'Answer', text: '可以。在遺囑中清楚記載黃金飾品的分配方式，例如「所有黃金珠寶歸長女所有」或「龍鳳鐲歸次子所有」。建議找律師撰寫正式遺囑，並對黃金飾品拍照存檔、標明價值，以便日後遺產分配。如無遺囑，則依民法規定由法定繼承人平均分配。' },
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
                name: '黃金遺產規劃指南',
                item: articleUrl,
              },
            ],
          }),
        }}
      />
      <article style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
        <h1>黃金遺產規劃2026｜黃金傳承、遺產繼承與過戶完整指南</h1>
      <div style={ background: '#fffbeb', borderLeft: '4px solid #f59e0b', padding: '16px', margin: '16px 0', borderRadius: '8px' }>
        <strong>重點摘要：</strong> 黃金如何寫進遺囑？如何傳承給下一代？黃金遺產的遺產稅計算、繼承流程、以及黃金作為傳家寶的規劃策略。
      </div>


        <div style={{ background: '#fffbeb', borderLeft: '4px solid #f59e0b', padding: '16px', margin: '16px 0', borderRadius: '8px' }}>
          <strong>直接給答案：</strong> 黃金是華人社會最受歡迎的傳家資產之一，但黃金遺產規劃需要提前安排。生前贈與和遺產繼承各有稅務優劣：生前贈與有每年244萬元的免稅額，遺產繼承則有1,333萬元的免稅額。提前寫好遺囑，清楚記載黃金分配方式，是避免家庭糾紛的最好方法。
        </div>

        <h2>為什麼黃金是最受歡迎的傳家資產？</h2>
        <p>
          在華人社會，黃金一直是財富傳承的首選工具。相對於房產、股票、存款，
          黃金有以下特點讓它更適合傳承：
        </p>
        <ul>
          <li><strong>全球通用價值：</strong>黃金在全世界都是硬通貨，兌換任何貨幣都方便</li>
          <li><strong>體積小、價值高：</strong>幾百萬的黃金可以放在一個小盒子裡，轉移方便</li>
          <li><strong>無登記問題：</strong>不像房產需要過戶、存款需要繼承程序，黃金交付相對簡單</li>
          <li><strong>情感連結：</strong>結婚金飾、傳家金飾承載著家族記憶，比金錢更有意義</li>
        </ul>

        <h2>黃金遺產稅怎麼算？</h2>
        <p>
          在台灣，黃金屬於遺產稅課稅範圍。計算方式如下：
        </p>
        <div style={{ background: '#f0fdf4', border: '1px solid #86efac', padding: '16px', borderRadius: '8px', margin: '1rem 0' }}>
          <strong>黃金遺產稅計算公式：</strong>
          <br />黃金遺產價值 = 死亡時的黃金市價（元/錢）× 黃金重量（錢）
          <br /><br />
          <strong>2026年遺產稅關鍵數字：</strong>
          <br />免稅額：1,333萬元
          <br />課徵級距：超過免稅額部分，10%–20%
        </div>

        <table style={{ width: '100%', borderCollapse: 'collapse', margin: '1.5rem 0' }}>
          <thead>
            <tr style={{ background: '#f5f0e8' }}>
              <th style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'left' }}>黃金遺產總價值</th>
              <th style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'left' }}>扣除免稅額後</th>
              <th style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'left' }}>遺產稅估算</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>500萬元</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>0（未超過免稅額）</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>0元（免稅）</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>1,500萬元</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>167萬元</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>約16.7萬元（10%）</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>3,000萬元</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>1,667萬元</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>約250萬元（10–20%累進）</td>
            </tr>
          </tbody>
        </table>
        <p style={{ fontSize: '0.85rem', color: '#888' }}>
          ※ 以2026年遺產稅規定估算，實際稅額建議諮詢專業會計師
        </p>

        <h2>生前贈與 vs 遺產繼承——哪個更省稅？</h2>

        <table style={{ width: '100%', borderCollapse: 'collapse', margin: '1.5rem 0' }}>
          <thead>
            <tr style={{ background: '#f5f0e8' }}>
              <th style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'left' }}>比較項目</th>
              <th style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'left' }}>生前贈與</th>
              <th style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'left' }}>遺產繼承</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>免稅額</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>每人每年244萬元</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>1,333萬元（免稅額）</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>稅率</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>10%–20%（扣除免稅額後）</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>10%–20%（扣除免稅額後）</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>時機</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>贈與人死亡前即可</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>被繼承人死亡後</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>程序</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>較簡單，直接交付即可</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>需遺產申報，程序較繁瑣</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>特別規定</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>贈與後5年內不能轉讓，否則視為遺產</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>無此限制</td>
            </tr>
          </tbody>
        </table>

        <h2>黃金如何寫進遺囑？</h2>
        <p>
          如果有多個繼承人（子女），建議在遺囑中清楚記載黃金的分配方式，
          避免日後糾紛。以下是遺囑中應該包含的黃金相關內容：
        </p>
        <ol>
          <li><strong>黃金財產清單：</strong>記載所有黃金的種類、數量、存放位置</li>
          <li><strong>分配方式：</strong>例如「龍鳳鐲一對歸長子，所有金飾歸次女」</li>
          <li><strong>估值：</strong>記載購買價格或約略估計價值</li>
          <li><strong>存放地點：</strong>銀行保險箱或家中</li>
          <li><strong>保險箱鑰匙位置：</strong>如果黃金在銀行保險箱</li>
        </ol>
        <p>
          <strong>建議：</strong>遺囑應找律師撰寫正式文件，並在公證人處公證。
          自書遺囑也可以，但日後容易有爭議。
        </p>

        <h2>黃金傳承的實務建議</h2>

        <h3>1. 保留購買記錄</h3>
        <p>
          保存好黃金的購買發票和保證書，上面記載了黃金的純度、重量和購買日期。
          這些文件在遺產申報時可以作為價值的參考依據，
          如果沒有文件，稽徵機關可能會按市場價格核定。
        </p>

        <h3>2. 拍攝照片存檔</h3>
        <p>
          對每一件重要的黃金飾品拍攝清晰照片，記錄型號、刻印和狀態。
          照片可以和遺囑一起保存，幫助繼承人確認黃金飾品的身份。
        </p>

        <h3>3. 告知可信賴的家人</h3>
        <p>
          最好讓至少一位可信賴的家人知道黃金的存在和存放位置。
          否則這些黃金可能在持有人過世後長期不被發現，造成浪費。
        </p>

        <h3>4. 使用銀行保險箱</h3>
        <p>
          大量黃金建議存放在銀行的保險箱，並在遺囑中註明保險箱編號和存放位置。
          保險箱的黃金在繼承時需要先完成遺產申報，才能辦理過戶或領取。
        </p>

        <h2>常見問題</h2>
        <div style={{ marginBottom: '1.5rem', borderTop: '1px solid #e5e7eb', paddingTop: '1rem' }}>
          <h3 style={{ color: '#92400e', margin: '0 0 0.5rem' }}>黃金飾品沒有發票，遺產稅怎麼算？</h3>
          <p style={{ margin: 0 }}>沒有發票的情況下，稽徵機關會按「黃金繼承發还日的市場價格」核定遺產價值。你可以提供其他證明（如：珠寶鑑定書、錄音或影片記錄），以主張較低的估計價值。如果完全沒有任何證明，則由稽徵機關依職權核定。</p>
        </div>
        <div style={{ marginBottom: '1.5rem', borderTop: '1px solid #e5e7eb', paddingTop: '1rem' }}>
          <h3 style={{ color: '#92400e', margin: '0 0 0.5rem' }}>可以把黃金先過戶給子女再移民嗎？</h3>
          <p style={{ margin: 0 }}>如果在移民前將黃金過戶給子女，屬於生前贈與，需要在過戶前完成贈與稅申報。如果在戶籍遷出後才過戶，稽徵機關可能無法課稅，但需要留意各國的遺產稅規定（有些國家對全球資產課稅）。建議在移民前與會計師討論最佳的黃金處置方案。</p>
        </div>

        <div style={{ background: '#fef3c7', border: '1px solid #f59e0b', padding: '20px', borderRadius: '8px', margin: '2rem 0', textAlign: 'center' }}>
          <strong style={{ fontSize: '1.1rem' }}>黃金估秤估價——現場XRF檢測，秤多少算多少</strong>
          <br />
          <span style={{ color: '#78350f' }}>台北大安巧品珠寶 ｜ 0986-821-626 ｜ LINE：@QPD888</span>
        </div>

        <h2>延伸閱讀</h2>
        <ul>
          <li><a href="/blog/gold-selling-checklist-2026">賣黃金前檢查清單｜估價前必做的7個步驟</a></li>
          <li><a href="/blog/gold-pawn-guide">黃金典當借款指南｜當鋪借款利息與流程</a></li>
          <li><a href="/blog/wedding-gold-guide">結婚金飾習俗與預算｜龍鳳鐲行情與選擇</a></li>
          <li><a href="/blog/gold-gift-guide">黃金送禮習俗與場合｜生日、婚禮、滿月、春節禮品</a></li>
          <li><a href="/blog/gold-buying-guide-beginner-2026">第一次買黃金就上手2026｜新手必看</a></li>
        </ul>
      </article>
    </>
  );
}
