'use client';

import { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Filler, Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Filler, Legend);

export default function ClientPage({ initialData }: { initialData: any }) {
  // --- 狀態設定 ---
  const [view, setView] = useState('home'); // 控制首頁或文章頁
  const [unit, setUnit] = useState<'qian' | 'gram'>('qian');
  const [showHistory, setShowHistory] = useState(false);
  
  // 試算機
  const [calcMetal, setCalcMetal] = useState('24K');
  const [calcWeight, setCalcWeight] = useState('');
  const [calcUnit, setCalcUnit] = useState<'qian' | 'gram'>('qian');
  
  // 列表顯示控制
  const [visibleQuoteCount, setVisibleQuoteCount] = useState(20);
  const [visibleArticleCount, setVisibleArticleCount] = useState(4);
  
  // 文章閱讀
  const [currentArticle, setCurrentArticle] = useState<any>(null);

  // FAQ
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  // 資料解構
  const { rates, updateTime, dailyTable, chartData, faq, articles } = initialData;

  // --- Helper Functions (從 Vue 搬過來的) ---
  
  // 圖片優化
  const getOptimizedUrl = (originalUrl: string, width = 800) => {
    if (!originalUrl) return "https://via.placeholder.com/600x400?text=No+Image";
    if (originalUrl.includes('wsrv.nl')) return originalUrl;
    let id = "";
    const match = originalUrl.match(/id=([-\w]{25,})/) || originalUrl.match(/\/d\/([-\w]{25,})/);
    if (match) {
        id = match[1];
        let quality = width <= 600 ? 65 : 75;
        return `https://wsrv.nl/?url=https://drive.google.com/uc?id=${id}&w=${width}&output=webp&q=${quality}&n=-1`;
    }
    return originalUrl;
  };

  // 格式化價格
  const formatPrice = (v: number) => {
    if (!v) return "0";
    const val = unit === 'qian' ? v : v / 3.75;
    return Math.floor(val).toLocaleString();
  };
  
  // 格式化白銀
  const formatSilver = (v: number) => {
    if (!v) return "0";
    let val = parseFloat(v.toString());
    return unit === 'qian' ? Math.floor(val).toLocaleString() : (val / 1000).toFixed(2);
  };

  // 漲跌箭頭
  const renderDiff = (diff: number, isTable = false) => {
    if (!diff) return isTable ? null : <span className="text-gray-400 text-xs">-</span>;
    const unitDiff = unit === 'qian' ? diff : diff / 3.75;
    const absVal = Math.floor(Math.abs(unitDiff)).toLocaleString();
    const color = diff > 0 ? 'text-red-600' : 'text-green-600';
    const arrow = diff > 0 ? '▲' : '▼';
    
    if (isTable) {
        return <span className={`ml-1 ${color} text-xs`}>{arrow}{absVal}</span>;
    }
    return <span className={`${color} text-xs font-bold`}>{arrow} {absVal}</span>;
  };

  // 試算邏輯
  const calculateTotal = () => {
    if (!calcWeight) return "0";
    const weight = parseFloat(calcWeight);
    let rawPrice = 0;
    if (rates && rates[calcMetal]) rawPrice = rates[calcMetal].buy;
    
    if (calcUnit === 'qian') {
        return Math.floor(weight * rawPrice).toLocaleString();
    } else {
        return Math.floor(weight * (rawPrice / 3.75)).toLocaleString();
    }
  };

  // 預約
  const bookNow = () => {
    const unitText = calcUnit === 'qian' ? '台錢' : '公克';
    const msg = `你好，我剛剛在官網試算 ${calcMetal} ${calcWeight}${unitText}，預估價格 $${calculateTotal()}，想預約時間賣出。`;
    // 簡單處理：直接開 LINE
    window.open("https://lin.ee/SDN6jpk", "_blank");
  };

  // 切換文章
  const openArticle = (article: any) => {
    setCurrentArticle({
        ...article,
        image: getOptimizedUrl(article.image, 800)
    });
    setView('article');
    window.scrollTo(0, 0);
  };

  const goHome = () => {
    setView('home');
    setCurrentArticle(null);
    window.scrollTo(0, 0);
  };

  // 滾動定位
  const scrollToId = (id: string) => {
    if (view !== 'home') {
        setView('home');
        setTimeout(() => {
            document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
    } else {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // 延遲動畫
  useEffect(() => {
    const timer = setTimeout(() => setShowHistory(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  // --- Render ---

  return (
    <div>
        {/* 手機版底部浮動按鈕 */}
        <div className="fixed z-50 transition-all duration-300 bottom-0 left-0 w-full bg-white border-t border-gray-200 flex justify-around items-center p-3 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] lg:w-auto lg:bg-transparent lg:border-none lg:flex-col lg:top-[40%] lg:right-0 lg:left-auto lg:bottom-auto lg:gap-2 lg:p-0 lg:shadow-none">
            <a href="https://lin.ee/SDN6jpk" target="_blank" className="flex items-center justify-center text-white shadow-md bg-[#06C755] w-10 h-10 rounded-full lg:w-12 lg:h-12 lg:rounded-l-lg lg:rounded-r-none lg:hover:w-14"><i className="fab fa-line text-xl lg:text-2xl"></i></a>
            <a href="https://www.facebook.com/QPJEWELRY.OFFICIAL" target="_blank" className="flex items-center justify-center text-white shadow-md bg-[#1877F2] w-10 h-10 rounded-full lg:w-12 lg:h-12 lg:rounded-l-lg lg:rounded-r-none lg:hover:w-14"><i className="fab fa-facebook-f text-lg lg:text-xl"></i></a>
            <a href="https://www.instagram.com/qiaopin.jewelry/" target="_blank" className="flex items-center justify-center text-white shadow-md bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 w-10 h-10 rounded-full lg:w-12 lg:h-12 lg:rounded-l-lg lg:rounded-r-none lg:hover:w-14"><i className="fab fa-instagram text-xl lg:text-2xl"></i></a>
            <a href="https://www.tiktok.com/@qpdiamond666" target="_blank" className="flex items-center justify-center text-white shadow-md bg-black w-10 h-10 rounded-full lg:w-12 lg:h-12 lg:rounded-l-lg lg:rounded-r-none lg:hover:w-14"><i className="fab fa-tiktok text-lg lg:text-xl"></i></a>
            <button onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} className="flex items-center justify-center text-white shadow-md bg-yellow-500 border border-yellow-600 w-10 h-10 rounded-full lg:w-12 lg:h-12 lg:rounded-l-lg lg:rounded-r-none lg:hover:w-14"><i className="fas fa-arrow-up text-lg lg:text-xl"></i></button>
        </div>

        {/* 導航列 */}
        <nav className="nav-sticky">
            <div className="max-w-7xl mx-auto px-4 h-full flex justify-between items-center">
                <div className="flex items-center gap-3 cursor-pointer" onClick={goHome}>
                    <img src="https://wsrv.nl/?url=https://drive.google.com/uc?id=16UrCpYWRkyEkvL7M73o0DIAvkKWtF0Lp&w=100&output=webp" className="w-10 h-10 rounded-lg object-cover border border-yellow-500" alt="Logo" />
                    <div><div className="text-2xl font-bold tracking-wider text-red-900">巧品珠寶</div><div className="text-xs text-gray-500">HUANG JIA FEI LI</div></div>
                </div>
                <div className="flex items-center space-x-4">
                    <button onClick={() => scrollToId('rates-desktop')} className="font-medium hover:text-red-800 hidden md:block">今日金價</button>
                    <button onClick={() => scrollToId('blog-section')} className="font-medium hover:text-red-800 hidden md:block">知識專欄</button>
                    <div className="flex flex-col items-end">
                        <a href="tel:0986821626" className="flex items-center gap-2 bg-red-50 px-3 py-1 rounded-full border border-red-100 hover:bg-red-100 transition mb-1">
                            <i className="fas fa-phone-alt text-red-800 text-xs"></i><span className="font-bold text-red-900 font-nums text-sm">0986-821-626</span>
                        </a>
                        <a href="https://maps.google.com/?q=台北市大安區濟南路三段62-1號1樓" target="_blank" className="flex items-center gap-1 text-gray-500 hover:text-red-800 transition text-[10px] md:text-xs">
                            <i className="fas fa-map-marker-alt text-red-600"></i><span>大安區濟南路三段62-1號</span>
                        </a>
                    </div>
                </div>
            </div>
        </nav>

        {/* 跑馬燈 */}
        <div className="bg-red-900 text-white text-sm py-2 overflow-hidden relative z-30 shadow-md">
            <div className="whitespace-nowrap animate-marquee inline-block pl-[100%]">
                📢 歡迎光臨巧品珠寶！每日更新最新黃金、白金、K金回收報價。全台高價回收，誠信經營，歡迎來電洽詢 0986-821-626。
            </div>
        </div>

        {/* --- 主頁面 --- */}
        {view === 'home' && (
            <div>
                {/* Hero */}
                <header className="hero-section">
                    <img src="https://wsrv.nl/?url=https://drive.google.com/uc?id=1ASz1v5ZBQ-WV572r-BC4gZRuraywgKKv&w=1200&output=webp&q=75" className="hero-img" alt="Banner" />
                    <div className="relative z-20 text-center text-white px-4 max-w-4xl hero-text-shadow">
                        <div className="inline-block px-4 py-1 border-2 border-yellow-400 bg-yellow-900/80 rounded-full text-yellow-300 text-sm font-bold mb-6 backdrop-blur-md shadow-lg">經營十餘年 · 誠信老字號</div>
                        <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">黃金回收 <span className="text-amber-400">價值最大化</span></h1>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button onClick={() => scrollToId('rates-desktop')} className="bg-amber-500 text-slate-900 font-bold py-3 px-10 rounded-full shadow-lg hover:bg-amber-400 transition border-2 border-amber-600">查看今日金價</button>
                            <button onClick={() => scrollToId('calculator-section-desktop')} className="bg-green-600
