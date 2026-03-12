import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '汐止區黃金回收｜高價回收 K金 白金｜巧品珠寶',
  description: '汐止區黃金回收推薦！專營黃金、K金、白金回收，當日現金支付。',
  keywords: '汐止區黃金回收,汐止珠寶店,新北市黃金收購',
};

export default function Page() {
  return (
    <main style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <h1>汐止區黃金回收｜高價變現</h1>
      
      <h2>為什麼選擇汐止區巧品珠寶？</h2>
      <ul>
        <li>✅ 現場秤重公開透明</li>
        <li>✅ 不扣耗損、不扣秤</li>
        <li>✅ 當日現金支付</li>
        <li>✅ 經營十餘年老字號</li>
        <li>✅ 專業儀器檢測</li>
      </ul>

      <h2>汐止區服務範圍</h2>
      <ul>
        <li>汐止區</li>
        <li>內湖區</li>
        <li>南港區</li>
        <li>瑞芳區</li>
      </ul>

      <hr style={{ margin: '2rem 0' }} />

      <h2>立即聯繫</h2>
      <p>📞 電話：0986-821-626</p>
      <p>💬 LINE：@QPD888</p>
      <p>📍 地址：台北市大安區濟南路三段62-1號1樓</p>

      <a href="/" style={{ color: '#B8860B', fontSize: '1.2rem' }}>→ 前往報價頁面</a>
    </main>
  );
}
