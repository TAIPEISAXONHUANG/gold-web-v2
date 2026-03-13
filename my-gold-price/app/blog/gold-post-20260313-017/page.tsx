import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gold Guide 17 - Gold Recycling Expert',
  description: 'Professional gold recycling service guide',
  keywords: 'gold,recycling,jewelry',
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
            "author": { "@type": "Organization", "name": "宸у搧鐝犲" },
            "publisher": { "@type": "Organization", "name": "宸у搧鐝犲" },
            "datePublished": "2026-03-13",
            "description": "Gold Guide 17"
          })
        }}
      />
      <h1>Gold Guide 17</h1>
      <p>Welcome to learn more about gold recycling services.</p>
      <hr style={{ margin: '2rem 0' }} />
      <h2>Contact Us</h2>
      <p>TEL: 0986-821-626</p>
      <p>LINE: @QPD888</p>
      <p>Website: https://www.gold-tw.com/</p>
    </main>
  );
}
