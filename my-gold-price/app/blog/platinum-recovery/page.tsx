import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '白金回收｜鉑金回收｜巧品珠寶',
  description: '白金回收推薦！鉑金回收專業估價，立即現金支付。',
  keywords: '白金回收,鉑金回收,Pt950回收',
};

export default function Page() {
  return (
    <main style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <h1>白金回收｜鉑金回收首選</h1>
      <h2>結論：白金回收選對管道很重要！</h2>
      <p>白金（鉑金）是貴金屬之一，回收價值高。</p>
      <h2>我們的服務</h2>
      <ul><li>✅ 現場秤重</li><li>✅ 專業檢測</li><li>✅ 當日付款</li></ul>
      <hr style={{ margin: '2rem 0' }} />
      <p>📞 電話：0986-821-626</p>
      <p>💬 LINE：@QPD888</p>
      <p>🌐 官網：https://www.gold-tw.com/</p>
    </main>
  );
}
