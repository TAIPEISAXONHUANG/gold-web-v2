import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'K金與黃金的差異｜一篇讓你搞懂貴金屬',
  description: 'K金、黃金、白金有什麼不同？一篇讓你搞懂含金量、顏色、價格與保值性。買金飾前必看！',
  keywords: 'K金與黃金的差異,K金是什麼,黃金純度,18K,24K',
  alternates: {
    canonical: 'https://www.gold-tw.com/blog/k-gold-vs-gold',
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
            "headline": "K金與黃金的差異｜一篇讓你搞懂貴金屬",
            "author": { "@type": "Organization", "name": "巧品珠寶", "url": "https://www.gold-tw.com" },
            "datePublished": "2026-03-19",
            "dateModified": "2026-03-19T00:00:00+08:00",
            "description": "K金、黃金、白金有什麼不同？一篇讓你搞懂含金量、顏色、價格與保值性。"
          })
        }}
      />
      <h1>K金與黃金的差異｜一篇讓你搞懂貴金屬</h1>

      <div style={{background:'#fffbeb', borderLeft:'4px solid #f59e0b', padding:'16px', margin:'16px 0', borderRadius:'8px'}}>
        <strong>📌 結論：</strong>黃金純度越高越保值，但K金硬度高更適合製作精細首飾。了解差異才能做出正確選擇！
      </div>

      <h2>🔰 什麼是K金？</h2>
      <p>K金（Karat Gold）是黃金與其他金屬的合金。「1K」代表黃金含量為1/24，因此：</p>
      <ul>
        <li><strong>24K</strong> = 99.9% 純黃金</li>
        <li><strong>18K</strong> = 75% 黃金 + 25% 其他金屬</li>
        <li><strong>14K</strong> = 58.5% 黃金 + 41.5% 其他金屬</li>
        <li><strong>10K</strong> = 41.7% 黃金</li>
      </ul>

      <h2>🎨 黃金 vs K金 vs 白金</h2>
      <table style={{width:'100%', borderCollapse:'collapse', margin:'16px 0'}}>
        <thead>
          <tr style={{background:'#3b82f6', color:'white'}}>
            <th style={{padding:'12px', border:'1px solid #ddd'}}>特性</th>
            <th style={{padding:'12px', border:'1px solid #ddd'}}>黃金（24K）</th>
            <th style={{padding:'12px', border:'1px solid #ddd'}}>K金（18K）</th>
            <th style={{padding:'12px', border:'1px solid #ddd'}}>白金</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{padding:'12px', border:'1px solid #ddd', fontWeight:'bold'}}>含金量</td>
            <td style={{padding:'12px', border:'1px solid #ddd'}}>99.9%</td>
            <td style={{padding:'12px', border:'1px solid #ddd'}}>75%</td>
            <td style={{padding:'12px', border:'1px solid #ddd'}}>不含黃金</td>
          </tr>
          <tr style={{background:'#f9f9f9'}}>
            <td style={{padding:'12px', border:'1px solid #ddd', fontWeight:'bold'}}>顏色</td>
            <td style={{padding:'12px', border:'1px solid #ddd'}}>金黃色</td>
            <td style={{padding:'12px', border:'1px solid #ddd'}}>黃/白/玫瑰金</td>
            <td style={{padding:'12px', border:'1px solid #ddd'}}>銀白色</td>
          </tr>
          <tr>
            <td style={{padding:'12px', border:'1px solid #ddd', fontWeight:'bold'}}>硬度</td>
            <td style={{padding:'12px', border:'1px solid #ddd'}}>較軟</td>
            <td style={{padding:'12px', border:'1px solid #ddd'}}>較硬</td>
            <td style={{padding:'12px', border:'1px solid #ddd'}}>適中</td>
          </tr>
          <tr style={{background:'#f9f9f9'}}>
            <td style={{padding:'12px', border:'1px solid #ddd', fontWeight:'bold'}}>保值性</td>
            <td style={{padding:'12px', border:'1px solid #ddd'}}>⭐⭐⭐⭐⭐</td>
            <td style={{padding:'12px', border:'1px solid #ddd'}}>⭐⭐⭐</td>
            <td style={{padding:'12px', border:'1px solid #ddd'}}>⭐⭐</td>
          </tr>
          <tr>
            <td style={{padding:'12px', border:'1px solid #ddd', fontWeight:'bold'}}>價格</td>
            <td style={{padding:'12px', border:'1px solid #ddd'}}>最高</td>
            <td style={{padding:'12px', border:'1px solid #ddd'}}>中等</td>
            <td style={{padding:'12px', border:'1px solid #ddd'}}>較低</td>
          </tr>
        </tbody>
      </table>

      <h2>💡 怎麼選？</h2>
      <ul>
        <li><strong>投資保值</strong> → 選24K黃金（純度高、易變現）</li>
        <li><strong>日常配戴</strong> → 選18K（硬度夠、不易變形）</li>
        <li><strong>結婚金飾</strong> → 傳統多選24K（保值有意義）</li>
        <li><strong>時尚款式</strong> → 選18K玫瑰金/白金（好看又耐用）</li>
      </ul>

      <h2>🔄 K金可以回收嗎？</h2>
      <p>當然可以！K金一樣有回收價值，但價格會依含金量計算。例如18K金飾的回收價格約為黃金的75%。</p>

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

      <h2>立即查詢當日回收報價</h2>
      <p>📞 電話：0986-821-626</p>
      <p>💬 LINE：@QPD888</p>
      <p>🌐 官網：https://www.gold-tw.com/</p>
      <p>📍 地址：台北市大安區濟南路三段62-1號</p>
      <a href="/" style={{ color: '#B8860B', fontSize: '1.2rem' }}>
        → 前往報價頁面
      </a>
    </main>
  );
}
