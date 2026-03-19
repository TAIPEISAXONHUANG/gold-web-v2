// page.tsx - Server Component with SSR data fetch
// 直接在伺服器端抓資料，避免 Client 端冷啟動 GAS API 造成 LCP 慢
import ClientPage from './ClientPage';

export const revalidate = 120;

async function getGoldData() {
  try {
    // 打本地 API Route（Vercel 快取），而非直接打 GAS
    const baseUrl = process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : 'http://localhost:3000';
    const res = await fetch(`${baseUrl}/api/gold-data`, {
      next: { revalidate: 120 },
    });
    if (!res.ok) return null;
    return res.json();
  } catch {
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