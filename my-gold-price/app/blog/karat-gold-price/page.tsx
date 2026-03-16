import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'K金回收價格怎麼算？2026年K金回收行情｜巧品珠寶',
  description: 'K金回收價格怎麼算？一篇搞懂18K/14K/10K回收計算方式，附2026年最新K金回收行情參考！',
  keywords: 'K金回收價格,K金回收計算,18K回收多少錢,14K回收',
  alternates: {
    canonical: 'https://www.gold-tw.com/blog/karat-gold-price',
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
            "author": { "@type": "Organization", "name": "巧品珠寶" },
            "publisher": { "@type": "Organization", "name": "巧品珠寶" },
            "datePublished": "2026-03-12",
              "dateModified": "2026-03-16T00:00:00+08:00",
            "description": "黃金回收專業知識"
          })
        }}
      />
      <h1>K金回收價格怎麼算？2026年最新行情</h1>
      
      <h2>K金回收計算公式</h2>
      <p><strong>K金回收價格 = 當日純金牌價 × 重量 × K金純度</strong></p>
      
      <h2>K金純度對照表</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <tr style={{ background: '#f5f5f5' }}>
          <th style={{ padding: '10px', border: '1px solid #ddd' }}>K數</th>
          <th style={{ padding: '10px', border: '1px solid #ddd' }}>純度</th>
        </tr>
        <tr>
          <td style={{ padding: '10px', border: '1px solid #ddd' }}>18K</td>
          <td style={{ padding: '10px', border: '1px solid #ddd' }}>75%</td>
        </tr>
        <tr>
          <td style={{ padding: '10px', border: '1px solid #ddd' }}>14K</td>
          <td style={{ padding: '10px', border: '1px solid #ddd' }}>58.3%</td>
        </tr>
      </table>

      <hr style={{ margin: '2rem 0' }} />
      <p>📞 電話：0986-821-626</p>
      <p>💬 LINE：@QPD888</p>
      <p>🌐 官網：https://www.gold-tw.com/</p>
    </main>
  );
}
