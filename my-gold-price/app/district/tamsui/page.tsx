import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '淡水區黃金回收｜新北市黃金回收｜巧品珠寶',
  description: '淡水區、八德區黃金回收推薦！',
  keywords: '淡水區黃金回收,八德區黃金回收',
};

export default function Page() {
  return (
    <main style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <h1>淡水/八德區黃金回收</h1>
      <ul>
        <li>✅ 不扣秤、不扣耗損</li>
        <li>📍 服務：淡水區、八德區、三芝區</li>
      </ul>
      <p>📞 0986-821-626</p>
      <a href="/">→ 官網</a>
    </main>
  );
}
