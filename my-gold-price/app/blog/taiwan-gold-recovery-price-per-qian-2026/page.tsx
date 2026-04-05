import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '台灣黃金回收價一錢多少？2026年最新行情完整指南｜巧品珠寶',
  description: '2026年台灣黃金回收價一錢行情即時更新。9999純金每錢回收價計算方式、各純度換算、台北大安區巧品珠寶當日牌價查詢。免費估價，當場現金付款。',
  keywords: '台灣黃金回收價一錢2026,黃金回收價格一錢,台灣黃金回收行情,黃金一錢多少錢2026,台灣金回收價格',
  alternates: {
    canonical: 'https://www.gold-tw.com/blog/taiwan-gold-recovery-price-per-qian-2026',
  },
};

const faqs = [
  {
    q: '2026年台灣黃金回收價一錢大概多少？',
    a: '2026年3月台灣9999純金回收價約每錢16,000-17,500元，隨國際金價每日浮動。建議來電或LINE詢問當日即時報價，巧品珠寶提供最新牌價報告。'
  },
  {
    q: '一錢黃金等於幾克？',
    a: '台灣一錢等於3.75克。一兩等於5錢，即18.75克。計算時：黃金回收總價 = 克數 ÷ 3.75 × 當日一錢回收價 × 純度%。'
  },
  {
    q: '9999純金和18K金回收價一錢差多少？',
    a: '以當日金價17,000元/錢為例：9999純金約16,800元/錢；18K（75%含金量）約12,600元/錢；14K（58.5%含金量）約9,800元/錢。純度越高，回收價越接近牌價。'
  },
  {
    q: '巧品珠寶的回收價格和銀行一樣嗎？',
    a: '我們的回收報價緊盯台灣銀行黃金存摺牌價，通常高於一般銀樓。9999足金不扣耗損，當場秤重公開透明，現場現金支付。'
  },
  {
    q: '回收黃金前需要準備什麼？',
    a: '請攜帶：1）身份證正本（政府規定實名制）2）欲回收的黃金/K金/白金飾品。建議事先電話或LINE預約，告知大概數量，我們會預備現金等候。'
  }
];

export default function Page() {
  const today = new Date().toLocaleDateString('zh-TW', { year: 'numeric', month: 'long', day: 'numeric' });

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
            "headline": "台灣黃金回收價一錢多少？2026年最新行情完整指南",
            "author": { "@type": "Organization", "name": "巧品珠寶", "url": "https://www.gold-tw.com", "@id": "https://www.gold-tw.com/#business" },
            "publisher": { "@type": "Organization", "name": "巧品珠寶", "url": "https://www.gold-tw.com" },
            "datePublished": "2026-03-25",
            "dateModified": "2026-03-25T00:00:00+08:00",
            "description": "2026年台灣黃金回收價一錢行情即時更新，各純度換算，台北巧品珠寶當日牌價查詢。"
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
              { "@type": "ListItem", "position": 3, "name": "台灣黃金回收價一錢2026" }
            ]
          })
        }}
      />

      <h1>台灣黃金回收價一錢多少？2026年最新行情完整指南</h1>

      <div style={{ background: '#fffbeb', borderLeft: '4px solid #f59e0b', padding: '16px', margin: '16px 0', borderRadius: '8px' }}>
        <strong>📌 直接給答案：</strong> 2026年3月台灣9999純金回收價約每錢 <strong>16,000–17,500元</strong>，隨國際金價每日浮動。本文教你怎麼算、怎麼比、去哪裡賣最划算。
      </div>

      <h2>結論：一錢黃金值多少？先看這張表</h2>

      <table style={{ width: '100%', borderCollapse: 'collapse', margin: '1rem 0' }}>
        <thead>
          <tr style={{ background: '#f59e0b', color: 'white' }}>
            <th style={{ padding: '10px', textAlign: 'left' }}>純度</th>
            <th style={{ padding: '10px', textAlign: 'left' }}>含金量</th>
            <th style={{ padding: '10px', textAlign: 'left' }}>回收價估算（每錢）</th>
          </tr>
        </thead>
        <tbody>
          <tr style={{ borderBottom: '1px solid #ddd', background: '#fefce8' }}>
            <td style={{ padding: '10px' }}><strong>9999純金（24K）</strong></td>
            <td style={{ padding: '10px' }}>99.99%</td>
            <td style={{ padding: '10px' }}><strong>16,000–17,500元</strong></td>
          </tr>
          <tr style={{ borderBottom: '1px solid #ddd' }}>
            <td style={{ padding: '10px' }}>22K金</td>
            <td style={{ padding: '10px' }}>91.6%</td>
            <td style={{ padding: '10px' }}>14,600–16,000元</td>
          </tr>
          <tr style={{ borderBottom: '1px solid #ddd', background: '#fefce8' }}>
            <td style={{ padding: '10px' }}>18K金</td>
            <td style={{ padding: '10px' }}>75%</td>
            <td style={{ padding: '10px' }}>12,000–13,100元</td>
          </tr>
          <tr style={{ borderBottom: '1px solid #ddd' }}>
            <td style={{ padding: '10px' }}>14K金</td>
            <td style={{ padding: '10px' }}>58.5%</td>
            <td style={{ padding: '10px' }}>9,400–10,200元</td>
          </tr>
          <tr style={{ borderBottom: '1px solid #ddd', background: '#fefce8' }}>
            <td style={{ padding: '10px' }}>10K金</td>
            <td style={{ padding: '10px' }}>41.7%</td>
            <td style={{ padding: '10px' }}>6,700–7,300元</td>
          </tr>
        </tbody>
      </table>

      <p style={{ fontSize: '0.85rem', color: '#666' }}>※ 以上為估算區間，實際報價依當日國際金價而定。建議來電確認當日即時牌價。</p>

      <h2>一錢是多少克？台灣黃金計量單位完整說明</h2>
      <p>台灣買賣黃金最常用「錢」和「兩」：</p>
      <ul>
        <li><strong>1錢 = 3.75克</strong></li>
        <li><strong>1兩 = 5錢 = 18.75克</strong></li>
        <li>1台兩 ≠ 1國際盎司（國際金市用「盎司」，1盎司 = 31.1克 ≈ 8.29錢）</li>
      </ul>
      <p>你若有一條18克的黃金項鍊，換算成「錢」= 18 ÷ 3.75 = <strong>4.8錢</strong>。</p>

      <h2>2026年回收價怎麼計算？一個公式搞定</h2>
      <p>黃金回收金額公式：</p>
      <div style={{ background: '#f3f4f6', padding: '1rem', borderRadius: '8px', margin: '1rem 0', fontFamily: 'monospace' }}>
        <strong>回收金額 = 重量（錢）× 當日一錢牌價 × 純度%</strong>
      </div>

      <p><strong>舉例：</strong> 今日牌價17,000元/錢，你有一條5錢的9999純金項鍊：</p>
      <p style={{ paddingLeft: '1rem' }}>5錢 × 17,000元 × 99.99% = <strong>84,993元</strong></p>

      <p>同樣重量但換成18K金（75%含金量）：</p>
      <p style={{ paddingLeft: '1rem' }}>5錢 × 17,000元 × 75% = <strong>63,750元</strong></p>

      <h2>台灣黃金回收價2026年走勢如何？</h2>
      <p>2026年金價整體處於歷史高位，主要受以下因素影響：</p>
      <ul>
        <li><strong>美聯儲利率政策</strong>：降息預期支撐金價</li>
        <li><strong>地緣政治風險</strong>：避險需求持續</li>
        <li><strong>美元走勢</strong>：美元弱，金價強</li>
        <li><strong>央行購金</strong>：全球央行持續增持黃金儲備</li>
      </ul>
      <p>2026年3月，台灣銀行黃金存摺買入價每台兩約落在 <strong>82,000–88,000元台幣</strong>（即每錢約16,400–17,600元）。</p>

      <h2>哪裡回收黃金最划算？5個管道比較</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse', margin: '1rem 0' }}>
        <thead>
          <tr style={{ background: '#f59e0b', color: 'white' }}>
            <th style={{ padding: '10px', textAlign: 'left' }}>管道</th>
            <th style={{ padding: '10px', textAlign: 'left' }}>回收價</th>
            <th style={{ padding: '10px', textAlign: 'left' }}>缺點</th>
          </tr>
        </thead>
        <tbody>
          <tr style={{ borderBottom: '1px solid #ddd', background: '#fefce8' }}>
            <td style={{ padding: '10px' }}><strong>專業回收銀樓</strong></td>
            <td style={{ padding: '10px' }}>⭐⭐⭐⭐⭐ 最高</td>
            <td style={{ padding: '10px' }}>需親自到場</td>
          </tr>
          <tr style={{ borderBottom: '1px solid #ddd' }}>
            <td style={{ padding: '10px' }}>台灣銀行黃金存摺</td>
            <td style={{ padding: '10px' }}>⭐⭐⭐⭐ 高</td>
            <td style={{ padding: '10px' }}>僅收金條，手續費高</td>
          </tr>
          <tr style={{ borderBottom: '1px solid #ddd', background: '#fefce8' }}>
            <td style={{ padding: '10px' }}>一般珠寶銀樓</td>
            <td style={{ padding: '10px' }}>⭐⭐⭐ 中</td>
            <td style={{ padding: '10px' }}>通常扣5-10%耗損</td>
          </tr>
          <tr style={{ borderBottom: '1px solid #ddd' }}>
            <td style={{ padding: '10px' }}>當鋪</td>
            <td style={{ padding: '10px' }}>⭐⭐ 低</td>
            <td style={{ padding: '10px' }}>報價偏低，主業是放貸</td>
          </tr>
          <tr style={{ borderBottom: '1px solid #ddd', background: '#fefce8' }}>
            <td style={{ padding: '10px' }}>網路二手平台</td>
            <td style={{ padding: '10px' }}>⭐ 不穩定</td>
            <td style={{ padding: '10px' }}>詐騙風險高，等待時間長</td>
          </tr>
        </tbody>
      </table>

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
          <li><a href="/blog/gold-price-guide-2026" style={{ color: '#B8860B' }}>2026年黃金價格完整指南</a></li>
          <li><a href="/blog/gold-recycling-price-factors" style={{ color: '#B8860B' }}>影響黃金回收價格的關鍵因素</a></li>
          <li><a href="/blog/gold-recovery-faq" style={{ color: '#B8860B' }}>黃金回收常見問題FAQ</a></li>
          <li><a href="/blog/gold-scam-prevent" style={{ color: '#B8860B' }}>黃金詐騙防範指南</a></li>
        </ul>
      </div>

      <hr style={{ margin: '2rem 0' }} />

      <h2>立即查詢今日回收報價是多少？</h2>
      <p>台北大安區實體店面，10年經驗，不扣耗損，當場現金付款。</p>
      <p>📞 電話：<a href="tel:0986821626" style={{ color: '#B8860B', fontWeight: 'bold' }}>0986-821-626</a></p>
      <p>💬 LINE：@QPD888</p>
      <p>🌐 官網：<a href="https://www.gold-tw.com/" style={{ color: '#B8860B' }}>https://www.gold-tw.com/</a></p>
      <p>📍 地址：台北市大安區濟南路三段62-1號</p>
    </main>
  );
}
