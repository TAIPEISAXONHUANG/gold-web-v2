import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '黃金與K金的差異分析｜純度、價格、回收價值一次看懂｜巧品珠寶',
  description: '黃金與K金哪個更值得買？24K、18K、14K差在哪？一篇搞懂純度、價格計算方式、回收價值，買金飾不吃虧、賣黃金更值錢。 台北巧品珠寶鑑定師L親自鑑定，10年以上珠寶鑑定資歷，透明報價不扣耗損，台北大安區濟南路三段62-1號，提供免費估價與諮詢服務。',
  keywords: '黃金與K金差異,24K與18K差異,黃金純度,K金價格計算,黃金回收知識',
  alternates: {
    canonical: 'https://www.gold-tw.com/blog/k-gold-difference-guide',
  },
  openGraph: {
    locale: 'zh_TW',
    title: '黃金與K金的差異分析｜純度、價格、回收價值一次看懂｜巧品珠寶',
    description: '黃金與K金哪個更值得買？24K、18K、14K差在哪？一篇搞懂純度、價格計算方式、回收價值，買金飾不吃虧、賣黃金更值錢。',
    type: 'article',
    url: 'https://www.gold-tw.com/blog/k-gold-difference-guide',
    siteName: '巧品珠寶',
    publishedTime: '2026-03-28T00:00:00+08:00',
    modifiedTime: '2026-03-28T00:00:00+08:00',
    images: [{ url: '/og-image.webp', width: 1200, height: 630, alt: '巧品珠寶' }],

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
            "headline": "黃金與K金的差異分析｜純度、價格、回收價值一次看懂",
            "author": { "@type": "Person", "name": "鑑定師L", "url": "https://www.gold-tw.com", "@id": "https://www.gold-tw.com/#business" },
            "publisher": { "@type": "Organization", "name": "巧品珠寶", "url": "https://www.gold-tw.com", "logo": { "@type": "ImageObject", "url": "https://wsrv.nl/?url=https://drive.google.com/uc?id=16UrCpYWRkyEkvL7M73o0DIAvkKWtF0Lp&w=200&output=webp" } },
            "datePublished": "2026-03-28",
            "dateModified": "2026-03-28T00:00:00+08:00",
            "description": "黃金與K金差異完整分析：24K/18K/14K純度比較、價格計算方式、回收價值評估、買金飾或賣黃金的最佳選擇建議。"
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"首頁","item":"https://www.gold-tw.com"},{"@type":"ListItem","position":2,"name":"知識專欄","item":"https://www.gold-tw.com/blog"},{"@type":"ListItem","position":3,"name":"黃金與K金的差異分析"}]})
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
                "name": "K金會不會很容易壞？",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "相較於純金，K金硬度較高，反而更不容易變形或刮傷。日常配戴建議選擇18K以上，兼具硬度與價值。"
                }
              },
              {
                "@type": "Question",
                "name": "鍍金和包金跟K金一樣嗎？",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "完全不同！鍍金（Gold Plated）只有薄薄一層金，包金（Gold Filled）約5%含金量，兩者回收價值都很低，建議選擇正規K金。"
                }
              },
              {
                "@type": "Question",
                "name": "黃金跟K金可以一起戴嗎？",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "可以，但建議分開配戴。硬度不同的金屬相互摩擦會加速磨損，尤其是純金容易刮傷。"
                }
              },
              {
                "@type": "Question",
                "name": "女生戴K金會過敏嗎？",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "部分K金含鎳成分，可能引起過敏。建議選擇14K以上、無鎳成分的K金，或選擇純銀鍍金（925銀鍍金）材質。"
                }
              }
            ]
          })
        }}
      />
      <h1>黃金與K金的差異分析｜純度、價格、回收價值一次看懂</h1>

      <div style={{background:'#fffbeb', borderLeft:'4px solid #f59e0b', padding:'16px', margin:'16px 0', borderRadius:'8px'}}>
        <strong>📌 重點摘要：</strong> 黃金與K金的根本差異在於含金量。24K為99.99{'%'}純金，18K為75{'%'}，14K為58.5{'%'}。純度越高價值越高，但K金硬度佳更適合日常配戴。本篇告訴您何時買黃金、何時選K金最聰明。
      </div>

      <div style={{ background: '#fff3f3', border: '1px solid #fca5a5', borderRadius: '8px', padding: '16px 20px', margin: '24px 0' }}>
        <strong style={{ color: '#dc2626' }}>這篇不適合你，如果…</strong>
        <ul style={{ margin: '8px 0 0', paddingLeft: '20px', color: '#374151' }}>
        <li>你的黃金是純金（999/9999）→ <a href="/blog/gold-recycling-taipei" style={{ color: '#b45309' }}>純金回收說明</a></li>
        <li>你只想快速查今天金價 → <a href="/daily-gold-price" style={{ color: '#b45309' }}>直接看今日金價</a></li>
        <li>你是第一次接觸黃金 → <a href="/blog/gold-buying-guide-beginner-2026" style={{ color: '#b45309' }}>新手買金入門</a></li>
        </ul>
      </div>


      


      <h2>結論：了解黃金與K金的差異，才能做出最有利的買賣決定！</h2>

      <h2>黃金與K金有哪些基本認識？</h2>
      <p><strong>黃金（純金/24K）</strong>是指含金量99.99{'%'}的黃金，是最純粹的黃金形態，顏色最接近金黃本色，投資與保值首選。但純金質地軟，容易刮傷變形，不適合精細珠寶工藝。</p>
      <p><strong>K金</strong>是黃金與銀、銅、鈀等金屬的合金，加入其他金屬是為了增加硬度、改變顏色與耐久性。常見K金有24K、22K、18K、14K、10K，數字代表含金量（24分為滿金）。</p>

      <h2>黃金與K金純度怎麼對照？</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse', margin: '1rem 0' }}>
        <thead>
          <tr style={{ background: '#f59e0b', color: 'white' }}>
            <th style={{ padding: '10px', textAlign: 'left' }}>K數</th>
            <th style={{ padding: '10px', textAlign: 'left' }}>含金量</th>
            <th style={{ padding: '10px', textAlign: 'left' }}>純度標示</th>
            <th style={{ padding: '10px', textAlign: 'left' }}>特性</th>
          </tr>
        </thead>
        <tbody>
          <tr style={{ borderBottom: '1px solid #ddd' }}>
            <td style={{ padding: '10px' }}>24K</td>
            <td style={{ padding: '10px' }}>99.99{'%'}</td>
            <td style={{ padding: '10px' }}>9999</td>
            <td style={{ padding: '10px' }}>最軟，不適合珠寶</td>
          </tr>
          <tr style={{ borderBottom: '1px solid #ddd' }}>
            <td style={{ padding: '10px' }}>22K</td>
            <td style={{ padding: '10px' }}>91.6{'%'}</td>
            <td style={{ padding: '10px' }}>916</td>
            <td style={{ padding: '10px' }}>硬度適中，適合首飾</td>
          </tr>
          <tr style={{ borderBottom: '1px solid #ddd' }}>
            <td style={{ padding: '10px' }}>18K</td>
            <td style={{ padding: '10px' }}>75{'%'}</td>
            <td style={{ padding: '10px' }}>750 / 18K</td>
            <td style={{ padding: '10px' }}>硬度佳，珠寶主流</td>
          </tr>
          <tr style={{ borderBottom: '1px solid #ddd' }}>
            <td style={{ padding: '10px' }}>14K</td>
            <td style={{ padding: '10px' }}>58.5{'%'}</td>
            <td style={{ padding: '10px' }}>585 / 14K</td>
            <td style={{ padding: '10px' }}>硬度高，較不易過敏</td>
          </tr>
          <tr style={{ borderBottom: '1px solid #ddd' }}>
            <td style={{ padding: '10px' }}>10K</td>
            <td style={{ padding: '10px' }}>41.7{'%'}</td>
            <td style={{ padding: '10px' }}>417 / 10K</td>
            <td style={{ padding: '10px' }}>硬度最高，價格最低</td>
          </tr>
        </tbody>
      </table>

      <h2>黃金與K金有哪些優缺點？</h2>

      <h3>🌟 24K純金（黃金）優點：</h3>
      <ul>
        <li>保值與投資首選，回收價值最高</li>
        <li>顏色金黃亮麗，質感最好</li>
        <li>不易引起皮膚過敏</li>
        <li>變現速度最快，店家最願意收</li>
      </ul>

      <h3>⚠️ 24K純金（黃金）缺點：</h3>
      <ul>
        <li>質地軟，容易變形刮傷</li>
        <li>不適合精細或複雜的珠寶設計</li>
        <li>日常配戴需特別小心保養</li>
      </ul>

      <h3>🌟 K金優點：</h3>
      <ul>
        <li>硬度高，不易變形，適合日常配戴</li>
        <li>可製作出精細複雜的珠寶設計</li>
        <li>顏色多樣：白K金、玫瑰金、香檳金、巧克力金</li>
        <li>價格相對親民，入手門檻低</li>
      </ul>

      <h3>⚠️ K金缺點：</h3>
      <ul>
        <li>回收價值依含金量而定，低於純金</li>
        <li>部分K金可能引起皮膚過敏（含鎳成分）</li>
        <li>長期配戴可能會有褪色問題</li>
        <li>非純金，投資保值效果較差</li>
      </ul>

      <h2>2026年黃金與K金回收價格怎麼算？</h2>
      <p>回收價格公式：<strong>當日金價 × 重量 × 純度%</strong></p>
      <p>以2026年3月每錢參考價18,500元計算，1兩（5錢）為例：</p>
      <table style={{ width: '100%', borderCollapse: 'collapse', margin: '1rem 0' }}>
        <thead>
          <tr style={{ background: '#f59e0b', color: 'white' }}>
            <th style={{ padding: '10px', textAlign: 'left' }}>種類</th>
            <th style={{ padding: '10px', textAlign: 'left' }}>純度</th>
            <th style={{ padding: '10px', textAlign: 'left' }}>每錢回收價</th>
            <th style={{ padding: '10px', textAlign: 'left' }}>1兩回收價</th>
          </tr>
        </thead>
        <tbody>
          <tr style={{ borderBottom: '1px solid #ddd' }}>
            <td style={{ padding: '10px' }}>24K純金</td>
            <td style={{ padding: '10px' }}>99.99{'%'}</td>
            <td style={{ padding: '10px' }}>約18,500元</td>
            <td style={{ padding: '10px' }}>約92,500元</td>
          </tr>
          <tr style={{ borderBottom: '1px solid #ddd' }}>
            <td style={{ padding: '10px' }}>22K金</td>
            <td style={{ padding: '10px' }}>91.6{'%'}</td>
            <td style={{ padding: '10px' }}>約16,946元</td>
            <td style={{ padding: '10px' }}>約84,730元</td>
          </tr>
          <tr style={{ borderBottom: '1px solid #ddd' }}>
            <td style={{ padding: '10px' }}>18K金</td>
            <td style={{ padding: '10px' }}>75{'%'}</td>
            <td style={{ padding: '10px' }}>約13,875元</td>
            <td style={{ padding: '10px' }}>約69,375元</td>
          </tr>
          <tr style={{ borderBottom: '1px solid #ddd' }}>
            <td style={{ padding: '10px' }}>14K金</td>
            <td style={{ padding: '10px' }}>58.5{'%'}</td>
            <td style={{ padding: '10px' }}>約10,823元</td>
            <td style={{ padding: '10px' }}>約54,113元</td>
          </tr>
        </tbody>
      </table>

      <h2>我該買黃金還是K金？</h2>
      <p><strong>這兩種人適合買24K純金：</strong></p>
      <ul>
        <li>以投資保值為主要目的，想累積資產</li>
        <li>購買金條、金塊而非飾品</li>
        <li>作為傳家寶或嫁妝使用</li>
        <li>在意未來回收變現的價值</li>
      </ul>

      <p><strong>這兩種人適合買K金：</strong></p>
      <ul>
        <li>追求日常配戴的時尚感與設計感</li>
        <li>喜歡精細做工的珠寶款式</li>
        <li>預算有限，想入手珠寶飾品</li>
        <li>需要堅固耐用的結婚戒指或日常項鍊</li>
      </ul>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "K金會不會很容易壞？",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "相較於純金，K金硬度較高，反而更不容易變形或刮傷。日常配戴建議選擇18K以上，兼具硬度與價值。"
                }
              },
              {
                "@type": "Question",
                "name": "鍍金和包金跟K金一樣嗎？",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "完全不同！鍍金（Gold Plated）只有薄薄一層金，包金（Gold Filled）約5%含金量，兩者回收價值都很低，建議選擇正規K金。"
                }
              },
              {
                "@type": "Question",
                "name": "黃金跟K金可以一起戴嗎？",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "可以，但建議分開配戴。硬度不同的金屬相互摩擦會加速磨損，尤其是純金容易刮傷。"
                }
              },
              {
                "@type": "Question",
                "name": "女生戴K金會過敏嗎？",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "部分K金含鎳成分，可能引起過敏。建議選擇14K以上、無鎳成分的K金，或選擇純銀鍍金（925銀鍍金）材質。"
                }
              }
            ]
          })
        }}
      />
      <h2>常見問題</h2>

      <h3>Q：K金會不會很容易壞？</h3>
      <p>A：相較於純金，K金硬度較高，反而更<strong>不容易變形或刮傷</strong>。日常配戴建議選擇18K以上，兼具硬度與價值。</p>

      <h3>Q：鍍金和包金跟K金一樣嗎？</h3>
      <p>A：完全不同！鍍金（Gold Plated）只有薄薄一層金，包金（Gold Filled）約5{'%'}含金量，兩者回收價值都很低，<strong>建議選擇正规K金</strong>。</p>

      <h3>Q：黃金跟K金可以一起戴嗎？</h3>
      <p>A：可以，但建議分開配戴。<strong>硬度不同的金屬相互摩擦會加速磨損</strong>，尤其是純金容易刮傷。</p>

      <h3>Q：女生戴K金會過敏嗎？</h3>
      <p>A：部分K金含鎳成分，可能引起過敏。建議選擇<strong>14K以上、無鎳成分的K金</strong>，或選擇純銀鍍金（925銀鍍金）材質。</p>

      <div style={{ margin: '2rem 0', padding: '1.5rem', background: '#FEF9E7', borderRadius: '8px', borderLeft: '4px solid #B8860B' }}>
        <strong>延伸閱讀：</strong>
        <ul style={{ marginTop: '0.5rem', paddingLeft: '1.5rem' }}>
          <li><a href="/blog/karat-gold-guide" style={{ color: '#B8860B' }}>K金完整知識指南</a></li>
          <li><a href="/blog/karat-gold-price" style={{ color: '#B8860B' }}>K金價格計算方式</a></li>
          <li><a href="/blog/k-gold-vs-gold" style={{ color: '#B8860B' }}>K金與純金比較</a></li>
          <li><a href="/blog/gold-vs-k-gold-2026" style={{ color: '#B8860B' }}>黃金與K金2026分析</a></li>
        </ul>
      </div>

      <hr style={{ margin: '2rem 0' }} />

      <h2>📞 聯繫我們</h2>
      <p>📞 電話：0986-821-626</p>
      <p>💬 LINE：@QPD888</p>
      <p>🌐 官網：https://www.gold-tw.com/</p>
      <p>📍 地址：台北市大安區濟南路三段62-1號</p>
    </main>
  );
}
