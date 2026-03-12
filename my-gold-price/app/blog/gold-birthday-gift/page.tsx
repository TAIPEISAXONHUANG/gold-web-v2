import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '黃金禮物｜生日禮物｜巧品珠寶',
  description: '黃金生日禮物！送黃金首飾。',
  keywords: '黃金禮物,生日禮物,黃金飾品',
};

export default function Page() {
  return (
    <main style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <h1>黃金禮物推薦</h1>
      <h2>結論：黃金是最好禮物！</h2>
      <p>黃金生日禮物意義非凡。</p>
      <ul><li>✅ 生日禮物</li><li>✅ 紀念日</li><li>✅ 送給家人</li></ul>
      <hr style={{ margin: '2rem 0' }} />
      <p>📞 電話：0986-821-626</p>
      <p>💬 LINE：@QPD888</p>
      <p>🌐 官網：https://www.gold-tw.com/</p>
    </main>
  );
}
