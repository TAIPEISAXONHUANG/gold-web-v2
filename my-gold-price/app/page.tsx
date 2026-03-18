// page.tsx - Server Component
// 策略：server 直接送靜態 HTML shell（Hero + skeleton），
// 資料由 ClientPage 在 client side fetch，完全不阻塞 FCP/LCP
import ClientPage from './ClientPage';

export const revalidate = 60;

const GAS_API_URL = 'https://script.google.com/macros/s/AKfycbygJxxjK_2wd3hUB-M0XjU3SxusAWPpW99EPPqBIJjMrLWItT-4LHxSzYFatLQ-RvC9Qg/exec';

export default function Page() {
  return (
    <main>
      <ClientPage gasApiUrl={GAS_API_URL} />
    </main>
  );
}
