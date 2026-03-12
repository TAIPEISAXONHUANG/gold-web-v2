import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '黃金回收全攻略2026｜新手必看｜巧品珠寶',
  description: '2026年黃金回收全攻略！新手必看的完整教學，選擇誠信店家、避免被坑。',
  keywords: '黃金回收,新手教學,2026攻略',
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
            "headline": "黃金回收全攻略2026｜新手必看",
            "author": { "@type": "Organization", "name": "巧品珠寶" },
            "publisher": { "@type": "Organization", "name": "巧品珠寶" },
            "datePublished": "2026-03-12",
            "description": "2026年黃金回收全攻略！新手必看的完整教學"
          })
        }}
      />
      <h1>黃金回收全攻略2026｜新手必看</h1>
      <h2>結論：新手賣黃金就這麼簡單！</h2>
      <p>第一次賣黃金不知道要注意什麼？本篇完整教學讓你不上當。</p>
      <hr style={{ margin: '2rem 0' }} />
      <p>📞 電話：0986-821-626</p>
      <p>💬 LINE：@QPD888</p>
      <p>🌐 官網：https://www.gold-tw.com/</p>
    </main>
  );
}
