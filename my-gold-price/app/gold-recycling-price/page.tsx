import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '黃金回收行情2026｜各純度黃金回收價格表｜巧品珠寶',
  description: '2026即時更新黃金回收行情！今日金價一錢多少一次看清楚：9999純金、916金、18K、14K各純度計價公式透明。台北黃金回收推薦巧品珠寶，不扣耗損・老闆親自鑑定，電話 0986-821-626。',
  keywords: '黃金回收行情,黃金回收價格,黃金回收價格表,台北黃金回收行情2026',
  alternates: {
    canonical: 'https://www.gold-tw.com/gold-recycling-price',
  },
};

export default function GoldRecyclingPrice() {
  return (
    <main style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "黃金回收行情2026｜各純度黃金回收價格表｜巧品珠寶",
            "description": "2026年台北黃金回收行情！各純度回收價格一次看。",
            "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.gold-tw.com/gold-recycling-price" },
            "author": { "@type": "Organization", "name": "巧品珠寶", "url": "https://www.gold-tw.com" },
            "publisher": { "@type": "Organization", "name": "巧品珠寶", "url": "https://www.gold-tw.com" },
            "image": { "@type": "ImageObject", "url": "https://wsrv.nl/?url=https://drive.google.com/uc?id=1ASz1v5ZBQ-WV572r-BC4gZRuraywgKKv&w=1200&output=webp&q=80" },
            "datePublished": "2026-03-15T00:00:00+08:00",
            "dateModified": "2026-03-19T13:54:00+08:00"
          })
        }}
      />

      <h1>💰 黃金回收價格怎麼算？</h1>
      
      <h2>📐 黃金回收計算公式</h2>
      <div style={{ background: '#fff8e1', padding: '1.5rem', borderRadius: '10px', marginBottom: '1.5rem' }}>
        <p style={{ fontSize: '1.2rem', fontWeight: 'bold', margin: 0 }}>
          回收金額 = 重量（錢）× 當日牌價 × 純度
        </p>
      </div>

      <h2>📊 重量單位換算</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <tr style={{ background: '#f5f5f5' }}>
          <th style={{ padding: '10px', border: '1px solid #ddd' }}>單位</th>
          <th style={{ padding: '10px', border: '1px solid #ddd' }}>等於</th>
        </tr>
        <tr>
          <td style={{ padding: '10px', border: '1px solid #ddd' }}>1 兩</td>
          <td style={{ padding: '10px', border: '1px solid #ddd' }}>10 錢</td>
        </tr>
        <tr>
          <td style={{ padding: '10px', border: '1px solid #ddd' }}>1 錢</td>
          <td style={{ padding: '10px', border: '1px solid #ddd' }}>3.75 公克</td>
        </tr>
        <tr>
          <td style={{ padding: '10px', border: '1px solid #ddd' }}>1 盎司</td>
          <td style={{ padding: '10px', border: '1px solid #ddd' }}>8.294 錢</td>
        </tr>
      </table>

      <h2>✨ K金純度對照</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <tr style={{ background: '#f5f5f5' }}>
          <th style={{ padding: '10px', border: '1px solid #ddd' }}>K數</th>
          <th style={{ padding: '10px', border: '1px solid #ddd' }}>純度</th>
          <th style={{ padding: '10px', border: '1px solid #ddd' }}>回收比例</th>
        </tr>
        <tr>
          <td style={{ padding: '10px', border: '1px solid #ddd' }}>24K</td>
          <td style={{ padding: '10px', border: '1px solid #ddd' }}>99.99%</td>
          <td style={{ padding: '10px', border: '1px solid #ddd' }}>100%</td>
        </tr>
        <tr>
          <td style={{ padding: '10px', border: '1px solid #ddd' }}>18K</td>
          <td style={{ padding: '10px', border: '1px solid #ddd' }}>75%</td>
          <td style={{ padding: '10px', border: '1px solid #ddd' }}>75%</td>
        </tr>
        <tr>
          <td style={{ padding: '10px', border: '1px solid #ddd' }}>14K</td>
          <td style={{ padding: '10px', border: '1px solid #ddd' }}>58.5%</td>
          <td style={{ padding: '10px', border: '1px solid #ddd' }}>58.5%</td>
        </tr>
        <tr>
          <td style={{ padding: '10px', border: '1px solid #ddd' }}>10K</td>
          <td style={{ padding: '10px', border: '1px solid #ddd' }}>41.7%</td>
          <td style={{ padding: '10px', border: '1px solid #ddd' }}>41.7%</td>
        </tr>
      </table>

      <h2>⚠️ 扣重要注意</h2>
      <ul>
        <li><strong>正常耗損：</strong>1-3%（火燒檢測後的正常損耗）</li>
        <li><strong>扣超過5%：</strong>可能不合理</li>
        <li><strong>扣秤：</strong>正規店家不應該扣秤</li>
        <li><strong>我們承諾：</strong>不扣秤、不扣耗損公開透明</li>
      </ul>

      <h2>💡 計算範例</h2>
      <div style={{ background: '#f0f0f0', padding: '1rem', borderRadius: '8px' }}>
        <p><strong>範例：</strong>5錢的24K金飾</p>
        <p>5錢 × $19,770 × 100% = <strong>$98,850</strong></p>
        <hr />
        <p><strong>範例：</strong>3錢的18K金飾</p>
        <p>3錢 × $19,770 × 75% = <strong>$44,482</strong></p>
      </div>

      {/* ===== 各重量24K純金回收試算表 ===== */}
      <h2>📋 各重量24K純金回收試算表</h2>
      <p style={{ color: '#666', marginBottom: '0.5rem' }}>
        以下以參考牌價 <strong>$19,770／錢</strong> 為基準試算，實際金額依當日行情為準。
      </p>
      <div style={{ overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '1.5rem' }}>
          <thead>
            <tr style={{ background: '#f5f5f5' }}>
              <th style={{ padding: '10px', border: '1px solid #ddd', whiteSpace: 'nowrap' }}>重量</th>
              <th style={{ padding: '10px', border: '1px solid #ddd', whiteSpace: 'nowrap' }}>回收金額（24K）</th>
              <th style={{ padding: '10px', border: '1px solid #ddd', whiteSpace: 'nowrap' }}>回收金額（18K）</th>
              <th style={{ padding: '10px', border: '1px solid #ddd', whiteSpace: 'nowrap' }}>回收金額（14K）</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>1 錢</td>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>$19,770</td>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>$14,828</td>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>$11,565</td>
            </tr>
            <tr>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>2 錢</td>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>$39,540</td>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>$29,655</td>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>$23,131</td>
            </tr>
            <tr>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>3 錢</td>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>$59,310</td>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>$44,483</td>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>$34,696</td>
            </tr>
            <tr>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>4 錢</td>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>$79,080</td>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>$59,310</td>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>$46,262</td>
            </tr>
            <tr>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>5 錢（半兩）</td>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>$98,850</td>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>$74,138</td>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>$57,827</td>
            </tr>
            <tr>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>6 錢</td>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>$118,620</td>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>$88,965</td>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>$69,393</td>
            </tr>
            <tr>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>7 錢</td>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>$138,390</td>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>$103,793</td>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>$80,958</td>
            </tr>
            <tr>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>8 錢</td>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>$158,160</td>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>$118,620</td>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>$92,524</td>
            </tr>
            <tr>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>9 錢</td>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>$177,930</td>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>$133,448</td>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>$104,089</td>
            </tr>
            <tr style={{ background: '#fff8e1', fontWeight: 'bold' }}>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>1 兩（10 錢）</td>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>$197,700</td>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>$148,275</td>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>$115,655</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p style={{ fontSize: '0.9rem', color: '#888' }}>
        ※ 18K 以牌價 ×75% 計算；14K 以牌價 ×58.5% 計算。實際回收價格會因店家而異，建議多方比較。
      </p>

      {/* ===== 各類黃金飾品回收價比較 ===== */}
      <h2>💍 各類黃金飾品回收價比較</h2>
      <p style={{ color: '#666', marginBottom: '0.5rem' }}>
        不同品項的黃金，回收時的價格與條件也不同。以下為常見品項整理：
      </p>
      <div style={{ overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '1.5rem' }}>
          <thead>
            <tr style={{ background: '#f5f5f5' }}>
              <th style={{ padding: '10px', border: '1px solid #ddd' }}>品項</th>
              <th style={{ padding: '10px', border: '1px solid #ddd' }}>常見重量範圍</th>
              <th style={{ padding: '10px', border: '1px solid #ddd' }}>估算回收金額</th>
              <th style={{ padding: '10px', border: '1px solid #ddd' }}>備註</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>金條</td>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>1兩～10兩</td>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>$197,700～$1,977,000</td>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>純度高、回收價最佳</td>
            </tr>
            <tr>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>金幣</td>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>1錢～5錢</td>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>$19,770～$98,850</td>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>依品牌可能有溢價</td>
            </tr>
            <tr>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>金戒指</td>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>0.5錢～3錢</td>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>$9,885～$59,310</td>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>注意是否鑲嵌寶石</td>
            </tr>
            <tr>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>金項鍊</td>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>1錢～5錢</td>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>$19,770～$98,850</td>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>需確認K數</td>
            </tr>
            <tr>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>金手鍊</td>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>1錢～4錢</td>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>$19,770～$79,080</td>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>空心款重量較輕</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p style={{ fontSize: '0.9rem', color: '#888' }}>
        ※ 以上金額以24K、牌價$19,770／錢試算，實際依當日行情與純度調整。
      </p>

      {/* ===== 影響回收價格的5大因素 ===== */}
      <h2>🔍 影響回收價格的5大因素</h2>
      <div style={{ background: '#fff8e1', padding: '1.5rem', borderRadius: '10px', marginBottom: '1.5rem' }}>
        <ol style={{ paddingLeft: '1.2rem', margin: 0, lineHeight: '2' }}>
          <li>
            <strong>國際金價走勢：</strong>
            黃金回收價格直接連動國際現貨金價（XAU/USD），當國際金價上漲時，國內回收價也會隨之提高。建議關注每日盤勢變化，在金價高點時出售較為有利。
          </li>
          <li>
            <strong>黃金純度：</strong>
            24K（9999純金）回收價最高，18K只有75%、14K只有58.5%。K金混合了其他金屬，實際含金量較低，因此回收價格也會打折計算。
          </li>
          <li>
            <strong>重量：</strong>
            重量越重，回收總金額越高。部分店家對大量回收可能提供較優惠的價格。務必確認秤量工具經過公正校驗，避免短秤。
          </li>
          <li>
            <strong>回收店家選擇：</strong>
            不同店家的回收牌價可能有 $50～$200／錢的價差。建議選擇公開透明的店家，且當場報價、不收額外手續費。銀樓、當鋪、線上平台價格皆不同，多方比較才能賣到好價格。
          </li>
          <li>
            <strong>黃金品項（金條 vs 金飾）：</strong>
            金條因純度高、無工藝附加成本，回收價通常最接近國際金價。金飾因含有焊接點或設計工費，部分店家會酌扣工資，導致實際回收價稍低。
          </li>
        </ol>
      </div>

      {/* ===== 黃金回收常見陷阱與注意事項 ===== */}
      <h2>🛡️ 黃金回收常見陷阱與注意事項</h2>
      <p style={{ color: '#666', marginBottom: '0.5rem' }}>
        賣黃金前，請務必留意以下8大重點，保障自身權益：
      </p>
      <div style={{ background: '#f0f0f0', padding: '1.5rem', borderRadius: '8px', marginBottom: '1.5rem' }}>
        <ul style={{ listStyle: 'none', paddingLeft: 0, margin: 0, lineHeight: '2.2' }}>
          <li>✅ <strong>確認秤重工具是否經過政府認證校驗</strong>，避免短秤損失。</li>
          <li>✅ <strong>當面火燒鑑定純度</strong>，正規店家會當場檢測，不會要求拿去後方處理。</li>
          <li>✅ <strong>問清楚是否有扣耗損、手續費、熔煉費</strong>，部分店家會額外扣除 3%～5% 費用。</li>
          <li>✅ <strong>確認報價基準是「買進價」還是「回收價」</strong>，兩者通常有 $200～$500／錢的差距。</li>
          <li>✅ <strong>索取正式交易明細或收據</strong>，載明重量、純度、單價與總金額。</li>
          <li>✅ <strong>避免路邊臨時攤位或來路不明的回收商</strong>，選擇有實體店面、營業登記的店家。</li>
          <li>✅ <strong>多比較 2～3 家報價再決定</strong>，不同店家價差可達數百元至數千元。</li>
          <li>✅ <strong>留意「高價收購」廣告</strong>，實際到場後可能以各種名目扣減，最終拿到的金額遠低於廣告價。</li>
        </ul>
      </div>

      {/* ===== 常見問題 FAQ ===== */}
      <h2>❓ 黃金回收常見問題 FAQ</h2>
      <div style={{ marginBottom: '1.5rem' }}>
        <div style={{ background: '#fff8e1', padding: '1rem 1.5rem', borderRadius: '8px', marginBottom: '1rem' }}>
          <p style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>Q1：回收價跟銀行賣出價一樣嗎？</p>
          <p style={{ margin: 0 }}>
            不一樣。銀行的「賣出價」是銀行賣金給你的價格，通常較高；「買入價」才是銀行向你買回的價格。而銀樓／回收商的回收價格通常介於銀行買入價附近，但各家報價有差異。一般來說，銀樓回收的價格會略高於銀行買入價，因為中間沒有銀行的管理成本。
          </p>
        </div>

        <div style={{ background: '#f5f5f5', padding: '1rem 1.5rem', borderRadius: '8px', marginBottom: '1rem' }}>
          <p style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>Q2：壞掉的金飾可以回收嗎？</p>
          <p style={{ margin: 0 }}>
            可以。黃金回收看的是「含金量」而不是外觀，即使金飾斷裂、變形、褪色，只要含金量足夠，都可以回收。壞掉的金飾回收價格與完好的金飾相同，因為最終都是熔煉成金塊再利用。
          </p>
        </div>

        <div style={{ background: '#fff8e1', padding: '1rem 1.5rem', borderRadius: '8px', marginBottom: '1rem' }}>
          <p style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>Q3：K金回收價怎麼算？</p>
          <p style={{ margin: 0 }}>
            K金回收價 = 重量（錢） × 當日牌價 × 純度比例。例如 18K 金的純度為 75%，若今日牌價 $19,770，1錢 18K 金的回收價約為 $19,770 × 75% = $14,828。14K 金則為 $19,770 × 58.5% = $11,565。
          </p>
        </div>

        <div style={{ background: '#f5f5f5', padding: '1rem 1.5rem', borderRadius: '8px', marginBottom: '1rem' }}>
          <p style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>Q4：回收黃金需要帶什麼證件？</p>
          <p style={{ margin: 0 }}>
            一般銀樓回收黃金不需要特別證件，帶著要回收的黃金即可。但若金額較大（超過 50 萬元），部分店家可能會要求出示身分證以配合洗錢防制法規。建議隨身攜帶身分證件以備不時之需。
          </p>
        </div>

        <div style={{ background: '#fff8e1', padding: '1rem 1.5rem', borderRadius: '8px', marginBottom: '1rem' }}>
          <p style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>Q5：黃金回收有最低重量限制嗎？</p>
          <p style={{ margin: 0 }}>
            大部分銀樓沒有最低重量限制，即使只有 0.1 錢也可以回收。不過有些店家可能因為金額太小而不願受理。巧品珠寶不限最低重量，歡迎攜帶任何重量的黃金前來估價。
          </p>
        </div>

        <div style={{ background: '#f5f5f5', padding: '1rem 1.5rem', borderRadius: '8px', marginBottom: '1rem' }}>
          <p style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>Q6：回收黃金要繳稅嗎？</p>
          <p style={{ margin: 0 }}>
            個人出售黃金屬於財產交易所得，依稅法規定需申報所得稅。若為一時貿易所得，需計入個人綜合所得稅。不過一般小額（數萬元以內）的個人金飾回收，實務上多由買受人（店家）處理相關申報。大額交易建議諮詢稅務專家。
          </p>
        </div>

        <div style={{ background: '#fff8e1', padding: '1rem 1.5rem', borderRadius: '8px', marginBottom: '1rem' }}>
          <p style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>Q7：金飾有寶石怎麼算？</p>
          <p style={{ margin: 0 }}>
            鑲有寶石的金飾，回收時只計算黃金部分的重量與價值，寶石通常不計價或僅象徵性估價。店家會先將寶石取下，單獨秤量黃金部分後才報價。部分高價寶石（如鑽石）可另外估價回收，但需視店家服務項目而定。
          </p>
        </div>

        <div style={{ background: '#f5f5f5', padding: '1rem 1.5rem', borderRadius: '8px', marginBottom: '1rem' }}>
          <p style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>Q8：什麼時候賣黃金最划算？</p>
          <p style={{ margin: 0 }}>
            黃金價格受國際局勢、美元匯率、通膨預期等因素影響。一般來說，地緣政治緊張、經濟不確定性升高、美元走弱時，金價容易上漲。建議長期關注金價走勢，選擇價格相對高點時出售。也可以參考巧品珠寶每日更新的即時金價，掌握最佳賣出時機。
          </p>
        </div>
      </div>

      {/* ===== 回收流程簡介 ===== */}
      <h2>🔄 巧品珠寶黃金回收流程</h2>
      <div style={{ background: '#fff8e1', padding: '1.5rem', borderRadius: '10px', marginBottom: '1.5rem' }}>
        <ol style={{ paddingLeft: '1.2rem', margin: 0, lineHeight: '2.2' }}>
          <li><strong>攜帶黃金至店面</strong> — 台北市實體門市，免預約直接到場。</li>
          <li><strong>現場秤重</strong> — 使用政府認證電子秤，當面秤量不扣秤。</li>
          <li><strong>火燒鑑定純度</strong> — 老闆親自鑑定，當場確認黃金成色。</li>
          <li><strong>即時報價</strong> — 依當日國際金價即時報價，公開透明。</li>
          <li><strong>確認成交，當場現金交付</strong> — 價格滿意即可成交，現金或轉帳皆可。</li>
        </ol>
      </div>

      {/* ===== 內部連結區塊 ===== */}
      <h2>📖 更多黃金回收相關資訊</h2>
      <div style={{ background: '#f5f5f5', padding: '1.5rem', borderRadius: '10px', marginBottom: '1.5rem' }}>
        <p style={{ fontWeight: 'bold', marginBottom: '0.8rem' }}>延伸閱讀：</p>
        <ul style={{ paddingLeft: '1.2rem', margin: 0, lineHeight: '2.2' }}>
          <li>
            <a href="/gold-recovery-guide" style={{ color: '#B8860B' }}>黃金回收完整指南</a> — 從估價到成交的完整流程解說
          </li>
          <li>
            <a href="/sell-gold-guide" style={{ color: '#B8860B' }}>賣黃金攻略</a> — 掌握賣金時機與注意事項
          </li>
          <li>
            <a href="/today-gold-price" style={{ color: '#B8860B' }}>今日金價查詢</a> — 即時更新國際金價與台灣銀樓牌價
          </li>
          <li>
            <a href="/gold-price-compare" style={{ color: '#B8860B' }}>金價比較</a> — 各大銀樓、銀行黃金買賣價格比較
          </li>
          <li>
            <a href="/blog/gold-9999-recovery" style={{ color: '#B8860B' }}>9999純金回收攻略</a> — 純金回收價格與流程詳解
          </li>
          <li>
            <a href="/blog/karat-gold-recovery" style={{ color: '#B8860B' }}>K金回收價格怎麼算？</a> — 18K、14K金回收計算方式
          </li>
          <li>
            <a href="/blog/gold-calculator" style={{ color: '#B8860B' }}>黃金試算工具</a> — 線上快速計算黃金回收金額
          </li>
          <li>
            <a href="/blog/sell-gold-tips" style={{ color: '#B8860B' }}>賣黃金注意事項</a> — 避免吃虧的實用技巧
          </li>
          <li>
            <a href="/blog/gold-jewelry-types-recovery" style={{ color: '#B8860B' }}>各類金飾回收價格比較</a> — 金條、金幣、金飾回收差異
          </li>
        </ul>
      </div>

      <h2>📞 立即詢問當日行情</h2>
      <p>📞 電話：0986-821-626</p>
      <p>💬 LINE：@SDN6jpk</p>

      <a href="/" style={{ color: '#B8860B', fontSize: '1.2rem' }}>
        → 立即查詢今日黃金回收報價
      </a>
    </main>
  );
}
