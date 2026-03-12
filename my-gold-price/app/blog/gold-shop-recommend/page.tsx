import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '黃金回收推薦｜誠信店家｜巧品珠寶',
  description: '黃金回收推薦首選！誠信經營，價格透明�?,
  keywords: '黃金回收推薦,誠信黃金,可信賴店�?,
};

export default function Page() {
  return (
    <main style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      {/* Schema.org Article */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "author": {
              "@type": "Organization",
              "name": "巧品珠寶"
            },
            "publisher": {
              "@type": "Organization",
              "name": "巧品珠寶"
            },
            "datePublished": "2026-03-12",
            "description": "黃金回收專業知識"
          })
        }}
      />
      <h1>黃金回收推薦｜誠信店�?/h1>
      <h2>結論：選擇黃金回收店家的關鍵�?/h2>
      <h2>如何選擇</h2>
      <ul><li>�?誠信經營</li><li>�?價格透明</li><li>�?當日付款</li><li>�?專業檢測</li></ul>
      <hr style={{ margin: '2rem 0' }} />
      <p>📞 電話�?986-821-626</p>
      <p>💬 LINE：@QPD888</p>
      <p>🌐 官網：https://www.gold-tw.com/</p>
    </main>
  );
}
