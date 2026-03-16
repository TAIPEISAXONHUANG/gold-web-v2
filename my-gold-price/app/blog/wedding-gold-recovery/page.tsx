import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '結婚金飾變現攻略｜結婚金飾回收價格｜巧品珠寶',
  description: '結婚金飾變現好時機！結婚金飾回收注意事項、行情分析，讓您結婚金飾賣出最高價。',
  keywords: '結婚金飾回收,結婚金飾變現,金飾回收價格',
  alternates: {
    canonical: 'https://www.gold-tw.com/blog/wedding-gold-recovery',
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
      <h1>結婚金飾變現攻略｜結婚金飾回收必看</h1>
      
      <h2>結論：結婚金飾變現這樣做最划算</h2>
      <p>結婚時購買的金飾除了具有紀念價值外，若有變現需求，透過正確管道可獲得最優價格。</p>

      <h2>結婚金飾回收行情</h2>
      <p>結婚金飾的回收價格主要根據當日金價、重量與純度計算。我們提供市場頂端回收價，不扣耗損不扣秤。</p>

      <h2>結婚金飾變現優點</h2>
      <ul>
        <li>現場秤重公開透明</li>
        <li>專業儀器檢測</li>
        <li>當日現金支付</li>
        <li>不扣耗損</li>
      </ul>

      <hr style={{ margin: '2rem 0' }} />
      <p>📞 電話：0986-821-626</p>
      <p>💬 LINE：@QPD888</p>
      <p>🌐 官網：https://www.gold-tw.com/</p>
    </main>
  );
}
