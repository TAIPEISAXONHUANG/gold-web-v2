import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '賣黃金前必看！5個你必須知道的事',
  description: '第一次賣黃金？不知道要注意什麼？5大重點讓你不上當！',
  keywords: '賣黃金注意,黃金回收注意事項,黃金買賣',
};

export default function Page() {
  return (
    <main style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <h1>賣黃金前必知的5件事</h1>

      <h2>1. 先了解當日金價</h2>
      <p>每日金價不同，建議先上網查詢當日牌價，再前往回收。</p>

      <h2>2. 攜帶證件</h2>
      <p>需準備<strong>身份證+健保卡</strong>進行實名制登記，這是政府規定。</p>

      <h2>3. 現場秤重確認</h2>
      <p>必須<strong>親眼看見秤重數字</strong>，確保過程透明。</p>

      <h2>4. 問清楚計算方式</h2>
      <p>純度、重量、耗損怎麼算？一定要問清楚再賣。</p>

      <h2>5. 選擇誠信店家</h2>
      <p>經營多年、口碑良好的店家更有保障。</p>

      <hr style={{ margin: '2rem 0' }} />

      <h2>台北黃金回收推薦</h2>
      <p>歡迎聯繫 <strong>0986-821-626</strong> 免費估價</p>
      <a href="/my-gold-price" style={{ color: '#B8860B', fontSize: '1.2rem' }}>
        → 查詢今日報價
      </a>
    </main>
  );
}
