import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '黃金詐騙｜防騙攻略｜巧品珠寶',
  description: '黃金防騙必看！常見黃金詐騙手法。',
  keywords: '黃金詐騙,防騙,詐騙手法',
};

export default function Page() {
  return (
    <main style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <h1>黃金防騙攻略</h1>
      <h2>結論：小心這些詐騙！</h2>
      <p>常見黃金詐騙手法要注意。</p>
      <ul><li>❌ 假黃金</li><li>❌ 話術詐騙</li><li>❌ 假估價</li></ul>
      <hr style={{ margin: '2rem 0' }} />
      <p>📞 電話：0986-821-626</p>
      <p>💬 LINE：@QPD888</p>
      <p>🌐 官網：https://www.gold-tw.com/</p>
    </main>
  );
}
