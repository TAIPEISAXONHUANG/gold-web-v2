import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '黃金純度｜K數解釋｜巧品珠寶',
  description: '黃金純度怎麼看？K數意思。',
  keywords: '黃金純度,K數,24K',
};

export default function Page() {
  return (
    <main style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <h1>黃金純度解釋</h1>
      <h2>結論：K數越大越純！</h2>
      <p>黃金純度說明。</p>
      <ul><li>✅ 24K=9999</li><li>✅ 18K=750</li><li>✅ 14K=585</li></ul>
      <hr style={{ margin: '2rem 0' }} />
      <p>📞 電話：0986-821-626</p>
      <p>💬 LINE：@QPD888</p>
      <p>🌐 官網：https://www.gold-tw.com/</p>
    </main>
  );
}
