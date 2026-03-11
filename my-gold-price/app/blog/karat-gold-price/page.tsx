import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'K金回收價格怎麼算？2026年K金回收行情｜巧品珠寶',
  description: 'K金回收價格怎麼算？一篇搞懂18K、14K、10K回收計算方式，附2026年最新K金回收行情參考！',
  keywords: 'K金回收價格,K金回收計算,18K回收多少錢,14K回收',
};

export default function Page() {
  return (
    <main style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <h1>K金回收價格怎麼算？2026年最新行情</h1>
      
      <h2>K金回收計算公式</h2>
      <p><strong>K金回收價格 = 當日純金牌價 × 重量 × K金純度</strong></p>
      
      <h2>K金純度對照表</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <tr style={{ background: '#f5f5f5' }}>
          <th style={{ padding: '10px', border: '1px solid #ddd' }}>K數</th>
          <th style={{ padding: '10px', border: '1px solid #ddd' }}>純度</th>
          <th style={{ padding: '10px', border: '1px solid #ddd' }}>回收比例</th>
        </tr>
        <tr>
          <td style={{ padding: '10px', border: '1px solid #ddd' }}>24K</td>
          <td style={{ padding: '10px', border: '1px solid #ddd' }}>99.99%</td>
          <td style={{ padding: '10px', border: '1px solid #ddd' }}>100%</td>
        </tr>
        <tr>
          <td style={{ padding: '10px', border: '1px solid #ddd' }}>18K</td>
          <td style={{ padding: '10px', border: '1px solid #ddd' }}>75%</td>
          <td style={{ padding: '10px', border: '1px solid #ddd' }}>75%</td>
        </tr>
        <tr>
          <td style={{ padding: '10px', border: '1px solid #ddd' }}>14K</td>
          <td style={{ padding: '10px', border: '1px solid #ddd' }}>58.5%</td>
          <td style={{ padding: '10px', border: '1px solid #ddd' }}>58.5%</td>
        </tr>
        <tr>
          <td style={{ padding: '10px', border: '1px solid #ddd' }}>10K</td>
          <td style={{ padding: '10px', border: '1px solid #ddd' }}>41.7%</td>
          <td style={{ padding: '10px', border: '1px solid #ddd' }}>41.7%</td>
        </tr>
      </table>

      <h2>K金回收注意事項</h2>
      <ul>
        <li>⚠️ K金回收不建議扣耗損</li>
        <li>⚠️ 現場秤重需親眼確認</li>
        <li>⚠️ 建議多方比價後再做決定</li>
        <li>⚠️ 攜帶身份證進行實名登記</li>
      </ul>

      <h2>K金可以回收嗎？</h2>
      <p><strong>當然可以！</strong>無論是：</p>
      <ul>
        <li>💍 斷掉的項鍊、戒指</li>
        <li>💍 過時的金飾</li>
        <li>💍 少了一顆寶石的飾品</li>
        <li>💍 不知品牌的K金首飾</li>
      </ul>
      <p>我們都依純度比例收購！</p>

      <h2>聯繫我們</h2>
      <p>📞 電話：0986-821-626</p>
      <p>💬 LINE：@SDN6jpk</p>

      <a href="/" style={{ color: '#B8860B', fontSize: '1.2rem' }}>
        → 立即查詢今日K金回收報價
      </a>
    </main>
  );
}
