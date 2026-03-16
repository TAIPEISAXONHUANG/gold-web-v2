import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '安樂區黃金回收｜高價回收 K金 白金｜巧品珠寶',
  description: '安樂區黃金回收推薦！專營黃金、K金，白金回收，當日現金支付。',
  keywords: '安樂區黃金回收,安樂珠寶店,基隆市黃金收購',
};

export default function Page() {
  return (
    <main style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <h1>安樂區黃金回收｜高價變現</h1>
      
      <h2>為什麼選擇安樂區巧品珠寶？</h2>
      <ul>
        <li>✅ 現場秤重公開透明</li>
        <li>✅ 不扣耗損、不扣秤</li>
        <li>✅ 當日現金支付</li>
        <li>✅ 經營十餘年老字號</li>
        <li>✅ 專業儀器檢測</li>
      </ul>

      <h2>安樂區服務範圍</h2>
      <ul>
        <li>安樂區</li>
        <li>暖暖區</li>
        <li>七堵區</li>
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
    </main>
  );
}
