import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '中正區黃金回收｜高價回收 K金 白金｜巧品珠寶',
  description: '中正區黃金回收推薦！專營黃金、K金回收，當日現金支付。',
  keywords: '中正區黃金回收,中正區珠寶店,台北市中正區黃金收購',
};

export default function Page() {
  return (
    <main style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <h1>中正區黃金回收｜高價變現</h1>
      
      <h2>為什麼選擇巧品珠寶？</h2>
      <ul>
        <li>✅ 現場秤重公開透明</li>
        <li>✅ 不扣耗損、不扣秤</li>
        <li>✅ 當日現金支付</li>
        <li>✅ 經營十餘年老字號</li>
      </ul>

      <h2>我們回收的項目</h2>
      <ul>
        <li>📦 黃金條塊，金飾</li>
        <li>💍 K金首飾（18K、14K、10K）</li>
        <li>💎 白金、鉑金</li>
        <li>⌚ 機械錶、勞力士</li>
      </ul>

      <hr style={{ margin: '2rem 0' }} />

      <h2>立即聯繫</h2>
      <p>📞 電話：0986-821-626</p>
      <p>💬 LINE：@SDN6jpk</p>
      <p>📍 地址：台北市大安區濟南路三段62-1號1樓（中正區旁）</p>

      <a href="/" style={{ color: '#B8860B', fontSize: '1.2rem' }}>
        → 前往報價頁面
      </a>
    </main>
  );
}
