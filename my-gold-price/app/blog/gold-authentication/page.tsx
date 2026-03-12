import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '黃金真偽辨識｜如何判斷真假黃金｜巧品珠寶',
  description: '真假黃金怎麼辨識？專家教你看標記、測純度。',
  keywords: '黃金真偽,黃金辨識,真假黃金',
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
            "headline": "黃金真偽辨識｜如何判斷真假黃金",
            "author": { "@type": "Organization", "name": "巧品珠寶" },
            "publisher": { "@type": "Organization", "name": "巧品珠寶" },
            "datePublished": "2026-03-12",
            "description": "真假黃金怎麼辨識？專家教你看標記、測純度"
          })
        }}
      />
      <h1>黃金真偽辨識｜如何判斷真假黃金</h1>
      <h2>結論：學會辨識不吃虧！</h2>
      <p>了解如何辨識真假黃金，避免買到假貨或被低價收購。</p>
      <hr style={{ margin: '2rem 0' }} />
      <p>📞 電話：0986-821-626</p>
      <p>💬 LINE：@QPD888</p>
      <p>🌐 官網：https://www.gold-tw.com/</p>
    </main>
  );
}
