import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '金牌回收｜紀念金牌｜巧品珠寶',
  description: '金牌回收推薦！奧運金牌、紀念金牌變現。',
  keywords: '金牌回收,紀念金牌,奧運金牌',
};

export default function Page() {
  return (
    <main style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <h1>金牌回收｜紀念金牌</h1>
      <h2>結論：紀念金牌有價值！</h2>
      <p>各種紀念金牌、獎牌皆可回收。</p>
      <ul><li>✅ 紀念金牌</li><li>✅ 獎牌</li><li>✅ 紀念章</li></ul>
      <hr style={{ margin: '2rem 0' }} />
      <p>📞 電話：0986-821-626</p>
      <p>💬 LINE：@QPD888</p>
      <p>🌐 官網：https://www.gold-tw.com/</p>
    </main>
  );
}
