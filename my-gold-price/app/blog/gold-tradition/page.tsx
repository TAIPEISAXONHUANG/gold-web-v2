import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '黃金傳統｜傳統意義｜巧品珠寶',
  description: '黃金傳統意義！傳統習俗。',
  keywords: '黃金傳統,傳統習俗,過年黃金',
};

export default function Page() {
  return (
    <main style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <h1>黃金傳統意義</h1>
      <h2>結論：黃金是傳統！</h2>
      <p>黃金在傳統中意義重大。</p>
      <ul><li>✅ 結婚必備</li><li>✅ 過年送</li><li>✅ 傳家</li></ul>
      <hr style={{ margin: '2rem 0' }} />
      <p>📞 電話：0986-821-626</p>
      <p>💬 LINE：@QPD888</p>
      <p>🌐 官網：https://www.gold-tw.com/</p>
    </main>
  );
}
