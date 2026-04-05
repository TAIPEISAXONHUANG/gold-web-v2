import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '黃金重量計算機｜線上黃金秤重｜巧品珠寶',
  description: '黃金回收價格計算教學：重量（台錢）× 當日牌價 = 你能拿到的金額。巧品珠寶按公開金價報價，絕不偷斤減兩。',
  keywords: '黃金計算機,黃金秤重,黃金重量計算',
  alternates: {
    canonical: 'https://www.gold-tw.com/blog/gold-calculator',
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
            "headline": "黃金重量計算機｜線上黃金秤重",
            "author": { "@type": "Organization", "name": "巧品珠寶", "url": "https://www.gold-tw.com", "@id": "https://www.gold-tw.com/#business" },
            "publisher": { "@type": "Organization", "name": "巧品珠寶", "url": "https://www.gold-tw.com", "logo": { "@type": "ImageObject", "url": "https://wsrv.nl/?url=https://drive.google.com/uc?id=16UrCpYWRkyEkvL7M73o0DIAvkKWtF0Lp&w=200&output=webp" } },
            "datePublished": "2026-03-12",
            "dateModified": "2026-03-16T00:00:00+08:00",
            "description": "黃金重量計算機，線上估價服務，詳細說明計算公式"
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"首頁","item":"https://www.gold-tw.com"},{"@type":"ListItem","position":2,"name":"知識專欄","item":"https://www.gold-tw.com/blog"},{"@type":"ListItem","position":3,"name":"黃金重量計算機｜線上黃金秤重｜巧品珠寶"}]})
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"黃金回收怎麼算價錢？","acceptedAnswer":{"@type":"Answer","text":"公式：當日牌價 × 重量（台錢）× 純度。例如24K金5錢 = 牌價 × 5 × 100%。"}},{"@type":"Question","name":"台錢和公克怎麼換算？","acceptedAnswer":{"@type":"Answer","text":"1台錢 = 3.75公克、1兩 = 10台錢 = 37.5公克、1盎司 = 31.1公克 ≈ 8.294台錢。"}},{"@type":"Question","name":"K金怎麼算回收價？","acceptedAnswer":{"@type":"Answer","text":"18K按75%計算、14K按58.5%、10K按41.7%。例如18K金3錢 = 牌價 × 3 × 75%。"}},{"@type":"Question","name":"黃金回收有最低重量限制嗎？","acceptedAnswer":{"@type":"Answer","text":"沒有，巧品珠寶接受任何重量的黃金，包括耳環、小墜子等輕量飾品。"}},{"@type":"Question","name":"計算出來的金額和實際回收金額一定相同嗎？","acceptedAnswer":{"@type":"Answer","text":"試算金額為估計值，實際金額依現場秤重和當日牌價為準，差異通常不大。"}}]})
        }}
      />
      <h1>黃金重量計算機｜線上黃金秤重試算</h1>

      <div style={{background:'#fffbeb', borderLeft:'4px solid #f59e0b', padding:'16px', margin:'16px 0', borderRadius:'8px'}}>
        <strong>📌 重點摘要：</strong> 黃金回收試算公式：當日回收牌價 × 重量（台錢）× 純度 = 預估回收金額。K金需再乘以純度比例（如18K = 75{'%'}）。<a href="/" style={{color:'#92400e'}}>巧品珠寶</a>按公開金價報價，不偷斤減兩。
      </div>

      <h2>黃金回收金額怎麼算最準確？</h2>
      <p>在前往回收店之前，事先試算您的黃金大概能賣多少，是保護自己不被低估的第一步。黃金回收計算方式其實不複雜，只要知道以下三個數字就能算出大概金額：當日黃金牌價、黃金重量、黃金純度。</p>
      <p>想了解更多關於黃金計價的背景知識，可參考<a href="/blog/gold-price-guide-2026" style={{color:'#B8860B'}}>2026年黃金價格完整指南</a>與<a href="/blog/factors-affecting-gold-price" style={{color:'#B8860B'}}>影響黃金價格的因素</a>。</p>

      <h2>黃金回收怎麼計算？</h2>
      <div style={{background:'#f0fdf4', border:'1px solid #86efac', borderRadius:'8px', padding:'16px', margin:'1rem 0'}}>
        <p style={{margin:0, fontWeight:'bold', fontSize:'1.1rem'}}>回收金額 = 當日黃金牌價（元/台錢）× 重量（台錢）× 純度比例</p>
      </div>

      <h2>黃金重量單位怎麼換算？</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse', margin: '1rem 0' }}>
        <thead>
          <tr style={{ background: '#f5f5f5' }}>
            <th style={{ padding: '10px', border: '1px solid #ddd' }}>單位</th>
            <th style={{ padding: '10px', border: '1px solid #ddd' }}>換算公克</th>
            <th style={{ padding: '10px', border: '1px solid #ddd' }}>說明</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ padding: '10px', border: '1px solid #ddd' }}>1兩（台兩）</td>
            <td style={{ padding: '10px', border: '1px solid #ddd' }}>37.5 克</td>
            <td style={{ padding: '10px', border: '1px solid #ddd' }}>等於10台錢</td>
          </tr>
          <tr>
            <td style={{ padding: '10px', border: '1px solid #ddd' }}>1錢（台錢）</td>
            <td style={{ padding: '10px', border: '1px solid #ddd' }}>3.75 克</td>
            <td style={{ padding: '10px', border: '1px solid #ddd' }}>台灣最常用單位</td>
          </tr>
          <tr>
            <td style={{ padding: '10px', border: '1px solid #ddd' }}>1分</td>
            <td style={{ padding: '10px', border: '1px solid #ddd' }}>0.375 克</td>
            <td style={{ padding: '10px', border: '1px solid #ddd' }}>1台錢的十分之一</td>
          </tr>
          <tr>
            <td style={{ padding: '10px', border: '1px solid #ddd' }}>1盎司（Troy oz）</td>
            <td style={{ padding: '10px', border: '1px solid #ddd' }}>31.1035 克</td>
            <td style={{ padding: '10px', border: '1px solid #ddd' }}>國際黃金計量單位</td>
          </tr>
        </tbody>
      </table>

      <h2>各K數純度怎麼計算？</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse', margin: '1rem 0' }}>
        <thead>
          <tr style={{ background: '#f5f5f5' }}>
            <th style={{ padding: '10px', border: '1px solid #ddd' }}>黃金種類</th>
            <th style={{ padding: '10px', border: '1px solid #ddd' }}>純度</th>
            <th style={{ padding: '10px', border: '1px solid #ddd' }}>計算比例</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ padding: '10px', border: '1px solid #ddd' }}>9999純金</td>
            <td style={{ padding: '10px', border: '1px solid #ddd' }}>99.99%</td>
            <td style={{ padding: '10px', border: '1px solid #ddd' }}>× 1.00</td>
          </tr>
          <tr>
            <td style={{ padding: '10px', border: '1px solid #ddd' }}>916（22K）</td>
            <td style={{ padding: '10px', border: '1px solid #ddd' }}>91.6%</td>
            <td style={{ padding: '10px', border: '1px solid #ddd' }}>× 0.916</td>
          </tr>
          <tr>
            <td style={{ padding: '10px', border: '1px solid #ddd' }}>18K</td>
            <td style={{ padding: '10px', border: '1px solid #ddd' }}>75%</td>
            <td style={{ padding: '10px', border: '1px solid #ddd' }}>× 0.75</td>
          </tr>
          <tr>
            <td style={{ padding: '10px', border: '1px solid #ddd' }}>14K</td>
            <td style={{ padding: '10px', border: '1px solid #ddd' }}>58.5%</td>
            <td style={{ padding: '10px', border: '1px solid #ddd' }}>× 0.585</td>
          </tr>
          <tr>
            <td style={{ padding: '10px', border: '1px solid #ddd' }}>10K</td>
            <td style={{ padding: '10px', border: '1px solid #ddd' }}>41.7%</td>
            <td style={{ padding: '10px', border: '1px solid #ddd' }}>× 0.417</td>
          </tr>
        </tbody>
      </table>
      <p>想了解更多關於K金純度的詳細說明，可參考<a href="/blog/karat-gold-guide" style={{color:'#B8860B'}}>K金回收完全攻略</a>與<a href="/blog/karat-gold-price" style={{color:'#B8860B'}}>K金回收價格計算</a>。</p>

      <h2>計算範例怎麼看？</h2>
      <p><strong>範例一：9999純金項鍊，重2.5台錢，當日牌價9,500元</strong><br/>
      回收金額 = 9,500 × 2.5 × 1.00 = <strong>23,750元</strong></p>
      <p><strong>範例二：18K金戒指，重1台錢，當日牌價9,500元</strong><br/>
      回收金額 = 9,500 × 1 × 0.75 = <strong>7,125元</strong></p>
      <p><strong>範例三：14K金耳環，重0.5台錢，當日牌價9,500元</strong><br/>
      回收金額 = 9,500 × 0.5 × 0.585 = <strong>2,779元</strong></p>

      <h2>如何在家量出黃金重量？</h2>
      <p>可以使用精密電子秤（0.01公克精度以上）在家稱重，再換算成台錢（除以3.75）。但請注意，家用電子秤的精準度可能與回收店的校正秤有些許差距，以現場秤重為準。不確定純度的黃金，帶來<a href="/" style={{color:'#B8860B'}}>巧品珠寶</a>使用螢光X光儀免費鑑定即可。</p>

      <h2>使用計算結果有哪些注意事項？</h2>
      <ul>
        <li>試算結果為估計值，實際金額以現場秤重和當日牌價為準</li>
        <li>若黃金含有寶石，寶石重量不計入黃金回收金額</li>
        <li>不確定純度的黃金，計算結果僅供參考，建議帶來免費鑑定</li>
        <li>可事先查詢台灣銀行當日黃金牌價，或電洽巧品珠寶詢問報價</li>
      </ul>
      <p>賣黃金前也可參考<a href="/blog/before-selling-gold" style={{color:'#B8860B'}}>賣黃金前必知事項</a>及<a href="/blog/gold-recycling-precautions" style={{color:'#B8860B'}}>黃金回收注意事項</a>，確保整個過程順利。</p>

      <section style={{marginTop:'2.5rem', padding:'2rem', background:'#f9fafb', borderRadius:'12px', border:'1px solid #e5e7eb'}}>
        <h2 style={{fontSize:'1.3rem', fontWeight:'bold', color:'#1f2937', marginTop:0, marginBottom:'1rem'}}>常見問題 FAQ</h2>
        <div style={{marginBottom:'1rem', background:'white', padding:'1rem', borderRadius:'8px', border:'1px solid #e5e7eb'}}>
          <h3 style={{margin:'0 0 0.5rem 0', fontSize:'1rem', color:'#1f2937'}}>Q: 黃金回收怎麼算價錢？</h3>
          <p style={{margin:0, color:'#4b5563', lineHeight:'1.6'}}>A: 公式：當日牌價 × 重量（台錢）× 純度。例如24K金5錢 = 牌價 × 5 × 100%。</p>
        </div>
        <div style={{marginBottom:'1rem', background:'white', padding:'1rem', borderRadius:'8px', border:'1px solid #e5e7eb'}}>
          <h3 style={{margin:'0 0 0.5rem 0', fontSize:'1rem', color:'#1f2937'}}>Q: 台錢和公克怎麼換算？</h3>
          <p style={{margin:0, color:'#4b5563', lineHeight:'1.6'}}>A: 1台錢 = 3.75公克、1兩 = 10台錢 = 37.5公克、1盎司 = 31.1公克 ≈ 8.294台錢。</p>
        </div>
        <div style={{marginBottom:'1rem', background:'white', padding:'1rem', borderRadius:'8px', border:'1px solid #e5e7eb'}}>
          <h3 style={{margin:'0 0 0.5rem 0', fontSize:'1rem', color:'#1f2937'}}>Q: K金怎麼算回收價？</h3>
          <p style={{margin:0, color:'#4b5563', lineHeight:'1.6'}}>A: 18K按75%計算、14K按58.5%、10K按41.7%。例如18K金3錢 = 牌價 × 3 × 75%。詳見<a href="/blog/karat-gold-price" style={{color:'#B8860B'}}>K金回收價格</a>。</p>
        </div>
        <div style={{marginBottom:'1rem', background:'white', padding:'1rem', borderRadius:'8px', border:'1px solid #e5e7eb'}}>
          <h3 style={{margin:'0 0 0.5rem 0', fontSize:'1rem', color:'#1f2937'}}>Q: 黃金回收有最低重量限制嗎？</h3>
          <p style={{margin:0, color:'#4b5563', lineHeight:'1.6'}}>A: 沒有，巧品珠寶接受任何重量的黃金，包括耳環、小墜子等輕量飾品。</p>
        </div>
        <div style={{background:'white', padding:'1rem', borderRadius:'8px', border:'1px solid #e5e7eb'}}>
          <h3 style={{margin:'0 0 0.5rem 0', fontSize:'1rem', color:'#1f2937'}}>Q: 計算出來的金額和實際回收金額一定相同嗎？</h3>
          <p style={{margin:0, color:'#4b5563', lineHeight:'1.6'}}>A: 試算金額為估計值，實際金額依現場秤重和當日牌價為準，差異通常不大。</p>
        </div>
      </section>

      <div style={{ margin: '2rem 0', padding: '1.5rem', background: '#FEF9E7', borderRadius: '8px', borderLeft: '4px solid #B8860B' }}>
        <strong>延伸閱讀：</strong>
        <ul style={{ marginTop: '0.5rem', paddingLeft: '1.5rem' }}>
          <li><a href="/blog/gold-weight" style={{ color: '#B8860B' }}>黃金重量換算</a></li>
          <li><a href="/blog/gold-purity" style={{ color: '#B8860B' }}>黃金純度說明</a></li>
          <li><a href="/blog/gold-appraise" style={{ color: '#B8860B' }}>黃金免費估價</a></li>
          <li><a href="/blog/gold-price-guide-2026" style={{ color: '#B8860B' }}>2026年黃金價格指南</a></li>
          <li><a href="/blog/karat-gold-price" style={{ color: '#B8860B' }}>K金回收價格計算</a></li>
          <li><a href="/blog/before-selling-gold" style={{ color: '#B8860B' }}>賣黃金前必知事項</a></li>
          <li><a href="/blog/gold-recovery-faq" style={{ color: '#B8860B' }}>黃金回收常見問題</a></li>
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
