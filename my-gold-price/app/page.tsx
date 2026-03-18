import { Suspense } from 'react';
import ClientPage from './ClientPage';

export const revalidate = 60;

const GAS_API_URL = 'https://script.google.com/macros/s/AKfycbygJxxjK_2wd3hUB-M0XjU3SxusAWPpW99EPPqBIJjMrLWItT-4LHxSzYFatLQ-RvC9Qg/exec';

async function getGoldData() {
  try {
    const [initRes, chartRes, articleRes] = await Promise.all([
      fetch(`${GAS_API_URL}?action=getInitData`, { next: { revalidate: 60 } }),
      fetch(`${GAS_API_URL}?action=getChartData`, { next: { revalidate: 60 } }),
      fetch(`${GAS_API_URL}?action=getArticles`, { next: { revalidate: 60 } })
    ]);

    const initData = await initRes.json();
    const chartData = await chartRes.json();
    const articleList = await articleRes.json();

    return {
      rates: initData.rates?.rates || {},
      updateTime: initData.rates?.updatedAt || '',
      faq: initData.faq || [],
      dailyTable: chartData.dailyTable || [],
      chartData: chartData.chart || null,
      articles: articleList || []
    };
  } catch (error) {
    console.error("Fetch Error:", error);
    return null;
  }
}

// GoldContent: async server component，等 GAS API 完才 stream 進來
async function GoldContent() {
  const data = await getGoldData();
  if (!data) {
    return <div className="p-10 text-center text-gray-600">資料載入失敗，請重新整理頁面</div>;
  }
  return <ClientPage initialData={data} />;
}

// Skeleton shown while GAS APIs are loading
function PageSkeleton() {
  return (
    <div style={{minHeight: '100vh'}}>
      {/* Nav placeholder */}
      <div style={{height: '60px', background: 'white', borderBottom: '1px solid #e5e7eb'}}></div>
      {/* Marquee placeholder */}
      <div style={{height: '40px', background: '#7f1d1d'}}></div>
      {/* Hero */}
      <div style={{position: 'relative', height: '100svh', minHeight: '600px', overflow: 'hidden'}}>
        <img
          src="/hero.webp"
          alt="巧品珠寶店面 - 台北大安區黃金回收專門店"
          loading="eager"
          fetchPriority="high"
          width="1200"
          height="630"
          style={{position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover'}}
        />
        <div style={{position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.5)'}}></div>
        <div style={{position: 'relative', zIndex: 20, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', color: 'white', textAlign: 'center', padding: '0 1rem'}}>
          <div style={{display: 'inline-block', padding: '4px 16px', border: '2px solid #facc15', background: 'rgba(120,53,15,0.8)', borderRadius: '9999px', color: '#fde68a', fontSize: '14px', fontWeight: 'bold', marginBottom: '24px'}}>
            經營十餘年 · 誠信老字號
          </div>
          <h1 style={{fontSize: 'clamp(2rem, 6vw, 3.75rem)', fontWeight: '900', marginBottom: '24px', lineHeight: '1.2'}}>
            黃金回收 <span style={{color: '#fbbf24'}}>價值最大化</span>
          </h1>
          <div style={{display: 'flex', flexWrap: 'wrap', gap: '16px', justifyContent: 'center'}}>
            <a href="#rates-desktop" style={{background: '#f59e0b', color: '#0f172a', fontWeight: 'bold', padding: '12px 40px', borderRadius: '9999px', textDecoration: 'none', border: '2px solid #d97706'}}>查看今日金價</a>
            <a href="#calculator-section-desktop" style={{background: '#16a34a', color: 'white', fontWeight: 'bold', padding: '12px 40px', borderRadius: '9999px', textDecoration: 'none', border: '2px solid #15803d'}}>舊金回收試算</a>
            <a href="/faq" style={{background: '#2563eb', color: 'white', fontWeight: 'bold', padding: '12px 40px', borderRadius: '9999px', textDecoration: 'none', border: '2px solid #1d4ed8'}}>常見問題</a>
            <a href="/district/da-an" style={{background: '#9333ea', color: 'white', fontWeight: 'bold', padding: '12px 40px', borderRadius: '9999px', textDecoration: 'none', border: '2px solid #7e22ce'}}>黃金回收</a>
          </div>
        </div>
      </div>
      {/* Content skeleton */}
      <div className="max-w-7xl mx-auto px-4 py-12 animate-pulse">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8 space-y-6">
            <div className="bg-white rounded-2xl shadow p-6 h-72">
              <div className="h-5 bg-gray-200 rounded w-28 mb-4"></div>
              <div className="h-52 bg-gray-100 rounded"></div>
            </div>
            <div className="bg-white rounded-2xl shadow p-6 h-56">
              <div className="h-5 bg-gray-200 rounded w-20 mb-4"></div>
              {[...Array(5)].map((_, i) => <div key={i} className="h-8 bg-gray-100 rounded mb-2"></div>)}
            </div>
          </div>
          <div className="lg:col-span-4 hidden lg:block">
            <div className="bg-white rounded-2xl shadow p-6 h-56">
              <div className="h-5 bg-gray-200 rounded w-20 mb-4"></div>
              {[...Array(4)].map((_, i) => <div key={i} className="h-10 bg-gray-100 rounded mb-2"></div>)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <Suspense fallback={<PageSkeleton />}>
      <GoldContent />
    </Suspense>
  );
}
