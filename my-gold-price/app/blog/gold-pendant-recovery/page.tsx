import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '黃金墜子回收｜吊墜變現｜巧品珠寶',
  description: '黃金墜子回收推薦！吊墜變現。',
  keywords: '黃金墜子,吊墜,墜子回收',
};

export default function Page() {
  return (
    <main style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <h1>黃金墜子回收</h1>
      <h2>結論：墜子變現輕鬆！</h2>
      <p>各種黃金墜子、吊墜皆可回收。</p>
      <ul><li>✅ 墜子</li><li>✅ 吊墜</li><li>✅ 項鍊墜</li></ul>
      <hr style={{ margin: '2rem 0' }} />
      <p>📞 電話：0986-821-626</p>
      <p>💬 LINE：@QPD888</p>
      <p>🌐 官網：https://www.gold-tw.com/</p>
    </main>
  );
}
