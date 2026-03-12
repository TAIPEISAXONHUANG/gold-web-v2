import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'K金回收完全攻略｜18K、14K多少錢｜巧品珠寶',
  description: 'K金回收必看！18K、14K、10K回收行情分析，教您了解K金回收價格計算方式。',
  keywords: 'K金回收,18K回收,14K回收,K金價格',
};

export default function Page() {
  return (
    <main style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <h1>K金回收完全攻略｜18K、14K價格分析</h1>
      
      <h2>結論：K金回收這樣卖最划算！</h2>
      <p>K金的回收價格根據純度計算，不同K數對應不同回收比例，本文完整說明。</p>

      <h2>K金回收行情表</h2>
      <ul>
        <li>18K：75%純度</li>
        <li>14K：58.3%純度</li>
        <li>10K：41.7%純度</li>
      </ul>

      <h2>K金回收注意事項</h2>
      <ul>
        <li>✅ 先確認K數與重量</li>
        <li>✅ 現場儀器檢測</li>
        <li>✅ 不扣耗損</li>
      </ul>

      <hr style={{ margin: '2rem 0' }} />

      <h2>立即聯繫</h2>
      <p>📞 電話：0986-821-626</p>
      <p>💬 LINE：@QPD888</p>
      <p>🌐 官網：https://www.gold-tw.com/</p>
    </main>
  );
}
