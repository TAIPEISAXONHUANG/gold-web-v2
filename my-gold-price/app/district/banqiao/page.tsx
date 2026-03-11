import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '板橋區黃金回收｜新北市黃金回收｜巧品珠寶',
  description: '板橋區黃金回收推薦！專營黃金、K金回收，當日現金支付。',
  keywords: '板橋區黃金回收,板橋黃金收購',
};

export default function Page() {
  return (
    <main style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <h1>板橋區黃金回收｜高價變現</h1>
      <ul>
        <li>✅ 不扣秤、不扣耗損</li>
        <li>✅ 當日現金支付</li>
        <li>📍 服務：板橋區、江子翠、新埔</li>
      </ul>
      <p>📞 0986-821-626</p>
      <a href="/">→ 前往官網</a>
    </main>
  );
}
