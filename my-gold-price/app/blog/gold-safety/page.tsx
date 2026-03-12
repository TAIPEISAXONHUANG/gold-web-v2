import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '黃金安全｜黃金保存｜巧品珠寶',
  description: '黃金保存要注意！如何安全存放黃金。',
  keywords: '黃金保存,黃金安全,黃金存放',
};

export default function Page() {
  return (
    <main style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <h1>黃金保存要注意</h1>
      <h2>結論：正確保存黃金！</h2>
      <p>黃金保存要注意防盜、防潮。</p>
      <ul><li>✅ 放在安全處</li><li>✅ 避免潮濕</li><li>✅ 定期檢查</li></ul>
      <hr style={{ margin: '2rem 0' }} />
      <p>📞 電話：0986-821-626</p>
      <p>💬 LINE：@QPD888</p>
      <p>🌐 官網：https://www.gold-tw.com/</p>
    </main>
  );
}
