import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '舊金回收｜老舊黃金變現｜巧品珠寶',
  description: '舊金回收首選！老舊黃金飾品變現，專業估價。',
  keywords: '舊金回收,老舊黃金,黃金變現',
};

export default function Page() {
  return (
    <main style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <h1>舊金回收｜老舊黃金變現</h1>
      <h2>結論：舊金也能賣好價！</h2>
      <p>無論款式過時或長期收藏的舊金，我們都提供回收服務。</p>
      <h2>舊金回收優點</h2>
      <ul><li>✅ 不分款式</li><li>✅ 不扣秤</li><li>✅ 當日現金</li></ul>
      <hr style={{ margin: '2rem 0' }} />
      <p>📞 電話：0986-821-626</p>
      <p>💬 LINE：@QPD888</p>
      <p>🌐 官網：https://www.gold-tw.com/</p>
    </main>
  );
}
