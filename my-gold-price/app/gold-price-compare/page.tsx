import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '黃金回收價格比較｜哪裡收購價格最高｜台北黃金回收',
  description: '黃金回收價格比較！想知道哪裡回收價格最高？一篇搞懂選擇店家的關鍵要点！',
  keywords: '黃金回收比較,黃金回收哪家高,哪裡收黃金,黃金收購推薦',
};

export default function GoldPriceCompare() {
  return (
    <main style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <h1>⚖️ 黃金回收價格比較｜哪裡收購價格最高？</h1>
      
      <h2>📊 黃金回收價格怎麼比？</h2>
      <p>選擇黃金回收店家時，主要比較以下幾點：</p>
      <ul>
        <li>💰 <strong>報價高低</strong> - 誰出價高賣給誰</li>
        <li>⚖️ <strong>扣秤與否</strong> - 有沒有扣重量</li>
        <li>🔥 <strong>扣耗損</strong> - 有沒有扣百分比</li>
        <li>💵 <strong>付款速度</strong> - 當日還是隔天</li>
        <li>⭐ <strong>信譽評價</strong> - 網路評論好不好</li>
      </ul>

      <h2>🏆 黃金回收比價重點</h2>
      <div style={{ background: '#fff8e1', padding: '1.5rem', borderRadius: '10px' }}>
        <h3 style={{ marginTop: 0 }}>✅ 好的店家應該：</h3>
        <ul>
          <li>不扣秤 - 重量多少就是多少</li>
          <li>不扣耗損 - 不額外扣百分比</li>
          <li>當日付款 - 現場現金給你</li>
          <li>公開計算 - 讓你看到計算過程</li>
          <li>專業檢測 - 儀器+火燒雙重確認</li>
        </ul>
      </div>

      <h2>❌ 壞的店家特徵</h2>
      <div style={{ background: '#ffe6e6', padding: '1.5rem', borderRadius: '10px' }}>
        <h3 style={{ marginTop: 0, color: '#c00' }}>⚠️ 要避開的店家：</h3>
        <ul>
          <li>扣秤 - 說你的秤有問題</li>
          <li>扣耗損 - 說要扣5-10%</li>
          <li>說金不純 - 刻意低估</li>
          <li>拖延付款 - 說要等明天</li>
          <li>無法當面檢測 - 不讓你看過程</li>
        </ul>
      </div>

      <h2>📍 台北黃金回收推薦</h2>
      <p>選擇大安區巧品珠寶的優勢：</p>
      <ul>
        <li>✅ <strong>十年老字號</strong> - 誠信經營</li>
        <li>✅ <strong>不扣秤</strong> - 重量公開</li>
        <li>✅ <strong>不扣耗損</strong> - 價格透明</li>
        <li>✅ <strong>當日付款</strong> - 現場現金</li>
        <li>✅ <strong>專業檢測</strong> - 讓你安心</li>
        <li>✅ <strong>86則Google評論</strong> - 信用保證</li>
      </ul>

      <h2>💡 比價小技巧</h2>
      <ol>
        <li>先打電話問當日行情</li>
        <li>至少比3家再決定</li>
        <li>不要只看一家</li>
        <li>問清楚有沒有扣秤扣耗損</li>
        <li>選擇有實體店面的店家</li>
      </ol>

      <h2>📞 立即比價詢問</h2>
      <p>歡迎多家比價後再決定！</p>
      <p>📞 電話：0986-821-626</p>
      <p>💬 LINE：@SDN6jpk</p>
      <p>📍 台北市大安區濟南路三段62-1號1樓</p>

      <a href="/" style={{ color: '#B8860B', fontSize: '1.2rem' }}>
        → 立即查詢今日黃金回收報價
      </a>
    </main>
  );
}
