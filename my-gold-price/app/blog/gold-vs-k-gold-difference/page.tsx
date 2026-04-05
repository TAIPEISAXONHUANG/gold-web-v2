import { Metadata } from 'next';

// 黃金與K金的差異頁面
export const metadata: Metadata = {
  title: '黃金與K金的差異｜純度、價格、回收一篇搞懂｜巧品珠寶',
  description: '黃金與K金有什麼不同？一篇讓您搞懂純度差異、價格計算、回收價值。了解24K、18K、14K的差別，買金飾或賣黃金都不吃虧。',
  keywords: '黃金與K金差異,24K黃金,18K金,14K金,純度比較,黃金回收',
  alternates: {
    canonical: 'https://www.gold-tw.com/blog/gold-vs-k-gold-difference',
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
            "headline": "黃金與K金的差異｜純度、價格、回收一篇搞懂",
            "author": { "@type": "Organization", "name": "巧品珠寶", "url": "https://www.gold-tw.com", "@id": "https://www.gold-tw.com/#business" },
            "publisher": { "@type": "Organization", "name": "巧品珠寶", "url": "https://www.gold-tw.com", "logo": { "@type": "ImageObject", "url": "https://wsrv.nl/?url=https://drive.google.com/uc?id=16UrCpYWRkyEkvL7M73o0DIAvkKWtF0Lp&w=200&output=webp" } },
            "datePublished": "2026-03-19",
            "dateModified": "2026-03-19T00:00:00+08:00",
            "description": "黃金與K金差異分析：24K、18K、14K純度比較，價格計算方式，回收價值評估。讓您買金飾或賣黃金都能做出正確選擇。"
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"首頁","item":"https://www.gold-tw.com"},{"@type":"ListItem","position":2,"name":"知識專欄","item":"https://www.gold-tw.com/blog"},{"@type":"ListItem","position":3,"name":"黃金與K金的差異｜純度、價格、回收一篇搞懂"}]})
        }}
      />
      <h1>黃金與K金的差異｜純度、價格、回收一篇搞懂</h1>

      <div style={{background:'#fffbeb', borderLeft:'4px solid #f59e0b', padding:'16px', margin:'16px 0', borderRadius:'8px'}}>
        <strong>📌 重點摘要：</strong> 黃金與K金的差異在於純度！24K代表99.99{'%'}純金，18K是75{'%'}，14K是58.5{'%'}。純度越高回收價值越高，但K金硬度較高更適合日常配戴。
      </div>
      
      <h2>了解黃金與K金的差異，買金飾不吃虧、賣黃金更值錢！嗎？</h2>

      <h2>什麼是純金？什麼是K金？</h2>
      <p><strong>純金（24K）</strong>是指含金量99.99{'%'}的黃金，顏色最接近黃金本色，價值最高。但純金較軟，容易變形刮傷。</p>
      <p><strong>K金</strong>是黃金與其他金屬的合金，添加其他金屬是為了增加硬度與耐久性。常見的K金包括18K、14K、10K等。</p>

      <h2>黃金與K金純度比較表？</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse', margin: '1rem 0' }}>
        <thead>
          <tr style={{ background: '#f59e0b', color: 'white' }}>
            <th style={{ padding: '10px', textAlign: 'left' }}>K數</th>
            <th style={{ padding: '10px', textAlign: 'left' }}>含金量</th>
            <th style={{ padding: '10px', textAlign: 'left' }}>純度</th>
          </tr>
        </thead>
        <tbody>
          <tr style={{ borderBottom: '1px solid #ddd' }}>
            <td style={{ padding: '10px' }}>24K</td>
            <td style={{ padding: '10px' }}>99.99{'%'}</td>
            <td style={{ padding: '10px' }}>9999</td>
          </tr>
          <tr style={{ borderBottom: '1px solid #ddd' }}>
            <td style={{ padding: '10px' }}>22K</td>
            <td style={{ padding: '10px' }}>91.6{'%'}</td>
            <td style={{ padding: '10px' }}>916</td>
          </tr>
          <tr style={{ borderBottom: '1px solid #ddd' }}>
            <td style={{ padding: '10px' }}>18K</td>
            <td style={{ padding: '10px' }}>75{'%'}</td>
            <td style={{ padding: '10px' }}>750</td>
          </tr>
          <tr style={{ borderBottom: '1px solid #ddd' }}>
            <td style={{ padding: '10px' }}>14K</td>
            <td style={{ padding: '10px' }}>58.5{'%'}</td>
            <td style={{ padding: '10px' }}>585</td>
          </tr>
          <tr style={{ borderBottom: '1px solid #ddd' }}>
            <td style={{ padding: '10px' }}>10K</td>
            <td style={{ padding: '10px' }}>41.7{'%'}</td>
            <td style={{ padding: '10px' }}>417</td>
          </tr>
        </tbody>
      </table>

      <h2>黃金與K金的優缺點是什麼？</h2>
      
      <h3>🌟 純金（24K）優點：</h3>
      <ul>
        <li>價值最高，投資與保值首選</li>
        <li>顏色金黃亮麗，質感最佳</li>
        <li>不易引起皮膚過敏</li>
        <li>回收時價值損失最少</li>
      </ul>

      <h3>⚠️ 純金（24K）缺點：</h3>
      <ul>
        <li>質地較軟，容易變形</li>
        <li>不適合複雜工藝的珠寶設計</li>
        <li>日常配戴需特別小心</li>
      </ul>

      <h3>🌟 K金優點：</h3>
      <ul>
        <li>硬度高，不易變形</li>
        <li>適合製作複雜設計的珠寶</li>
        <li>顏色多樣（白K金、玫瑰金等）</li>
        <li>價格相對較低</li>
      </ul>

      <h3>⚠️ K金缺點：</h3>
      <ul>
        <li>回收價值依含金量而定</li>
        <li>部分K金可能引起過敏</li>
        <li>長期配戴可能會褪色</li>
      </ul>

      <h2>黃金與K金回收價格計算怎麼算？</h2>
      <p>回收價格計算公式：<strong>當日金價 × 重量 × 純度%</strong></p>
      <p>舉例來說，假設當日金價為每錢6,000元：</p>
      <ul>
        <li>24K黃金（1兩/5錢）：6,000 × 5 × 99.99{'%'} = 29,997元</li>
        <li>18K金（1兩/5錢）：6,000 × 5 × 75{'%'} = 22,500元</li>
        <li>14K金（1兩/5錢）：6,000 × 5 × 58.5{'%'} = 17,550元</li>
      </ul>

      <h2>什麼時候該選黃金？什麼時候該選K金？</h2>
      <p><strong>選擇純金的情況：</strong></p>
      <ul>
        <li>以投資保值為目的</li>
        <li>作為傳家寶或嫁妝</li>
        <li>在意回收價值</li>
      </ul>

      <p><strong>選擇K金的情況：</strong></p>
      <ul>
        <li>日常配戴需求</li>
        <li>喜歡多樣化的顏色與設計</li>
        <li>預算有限</li>
        <li>需要較堅固的珠寶</li>
      </ul>

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

      <h2>什麼是聯繫我們？</h2>
      <p>📞 電話：0986-821-626</p>
      <p>💬 LINE：@QPD888</p>
      <p>🌐 官網：https://www.gold-tw.com/</p>
      <p>📍 地址：台北市大安區濟南路三段62-1號</p>
    </main>
  );
}