import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '2026年黃金價格走勢｜黃金會漲嗎｜巧品珠寶',
  description: '2026年黃金價格走勢分析，專家預測黃金後市行情走勢。',
  keywords: '2026黃金走勢,黃金會漲嗎,金價預測',
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
              "dateModified": "2026-03-16",
            "description": "黃金回收專業知識"
          })
        }}
      />
      <h1>2026年黃金價格走勢分析</h1>
      
      <h2>結論：2026年黃金操作建議</h2>
      <p>根據目前國際局勢與經濟環境，黃金仍是避險首選。</p>

      <h2>影響金價因素</h2>
      <ul>
        <li>📈 美元匯率</li>
        <li>📈 通貨膨脹</li>
        <li>📈 地緣政治</li>
        <li>📈 各國央行政策</li>
      </ul>

      <h2>黃金投資建議</h2>
      <ul>
        <li>長期持有為佳</li>
        <li>分散投資風險</li>
        <li>關注國際局勢</li>
      </ul>

      <hr style={{ margin: '2rem 0' }} />

      <h2>立即聯繫</h2>
      <p>📞 電話：0986-821-626</p>
      <p>💬 LINE：@QPD888</p>
      <p>🌐 官網：https://www.gold-tw.com/</p>
    </main>
  );
}
