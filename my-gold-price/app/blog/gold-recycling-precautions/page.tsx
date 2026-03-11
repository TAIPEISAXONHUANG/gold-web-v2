import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '黃金回收注意事項｜必看防騙指南｜巧品珠寶',
  description: '黃金回收要注意什麼？一篇告訴你防騙技巧、回收流程注意事項，避免被坑殺！',
  keywords: '黃金回收注意,黃金回收防騙,賣黃金注意什麼,黃金回收指南',
};

export default function Page() {
  return (
    <main style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <h1>黃金回收注意事項｜必看防騙指南</h1>
      
      <h2>選擇回收商要注意</h2>
      <ul>
        <li>✅ <strong>誠信店家</strong> - 經營多年、有實體店面</li>
        <li>✅ <strong>價格透明</strong> - 不扣秤、不扣耗損</li>
        <li>✅ <strong>當日付款</strong> - 現場現金支付</li>
        <li>✅ <strong>政府合法立案</strong> - 有相關許可證照</li>
      </ul>

      <h2>回收前準備</h2>
      <ol>
        <li><strong>了解當日行情</strong> - 先上網查詢當日金價</li>
        <li><strong>多方比價</strong> - 至少問3家比較</li>
        <li><strong>攜帶證件</strong> - 身份證正本（需實名制）</li>
        <li><strong>確認重量</strong> - 可先在家秤過</li>
      </ol>

      <h2>回收過程要注意</h2>
      <ul>
        <li>⚠️ <strong>親眼看秤</strong> - 重量一定要親眼確認</li>
        <li>⚠️ <strong>檢測方式</strong> - 火燒檢測是正常的</li>
        <li>⚠️ <strong>拒絕扣耗損</strong> - 合理耗損約1-3%</li>
        <li>⚠️ <strong>確認金額</strong> - 計算過程公開</li>
      </ul>

      <h2>常見話術要小心</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <tr style={{ background: '#ffe6e6' }}>
          <th style={{ padding: '10px', border: '1px solid #ddd' }}>話術</th>
          <th style={{ padding: '10px', border: '1px solid #ddd' }}>目的</th>
        </tr>
        <tr>
          <td style={{ padding: '10px', border: '1px solid #ddd' }}>要扣5%耗損</td>
          <td style={{ padding: '10px', border: '1px solid #ddd' }}>扣減價錢</td>
        </tr>
        <tr>
          <td style={{ padding: '10px', border: '1px solid #ddd' }}>你的金不純</td>
          <td style={{ padding: '10px', border: '1px solid #ddd' }}>低價收購</td>
        </tr>
        <tr>
          <td style={{ padding: '10px', border: '1px solid #ddd' }}>只能給你這個價</td>
          <td style={{ padding: '10px', border: '1px solid #ddd' }}>價格不實</td>
        </tr>
      </table>

      <h2>我們的承諾</h2>
      <ul>
        <li>✅ 不扣秤、不扣耗損</li>
        <li>✅ 公開透明的計算方式</li>
        <li>✅ 專業儀器+火燒雙重檢測</li>
        <li>✅ 當日現金支付</li>
      </ul>

      <h2>聯繫我們</h2>
      <p>📞 電話：0986-821-626</p>
      <p>💬 LINE：@SDN6jpk</p>
      <p>📍 台北市大安區濟南路三段62-1號1樓</p>

      <a href="/" style={{ color: '#B8860B', fontSize: '1.2rem' }}>
        → 立即查詢今日黃金回收報價
      </a>
    </main>
  );
}
