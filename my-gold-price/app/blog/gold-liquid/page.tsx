import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '黃金流當｜黃金典當｜巧品珠寶',
  description: '黃金流當好選擇！黃金典當服務。',
  keywords: '黃金流當,黃金典當,當舖',
};

export default function Page() {
  return (
    <main style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <h1>黃金流當服務</h1>
      <h2>結論：黃金可以變現！</h2>
      <p>黃金流當、典當服務。</p>
      <ul><li>✅ 黃金流當</li><li>✅ 黃金典當</li><li>✅ 緊急周轉</li></ul>
      <hr style={{ margin: '2rem 0' }} />
      <p>📞 電話：0986-821-626</p>
      <p>💬 LINE：@QPD888</p>
      <p>🌐 官網：https://www.gold-tw.com/</p>
    </main>
  );
}
