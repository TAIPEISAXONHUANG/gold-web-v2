import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '黃金戒指回收｜結婚戒指變現｜巧品珠寶',
  description: '黃金戒指回收推薦！結婚戒指變現。',
  keywords: '黃金戒指,結婚戒指,戒指回收',
};

export default function Page() {
  return (
    <main style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <h1>黃金戒指回收</h1>
      <h2>結論：戒指變現很簡單！</h2>
      <p>各種黃金戒指皆可回收。</p>
      <ul><li>✅ 結婚戒指</li><li>✅ 情侶戒</li><li>✅ 紀念戒</li></ul>
      <hr style={{ margin: '2rem 0' }} />
      <p>📞 電話：0986-821-626</p>
      <p>💬 LINE：@QPD888</p>
      <p>🌐 官網：https://www.gold-tw.com/</p>
    </main>
  );
}
