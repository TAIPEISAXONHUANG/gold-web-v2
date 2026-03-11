import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '土城區黃金回收｜新北市黃金回收｜巧品珠寶',
  description: '土城區、樹林區黃金回收推薦！',
  keywords: '土城區黃金回收,樹林區黃金回收',
};

export default function Page() {
  return (
    <main style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <h1>土城/樹林區黃金回收</h1>
      <ul>
        <li>✅ 不扣秤、不扣耗損</li>
        <li>📍 服務：土城區、樹林區、龜山區</li>
      </ul>
      <p>📞 0986-821-626</p>
      <a href="/">→ 官網</a>
    </main>
  );
}
