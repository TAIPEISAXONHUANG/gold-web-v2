'use client';

import { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Filler, Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Filler, Legend);

export default function ClientPage({ initialData }: { initialData: any }) {
  const [unit, setUnit] = useState<'qian' | 'gram'>('qian');
  const [showHistory, setShowHistory] = useState(false);
  
  // 試算機狀態
  const [calcMetal, setCalcMetal] = useState('24K');
  const [calcWeight, setCalcWeight] = useState('');
  const [calcUnit, setCalcUnit] = useState<'qian' | 'gram'>('qian');
  
  // FAQ 狀態
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const { rates, updateTime, dailyTable, chartData, faq, articles } = initialData;

  // 延遲顯示動畫
  useEffect(() => {
    const timer = setTimeout(() => setShowHistory(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  // 格式化價格
  const formatPrice = (v: number) => {
    if (!v) return "0";
    const val = unit === 'qian' ? v : v / 3.75;
    return Math.floor(val).toLocaleString();
  };

  // 漲跌顯示
  const renderDiff = (diff: number) => {
    if (!diff) return <span className="text-gray-400 text-xs">-</span>;
    const val = unit === 'qian' ? diff : diff / 3.75;
    const absVal = Math.floor(Math.abs(val)).toLocaleString();
    const color = diff > 0 ? 'text-red-600' : 'text-green-600';
    return <span className={`${color} text-xs font-bold`}>{diff > 0 ? '▲' : '▼'} {absVal}</span>;
  };

  // 試算邏輯
  const calculateTotal = () => {
    if (!calcWeight) return 0;
    const weight = parseFloat(calcWeight);
    let price = 0;
    if (rates && rates[calcMetal]) price = rates[calcMetal].buy;
    
    // 單位換算邏輯：如果選擇台錢，直接乘；如果選公克，先換算
    // 這裡簡化邏輯：假設輸入單位與當前單價單位一致 (通常 API 給的是台錢價)
    // 如果輸入是公克，要先除以 3.75 換成台錢去算，或者單價除以 3.75
    
    // 統一轉成台錢計算
    const weightInQian = calcUnit === 'qian' ? weight : weight / 3.75;
    const total = Math.floor(weightInQian * price);
    return total.toLocaleString();
  };

  const bookNow = () => {
    const unitText = calcUnit === 'qian' ? '台錢' : '公克';
    const total = calculateTotal();
    const msg = `你好，我剛剛在官網試算 ${calcMetal} ${calcWeight}${unitText}，預估價格 $${total}，想預約時間賣出。`;
    window.open(`https://lin.ee/SDN6jpk`, "_blank");
  };

  return (
    <div className="font-sans text-slate-800 pb-20 lg:pb-0 bg-gray-50 min-h-screen">
      
      {/* Navbar */}
      <nav className="sticky top-0 z-40 bg-white shadow-sm h-[70px]">
        <div className="max-w-7xl mx-auto px-4 h-full flex justify-between items-center">
          <div className="flex items-center gap-3">
             <img src="https://wsrv.nl/?url=https://drive.google.com/uc?id=16UrCpYWRkyEkvL7M73o0DIAvkKWtF0Lp&w=100&output=webp" className="w-10 h-10 rounded border border-yellow-500" />
             <div>
               <div className="text-xl font-bold text-red-900 tracking-wider">巧品珠寶</div>
               <div className="text-[10px] text-gray-500">HUANG JIA FEI LI</div>
             </div>
          </div>
          <a href="tel:0986821626" className="flex items-center gap-2 bg-red-50 px-3 py-1 rounded-full border border-red-100 text-red-800 font-bold text-sm">
             <i className="fas fa-phone-alt"></i> 0986-821-626
          </a>
        </div>
      </nav>

      {/* 跑馬燈 */}
      <div className="bg-red-900 text-white text-xs py-2 overflow-hidden relative">
         <div className="whitespace-nowrap animate-[marquee_20s_linear_infinite] pl-[100%] inline-block" style={{animation: 'marquee 20s linear infinite'}}>
           📢 歡迎光臨巧品珠寶！每日更新最新黃金、白金、K金回收報價。全台高價回收，誠信經營，歡迎來電洽詢。
         </div>
      </div>
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
      `}</style>

      {/* Hero 區塊 */}
      <div className="relative h-[300px] flex items-center justify-center text-center text-white bg-slate-900 overflow-hidden">
        <img src="https://wsrv.nl/?url=https://drive.google.com/uc?id=1ASz1v5ZBQ-WV572r-BC4gZRuraywgKKv&w=800&output=webp" className="absolute inset-0 w-full h-full object-cover opacity-60" />
        <div className="relative z-10 px-4">
           <div className="inline-block px-3 py-1 border border-yellow-400 bg-black/50 rounded-full text-yellow-300 text-xs font-bold mb-4">經營十餘年 · 誠信老字號</div>
           <h1 className="text-4xl font-black mb-4 shadow-black drop-shadow-lg">黃金回收 <span className="text-amber-400">價值最大化</span></h1>
           <button onClick={() => document.getElementById('rates-section')?.scrollIntoView({behavior: 'smooth'})} className="bg-amber-500 text-black font-bold py-2 px-8 rounded-full shadow-lg hover:bg-amber-400 transition">
             查看今日金價
           </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-12 gap-8 relative z-20 -mt-10">
        
        {/* 左側主要內容 */}
        <div className="lg:col-span-8 space-y-6">
          
          {/* 報價區塊 */}
          <section id="rates-section" className="bg-white rounded-2xl shadow-xl border-t-4 border-red-800 overflow-hidden">
             <div className="p-4 bg-gray-50 border-b flex justify-between items-center">
               <div>
                 <h3 className="font-bold text-red-900 text-lg">今日牌價</h3>
                 <p className="text-xs text-gray-500">{updateTime}</p>
               </div>
               <button onClick={() => setUnit(unit === 'qian' ? 'gram' : 'qian')} className="text-xs bg-slate-800 text-white px-3 py-1.5 rounded">
                 單位: <span className="text-amber-400 font-bold">{unit === 'qian' ? '台錢' : '公克'}</span>
               </button>
             </div>
             
             {/* 24K */}
             <div className="bg-red-50 p-5 m-4 rounded-xl border border-red-100">
                <div className="flex justify-between font-bold text-red-800 mb-2"><span>黃金 (24K)</span> <i className="fas fa-crown text-amber-500"></i></div>
                <div className="flex justify-between items-center divide-x divide-red-200">
                   <div className="w-1/2 text-center pr-2">
                      <div className="text-xs text-gray-500">回收 (Buy)</div>
                      <div className="text-3xl font-black text-green-600">${formatPrice(rates['24K']?.buy)}</div>
                      <div className="mt-1">{renderDiff(rates['24K']?.buyDiff)}</div>
                   </div>
                   <div className="w-1/2 text-center pl-2">
                      <div className="text-xs text-gray-500">賣出 (Sell)</div>
                      <div className="text-2xl font-bold text-blue-600">${formatPrice(rates['24K']?.sell)}</div>
                      <div className="mt-1">{renderDiff(rates['24K']?.sellDiff)}</div>
                   </div>
                </div>
             </div>
          </section>

          {/* 試算機 (手機版顯示在這裡) */}
          <section className="lg:hidden bg-slate-900 text-white p-6 rounded-2xl shadow-xl">
             <div className="flex justify-between items-center mb-4">
                <h4 className="font-bold text-amber-400"><i className="fas fa-calculator mr-2"></i>回收試算</h4>
                <button onClick={() => setCalcUnit(calcUnit === 'qian' ? 'gram' : 'qian')} className="text-xs bg-yellow-500 text-black px-2 py-1 rounded font-bold">
                   單位: {calcUnit === 'qian' ? '台錢' : '公克'}
                </button>
             </div>
             <div className="space-y-3">
                <div className="flex gap-2">
                   <select value={calcMetal} onChange={(e) => setCalcMetal(e.target.value)} className="bg-slate-800 border-slate-700 rounded p-3 w-1/3 text-sm">
                      <option value="24K">24K</option><option value="18K">18K</option><option value="Pt">鉑金</option>
                   </select>
                   <input type="number" value={calcWeight} onChange={(e) => setCalcWeight(e.target.value)} placeholder="輸入重量" className="bg-slate-800 border-slate-700 rounded p-3 w-2/3 text-right font-mono" />
                </div>
                <div className="flex justify-between bg-slate-800/50 p-3 rounded border border-slate-700">
                   <span className="text-gray-400 text-sm">預估價值</span>
                   <span className="text-2xl font-bold text-amber-400">${calculateTotal()}</span>
                </div>
                <button onClick={bookNow} className="w-full bg-green-600 hover:bg-green-500 text-white font-bold py-3 rounded shadow-lg transition">用此價格預約賣出</button>
             </div>
          </section>

          {/* 歷史走勢圖 */}
          <div className={`transition-all duration-1000 ${showHistory ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
             <section className="bg-white rounded-2xl shadow-xl p-6 mb-6">
                <h2 className="text-lg font-bold mb-4 border-l-4 border-red-800 pl-3">金價走勢</h2>
                <div className="h-64">
                   {showHistory && <Line 
                      data={{
                        labels: chartData?.labels || [],
                        datasets: [{
                          label: '回收價',
                          data: unit === 'qian' ? chartData?.data : chartData?.data.map((v: number) => v / 3.75),
                          borderColor: '#D4AF37', backgroundColor: 'rgba(212, 175, 55, 0.1)', fill: true, tension: 0.1, pointRadius: 2
                        }]
                      }} 
                      options={{ responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } }, scales: { x: { grid: { display: false } } } }} 
                   />}
                </div>
             </section>

             {/* 歷史報價表 */}
             <section className="bg-white rounded-2xl shadow-xl overflow-hidden mb-6">
                <div className="p-4 bg-gray-50 border-b font-bold text-red-900">歷史報價 (最近5日)</div>
                <table className="w-full text-sm">
                   <thead className="bg-red-50 text-red-900">
                      <tr><th className="p-3 text-left">日期</th><th className="p-3 text-right">回收</th><th className="p-3 text-right">賣出</th></tr>
                   </thead>
                   <tbody>
                      {dailyTable.slice(0, 5).map((row: any, i: number) => (
                         <tr key={i} className="border-b hover:bg-gray-50">
                            <td className="p-3 font-mono text-gray-500">{row.date}</td>
                            <td className="p-3 text-right font-bold text-green-600">${formatPrice(row.gold.buy)}</td>
                            <td className="p-3 text-right font-bold text-blue-600">${formatPrice(row.gold.sell)}</td>
                         </tr>
                      ))}
                   </tbody>
                </table>
             </section>

             {/* FAQ */}
             <section className="bg-white rounded-2xl shadow-xl p-6 mb-6">
                <h2 className="text-lg font-bold mb-4 border-l-4 border-red-800 pl-3">常見問題 FAQ</h2>
                <div className="space-y-2">
                   {faq.map((item: any, idx: number) => (
                      <div key={idx} className="border border-gray-100 rounded-lg overflow-hidden">
                         <button onClick={() => setActiveFaq(activeFaq === idx ? null : idx)} className="w-full text-left p-4 bg-gray-50 hover:bg-gray-100 font-bold flex justify-between items-center text-sm">
                            {item.q}
                            <i className={`fas fa-chevron-down transition-transform ${activeFaq === idx ? 'rotate-180' : ''}`}></i>
                         </button>
                         <div className={`transition-all duration-300 overflow-hidden ${activeFaq === idx ? 'max-h-96 p-4' : 'max-h-0'}`}>
                            <p className="text-gray-600 text-sm leading-relaxed">{item.a}</p>
                         </div>
                      </div>
                   ))}
                </div>
             </section>

             {/* 文章 */}
             <section>
                <h2 className="text-xl font-bold mb-4 border-l-4 border-red-800 pl-3">最新專欄</h2>
                <div className="grid md:grid-cols-2 gap-4">
                   {articles.slice(0, 4).map((art: any) => (
                      <div key={art.id} className="bg-white rounded-xl shadow border border-gray-100 overflow-hidden hover:shadow-md transition group cursor-pointer" onClick={() => window.open(`/?p=article&id=${art.id}`, '_self')}>
                         <div className="h-40 bg-gray-200 overflow-hidden relative">
                            <img src={art.image} className="w-full h-full object-cover group-hover:scale-105 transition duration-700" loading="lazy"/>
                            <span className="absolute top-0 right-0 bg-red-800 text-white text-xs px-2 py-1 rounded-bl">{art.date}</span>
                         </div>
                         <div className="p-4">
                            <h3 className="font-bold text-gray-800 mb-2 truncate group-hover:text-red-800">{art.title}</h3>
                            <p className="text-xs text-gray-500 line-clamp-2">{art.summary}</p>
                         </div>
                      </div>
                   ))}
                </div>
             </section>
          </div>
        </div>

        {/* 右側欄 (電腦版顯示) */}
        <aside className="hidden lg:col-span-4 lg:block">
           <div className="sticky top-24 space-y-6">
              {/* 電腦版試算機 */}
              <div className="bg-slate-900 text-white p-6 rounded-2xl shadow-xl">
                 <div className="flex justify-between items-center mb-4">
                    <h4 className="font-bold text-amber-400"><i className="fas fa-calculator mr-2"></i>回收試算</h4>
                    <button onClick={() => setCalcUnit(calcUnit === 'qian' ? 'gram' : 'qian')} className="text-xs bg-yellow-500 text-black px-2 py-1 rounded font-bold">
                       單位: {calcUnit === 'qian' ? '台錢' : '公克'}
                    </button>
                 </div>
                 <div className="space-y-3">
                    <div className="flex gap-2">
                       <select value={calcMetal} onChange={(e) => setCalcMetal(e.target.value)} className="bg-slate-800 border-slate-700 rounded p-3 w-1/3 text-sm">
                          <option value="24K">24K</option><option value="18K">18K</option><option value="Pt">鉑金</option>
                       </select>
                       <input type="number" value={calcWeight} onChange={(e) => setCalcWeight(e.target.value)} placeholder="輸入重量" className="bg-slate-800 border-slate-700 rounded p-3 w-2/3 text-right font-mono" />
                    </div>
                    <div className="flex justify-between bg-slate-800/50 p-3 rounded border border-slate-700">
                       <span className="text-gray-400 text-sm">預估價值</span>
                       <span className="text-2xl font-bold text-amber-400">${calculateTotal()}</span>
                    </div>
                    <button onClick={bookNow} className="w-full bg-green-600 hover:bg-green-500 text-white font-bold py-3 rounded shadow-lg transition">用此價格預約賣出</button>
                 </div>
              </div>

              {/* 聯絡資訊 */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                 <h3 className="font-bold text-gray-800 mb-4 border-l-4 border-red-800 pl-2">聯絡我們</h3>
                 <div className="space-y-4 text-sm text-gray-700">
                    <div className="flex items-start gap-3"><i className="fas fa-clock text-red-800 mt-1"></i><div><span className="font-bold block text-gray-900">營業時間</span>貴金屬買賣 11:00~03:30</div></div>
                    <div className="flex items-start gap-3"><i className="fas fa-map-marker-alt text-red-800 mt-1"></i><div><span className="font-bold block text-gray-900">門市地址</span>台北市大安區濟南路三段62-1號1樓</div></div>
                    <div className="flex items-start gap-3"><i className="fas fa-phone-alt text-red-800 mt-1"></i><div><span className="font-bold block text-gray-900">預約專線</span><a href="tel:0986821626" className="text-lg font-bold text-red-800">0986-821-626</a></div></div>
                 </div>
              </div>
           </div>
        </aside>
      </div>

      {/* 手機版底部浮動按鈕 */}
      <div className="fixed z-50 bottom-0 left-0 w-full bg-white border-t border-gray-200 flex justify-around items-center p-3 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] lg:hidden">
          <a href="https://lin.ee/SDN6jpk" target="_blank" className="flex items-center justify-center text-white shadow-md bg-[#06C755] w-10 h-10 rounded-full"><i className="fab fa-line text-xl"></i></a>
          <a href="https://www.facebook.com/QPJEWELRY.OFFICIAL" target="_blank" className="flex items-center justify-center text-white shadow-md bg-[#1877F2] w-10 h-10 rounded-full"><i className="fab fa-facebook-f text-lg"></i></a>
          <a href="tel:0986821626" className="flex items-center justify-center text-white shadow-md bg-red-600 w-10 h-10 rounded-full"><i className="fas fa-phone-alt text-lg"></i></a>
          <button onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} className="flex items-center justify-center text-white shadow-md bg-yellow-500 w-10 h-10 rounded-full"><i className="fas fa-arrow-up"></i></button>
      </div>
      
      {/* Footer */}
      <footer className="bg-slate-900 text-gray-500 py-8 text-center text-xs mt-12 hidden lg:block">
         © 2025 巧品珠寶. 版權所有.
      </footer>
    </div>
  );
}
