import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '中山區黃金回收｜高價回收｜巧品珠寶',
  description: '中山區黃金回收推薦！專營黃金、K金回收，當日現金支付。',
  keywords: '中山區黃金回收,大同區黃金回收',
};

export default function Page() {
  return (
    <main style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <h1>中山區黃金回收｜高價變現</h1>
      <ul>
        <li>✅ 不扣秤、不扣耗損</li>
        <li>✅ 當日現金支付</li>
        <li>📍 服務：大同區、中山區</li>
      </ul>
      <p>📞 0986-821-626</p>
      <a href="/">→ 前往官網</a>
    </main>
  );
}
