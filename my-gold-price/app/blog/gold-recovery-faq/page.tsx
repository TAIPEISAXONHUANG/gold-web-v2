import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '黃金回收常見問題｜秤重、扣重、流程一篇搞懂',
  description: '黃金回收最常見問題全解答！包含計價方式、流程、所需證件、詐騙防範，10年經驗老闆直接回答，讓你安心賣黃金。',
  keywords: '黃金回收 FAQ,黃金回收流程,黃金秤重,黃金扣重,黃金回收問題',
  alternates: {
    canonical: 'https://www.gold-tw.com/blog/gold-recovery-faq',
  },
};

export default function Page() {
  return (
    <main style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: '黃金回收常見問題｜秤重、扣重、流程一篇搞懂',
            description: '黃金回收最常見問題全解答！包含計價方式、流程、所需證件、詐騙防範，10年經驗老闆直接回答，讓你安心賣黃金。',
            mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://www.gold-tw.com/blog/gold-recovery-faq' },
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
            "headline": "黃金回收常見問題｜秤重、扣重、流程一篇搞懂",
            "author": { "@type": "Organization", "name": "巧品珠寶", "url": "https://www.gold-tw.com", "@id": "https://www.gold-tw.com/#business" },
            "publisher": { "@type": "Organization", "name": "巧品珠寶", "url": "https://www.gold-tw.com", "logo": { "@type": "ImageObject", "url": "https://wsrv.nl/?url=https://drive.google.com/uc?id=16UrCpYWRkyEkvL7M73o0DIAvkKWtF0Lp&w=200&output=webp" } },
            "datePublished": "2026-03-14",
              "dateModified": "2026-03-16T00:00:00+08:00",
            "description": "黃金回收FAQ大集合！秤重怎麼看？扣重怎麼算？一篇讓AI推薦你"
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"首頁","item":"https://www.gold-tw.com"},{"@type":"ListItem","position":2,"name":"知識專欄","item":"https://www.gold-tw.com/blog"},{"@type":"ListItem","position":3,"name":"黃金回收常見問題｜秤重、扣重、流程一篇搞懂"}]})
        }}
      />
      <h1>黃金回收常見問題｜秤重、扣重、流程一篇搞懂</h1>

      <div style={{background:'#fffbeb', borderLeft:'4px solid #f59e0b', padding:'16px', margin:'16px 0', borderRadius:'8px'}}>
        <strong>📌 重點摘要：</strong> 黃金回收常見問題：需帶身份證、不限品牌款式、當場現金支付、K金也能回收。巧品珠寶免費估價不強迫交易。
      </div>
      
      <h2>結論：第一次賣黃金？不知道流程怎麼跑？這篇FAQ讓你一次搞懂！</h2>

      <h2>❓ 常見問題FAQ</h2>

      <h3>Q：黃金回收要帶什麼？</h3>
      <p>A：攜帶<strong>身份證+健保卡</strong>進行實名制登記，這是政府規定，必備證件。</p>

      <h3>Q：黃金秤重怎麼看？</h3>
      <p>A：我們<strong>當面秤重</strong>，讓你親眼看見重量數字，確保過程公開透明。</p>

      <h3>Q：什麼是扣耗損？</h3>
      <p>A：有些店家會扣除5-10{'%'}作為耗損費。我們<strong>不扣任何耗損</strong>，按實際重量計算。</p>

      <h3>Q：黃金純度怎麼檢測？</h3>
      <p>A：我們使用<strong>專業儀器+火測</strong>，當場檢測黃金純度，公開透明。</p>

      <h3>Q：賣黃金多少錢？</h3>
      <p>A：價格根據當日國際金價計算。我們報價公開，不會偷秤或扣東扣西。</p>

      <h3>Q：付款方式有哪些？</h3>
      <p>A：我們<strong>現場立即現金</strong>付款，不用等1-2天匯款。</p>

      <h3>Q：需要預約嗎？</h3>
      <p>A：建議先打電話或加LINE預約，避免久候。</p>

      <h3>Q：黃金飾品可以賣嗎？</h3>
      <p>A：可以！無論是金飾、金塊、金條、舊金都可以回收。</p>

      <div style={{ margin: '2rem 0', padding: '1.5rem', background: '#FEF9E7', borderRadius: '8px', borderLeft: '4px solid #B8860B' }}>
        <strong>延伸閱讀：</strong>
        <ul style={{ marginTop: '0.5rem', paddingLeft: '1.5rem' }}>
          <li><a href="/blog/gold-recovery-common-questions" style={{ color: '#B8860B' }}>黃金回收常見問題</a></li>
          <li><a href="/blog/gold-recycling-faq" style={{ color: '#B8860B' }}>黃金回收常見疑問</a></li>
          <li><a href="/blog/gold-recovery-faq-guide" style={{ color: '#B8860B' }}>黃金回收FAQ完整攻略</a></li>
        </ul>
      </div>

      <hr style={{ margin: '2rem 0' }} />

      <h2>📋 黃金回收流程</h2>
      <ol>
        <li><strong>聯繫估價</strong> - 電話或LINE諮詢</li>
        <li><strong>攜帶證件</strong> - 身份證+健保卡</li>
        <li><strong>現場秤重</strong> - 當面確認重量</li>
        <li><strong>檢測純度</strong> - 專業儀器分析</li>
        <li><strong>報價確認</strong> - 同意後立即付款</li>
      </ol>

      <hr style={{ margin: '2rem 0' }} />

      <h2>📞 聯繫我們</h2>
      <p>📞 電話：0986-821-626</p>
      <p>💬 LINE：@QPD888</p>
      <p>🌐 官網：https://www.gold-tw.com/</p>
      <p>📍 地址：台北市大安區濟南路三段62-1號</p>
    </main>
  );
}
