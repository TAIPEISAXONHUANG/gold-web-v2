import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '黃金清潔後賣出｜清洗價值提升｜巧品珠寶',
  description: '賣黃金前要先清洗嗎？清潔能提升價格？',
  keywords: '黃金清潔,珠寶清洗,清潔價值',
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
            "headline": "黃金清潔後賣出｜清洗價值提升",
            "author": { "@type": "Organization", "name": "巧品珠寶" },
            "publisher": { "@type": "Organization", "name": "巧品珠寶" },
            "datePublished": "2026-03-12",
            "description": "賣黃金前要先清洗嗎？清潔能提升價格？"
          })
        }}
      />
      <h1>黃金清潔後賣出｜清洗價值提升</h1>
      <h2>結論：清潔讓金子更亮！</h2>
      <p>了解黃金清潔對回收價格的影響。</p>
      <hr style={{ margin: '2rem 0' }} />
      <p>📞 電話：0986-821-626</p>
      <p>💬 LINE：@QPD888</p>
      <p>🌐 官網：https://www.gold-tw.com/</p>
    </main>
  );
}
