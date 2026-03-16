import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '黃金回收秤重陷阱｜怎麼判斷秤有沒有動手腳？',
  description: '賣黃金最常見的秤重陷阱！揭露業者如何在秤重上動手腳，教你如何現場確認重量，避免被少算黃金重量而損失金錢。',
  keywords: '黃金秤重,秤重陷阱,黃金回收注意事項',
  alternates: {
    canonical: 'https://www.gold-tw.com/blog/gold-scale-trap',
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
            "@type": "Article",
            "headline": "黃金回收秤重陷阱｜怎麼判斷秤有沒有動手腳？",
            "author": { "@type": "Organization", "name": "巧品珠寶" },
            "publisher": { "@type": "Organization", "name": "巧品珠寶" },
            "datePublished": "2026-03-14",
              "dateModified": "2026-03-16T00:00:00+08:00",
            "description": "賣黃金最怕秤重被動手腳！專業教你如何判斷秤是否準確"
          })
        }}
      />
      <h1>黃金回收秤重陷阱｜怎麼判斷秤有沒有動手腳？</h1>
      
      <h2>結論：秤重是黃金回收最關鍵的環節，本文教你如何保護自己的權益！</h2>

      <h2>常見秤重陷阱</h2>
      <ul>
        <li><strong>秤重數字不讓你看</strong> - 偷偷調整秤的精度</li>
        <li><strong>電子秤遲遲不歸零</strong> - 預先扣重量</li>
        <li><strong>砝碼不準確</strong> - 標準砝碼動手腳</li>
        <li><strong>秤盤大小</strong> - 小秤盤看起來數字比較大</li>
      </ul>

      <h2>如何自保？</h2>
      <ul>
        <li>選擇<strong>當面秤重</strong>的店家</li>
        <li>自己先在家秤過<strong>記錄重量</strong></li>
        <li>要求看<strong>秤歸零</strong>的過程</li>
        <li>使用自己的<strong>可信秤</strong>交叉比對</li>
      </ul>

      <h2>為什麼選擇我們？</h2>
      <ul>
        <li><strong>10年以上經驗</strong> - 誠信經營</li>
        <li><strong>當面秤重</strong> - 讓你親眼看見數字</li>
        <li><strong>專業儀器</strong> - 精準檢測</li>
        <li><strong>現場付款</strong> - 立即現金</li>
      </ul>

      <div style={{ margin: '2rem 0', padding: '1.5rem', background: '#FEF9E7', borderRadius: '8px', borderLeft: '4px solid #B8860B' }}>
        <strong>相關文章：</strong>
        <ul style={{ marginTop: '0.5rem', paddingLeft: '1.5rem' }}>
        <li><a href="/blog/gold-scam-prevent" style={{ color: "#B8860B" }}>黃金詐騙防範</a></li>
        <li><a href="/blog/gold-recovery-traps" style={{ color: "#B8860B" }}>黃金回收陷阱</a></li>
        <li><a href="/blog/gold-appraise" style={{ color: "#B8860B" }}>黃金免費估價</a></li>
        <li><a href="/blog/how-to-choose-gold-shop" style={{ color: "#B8860B" }}>如何選黃金回收店</a></li>
        </ul>
      </div>

      <hr style={{ margin: '2rem 0' }} />

      <h2>❓ 常見問題FAQ</h2>
      <h3>Q：秤重用什麼單位？</h3>
      <p>A：台灣常用「錢」為單位，1錢=3.75克。</p>
      
      <h3>Q：秤可以自己帶去嗎？</h3>
      <p>A：可以！我們歡迎客人自己帶秤來交叉比對。</p>

      <hr style={{ margin: '2rem 0' }} />

      <h2>📞 聯繫我們</h2>
      <p>📞 電話：0986-821-626</p>
      <p>💬 LINE：@QPD888</p>
      <p>🌐 官網：https://www.gold-tw.com/</p>
      <p>📍 地址：台北市大安區濟南路三段62-1號</p>
    </main>
  );
}
