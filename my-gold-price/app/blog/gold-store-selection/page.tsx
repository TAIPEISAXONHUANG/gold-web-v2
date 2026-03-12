import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '黃金回收店選擇指南｜誠信店家評比｜巧品珠寶',
  description: '如何選擇黃金回收店？評比誠信店家的重要指標，讓你不被坑。',
  keywords: '黃金回收店,店家選擇,回收指南',
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
            "headline": "黃金回收店選擇指南｜誠信店家評比",
            "author": { "@type": "Organization", "name": "巧品珠寶" },
            "publisher": { "@type": "Organization", "name": "巧品珠寶" },
            "datePublished": "2026-03-12",
            "description": "如何選擇黃金回收店？評比誠信店家的重要指標"
          })
        }}
      />
      <h1>黃金回收店選擇指南｜誠信店家評比</h1>
      <h2>結論：選擇誠信店家最重要！</h2>
      <p>選擇黃金回收店時，要注意報價透明度、店家評價等因素。</p>
      <hr style={{ margin: '2rem 0' }} />
      <p>📞 電話：0986-821-626</p>
      <p>💬 LINE：@QPD888</p>
      <p>🌐 官網：https://www.gold-tw.com/</p>
    </main>
  );
}
