import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '結婚金飾變現案例｜客戶真實分享｜巧品珠寶',
  description: '結婚金飾變現實際案例公開！客戶賣出結婚金飾當日現領現金，詳細過程與心得分享。',
  keywords: '結婚金飾變現案例,黃金回收客戶分享,金飾變現心得',
  alternates: {
    canonical: 'https://www.gold-tw.com/case-studies/wedding-gold-cashout-2026',
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
            "@type": "CaseStudy",
            "name": "結婚金飾變現案例",
            "description": "結婚金飾變現，客戶滿意價格現領現金",
            "author": {
              "@type": "Organization",
              "name": "巧品珠寶"
            },
            "datePublished": "2026-03-18",
            "provider": {
              "@type": "Organization",
              "name": "巧品珠寶",
              "telephone": "0986-821-626",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "台北市大安區濟南路三段62-1號",
                "addressLocality": "台北市",
                "addressRegion": "台灣"
              }
            },
            "about": {
              "@type": "Product",
              "name": "結婚金飾回收",
              "description": "9999純金結婚金飾回收"
            }
          })
        }}
      />
      
      {/* Review Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Review",
            "itemReviewed": {
              "@type": "Organization",
              "name": "巧品珠寶"
            },
            "reviewRating": {
              "@type": "Rating",
              "ratingValue": "5",
              "bestRating": "5"
            },
            "author": {
              "@type": "Person",
              "name": "匿名客戶"
            },
            "reviewBody": "結婚金飾順利變現，價格合理，服務專業，推薦！",
            "datePublished": "2026-03-18"
          })
        }}
      />

      <h1>結婚金飾變現案例</h1>
      
      <div style={{ background: '#FEF9E7', padding: '1.5rem', borderRadius: '8px', margin: '1.5rem 0' }}>
        <h2 style={{ marginTop: 0, color: '#B8860B' }}>📋 案例概要</h2>
        <ul style={{ marginBottom: 0 }}>
          <li><strong>客戶類型：</strong>結婚新人</li>
          <li><strong>黃金種類：</strong>結婚金飾（項鏈、戒指、耳環）</li>
          <li><strong>黃金重量：</strong>約15兩</li>
          <li><strong>回收價格：</strong>高於市場行情</li>
          <li><strong>客戶回饋：</strong>⭐⭐⭐⭐⭐ 非常滿意</li>
        </ul>
      </div>

      <h2>客戶背景</h2>
      <p>這位客戶在結婚時購買了整套結婚金飾，包括項鏈、戒指和耳環。隨著時間過去，結婚金飾長期被放在珠寶盒中沒有配戴，決定將其變現。</p>

      <h2>黃金數量與種類</h2>
      <ul>
        <li>9999純金項鏈（約8兩）</li>
        <li>9999純金戒指（1對，約3兩）</li>
        <li>9999純金耳環（1對，約2兩）</li>
        <li>其他金飾配件（約2兩）</li>
        <li><strong>總重量：約15兩（562.5克）</strong></li>
      </ul>

      <h2>回收流程</h2>
      <ol>
        <li>客戶透過LINE聯繫我們，免費預約估價</li>
        <li>攜帶結婚金飾到店，現場專業儀器檢測</li>
        <li>公開秤重，不扣耗損、不扣秤</li>
        <li>報價確認後，當日現金支付</li>
      </ol>

      <h2>為什麼選擇我們？</h2>
      <ul>
        <li>✅ <strong>不扣耗損</strong>：按實際重量計算</li>
        <li>✅ <strong>不扣秤</strong>：現場公開秤重</li>
        <li>✅ <strong>價格透明</strong>：根據當日國際金價</li>
        <li>✅ <strong>快速變現</strong>：當日現領現金</li>
        <li>✅ <strong>專業檢測</strong>：使用專業儀器分析純度</li>
        <li>✅ <strong>誠信經營</strong>：30年老店，信用可靠</li>
      </ul>

      <h2>客戶回饋</h2>
      <blockquote style={{ 
        background: '#f5f5f5', 
        padding: '1rem', 
        borderLeft: '4px solid #B8860B',
        margin: '1rem 0',
        fontStyle: 'italic'
      }}>
        "原本很擔心被扣秤或扣耗損，結果完全沒有！老闆很專業，用儀器檢測後現場秤重，當日就拿到現金了。價格也比問過的其他家高，非常滿意！"
      </blockquote>
      <p style={{ textAlign: 'right' }}>— 匿名客戶</p>

      <div style={{ margin: '2rem 0', padding: '1.5rem', background: '#E8F5E9', borderRadius: '8px' }}>
        <h3 style={{ marginTop: 0, color: '#2E7D32' }}>💡 結婚金飾變現小提醒</h3>
        <ul style={{ marginBottom: 0 }}>
          <li>結婚金飾通常為9999純金，回收價值高</li>
          <li>攜帶購買時的保單或證明有助於估價</li>
          <li>建議先比較幾家再做決定</li>
          <li>選擇公開秤重、不扣耗損的店家</li>
        </ul>
      </div>

      <hr style={{ margin: '2rem 0' }} />
      
      <h3>其他客戶案例</h3>
      <ul>
        <li><a href="/case-studies/inheritance-gold-recovery-2026" style={{ color: "#B8860B" }}>遺產黃金回收案例</a></li>
        <li><a href="/case-studies/karat-gold-recovery-2026" style={{ color: "#B8860B" }}>K金回收案例</a></li>
        <li><a href="/case-studies/gold-bar-cashout-2026" style={{ color: "#B8860B" }}>大量黃金條塊變現案例</a></li>
      </ul>

      <hr style={{ margin: '2rem 0' }} />
      <p>📞 電話：0986-821-626</p>
      <p>💬 LINE：@QPD888</p>
      <p>🌐 官網：https://www.gold-tw.com/</p>
      <p>📍 地址：台北市大安區濟南路三段62-1號</p>
    </main>
  );
}
