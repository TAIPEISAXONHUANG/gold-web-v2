import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '黃金回收試算｜黃金價格計算｜巧品珠寶',
  description: '黃金回收試算教學！教你計算黃金回收價值。',
  keywords: '黃金試算,黃金計算,黃金價格計算',
};

export default function Page() {
  return (
    <main style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <h1>黃金回收試算教學</h1>
      <h2>結論：黃金價值這樣算！</h2>
      <p>黃金回收價格 = 重量 × 當日牌價 × 純度</p>
      <h2>計算範例</h2>
      <ul><li>1兩 = 37.5克</li><li>1錢 = 3.75克</li></ul>
      <h2>立即試算</h2>
      <p>歡迎聯繫我們為您免費估價！</p>
      <hr style={{ margin: '2rem 0' }} />
      <p>📞 電話：0986-821-626</p>
      <p>💬 LINE：@QPD888</p>
      <p>🌐 官網：https://www.gold-tw.com/</p>
    </main>
  );
}
