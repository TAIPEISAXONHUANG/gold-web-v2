import { Suspense } from 'react';
import ClientPage from './ClientPage';

// 設定 60 秒背景更新 (ISR)
export const revalidate = 60;

// 真實 GAS 網址
const GAS_API_URL = 'https://script.google.com/macros/s/AKfycbygJxxjK_2wd3hUB-M0XjU3SxusAWPpW99EPPqBIJjMrLWItT-4LHxSzYFatLQ-RvC9Qg/exec';

async function getGoldData() {
  try {
    // 伺服器端抓取資料
    const [initRes, chartRes] = await Promise.all([
      fetch(`${GAS_API_URL}?action=getInitData`, { next: { revalidate: 60 } }),
      fetch(`${GAS_API_URL}?action=getChartData`, { next: { revalidate: 60 } })
    ]);

    const initData = await initRes.json();
    const chartData = await chartRes.json();

    return {
      rates: initData.rates?.rates || {},
      updateTime: initData.rates?.updatedAt || '',
      dailyTable: chartData.dailyTable || [],
      chartData: chartData.chart || null,
    };
  } catch (error) {
    console.error("Fetch Error:", error);
    return null;
  }
}

export default async function Page() {
  const data = await getGoldData();
  
  // 如果抓失敗，顯示備用內容
  if (!data) return <div style={{padding: 20}}>資料更新中...</div>;

  return (
     <main>
       {/* 載入 Tailwind CDN 以確保樣式正常 */}
       <script src="https://cdn.tailwindcss.com"></script>
       <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" rel="stylesheet" />
       
       <ClientPage initialData={data} />
     </main>
  );
}