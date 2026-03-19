import { NextResponse } from 'next/server';

const GAS_API_URL = 'https://script.google.com/macros/s/AKfycbygJxxjK_2wd3hUB-M0XjU3SxusAWPpW99EPPqBIJjMrLWItT-4LHxSzYFatLQ-RvC9Qg/exec';

export const revalidate = 120; // ISR: 每 2 分鐘重新抓 GAS

export async function GET() {
  try {
    const [initData, chartData, articleList] = await Promise.all([
      fetch(`${GAS_API_URL}?action=getInitData`, { next: { revalidate: 120 } }).then(r => r.json()),
      fetch(`${GAS_API_URL}?action=getChartData`, { next: { revalidate: 120 } }).then(r => r.json()),
      fetch(`${GAS_API_URL}?action=getArticles`, { next: { revalidate: 300 } }).then(r => r.json()),
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
        'Cache-Control': 'public, s-maxage=120, stale-while-revalidate=60',
      },
    });
  } catch (err) {
    console.error('GAS API error:', err);
    return NextResponse.json({ error: 'Failed to fetch' }, { status: 500 });
  }
}