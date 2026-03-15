import { Metadata } from 'next';
import fs from 'fs';
import path from 'path';

export const metadata: Metadata = {
  title: '黃金回收知識專欄｜台北巧品珠寶',
  description: '黃金回收知識、價格走勢、K金保養等專業文章。了解黃金回收最新資訊就在巧品珠寶部落格。',
  keywords: '黃金回收知識,黃金保養,K金回收,金價走勢',
};

// 自動讀取所有文章（按日期排序，最新在前）
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
      
      return {
        slug: dir,
        title: titleMatch ? titleMatch[1] : dir,
        summary: descMatch ? descMatch[1] : '',
        date: new Date().toISOString().split('T')[0],
        category: '知識專欄'
      };
    }
    return null;
  }).filter(Boolean);
  
  // 按日期排序，最新的在前面
  return articles.sort((a: any, b: any) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export default function BlogPage() {
  const articles = getArticles();

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
        {articles.map((article: any) => (
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
