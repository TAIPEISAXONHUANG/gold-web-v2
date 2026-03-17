import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '找不到頁面 | 巧品珠寶',
  description: '您要找的頁面不存在，請回到首頁瀏覽最新金價或聯繫我們。',
};

export default function NotFound() {
  return (
    <main style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      backgroundColor: '#f3f4f6',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      <div style={{ textAlign: 'center', padding: '2rem' }}>
        <div style={{ fontSize: '6rem', marginBottom: '1rem' }}>🪙</div>
        <h1 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#7f1d1d', marginBottom: '0.5rem' }}>
          找不到頁面
        </h1>
        <p style={{ color: '#6b7280', marginBottom: '2rem', maxWidth: '400px' }}>
          您要找的頁面可能已移動或不存在。<br />
          歡迎回到首頁查看今日最新金價！
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="/" style={{
            display: 'inline-block',
            padding: '0.75rem 2rem',
            backgroundColor: '#991b1b',
            color: 'white',
            borderRadius: '9999px',
            textDecoration: 'none',
            fontWeight: 'bold',
            fontSize: '0.95rem'
          }}>
            回首頁看金價
          </a>
          <a href="/blog" style={{
            display: 'inline-block',
            padding: '0.75rem 2rem',
            backgroundColor: 'white',
            color: '#991b1b',
            borderRadius: '9999px',
            textDecoration: 'none',
            fontWeight: 'bold',
            fontSize: '0.95rem',
            border: '2px solid #991b1b'
          }}>
            知識專欄
          </a>
        </div>
        <p style={{ marginTop: '2rem', color: '#9ca3af', fontSize: '0.85rem' }}>
          有問題？歡迎來電 <a href="tel:0986821626" style={{ color: '#991b1b', fontWeight: 'bold' }}>0986-821-626</a>
        </p>
      </div>
    </main>
  );
}
