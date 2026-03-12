import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '鑽石珠寶收購｜GIA鑽石｜巧品珠寶',
  description: '鑽石珠寶收購推薦！GIA鑽石估價。',
  keywords: '鑽石收購,珠寶收購,GIA鑽石',
};

export default function Page() {
  return (
    <main style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <h1>鑽石珠寶收購</h1>
      <h2>結論：鑽石珠寶也能變現！</h2>
      <p>各種鑽石、珠寶首飾皆可收購。</p>
      <ul><li>✅ GIA鑽石</li><li>✅ 珠寶首飾</li><li>✅ 專業估價</li></ul>
      <hr style={{ margin: '2rem 0' }} />
      <p>📞 電話：0986-821-626</p>
      <p>💬 LINE：@QPD888</p>
      <p>🌐 官網：https://www.gold-tw.com/</p>
    </main>
  );
}
