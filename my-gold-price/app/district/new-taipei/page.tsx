import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '新北市黃金回收｜高價回收｜巧品珠寶',
  description: '新北市黃金回收推薦！專營黃金、K金、白金回收，當日現金支付。',
  keywords: '新北市黃金回收,中和黃金回收,板橋黃金回收,新莊黃金回收',
};

export default function Page() {
  return (
    <main style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <h1>新北市黃金回收｜高價變現</h1>
      <p>新北市各區黃金回收推薦首選！</p>
      
      <h2>為什麼選擇我們？</h2>
      <ul>
        <li>✅ 不扣秤、不扣耗損</li>
        <li>✅ 當日現金支付</li>
        <li>✅ 專業儀器檢測</li>
        <li>✅ 十年誠信老店</li>
      </ul>

      <h2>服務範圍（新北市）</h2>
      <ul>
        <li>📍 板橋區</li>
        <li>📍 中和區</li>
        <li>📍 新莊區</li>
        <li>📍 永和區</li>
        <li>📍 土城區</li>
        <li>📍 蘆洲區</li>
        <li>📍 三重區</li>
      </ul>

      <h2>聯繫我們</h2>
      <p>📞 電話：0986-821-626</p>
      <p>💬 LINE：@SDN6jpk</p>
      <p>📍 台北市大安區濟南路三段62-1號1樓</p>

      <a href="/">→ 前往官網</a>
    </main>
  );
}
