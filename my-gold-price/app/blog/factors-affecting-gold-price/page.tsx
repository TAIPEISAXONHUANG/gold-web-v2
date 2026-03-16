import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '影響黃金回收價格的關鍵因素｜台北黃金回收必看',
  description: '想知道黃金回收價格怎麼算？了解影響黃金價格5大因素，包括國際金價、純度、重量、市場趨勢等。',
  keywords: '黃金回收,黃金價格,影響黃金價格因素,台北黃金回收',
  alternates: {
    canonical: 'https://www.gold-tw.com/blog/factors-affecting-gold-price',
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
            "headline": "影響黃金回收價格的關鍵因素",
            "author": {
              "@type": "Organization",
              "name": "巧品珠寶"
            },
            "publisher": {
              "@type": "Organization",
              "name": "巧品珠寶"
            },
            "datePublished": "2026-03-12",
              "dateModified": "2026-03-16T00:00:00+08:00",
            "description": "了解影響黃金回收價格的5大關鍵因素"
          })
        }}
      />
      <h1>影響黃金回收價格的關鍵因素</h1>
      
      <h2>結論：5大因素決定黃金回收價格</h2>
      
      <h2>1. 國際金價走勢</h2>
      <p>黃金回收價格與國際金價直接相關，每日隨市場波動。建議先上網查詢當日牌價。</p>

      <h2>2. 黃金純度</h2>
      <ul>
        <li><strong>9999純金(24K)</strong> = 最高價</li>
        <li><strong>18K</strong> = 75%純度</li>
        <li><strong>14K</strong> = 58.5%純度</li>
      </ul>

      <h2>3. 重量計算</h2>
      <p>以「錢」為單位。1錢=3.75克。現場秤重時務必親眼看見數字。</p>

      <h2>4. 市場供需</h2>
      <p>農曆年前、結婚旺季需求較高，價格相對較好。</p>

      <h2>5. 回收商家報價</h2>
      <p>不同店家報價不同，建議多方比價，選擇誠信店家。</p>

      <div style={{{{ margin: '2rem 0', padding: '1.5rem', background: '#FEF9E7', borderRadius: '8px', borderLeft: '4px solid #B8860B' }}}}>
        <strong>相關文章：</strong>
        <ul style={{{{ marginTop: '0.5rem', paddingLeft: '1.5rem' }}}}>
        <li><a href="/blog/gold-price-2026" style={{ color: "#B8860B" }}>2026黃金行情分析</a></li>
        <li><a href="/blog/gold-price-forecast-2026" style={{ color: "#B8860B" }}>2026黃金價格預測</a></li>
        <li><a href="/blog/gold-price-key-factors" style={{ color: "#B8860B" }}>黃金價格關鍵因素</a></li>
        <li><a href="/blog/gold-liquid" style={{ color: "#B8860B" }}>黃金變現指南</a></li>
        </ul>
      </div>

      <hr style={{ margin: '2rem 0' }} />

      <h2>立即查詢今日報價</h2>
      <p>📞 電話：0986-821-626</p>
      <p>💬 LINE：@QPD888</p>
      <p>🌐 官網：https://www.gold-tw.com/</p>
    </main>
  );
}
