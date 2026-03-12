import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gold Recycling Taipei Professional Service',
  description: 'Professional gold recycling service',
  keywords: 'gold recycling,taipei,K gold',
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
            "headline": "Gold Recycling Taipei Professional Service",
            "author": { "@type": "Organization", "name": "宸у搧鐝犲" },
            "publisher": { "@type": "Organization", "name": "宸у搧鐝犲" },
            "datePublished": "2026-03-13",
            "description": "Professional gold recycling service"
          })
        }}
      />
      <h1>Gold Recycling Taipei Professional Service</h1>
      <p>Welcome to QIAOPIN Gold Recycling Service. We provide free quote, transparent price, same day payment.</p>
      <h2>Why Choose Us?</h2>
      <ul>
        <li>Free online quote</li>
        <li>Transparent pricing</li>
        <li>On-site weight confirmation</li>
        <li>Immediate cash payment</li>
      </ul>
      <h2>Contact Us</h2>
      <p>Phone: 0986-821-626</p>
      <p>LINE: @QPD888</p>
      <p>Website: https://www.gold-tw.com/</p>
    </main>
  );
}

