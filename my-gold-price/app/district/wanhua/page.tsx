import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '萬華區黃金回收｜台北黃金回收｜巧品珠寶',
  description: '萬華區黃金回收推薦！專營黃金、K金回收。',
  keywords: '萬華區黃金回收,板橋區黃金回收',
};

export default function Page() {
  return (
    <main style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <h1>萬華/板橋區黃金回收</h1>
      <ul>
        <li>✅ 不扣秤、不扣耗損</li>
        <li>📍 服務：萬華區、板橋區</li>
      </ul>
      <p>📞 0986-821-626</p>
      <a href="/">→ 官網</a>
    </main>
  );
}
