import { Metadata } from 'next';
import fs from 'fs';
import path from 'path';

export const metadata: Metadata = {
  title: '黃金回收知識專欄｜台北巧品珠寶',
  description: '黃金回收知識、價格走勢、K金保養等專業文章。了解黃金回收最新資訊就在巧品珠寶部落格。',
  keywords: '黃金回收知識,黃金保養,K金回收,金價走勢',
};

// 自動讀取所有文章
function getArticles() {
  const blogDir = path.join(process.cwd(), 'app', 'blog');
  const dirs = fs.readdirSync(blogDir).filter(f => {
    const stat = fs.statSync(path.join(blogDir, f));
    return stat.isDirectory();
  });
  
  const articles = dirs.map(dir => {
    const pagePath = path.join(blogDir, dir, 'page.tsx');
    if (fs.existsSync(pagePath)) {
      const content = fs.readFileSync(pagePath, 'utf-8');
      
      // 從 metadata 抓標題
      const titleMatch = content.match(/title:\s*['"]([^'"]+)['"]/);
      const descMatch = content.match(/description:\s*['"]([^'"]+)['"]/);
      // 嘗試抓 datePublished
      const dateMatch = content.match(/datePublished["\s:]+["']?(\d{4}-\d{2}-\d{2})/);
      
      return {
        slug: dir,
        title: titleMatch ? titleMatch[1] : dir,
        summary: descMatch ? descMatch[1] : '',
        date: dateMatch ? dateMatch[1] : new Date().toISOString().split('T')[0],
        category: '知識專欄'
      };
    }
    return null;
  }).filter(Boolean);
  
  // 按日期排序，最新的在前面
  return articles.sort((a: any, b: any) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export default function BlogPage({
  searchParams,
}: {
  searchParams: { page?: string }
}) {
  const articles = getArticles();
  
  // 分頁設定
  const itemsPerPage = 12;
  const totalPages = Math.ceil(articles.length / itemsPerPage);
  const currentPage = parseInt(searchParams.page || '1', 10);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedArticles = articles.slice(startIndex, startIndex + itemsPerPage);

  return (
    <main style={{ padding: '2rem', maxWidth: '1000px', margin: '0 auto' }}>
      <a href="/" style={{ 
        display: 'inline-flex',
        alignItems: 'center',
        gap: '8px',
        color: '#666',
        textDecoration: 'none',
        marginBottom: '1rem',
        fontWeight: 'bold'
      }}>
        ← 返回首頁
      </a>
      
      <h1>黃金回收知識專欄</h1>
      <p style={{ marginBottom: '2rem', color: '#666', fontSize: '1.1rem' }}>
        了解黃金回收最新資訊、K金行情、價格走勢等專業知識。（共 {articles.length} 篇文章）
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem' }}>
        {paginatedArticles.map((article: any) => (
          <a 
            key={article.slug}
            href={`/blog/${article.slug}`}
            style={{ 
              display: 'block',
              textDecoration: 'none',
              color: 'inherit',
              border: '1px solid #e5e7eb',
              borderRadius: '12px',
              overflow: 'hidden',
              transition: 'all 0.3s ease'
            }}
          >
            <div style={{ padding: '1.5rem' }}>
              <span style={{ 
                display: 'inline-block',
                background: '#fef2f2',
                color: '#b91c1c',
                padding: '4px 12px',
                borderRadius: '20px',
                fontSize: '0.75rem',
                fontWeight: 'bold',
                marginBottom: '0.75rem'
              }}>
                {article.category}
              </span>
              <h2 style={{ fontSize: '1.25rem', marginBottom: '0.75rem', color: '#1f2937' }}>
                {article.title}
              </h2>
              <p style={{ color: '#6b7280', fontSize: '0.9rem', marginBottom: '1rem', lineHeight: '1.6' }}>
                {article.summary}
              </p>
              <span style={{ color: '#9ca3af', fontSize: '0.85rem' }}>
                📅 {article.date}
              </span>
            </div>
          </a>
        ))}
      </div>

      {/* 分頁導航 */}
      {totalPages > 1 && (
        <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
          {/* 上一頁 */}
          {currentPage > 1 && (
            <a 
              href={`/blog?page=${currentPage - 1}`}
              style={{ 
                padding: '8px 16px', 
                border: '1px solid #e5e7eb', 
                borderRadius: '8px',
                textDecoration: 'none',
                color: '#666'
              }}
            >
              ← 上一頁
            </a>
          )}
          
          {/* 頁碼 */}
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <a
              key={page}
              href={`/blog?page=${page}`}
              style={{
                padding: '8px 14px',
                border: page === currentPage ? '2px solid #b91c1c' : '1px solid #e5e7eb',
                borderRadius: '8px',
                textDecoration: 'none',
                color: page === currentPage ? '#b91c1c' : '#666',
                fontWeight: page === currentPage ? 'bold' : 'normal',
                background: page === currentPage ? '#fef2f2' : 'white'
              }}
            >
              {page}
            </a>
          ))}
          
          {/* 下一頁 */}
          {currentPage < totalPages && (
            <a 
              href={`/blog?page=${currentPage + 1}`}
              style={{ 
                padding: '8px 16px', 
                border: '1px solid #e5e7eb', 
                borderRadius: '8px',
                textDecoration: 'none',
                color: '#666'
              }}
            >
              下一頁 →
            </a>
          )}
        </div>
      )}

      <div style={{ marginTop: '3rem', padding: '2rem', background: '#fffbeb', borderRadius: '12px', textAlign: 'center' }}>
        <h2 style={{ marginTop: 0 }}>手上有黃金想變現嗎？</h2>
        <p>立即聯繫巧品珠寶，獲得最新回收報價！</p>
        <p style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#b91c1c' }}>
          📞 0986-821-626
        </p>
        <a 
          href="/" 
          style={{ 
            display: 'inline-block',
            marginTop: '1rem',
            background: '#f59e0b',
            color: '#000',
            padding: '12px 32px',
            borderRadius: '30px',
            textDecoration: 'none',
            fontWeight: 'bold'
          }}
        >
          → 前往報價頁面
        </a>
      </div>
    </main>
  );
}
