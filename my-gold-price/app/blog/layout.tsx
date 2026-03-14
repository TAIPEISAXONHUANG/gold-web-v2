import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '黃金回收知識專欄｜台北巧品珠寶',
  description: '黃金回收知識、價格走勢、K金保養等專業文章。',
  keywords: '黃金回收知識,黃金保養,K金回收,金價走勢',
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div style={{ minHeight: '100vh', background: '#f9fafb' }}>
      {/* 返回首頁導航 */}
      <nav style={{ 
        background: 'white', 
        boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
        padding: '1rem 2rem',
        position: 'sticky',
        top: 0,
        zIndex: 100
      }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Link 
            href="/" 
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '8px',
              color: '#b91c1c',
              textDecoration: 'none',
              fontWeight: 'bold',
              fontSize: '1rem'
            }}
          >
            ← 返回首頁
          </Link>
          <Link 
            href="/blog" 
            style={{ 
              color: '#666',
              textDecoration: 'none',
              fontSize: '0.9rem'
            }}
          >
            ← 返回部落格列表
          </Link>
        </div>
      </nav>
      {children}
    </div>
  );
}
