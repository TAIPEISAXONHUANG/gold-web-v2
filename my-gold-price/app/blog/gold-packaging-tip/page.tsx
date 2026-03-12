import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '黃金包裝建議｜攜帶安全須知｜巧品珠寶',
  description: '賣黃金時如何包裝攜帶？安全注意事項。',
  keywords: '黃金包裝,攜帶安全,黃金保存',
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
            "headline": "黃金包裝建議｜攜帶安全須知",
            "author": { "@type": "Organization", "name": "巧品珠寶" },
            "publisher": { "@type": "Organization", "name": "巧品珠寶" },
            "datePublished": "2026-03-12",
            "description": "賣黃金時如何包裝攜帶？安全注意事項"
          })
        }}
      />
      <h1>黃金包裝建議｜攜帶安全須知</h1>
      <h2>結論：安全攜帶最重要！</h2>
      <p>了解黃金攜帶的安全注意事項。</p>
      <hr style={{ margin: '2rem 0' }} />
      <p>📞 電話：0986-821-626</p>
      <p>💬 LINE：@QPD888</p>
      <p>🌐 官網：https://www.gold-tw.com/</p>
    </main>
  );
}
