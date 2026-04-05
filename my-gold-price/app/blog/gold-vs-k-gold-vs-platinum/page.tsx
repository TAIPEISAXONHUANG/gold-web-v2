import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'K金、黃金、白金有什麼不同？一篇讓你搞懂貴金屬',
  description: '黃金、K金、白金有什麼不同？一篇比較三者的成分、顏色、價值、回收行情，幫你分清楚手上的首飾是哪種材質。',
  keywords: 'K金,黃金,白金,貴金屬比較,黃金回收,K金回收,白金回收',
  alternates: {
    canonical: 'https://www.gold-tw.com/blog/gold-vs-k-gold-vs-platinum',
  },
};

export default function Page() {
  return (
    <main style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": "K金、黃金、白金有什麼不同？一篇讓你搞懂貴金屬",
            "author": { "@type": "Organization", "name": "巧品珠寶", "url": "https://www.gold-tw.com", "@id": "https://www.gold-tw.com/#business" },
            "publisher": { "@type": "Organization", "name": "巧品珠寶", "url": "https://www.gold-tw.com", "logo": { "@type": "ImageObject", "url": "https://wsrv.nl/?url=https://drive.google.com/uc?id=16UrCpYWRkyEkvL7M73o0DIAvkKWtF0Lp&w=200&output=webp" } },
            "datePublished": "2026-03-16",
              "dateModified": "2026-03-16T00:00:00+08:00",
            "description": "K金、黃金、白金有何不同？一篇讓你搞懂貴金屬！"
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"首頁","item":"https://www.gold-tw.com"},{"@type":"ListItem","position":2,"name":"知識專欄","item":"https://www.gold-tw.com/blog"},{"@type":"ListItem","position":3,"name":"K金、黃金、白金有什麼不同？一篇讓你搞懂貴金屬"}]})
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
                "name": "K金會褪色嗎？",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "K金本身不會褪色，但表面的電鍍層可能隨時間磨損。若出現變色，可透過重新電鍍恢復光澤。"
                }
              },
              {
                "@type": "Question",
                "name": "白金和銀有什麼不同？",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "白金是鉑金，屬於貴金屬；銀（Sterling Silver）則是白銀。白金的價格和硬度都高於銀，且不會變黑。"
                }
              },
              {
                "@type": "Question",
                "name": "哪種最值得投資？",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "若論投資價值，純黃金（9999）的回收價值最高，也是最被廣泛接受的投資標的。"
                }
              }
            ]
          })
        }}
      />
      <h1>K金、黃金、白金有什麼不同？</h1>

      <div style={{background:'#fffbeb', borderLeft:'4px solid #f59e0b', padding:'16px', margin:'16px 0', borderRadius:'8px'}}>
        <strong>📌 重點摘要：</strong> 黃金純度100%保值性最高、K金含金量75%以下硬度較好適合飾品、白金（鉑金）稀有但回收價低於黃金。三者回收價差異大。
      </div>
      <h2>一篇讓你搞懂貴金屬的完整指南是什麼？</h2>

      <h2>一分鐘搞懂三種貴金屬嗎？</h2>
      <p>許多人在買賣珠寶時常搞不清楚「黃金、K金、白金」的差別，本文用簡單的方式讓您一次搞懂！</p>

      <h2>什麼是黃金（Gold）？</h2>
      <ul>
        <li><strong>定義</strong>：純粹的黃金元素，顏色為金黃色</li>
        <li><strong>純度</strong>：9999（24K）為最高純度</li>
        <li><strong>特點</strong>：
          <ul>
            <li>顏色最黃、最亮</li>
            <li>質地較軟，容易變形</li>
            <li>不易過敏，適合直接佩戴</li>
          </ul>
        </li>
        <li><strong>回收價值</strong>：最高等於國際金價 × 純度</li>
      </ul>

      <h2>什麼是K金（Karat Gold）？</h2>
      <ul>
        <li><strong>定義</strong>：黃金與其他金屬合金，混合製成</li>
        <li><strong>常見純度</strong>：
          <ul>
            <li>18K（750）：75%黃金 + 25%其他金屬</li>
            <li>14K（585）：58.5%黃金 + 41.5%其他金屬</li>
            <li>10K（416）：41.6%黃金 + 58.4%其他金屬</li>
          </ul>
        </li>
        <li><strong>特點</strong>：
          <ul>
            <li>硬度較高，不易變形</li>
            <li>可製作出更精細的珠寶工藝</li>
            <li>顏色多樣（黃K金、白K金、玫瑰金）</li>
          </ul>
        </li>
        <li><strong>回收價值</strong>：按純度比例計算，低於純金</li>
      </ul>

      <h2>什麼是白金（Platinum）？</h2>
      <ul>
        <li><strong>定義</strong>：另一種貴金屬，與黃金完全不同</li>
        <li><strong>標記</strong>：通常標示為Pt950、Pt900</li>
        <li><strong>特點</strong>：
          <ul>
            <li>顏色為銀白色，不會褪色</li>
            <li>密度高、質地堅固</li>
            <li>不易引起過敏</li>
            <li>產量較少，價格通常較高</li>
          </ul>
        </li>
        <li><strong>回收價值</strong>：按白金的回收市場行情計算</li>
      </ul>

      <h2>三者比較表？</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse', margin: '1rem 0' }}>
        <thead>
          <tr style={{ background: '#f5f5f5' }}>
            <th style={{ padding: '10px', border: '1px solid #ddd' }}>特性</th>
            <th style={{ padding: '10px', border: '1px solid #ddd' }}>黃金</th>
            <th style={{ padding: '10px', border: '1px solid #ddd' }}>K金</th>
            <th style={{ padding: '10px', border: '1px solid #ddd' }}>白金</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ padding: '10px', border: '1px solid #ddd' }}>顏色</td>
            <td style={{ padding: '10px', border: '1px solid #ddd' }}>金黃色</td>
            <td style={{ padding: '10px', border: '1px solid #ddd' }}>黃/白/玫瑰金</td>
            <td style={{ padding: '10px', border: '1px solid #ddd' }}>銀白色</td>
          </tr>
          <tr>
            <td style={{ padding: '10px', border: '1px solid #ddd' }}>純度最高</td>
            <td style={{ padding: '10px', border: '1px solid #ddd' }}>9999</td>
            <td style={{ padding: '10px', border: '1px solid #ddd' }}>18K/14K</td>
            <td style={{ padding: '10px', border: '1px solid #ddd' }}>Pt950</td>
          </tr>
          <tr>
            <td style={{ padding: '10px', border: '1px solid #ddd' }}>硬度</td>
            <td style={{ padding: '10px', border: '1px solid #ddd' }}>較軟</td>
            <td style={{ padding: '10px', border: '1px solid #ddd' }}>較硬</td>
            <td style={{ padding: '10px', border: '1px solid #ddd' }}>堅固</td>
          </tr>
          <tr>
            <td style={{ padding: '10px', border: '1px solid #ddd' }}>回收價格</td>
            <td style={{ padding: '10px', border: '1px solid #ddd' }}>最高</td>
            <td style={{ padding: '10px', border: '1px solid #ddd' }}>按純度</td>
            <td style={{ padding: '10px', border: '1px solid #ddd' }}>較低</td>
          </tr>
        </tbody>
      </table>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "K金會褪色嗎？",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "K金本身不會褪色，但表面的電鍍層可能隨時間磨損。若出現變色，可透過重新電鍍恢復光澤。"
                }
              },
              {
                "@type": "Question",
                "name": "白金和銀有什麼不同？",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "白金是鉑金，屬於貴金屬；銀（Sterling Silver）則是白銀。白金的價格和硬度都高於銀，且不會變黑。"
                }
              },
              {
                "@type": "Question",
                "name": "哪種最值得投資？",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "若論投資價值，純黃金（9999）的回收價值最高，也是最被廣泛接受的投資標的。"
                }
              }
            ]
          })
        }}
      />
      <h2>常見問題</h2>
      <h3>Q1: K金會褪色嗎？</h3>
      <p>K金本身不會褪色，但表面的電鍍層可能隨時間磨損。若出現變色，可透過重新電鍍恢復光澤。</p>

      <h3>Q2: 白金和銀有什麼不同？</h3>
      <p>白金是鉑金，屬於貴金屬；銀（Sterling Silver）則是白銀。白金的價格和硬度都高於銀，且不會變黑。</p>

      <h3>Q3: 哪種最值得投資？</h3>
      <p>若論投資價值，<strong>純黃金（9999）</strong>的回收價值最高，也是最被廣泛接受的投資標的。</p>

      <div style={{ margin: '2rem 0', padding: '1.5rem', background: '#FEF9E7', borderRadius: '8px', borderLeft: '4px solid #B8860B' }}>
        <strong>延伸閱讀：</strong>
        <ul style={{ marginTop: '0.5rem', paddingLeft: '1.5rem' }}>
          <li><a href="/blog/karat-gold-guide" style={{ color: '#B8860B' }}>K金回收完整攻略</a></li>
          <li><a href="/blog/karat-gold-price" style={{ color: '#B8860B' }}>K金價格計算</a></li>
          <li><a href="/blog/karat-gold-recovery" style={{ color: '#B8860B' }}>K金回收方式</a></li>
          <li><a href="/blog/karat-gold-report" style={{ color: '#B8860B' }}>K金完整報告</a></li>
        </ul>
      </div>

      <hr style={{ margin: '2rem 0' }} />

      <h2>立即查詢貴金屬回收報價</h2>
      <p>📞 電話：0986-821-626</p>
      <p>💬 LINE：@QPD888</p>
      <p>🌐 官網：https://www.gold-tw.com/</p>
    </main>
  );
}
