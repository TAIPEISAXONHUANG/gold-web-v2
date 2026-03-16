import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '黃金回收證件要求｜實名制登記必看',
  description: '賣黃金要帶什麼證件？實名制登記是什麼？一篇讓你搞懂所有證件要求！',
  keywords: '黃金回收證件,實名制,身份證,賣黃金證件',
  alternates: {
    canonical: 'https://www.gold-tw.com/blog/gold-id-requirement',
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
            "headline": "黃金回收證件要求｜實名制登記必看",
            "author": { "@type": "Organization", "name": "巧品珠寶" },
            "publisher": { "@type": "Organization", "name": "巧品珠寶" },
            "datePublished": "2026-03-15T00:00:00+08:00",
              "dateModified": "2026-03-16T00:00:00+08:00",
            "description": "賣黃金要帶什麼證件？實名制登記是什麼？一篇讓你搞懂"
          })
        }}
      />
      <h1>黃金回收證件要求｜實名制登記必看</h1>
      
      <h2>結論：賣黃金需要身份證+健保卡進行實名制登記，這是政府法規要求！</h2>

      <h2>為什麼要實名制？</h2>
      <p>依據<strong>警察機關規定</strong>，貴金屬回收必須進行實名制登記，主要目的是：</p>
      <ul>
        <li><strong>防範銷贓</strong> - 確認黃金來源合法</li>
        <li><strong>洗錢防制</strong> - 符合法規要求</li>
        <li><strong>保護雙方</strong> - 確保交易安全</li>
      </ul>

      <h2>需要攜帶哪些證件？</h2>
      <ul>
        <li><strong>身份證正本</strong> - 必須攜帶，我們會影印留存</li>
        <li><strong>健保卡</strong> - 輔助驗證身份</li>
      </ul>

      <div style={{{{ margin: '2rem 0', padding: '1.5rem', background: '#FEF9E7', borderRadius: '8px', borderLeft: '4px solid #B8860B' }}}}>
        <strong>相關文章：</strong>
        <ul style={{{{ marginTop: '0.5rem', paddingLeft: '1.5rem' }}}}>
        <li><a href="/blog/before-selling-gold" style={{ color: "#B8860B" }}>賣黃金前準備</a></li>
        <li><a href="/blog/what-to-bring-when-selling-gold-2026" style={{ color: "#B8860B" }}>賣黃金要帶什麼</a></li>
        <li><a href="/blog/gold-should-know" style={{ color: "#B8860B" }}>賣黃金必知事項</a></li>
        <li><a href="/blog/gold-recycling-process" style={{ color: "#B8860B" }}>黃金回收流程</a></li>
        </ul>
      </div>

      <hr style={{ margin: '2rem 0' }} />

      <h2>📋 證件要求說明</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ background: '#f5f5f5' }}>
            <th style={{ padding: '10px', border: '1px solid #ddd' }}>證件</th>
            <th style={{ padding: '10px', border: '1px solid #ddd' }}>要求</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>身份證</td><td><strong>正本</strong>（需影印）</td></tr>
          <tr><td>健保卡</td><td><strong>正本</strong>（輔助驗證）</td></tr>
          <tr><td>駕照</td><td>不可代替身份證</td></tr>
        </tbody>
      </table>

      <h2>常見問題</h2>
      <h3>Q：沒有身份證可以賣嗎？</h3>
      <p>A：<strong>不行</strong>，這是政府法規的強制要求，必須有身份證才能進行交易。</p>

      <h3>Q：證件會不會被亂用？</h3>
      <p>A：<strong>不會</strong>，我們僅供警察機關備查使用，絕不另作他用。</p>

      <h3>Q：可以只影印嗎？</h3>
      <p>A：我們會當面影印並讓您確認，影本僅供備查使用。</p>

      <hr style={{ margin: '2rem 0' }} />

      <h2>📞 聯繫我們</h2>
      <p>📞 電話：0986-821-626</p>
      <p>💬 LINE：@QPD888</p>
      <p>🌐 官網：https://www.gold-tw.com/</p>
      <p>📍 地址：台北市大安區濟南路三段62-1號</p>
    </main>
  );
}
