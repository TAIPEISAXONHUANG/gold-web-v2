import { Metadata } from 'next';
import fs from 'fs';
import path from 'path';

export const metadata: Metadata = {
  title: '黃金回收攻略與金價走勢｜台北巧品珠寶專欄',
  description: '想賣黃金怕被坑？台北巧品珠寶整理回收流程、今日金價、K金鑑定技巧，幫你每錢多賺500元。',
  keywords: '黃金回收知識,黃金保養,K金回收,金價走勢',
  alternates: {
    canonical: 'https://www.gold-tw.com/blog',
  },
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
      // 從 JSON-LD 抓 datePublished
      const dateMatch = content.match(/"datePublished"\s*:\s*"(\d{4}-\d{2}-\d{2})"/);

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

      {/* ── Section 1: 文章分類導覽 ── */}
      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{ fontSize: '1.5rem', borderBottom: '2px solid #f59e0b', paddingBottom: '0.5rem', marginBottom: '1.25rem' }}>
          黃金部落格文章分類
        </h2>
        <p style={{ color: '#4b5563', marginBottom: '1.25rem' }}>
          依照主題快速找到你需要的黃金回收資訊，從金價查詢到回收流程一應俱全。
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
          {[
            { label: '今日金價行情', href: '/blog/gold-price-2026' },
            { label: 'K金回收指南', href: '/blog/k-gold-recovery-guide-2026' },
            { label: '黃金回收流程', href: '/blog/gold-recycling-process' },
            { label: '台北黃金回收', href: '/blog/taipei-gold-recovery' },
            { label: '黃金 vs 鉑金', href: '/blog/gold-vs-platinum' },
            { label: '鑽石回收報價', href: '/blog/diamond-recovery-price' },
            { label: '婚戒金飾回收', href: '/blog/wedding-gold-recovery' },
            { label: '賣黃金前須知', href: '/blog/before-selling-gold' },
          ].map(item => (
            <a
              key={item.href}
              href={item.href}
              style={{
                background: '#fef3c7',
                color: '#92400e',
                padding: '8px 18px',
                borderRadius: '20px',
                textDecoration: 'none',
                fontWeight: 'bold',
                fontSize: '0.9rem',
                border: '1px solid #fcd34d',
                transition: 'background 0.2s',
              }}
            >
              {item.label}
            </a>
          ))}
        </div>
      </section>

      {/* ── Section 2: 最新黃金回收指南 ── */}
      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{ fontSize: '1.5rem', borderBottom: '2px solid #f59e0b', paddingBottom: '0.5rem', marginBottom: '1.25rem' }}>
          最新黃金回收指南
        </h2>
        <p style={{ color: '#4b5563', marginBottom: '1.25rem' }}>
          2026 年黃金回收市場持續升溫，以下為近期最受讀者歡迎的回收攻略，幫助您掌握最高報價。
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1rem' }}>
          {[
            { title: '2026 黃金回收價格完整指南', href: '/blog/gold-recycling-price-guide-2026', desc: '掌握今年黃金回收最新行情，避免被低價收購。' },
            { title: 'K金回收計算教學', href: '/blog/k-gold-recovery-calculation', desc: '18K、14K、9K 含金量計算方式一次看懂。' },
            { title: '賣黃金前必看檢查清單', href: '/blog/sell-gold-checklist-2026', desc: '賣金前這幾件事一定要先確認，保障你的權益。' },
            { title: '黃金回收常見陷阱揭密', href: '/blog/gold-recovery-traps', desc: '業者常見的不公平秤重手法與話術，教你如何識破。' },
          ].map(item => (
            <a
              key={item.href}
              href={item.href}
              style={{
                display: 'block',
                textDecoration: 'none',
                color: 'inherit',
                border: '1px solid #e5e7eb',
                borderRadius: '10px',
                padding: '1.25rem',
                transition: 'box-shadow 0.2s',
              }}
            >
              <p style={{ fontWeight: 'bold', color: '#1f2937', marginBottom: '0.5rem', fontSize: '1rem' }}>{item.title}</p>
              <p style={{ color: '#6b7280', fontSize: '0.875rem', margin: 0 }}>{item.desc}</p>
            </a>
          ))}
        </div>
      </section>

      {/* ── Section 3: 所有文章列表 ── */}
      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{ fontSize: '1.5rem', borderBottom: '2px solid #f59e0b', paddingBottom: '0.5rem', marginBottom: '1.25rem' }}>
          全部文章列表
        </h2>
        <p style={{ color: '#4b5563', marginBottom: '1.5rem' }}>
          共 {articles.length} 篇專業文章，從入門到進階，帶你全面了解黃金回收與金飾鑑定。
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
                <h3 style={{ fontSize: '1.1rem', marginBottom: '0.75rem', color: '#1f2937', margin: '0 0 0.75rem 0' }}>
                  {article.title}
                </h3>
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
      </section>

      {/* ── Section 4: 黃金回收常見問題 ── */}
      <section style={{ marginBottom: '3rem', background: '#f9fafb', borderRadius: '12px', padding: '2rem' }}>
        <h2 style={{ fontSize: '1.5rem', marginTop: 0, marginBottom: '1.25rem', color: '#1f2937' }}>
          黃金回收常見問題
        </h2>
        <p style={{ color: '#4b5563', marginBottom: '1.5rem' }}>
          以下是巧品珠寶最常被客戶詢問的黃金回收問題，歡迎參考完整解答：
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          {[
            {
              q: '沒有收據可以賣黃金嗎？',
              a: '可以。依法賣金需攜帶本人身份證（或護照）辦理實名登記，收據非必要文件。巧品珠寶依法辦理，讓您安心交易。',
            },
            {
              q: '黃金回收當場付現嗎？',
              a: '是的，巧品珠寶完成鑑定後當場結清，現金或轉帳皆可，不拖延不扣押。',
            },
            {
              q: 'K金和純金回收價差多少？',
              a: '18K 含金量 75%、14K 約 58.5%，回收價依當日純金克價乘以含金比例計算。詳細試算可參考我們的 K金回收計算教學。',
            },
            {
              q: '壞掉的黃金飾品還能賣嗎？',
              a: '可以。斷裂、變形、褪色的黃金照樣回收，重量不變含金量不變，報價與完整品相同。',
            },
          ].map((item, i) => (
            <div key={i} style={{ borderLeft: '4px solid #f59e0b', paddingLeft: '1rem' }}>
              <p style={{ fontWeight: 'bold', color: '#1f2937', margin: '0 0 0.4rem 0' }}>Q：{item.q}</p>
              <p style={{ color: '#4b5563', margin: 0, lineHeight: '1.7' }}>A：{item.a}</p>
            </div>
          ))}
        </div>
        <p style={{ marginTop: '1.5rem', color: '#6b7280', fontSize: '0.9rem' }}>
          更多問題請參考：
          <a href="/blog/gold-recovery-faq-2026" style={{ color: '#b91c1c', marginLeft: '6px' }}>黃金回收完整 FAQ 2026</a>、
          <a href="/blog/gold-recycling-faq" style={{ color: '#b91c1c', marginLeft: '6px' }}>常見疑問總整理</a>
        </p>
      </section>

      {/* ── Section 5: 巧品珠寶專業建議 ── */}
      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{ fontSize: '1.5rem', borderBottom: '2px solid #f59e0b', paddingBottom: '0.5rem', marginBottom: '1.25rem' }}>
          巧品珠寶專業建議
        </h2>
        <p style={{ color: '#4b5563', marginBottom: '1.5rem' }}>
          台北大安區巧品珠寶擁有超過 20 年黃金鑑定經驗，以下是我們給想賣金客戶的幾點建議：
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1rem' }}>
          {[
            {
              icon: '⚖️',
              title: '當場確認重量',
              desc: '秤重時請全程在旁觀看，確認磅秤歸零後才放上金飾，避免暗中加重。',
            },
            {
              icon: '📋',
              title: '多家比價再決定',
              desc: '建議至少詢問 2–3 家回收商，差距若超過每錢 200 元，應謹慎評估。',
            },
            {
              icon: '🪙',
              title: '了解今日金價',
              desc: '賣金前先查台灣銀行或我們的即時金價頁面，掌握市場行情才不吃虧。',
            },
            {
              icon: '🔍',
              title: '鑑定純度要透明',
              desc: '正規業者應使用 X 射線螢光分析儀（XRF）當場顯示含金成分，數字清楚可驗證。',
            },
          ].map((item, i) => (
            <div key={i} style={{ background: '#fffbeb', border: '1px solid #fcd34d', borderRadius: '10px', padding: '1.25rem' }}>
              <div style={{ fontSize: '1.75rem', marginBottom: '0.5rem' }}>{item.icon}</div>
              <p style={{ fontWeight: 'bold', color: '#1f2937', margin: '0 0 0.4rem 0' }}>{item.title}</p>
              <p style={{ color: '#4b5563', fontSize: '0.875rem', margin: 0, lineHeight: '1.6' }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Section 6: 黃金知識速查 ── */}
      <section style={{ marginBottom: '3rem', background: '#f0fdf4', borderRadius: '12px', padding: '2rem' }}>
        <h2 style={{ fontSize: '1.5rem', marginTop: 0, marginBottom: '1.25rem', color: '#1f2937' }}>
          黃金知識速查
        </h2>
        <p style={{ color: '#4b5563', marginBottom: '1.5rem' }}>
          快速瀏覽黃金回收最常用的基礎知識，讓你在 5 分鐘內掌握核心概念。
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '1rem' }}>
          {[
            { term: '一錢 = 3.75 克', note: '台灣黃金計算單位，賣金前務必確認單位換算。' },
            { term: '9999 純金', note: '含金量 99.99%，俗稱「四個九」，為市場上最純的金條規格。' },
            { term: '18K 金', note: '含金量 75%，兼具硬度與色澤，是戒指、項鍊最常見材質。' },
            { term: '916 金', note: '含金量 91.6%，即 22K，多見於傳統金飾與金幣。' },
            { term: 'XRF 鑑定', note: 'X 射線螢光分析，非破壞性快速檢驗含金量的專業儀器。' },
            { term: '回收價 vs 買入價', note: '回收（賣出）價通常低於買入價，兩者差距即為業者利潤。' },
          ].map((item, i) => (
            <div key={i} style={{ background: '#fff', border: '1px solid #86efac', borderRadius: '10px', padding: '1rem' }}>
              <p style={{ fontWeight: 'bold', color: '#166534', margin: '0 0 0.4rem 0', fontSize: '0.95rem' }}>{item.term}</p>
              <p style={{ color: '#4b5563', fontSize: '0.85rem', margin: 0, lineHeight: '1.6' }}>{item.note}</p>
            </div>
          ))}
        </div>
        <p style={{ marginTop: '1.5rem', color: '#6b7280', fontSize: '0.9rem' }}>
          深入了解：
          <a href="/blog/gold-purity" style={{ color: '#166534', marginLeft: '6px' }}>黃金純度完整說明</a>、
          <a href="/blog/gold-weight" style={{ color: '#166534', marginLeft: '6px' }}>黃金重量單位換算</a>、
          <a href="/blog/karat-gold-guide" style={{ color: '#166534', marginLeft: '6px' }}>K金種類完整指南</a>
        </p>
      </section>

      {/* ── Section 7: CTA ── */}
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
