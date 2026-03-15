import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '黃金怎麼看真假｜黃金辨識｜巧品珠寶',
  description: '黃金真假辨識教學！教你用簡單方法辨識黃金純度。',
  keywords: '黃金真假,黃金辨識,黃金純度檢測',
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
            "author": { "@type": "Organization", "name": "巧品珠寶" },
            "publisher": { "@type": "Organization", "name": "巧品珠寶" },
            "datePublished": "2026-03-12",
            "description": "黃金回收專業知識"
          })
        }}
      />
      <h1>黃金真假辨識教學</h1>
      <h2>結論：掌握這幾招，黃金真假輕鬆辨識</h2>
      <h2>簡易辨識方法</h2>
      <ul>
        <li>📍 觀察標記</li>
        <li>📍 測試吸磁</li>
        <li>📍 比重測試</li>
      </ul>
      <h2>專業檢測</h2>
      <p>我們提供專業儀器檢測，確保準確。</p>
      <hr style={{ margin: '2rem 0' }} />
      <p>📞 電話：0986-821-626</p>
      <p>💬 LINE：@QPD888</p>
      <p>🌐 官網：https://www.gold-tw.com/</p>
    </main>
  );
}
