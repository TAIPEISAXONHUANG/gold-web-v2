import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '黃金回收評價網站｜查看店家評價｜巧品珠寶',
  description: '怎麼查看黃金回收店家的評價？推薦的評價網站有哪些？',
  keywords: '黃金評價,店家評比,回收評價網',
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
            "headline": "黃金回收評價網站｜查看店家評價",
            "author": { "@type": "Organization", "name": "巧品珠寶" },
            "publisher": { "@type": "Organization", "name": "巧品珠寶" },
            "datePublished": "2026-03-12",
            "description": "怎麼查看黃金回收店家的評價？推薦的評價網站有哪些？"
          })
        }}
      />
      <h1>黃金回收評價網站｜查看店家評價</h1>
      <h2>結論：選擇高評價店家！</h2>
      <p>了解如何查詢店家評價，選擇誠信店家。</p>
      <hr style={{ margin: '2rem 0' }} />
      <p>📞 電話：0986-821-626</p>
      <p>💬 LINE：@QPD888</p>
      <p>🌐 官網：https://www.gold-tw.com/</p>
    </main>
  );
}
