import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '黃金回收常見問題總整理｜2026年必看攻略',
  description: '黃金回收常見問題解答：流程、證件、費用、注意事項。專業珠寶店親自告訴你如何賣出好價格。',
  keywords: '黃金回收常見問題,黃金回收流程,黃金回收證件,黃金回收注意',
  alternates: {
    canonical: 'https://www.gold-tw.com/blog/gold-recycling-faq',
  },
};

export default function Page() {
  return (
    <main style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "黃金回收需要什麼證件？",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "身分證是必要文件，部分店家會要求第二證件（如健保卡或駕照）作為備查。建議攜帶身分證正本。"
                }
              },
              {
                "@type": "Question",
                "name": "黃金回收有費用嗎？",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "一般正規珠寶店不會收取任何費用。但部分銀樓可能會酌收檢測費或扣耗，請在交易前先詢問清楚。"
                }
              },
              {
                "@type": "Question",
                "name": "黃金回收價格怎麼計算？",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "黃金回收價格是根據當日國際金價計算。計算方式為：重量（台錢）× 每錢回收單價。部分店家會扣除耗損，通常在3-10{'%'}以內。"
                }
              },
              {
                "@type": "Question",
                "name": "可以只回收一小部分黃金嗎？",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "可以。大部分店家都接受部分回收，無論是單一金飾或少量黃金都可以現場秤重估價。"
                }
              }
            ]
          })
        }}
      />
      <h1>黃金回收常見問題總整理｜2026年必看攻略</h1>

      <div style={{background:'#fffbeb', borderLeft:'4px solid #f59e0b', padding:'16px', margin:'16px 0', borderRadius:'8px'}}>
        <strong>📌 結論：</strong>黃金回收流程簡單，只需攜帶身分證即可。選擇誠信店家、事先了解行情，就能賣到滿意價格！
      </div>

      <h2>📋 黃金回收基本問題</h2>
      
      <h3>Q1: 黃金回收需要什麼證件？</h3>
      <p>身分證是必要文件，部分店家會要求第二證件（如健保卡或駕照）作為備查。建議攜帶身分證正本。</p>

      <h3>Q2: 黃金回收有費用嗎？</h3>
      <p>一般正規珠寶店不會收取任何費用。但部分銀樓可能會酌收檢測費或扣耗，請在交易前先詢問清楚。</p>

      <h3>Q3: 黃金回收價格怎麼計算？</h3>
      <p>黃金回收價格是根據當日國際金價計算。計算方式為：重量（台錢）× 每錢回收單價。部分店家會扣除耗損，通常在3-10{'%'}以內。</p>

      <h3>Q4: 可以只回收一小部分黃金嗎？</h3>
      <p>可以。大部分店家都接受部分回收，無論是單一金飾或少量黃金都可以現場秤重估價。</p>

      <h2>💰 價格與流程</h2>
      <ul>
        <li><strong>Step 1:</strong> 攜帶身分證前往店家</li>
        <li><strong>Step 2:</strong> 現場秤重與檢測純度</li>
        <li><strong>Step 3:</strong> 確認報價後同意交易</li>
        <li><strong>Step 4:</strong> 現場領取現金或匯款</li>
      </ul>

      <h2>⚠️ 注意事項</h2>
      <ul>
        <li>多家比價不吃虧</li>
        <li>注意扣耗標準（ {'>'}10% 可能是坑）</li>
        <li>選擇經營多年的誠信店家</li>
        <li>要求檢測過程公開透明</li>
      </ul>

      <hr style={{ margin: '2rem 0' }} />

      <h2>立即查詢當日回收報價</h2>
      <p>📞 電話：0986-821-626</p>
      <p>💬 LINE：@QPD888</p>
      <p>🌐 官網：https://www.gold-tw.com/</p>
      <p>📍 地址：台北市大安區濟南路三段62-1號</p>
      <a href="/" style={{ color: '#B8860B', fontSize: '1.2rem' }}>
        → 前往報價頁面
      </a>
    </main>
  );
}
