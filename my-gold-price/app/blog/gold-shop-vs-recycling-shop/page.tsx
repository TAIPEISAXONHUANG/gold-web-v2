import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '銀樓與黃金回收店差異｜賣金前必看攻略',
  description: '銀樓好還是黃金回收店好？一篇讓你了解兩者差異，選擇最適合的黃金變現管道，獲得最佳報價！',
  keywords: '銀樓黃金回收,黃金變現,賣黃金,銀樓回收',
};

export default function Page() {
  return (
    <main style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "author": { "@type": "Organization", "name": "巧品珠寶" },
            "publisher": { "@type": "Organization", "name": "巧品珠寶" },
            "datePublished": "2026-03-12",
              "dateModified": "2026-03-16",
            "description": "黃金回收專業知識"
          })
        }}
      />
      <h1>銀樓與黃金回收店差異｜賣金前必看攻略</h1>
      
      <p>想要變賣黃金，但不知道該找銀樓還是黃金回收店？本文帶您深入了解兩者差異，幫您做出最有利的選擇。</p>

      <h2>銀樓的特色</h2>
      <ul>
        <li><strong>歷史悠久</strong>：傳統珠寶銀樓通常有數十年歷史，信譽較有保障</li>
        <li><strong>手續費較高</strong>：銀樓經營成本較高，報價通常會扣較多手續費</li>
        <li><strong>可現場交易</strong>：當面秤重、當面現金交易，較為安心</li>
        <li><strong>加工金飾優先</strong>：銀樓較願意收購具有工藝價值的金飾</li>
      </ul>

      <h2>黃金回收店的特色</h2>
      <ul>
        <li><strong>報價較高</strong>：少了銀樓的店面與人事成本，回收價格通常較優</li>
        <li><strong>只看純度重量</strong>：不論品牌或設計，僅以純度與重量計算</li>
        <li><strong>流程快速</strong>：秤重、估價、付款一氣呵成</li>
        <li><strong>專業儀器</strong>：使用專業黃金檢測儀器，精準判定純度</li>
      </ul>

      <h2>如何選擇</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse', margin: '1rem 0' }}>
        <thead>
          <tr style={{ background: '#f5f5f5' }}>
            <th style={{ padding: '10px', border: '1px solid #ddd' }}>考量因素</th>
            <th style={{ padding: '10px', border: '1px solid #ddd' }}>適合銀樓</th>
            <th style={{ padding: '10px', border: '1px solid #ddd' }}>適合回收店</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ padding: '10px', border: '1px solid #ddd' }}>金飾有特殊工藝</td>
            <td style={{ padding: '10px', border: '1px solid #ddd' }}>是</td>
            <td style={{ padding: '10px', border: '1px solid #ddd' }}>否</td>
          </tr>
          <tr>
            <td style={{ padding: '10px', border: '1px solid #ddd' }}>只想賣純金</td>
            <td style={{ padding: '10px', border: '1px solid #ddd' }}>否</td>
            <td style={{ padding: '10px', border: '1px solid #ddd' }}>是</td>
          </tr>
        </tbody>
      </table>

      <hr style={{ margin: '2rem 0' }} />

      <h2>立即聯繫</h2>
      <p>📞 電話：0986-821-626</p>
      <p>💬 LINE：@QPD888</p>
      <p>🌐 官網：https://www.gold-tw.com/</p>
    </main>
  );
}
