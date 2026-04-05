import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '賣黃金前要注意什麼｜完整攻略｜巧品珠寶',
  description: '賣黃金前必看！避免被扣耗損、秤重造假的完整指南。台北巧品珠寶10年經驗，老闆親自鑑定，免費估價，電話 0986-821-626。',
  keywords: '賣黃金前,黃金準備,賣黃金注意事項',
  alternates: {
    canonical: 'https://www.gold-tw.com/blog/before-selling-gold',
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
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": "賣黃金前要注意什麼｜完整攻略",
            "author": {
              "@type": "Organization",
              "name": "巧品珠寶"
            },
            "publisher": {
              "@type": "Organization",
              "name": "巧品珠寶"
            },
            "datePublished": "2026-03-12",
              "dateModified": "2026-03-16T00:00:00+08:00",
            "description": "賣黃金前必看！完整準備事項與注意事項"
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"首頁","item":"https://www.gold-tw.com"},{"@type":"ListItem","position":2,"name":"知識專欄","item":"https://www.gold-tw.com/blog"},{"@type":"ListItem","position":3,"name":"賣黃金前要注意什麼｜完整攻略｜巧品珠寶"}]})
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({"@context":"https://schema.org","@type":"HowTo","name":"賣黃金前的準備工作","description":"出售黃金前應做好的4項準備，確保拿到最好的價格。","step":[{"@type":"HowToStep","position":1,"name":"確認當日金價行情","text":"上網查詢台灣銀行牌價或各家回收店報價，了解今日黃金行情。"},{"@type":"HowToStep","position":2,"name":"整理要出售的金飾","text":"把所有要賣的黃金集中整理，不同純度（24K、18K）分開放。"},{"@type":"HowToStep","position":3,"name":"準備身份證件","text":"攜帶身份證正本，未滿18歲需法定代理人陪同。"},{"@type":"HowToStep","position":4,"name":"多家比價","text":"至少比較3家回收店的報價，注意是否扣耗損、扣秤，選擇最透明的店家。"}]})
        }}
      />
      <h1>賣黃金前要注意什麼｜完整攻略</h1>

      <div style={{background:'#fffbeb', borderLeft:'4px solid #f59e0b', padding:'16px', margin:'16px 0', borderRadius:'8px'}}>
        <strong>📌 重點摘要：</strong> 賣黃金前務必準備身份證正本、確認金飾純度與重量，並比較多家回收報價。巧品珠寶提供免費估價，不強迫交易。
      </div>

      <h2>結論：做好這些準備，賣黃金不吃虧！</h2>
      <p>很多人第一次賣黃金，因為不熟悉流程，可能在不知不覺中少拿了很多錢。本文整理了賣黃金前最重要的準備工作與注意事項，讓您做好萬全準備，確保拿到最好的回收價格。更多詳細資訊可參考<a href="/blog/gold-recovery-faq" style={{ color: '#B8860B' }}>黃金回收常見問題FAQ</a>。</p>

      <h2>賣黃金前有哪4大準備工作？</h2>

      <h3>1. 確認當日金價行情</h3>
      <p>賣黃金前，先了解當日的黃金行情非常重要。可以透過以下方式查詢：</p>
      <ul>
        <li>查看<a href="/today-gold-price" style={{ color: '#B8860B' }}>今日黃金回收價</a>，掌握市場行情</li>
        <li>參考台灣銀行黃金牌告價（回收價通常略低於牌告價）</li>
        <li>比較多家回收店的報價，選擇最高者</li>
      </ul>
      <p>了解行情的好處是：知道多少錢才是合理的回收價，不容易被壓低。</p>

      <h3>2. 整理要出售的金飾</h3>
      <p>出售前整理好手中的黃金：</p>
      <ul>
        <li>不同純度分開放（9999足金、916、18K等），有助於快速鑑定</li>
        <li>尋找購買憑證或保證書（若有，可增加信任度）</li>
        <li>保留所有碎片或小件黃金，每一小塊都有價值</li>
        <li>確認金飾上的純度印記（999、916、750等）</li>
        <li>若有損壞，了解<a href="/blog/broken-gold-recovery" style={{ color: '#B8860B' }}>損壞黃金是否影響回收價</a>（答案是不影響）</li>
      </ul>

      <h3>3. 準備身份證件</h3>
      <p>黃金回收需要進行政府規定的實名制登記：</p>
      <ul>
        <li>身份證正本（必備）</li>
        <li>健保卡（建議攜帶作為輔助證件）</li>
        <li>未滿18歲需法定代理人陪同</li>
        <li>代替他人出售需提供授權委託書</li>
      </ul>
      <p>詳細說明見<a href="/blog/gold-id-requirement" style={{ color: '#B8860B' }}>黃金回收需要什麼證件</a>。</p>

      <h3>4. 多家比價</h3>
      <p>貨比三家不吃虧，至少比較3家回收店的報價。比較時注意：</p>
      <ul>
        <li>是否扣耗損（正規店家不應扣超過3%）</li>
        <li>秤重是否當面進行</li>
        <li>付款是否當場現金</li>
        <li>鑑定設備是否專業</li>
      </ul>

      <h2>賣黃金有哪些常見陷阱？</h2>
      <p>了解這些陷阱，避免被不肖業者欺騙：</p>
      <ul>
        <li><strong>扣耗損</strong>：扣除5-10%「耗損費」，合理範圍應在3%以內</li>
        <li><strong>壓低純度</strong>：將9999純金說成916，降低計算基準</li>
        <li><strong>在秤上作手腳</strong>：使用不準確的秤，少計重量</li>
        <li><strong>強迫交易</strong>：拿走黃金後不肯還，或給予極大壓力</li>
        <li><strong>拆解後才告知低價</strong>：要求先拆解才能鑑定，實際上是毀損的套路</li>
      </ul>
      <p>詳細了解<a href="/blog/gold-scam-prevent" style={{ color: '#B8860B' }}>黃金回收詐騙防範</a>與<a href="/blog/gold-recovery-traps" style={{ color: '#B8860B' }}>黃金回收常見陷阱</a>。</p>

      <h2>如何判斷黃金回收店家是否可信？</h2>
      <ul>
        <li>有固定實體店面，不是流動攤販</li>
        <li>當面秤重，讓您親眼看見數字</li>
        <li>主動告知不扣耗損</li>
        <li>使用專業儀器鑑定，過程當面進行</li>
        <li>確認後立即現場付款</li>
        <li>免費估價，不賣不強迫</li>
      </ul>
      <p>了解更多<a href="/blog/how-to-choose-gold-shop" style={{ color: '#B8860B' }}>如何選擇黃金回收店家</a>。</p>

      <h2>賣黃金的最佳時機是什麼時候？</h2>
      <p>黃金價格受多種因素影響，選擇好的時機出售可以拿到更高的回收金額：</p>
      <ul>
        <li>國際局勢不穩時，黃金作為避險資產需求增加，價格上漲</li>
        <li>美元走弱時，黃金以美元計價，換算成台幣後價值上升</li>
        <li>通膨預期升高時，黃金的保值需求增加</li>
        <li>了解<a href="/blog/factors-affecting-gold-price" style={{ color: '#B8860B' }}>影響黃金價格的因素</a>，掌握最佳賣出時機</li>
      </ul>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"賣黃金前要準備什麼？","acceptedAnswer":{"@type":"Answer","text":"需要攜帶身份證正本、整理好要出售的金飾，建議先查詢當日金價並比較多家報價。"}},{"@type":"Question","name":"沒有購買證明可以賣嗎？","acceptedAnswer":{"@type":"Answer","text":"可以。沒有購買證明一樣能回收，店家會以現場鑑定的純度和重量為準計價。"}},{"@type":"Question","name":"賣黃金要預約嗎？","acceptedAnswer":{"@type":"Answer","text":"不需要預約，直接到店即可。但建議先來電確認當日金價行情。"}},{"@type":"Question","name":"賣黃金大概要花多長時間？","acceptedAnswer":{"@type":"Answer","text":"整個流程約10-15分鐘，包含秤重、儀器鑑定、確認報價、現金付款。不需要等待。"}},{"@type":"Question","name":"哪種黃金回收價格最高？","acceptedAnswer":{"@type":"Answer","text":"純度越高回收價越好。9999純金回收比例最高，916其次，18K以下則依含金量計算。建議攜帶所有黃金一起估價。"}}]})
        }}
      />
      <section style={{marginTop:'2.5rem', padding:'2rem', background:'#f9fafb', borderRadius:'12px', border:'1px solid #e5e7eb'}}>
        <h2 style={{fontSize:'1.3rem', fontWeight:'bold', color:'#1f2937', marginTop:0, marginBottom:'1rem'}}>❓ 常見問題</h2>
        <div style={{marginBottom:'1rem', background:'white', padding:'1rem', borderRadius:'8px', border:'1px solid #e5e7eb'}}>
          <h3 style={{margin:'0 0 0.5rem 0', fontSize:'1rem', color:'#1f2937'}}>Q: 賣黃金前要準備什麼？</h3>
          <p style={{margin:0, color:'#4b5563', lineHeight:'1.6'}}>A: 需要攜帶身份證正本、整理好要出售的金飾，建議先查詢當日金價並比較多家報價。</p>
        </div>
        <div style={{marginBottom:'1rem', background:'white', padding:'1rem', borderRadius:'8px', border:'1px solid #e5e7eb'}}>
          <h3 style={{margin:'0 0 0.5rem 0', fontSize:'1rem', color:'#1f2937'}}>Q: 沒有購買證明可以賣嗎？</h3>
          <p style={{margin:0, color:'#4b5563', lineHeight:'1.6'}}>A: 可以。沒有購買證明一樣能回收，店家會以現場鑑定的純度和重量為準計價。</p>
        </div>
        <div style={{marginBottom:'1rem', background:'white', padding:'1rem', borderRadius:'8px', border:'1px solid #e5e7eb'}}>
          <h3 style={{margin:'0 0 0.5rem 0', fontSize:'1rem', color:'#1f2937'}}>Q: 賣黃金要預約嗎？</h3>
          <p style={{margin:0, color:'#4b5563', lineHeight:'1.6'}}>A: 不需要預約，直接到店即可。但建議先來電確認當日金價行情。</p>
        </div>
        <div style={{marginBottom:'1rem', background:'white', padding:'1rem', borderRadius:'8px', border:'1px solid #e5e7eb'}}>
          <h3 style={{margin:'0 0 0.5rem 0', fontSize:'1rem', color:'#1f2937'}}>Q: 賣黃金大概要花多長時間？</h3>
          <p style={{margin:0, color:'#4b5563', lineHeight:'1.6'}}>A: 整個流程約10-15分鐘，包含秤重、儀器鑑定、確認報價、現金付款。不需要等待。</p>
        </div>
      </section>
      <div style={{ margin: '2rem 0', padding: '1.5rem', background: '#FEF9E7', borderRadius: '8px', borderLeft: '4px solid #B8860B' }}>
        <strong>延伸閱讀：</strong>
        <ul style={{ marginTop: '0.5rem', paddingLeft: '1.5rem' }}>
          <li><a href="/blog/gold-recycling-process" style={{ color: '#B8860B' }}>黃金回收完整流程</a></li>
          <li><a href="/blog/gold-appraise" style={{ color: '#B8860B' }}>黃金鑑定方法</a></li>
          <li><a href="/blog/gold-id-requirement" style={{ color: '#B8860B' }}>黃金回收需要什麼證件</a></li>
          <li><a href="/blog/broken-gold-recovery" style={{ color: '#B8860B' }}>斷掉的金飾可以回收嗎</a></li>
          <li><a href="/blog/gold-scam-prevent" style={{ color: '#B8860B' }}>黃金詐騙防範</a></li>
          <li><a href="/blog/how-to-choose-gold-shop" style={{ color: '#B8860B' }}>如何選擇黃金回收店</a></li>
        </ul>
      </div>

      <hr style={{ margin: '2rem 0' }} />
      <h2>立即諮詢</h2>
      <p>📞 電話：<a href="tel:0986821626" style={{ color: '#B8860B' }}>0986-821-626</a></p>
      <p>💬 LINE：<a href="https://line.me/ti/p/~@QPD888" style={{ color: '#06C755' }}>@QPD888</a></p>
      <p>🌐 官網：<a href="https://www.gold-tw.com/" style={{ color: '#B8860B' }}>www.gold-tw.com</a></p>
    </main>
  );
}
