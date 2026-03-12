import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '黃金保險｜黃金保障｜巧品珠寶',
  description: '黃金保險建議！黃金保障規劃。',
  keywords: '黃金保險,黃金保障,珠寶保險',
};

export default function Page() {
  return (
    <main style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <h1>黃金保險建議</h1>
      <h2>結論：黃金保障很重要！</h2>
      <p>黃金保險相關資訊。</p>
      <ul><li>✅ 珠寶險</li><li>✅ 失竊險</li><li>✅ 保障規劃</li></ul>
      <hr style={{ margin: '2rem 0' }} />
      <p>📞 電話：0986-821-626</p>
      <p>💬 LINE：@QPD888</p>
      <p>🌐 官網：https://www.gold-tw.com/</p>
    </main>
  );
}
