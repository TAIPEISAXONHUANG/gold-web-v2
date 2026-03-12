import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '黃金估價｜專業估價｜巧品珠寶',
  description: '黃金估價專業服務！免費估價。',
  keywords: '黃金估價,免費估價,專業估價',
};

export default function Page() {
  return (
    <main style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <h1>黃金專業估價</h1>
      <h2>結論：免費估價服務！</h2>
      <p>我們提供專業黃金估價。</p>
      <ul><li>✅ 免費估價</li><li>✅ 專業儀器</li><li>✅ 當日报價</li></ul>
      <hr style={{ margin: '2rem 0' }} />
      <p>📞 電話：0986-821-626</p>
      <p>💬 LINE：@QPD888</p>
      <p>🌐 官網：https://www.gold-tw.com/</p>
    </main>
  );
}
