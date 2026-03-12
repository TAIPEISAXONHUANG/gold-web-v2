import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '黃金稅金｜遺產稅｜巧品珠寶',
  description: '黃金稅金問題！遺產稅講解。',
  keywords: '黃金稅金,遺產稅,黃金繼承',
};

export default function Page() {
  return (
    <main style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <h1>黃金稅金須知</h1>
      <h2>結論：黃金有稅金問題！</h2>
      <p>黃金繼承、遺產稅說明。</p>
      <ul><li>✅ 遺產稅</li><li>✅ 贈與稅</li><li>✅ 稅務規劃</li></ul>
      <hr style={{ margin: '2rem 0' }} />
      <p>📞 電話：0986-821-626</p>
      <p>💬 LINE：@QPD888</p>
      <p>🌐 官網：https://www.gold-tw.com/</p>
    </main>
  );
}
