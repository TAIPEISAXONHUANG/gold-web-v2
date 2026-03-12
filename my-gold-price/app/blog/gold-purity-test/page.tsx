import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '黃金純度檢測｜如何測試K金含量｜巧品珠寶',
  description: 'K金純度怎麼測試？教你辨識不同K數的黃金。',
  keywords: '黃金純度,K金檢測,18K14K',
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
            "headline": "黃金純度檢測｜如何測試K金含量",
            "author": { "@type": "Organization", "name": "巧品珠寶" },
            "publisher": { "@type": "Organization", "name": "巧品珠寶" },
            "datePublished": "2026-03-12",
            "description": "K金純度怎麼測試？教你辨識不同K數的黃金"
          })
        }}
      />
      <h1>黃金純度檢測｜如何測試K金含量</h1>
      <h2>結論：了解純度賣更好！</h2>
      <p>不同K數的黃金價值不同，了解純度讓你賣得更合理。</p>
      <hr style={{ margin: '2rem 0' }} />
      <p>📞 電話：0986-821-626</p>
      <p>💬 LINE：@QPD888</p>
      <p>🌐 官網：https://www.gold-tw.com/</p>
    </main>
  );
}
