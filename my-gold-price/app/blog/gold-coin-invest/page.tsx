import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '黃金投資｜金幣投資｜巧品珠寶',
  description: '黃金投資入門！金幣投資建議。',
  keywords: '黃金投資,金幣投資,黃金理財',
};

export default function Page() {
  return (
    <main style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <h1>黃金投資｜金幣理財</h1>
      <h2>結論：黃金是避險首選！</h2>
      <p>黃金投資是很好的避險選擇。</p>
      <ul><li>✅ 黃金條塊</li><li>✅ 金幣</li><li>✅ 黃金ETF</li></ul>
      <hr style={{ margin: '2rem 0' }} />
      <p>📞 電話：0986-821-626</p>
      <p>💬 LINE：@QPD888</p>
      <p>🌐 官網：https://www.gold-tw.com/</p>
    </main>
  );
}
