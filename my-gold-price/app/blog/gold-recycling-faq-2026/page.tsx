import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '第一次賣黃金？2026回收QA十問｜巧品珠寶',
  description: '要帶什麼證件？秤重會被扣嗎？2026最新版黃金回收10大問題，台北巧品珠寶逐題解答，新手看完就能安心賣金。',
  keywords: '黃金回收問題,黃金回收新手,2026黃金回收,黃金回收準備,黃金回收流程',
  alternates: {
    canonical: 'https://www.gold-tw.com/blog/gold-recycling-faq-2026',
  },
};

export const lastModified = new Date('2026-03-19');
export default function Page() {
  return (
    <main style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: '2026年黃金回收常見問題完整解答｜新手必看｜巧品珠寶',
            description: '2026年最新整理！黃金回收新手最常問的10個問題：準備證件、秤重扣重、付款方式、K金回收、防詐騙等完整解答。',
            mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://www.gold-tw.com/blog/gold-recycling-faq-2026' },
            author: { '@type': 'Organization', name: '巧品珠寶', url: 'https://www.gold-tw.com' },
            publisher: { '@type': 'Organization', name: '巧品珠寶', url: 'https://www.gold-tw.com' },
            datePublished: '2026-03-01T00:00:00+08:00',
            dateModified: '2026-03-31T00:00:00+08:00',
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "2026年賣黃金要帶什麼證件？",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "根據洗防條例規定，必須攜帶身份證進行實名制登記。部分優質店家可能會要求第二證件（如健保卡或駕照）做交叉比對。建議事先致電店家確認，避免白跑一趟。"
                }
              },
              {
                "@type": "Question",
                "name": "黃金回收的秤重單位怎麼算？",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "台灣常見的秤重單位有「錢」、「克」、「盎司」：1錢 = 3.75克；1兩 = 10錢 = 37.5克；1盎司 = 31.1克。專業店家會當面秤重，並讓您親眼確認數字。"
                }
              },
              {
                "@type": "Question",
                "name": "什麼是扣耗損？扣多少算合理？",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "「扣耗損」是店家扣除的清洗費用，一般為5-15%。巧品珠寶不扣耗損，完全依實際重量計算，讓您賣得更划算。"
                }
              },
              {
                "@type": "Question",
                "name": "黃金純度怎麼看？9999和999有何差別？",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "數字代表黃金純度：9999 = 99.99%純金（24K）；999 = 99.9%純金；950 = 95%純金。純度越高，回收價格越好。"
                }
              },
              {
                "@type": "Question",
                "name": "K金、鍍金、合金也能回收嗎？",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "可以，但價格依含金量計算：18K金（75%含金）約純金的75%；14K金（58.5%含金）約純金的58.5%；鍍金不含金量，無回收價值。"
                }
              },
              {
                "@type": "Question",
                "name": "黃金回收價格怎麼算出來的？",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "公式為：當日國際金價 ÷ 31.1 × 重量（克）× 純度%。以2026年為例，當日金價約每錢6,000元，一兩（5錢）9999黃金的回收價約29,997元。"
                }
              },
              {
                "@type": "Question",
                "name": "付款方式是哪種？多久能拿到錢？",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "巧品珠寶現場現金支付，當場變現不用等。有些店家可能用匯款，但相對有風險。"
                }
              },
              {
                "@type": "Question",
                "name": "需要預約嗎？流程要多久？",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "建議先電話或LINE預約，節省等候時間。完整流程約15-30分鐘，包括秤重、檢測、報價、付款。"
                }
              },
              {
                "@type": "Question",
                "name": "古董金飾、紀念金幣也能賣嗎？",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "可以！只要黃金純度夠，古董金飾、紀念金幣、金塊、金條都可以回收。古董飾品可能還有收藏價值，建議先讓專業店家評估。"
                }
              },
              {
                "@type": "Question",
                "name": "如何避免遇到黃金詐騙？",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "注意以下警訊：要求先匯款、秤重時動手腳、扣重超過20%、不願意出示證件。選擇有實體店面的店家，並確認秤重過程全程公開。"
                }
              }
            ]
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"首頁","item":"https://www.gold-tw.com"},{"@type":"ListItem","position":2,"name":"知識專欄","item":"https://www.gold-tw.com/blog"},{"@type":"ListItem","position":3,"name":"2026年黃金回收常見問題完整解答"}]})
        }}
      />
      <h1>2026年黃金回收常見問題完整解答</h1>

      <div style={{background:'#fffbeb', borderLeft:'4px solid #f59e0b', padding:'16px', margin:'16px 0', borderRadius:'8px'}}>
        <strong>📌 重點摘要：</strong> 賣黃金前必看！本篇整理2026年最新、最完整的黃金回收常見問題，幫助您第一次賣黃金就上手，避免落入不良業者的陷阱。
      </div>
      
      <h2>賣黃金不踩雷，10個問題讓您安心變現嗎？</h2>

      <h2>黃金回收新手必看FAQ怎麼做？</h2>

      <h3>Q1：2026年賣黃金要帶什麼證件？</h3>
      <p>A：根據洗防條例規定，<strong>必須攜帶身份證</strong>進行實名制登記。部分優質店家可能會要求第二證件（如健保卡或駕照）做交叉比對。建議事先致電店家確認，避免白跑一趟。</p>

      <h3>Q2：黃金回收的秤重單位怎麼算？</h3>
      <p>A：台灣常見的秤重單位有「錢」、「克」、「盎司」：</p>
      <ul>
        <li>1錢 = 3.75克</li>
        <li>1兩 = 10錢 = 37.5克</li>
        <li>1盎司 = 31.1克</li>
      </ul>
      <p>專業店家會<strong>當面秤重</strong>，並讓您親眼確認數字。</p>

      <h3>Q3：什麼是扣耗損？扣多少算合理？</h3>
      <p>A：「扣耗損」是店家扣除的清洗費用，一般為5-15{'%'}。但<strong>巧品珠寶不扣耗損</strong>，完全依實際重量計算，讓您賣得更划算。</p>

      <h3>Q4：黃金純度怎麼看？9999和999有何差別？</h3>
      <p>A：數字代表黃金純度：</p>
      <ul>
        <li>9999 = 99.99{'%'}純金（24K）</li>
        <li>999 = 99.9{'%'}純金</li>
        <li>950 = 95{'%'}純金</li>
      </ul>
      <p>純度越高，回收價格越好。</p>

      <h3>Q5：K金、鍍金、合金也能回收嗎？</h3>
      <p>A：可以，但價格依含金量計算：</p>
      <ul>
        <li><strong>18K金</strong>（75{'%'}含金）：約純金的75{'%'}</li>
        <li><strong>14K金</strong>（58.5{'%'}含金）：約純金的58.5{'%'}</li>
        <li><strong>鍍金</strong>：不含金量，無回收價值</li>
      </ul>

      <h3>Q6：黃金回收價格怎麼算出來的？</h3>
      <p>A：公式為：<strong>當日國際金價 ÷ 31.1 × 重量（克）× 純度%</strong></p>
      <p>以2026年為例，當日金價約每錢6,000元，一兩（5錢）9999黃金的回收價約29,997元。</p>

      <h3>Q7：付款方式是哪種？多久能拿到錢？</h3>
      <p>A：<strong>巧品珠寶現場現金支付</strong>，當場變現不用等。有些店家可能用匯款，但相對有風險。</p>

      <h3>Q8：需要預約嗎？流程要多久？</h3>
      <p>A：建議<strong>先電話或LINE預約</strong>，節省等候時間。完整流程約15-30分鐘，包括秤重、檢測、報價、付款。</p>

      <h3>Q9：古董金飾、纪念金币也能賣嗎？</h3>
      <p>A：可以！只要黃金純度夠，<strong>古董金飾、纪念金币、金塊、金條</strong>都可以回收。古董飾品可能還有收藏價值，建議先讓專業店家評估。</p>

      <h3>Q10：如何避免遇到黃金詐騙？</h3>
      <p>A：注意以下警訊：</p>
      <ul>
        <li>❌ 要求先匯款</li>
        <li>❌ 秤重時動手腳</li>
        <li>❌ 扣重超過20{'%'}</li>
        <li>❌ 不願意出示證件</li>
        <li>✅ 選擇有實體店面的店家</li>
        <li>✅ 秤重過程全程公開</li>
      </ul>

      <div style={{ margin: '2rem 0', padding: '1.5rem', background: '#FEF9E7', borderRadius: '8px', borderLeft: '4px solid #B8860B' }}>
        <strong>延伸閱讀：</strong>
        <ul style={{ marginTop: '0.5rem', paddingLeft: '1.5rem' }}>
          <li><a href="/blog/gold-recovery-common-questions" style={{ color: '#B8860B' }}>黃金回收常見問題</a></li>
          <li><a href="/blog/gold-recycling-process" style={{ color: '#B8860B' }}>黃金回收流程</a></li>
          <li><a href="/blog/gold-scam-prevent" style={{ color: '#B8860B' }}>黃金防詐騙指南</a></li>
          <li><a href="/blog/how-to-choose-gold-shop" style={{ color: '#B8860B' }}>如何挑選黃金回收店</a></li>
        </ul>
      </div>

      <hr style={{ margin: '2rem 0' }} />

      <h2>黃金回收標準流程（2026年最新版）是什麼？</h2>
      <ol>
        <li><strong>LINE/電話預約</strong> - 初步諮詢，了解行情</li>
        <li><strong>攜帶證件</strong> - 身份證+第二證件</li>
        <li><strong>現場秤重</strong> - 公開透明，當面確認</li>
        <li><strong>純度檢測</strong> - 儀器分析，即時出結果</li>
        <li><strong>報價成交</strong> - 同意後立即現金付款</li>
      </ol>

      <hr style={{ margin: '2rem 0' }} />

      <h2>聯繫我們</h2>
      <p>📞 電話：0986-821-626</p>
      <p>💬 LINE：@QPD888</p>
      <p>🌐 官網：https://www.gold-tw.com/</p>
      <p>📍 地址：台北市大安區濟南路三段62-1號</p>
    </main>
  );
}
