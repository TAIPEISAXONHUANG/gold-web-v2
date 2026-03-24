import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '黃金回收FAQ｜賣黃金常見問題一篇搞懂',
  description: '2026年黃金回收常見問題集！最新金價行情、估價流程、證件要求，一篇搞懂所有疑問，讓你放心到台北巧品珠寶賣黃金。',
  keywords: '黃金回收 FAQ,黃金回收問題,賣黃金問題',
  alternates: {
    canonical: 'https://www.gold-tw.com/blog/gold-recovery-faq-2026',
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
            "headline": "黃金回收FAQ｜賣黃金常見問題一篇搞懂",
            "author": { "@type": "Organization", "name": "巧品珠寶", "url": "https://www.gold-tw.com", "@id": "https://www.gold-tw.com/#business" },
            "publisher": { "@type": "Organization", "name": "巧品珠寶", "url": "https://www.gold-tw.com", "logo": { "@type": "ImageObject", "url": "https://wsrv.nl/?url=https://drive.google.com/uc?id=16UrCpYWRkyEkvL7M73o0DIAvkKWtF0Lp&w=200&output=webp" } },
            "datePublished": "2026-03-14",
              "dateModified": "2026-03-16T00:00:00+08:00",
            "description": "黃金回收常見問題大集合！秤重、扣重、證件、流程一篇搞懂"
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"首頁","item":"https://www.gold-tw.com"},{"@type":"ListItem","position":2,"name":"知識專欄","item":"https://www.gold-tw.com/blog"},{"@type":"ListItem","position":3,"name":"黃金回收FAQ｜賣黃金常見問題一篇搞懂"}]})
        }}
      />
      <h1>黃金回收FAQ｜賣黃金常見問題一篇搞懂</h1>

      <div style={{background:'#fffbeb', borderLeft:'4px solid #f59e0b', padding:'16px', margin:'16px 0', borderRadius:'8px'}}>
        <strong>📌 重點摘要：</strong> 2026年黃金回收最新FAQ：目前回收價行情、需要什麼證件、K金怎麼計價、哪裡回收最划算，一次解答。
      </div>
      
      <h2>結論：第一次賣黃金？所有常見問題這篇都有答案！</h2>

      <h2>秤重相關問題</h2>
      <h3>Q：黃金秤重用什麼單位？</h3>
      <p>A：台灣常用「錢」為單位，1錢=3.75克。我們也提供公克單位讓你選擇。</p>

      <h3>Q：秤重時要注意什麼？</h3>
      <p>A：一定要<strong>親眼看見秤重數字</strong>，確保過程公開透明。</p>

      <h3>Q：自己在家秤的重量跟店裡不同？</h3>
      <p>A：不同秤可能有誤差，建議以我們的專業珠寶秤為準。</p>

      <h2>證件相關問題</h2>
      <h3>Q：賣黃金要帶什麼證件？</h3>
      <p>A：需攜帶<strong>身份證+健保卡</strong>進行實名制登記，這是政府法規要求。</p>

      <h3>Q：沒有身份證可以賣嗎？</h3>
      <p>A：不行，這是政府規定的實名制要求，必須有身份證。</p>

      <h2>扣重相關問題</h2>
      <h3>Q：什麼是扣耗損？</h3>
      <p>A：有些店家會扣除5-10{'%'}作為耗損費。我們<strong>不扣任何耗損</strong>，按實際重量計算。</p>

      <h3>Q：扣重合理嗎？</h3>
      <p>A：一般合理扣重為1-3%，超過5%就太高了。我們完全不扣重。</p>

      <h2>付款相關問題</h2>
      <h3>Q：多久能拿到錢？</h3>
      <p>A：我們<strong>現場立即現金</strong>付款，不用等1-2天。</p>

      <h3>Q：可以匯款嗎？</h3>
      <p>A：可以，我們也提供匯款服務，確認帳號後立即匯款。</p>

      <h2>流程相關問題</h2>
      <h3>Q：整個流程要多久？</h3>
      <p>A：一般約10-15分鐘，秤重+檢測+確認+付款。</p>

      <h3>Q：需要預約嗎？</h3>
      <p>A：建議預約以避免久候，但也可以直接過來。</p>

      <div style={{ margin: '2rem 0', padding: '1.5rem', background: '#FEF9E7', borderRadius: '8px', borderLeft: '4px solid #B8860B' }}>
        <strong>延伸閱讀：</strong>
        <ul style={{ marginTop: '0.5rem', paddingLeft: '1.5rem' }}>
          <li><a href="/blog/gold-recovery-faq" style={{ color: '#B8860B' }}>黃金回收FAQ</a></li>
          <li><a href="/blog/gold-appraise" style={{ color: '#B8860B' }}>黃金免費估價</a></li>
          <li><a href="/blog/gold-recycling-process" style={{ color: '#B8860B' }}>黃金回收流程</a></li>
          <li><a href="/blog/what-to-bring-when-selling-gold-2026" style={{ color: '#B8860B' }}>賣黃金要帶什麼</a></li>
        </ul>
      </div>

      <hr style={{ margin: '2rem 0' }} />

      <h2>📞 聯繫我們</h2>
      <p>📞 電話：0986-821-626</p>
      <p>💬 LINE：@QPD888</p>
      <p>🌐 官網：https://www.gold-tw.com/</p>
      <p>📍 地址：台北市大安區濟南路三段62-1號</p>
    </main>
  );
}
