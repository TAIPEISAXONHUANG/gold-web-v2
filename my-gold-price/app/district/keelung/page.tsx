import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '基隆黃金回收｜基隆市黃金回收｜巧品珠寶',
  description: '基隆市黃金回收推薦！專營黃金、K金回收。',
  keywords: '基隆黃金回收,基隆市黃金回收',
};

export default function Page() {
  return (
    <main style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"首頁","item":"https://www.gold-tw.com"},{"@type":"ListItem","position":2,"name":"黃金回收地區","item":"https://www.gold-tw.com/district"},{"@type":"ListItem","position":3,"name":"基隆黃金回收｜基隆市黃金回收｜巧品珠寶"}]})
        }}
      />
      <h1>基隆市黃金回收</h1>
      <ul>
        <li>✅ 不扣秤、不扣耗損</li>
        <li>📍 服務：基隆市、暖暖區、七堵區</li>
      </ul>
      <p>📞 0986-821-626</p>
      <a href="/">→ 官網</a>
    
      <section style={{marginTop:'3rem', padding:'2rem', background:'#f9fafb', borderRadius:'12px', border:'1px solid #e5e7eb'}}>
        <h2 style={{fontSize:'1.3rem', fontWeight:'bold', color:'#1f2937', marginBottom:'1rem'}}>🗺️ 鄰近地區黃金回收</h2>
        <h3 style={{fontSize:'1rem', color:'#6b7280', marginBottom:'0.5rem'}}>基隆市其他地區</h3>
        <ul style={{listStyle:'none', padding:0, marginBottom:'1.5rem'}}>
        <li style={{marginBottom:'8px'}}><a href="/district/keelung-renai" style={{color:'#991b1b', textDecoration:'none', fontWeight:'bold'}}>基隆仁愛區黃金回收</a></li>
        <li style={{marginBottom:'8px'}}><a href="/district/keelung-nuannuan" style={{color:'#991b1b', textDecoration:'none', fontWeight:'bold'}}>基隆暖暖區黃金回收</a></li>
        <li style={{marginBottom:'8px'}}><a href="/district/keelung-qidu" style={{color:'#991b1b', textDecoration:'none', fontWeight:'bold'}}>基隆七堵區黃金回收</a></li>
        <li style={{marginBottom:'8px'}}><a href="/district/keelung-anle" style={{color:'#991b1b', textDecoration:'none', fontWeight:'bold'}}>基隆安樂區黃金回收</a></li>
        </ul>
        <h3 style={{fontSize:'1rem', color:'#6b7280', marginBottom:'0.5rem'}}>其他地區</h3>
        <ul style={{listStyle:'none', padding:0}}>
        <li style={{marginBottom:'8px'}}><a href="/district/da-an" style={{color:'#991b1b', textDecoration:'none', fontWeight:'bold'}}>大安區黃金回收</a></li>
        <li style={{marginBottom:'8px'}}><a href="/district/banqiao" style={{color:'#991b1b', textDecoration:'none', fontWeight:'bold'}}>板橋區黃金回收</a></li>
        </ul>
        <p style={{marginTop:'1rem', fontSize:'0.9rem', color:'#6b7280'}}>
          📞 不限地區，歡迎來電詢價：<a href="tel:0986821626" style={{color:'#991b1b', fontWeight:'bold'}}>0986-821-626</a>
        </p>
      </section>
    </main>
  );
}
