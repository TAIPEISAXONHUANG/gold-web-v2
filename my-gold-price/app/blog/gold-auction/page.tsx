import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '黃金拍賣｜黃金拍賣網｜巧品珠寶',
  description: '黃金拍賣資訊！黃金拍賣平台。',
  keywords: '黃金拍賣,拍賣網,線上拍賣',
};

export default function Page() {
  return (
    <main style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <h1>黃金拍賣資訊</h1>
      <h2>結論：拍賣是選項！</h2>
      <p>黃金拍賣相關資訊。</p>
      <ul><li>✅ 線上拍賣</li><li>✅ 拍賣平台</li><li>✅ 注意事項</li></ul>
      <hr style={{ margin: '2rem 0' }} />
      <p>📞 電話：0986-821-626</p>
      <p>💬 LINE：@QPD888</p>
      <p>🌐 官網：https://www.gold-tw.com/</p>
    </main>
  );
}
