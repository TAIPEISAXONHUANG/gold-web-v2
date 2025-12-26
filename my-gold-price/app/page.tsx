import { Suspense } from 'react';
import ClientPage from './ClientPage';

export const revalidate = 60; // 每 60 秒更新一次

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

export default async function Page() {
  const data = await getGoldData();
  
  if (!data) return <div className="p-10 text-center">資料載入中，請稍候...</div>;

  return (
     <main>
       {/* 載入 Tailwind 和 FontAwesome */}
       <script src="https://cdn.tailwindcss.com"></script>
       <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" rel="stylesheet" />
       
       <ClientPage initialData={data} />
     </main>
  );
}
