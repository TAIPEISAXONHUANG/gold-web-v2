import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '黃金文化｜黃金意義｜巧品珠寶',
  description: '黃金文化意義！黃金象徵。',
  keywords: '黃金文化,黃金意義,黃金象徵',
};

export default function Page() {
  return (
    <main style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <h1>黃金文化意義</h1>
      <h2>結論：黃金代表富貴！</h2>
      <p>黃金在文化中意義重大。</p>
      <ul><li>✅ 富貴象徵</li><li>✅ 吉祥寓意</li><li>✅ 傳統價值</li></ul>
      <hr style={{ margin: '2rem 0' }} />
      <p>📞 電話：0986-821-626</p>
      <p>💬 LINE：@QPD888</p>
      <p>🌐 官網：https://www.gold-tw.com/</p>
    </main>
  );
}
