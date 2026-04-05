import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '台灣今日金價每錢2026｜最新黃金每台錢報價・換算教學',
  description: '2026年台灣黃金每台錢即時報價。一台錢等於3.75公克，今日9999純金每錢約19,000-19,500元。含計算公式、各純度換算表，巧品珠寶免費估價0986-821-626。',
  keywords: '台灣今日金價每錢2026,黃金每台錢,黃金每錢價格,今日金價每錢,台灣黃金每錢報價',
  alternates: {
    canonical: 'https://www.gold-tw.com/blog/taiwan-gold-price-per-qian-every-2026',
  },
  openGraph: {
    type: 'article',
    publishedTime: '2026-04-01T00:00:00+08:00',
    modifiedTime: '2026-04-01T00:00:00+08:00',
    title: '台灣今日金價每錢2026｜最新黃金每台錢報價・換算教學',
    description: '2026年台灣黃金每台錢即時報價。一台錢等於3.75公克，今日9999純金每錢約19,000-19,500元。含計算公式、各純度換算表，巧品珠寶免費估價0986-821-626。',
    siteName: '巧品珠寶',
    url: 'https://www.gold-tw.com/blog/taiwan-gold-price-per-qian-every-2026',
  },
}

// lastModified: 2026-03-19
export default function Page() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "2026年台灣黃金每台錢多少錢？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "2026年4月台灣黃金每台錢參考報價：9999純金約19,000-19,500元、916金（傳統金飾）約17,400-17,900元、18K金約14,200-14,600元、14K金約11,100-11,400元。實際價格每日依國際金價浮動，建議電話0986-821-626詢問即時報價。"
        }
      },
      {
        "@type": "Question",
        "name": "一台錢黃金等於幾公克？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "一台錢 = 3.75公克。這是台灣傳統重量單位，黃金買賣通常以台錢計價。換算方式：如果你手上有10公克黃金，10 ÷ 3.75 = 2.67台錢。"
        }
      },
      {
        "@type": "Question",
        "name": "台灣黃金每錢報價和銀行牌告價有什麼差別？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "台灣銀行黃金牌告價以「公克」計，而市場上回收業者和銀樓通常以「台錢」報價。換算：1台錢 = 3.75公克。台灣銀行賣出價約5,100元/公克，回收業者收購價約4,990-5,120元/公克（9999純金），兩者差距約2-4%是正常現象。"
        }
      },
      {
        "@type": "Question",
        "name": "為什麼每家報的每錢價格不一樣？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "差異主要來自三點：1）報價時間不同，國際金價每分鐘都在變；2）是否扣耗損，有些店會扣5%火耗讓實拿金額變少；3）純度鑑定結果不同。建議同一時間比較3家報價，差距超過3%就要小心。"
        }
      },
      {
        "@type": "Question",
        "name": "黃金每台錢報價怎麼自己計算？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "計算公式：回收金額 = 重量（台錢）× 當日每錢收購價。例如：3台錢的9999純金，當日牌價19,200元/錢，可回收3 × 19,200 = 57,600元。注意要確認業者是否「不扣耗損」，否則實領金額會打折。"
        }
      }
    ]
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "首頁", "item": "https://www.gold-tw.com" },
      { "@type": "ListItem", "position": 2, "name": "知識專欄", "item": "https://www.gold-tw.com/blog" },
      { "@type": "ListItem", "position": 3, "name": "台灣今日金價每錢2026｜最新黃金每台錢報價・換算教學", "item": "https://www.gold-tw.com/blog/taiwan-gold-price-per-qian-every-2026" }
    ]
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": "台灣今日金價每錢2026｜最新黃金每台錢報價・換算教學",
            "author": { "@type": "Person", "name": "鑑定師L" },
            "publisher": { "@type": "Organization", "name": "巧品珠寶", "url": "https://www.gold-tw.com" },
            "datePublished": "2026-04-01",
            "dateModified": "2026-04-01",
            "description": "2026年台灣黃金每台錢即時報價。一台錢等於3.75公克，今日9999純金每錢約19,000-19,500元。"
          })
        }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <main style={{ padding: '2rem', maxWidth: '860px', margin: '0 auto' }}>

        <h1>台灣今日金價每錢2026：最新報價・換算教學・回收行情</h1>
        <p style={{ color: '#666', fontSize: '0.9rem' }}>最後更新：2026年4月1日｜巧品珠寶整理</p>

        <div style={{ background: '#FEF3C7', padding: '1rem 1.5rem', borderRadius: '8px', margin: '1.5rem 0' }}>
          <strong>本文重點：</strong>2026年最新黃金每台錢報價、各純度換算表、計算公式、以及避開「扣耗損」的方法。
        </div>

        <p>
          台灣買賣黃金習慣用「台錢」計價，一台錢 = 3.75公克。你要搞清楚這個單位，才不會被業者報個「每公克4,800元」搞得一頭霧水。
        </p>
        <p>
          2026年進入第二季，國際金價仍維持在高位。以下是今日各純度黃金每台錢的參考行情，數字每天跟著國際盤動，差異通常在1-3%以內。
        </p>

        <h2>2026年台灣黃金每台錢最新報價表是多少？</h2>
        <p>以下報價以2026年4月第一週國際金價（約3,100美元/盎司）為基準換算：</p>

        <table style={{ width: '100%', borderCollapse: 'collapse', margin: '1rem 0' }}>
          <thead>
            <tr style={{ background: '#B8860B', color: 'white' }}>
              <th style={{ padding: '12px', border: '1px solid #ddd', textAlign: 'left' }}>黃金種類</th>
              <th style={{ padding: '12px', border: '1px solid #ddd', textAlign: 'center' }}>純度</th>
              <th style={{ padding: '12px', border: '1px solid #ddd', textAlign: 'center' }}>每台錢報價（元）</th>
              <th style={{ padding: '12px', border: '1px solid #ddd', textAlign: 'center' }}>每公克換算（元）</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>9999純金（24K）</td>
              <td style={{ padding: '10px', border: '1px solid #ddd', textAlign: 'center' }}>99.99%</td>
              <td style={{ padding: '10px', border: '1px solid #ddd', textAlign: 'center' }}>約 $19,000–19,500</td>
              <td style={{ padding: '10px', border: '1px solid #ddd', textAlign: 'center' }}>約 $4,990–5,120</td>
            </tr>
            <tr style={{ background: '#fafafa' }}>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>999純金</td>
              <td style={{ padding: '10px', border: '1px solid #ddd', textAlign: 'center' }}>99.9%</td>
              <td style={{ padding: '10px', border: '1px solid #ddd', textAlign: 'center' }}>約 $18,980–19,480</td>
              <td style={{ padding: '10px', border: '1px solid #ddd', textAlign: 'center' }}>約 $4,985–5,115</td>
            </tr>
            <tr>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>916金（傳統金飾）</td>
              <td style={{ padding: '10px', border: '1px solid #ddd', textAlign: 'center' }}>91.6%</td>
              <td style={{ padding: '10px', border: '1px solid #ddd', textAlign: 'center' }}>約 $17,400–17,900</td>
              <td style={{ padding: '10px', border: '1px solid #ddd', textAlign: 'center' }}>約 $4,570–4,700</td>
            </tr>
            <tr style={{ background: '#fafafa' }}>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>18K金（750）</td>
              <td style={{ padding: '10px', border: '1px solid #ddd', textAlign: 'center' }}>75%</td>
              <td style={{ padding: '10px', border: '1px solid #ddd', textAlign: 'center' }}>約 $14,200–14,600</td>
              <td style={{ padding: '10px', border: '1px solid #ddd', textAlign: 'center' }}>約 $3,730–3,830</td>
            </tr>
            <tr>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>14K金（585）</td>
              <td style={{ padding: '10px', border: '1px solid #ddd', textAlign: 'center' }}>58.5%</td>
              <td style={{ padding: '10px', border: '1px solid #ddd', textAlign: 'center' }}>約 $11,100–11,400</td>
              <td style={{ padding: '10px', border: '1px solid #ddd', textAlign: 'center' }}>約 $2,910–2,990</td>
            </tr>
            <tr style={{ background: '#fafafa' }}>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>10K金（417）</td>
              <td style={{ padding: '10px', border: '1px solid #ddd', textAlign: 'center' }}>41.7%</td>
              <td style={{ padding: '10px', border: '1px solid #ddd', textAlign: 'center' }}>約 $7,900–8,100</td>
              <td style={{ padding: '10px', border: '1px solid #ddd', textAlign: 'center' }}>約 $2,070–2,130</td>
            </tr>
          </tbody>
        </table>
        <p style={{ fontSize: '0.85rem', color: '#888' }}>※ 1台錢 = 3.75公克。以上為參考行情，實際以當日國際金價為準。</p>

        <h2>每台錢換算公式，一看就懂怎麼算？</h2>
        <p>很多人搞不清楚「台錢、公克、盎司」到底怎麼換。記住這三個數字就夠了：</p>
        <ul style={{ lineHeight: '2' }}>
          <li><strong>1台錢 = 3.75公克</strong>（台灣黃金交易標準）</li>
          <li><strong>1盎司 = 31.1公克 ≒ 8.29台錢</strong></li>
          <li><strong>1兩 = 10台錢 = 37.5公克</strong></li>
        </ul>

        <div style={{ background: '#f9f9f9', padding: '1.5rem', borderRadius: '8px', border: '1px solid #ddd', margin: '1rem 0' }}>
          <p style={{ fontSize: '1.1rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>回收金額計算公式</p>
          <p><strong>回收金額 = 重量（台錢）× 當日每錢收購價</strong></p>
          <p><strong>實例：</strong></p>
          <ul>
            <li>2台錢的916金項鍊 → 2 × 17,600 = <strong>35,200元</strong></li>
            <li>1.5台錢的18K金戒指 → 1.5 × 14,400 = <strong>21,600元</strong></li>
            <li>5台錢的9999金條 → 5 × 19,200 = <strong>96,000元</strong></li>
          </ul>
          <p style={{ color: '#d00', marginTop: '0.5rem' }}>注意：業者若扣5%耗損，35,200元實領只剩33,440元，憑空少1,760元！</p>
        </div>

        <h2>三、每錢報價怎麼查最準？</h2>
        <p>
          有三個地方可以對照：台灣銀行黃金牌價（官方，以公克計）、各大銀樓官網、或直接打電話給回收業者詢問當下報價。
        </p>
        <p>
          台灣銀行掛牌是「賣出價」，比市場回收價高約3-5%。如果業者給你的每錢報價遠低於台灣銀行牌價的75%（換算後），代表對方在壓低報價，可以換一家比較。
        </p>
        <p>
          實務上，同一天在台北大安區詢問3家業者，每台錢報價差距通常在200-400元以內。差超過800元就要問清楚原因。
        </p>

        <h2>影響每台錢報價的關鍵因素是多少？</h2>
        <ol style={{ lineHeight: '2' }}>
          <li><strong>國際金價（美元/盎司）</strong>：這是最根本的基準，每天都不同。</li>
          <li><strong>美元兌台幣匯率</strong>：美元升值時，台幣換算的黃金價格也跟著漲。</li>
          <li><strong>黃金純度</strong>：鑑定結果直接影響每錢報價，916和750差了20%。</li>
          <li><strong>是否扣耗損</strong>：看起來報價一樣，但扣了5%耗損的業者實際給你的少了一截。</li>
          <li><strong>業者利潤空間</strong>：各家會保留不同利潤，通常3-7%不等。</li>
        </ol>

        <h2>五、2026年金價走勢：每台錢往哪走？</h2>
        <p>
          2025年底到2026年初，國際金價從約2,600美元/盎司一路攀升至3,100美元以上，台灣9999純金每台錢突破19,000元大關。這主要由美聯準會降息預期、地緣政治風險、以及亞洲央行持續買金三個因素驅動。
        </p>
        <p>
          短期而言，只要美元不暴力升值，黃金每台錢維持在18,500元以上的機率偏高。手上有黃金要賣的人，現在不是壞時機。
        </p>

        <h2>巧品珠寶：台北每錢報價最透明是多少？</h2>
        <p>
          我們不扣耗損，秤重過程你盯著看。報價按當日國際金價換算，差距不超過3%。估完不滿意不用賣，沒有任何壓力。
        </p>
        <ul style={{ lineHeight: '2' }}>
          <li>地點：台北市大安區濟南路三段62-1號1樓（捷運忠孝新生站步行5分鐘）</li>
          <li>收購品項：9999純金、916金、18K/14K/10K、白金、鑽石</li>
          <li>特色：老闆親自鑑定，當場現金，免費估價</li>
        </ul>

        <div style={{ margin: '2rem 0', padding: '1.5rem', background: '#FEF9E7', borderRadius: '8px', borderLeft: '4px solid #B8860B' }}>
          <strong>延伸閱讀：</strong>
          <ul style={{ marginTop: '0.5rem', paddingLeft: '1.5rem' }}>
            <li><a href="/blog/today-gold-sell-price-per-qian-2026" style={{ color: '#B8860B' }}>今日黃金賣出每台錢最新行情</a></li>
            <li><a href="/blog/taiwan-gold-price-liang-vs-qian-2026" style={{ color: '#B8860B' }}>台灣黃金「兩」vs「錢」：單位換算完整說明</a></li>
            <li><a href="/blog/gold-price-guide-2026" style={{ color: '#B8860B' }}>2026年台灣黃金回收完整指南</a></li>
            <li><a href="/blog/gold-recycling-price-guide-2026" style={{ color: '#B8860B' }}>黃金回收價格完整指南2026</a></li>
          </ul>
        </div>

        <hr style={{ margin: '2rem 0' }} />
        <h2>立即詢問今日每錢報價是多少？</h2>
        <p>電話：<a href="tel:0986821626" style={{ color: '#B8860B', fontWeight: 'bold' }}>0986-821-626</a></p>
        <p>LINE：<a href="https://pse.is/8hndu3" style={{ color: '#06C755' }} target="_blank" rel="noopener noreferrer">@Hh0986481626</a></p>
        <p>地址：台北市大安區濟南路三段62-1號1樓</p>

        <div style={{ background: '#f0f9ff', borderLeft: '4px solid #3b82f6', padding: '16px', margin: '2rem 0', borderRadius: '8px', fontSize: '0.9rem' }}>
          <strong>參考資料：</strong>{' '}
          <a href="https://rate.bot.com.tw/gold" target="_blank" rel="noopener noreferrer" style={{ color: '#991b1b', fontWeight: 'bold' }}>台灣銀行黃金牌價</a>（每日更新）、
          <a href="https://www.kitco.com" target="_blank" rel="noopener noreferrer" style={{ color: '#991b1b', fontWeight: 'bold' }}>Kitco</a> 國際金價即時報價
        </div>

        <h2>常見問題 FAQ</h2>
        <details style={{ margin: '0.75rem 0', padding: '0.5rem', border: '1px solid #ddd', borderRadius: '6px' }}>
          <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>2026年台灣黃金每台錢多少錢？</summary>
          <p style={{ marginTop: '0.5rem', paddingLeft: '1rem' }}>2026年4月參考行情：9999純金每台錢約19,000-19,500元、916金約17,400-17,900元、18K金約14,200-14,600元。每日依國際金價調整。</p>
        </details>
        <details style={{ margin: '0.75rem 0', padding: '0.5rem', border: '1px solid #ddd', borderRadius: '6px' }}>
          <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>一台錢黃金等於幾公克？</summary>
          <p style={{ marginTop: '0.5rem', paddingLeft: '1rem' }}>1台錢 = 3.75公克，這是台灣傳統重量單位，黃金交易通常以台錢計價。</p>
        </details>
        <details style={{ margin: '0.75rem 0', padding: '0.5rem', border: '1px solid #ddd', borderRadius: '6px' }}>
          <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>台灣黃金每錢報價和銀行牌告價有什麼差別？</summary>
          <p style={{ marginTop: '0.5rem', paddingLeft: '1rem' }}>台灣銀行以公克計，回收業者用台錢報價。台灣銀行賣出價約5,100元/公克，回收收購約4,990-5,120元/公克，差距2-4%屬正常。</p>
        </details>
        <details style={{ margin: '0.75rem 0', padding: '0.5rem', border: '1px solid #ddd', borderRadius: '6px' }}>
          <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>為什麼每家報的每錢價格不一樣？</summary>
          <p style={{ marginTop: '0.5rem', paddingLeft: '1rem' }}>報價時間不同、是否扣耗損、純度鑑定結果三個因素。同一時間比較3家，差距超過3%要小心。</p>
        </details>
        <details style={{ margin: '0.75rem 0', padding: '0.5rem', border: '1px solid #ddd', borderRadius: '6px' }}>
          <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>黃金每台錢報價怎麼自己計算？</summary>
          <p style={{ marginTop: '0.5rem', paddingLeft: '1rem' }}>回收金額 = 重量（台錢）× 當日每錢收購價。例如：3台錢9999純金 × 19,200元 = 57,600元。確認業者不扣耗損是關鍵。</p>
        </details>

      </main>
    </>
  )
}
