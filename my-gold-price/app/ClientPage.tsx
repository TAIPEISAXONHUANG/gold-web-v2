'use client';

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { IconLine, IconFacebook, IconInstagram, IconTiktok, IconArrowUp, IconArrowLeft, IconArrowRight, IconCalculator, IconChevronDown, IconClock, IconPhone, IconMapMarker, IconHistory } from './Icons';

// 動態載入 Chart.js — 不阻塞首屏渲染
const GoldPriceChart = dynamic(() => import('./GoldPriceChart'), {
  ssr: false,
  loading: () => <div className="h-64 flex items-center justify-center text-gray-700 text-sm">載入圖表中...</div>,
});

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    fbq: (...args: any[]) => void;
  }
}

export default function ClientPage({ initialData }: { initialData: any }) {
  const [view, setView] = useState('home');
  const [unit, setUnit] = useState<'qian' | 'gram'>('qian');
  const [calcMetal, setCalcMetal] = useState('24K');
  const [calcWeight, setCalcWeight] = useState('');
  const [calcUnit, setCalcUnit] = useState<'qian' | 'gram'>('qian');
  const [visibleQuoteCount, setVisibleQuoteCount] = useState(20);
  const [visibleArticleCount, setVisibleArticleCount] = useState(4);
  const [currentArticle, setCurrentArticle] = useState<any>(null);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const [data, setData] = useState<any>(initialData);

  // SSR 已提供 initialData 時跳過 fetch；否則 client 端補抓
  useEffect(() => {
    if (initialData) return;
    fetch('/api/gold-data')
      .then(r => r.json())
      .then(d => setData(d))
      .catch(err => console.error('gold-data API error:', err));
  }, [initialData]);

  const rates = data?.rates || {};
  const updateTime = data?.updateTime || '';
  const dailyTable = data?.dailyTable || [];
  const chartData = data?.chartData || null;
  const faq = data?.faq || [];
  const articles = data?.articles || [];

  // --- Google & Meta 轉換追蹤 ---
  const sendConversionSignal = () => {
    // Google Ads 轉換
    if (typeof window !== 'undefined' && window.gtag) {
      console.log('Sending Google Conversion...');
      window.gtag('event', 'conversion', {
        'send_to': 'AW-356014880/uq7hCLPD3NcbEKC24akB',
        'value': 1.0,
        'currency': 'TWD'
      });
    }
    // Meta Pixel 追蹤 (Lead = 潛在客戶)
    if (typeof window !== 'undefined' && window.fbq) {
      console.log('Sending Meta Lead...');
      window.fbq('track', 'Lead');
    }
  };

  const handleContactClick = (url: string) => {
    sendConversionSignal();
    window.open(url, "_blank");
  }

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

  // 資料 loading 中時，對外顯示 skeleton 的骨架
  const isLoading = !data || !data.rates;

  const formatPrice = (v: number) => {
    if (!v) return "0";
    const val = unit === 'qian' ? v : v / 3.75;
    return Math.floor(val).toLocaleString();
  };
  
  const formatSilver = (v: number) => {
    if (!v) return "0";
    let val = parseFloat(v.toString());
    return unit === 'qian' ? Math.floor(val).toLocaleString() : (val / 1000).toFixed(2);
  };

  const renderDiff = (diff: number, isTable = false) => {
    if (!diff) return isTable ? null : <span className="text-gray-600 text-xs">-</span>;
    const unitDiff = unit === 'qian' ? diff : diff / 3.75;
    const absVal = Math.floor(Math.abs(unitDiff)).toLocaleString();
    const color = diff > 0 ? 'text-red-600' : 'text-green-600';
    const arrow = diff > 0 ? '▲' : '▼';
    if (isTable) {
        return <span className={`ml-1 ${color} text-xs`}>{arrow}{absVal}</span>;
    }
    return <span className={`${color} text-xs font-bold`}>{arrow} {absVal}</span>;
  };

  const calculateTotal = () => {
    if (!calcWeight) return "0";
    const weight = parseFloat(calcWeight);
    let rawPrice = 0;
    if (rates && rates[calcMetal]) {
        rawPrice = rates[calcMetal].buy;
    }
    if (calcUnit === 'qian') {
        return Math.floor(weight * rawPrice).toLocaleString();
    } else {
        return Math.floor(weight * (rawPrice / 3.75)).toLocaleString();
    }
  };

  const bookNow = () => {
    sendConversionSignal();
    window.open("https://lin.ee/zvLP4JC", "_blank");
  };

  const openArticle = (article: any) => {
    setCurrentArticle({ ...article, image: getOptimizedUrl(article.image, 800) });
    setView('article');
    window.scrollTo(0, 0);
  };

  const goHome = () => {
    setView('home');
    setCurrentArticle(null);
    window.scrollTo(0, 0);
  };

  const scrollToId = (id: string) => {
    if (view !== 'home') {
        setView('home');
        setTimeout(() => { document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }); }, 100);
    } else {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
  };



  const MetalOptions = () => (
    <>
      <optgroup label="黃金/K金">
        <option value="24K">24K (999)</option>
        <option value="22K">22K (916)</option>
        <option value="18K">18K (750)</option>
        <option value="14K">14K (585)</option>
        <option value="10K">10K (417)</option>
        <option value="8K">8K (333)</option> {/* 新增 8K 選項 */}
      </optgroup>
      <optgroup label="其他貴金屬">
        <option value="Pt">鉑金 (Pt)</option>
        <option value="S999">純銀 (999)</option>
        <option value="S925">飾銀 (925)</option>
      </optgroup>
    </>
  );

  return (
    <div>
        {/* Hero image is rendered in layout.tsx (server component) for optimal LCP */}
        {/* 手機版底部浮動按鈕 */}
        <div className="fixed z-50 transition-all duration-300 bottom-0 left-0 w-full bg-white border-t border-gray-200 flex justify-around items-center p-3 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] lg:w-auto lg:bg-transparent lg:border-none lg:flex-col lg:top-[40%] lg:right-0 lg:left-auto lg:bottom-auto lg:gap-2 lg:p-0 lg:shadow-none">
            
            <a href="https://lin.ee/zvLP4JC" target="_blank" rel="noopener noreferrer" aria-label="聯絡巧品珠寶 LINE 官方帳號" onClick={sendConversionSignal} className="flex items-center justify-center text-white shadow-md bg-[#06C755] w-11 h-11 rounded-full lg:w-12 lg:h-12 lg:rounded-l-lg lg:rounded-r-none lg:hover:w-14">
                <IconLine className="text-xl lg:text-2xl w-6 h-6" />
            </a>
            
            <a href="https://www.facebook.com/QPJEWELRY.OFFICIAL" target="_blank" rel="noopener noreferrer" aria-label="巧品珠寶 Facebook 粉絲頁" onClick={sendConversionSignal} className="flex items-center justify-center text-white shadow-md bg-[#1877F2] w-11 h-11 rounded-full lg:w-12 lg:h-12 lg:rounded-l-lg lg:rounded-r-none lg:hover:w-14">
                <IconFacebook className="text-lg lg:text-xl w-5 h-5" />
            </a>
            
            <a href="https://www.instagram.com/qiaopin.jewelry/" target="_blank" rel="noopener noreferrer" aria-label="巧品珠寶 Instagram" onClick={sendConversionSignal} className="flex items-center justify-center text-white shadow-md bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 w-11 h-11 rounded-full lg:w-12 lg:h-12 lg:rounded-l-lg lg:rounded-r-none lg:hover:w-14">
                <IconInstagram className="text-xl lg:text-2xl w-6 h-6" />
            </a>
            
            <a href="https://www.tiktok.com/@qpdiamond666" target="_blank" rel="noopener noreferrer" aria-label="巧品珠寶 TikTok" onClick={sendConversionSignal} className="flex items-center justify-center text-white shadow-md bg-black w-11 h-11 rounded-full lg:w-12 lg:h-12 lg:rounded-l-lg lg:rounded-r-none lg:hover:w-14">
                <IconTiktok className="text-lg lg:text-xl w-5 h-5" />
            </a>
            
            <button onClick={() => scrollToId('rates-mobile')} aria-label="回到今日金價" className="flex items-center justify-center text-white shadow-md bg-yellow-500 border border-yellow-600 w-11 h-11 rounded-full lg:w-12 lg:h-12 lg:rounded-l-lg lg:rounded-r-none lg:hover:w-14">
                <IconArrowUp className="text-lg lg:text-xl w-5 h-5" />
            </button>
        </div>

        {/* 導航列 */}
        <nav className="nav-sticky" role="navigation" aria-label="主選單">
            <div className="max-w-7xl mx-auto px-4 h-full flex justify-between items-center">
                <div className="flex items-center gap-3 cursor-pointer" onClick={goHome}>
                    <img src="/logo.webp" className="w-10 h-10 rounded-lg object-cover border border-yellow-500" alt="巧品珠寶 Logo - 台北黃金回收推薦" loading="lazy" width="40" height="40" />
                    <div><div className="text-2xl font-bold tracking-wider text-red-900">巧品珠寶</div><div className="text-xs text-gray-500">HUANG JIA FEI LI</div></div>
                </div>
                <div className="flex items-center space-x-4">
                    <button onClick={() => scrollToId('rates-desktop')} aria-label="跳至今日金價" className="font-medium hover:text-red-800 hidden md:block min-h-[44px] px-2">今日金價</button>
                    <a href="/blog" className="font-medium hover:text-red-800 hidden md:block min-h-[44px] flex items-center">知識專欄</a>
                    <a href="/faq" className="font-medium hover:text-red-800 hidden md:block min-h-[44px] flex items-center">常見問題</a>
                    <a href="/blog" className="font-medium hover:text-red-800 hidden md:block min-h-[44px] flex items-center">部落格</a>
                    <a href="/district/da-an" className="font-medium hover:text-red-800 hidden md:block min-h-[44px] flex items-center">黃金回收</a>
                    <div className="flex flex-col items-end">
                        <a href="tel:0986821626" onClick={sendConversionSignal} className="flex items-center gap-2 bg-red-50 px-3 py-1 rounded-full border border-red-100 hover:bg-red-100 transition mb-1">
                            <IconPhone className="text-red-800 w-3 h-3" /><span className="font-bold text-red-900 font-nums text-sm">0986-821-626</span>
                        </a>
                        <a href="https://maps.google.com/?q=台北市大安區濟南路三段62-1號1樓" target="_blank" className="flex items-center gap-1 text-gray-600 hover:text-red-800 transition text-[10px] md:text-xs min-h-[44px] flex items-center">
                            <IconMapMarker className="text-red-600 w-3 h-3" /><span>大安區濟南路三段62-1號</span>
                        </a>
                    </div>
                </div>
            </div>
        </nav>

        {/* H1 主標題 - SEO 必要，視覺上隱藏但爬蟲可見 */}
        <h1 className="sr-only">巧品珠寶｜台北黃金回收推薦・K金白金鑽石高價收購・即時金價查詢</h1>

        {/* 跑馬燈 */}
        <div className="bg-red-900 text-white text-sm py-2 overflow-hidden relative z-30 shadow-md">
            <div className="whitespace-nowrap animate-marquee inline-block pl-[100%]">
                📢 歡迎光臨巧品珠寶！每日更新最新黃金、白金、K金回收報價。全台高價回收，誠信經營，歡迎來電洽詢 0986-821-626。
            </div>
        </div>

        {/* --- 主頁面 --- */}
        {view === 'home' && (
            <div>
                {/* Hero 已移至 page.tsx server component，此處不重複渲染 */}

                <main className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-12 gap-8 -mt-10 relative z-20 pb-24 md:pb-12" role="main" aria-label="主要內容">
                    <div className="lg:col-span-8 space-y-8">
                        {/* 圖表 */}
                        <section className="bg-white rounded-2xl shadow-xl p-6">
                            <h2 className="text-xl font-bold mb-4 border-l-4 border-red-800 pl-3">金價走勢圖</h2>
                            <div className="h-64 relative">
                                <GoldPriceChart
                                    labels={chartData?.labels || []}
                                    data={unit === 'qian' ? chartData?.data : (chartData?.data || []).map((v: number) => v / 3.75)}
                                  />
                            </div>
                        </section>

                        {/* 報價表 */}
                        <section id="daily-table" className="bg-white rounded-2xl shadow-xl overflow-hidden">
                            <div className="p-4 bg-gray-50 flex justify-between items-center border-b">
                                <h2 className="text-xl font-bold border-l-4 border-red-800 pl-3">每日報價</h2>
                                <span className="text-sm font-bold bg-white border px-2 py-1 rounded">單位: {unit === 'qian' ? '台錢' : '公克'}</span>
                            </div>
                            <div className="overflow-x-auto max-h-[600px] min-h-[200px] overflow-y-auto">
                                <table className="w-full min-w-[700px]">
                                    <thead className="sticky top-0 z-10 shadow-sm bg-[#FEF2F2]">
                                        <tr>
                                            <th scope="col" className="table-header">日期</th>
                                            <th scope="col" className="table-header text-yellow-900">黃金(收)</th>
                                            <th scope="col" className="table-header text-yellow-900">黃金(賣)</th>
                                            <th scope="col" className="table-header">鉑金(收)</th>
                                            <th scope="col" className="table-header">鉑金(賣)</th>
                                            <th scope="col" className="table-header">白銀(收)</th>
                                            <th scope="col" className="table-header">白銀(賣)</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {isLoading && Array.from({length: 5}).map((_, i) => (
                                            <tr key={`skeleton-${i}`} className="animate-pulse">
                                                {Array.from({length: 7}).map((_, j) => (
                                                    <td key={j} className="table-cell"><div className="h-4 bg-gray-200 rounded w-3/4 mx-auto"></div></td>
                                                ))}
                                            </tr>
                                        ))}
                                        {dailyTable.slice(0, visibleQuoteCount).map((row: any, i: number) => (
                                            <tr key={i} className="hover:bg-gray-50 transition-colors">
                                                <td className="table-cell text-xs font-mono text-gray-600">{row.date}</td>
                                                <td className="table-cell font-bold text-red-600 bg-yellow-50/30">{formatPrice(row.gold.buy)}{renderDiff(row.gold.buyDiff, true)}</td>
                                                <td className="table-cell font-bold text-gray-800 bg-yellow-50/30">{formatPrice(row.gold.sell)}{renderDiff(row.gold.sellDiff, true)}</td>
                                                <td className="table-cell text-slate-700">{formatPrice(row.pt.buy)}{renderDiff(row.pt.buyDiff, true)}</td>
                                                <td className="table-cell text-slate-600">{formatPrice(row.pt.sell)}{renderDiff(row.pt.sellDiff, true)}</td>
                                                <td className="table-cell text-gray-700">{formatSilver(row.ag.buy)}</td>
                                                <td className="table-cell text-gray-600">{formatSilver(row.ag.sell)}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            {dailyTable.length > visibleQuoteCount && (
                                <div className="p-4 text-center bg-gray-50 border-t border-gray-100">
                                    <button onClick={() => setVisibleQuoteCount(prev => prev + 20)} aria-label="載入更多歷史報價" className="text-sm font-bold text-gray-700 hover:text-red-800 bg-white border border-gray-300 hover:border-red-800 px-6 py-3 rounded-full shadow-sm transition-all duration-300 min-h-[44px]">
                                        <IconHistory className="mr-2 w-4 h-4 inline" />瀏覽更多歷史報價
                                    </button>
                                </div>
                            )}
                        </section>

                        {/* 手機版：今日牌價 & 試算機 (已修正寬度) */}
                        <div className="lg:hidden space-y-6 mb-8">
                             <div id="rates-mobile" className="bg-white rounded-2xl shadow-xl border-t-4 border-red-800">
                                <div className="p-5 bg-gradient-to-b from-gray-50 to-white border-b flex justify-between items-start">
                                    <div><h3 className="font-bold text-red-900 text-lg">今日牌價</h3><p className="text-xs text-gray-600 mt-1">{updateTime}</p></div>
                                                    <button onClick={() => setUnit(unit === 'qian' ? 'gram' : 'qian')} aria-label={`切換單位：目前 ${unit === 'qian' ? '台錢' : '公克'}`} className="text-xs bg-gray-800 text-white hover:bg-black px-3 py-1.5 rounded shadow transition min-w-[44px] min-h-[44px]">單位: <span className="text-amber-400 font-bold">{unit === 'qian' ? '台錢' : '公克'}</span></button>
                                </div>
                                <div className="bg-red-50 p-4 m-4 rounded-xl border border-red-100">
                                    <div className="flex justify-between text-sm mb-2 font-bold text-red-800"><span>黃金 (24K)</span> <span className="text-amber-500 text-lg">♛</span></div>
                                    <div className="flex justify-between">
                                        <div className="text-center w-1/2 border-r border-red-200"><div className="text-xs text-gray-600">回收(Buy)</div><div className="text-2xl font-bold text-green-700 min-h-[36px]">{isLoading ? <span className="inline-block w-20 h-7 bg-gray-200 rounded animate-pulse"></span> : formatPrice(rates['24K']?.buy || 0)}</div><div className="mt-1 min-h-[20px]">{isLoading ? null : renderDiff(rates['24K']?.buyDiff || 0)}</div></div>
                                        <div className="text-center w-1/2"><div className="text-xs text-gray-600">賣出(Sell)</div><div className="text-xl font-bold text-blue-700 min-h-[36px]">{isLoading ? <span className="inline-block w-20 h-7 bg-gray-200 rounded animate-pulse"></span> : formatPrice(rates['24K']?.sell || 0)}</div><div className="mt-1 min-h-[20px]">{isLoading ? null : renderDiff(rates['24K']?.sellDiff || 0)}</div></div>
                                    </div>
                                </div>
                             </div>

                             <div id="calculator-section-mobile" className="bg-gray-900 p-5 text-white rounded-2xl shadow-xl">
                                <div className="flex justify-between items-center mb-4"><h4 className="font-bold text-amber-400 flex items-center gap-2"><IconCalculator className="w-5 h-5" /> 黃金回收試算</h4><button onClick={() => setCalcUnit(calcUnit === 'qian' ? 'gram' : 'qian')} aria-label={`切換重量單位：目前 ${calcUnit === 'qian' ? '台錢' : '公克'}`} className="text-base font-bold bg-yellow-400 text-gray-900 px-4 py-2 rounded-lg shadow-lg hover:bg-yellow-300 transition transform active:scale-95 border-2 border-yellow-500 min-w-[44px] min-h-[44px]">單位: {calcUnit === 'qian' ? '台錢' : '公克'}</button></div>
                                <div className="space-y-3">
                                    <div className="flex gap-2">
                                        {/* 修改寬度：w-1/2 (50%) 確保字不被切到 */}
                                        <label htmlFor="calc-metal-mobile" className="sr-only">選擇金屬種類</label>
                                        <select id="calc-metal-mobile" value={calcMetal} onChange={(e) => setCalcMetal(e.target.value)} className="bg-gray-800 border-gray-700 rounded p-3 text-base w-1/2 outline-none">
                                            <MetalOptions />
                                        </select>
                                        {/* 修改寬度：flex-1 */}
                                        <label htmlFor="calc-weight-mobile" className="sr-only">輸入重量</label>
                                        <input id="calc-weight-mobile" type="number" value={calcWeight} onChange={(e) => setCalcWeight(e.target.value)} className="flex-1 bg-gray-800 border-gray-700 rounded p-3 text-base text-right font-nums outline-none" placeholder="輸入重量" />
                                    </div>
                                    <div className="flex justify-between items-center bg-gray-800/50 p-3 rounded border border-gray-700"><span className="text-sm text-gray-300">預估價值</span><span className="text-2xl font-bold text-amber-400">$ {calculateTotal()}</span></div>
                                    <button onClick={bookNow} className="w-full bg-green-500 text-white font-bold py-3 rounded text-base hover:bg-green-600 shadow-lg flex items-center justify-center gap-2">用此價格預約賣出</button>
                                </div>
                             </div>
                        </div>

                        {/* FAQ */}
                        {faq.length > 0 && (
                            <section className="bg-white rounded-2xl shadow-xl p-6">
                                <h2 className="text-xl font-bold mb-4 border-l-4 border-red-800 pl-3">常見問題 FAQ</h2>
                                <div className="space-y-2">
                                    {faq.map((item: any, idx: number) => (
                                        <div key={idx} className={`faq-item ${activeFaq === idx ? 'active' : ''}`} onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}>
                                            <div className="w-full text-left p-4 bg-gray-50 hover:bg-gray-100 font-bold flex justify-between items-center text-sm cursor-pointer">
                                                {item.q} <IconChevronDown className="faq-icon w-4 h-4" />
                                            </div>
                                            <div className="faq-answer px-4 bg-white">
                                                <p className="text-gray-600 text-sm leading-relaxed py-2">{item.a}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        )}

                        {/* AEO 可視 FAQ 區塊 — AI 引擎抓取用 */}
                        <section className="bg-white rounded-2xl shadow-xl p-6">
                            <h2 className="text-xl font-bold mb-4 border-l-4 border-red-800 pl-3">黃金回收常見問題</h2>
                            <div className="space-y-5 text-sm text-gray-700 leading-relaxed">
                                <div>
                                    <h3 className="font-bold text-gray-900 mb-1">黃金回收的計算方式是什麼？</h3>
                                    <p><strong>黃金回收價</strong>是依當日國際金價（美元/盎司）換算台幣，再乘以純度折算。K 數代表含金比例：</p>
                                    <ul className="list-disc pl-5 mt-2 space-y-1">
                                        <li><strong>足金（999 / 24K）</strong>：含金量 99.9%</li>
                                        <li><strong>18K（750）</strong>：含金量 75%</li>
                                        <li><strong>14K（585）</strong>：含金量 58.5%</li>
                                        <li><strong>9K（375）</strong>：含金量 37.5%</li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900 mb-1">現場賣黃金需要帶哪些證件？</h3>
                                    <p><strong>雙證件</strong>是基本要求：身分證 + 第二證件（健保卡或駕照）。未成年需監護人陪同簽名。</p>
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900 mb-1">如何辨別黃金純度？</h3>
                                    <p>查看飾品印記：<strong>999 或 24K 為足金</strong>，750 為 18K，585 為 14K。店內提供 XRF 螢光儀現場驗成色，免費、當場出結果。</p>
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900 mb-1">黃金回收需要預約嗎？</h3>
                                    <p>一般回收<strong>無需預約</strong>，直接攜帶飾品和雙證件到店即可。攜帶大量黃金（超過 100g）建議先致電 <strong>0986-821-626</strong> 告知，方便備妥現金。</p>
                                </div>
                            </div>
                        </section>

                        {/* 文章列表 */}
                        <section id="blog-section">
                            <div className="flex justify-between items-end mb-6"><h2 className="text-2xl font-bold text-gray-800 border-l-4 border-red-800 pl-3">📚 黃金回收知識專欄</h2></div>
                            <div className="grid md:grid-cols-2 gap-6">
                                {articles.slice(0, visibleArticleCount).map((article: any) => (
                                    <div key={article.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition cursor-pointer group" onClick={() => openArticle(article)}>
                                        <div className="h-48 bg-gray-200 relative overflow-hidden">
                                            <img src={getOptimizedUrl(article.image, 400)} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt={article.title || '巧品珠寶知識專欄'} loading="lazy" width="400" height="192" />
                                            <div className="absolute top-0 right-0 bg-red-800 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">{article.date}</div>
                                        </div>
                                        <div className="p-5">
                                            <h3 className="font-bold text-lg text-gray-800 mb-2 truncate group-hover:text-red-800 transition">{article.title}</h3>
                                            <p className="text-sm text-gray-600 line-clamp-2 mb-4">{article.summary}</p>
                                            <div className="flex justify-end"><span className="text-red-800 text-sm font-bold group-hover:translate-x-1 transition-transform inline-block">閱讀更多 <IconArrowRight className="ml-1 w-4 h-4 inline" /></span></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            {articles.length > visibleArticleCount && (
                                <div className="text-center mt-10 mb-6">
                                    <button onClick={() => setVisibleArticleCount(prev => prev + 10)} aria-label="載入更多知識文章" className="group relative px-8 py-3 bg-white text-red-900 font-bold rounded-full border-2 border-red-100 hover:border-red-800 hover:bg-red-800 hover:text-white transition-all duration-300 shadow-sm hover:shadow-lg min-h-[44px]">
                                        <span className="relative z-10 flex items-center gap-2">瀏覽更多知識 <IconChevronDown className="group-hover:animate-bounce w-4 h-4" /></span>
                                    </button>
                                </div>
                            )}
                        </section>
                    </div>

                    {/* 右側欄 (電腦版) */}
                    <aside className="lg:col-span-4 hidden lg:block">
                        <div className="sticky top-24 space-y-6">
                            <div id="rates-desktop" className="bg-white rounded-2xl shadow-xl border-t-4 border-red-800 overflow-hidden">
                                <div className="p-5 bg-gradient-to-b from-gray-50 to-white border-b flex justify-between items-start">
                                    <div><h3 className="font-bold text-red-900 text-lg">今日牌價</h3><p className="text-xs text-gray-600 mt-1">{updateTime}</p></div>
                                    <button onClick={() => setUnit(unit === 'qian' ? 'gram' : 'qian')} aria-label={`切換單位：目前 ${unit === 'qian' ? '台錢' : '公克'}`} className="text-xs bg-gray-800 text-white hover:bg-black px-3 py-1.5 rounded shadow transition min-w-[44px] min-h-[44px]">單位: <span className="text-amber-400 font-bold">{unit === 'qian' ? '台錢' : '公克'}</span></button>
                                </div>
                                <div className="bg-red-50 p-4 m-4 rounded-xl border border-red-100">
                                    <div className="flex justify-between text-sm mb-2 font-bold text-red-800"><span>黃金 (24K)</span> <span className="text-amber-500 text-lg">♛</span></div>
                                    <div className="flex justify-between">
                                        <div className="text-center w-1/2 border-r border-red-200"><div className="text-xs text-gray-600">回收(Buy)</div><div className="text-2xl font-bold text-green-700 min-h-[36px]">{isLoading ? <span className="inline-block w-20 h-7 bg-gray-200 rounded animate-pulse"></span> : formatPrice(rates['24K']?.buy || 0)}</div><div className="mt-1 min-h-[20px]">{isLoading ? null : renderDiff(rates['24K']?.buyDiff || 0)}</div></div>
                                        <div className="text-center w-1/2"><div className="text-xs text-gray-600">賣出(Sell)</div><div className="text-xl font-bold text-blue-700 min-h-[36px]">{isLoading ? <span className="inline-block w-20 h-7 bg-gray-200 rounded animate-pulse"></span> : formatPrice(rates['24K']?.sell || 0)}</div><div className="mt-1 min-h-[20px]">{isLoading ? null : renderDiff(rates['24K']?.sellDiff || 0)}</div></div>
                                    </div>
                                </div>
                            </div>

                            <div id="calculator-section-desktop" className="bg-gray-900 p-5 text-white rounded-2xl shadow-xl">
                                <div className="flex justify-between items-center mb-4"><h4 className="font-bold text-amber-400 flex items-center gap-2"><IconCalculator className="w-5 h-5" /> 黃金回收試算</h4><button onClick={() => setCalcUnit(calcUnit === 'qian' ? 'gram' : 'qian')} aria-label={`切換重量單位：目前 ${calcUnit === 'qian' ? '台錢' : '公克'}`} className="text-base font-bold bg-yellow-400 text-gray-900 px-4 py-2 rounded-lg shadow-lg hover:bg-yellow-300 transition transform active:scale-95 border-2 border-yellow-500 min-w-[44px] min-h-[44px]">單位: {calcUnit === 'qian' ? '台錢' : '公克'}</button></div>
                                <div className="space-y-3">
                                    <div className="flex gap-2">
                                        <label htmlFor="calc-metal-desktop" className="sr-only">選擇金屬種類</label>
                                        <select id="calc-metal-desktop" value={calcMetal} onChange={(e) => setCalcMetal(e.target.value)} className="bg-gray-800 border-gray-700 rounded p-3 text-base w-5/12 outline-none">
                                            <MetalOptions />
                                        </select>
                                        <label htmlFor="calc-weight-desktop" className="sr-only">輸入重量</label>
                                        <input id="calc-weight-desktop" type="number" value={calcWeight} onChange={(e) => setCalcWeight(e.target.value)} className="flex-1 bg-gray-800 border-gray-700 rounded p-3 text-base text-right font-nums outline-none" placeholder="輸入重量" />
                                    </div>
                                    <div className="flex justify-between items-center bg-gray-800/50 p-3 rounded border border-gray-700"><span className="text-sm text-gray-300">預估價值</span><span className="text-2xl font-bold text-amber-400">$ {calculateTotal()}</span></div>
                                    <button onClick={bookNow} className="w-full bg-green-500 text-white font-bold py-3 rounded text-base hover:bg-green-600 shadow-lg flex items-center justify-center gap-2">用此價格預約賣出</button>
                                </div>
                            </div>

                            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                                <h3 className="font-bold text-gray-800 mb-4 border-l-4 border-red-800 pl-2">聯絡我們</h3>
                                <div className="space-y-4 text-sm text-gray-700">
                                    <div className="flex items-start gap-3"><IconClock className="text-red-800 mt-1 w-5 h-5" /><div><span className="font-bold block text-gray-900">營業時間</span>貴金屬買賣 11:00~03:30</div></div>
                                    <div className="flex items-start gap-3"><IconMapMarker className="text-red-800 mt-1 w-4 h-4" /><div><span className="font-bold block text-gray-900">門市地址</span><a href="https://www.google.com/maps/search/?api=1&query=台北市大安區濟南路三段62-1號1樓" target="_blank" className="hover:text-red-800 transition">台北市大安區濟南路三段62-1號1樓</a></div></div>
                                    <div className="flex items-start gap-3"><IconPhone className="text-red-800 mt-1 w-4 h-4" /><div><span className="font-bold block text-gray-900">預約專線</span><a href="tel:0986821626" onClick={() => sendConversionSignal()} className="text-lg font-bold text-red-800">0986-821-626</a></div></div>
                                </div>
                            </div>
                        </div>
                    </aside>
                </main>
            </div>
        )}

        {/* --- 文章閱讀頁面 --- */}
        {view === 'article' && currentArticle && (
            <div className="bg-white min-h-screen">
                <div className="max-w-4xl mx-auto px-4 py-12">
                    <button onClick={goHome} className="mb-6 flex items-center gap-2 text-gray-600 hover:text-red-800 font-bold px-4 py-2 bg-gray-50 rounded shadow-sm transition"><IconArrowLeft className="w-5 h-5" /> 返回首頁</button>
                    <article className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
                        <div className="w-full h-[300px] md:h-[400px] bg-gray-200 relative bg-gray-100">
                            <img src={currentArticle.image} className="absolute inset-0 w-full h-full object-cover" alt={currentArticle.title || '巧品珠寶知識專欄文章'} loading="lazy" width="1200" height="400" />
                        </div>
                        <div className="p-8 md:p-12">
                            <div className="flex items-center gap-4 mb-6 text-sm text-gray-500"><span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-xs font-bold">知識專欄</span><span>{currentArticle.date}</span></div>
                            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 leading-tight">{currentArticle.title}</h1>
                            <div className="article-body text-lg text-gray-700 border-t border-gray-100 pt-8" dangerouslySetInnerHTML={{__html: currentArticle.content}}></div>
                            <hr className="my-10 border-gray-200" />
                            <div className="bg-gray-50 p-8 rounded-xl border border-gray-200 text-center">
                                <h3 className="font-bold text-gray-800 text-xl mb-2">手上有黃金想變現嗎？</h3>
                                <p className="text-gray-600 mb-6">使用我們的線上工具，3秒算出最新回收價。</p>
                                <button onClick={goHome} className="bg-amber-500 text-slate-900 font-bold py-3 px-10 rounded-full shadow-lg hover:bg-amber-400 transition transform hover:-translate-y-1">前往線上試算</button>
                            </div>
                        </div>
                    </article>
                </div>
                <footer className="bg-gray-900 text-gray-300 py-10 border-t border-gray-800 text-center text-xs"><p>© 2026 巧品珠寶. 版權所有.</p></footer>
            </div>
        )}
        
        {/* 熱門服務 & 精選文章 內部連結區塊 */}
        {view === 'home' && (
            <section className="bg-gray-50 border-t border-gray-200 py-12 px-4">
                <div className="max-w-5xl mx-auto">
                    {/* 熱門服務 */}
                    <h2 className="text-xl font-bold text-gray-800 mb-6 border-l-4 border-red-800 pl-3">熱門回收服務</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
                        <a href="/sell-gold-guide" className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 text-center hover:shadow-md hover:border-red-200 transition">
                            <div className="text-2xl mb-2">🥇</div>
                            <div className="font-bold text-gray-800 text-sm">黃金回收</div>
                            <div className="text-xs text-gray-500 mt-1">9999純金高價收購</div>
                        </a>
                        <a href="/blog/karat-gold-recovery" className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 text-center hover:shadow-md hover:border-red-200 transition">
                            <div className="text-2xl mb-2">💍</div>
                            <div className="font-bold text-gray-800 text-sm">K金回收</div>
                            <div className="text-xs text-gray-500 mt-1">18K/14K按純度計算</div>
                        </a>
                        <a href="/blog/platinum-recovery" className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 text-center hover:shadow-md hover:border-red-200 transition">
                            <div className="text-2xl mb-2">⚪</div>
                            <div className="font-bold text-gray-800 text-sm">白金回收</div>
                            <div className="text-xs text-gray-500 mt-1">Pt950/Pt900專業鑑定</div>
                        </a>
                        <a href="/blog/diamond-jewelry" className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 text-center hover:shadow-md hover:border-red-200 transition">
                            <div className="text-2xl mb-2">💎</div>
                            <div className="font-bold text-gray-800 text-sm">鑽石回收</div>
                            <div className="text-xs text-gray-500 mt-1">裸鑽/鑲嵌皆收購</div>
                        </a>
                    </div>

                    {/* 實用工具 */}
                    <h2 className="text-xl font-bold text-gray-800 mb-6 border-l-4 border-red-800 pl-3">實用工具</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10">
                        <a href="/today-gold-price" className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 hover:shadow-md hover:border-amber-200 transition flex items-center gap-3">
                            <span className="text-xl">📊</span>
                            <div><div className="font-bold text-gray-800 text-sm">今日金價</div><div className="text-xs text-gray-500">即時更新</div></div>
                        </a>
                        <a href="/gold-recycling-price" className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 hover:shadow-md hover:border-amber-200 transition flex items-center gap-3">
                            <span className="text-xl">💰</span>
                            <div><div className="font-bold text-gray-800 text-sm">黃金回收價格</div><div className="text-xs text-gray-500">各成色報價</div></div>
                        </a>
                        <a href="/gold-price-compare" className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 hover:shadow-md hover:border-amber-200 transition flex items-center gap-3">
                            <span className="text-xl">🔍</span>
                            <div><div className="font-bold text-gray-800 text-sm">金價比較</div><div className="text-xs text-gray-500">多家行情比較</div></div>
                        </a>
                    </div>

                    {/* 精選知識文章 */}
                    <h2 className="text-xl font-bold text-gray-800 mb-6 border-l-4 border-red-800 pl-3">精選知識文章</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <a href="/blog/gold-purity" className="bg-white rounded-lg border border-gray-200 px-4 py-3 hover:border-red-200 hover:shadow-sm transition text-sm text-gray-700 hover:text-red-800 font-medium">黃金純度怎麼看？9999/916/18K完整說明</a>
                        <a href="/blog/gold-vs-k-gold-vs-platinum" className="bg-white rounded-lg border border-gray-200 px-4 py-3 hover:border-red-200 hover:shadow-sm transition text-sm text-gray-700 hover:text-red-800 font-medium">K金、黃金、白金有什麼不同？</a>
                        <a href="/blog/gold-price-guide-2026" className="bg-white rounded-lg border border-gray-200 px-4 py-3 hover:border-red-200 hover:shadow-sm transition text-sm text-gray-700 hover:text-red-800 font-medium">2026年黃金回收完整指南</a>
                        <a href="/blog/sell-gold-checklist-2026" className="bg-white rounded-lg border border-gray-200 px-4 py-3 hover:border-red-200 hover:shadow-sm transition text-sm text-gray-700 hover:text-red-800 font-medium">賣黃金前必看：2026年完整清單</a>
                        <a href="/blog/gold-recovery-traps" className="bg-white rounded-lg border border-gray-200 px-4 py-3 hover:border-red-200 hover:shadow-sm transition text-sm text-gray-700 hover:text-red-800 font-medium">黃金回收常見陷阱與防詐指南</a>
                        <a href="/blog/gold-id-requirement" className="bg-white rounded-lg border border-gray-200 px-4 py-3 hover:border-red-200 hover:shadow-sm transition text-sm text-gray-700 hover:text-red-800 font-medium">賣黃金需要帶什麼證件？</a>
                        <a href="/blog/gold-recycling-price-guide-2026" className="bg-white rounded-lg border border-gray-200 px-4 py-3 hover:border-red-200 hover:shadow-sm transition text-sm text-gray-700 hover:text-red-800 font-medium">黃金回收價格指南 2026</a>
                        <a href="/blog/why-some-get-better-gold-price" className="bg-white rounded-lg border border-gray-200 px-4 py-3 hover:border-red-200 hover:shadow-sm transition text-sm text-gray-700 hover:text-red-800 font-medium">為什麼有人賣到更好的黃金價格？</a>
                    </div>
                </div>
            </section>
        )}

        {/* 首頁 Footer */}
        {view === 'home' && (
             <footer className="bg-gray-900 text-gray-300 py-10 border-t border-gray-800 text-center text-xs"><p>© 2026 巧品珠寶. 版權所有.</p></footer>
        )}
    </div>
  );
}

