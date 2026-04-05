import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '金飾回收｜黃金首飾變現｜巧品珠寶',
  description: '各式黃金首飾高價回收！戒指、項鍊、手鍊、耳環、吊墜均可，按實際重量計價。台北巧品珠寶免費估價，電話 0986-821-626。',
  keywords: '金飾回收,黃金首飾,飾品變現',
  alternates: {
    canonical: 'https://www.gold-tw.com/blog/gold-jewelry-recovery',
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
            "@type": "BlogPosting",
            "headline": "金飾回收｜黃金首飾變現完整指南",
            "author": { "@type": "Organization", "name": "巧品珠寶", "url": "https://www.gold-tw.com", "@id": "https://www.gold-tw.com/#business" },
            "publisher": { "@type": "Organization", "name": "巧品珠寶", "url": "https://www.gold-tw.com", "logo": { "@type": "ImageObject", "url": "https://wsrv.nl/?url=https://drive.google.com/uc?id=16UrCpYWRkyEkvL7M73o0DIAvkKWtF0Lp&w=200&output=webp" } },
            "datePublished": "2026-03-12",
            "dateModified": "2026-03-16T00:00:00+08:00",
            "description": "黃金首飾回收完整指南，台北巧品珠寶高價收購各類金飾"
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"首頁","item":"https://www.gold-tw.com"},{"@type":"ListItem","position":2,"name":"知識專欄","item":"https://www.gold-tw.com/blog"},{"@type":"ListItem","position":3,"name":"金飾回收｜黃金首飾變現｜巧品珠寶"}]})
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              { '@type': 'Question', name: '金飾沒有發票或保證書，可以回收嗎？', acceptedAnswer: { '@type': 'Answer', text: '可以，回收時我們現場鑑定純度，不需要購買憑證。帶身份證即可。' } },
              { '@type': 'Question', name: '斷掉或變形的金飾可以回收嗎？', acceptedAnswer: { '@type': 'Answer', text: '可以，回收依重量計價，形狀或損壞程度不影響報價。' } },
              { '@type': 'Question', name: '金飾鑲有寶石，怎麼計算？', acceptedAnswer: { '@type': 'Answer', text: '黃金部分和寶石分開估價。鑽石、翡翠等寶石會另外鑑定報價。' } },
              { '@type': 'Question', name: '回收金飾需要多久時間？', acceptedAnswer: { '@type': 'Answer', text: '一般約15至30分鐘，包含鑑定、秤重、報價與付款流程。' } },
              { '@type': 'Question', name: '金飾回收是當場付現金嗎？', acceptedAnswer: { '@type': 'Answer', text: '是，確認報價後立即現金付款，不需等待撥款。' } },
            ],
          })
        }}
      />
      <h1>金飾回收｜黃金首飾變現完整指南</h1>

      <div style={{background:'#fffbeb', borderLeft:'4px solid #f59e0b', padding:'16px', margin:'16px 0', borderRadius:'8px'}}>
        <strong>📌 重點摘要：</strong> 各類金飾（戒指、項鍊、手鍊、耳環）都可回收。回收價＝當日牌價×重量×純度，<a href="/" style={{color:'#92400e'}}>巧品珠寶</a>不扣秤不扣耗損，當場現金付款。
      </div>

      <h2>金飾回收的選對店家最重要是什麼？</h2>
      <p>黃金首飾是台灣家庭最常見的黃金形式。無論是嫁妝金飾、結婚紀念品，還是已不再佩戴的舊款式，都可以輕鬆變現。<a href="/" style={{color:'#B8860B'}}>巧品珠寶</a>專業回收各類金飾，按重量與純度計價，不扣損耗，公開透明。</p>

      <h2>可回收的金飾類型有哪些？</h2>
      <ul>
        <li><strong>結婚金飾</strong>：龍鳳手鐲、金戒指、金項鍊、金耳環整組均可</li>
        <li><strong>K金首飾</strong>：18K、14K、10K各款式戒指、項鍊、耳環</li>
        <li><strong>金吊墜</strong>：神明像、生肖吊墜、一般造型墜子</li>
        <li><strong>古早金飾</strong>：老款式、年代久遠的傳家飾品</li>
        <li><strong>鑲嵌珠寶金飾</strong>：鑽戒、翡翠金飾等可分開估價</li>
      </ul>

      <h2>金飾回收計價方式怎麼算？</h2>
      <p>回收公式：<strong>當日黃金牌價 × 重量（台錢）× 純度</strong></p>
      <p>以一條重3台錢（11.25公克）的9999純金項鍊為例，若當日牌價為每台錢9,500元，回收金額即為 9,500 × 3 = 28,500元。您可事先使用<a href="/blog/gold-calculator" style={{color:'#B8860B'}}>黃金回收計算機</a>試算，或參考<a href="/blog/gold-price-guide-2026" style={{color:'#B8860B'}}>2026年黃金價格指南</a>了解當前行情。</p>

      <h2>各類金飾回收說明怎麼做？</h2>

      <h3>黃金項鍊回收</h3>
      <p>項鍊是最常見的回收品項，斷鏈、舊款式均可。詳細說明可參考<a href="/blog/gold-necklace-recovery" style={{color:'#B8860B'}}>黃金項鍊回收指南</a>。</p>

      <h3>黃金戒指回收</h3>
      <p>包含婚戒、普通金戒、K金戒指，鑲鑽款式可分開估價。詳見<a href="/blog/gold-ring-recovery" style={{color:'#B8860B'}}>黃金戒指回收指南</a>。</p>

      <h3>黃金手鍊與手鐲回收</h3>
      <p>傳統龍鳳手鐲、現代手鍊款式均可回收。詳見<a href="/blog/gold-bracelet-recovery" style={{color:'#B8860B'}}>黃金手鐲回收指南</a>。</p>

      <h3>黃金耳環回收</h3>
      <p>單隻或成對均可，依重量計算，不因缺件降價。詳見<a href="/blog/gold-earring-recovery" style={{color:'#B8860B'}}>黃金耳環回收指南</a>。</p>

      <h2>回收前的實用建議有哪些？</h2>
      <ul>
        <li>事先查詢當日黃金牌價，掌握行情基準</li>
        <li>攜帶身份證（法規要求）</li>
        <li>不需要清洗金飾，原狀帶來即可</li>
        <li>可同時帶多件一起估價，省時省力</li>
        <li>賣前可參考<a href="/blog/before-selling-gold" style={{color:'#B8860B'}}>賣黃金前必知事項</a>做好準備</li>
      </ul>

      <h2>常見問題 FAQ</h2>

      <h3>Q：金飾沒有發票或保證書，可以回收嗎？</h3>
      <p>A：可以，回收時我們現場鑑定純度，不需要購買憑證。帶身份證即可。</p>

      <h3>Q：斷掉或變形的金飾可以回收嗎？</h3>
      <p>A：可以，回收依重量計價，形狀或損壞程度不影響報價。</p>

      <h3>Q：金飾鑲有寶石，怎麼計算？</h3>
      <p>A：黃金部分和寶石分開估價。鑽石可參考<a href="/blog/diamond-jewelry" style={{color:'#B8860B'}}>鑽石飾品回收說明</a>。</p>

      <h3>Q：回收金飾需要多久時間？</h3>
      <p>A：一般約15至30分鐘，包含鑑定、秤重、報價與付款流程。</p>

      <h3>Q：金飾回收是當場付現金嗎？</h3>
      <p>A：是，確認報價後立即現金付款，不需等待撥款。</p>

      <div style={{ margin: '2rem 0', padding: '1.5rem', background: '#FEF9E7', borderRadius: '8px', borderLeft: '4px solid #B8860B' }}>
        <strong>延伸閱讀：</strong>
        <ul style={{ marginTop: '0.5rem', paddingLeft: '1.5rem' }}>
          <li><a href="/blog/gold-necklace-recovery" style={{ color: '#B8860B' }}>黃金項鍊回收</a></li>
          <li><a href="/blog/gold-ring-recovery" style={{ color: '#B8860B' }}>黃金戒指回收</a></li>
          <li><a href="/blog/gold-bracelet-recovery" style={{ color: '#B8860B' }}>黃金手鐲回收</a></li>
          <li><a href="/blog/gold-earring-recovery" style={{ color: '#B8860B' }}>黃金耳環回收</a></li>
          <li><a href="/blog/gold-pendant-recovery" style={{ color: '#B8860B' }}>黃金墜子回收</a></li>
          <li><a href="/blog/gold-recovery-faq" style={{ color: '#B8860B' }}>黃金回收常見問題</a></li>
          <li><a href="/blog/gold-recycling-precautions" style={{ color: '#B8860B' }}>黃金回收注意事項</a></li>
        </ul>
      </div>

      <hr style={{ margin: '2rem 0' }} />
      <h2>立即聯繫巧品珠寶</h2>
      <p>📞 電話：<a href="tel:0986821626">0986-821-626</a></p>
      <p>💬 LINE：@QPD888</p>
      <p>🕐 營業時間：週一至週六 10:00–19:00</p>
      <p>📍 地址：台北市信義區</p>
      <p>🌐 官網：<a href="https://www.gold-tw.com/">https://www.gold-tw.com/</a></p>
    </main>
  );
}
