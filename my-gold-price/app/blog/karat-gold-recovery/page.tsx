import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'K金回收｜18K、14K回收價格一篇搞懂',
  description: 'K金回收價格怎麼算？18K、14K分別值多少？完整攻略讓你賣黃金不吃虧！',
  keywords: 'K金回收,18K回收,14K回收,珠寶回收',
};

export default function Page() {
  return (
    <main style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <h1>K金回收價格一篇搞懂</h1>

      <h2>什麼是K金？</h2>
      <p>K金是指黃金與其他金屬的合金，用「K」表示純度：</p>
      <ul>
        <li><strong>18K</strong> = 75% 黃金 + 25% 其他金屬</li>
        <li><strong>14K</strong> = 58.5% 黃金 + 41.5% 其他金屬</li>
      </ul>

      <h2>K金回收計算方式</h2>
      <p><strong>回收價格 = 黃金牌價 × 純度 × 重量</strong></p>

      <h2>為什麼要選專業回收？</h2>
      <ul>
        <li>現場秤重透明</li>
        <li>不扣耗損</li>
        <li>當日現金支付</li>
      </ul>

      <hr style={{ margin: '2rem 0' }} />

      <h2>立即查詢今日K金報價</h2>
      <a href="/" style={{ color: '#B8860B', fontSize: '1.2rem' }}>
        → 前往報價頁面
      </a>
    </main>
  );
}
