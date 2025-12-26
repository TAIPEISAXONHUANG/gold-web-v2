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
  const { rates, updateTime, dailyTable, chartData } = initialData;

  useEffect(() => {
    const timer = setTimeout(() => setShowHistory(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  const formatPrice = (v: number) => {
    if (!v) return "0";
    const val = unit === 'qian' ? v : v / 3.75;
    return Math.floor(val).toLocaleString();
  };

  const renderDiff = (diff: number) => {
    if (!diff) return <span className="text-gray-400 text-xs">-</span>;
    const val = unit === 'qian' ? diff : diff / 3.75;
    const absVal = Math.floor(Math.abs(val)).toLocaleString();
    const color = diff > 0 ? 'text-red-600' : 'text-green-600';
    return <span className={`${color} text-xs font-bold`}>{diff > 0 ? '▲' : '▼'} {absVal}</span>;
  };

  const chartDisplayData = {
    labels: chartData?.labels || [],
    datasets: [{
      label: '回收價',
      data: unit === 'qian' ? chartData?.data : chartData?.data.map((v: number) => v / 3.75),
      borderColor: '#D4AF37',
      backgroundColor: 'rgba(212, 175, 55, 0.1)',
      fill: true,
      tension: 0.1,
      pointRadius: 3,
    }]
  };

  return (
    <div className="max-w-4xl mx-auto p-4 font-sans text-slate-800">
      {/* 秒開區塊 */}
      <div className="bg-white rounded-2xl shadow-xl border-t-4 border-red-800 mb-6 overflow-hidden">
        <div className="p-5 bg-gray-50 border-b flex justify-between items-center">
          <div>
            <h3 className="font-bold text-red-900 text-lg">今日牌價</h3>
            <p className="text-xs text-gray-500 mt-1">更新時間: {updateTime}</p>
          </div>
          <button 
            onClick={() => setUnit(unit === 'qian' ? 'gram' : 'qian')}
            className="text-xs bg-slate-800 text-white px-3 py-2 rounded shadow hover:bg-black transition"
          >
            單位: <span className="text-amber-400 font-bold">{unit === 'qian' ? '台錢' : '公克'}</span>
          </button>
        </div>

        {/* 24K 黃金 */}
        <div className="bg-red-50/50 p-6 m-4 rounded-xl border border-red-100">
          <div className="flex justify-between items-center mb-4">
             <span className="font-bold text-red-800 text-lg">黃金 (24K)</span>
             <i className="fas fa-crown text-amber-500 text-xl"></i>
          </div>
          <div className="flex justify-between items-center divide-x divide-red-200">
            <div className="text-center w-1/2 pr-4">
              <div className="text-xs text-gray-500 mb-1">回收 (Buy)</div>
              <div className="text-4xl font-black text-green-600 tracking-tight">
                ${formatPrice(rates['24K']?.buy)}
              </div>
              <div className="mt-2">{renderDiff(rates['24K']?.buyDiff)}</div>
            </div>
            <div className="text-center w-1/2 pl-4">
              <div className="text-xs text-gray-500 mb-1">賣出 (Sell)</div>
              <div className="text-3xl font-bold text-blue-600">
                ${formatPrice(rates['24K']?.sell)}
              </div>
              <div className="mt-2">{renderDiff(rates['24K']?.sellDiff)}</div>
            </div>
          </div>
        </div>
      </div>

      {/* 延遲載入區塊 */}
      <div className={`transition-all duration-1000 ease-out transform ${showHistory ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6 border border-gray-100">
          <h2 className="text-lg font-bold mb-4 text-slate-700 border-l-4 border-red-800 pl-3">金價走勢</h2>
          <div className="h-64">
             {showHistory && <Line data={chartDisplayData} options={{ responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } }, scales: { x: { grid: { display: false } } } }} />}
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
           <div className="p-4 bg-gray-50 border-b">
             <h2 className="text-lg font-bold text-slate-700 border-l-4 border-red-800 pl-3">歷史行情</h2>
           </div>
           <table className="w-full text-sm text-left">
             <thead className="bg-slate-100 text-slate-600">
               <tr>
                 <th className="p-3">日期</th>
                 <th className="p-3 text-right">回收</th>
                 <th className="p-3 text-right">賣出</th>
               </tr>
             </thead>
             <tbody className="divide-y divide-gray-100">
               {dailyTable.slice(0, 10).map((row: any, i: number) => (
                 <tr key={i} className="hover:bg-slate-50">
                   <td className="p-3 font-mono text-gray-500">{row.date}</td>
                   <td className="p-3 text-right font-bold text-green-600">${formatPrice(row.gold.buy)}</td>
                   <td className="p-3 text-right font-bold text-blue-600">${formatPrice(row.gold.sell)}</td>
                 </tr>
               ))}
             </tbody>
           </table>
        </div>
      </div>
    </div>
  );
}