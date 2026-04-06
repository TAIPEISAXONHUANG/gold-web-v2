import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: '黃金回收怎麼定價？專家告訴你影響價格的關鍵因素',
  description: '黃金回收價格怎麼決定的？解析影響回收報價的5大因素：當日金價、純度、重量、店家政策、匯率，讓你拿到最高價。 台北巧品珠寶鑑定師L親自鑑定，10年以上珠寶鑑定資歷，透明報價不扣耗損，台北大安區濟南路三段62-1號，提供免費估價與諮詢服務。',
  keywords: '黃金回收定價,黃金回收價格怎麼算,影響黃金價格因素,黃金回收推薦',
  alternates: {
    canonical: 'https://www.gold-tw.com/blog/gold-recycling-price-factors',
  },
  openGraph: {
    locale: 'zh_TW',
    title: '黃金回收怎麼定價？專家告訴你影響價格的關鍵因素',
    description: '黃金回收價格怎麼決定的？解析影響回收報價的5大因素：當日金價、純度、重量、店家政策、匯率，讓你拿到最高價。',
    type: 'article',
    url: 'https://www.gold-tw.com/blog/gold-recycling-price-factors',
    siteName: '巧品珠寶',
    publishedTime: '2026-03-16T00:00:00+08:00',
    modifiedTime: '2026-03-16T00:00:00+08:00',
    images: [{ url: 'https://res.cloudinary.com/dakafmdhy/image/upload/v1775486018/gold-tw/gold-recycling-price-factors-cover.png', width: 1200, height: 630, alt: '影響黃金回收價格因素｜成色重量與時機分析' }],

  },
};

// lastModified: 2026-03-19
export default function Page() {
  return (
    <main style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": "黃金回收怎麼定價？專家告訴你影響價格的關鍵因素",
            "author": { "@type": "Person", "name": "鑑定師L", "url": "https://www.gold-tw.com", "@id": "https://www.gold-tw.com/#business" },
            "publisher": { "@type": "Organization", "name": "巧品珠寶", "url": "https://www.gold-tw.com", "logo": { "@type": "ImageObject", "url": "https://wsrv.nl/?url=https://drive.google.com/uc?id=16UrCpYWRkyEkvL7M73o0DIAvkKWtF0Lp&w=200&output=webp" } },
            "datePublished": "2026-03-16",
              "dateModified": "2026-03-16T00:00:00+08:00",
            "description": "黃金回收價格怎麼算？專家解析影響黃金回收定價的關鍵因素"
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"首頁","item":"https://www.gold-tw.com"},{"@type":"ListItem","position":2,"name":"知識專欄","item":"https://www.gold-tw.com/blog"},{"@type":"ListItem","position":3,"name":"黃金回收怎麼定價？專家告訴你影響價格的關鍵因素"}]})
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
                "name": "黃金回收價格怎麼計算？",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "黃金回收價格公式為：國際金價 × 純度 × 重量。例如9999純金（24K）按100%計算，18K金按75%計算，14K按58.5%計算。重量以台錢為單位（1錢=3.75克），建議先查詢當日國際金價再估算自己的黃金價值。"
                }
              },
              {
                "@type": "Question",
                "name": "為什麼不同店家的回收報價差這麼多？",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "不同店家的報價差異來自於：扣耗標準不同（部分店家扣3-10%耗損）、店家利潤空間不同、以及競爭壓力不同。選擇不扣耗損的誠信店家，並多家比價，是獲得最高回收價的關鍵。"
                }
              },
              {
                "@type": "Question",
                "name": "純度對黃金回收價格影響有多大？",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "純度是影響回收價格最重要的因素之一。9999純金回收價最高，18K金約為純金的75%，14K約58.5%，10K約41.7%。店家通常使用XRF螢光分析儀精確測定純度，建議選擇有專業儀器的店家以確保公平估價。"
                }
              }
            ]
          })
        }}
      />
      <h1>黃金回收怎麼定價？專家告訴你影響價格的關鍵因素</h1>

      <div style={{ margin: '1.5rem 0', borderRadius: '12px', overflow: 'hidden' }}>
        <Image
          src="https://res.cloudinary.com/dakafmdhy/image/upload/v1775486018/gold-tw/gold-recycling-price-factors-cover.png"
          alt="影響黃金回收價格因素｜成色重量與時機分析"
          width={1200}
          height={630}
          style={{ width: '100%', height: 'auto' }}
          priority
        />
      </div>

      <div style={{background:'#fffbeb', borderLeft:'4px solid #f59e0b', padding:'16px', margin:'16px 0', borderRadius:'8px'}}>
        <strong>📌 重點摘要：</strong> 影響黃金回收價格的因素：國際金價、純度、重量、店家利潤。同一天不同店家報價可能差數百元，建議比價。
      </div>

      <div style={{ background: '#fff3f3', border: '1px solid #fca5a5', borderRadius: '8px', padding: '16px 20px', margin: '24px 0' }}>
        <strong style={{ color: '#dc2626' }}>這篇不適合你，如果…</strong>
        <ul style={{ margin: '8px 0 0', paddingLeft: '20px', color: '#374151' }}>
        <li>你只想快速知道今天金價 → <a href="/daily-gold-price" style={{ color: '#b45309' }}>直接看今日金價</a></li>
        <li>你的黃金是K金（非純金）→ <a href="/blog/karat-gold-guide" style={{ color: '#b45309' }}>看K金回收說明</a></li>
        <li>你想了解鑽石回收行情 → <a href="/blog/diamond-recovery-price" style={{ color: '#b45309' }}>鑽石回收說明</a></li>
        </ul>
      </div>


      


      <h2>結論：回收定價主要看這5個因素</h2>
      <p>許多民眾想知道「我的黃金能賣多少？」其實黃金回收價格有固定的計算方式，本文帶您一次搞懂！</p>

      <h2>1. 國際金價（最重要）</h2>
      <p>黃金回收價格與<strong>國際黃金現貨價格</strong>直接掛鉤，每日都會波動。建議先上網查詢當日牌價再去回收，才能確保不吃虧。</p>
      <ul>
        <li>國際金價上漲 → 回收價格提高</li>
        <li>國際金價下跌 → 回收價格降低</li>
      </ul>

      <h2>2. 黃金純度（K數）</h2>
      <p>純度直接影響回收價格，以下為常見純度對照：</p>
      <ul>
        <li><strong>9999（24K）</strong>：純度99.99{'%'}，最高價</li>
        <li><strong>999（24K）</strong>：純度99.9{'%'}，接近最高價</li>
        <li><strong>18K（750）</strong>：純度75{'%'}，約75{'%'}行情</li>
        <li><strong>14K（585）</strong>：純度58.5%，約58.5%行情</li>
        <li><strong>10K（416）</strong>：純度41.6%，約41.6%行情</li>
      </ul>

      <h2>3. 重量（錢或克）</h2>
      <p>台灣普遍以「錢」為計算單位：</p>
      <ul>
        <li>1錢 = 3.75克</li>
        <li>1兩 = 10錢 = 37.5克</li>
      </ul>
      <p><strong>重要：</strong>現場秤重時務必親眼看見秤上數字，確認重量無誤。</p>

      <h2>4. 品牌與工藝</h2>
      <p>部分知名品牌（如香奈兒、卡地亞、Tiffany等）的珠寶，<strong>品牌本身可能具有附加價值</strong>，有些店家會額外加分收購。</p>
      <p>另外，精美工藝的黃金飾品在市場上較受歡迎，報價可能稍高。</p>

      <h2>5. 市場供需與時機</h2>
      <ul>
        <li><strong>農曆年前</strong>：需求旺季，價格較好</li>
        <li><strong>結婚旺季（農曆年、國慶）</strong>：聘禮需求高</li>
        <li><strong>通膨升溫</strong>：避險需求增加，金價上漲</li>
        <li><strong>美元走弱</strong>：金價通常上漲</li>
      </ul>

      <h2>回收價格怎麼算？</h2>
      <p>簡單來說，回收價格的計算方式如下：</p>
      <p style={{ background: '#f5f5f5', padding: '1rem', borderRadius: '8px' }}>
        <strong>回收價 = 國際金價 × 純度 × 重量</strong>
      </p>
      <p>實際報價會再扣除些許合理費用（如熔煉成本），但正當商家不會任意扣減。</p>

      <h2>如何避免被低估？</h2>
      <ul>
        <li>先查詢當日國際金價</li>
        <li>計算好自己的黃金價值</li>
        <li>多方比價，選擇誠信店家</li>
        <li>拒絕不合理扣款（如扣耗損、扣秤等）</li>
      </ul>

      <div style={{ margin: '2rem 0', padding: '1.5rem', background: '#FEF9E7', borderRadius: '8px', borderLeft: '4px solid #B8860B' }}>
        <strong>延伸閱讀：</strong>
        <ul style={{ marginTop: '0.5rem', paddingLeft: '1.5rem' }}>
          <li><a href="/blog/gold-price-2026" style={{ color: '#B8860B' }}>2026年黃金價格</a></li>
          <li><a href="/blog/gold-price-forecast-2026" style={{ color: '#B8860B' }}>2026年黃金價格預測</a></li>
          <li><a href="/blog/gold-price-guide-2026" style={{ color: '#B8860B' }}>黃金價格完整指南</a></li>
          <li><a href="/blog/gold-price-key-factors" style={{ color: '#B8860B' }}>影響黃金價格的關鍵因素</a></li>
        </ul>
      </div>

      <hr style={{ margin: '2rem 0' }} />

      <h2>立即查詢今日回收報價</h2>
      <p>📞 電話：0986-821-626</p>
      <p>💬 LINE：@QPD888</p>
      <p>🌐 官網：https://www.gold-tw.com/</p>
    </main>
  );
}
