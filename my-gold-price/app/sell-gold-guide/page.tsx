import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '賣黃金攻略2026｜賣黃金前必看7件事｜巧品珠寶',
  description: '賣黃金前必看！如何選店、避免被扣耗損、當場秤重確認重量。台北大安區巧品珠寶，老闆親自鑑定，電話 0986-821-626',
  keywords: '賣黃金,賣黃金注意事項,賣黃金推薦,黃金回收攻略,台北賣黃金',
  alternates: {
    canonical: 'https://www.gold-tw.com/sell-gold-guide',
  },
};

export default function SellGoldGuide() {
  return (
    <main style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <h1>💎 賣黃金前必看的5件事</h1>
      <p style={{ color: '#666' }}>2026年最新版｜讓您黃金變現不吃虧</p>

      <h2>❶ 先查詢當日行情</h2>
      <p>黃金價格每天浮動，建議：</p>
      <ul>
        <li>☀️ 賣前一天先上網查當日金價</li>
        <li>📱 加 LINE 詢問當日回收報價</li>
        <li>📊 了解國際金價走勢</li>
      </ul>

      <h2>❷ 選擇誠信店家</h2>
      <p>好的店家應該具備：</p>
      <ul>
        <li>✅ 經營多年、有實體店面</li>
        <li>✅ 不扣秤、不扣耗損</li>
        <li>✅ 當日現金支付</li>
        <li>✅ 政府合法立案</li>
      </ul>

      <h2>❸ 了解自己的黃金</h2>
      <p>賣之前先確認：</p>
      <ul>
        <li>📋 黃金純度（24K、18K、14K）</li>
        <li>⚖️ 重量（幾錢、幾兩）</li>
        <li>🏷️ 是否有保單/保證書</li>
        <li>💍 是否有損壞（不影響價值）</li>
      </ul>

      <h2>❹ 攜帶證件</h2>
      <div style={{ background: '#fff8e1', padding: '1rem', borderRadius: '8px' }}>
        <p style={{ margin: 0 }}>⚠️ 依政府規定，黃金回收需進行<strong>實名制登記</strong></p>
        <p>請攜帶：<strong>身份證正本</strong></p>
      </div>

      <h2>❺ 拒絕話術</h2>
      <p>這些話術要小心：</p>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <tr style={{ background: '#ffe6e6' }}>
          <th style={{ padding: '10px', border: '1px solid #ddd', textAlign: 'left' }}>常見話術</th>
          <th style={{ padding: '10px', border: '1px solid #ddd', textAlign: 'left' }}>背後目的</th>
        </tr>
        <tr>
          <td style={{ padding: '10px', border: '1px solid #ddd' }}>要扣5%耗損</td>
          <td style={{ padding: '10px', border: '1px solid #ddd' }}>減少支付金額</td>
        </tr>
        <tr>
          <td style={{ padding: '10px', border: '1px solid #ddd' }}>你的金不純</td>
          <td style={{ padding: '10px', border: '1px solid #ddd' }}>低價收購</td>
        </tr>
        <tr>
          <td style={{ padding: '10px', border: '1px solid #ddd' }}>只能給這個價</td>
          <td style={{ padding: '10px', border: '1px solid #ddd' }}>價格不實</td>
        </tr>
        <tr>
          <td style={{ padding: '10px', border: '1px solid #ddd' }}>明天再來比較</td>
          <td style={{ padding: '10px', border: '1px solid #ddd' }}>拖延時間</td>
        </tr>
      </table>

      <h2>📍 我們的承諾</h2>
      <ul>
        <li>✅ 不扣秤、不扣耗損</li>
        <li>✅ 公開透明的計算方式</li>
        <li>✅ 當日現金支付</li>
        <li>✅ 專業儀器+火燒雙重檢測</li>
      </ul>

      <h2>📞 立即詢問當日行情</h2>
      <p>📞 電話：0986-821-626</p>
      <p>💬 LINE：@SDN6jpk</p>
      <p>📍 台北市大安區濟南路三段62-1號1樓</p>

      <a href="/" style={{ color: '#B8860B', fontSize: '1.2rem' }}>
        → 立即查詢今日黃金回收報價
      </a>
    </main>
  );
}
