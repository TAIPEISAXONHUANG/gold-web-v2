// page.tsx - Server Component with SSR data fetch
// 直接在伺服器端抓 GAS 資料，Vercel ISR 快取 120 秒
// 避免 Client 端冷啟動 GAS API 造成 CLS / LCP 爆高

import ClientPage from './ClientPage';

export const revalidate = 120;

const GAS_API_URL = 'https://script.google.com/macros/s/AKfycbygJxxjK_2wd3hUB-M0XjU3SxusAWPpW99EPPqBIJjMrLWItT-4LHxSzYFatLQ-RvC9Qg/exec';

async function getGoldData() {
  try {
    const [initData, chartData, articleList] = await Promise.all([
      fetch(`${GAS_API_URL}?action=getInitData`, { next: { revalidate: 120 } }).then(r => r.json()),
      fetch(`${GAS_API_URL}?action=getChartData`, { next: { revalidate: 120 } }).then(r => r.json()),
      fetch(`${GAS_API_URL}?action=getArticles`, { next: { revalidate: 300 } }).then(r => r.json()),
    ]);

    return {
      rates: initData.rates?.rates || {},
      updateTime: initData.rates?.updatedAt || '',
      faq: initData.faq || [],
      dailyTable: chartData.dailyTable || [],
      chartData: chartData.chart || null,
      articles: articleList || [],
    };
  } catch (err) {
    console.error('GAS fetch error in page.tsx:', err);
    return null;
  }
}

export default async function Page() {
  const initialData = await getGoldData();

  return (
    <main>
      <ClientPage initialData={initialData} />
    </main>
  );
}
