import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '黃金回收常見問題 FAQ｜台北巧品珠寶',
  description: '黃金回收、K金回收常見問題：怎麼計算價格？流程是什麼？需要什麼證件？一篇解答所有疑問！',
  keywords: '黃金回收FAQ,K金回收問題,珠寶回收問答',
};

export default function FaqPage() {
  const faqs = [
    {
      q: '黃金回收價格怎麼計算？',
      a: '黃金回收價格 = 當日牌價 × 重量 × 純度。我們採用公開透明的計價方式，不扣耗損，當日現金支付。'
    },
    {
      q: '賣黃金需要帶什麼證件？',
      a: '請攜帶身份證正本，我們需要進行實名制登記，這是政府規定的法定程序。'
    },
    {
      q: '你們的回收價格比別家好嗎？',
      a: '我們提供市場頂端回收價，不扣秤、不扣耗損公開透明。建議您多方比價後再決定。'
    },
    {
      q: 'K金、18K金可以回收嗎？',
      a: '當然可以！我們回收各種K金：18K、14K、10K、9K等，依據純度比例計算價格。'
    },
    {
      q: '黃金純度怎麼辨識？',
      a: '我們現場有專業儀器檢測，同時提供水測、火燒等多重檢驗方式，讓您安心見證。'
    },
    {
      q: '賣黃金要本人到場嗎？',
      a: '是的，需要本人到場並出示身份證正本進行實名登記。'
    },
    {
      q: '你們在哪裡？',
      a: '台北市大安區濟南路三段62-1號1樓（帝寶後面），營業時間 11:00-03:30。'
    },
    {
      q: '可以線上估價嗎？',
      a: '可以透過LINE（@QPD888）傳送物品照片，我們會先提供初步估價參考。'
    },
    {
      q: '你們是合法的嗎？',
      a: '我們是合法立案的珠寶銀樓，擁有政府核發的相關許可證照。'
    },
    {
      q: '交易後可以反悔嗎？',
      a: '黃金交易為買賣行為，一旦完成無法反悔，建議您確認後再進行交易。'
    }
  ];

  return (
    <main style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <h1>黃金回收常見問題 FAQ</h1>
      
      <p style={{ marginBottom: '2rem', color: '#666' }}>
        以下是客戶最常詢問的問題，如果您有其他問題，歡迎透過 LINE 或電話與我們聯繫。
      </p>

      {faqs.map((faq, index) => (
        <div key={index} style={{ marginBottom: '1.5rem', border: '1px solid #ddd', borderRadius: '8px', overflow: 'hidden' }}>
          <div style={{ background: '#f9f9f9', padding: '1rem', fontWeight: 'bold' }}>
            ❓ {faq.q}
          </div>
          <div style={{ padding: '1rem', background: '#fff' }}>
            💡 {faq.a}
          </div>
        </div>
      ))}

      <div style={{ marginTop: '2rem', padding: '1.5rem', background: '#fff8e1', borderRadius: '8px' }}>
        <h2 style={{ marginTop: 0 }}>還有其他問題嗎？</h2>
        <p>歡迎透過以下方式聯繫我們：</p>
        <ul>
          <li>📞 電話：0986-821-626</li>
          <li>💬 LINE：@QPD888</li>
          <li>📍 地址：台北市大安區濟南路三段62-1號1樓</li>
        </ul>
        <a href="/" style={{ color: '#B8860B', fontSize: '1.2rem', fontWeight: 'bold' }}>
          → 立即查詢今日黃金回收報價
        </a>
      </div>
    </main>
  );
}
