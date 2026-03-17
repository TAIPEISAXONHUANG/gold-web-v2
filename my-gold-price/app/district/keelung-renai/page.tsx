import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '仁愛區黃金回收｜高價回收 K金 白金｜巧品珠寶',
  description: '仁愛區黃金回收推薦！專營黃金、K金、白金回收，當日現金支付。',
  keywords: '仁愛區黃金回收,仁愛珠寶店,基隆市黃金收購',
};

export default function Page() {
  return (
    <main style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"首頁","item":"https://www.gold-tw.com"},{"@type":"ListItem","position":2,"name":"黃金回收地區","item":"https://www.gold-tw.com/district"},{"@type":"ListItem","position":3,"name":"仁愛區黃金回收｜高價回收 K金 白金｜巧品珠寶"}]})
        }}
      />
      <h1>仁愛區黃金回收｜高價變現</h1>
      
      <h2>為什麼選擇仁愛區巧品珠寶？</h2>
      <ul>
        <li>✅ 現場秤重公開透明</li>
        <li>✅ 不扣耗損、不扣秤</li>
        <li>✅ 當日現金支付</li>
        <li>✅ 經營十餘年老字號</li>
        <li>✅ 專業儀器檢測</li>
      </ul>

      <h2>仁愛區服務範圍</h2>
      <ul>
        <li>仁愛區</li>
        <li>中正區</li>
        <li>中山區</li>
        <li>信義區</li>
      </ul>

      <div style={{ margin: '2rem 0', padding: '1.5rem', background: '#FEF9E7', borderRadius: '8px', borderLeft: '4px solid #B8860B' }}>
        <strong>延伸閱讀：</strong>
        <ul style={{ marginTop: '0.5rem', paddingLeft: '1.5rem' }}>
          <li><a href="/blog/gold-appraise" style={{ color: "#B8860B" }}>黃金免費估價｜免費專業鑑定</a></li>
          <li><a href="/blog/gold-recycling-process" style={{ color: "#B8860B" }}>黃金回收流程完整說明</a></li>
          <li><a href="/blog/gold-scam-prevent" style={{ color: "#B8860B" }}>黃金回收詐騙防範指南</a></li>
          <li><a href="/blog/what-to-bring-when-selling-gold-2026" style={{ color: "#B8860B" }}>賣黃金要帶什麼？完整清單</a></li>
          <li><a href="/blog/gold-purity" style={{ color: "#B8860B" }}>黃金純度完整說明</a></li>
        </ul>
      </div>

      <hr style={{ margin: '2rem 0' }} />

      <h2>立即聯繫</h2>
      <p>📞 電話：0986-821-626</p>
      <p>💬 LINE：@QPD888</p>
      <p>📍 地址：台北市大安區濟南路三段62-1號1樓</p>

      <a href="/" style={{ color: '#B8860B', fontSize: '1.2rem' }}>→ 前往報價頁面</a>
    
      <section style={{marginTop:'3rem', padding:'2rem', background:'#f9fafb', borderRadius:'12px', border:'1px solid #e5e7eb'}}>
        <h2 style={{fontSize:'1.3rem', fontWeight:'bold', color:'#1f2937', marginBottom:'1rem'}}>🗺️ 鄰近地區黃金回收</h2>
        <h3 style={{fontSize:'1rem', color:'#6b7280', marginBottom:'0.5rem'}}>基隆市其他地區</h3>
        <ul style={{listStyle:'none', padding:0, marginBottom:'1.5rem'}}>
        <li style={{marginBottom:'8px'}}><a href="/district/keelung" style={{color:'#991b1b', textDecoration:'none', fontWeight:'bold'}}>基隆市黃金回收</a></li>
        <li style={{marginBottom:'8px'}}><a href="/district/keelung-nuannuan" style={{color:'#991b1b', textDecoration:'none', fontWeight:'bold'}}>基隆暖暖區黃金回收</a></li>
        <li style={{marginBottom:'8px'}}><a href="/district/keelung-qidu" style={{color:'#991b1b', textDecoration:'none', fontWeight:'bold'}}>基隆七堵區黃金回收</a></li>
        <li style={{marginBottom:'8px'}}><a href="/district/keelung-anle" style={{color:'#991b1b', textDecoration:'none', fontWeight:'bold'}}>基隆安樂區黃金回收</a></li>
        </ul>
        <h3 style={{fontSize:'1rem', color:'#6b7280', marginBottom:'0.5rem'}}>其他地區</h3>
        <ul style={{listStyle:'none', padding:0}}>
        <li style={{marginBottom:'8px'}}><a href="/district/da-an" style={{color:'#991b1b', textDecoration:'none', fontWeight:'bold'}}>大安區黃金回收</a></li>
        <li style={{marginBottom:'8px'}}><a href="/district/banqiao" style={{color:'#991b1b', textDecoration:'none', fontWeight:'bold'}}>板橋區黃金回收</a></li>
        </ul>
        <p style={{marginTop:'1rem', fontSize:'0.9rem', color:'#6b7280'}}>
          📞 不限地區，歡迎來電詢價：<a href="tel:0986821626" style={{color:'#991b1b', fontWeight:'bold'}}>0986-821-626</a>
        </p>
      </section>
    </main>
  );
}
