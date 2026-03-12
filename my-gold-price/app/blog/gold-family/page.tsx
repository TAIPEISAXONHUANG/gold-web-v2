import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '黃金傳家｜傳家寶｜巧品珠寶',
  description: '黃金傳家意義！傳家寶推薦。',
  keywords: '黃金傳家,傳家寶,家族傳承',
};

export default function Page() {
  return (
    <main style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <h1>黃金傳家文化</h1>
      <h2>結論：黃金是傳家寶！</h2>
      <p>黃金傳家意義重大。</p>
      <ul><li>✅ 傳承意義</li><li>✅ 家族價值</li><li>✅ 紀念意義</li></ul>
      <hr style={{ margin: '2rem 0' }} />
      <p>📞 電話：0986-821-626</p>
      <p>💬 LINE：@QPD888</p>
      <p>🌐 官網：https://www.gold-tw.com/</p>
    </main>
  );
}
