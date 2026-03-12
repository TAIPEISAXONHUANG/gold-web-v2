import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '黃金重量｜黃金秤重｜巧品珠寶',
  description: '黃金重量怎麼算？黃金秤重教學。',
  keywords: '黃金重量,秤重,黃金單位',
};

export default function Page() {
  return (
    <main style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <h1>黃金重量知識</h1>
      <h2>結論：了解黃金重量！</h2>
      <p>黃金重量單位介紹。</p>
      <ul><li>✅ 1兩=37.5克</li><li>✅ 1錢=3.75克</li><li>✅ 1分=0.375克</li></ul>
      <hr style={{ margin: '2rem 0' }} />
      <p>📞 電話：0986-821-626</p>
      <p>💬 LINE：@QPD888</p>
      <p>🌐 官網：https://www.gold-tw.com/</p>
    </main>
  );
}
