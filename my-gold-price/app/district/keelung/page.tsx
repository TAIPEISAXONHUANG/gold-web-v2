import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '基隆黃金回收｜基隆市黃金回收｜巧品珠寶',
  description: '基隆市黃金回收推薦！專營黃金、K金回收。',
  keywords: '基隆黃金回收,基隆市黃金回收',
};

export default function Page() {
  return (
    <main style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <h1>基隆市黃金回收</h1>
      <ul>
        <li>✅ 不扣秤、不扣耗損</li>
        <li>📍 服務：基隆市、暖暖區、七堵區</li>
      </ul>
      <p>📞 0986-821-626</p>
      <a href="/">→ 官網</a>
    </main>
  );
}
