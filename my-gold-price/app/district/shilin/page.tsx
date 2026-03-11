import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '士林區黃金回收｜高價回收｜巧品珠寶',
  description: '士林區黃金回收推薦！專營黃金、K金、白金回收，當日現金支付。',
  keywords: '士林區黃金回收,士林黃金收購,北投區黃金回收',
};

export default function Page() {
  return (
    <main style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <h1>士林區黃金回收｜高價變現</h1>
      <p>士林區、北投區黃金回收推薦首選！</p>
      
      <h2>為什麼選擇我們？</h2>
      <ul>
        <li>✅ 不扣秤、不扣耗損</li>
        <li>✅ 當日現金支付</li>
        <li>✅ 專業儀器檢測</li>
        <li>✅ 十年誠信老店</li>
      </ul>

      <h2>服務範圍</h2>
      <ul>
        <li>📍 士林區</li>
        <li>📍 北投區</li>
        <li>📍 內湖區</li>
      </ul>

      <h2>聯繫我們</h2>
      <p>📞 電話：0986-821-626</p>
      <p>💬 LINE：@SDN6jpk</p>
      <p>📍 台北市大安區濟南路三段62-1號1樓</p>

      <a href="/">→ 前往官網</a>
    </main>
  );
}
