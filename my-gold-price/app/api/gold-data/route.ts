import { NextResponse } from 'next/server';

const GAS_API_URL = 'https://script.google.com/macros/s/AKfycbygJxxjK_2wd3hUB-M0XjU3SxusAWPpW99EPPqBIJjMrLWItT-4LHxSzYFatLQ-RvC9Qg/exec';

export const revalidate = 60; // Vercel CDN: 每 60 秒重新執行一次 route

export async function GET() {
  try {
    // cache: 'no-store' 確保每次 route 執行時都從 GAS 抓最新資料
    // 不使用 Next.js Data Cache，避免雙層快取卡住舊資料
    const [initData, chartData, articleList] = await Promise.all([
      fetch(`${GAS_API_URL}?action=getInitData`, { cache: 'no-store' }).then(r => r.json()),
      fetch(`${GAS_API_URL}?action=getChartData`, { cache: 'no-store' }).then(r => r.json()),
      fetch(`${GAS_API_URL}?action=getArticles`, { cache: 'no-store' }).then(r => r.json()),
    ]);

    const payload = {
      rates: initData.rates?.rates || {},
      updateTime: initData.rates?.updatedAt || '',
      faq: initData.faq || [],
      dailyTable: chartData.dailyTable || [],
      chartData: chartData.chart || null,
      articles: articleList || [],
    };

    return NextResponse.json(payload, {
      headers: {
        'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=30',
      },
    });
  } catch (err) {
    console.error('GAS API error:', err);
    return NextResponse.json({ error: 'Failed to fetch' }, { status: 500 });
  }
}