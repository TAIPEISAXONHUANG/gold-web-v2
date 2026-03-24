import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '黃金與K金完整比較｜純度、價格、優缺點一篇看懂｜巧品珠寶',
  description: '黃金與K金哪個好？24K、18K、14K怎麼選？完整比較純度、價格、優缺點、回收價值，幫您做出最佳選擇。不論投資或配戴都適用。',
  keywords: '黃金與K金比較,24K黃金,18K金,14K金,純度比較,黃金vs K金',
  alternates: {
    canonical: 'https://www.gold-tw.com/blog/gold-vs-k-gold-comparison',
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
            "@type": "Article",
            "headline": "黃金與K金完整比較｜純度、價格、優缺點一篇看懂",
            "author": { "@type": "Organization", "name": "巧品珠寶", "url": "https://www.gold-tw.com", "@id": "https://www.gold-tw.com/#business" },
            "publisher": { "@type": "Organization", "name": "巧品珠寶", "url": "https://www.gold-tw.com", "logo": { "@type": "ImageObject", "url": "https://wsrv.nl/?url=https://drive.google.com/uc?id=16UrCpYWRkyEkvL7M73o0DIAvkKWtF0Lp&w=200&output=webp" } },
            "datePublished": "2026-03-24",
            "dateModified": "2026-03-24T00:00:00+08:00",
            "description": "黃金與K金完整比較指南：24K、18K、14K純度分析，價格計算方式，優缺點對比，回收價值評估。讓您輕鬆做出正確選擇。"
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"首頁","item":"https://www.gold-tw.com"},{"@type":"ListItem","position":2,"name":"知識專欄","item":"https://www.gold-tw.com/blog"},{"@type":"ListItem","position":3,"name":"黃金與K金完整比較｜純度、價格、優缺點一篇看懂"}]})
        }}
      />
      <h1>黃金與K金完整比較｜純度、價格、優缺點一篇看懂</h1>

      <div style={{background:'#fffbeb', borderLeft:'4px solid #f59e0b', padding:'16px', margin:'16px 0', borderRadius:'8px'}}>
        <strong>📌 重點摘要：</strong> 黃金與K金最大的差異在於「純度」！24K是99.99{'$'}{'%'}純金，18K是75{'$'}{'%'}，14K是58.5{'$'}{'%'}。純度越高越保值，K金硬度較高更適合日常配戴。選對種類才能兼顧價值與實用！
      </div>
      
      <h2>結論：了解黃金與K金的差異，才能做出正確選擇！</h2>

      <h2>什麼是黃金？什麼是K金？</h2>
      <p><strong>黃金（純金/24K）</strong>是指含金量99.99{'$'}{'%'}的黃金，是最純粹的黃金形態。顏色最接近黃金本色，投資價值最高，但質地較軟，容易變形刮傷。</p>
      <p><strong>K金</strong>是黃金與其他金屬（銀、銅、鎳等）的合金，添加其他金屬是為了<strong>增加硬度與耐久性</strong>。K數代表含金量，常見的有24K、22K、18K、14K、10K。</p>

      <h2>黃金與K金純度對照表</h2>
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
            <td style={{ padding: '10px' }}><strong>24K</strong></td>
            <td style={{ padding: '10px' }}>99.99{'$'}{'%'}</td>
            <td style={{ padding: '10px' }}>9999</td>
            <td style={{ padding: '10px' }}>最純，投資首選</td>
          </tr>
          <tr style={{ borderBottom: '1px solid #ddd' }}>
            <td style={{ padding: '10px' }}>22K</td>
            <td style={{ padding: '10px' }}>91.6{'$'}{'%'}</td>
            <td style={{ padding: '10px' }}>916</td>
            <td style={{ padding: '10px' }}>硬度適中</td>
          </tr>
          <tr style={{ borderBottom: '1px solid #ddd' }}>
            <td style={{ padding: '10px' }}><strong>18K</strong></td>
            <td style={{ padding: '10px' }}>75{'$'}{'%'}</td>
            <td style={{ padding: '10px' }}>750</td>
            <td style={{ padding: '10px' }}>硬度高，珠寶常用</td>
          </tr>
          <tr style={{ borderBottom: '1px solid #ddd' }}>
            <td style={{ padding: '10px' }}><strong>14K</strong></td>
            <td style={{ padding: '10px' }}>58.5{'$'}{'%'}</td>
            <td style={{ padding: '10px' }}>585</td>
            <td style={{ padding: '10px' }}>硬度高，價格實惠</td>
          </tr>
          <tr style={{ borderBottom: '1px solid #ddd' }}>
            <td style={{ padding: '10px' }}>10K</td>
            <td style={{ padding: '10px' }}>41.7{'$'}{'%'}</td>
            <td style={{ padding: '10px' }}>417</td>
            <td style={{ padding: '10px' }}>硬度最高，價格最低</td>
          </tr>
        </tbody>
      </table>

      <h2>黃金（24K）的優缺點</h2>
      
      <h3>🌟 優點：</h3>
      <ul>
        <li><strong>價值最高</strong>：投資與保值首選，回收價值損失最少</li>
        <li><strong>顏色金黃亮麗</strong>：質感最好，最接近黃金本色</li>
        <li><strong>不易過敏</strong>：純金不會引起皮膚過敏問題</li>
        <li><strong>變現容易</strong>：隨時可在市場上回收變現</li>
      </ul>

      <h3>⚠️ 缺點：</h3>
      <ul>
        <li><strong>質地較軟</strong>：容易變形，不適合精細珠寶設計</li>
        <li><strong>容易刮傷</strong>：日常配戴需特別小心呵護</li>
        <li><strong>價格較高</strong>：因為純度高，售價與回收價都較高</li>
      </ul>

      <h2>K金的優缺點</h2>
      
      <h3>🌟 優點：</h3>
      <ul>
        <li><strong>硬度高</strong>：不易變形，適合日常配戴</li>
        <li><strong>設計多樣</strong>：可製作複雜精美的珠寶款式</li>
        <li><strong>顏色豐富</strong>：除了黃色，還有白K金、玫瑰金、黑金等選擇</li>
        <li><strong>價格實惠</strong>：因為含金量較低，售價相對親民</li>
      </ul>

      <h3>⚠️ 缺點：</h3>
      <ul>
        <li><strong>回收價值較低</strong>：依含金量比例計算，投資保值性較差</li>
        <li><strong>可能過敏</strong>：部分K金含有鎳等金屬，可能引起過敏</li>
        <li><strong>可能褪色</strong>：長期配戴後表面鍍層可能褪色</li>
        <li><strong>保值性較低</strong>：款式與品牌會影響收購意願</li>
      </ul>

      <h2>黃金與K金價格計算</h2>
      <p>回收價格公式：<strong>當日金價 × 重量 × 純度%</strong></p>
      <p>假設當日金價為每錢6,000元，1兩（5錢）的黃金：</p>
      <table style={{ width: '100%', borderCollapse: 'collapse', margin: '1rem 0' }}>
        <tbody>
          <tr style={{ borderBottom: '1px solid #ddd' }}>
            <td style={{ padding: '10px' }}>24K（99.99{'$'}{'%'}）</td>
            <td style={{ padding: '10px' }}>6,000 × 5 × 99.99{'$'}{'%'} = <strong>29,997元</strong></td>
          </tr>
          <tr style={{ borderBottom: '1px solid #ddd' }}>
            <td style={{ padding: '10px' }}>18K（75{'$'}{'%'}）</td>
            <td style={{ padding: '10px' }}>6,000 × 5 × 75{'$'}{'%'} = <strong>22,500元</strong></td>
          </tr>
          <tr style={{ borderBottom: '1px solid #ddd' }}>
            <td style={{ padding: '10px' }}>14K（58.5{'$'}{'%'}）</td>
            <td style={{ padding: '10px' }}>6,000 × 5 × 58.5{'$'}{'%'} = <strong>17,550元</strong></td>
          </tr>
        </tbody>
      </table>

      <h2>什麼時候選黃金？什麼時候選K金？</h2>
      
      <h3>✅ 選擇黃金（24K）的時機：</h3>
      <ul>
        <li>以<strong>投資保值</strong>為主要目的</li>
        <li>作為<strong>傳家寶或嫁妝</strong></li>
        <li>在意未來的<strong>回收價值</strong></li>
        <li>購買<strong>金條、金塊</strong>等投資型黃金</li>
      </ul>

      <h3>✅ 選擇K金的時機：</h3>
      <ul>
        <li>以<strong>日常配戴</strong>為主要需求</li>
        <li>喜歡<strong>多樣化的顏色與設計</strong></li>
        <li><strong>預算有限</strong>，想買較大件的珠寶</li>
        <li>需要<strong>堅固耐用</strong>的珠寶首飾</li>
      </ul>

      <h2>黃金與K金常見迷思</h2>

      <h3>迷思1：K金不值錢？</h3>
      <p>❌ 錯誤！K金當然有價值，只是回收價格會按含金量比例計算。18K的回收價值約是純金的75{'$'}{'%'}，並非完全沒有價值。</p>

      <h3>迷思2：24K最值得買？</h3>
      <p>❌ 不一定！如果目的是日常配戴，24K因為太軟容易損壞，反而不如18K實用。買珠寶要根據用途選擇。</p>

      <h3>迷思3：K金不會變色？</h3>
      <p>❌ 錯誤！部分K金表面有鍍層，長期配戴後可能會褪色或變色。保養方式依含金量與電鍍方式而異。</p>

      <div style={{ margin: '2rem 0', padding: '1.5rem', background: '#FEF9E7', borderRadius: '8px', borderLeft: '4px solid #B8860B' }}>
        <strong>延伸閱讀：</strong>
        <ul style={{ marginTop: '0.5rem', paddingLeft: '1.5rem' }}>
          <li><a href="/blog/karat-gold-guide" style={{ color: '#B8860B' }}>K金回收完全攻略</a></li>
          <li><a href="/blog/gold-purity" style={{ color: '#B8860B' }}>黃金純度說明</a></li>
          <li><a href="/blog/gold-recovery-faq" style={{ color: '#B8860B' }}>黃金回收FAQ</a></li>
          <li><a href="/blog/gold-vs-k-gold-vs-platinum" style={{ color: '#B8860B' }}>黃金vs K金vs 白金</a></li>
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
