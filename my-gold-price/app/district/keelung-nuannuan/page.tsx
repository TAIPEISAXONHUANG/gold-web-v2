import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '暖暖區黃金回收｜高價回收 K金 白金｜巧品珠寶',
  description: '暖暖區黃金回收推薦！專營黃金、K金、白金回收，當日現金支付。',
  keywords: '暖暖區黃金回收,暖暖珠寶店,基隆市黃金收購',
};

export default function Page() {
  return (
    <main style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"首頁","item":"https://www.gold-tw.com"},{"@type":"ListItem","position":2,"name":"黃金回收地區","item":"https://www.gold-tw.com/district"},{"@type":"ListItem","position":3,"name":"暖暖區黃金回收｜高價回收 K金 白金｜巧品珠寶"}]})
        }}
      />
      <h1>暖暖區黃金回收｜高價變現</h1>
      
      <h2>為什麼選擇暖暖區巧品珠寶？</h2>
      <ul>
        <li>✅ 現場秤重公開透明</li>
        <li>✅ 不扣耗損、不扣秤</li>
        <li>✅ 當日現金支付</li>
        <li>✅ 經營十餘年老字號</li>
        <li>✅ 專業儀器檢測</li>
      </ul>

      <h2>暖暖區服務範圍</h2>
      <ul>
        <li>暖暖區</li>
        <li>七堵區</li>
        <li>瑞芳區</li>
        <li>中山區</li>
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
    </main>
  );
}
