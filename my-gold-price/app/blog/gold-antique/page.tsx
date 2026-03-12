import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '古早黃金｜老金回收｜巧品珠寶',
  description: '古早黃金回收！老金飾、文物黃金變現。',
  keywords: '古早黃金,老金回收,文物黃金',
};

export default function Page() {
  return (
    <main style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <h1>古早黃金回收</h1>
      <h2>結論：老黃金也有價值！</h2>
      <p>年代久遠的黃金飾品一樣可以回收。</p>
      <ul><li>✅ 老金飾</li><li>✅ 文物黃金</li><li>✅ 傳家寶</li></ul>
      <hr style={{ margin: '2rem 0' }} />
      <p>📞 電話：0986-821-626</p>
      <p>💬 LINE：@QPD888</p>
      <p>🌐 官網：https://www.gold-tw.com/</p>
    </main>
  );
}
