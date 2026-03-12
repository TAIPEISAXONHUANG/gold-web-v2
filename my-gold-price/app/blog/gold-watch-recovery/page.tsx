import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '黃金手錶回收｜勞力士｜巧品珠寶',
  description: '黃金手錶回收！勞力士、OMEGA等品牌。',
  keywords: '黃金手錶,勞力士回收,手錶收購',
};

export default function Page() {
  return (
    <main style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <h1>黃金手錶回收</h1>
      <h2>結論：名錶也能回收變現！</h2>
      <p>各種黃金手錶、名牌錶皆可回收。</p>
      <ul><li>✅ 勞力士</li><li>✅ 精品名錶</li><li>✅ 零件錶</li></ul>
      <hr style={{ margin: '2rem 0' }} />
      <p>📞 電話：0986-821-626</p>
      <p>💬 LINE：@QPD888</p>
      <p>🌐 官網：https://www.gold-tw.com/</p>
    </main>
  );
}
