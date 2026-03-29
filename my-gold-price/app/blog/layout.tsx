import { Metadata } from 'next';
import Link from 'next/link';
import { headers } from 'next/headers';

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
      
      {/* 文章內容區域 */}
      <div style={{ display: 'flex', maxWidth: '1200px', margin: '0 auto', padding: '2rem', gap: '2rem' }}>
        {/* 主要內容 */}
        <article style={{ flex: '1', background: 'white', borderRadius: '12px', padding: '2rem', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
          {children}
        </article>
        
        {/* 文章目錄側邊欄 - 固定在右側 */}
        <aside style={{ 
          width: '250px', 
          position: 'sticky', 
          top: '100px', 
          height: 'fit-content',
          display: 'none'  // 先隱藏，等文章頁面加入 TOC 後再顯示
        }}>
          <div style={{ 
            background: 'white', 
            borderRadius: '12px', 
            padding: '1.5rem',
            boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
          }}>
            <h3 style={{ margin: '0 0 1rem 0', fontSize: '1rem', color: '#333' }}>📑 文章目錄</h3>
            <ul style={{ margin: 0, paddingLeft: '1rem', fontSize: '0.9rem', color: '#666', lineHeight: '1.8' }}>
              <li><a href="#tips" style={{ color: '#b91c1c', textDecoration: 'none' }}>技巧說明</a></li>
              <li><a href="#process" style={{ color: '#b91c1c', textDecoration: 'none' }}>流程步驟</a></li>
              <li><a href="#price" style={{ color: '#b91c1c', textDecoration: 'none' }}>價格說明</a></li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}
