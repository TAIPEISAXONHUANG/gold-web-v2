import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '2026台灣今日金價一兩多少錢？一錢一兩黃金換算完整指南｜巧品珠寶',
  description: '2026年台灣今日金價一兩即時行情查詢。一兩黃金等於幾克？9999純金一兩回收多少錢？附完整計算公式與各純度對照表，台北大安巧品珠寶當日牌價最透明。',
  keywords: '台灣今日金價一兩2026,今日金價一兩,金價一兩台灣,黃金一兩多少錢2026,台灣今日金價一錢一兩',
  alternates: {
    canonical: 'https://www.gold-tw.com/blog/gold-price-per-liang-taiwan-2026',
  },
};

const faqs = [
  {
    q: '2026年台灣今日金價一兩大概多少？',
    a: '2026年3月台灣9999純金一兩（5錢＝18.75克）回收價約 80,000–87,500 元，隨國際金價每日浮動。建議電話或LINE詢問巧品珠寶當日即時報價，每天開盤後更新牌價。'
  },
  {
    q: '台灣黃金一兩等於幾克？',
    a: '台灣金飾市場慣用單位：1兩＝5錢＝18.75克。換算口訣：克數 ÷ 3.75 ＝錢數；克數 ÷ 18.75 ＝兩數。與國際盎司（31.1克）不同，別搞混了。'
  },
  {
    q: '一兩18K金回收價多少？',
    a: '以今日牌價17,000元/錢為例：18K金含金量75%，一兩回收價約 5錢 × 17,000 × 75% ＝ 63,750元。實際報價依純度鑑定結果為準，巧品珠寶免費當場鑑定。'
  },
  {
    q: '台灣銀行公告的黃金牌價怎麼看？',
    a: '台灣銀行每日公告「黃金存摺買入／賣出價」單位為「台兩」，1台兩＝5錢＝18.75克。看到買入價約 82,000–88,000 元/台兩，即每錢約 16,400–17,600 元。回收店通常緊跟此牌價，頂尖業者如巧品珠寶更不額外扣耗損。'
  },
  {
    q: '賣一兩黃金要帶什麼證件？',
    a: '台灣法規規定黃金現金交易須實名制：請攜帶身份證正本。金額超過 50 萬元還需填寫大額通報表。巧品珠寶流程透明，所有文件現場當面確認。'
  }
];

export default function Page() {
  return (
    <main style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map(faq => ({
              "@type": "Question",
              "name": faq.q,
              "acceptedAnswer": { "@type": "Answer", "text": faq.a }
            }))
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": "2026台灣今日金價一兩多少錢？一錢一兩黃金換算完整指南",
            "author": { "@type": "Organization", "name": "巧品珠寶", "url": "https://www.gold-tw.com", "@id": "https://www.gold-tw.com/#business" },
            "publisher": { "@type": "Organization", "name": "巧品珠寶", "url": "https://www.gold-tw.com" },
            "datePublished": "2026-03-26",
            "dateModified": "2026-03-26T09:00:00+08:00",
            "description": "2026年台灣今日金價一兩即時行情，一兩黃金等於幾克，各純度回收價對照表，完整換算公式。"
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
              { "@type": "ListItem", "position": 3, "name": "2026台灣今日金價一兩完整指南" }
            ]
          })
        }}
      />

      <h1>2026台灣今日金價一兩多少錢？一錢一兩黃金換算完整指南</h1>

      <div style={{ background: '#fffbeb', borderLeft: '4px solid #f59e0b', padding: '16px', margin: '16px 0', borderRadius: '8px' }}>
        <strong>📌 直接給答案：</strong> 2026年3月台灣9999純金，<strong>一兩（5錢＝18.75克）回收價約 80,000–87,500 元</strong>，一錢約 16,000–17,500 元。每天隨國際金價浮動，本文教你怎麼算、對照哪個牌價才不吃虧。
      </div>

      <h2>結論：一兩黃金今日行情一覽</h2>

      <table style={{ width: '100%', borderCollapse: 'collapse', margin: '1rem 0' }}>
        <thead>
          <tr style={{ background: '#f59e0b', color: 'white' }}>
            <th style={{ padding: '10px', textAlign: 'left' }}>純度</th>
            <th style={{ padding: '10px', textAlign: 'left' }}>含金量</th>
            <th style={{ padding: '10px', textAlign: 'left' }}>一兩回收估算（元）</th>
            <th style={{ padding: '10px', textAlign: 'left' }}>一錢回收估算（元）</th>
          </tr>
        </thead>
        <tbody>
          <tr style={{ borderBottom: '1px solid #ddd', background: '#fefce8' }}>
            <td style={{ padding: '10px' }}><strong>9999純金（24K）</strong></td>
            <td style={{ padding: '10px' }}>99.99%</td>
            <td style={{ padding: '10px' }}><strong>80,000–87,500</strong></td>
            <td style={{ padding: '10px' }}><strong>16,000–17,500</strong></td>
          </tr>
          <tr style={{ borderBottom: '1px solid #ddd' }}>
            <td style={{ padding: '10px' }}>22K金</td>
            <td style={{ padding: '10px' }}>91.6%</td>
            <td style={{ padding: '10px' }}>73,200–80,100</td>
            <td style={{ padding: '10px' }}>14,640–16,020</td>
          </tr>
          <tr style={{ borderBottom: '1px solid #ddd', background: '#fefce8' }}>
            <td style={{ padding: '10px' }}>18K金</td>
            <td style={{ padding: '10px' }}>75%</td>
            <td style={{ padding: '10px' }}>60,000–65,600</td>
            <td style={{ padding: '10px' }}>12,000–13,120</td>
          </tr>
          <tr style={{ borderBottom: '1px solid #ddd' }}>
            <td style={{ padding: '10px' }}>14K金</td>
            <td style={{ padding: '10px' }}>58.5%</td>
            <td style={{ padding: '10px' }}>46,800–51,200</td>
            <td style={{ padding: '10px' }}>9,360–10,240</td>
          </tr>
          <tr style={{ borderBottom: '1px solid #ddd', background: '#fefce8' }}>
            <td style={{ padding: '10px' }}>10K金</td>
            <td style={{ padding: '10px' }}>41.7%</td>
            <td style={{ padding: '10px' }}>33,400–36,500</td>
            <td style={{ padding: '10px' }}>6,680–7,300</td>
          </tr>
        </tbody>
      </table>
      <p style={{ fontSize: '0.85rem', color: '#666' }}>※ 以上為估算區間，實際報價依當日台灣銀行牌價及純度鑑定結果而定。</p>

      <h2>台灣黃金計量單位：一兩到底幾克？</h2>
      <p>很多人搞混台灣金飾市場的計量單位，記住這三個就夠：</p>
      <ul>
        <li><strong>1錢 ＝ 3.75克</strong>（最常用的買賣單位）</li>
        <li><strong>1兩 ＝ 5錢 ＝ 18.75克</strong>（整件金飾常見報法）</li>
        <li><strong>1盎司 ＝ 31.1克 ≈ 8.29錢</strong>（國際報價用，台灣本地交易少用）</li>
      </ul>
      <p>台灣銀行公告的「黃金存摺牌價」單位是「台兩」，1台兩＝5錢＝18.75克，和上面的「兩」一樣。看到牌價 <strong>85,000 元/台兩</strong>，直接除以5就是 <strong>17,000 元/錢</strong>。</p>

      <h2>今日金價怎麼算？一個公式搞定</h2>
      <div style={{ background: '#f3f4f6', padding: '1rem', borderRadius: '8px', margin: '1rem 0', fontFamily: 'monospace' }}>
        <strong>回收金額 ＝ 重量（兩）× 當日一兩牌價 × 純度%</strong><br />
        <strong>＝ 重量（錢）× 當日一錢牌價 × 純度%</strong>
      </div>

      <p><strong>實際案例：</strong> 今日牌價 17,000 元/錢，你有一條 2 兩重的 9999 純金項鍊：</p>
      <p style={{ paddingLeft: '1rem' }}>2兩 × 85,000元 × 99.99% ＝ <strong>169,983元</strong></p>
      <p>同樣 2 兩但換成 18K 金（75%含金量）：</p>
      <p style={{ paddingLeft: '1rem' }}>2兩 × 85,000元 × 75% ＝ <strong>127,500元</strong></p>
      <p>差了 4 萬多，純度影響非常大。拿去之前先確認純度印記（999、750、585 等字樣）。</p>

      <h2>2026年台灣金價走勢：現在適合賣嗎？</h2>
      <p>2026年3月，黃金依然在歷史高位徘徊。推動金價的主要力道：</p>
      <ul>
        <li><strong>美聯儲降息預期</strong>：實質利率下滑，金的吸引力上升</li>
        <li><strong>地緣政治緊張</strong>：避險需求持續推高金價</li>
        <li><strong>央行持續購金</strong>：各國央行淨買入量創10年新高</li>
        <li><strong>美元相對走弱</strong>：台幣兌美元走強壓縮部分漲幅，但整體仍高</li>
      </ul>
      <p>結論：現在是近年少見的高點，有舊金飾或不佩戴的黃金，這個時機點脫手不虧。</p>

      <h2>哪裡賣一兩黃金最划算？管道比較</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse', margin: '1rem 0' }}>
        <thead>
          <tr style={{ background: '#f59e0b', color: 'white' }}>
            <th style={{ padding: '10px', textAlign: 'left' }}>管道</th>
            <th style={{ padding: '10px', textAlign: 'left' }}>報價水準</th>
            <th style={{ padding: '10px', textAlign: 'left' }}>注意事項</th>
          </tr>
        </thead>
        <tbody>
          <tr style={{ borderBottom: '1px solid #ddd', background: '#fefce8' }}>
            <td style={{ padding: '10px' }}><strong>專業黃金回收業者</strong></td>
            <td style={{ padding: '10px' }}>⭐⭐⭐⭐⭐ 最高</td>
            <td style={{ padding: '10px' }}>認明不扣耗損、當場現金</td>
          </tr>
          <tr style={{ borderBottom: '1px solid #ddd' }}>
            <td style={{ padding: '10px' }}>台灣銀行黃金存摺</td>
            <td style={{ padding: '10px' }}>⭐⭐⭐⭐ 高</td>
            <td style={{ padding: '10px' }}>只收標準金條，飾金不收</td>
          </tr>
          <tr style={{ borderBottom: '1px solid #ddd', background: '#fefce8' }}>
            <td style={{ padding: '10px' }}>傳統銀樓</td>
            <td style={{ padding: '10px' }}>⭐⭐⭐ 中等</td>
            <td style={{ padding: '10px' }}>常見扣 5–10% 耗損費用</td>
          </tr>
          <tr style={{ borderBottom: '1px solid #ddd' }}>
            <td style={{ padding: '10px' }}>當鋪</td>
            <td style={{ padding: '10px' }}>⭐⭐ 低</td>
            <td style={{ padding: '10px' }}>主業放貸，收金報價保守</td>
          </tr>
          <tr style={{ borderBottom: '1px solid #ddd', background: '#fefce8' }}>
            <td style={{ padding: '10px' }}>網拍二手平台</td>
            <td style={{ padding: '10px' }}>⭐ 不穩定</td>
            <td style={{ padding: '10px' }}>詐騙多、成交慢、風險高</td>
          </tr>
        </tbody>
      </table>

      <p>巧品珠寶的做法：<strong>不扣耗損、秤重全程公開、當場現金付款</strong>。你盯著看，我們不怕。</p>

      <h2>常見問題 FAQ</h2>
      {faqs.map((faq, index) => (
        <div key={index} style={{ marginBottom: '1rem', border: '1px solid #e5e7eb', borderRadius: '8px', overflow: 'hidden' }}>
          <div style={{ background: '#fefce8', padding: '0.75rem 1rem', fontWeight: 'bold' }}>
            ❓ {faq.q}
          </div>
          <div style={{ padding: '0.75rem 1rem', background: '#fff' }}>
            💡 {faq.a}
          </div>
        </div>
      ))}

      <div style={{ margin: '2rem 0', padding: '1.5rem', background: '#FEF9E7', borderRadius: '8px', borderLeft: '4px solid #B8860B' }}>
        <strong>延伸閱讀：</strong>
        <ul style={{ marginTop: '0.5rem', paddingLeft: '1.5rem' }}>
          <li><a href="/blog/taiwan-gold-recovery-price-per-qian-2026" style={{ color: '#B8860B' }}>台灣黃金回收價一錢完整指南 2026</a></li>
          <li><a href="/blog/gold-recycling-price-factors" style={{ color: '#B8860B' }}>影響黃金回收價格的關鍵因素</a></li>
          <li><a href="/blog/gold-price-forecast-2026" style={{ color: '#B8860B' }}>2026年黃金價格預測分析</a></li>
          <li><a href="/blog/gold-scam-prevent" style={{ color: '#B8860B' }}>黃金回收詐騙手法與防範指南</a></li>
        </ul>
      </div>

      <hr style={{ margin: '2rem 0' }} />

      <h2>📞 立即查詢今日一兩報價</h2>
      <p>台北大安區實體店，10年專業黃金回收，不扣耗損，現場現金支付。</p>
      <p>📞 電話：<a href="tel:0986821626" style={{ color: '#B8860B', fontWeight: 'bold' }}>0986-821-626</a></p>
      <p>💬 LINE：<a href="https://line.me/ti/p/@QPD888" style={{ color: '#B8860B' }}>@QPD888</a></p>
      <p>🌐 官網：<a href="https://www.gold-tw.com/" style={{ color: '#B8860B' }}>https://www.gold-tw.com/</a></p>
      <p>📍 地址：台北市大安區濟南路三段62-1號</p>
    </main>
  );
}
