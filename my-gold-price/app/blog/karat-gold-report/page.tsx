import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'K金回收行情報告｜18K、14K多少錢？',
  description: 'K金回收現場報告！18K、14K黃金實際估價流程，2026年最新K金行情揭露，讓你了解K金到底值多少錢。',
  keywords: 'K金回收,18K多少錢,14K回收行情,K金價格',
  alternates: {
    canonical: 'https://www.gold-tw.com/blog/karat-gold-report',
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
            "headline": "K金回收行情報告｜18K、14K多少錢？",
            "author": { "@type": "Organization", "name": "巧品珠寶", "url": "https://www.gold-tw.com", "@id": "https://www.gold-tw.com/#business" },
            "publisher": { "@type": "Organization", "name": "巧品珠寶", "url": "https://www.gold-tw.com", "logo": { "@type": "ImageObject", "url": "https://wsrv.nl/?url=https://drive.google.com/uc?id=16UrCpYWRkyEkvL7M73o0DIAvkKWtF0Lp&w=200&output=webp" } },
            "datePublished": "2026-03-15T00:00:00+08:00",
              "dateModified": "2026-03-16T00:00:00+08:00",
            "description": "K金回收必看！18K、14K多少錢？2026年K金回收行情完整揭露"
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"首頁","item":"https://www.gold-tw.com"},{"@type":"ListItem","position":2,"name":"知識專欄","item":"https://www.gold-tw.com/blog"},{"@type":"ListItem","position":3,"name":"K金回收行情報告｜18K、14K多少錢？"}]})
        }}
      />
      <h1>K金回收行情報告｜18K、14K多少錢？</h1>

      <div style={{background:'#fffbeb', borderLeft:'4px solid #f59e0b', padding:'16px', margin:'16px 0', borderRadius:'8px'}}>
        <strong>📌 重點摘要：</strong> K金鑑定報告說明：XRF螢光分析可精確測出含金比例，報告會標示各金屬成分百分比，作為回收計價依據。
      </div>
      
      <h2>結論：K金回收價格根據純度計算，本文完整揭露2026年最新行情！</h2>

      <h2>什麼是K金？</h2>
      <p>K金是指黃金與其他金屬的合金，用「K」表示純度：</p>
      <ul>
        <li><strong>24K</strong> = 99.9% 純黃金</li>
        <li><strong>18K</strong> = 75% 黃金 + 25% 其他金屬</li>
        <li><strong>14K</strong> = 58.3% 黃金 + 41.7% 其他金屬</li>
        <li><strong>10K</strong> = 41.7% 黃金 + 58.3% 其他金屬</li>
      </ul>

      <h2>K金回收計算方式</h2>
      <p><strong>回收價格 = 當日純金牌價 × 重量 × K金純度</strong></p>
      <p>例如：18K金飾5錢，當日牌價20,000元，回收價格約為 20,000 × 5 × 75% = 75,000元</p>

      <div style={{ margin: '2rem 0', padding: '1.5rem', background: '#FEF9E7', borderRadius: '8px', borderLeft: '4px solid #B8860B' }}>
        <strong>延伸閱讀：</strong>
        <ul style={{ marginTop: '0.5rem', paddingLeft: '1.5rem' }}>
          <li><a href="/blog/karat-gold-guide" style={{ color: '#B8860B' }}>K金回收完整攻略</a></li>
          <li><a href="/blog/karat-gold-price" style={{ color: '#B8860B' }}>K金價格計算</a></li>
          <li><a href="/blog/karat-gold-recovery" style={{ color: '#B8860B' }}>K金回收方式</a></li>
          <li><a href="/blog/k-gold-vs-gold" style={{ color: '#B8860B' }}>K金與黃金比較</a></li>
        </ul>
      </div>

      <hr style={{ margin: '2rem 0' }} />

      <h2>📊 K金純度對照表</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ background: '#f5f5f5' }}>
            <th style={{ padding: '10px', border: '1px solid #ddd' }}>K數</th>
            <th style={{ padding: '10px', border: '1px solid #ddd' }}>純度</th>
            <th style={{ padding: '10px', border: '1px solid #ddd' }}>回收比例</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>24K</td><td>99.9%</td><td>100%</td></tr>
          <tr><td>18K</td><td>75%</td><td>75%</td></tr>
          <tr><td>14K</td><td>58.3%</td><td>58.3%</td></tr>
          <tr><td>10K</td><td>41.7%</td><td>41.7%</td></tr>
        </tbody>
      </table>

      <h2>為什麼選擇我們？</h2>
      <ul>
        <li><strong>10年以上經驗</strong> - 專業估價</li>
        <li><strong>不扣耗損</strong> - 按實際重量計算</li>
        <li><strong>當面秤重</strong> - 公開透明</li>
        <li><strong>現場付款</strong> - 立即現金</li>
      </ul>

      <hr style={{ margin: '2rem 0' }} />

      <h2>❓ 常見問題FAQ</h2>
      <h3>Q：K金跟純金差在哪？</h3>
      <p>A：K金是合金，硬度較高，適合製作珠寶首飾；純金較軟，但保值性較高。</p>
      
      <h3>Q：18K回收多少錢？</h3>
      <p>A：18K回收價格約為純金的75%，需視當日牌價而定。</p>

      <hr style={{ margin: '2rem 0' }} />

      <h2>📞 聯繫我們</h2>
      <p>📞 電話：0986-821-626</p>
      <p>💬 LINE：@QPD888</p>
      <p>🌐 官網：https://www.gold-tw.com/</p>
      <p>📍 地址：台北市大安區濟南路三段62-1號</p>
    </main>
  );
}
