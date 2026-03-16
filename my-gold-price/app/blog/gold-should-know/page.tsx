import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '黃金回收必知｜新手必看｜巧品珠寶',
  description: '黃金回收新手必看！第一次賣黃金要注意什麼。',
  keywords: '黃金回收必知,第一次賣黃金,黃金新手',
  alternates: {
    canonical: 'https://www.gold-tw.com/blog/gold-should-know',
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
      <h1>黃金回收必知｜新手必看</h1>
      <h2>結論：第一次賣黃金要注意這幾點！</h2>
      <h2>新手教學</h2>
      <ul>
        <li>📍 查當日金價</li>
        <li>📍 攜帶證件</li>
        <li>📍 現場秤重</li>
        <li>📍 選擇誠信店家</li>
      </ul>
      <hr style={{ margin: '2rem 0' }} />
      <p>📞 電話：0986-821-626</p>
      <p>💬 LINE：@QPD888</p>
      <p>🌐 官網：https://www.gold-tw.com/</p>
    </main>
  );
}
