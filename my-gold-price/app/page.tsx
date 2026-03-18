// page.tsx - Server Component
// 策略：server 直接送靜態 HTML shell（Hero + skeleton），
// 資料由 ClientPage 在 client side fetch，完全不阻塞 FCP/LCP
import ClientPage from './ClientPage';

export const revalidate = 60;

const GAS_API_URL = 'https://script.google.com/macros/s/AKfycbygJxxjK_2wd3hUB-M0XjU3SxusAWPpW99EPPqBIJjMrLWItT-4LHxSzYFatLQ-RvC9Qg/exec';

export default function Page() {
  return (
    <main>
      {/* Hero 在 server component 直出 HTML，preload 立刻生效，LCP 不等 React hydration */}
      <header className="hero-section" style={{position:'relative',height:'100svh',minHeight:'600px',overflow:'hidden',display:'flex',alignItems:'center',justifyContent:'center',textAlign:'center',color:'white'}}>
        <img
          src="/hero.webp"
          className="hero-img"
          alt="巧品珠寶店面 - 台北大安區黃金回收專門店"
          loading="eager"
          fetchPriority="high"
          width="1200"
          height="630"
          style={{position:'absolute',inset:0,width:'100%',height:'100%',objectFit:'cover',zIndex:0}}
        />
        <div style={{position:'absolute',inset:0,background:'rgba(0,0,0,0.45)',zIndex:1}} />
        <div className="relative z-20 text-center text-white px-4 max-w-4xl hero-text-shadow" style={{position:'relative',zIndex:2}}>
          <div className="inline-block px-4 py-1 border-2 border-yellow-400 bg-yellow-900/80 rounded-full text-yellow-300 text-sm font-bold mb-6 backdrop-blur-md shadow-lg">
            經營十餘年 · 誠信老字號
          </div>
          <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
            黃金回收 <span className="text-amber-400">價值最大化</span>
          </h1>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#rates-desktop" className="bg-amber-500 text-slate-900 font-bold py-3 px-10 rounded-full shadow-lg hover:bg-amber-400 transition border-2 border-amber-600">查看今日金價</a>
            <a href="#calculator-section-desktop" className="bg-green-600 text-white font-bold py-3 px-10 rounded-full shadow-lg hover:bg-green-500 transition border-2 border-green-700">舊金回收試算</a>
            <a href="/faq" className="bg-blue-600 text-white font-bold py-3 px-10 rounded-full shadow-lg hover:bg-blue-500 transition border-2 border-blue-700">常見問題</a>
            <a href="/district/da-an" className="bg-purple-600 text-white font-bold py-3 px-10 rounded-full shadow-lg hover:bg-purple-500 transition border-2 border-purple-700">黃金回收</a>
          </div>
        </div>
      </header>
      <ClientPage gasApiUrl={GAS_API_URL} />
    </main>
  );
}
