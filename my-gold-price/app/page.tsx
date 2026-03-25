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

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "黃金回收價格怎麼計算？",
      "acceptedAnswer": { "@type": "Answer", "text": "黃金回收價格 = 當日牌價 × 重量 × 純度。我們採用公開透明的計價方式，足9999不扣耗損，當日現金支付。" }
    },
    {
      "@type": "Question",
      "name": "賣黃金需要帶什麼證件？",
      "acceptedAnswer": { "@type": "Answer", "text": "請攜帶身份證+雙證件，我們需要進行實名制登記，這是政府規定的法定程序。" }
    },
    {
      "@type": "Question",
      "name": "你們的回收價格比別家好嗎？",
      "acceptedAnswer": { "@type": "Answer", "text": "我們提供台灣市場頂端回收價，不扣秤、不扣耗損公開透明。建議您多方比價後再決定。" }
    },
    {
      "@type": "Question",
      "name": "K金、18K金可以回收嗎？",
      "acceptedAnswer": { "@type": "Answer", "text": "當然可以！我們回收各種K金：18K、14K、10K、9K等，依據純度比例計算價格。" }
    },
    {
      "@type": "Question",
      "name": "黃金純度怎麼辨識？",
      "acceptedAnswer": { "@type": "Answer", "text": "我們現場有專業儀器檢測，同時提供水測、火燒等多重檢驗方式，讓您安心見證。" }
    },
    {
      "@type": "Question",
      "name": "賣黃金要本人到場嗎？",
      "acceptedAnswer": { "@type": "Answer", "text": "是的，需要本人到場並出示身份證正本進行實名登記，也可以使用寄送他縣市也能幫您高價收購。" }
    },
    {
      "@type": "Question",
      "name": "你們在哪裡？",
      "acceptedAnswer": { "@type": "Answer", "text": "台北市大安區濟南路三段62-1號1樓（帝寶後面），營業時間 11:00-03:30。" }
    },
    {
      "@type": "Question",
      "name": "可以線上估價嗎？",
      "acceptedAnswer": { "@type": "Answer", "text": "可以透過LINE（@QPD888）傳送物品照片，我們會先提供初步估價參考。" }
    },
    {
      "@type": "Question",
      "name": "你們是合法的嗎？",
      "acceptedAnswer": { "@type": "Answer", "text": "我們是合法政府立案的珠寶銀樓，合規登記的珠寶銀樓，現場有專業儀器鑑定+專業鑑定師駐點服務。" }
    },
    {
      "@type": "Question",
      "name": "交易後可以反悔嗎？",
      "acceptedAnswer": { "@type": "Answer", "text": "黃金交易為買賣行為，一旦完成無法反悔，建議您確認後再進行交易。" }
    }
  ]
};

export default async function Page() {
  const initialData = await getGoldData();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <main>
        <ClientPage initialData={initialData} />
      </main>
    </>
  );
}
