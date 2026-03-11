import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '台北黃金回收推薦｜高價回收首選｜巧品珠寶',
  description: '台北黃金回收推薦首選！專營黃金、K金、白金回收，當日現金支付。不扣秤、不扣耗損，誠信經營十年。',
  keywords: '台北黃金回收,台北黃金回收推薦,台北黃金收購,黃金回收首選',
};

export default function Page() {
  return (
    <main style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <h1>台北黃金回收推薦｜高價變現首選</h1>
      
      <h2>為什麼選擇台北巧品珠寶？</h2>
      <ul>
        <li>✅ <strong>誠信經營</strong> - 十年老字號，信用可靠</li>
        <li>✅ <strong>價格透明</strong> - 不扣秤、不扣耗損</li>
        <li>✅ <strong>當日付款</strong> - 現場秤重，當日現金支付</li>
        <li>✅ <strong>專業檢測</strong> - 儀器檢測+火燒，双重確認</li>
        <li>✅ <strong>隱私保護</strong> - 個資僅供備查，嚴格保密</li>
      </ul>

      <h2>台北黃金回收服務區域</h2>
      <p>我們位於大安區，服務覆蓋全台北：</p>
      <ul>
        <li>📍 大安區、信義區、中正區</li>
        <li>📍 中山區、松山區、內湖區</li>
        <li>📍 士林區、北投區、文山區</li>
        <li>📍 南港區、萬華區、大同區</li>
      </ul>

      <h2>黃金回收流程</h2>
      <ol>
        <li><strong>聯繫詢價</strong> - 電話或 LINE 詢問當日行情</li>
        <li><strong>預約到店</strong> - 建議提前預約避免久候</li>
        <li><strong>現場秤重</strong> - 公開透明，讓您親眼確認重量</li>
        <li><strong>檢測成色</strong> - 專業儀器+火燒雙重確認</li>
        <li><strong>計算金額</strong> - 依當日牌價×重量×純度</li>
        <li><strong>現金支付</strong> - 確認金額後立即支付</li>
      </ol>

      <h2>聯繫我們</h2>
      <p>📞 電話：0986-821-626</p>
      <p>💬 LINE：@SDN6jpk</p>
      <p>📍 地址：台北市大安區濟南路三段62-1號1樓</p>

      <a href="/" style={{ color: '#B8860B', fontSize: '1.2rem' }}>
        → 立即查詢今日黃金回收報價
      </a>
    </main>
  );
}
