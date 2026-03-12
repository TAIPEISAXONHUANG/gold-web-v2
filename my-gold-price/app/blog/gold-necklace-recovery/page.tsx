import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '黃金項鍊回收｜金鍊變現｜巧品珠寶',
  description: '黃金項鍊回收推薦！各種金鍊變現。',
  keywords: '黃金項鍊,金鍊回收,項鍊變現',
};

export default function Page() {
  return (
    <main style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <h1>黃金項鍊回收</h1>
      <h2>結論：金項鍊變現很簡單！</h2>
      <p>各種黃金項鍊、鍊子皆可回收。</p>
      <ul><li>✅ 黃金項鍊</li><li>✅ 鍊子</li><li>✅ 墜子</li></ul>
      <hr style={{ margin: '2rem 0' }} />
      <p>📞 電話：0986-821-626</p>
      <p>💬 LINE：@QPD888</p>
      <p>🌐 官網：https://www.gold-tw.com/</p>
    </main>
  );
}
