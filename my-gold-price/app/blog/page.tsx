import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '黃金回收知識專欄｜台北巧品珠寶',
  description: '黃金回收知識、價格走勢、K金保養等專業文章。了解黃金回收最新資訊就在巧品珠寶部落格。',
  keywords: '黃金回收知識,黃金保養,K金回收,金價走勢',
};

// 部落格文章列表數據
const articles = [
  {
    slug: 'sell-gold-tips',
    title: '賣黃金前必看！5個你必須知道的事',
    summary: '了解當日金價、攜帶證件、現秤重確認等賣黃金前要注意的5件事。',
    date: '2026-03-11',
    category: '知識專欄'
  },
  {
    slug: 'factors-affecting-gold-price',
    title: '影響黃金價格的關鍵因素',
    summary: '國際政治局勢、美元匯率、通膨壓力等因素如何影響黃金價格？',
    date: '2026-03-10',
    category: '金價分析'
  },
  {
    slug: 'gold-price-forecast-2026',
    title: '2026年黃金價格走勢預測',
    summary: '專家分析2026年黃金價格趨勢，買賣時機建議。',
    date: '2026-03-09',
    category: '金價分析'
  },
  {
    slug: 'karat-gold-recovery',
    title: 'K金回收必看！18K、14K多少錢？',
    summary: 'K金回收行情解析，18K、14K、10K回收價格一次看懂。',
    date: '2026-03-08',
    category: 'K金回收'
  },
  {
    slug: 'karat-gold-price',
    title: 'K金價格怎麼算？一篇搞懂K金行情',
    summary: 'K金與純金的差別，K金價格計算方式與回收須知。',
    date: '2026-03-07',
    category: 'K金回收'
  },
  {
    slug: 'gold-vs-platinum',
    title: '黃金、白金（鉑金）哪個更值錢？',
    summary: '黃金與白金的差別在哪裡？哪種更值得投資？',
    date: '2026-03-06',
    category: '知識專欄'
  },
  {
    slug: 'taipei-gold-recovery',
    title: '台北黃金回收推薦｜哪裡回收最划算？',
    summary: '台北市各區黃金回收推薦，選擇誠信店家的注意事項。',
    date: '2026-03-05',
    category: '回收推薦'
  },
  {
    slug: 'gold-recycling-precautions',
    title: '黃金回收注意事項｜避免被坑指南',
    summary: '賣黃金時常見的話術與陷阱，教你如何保護自己的權益。',
    date: '2026-03-04',
    category: '知識專欄'
  }
];

export default function BlogPage() {
  return (
    <main style={{ padding: '2rem', maxWidth: '1000px', margin: '0 auto' }}>
      <h1>黃金回收知識專欄</h1>
      
      <p style={{ marginBottom: '2rem', color: '#666', fontSize: '1.1rem' }}>
        了解黃金回收最新資訊、K金行情、價格走勢等專業知識。
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem' }}>
        {articles.map((article) => (
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
