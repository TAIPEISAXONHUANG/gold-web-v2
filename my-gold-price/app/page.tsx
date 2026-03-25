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
      "acceptedAnswer": { "@type": "Answer", "text": "黃金回收價格的計算公式為：當日國際金價（以台幣換算）× 重量（公克）× 純度係數。以9999純金為例，1公克回收價約等於當日牌價的97-99%；18K金（750/1000純度）則為牌價的75%。巧品珠寶採用完全透明的計價方式：現場秤重、現場查詢金價、現場計算，全程您都可以親眼確認，不扣秤、不扣耗損、即時報價。" }
    },
    {
      "@type": "Question",
      "name": "賣黃金需要帶什麼證件？",
      "acceptedAnswer": { "@type": "Answer", "text": "依據台灣政府「貴金屬實名制」規定，賣黃金必須攜帶：①身份證正本（必要）②第二證件，如健保卡、駕照、護照擇一。外籍人士請攜帶居留證或護照。未滿18歲需由法定代理人陪同並出示雙方證件。這是政府規定的反洗錢法律程序，所有正規銀樓都必須執行，巧品珠寶依法保障您的個資安全。" }
    },
    {
      "@type": "Question",
      "name": "你們的回收價格比別家好嗎？",
      "acceptedAnswer": { "@type": "Answer", "text": "巧品珠寶提供台灣市場頂端回收價，原因有三：①直接與國際金價連動，無中間人抽成；②不扣秤、不扣耗損，業界最透明；③現場競價，帶報價單來我們願意比價。建議您賣金前多跑幾家比較，也可以先用LINE傳照片讓我們初步報價。我們有信心給您滿意的價格，如果比不過同業，我們不強留。" }
    },
    {
      "@type": "Question",
      "name": "K金、18K金可以回收嗎？",
      "acceptedAnswer": { "@type": "Answer", "text": "完全可以！巧品珠寶回收所有規格的K金：24K（9999純金）、22K（916）、18K（750）、14K（585）、10K（416）、9K（375）。每種K金的回收價格按純度比例精確計算。現場使用XRF螢光分析儀精確鑑定含金量，不依賴肉眼判斷，確保您獲得最公平的報價。即使是無印記、損壞或款式老舊的K金首飾，同樣高價回收。" }
    },
    {
      "@type": "Question",
      "name": "黃金純度怎麼辨識？",
      "acceptedAnswer": { "@type": "Answer", "text": "黃金純度的辨識方法有幾種：①看印記——金飾上通常刻有999、9999、916、750、585等數字，代表千分之幾含金量；②看顏色——純度越高顏色越深黃，18K以下會偏白或偏玫瑰色；③儀器鑑定——最精確的方式是使用XRF螢光分析儀，非破壞性檢測，2分鐘出結果。巧品珠寶提供免費鑑定服務，不購買也可以來確認您手上金飾的真實純度。" }
    },
    {
      "@type": "Question",
      "name": "賣黃金要本人到場嗎？",
      "acceptedAnswer": { "@type": "Answer", "text": "是的，賣黃金必須本人到場，並攜帶身份證進行實名制登記，這是政府規定的法定程序，所有銀樓都須遵守。如果您人在外縣市或行動不便，巧品珠寶提供「郵寄回收」服務：拍照報價確認後，用掛號郵寄到店，驗收無誤當日電匯款項，全程文字記錄保障雙方權益。詳情請先透過LINE（@QPD888）聯繫確認流程。" }
    },
    {
      "@type": "Question",
      "name": "你們在哪裡？交通怎麼走？",
      "acceptedAnswer": { "@type": "Answer", "text": "巧品珠寶位於台北市大安區濟南路三段62-1號1樓，鄰近台北地標帝寶大廈。交通方式：①捷運板南線「忠孝新生站」3號出口，步行約5分鐘；②捷運文湖線「大安站」，步行約8分鐘；③公車路線：至忠孝新生路口下車。營業時間：每日11:00至凌晨03:30（含假日）。建議事先透過LINE預約，避免等候。" }
    },
    {
      "@type": "Question",
      "name": "可以線上估價嗎？",
      "acceptedAnswer": { "@type": "Answer", "text": "可以！巧品珠寶提供免費LINE線上初步估價服務。步驟：①加LINE好友（帳號：@QPD888）；②拍攝金飾的正面、側面、印記特寫，共3-5張清晰照片；③說明物品材質、重量（如有磅秤）、購買時間；④我們會在1小時內回覆初步報價範圍。注意：線上報價為參考值，最終成交價以現場秤重鑑定為準，到店後如有差異我們會詳細說明。" }
    },
    {
      "@type": "Question",
      "name": "你們是合法的銀樓嗎？",
      "acceptedAnswer": { "@type": "Answer", "text": "巧品珠寶是依法立案的合法珠寶銀樓，持有台北市政府核發的商業登記執照。我們嚴格遵守《銀行法》及《洗錢防制法》相關規定，執行貴金屬買賣實名制登記，並依規定申報大額交易。現場配備專業XRF螢光分析儀及精密電子秤，所有交易均開立明細收據，交易記錄依法保存。10年來服務超過萬名客戶，Google評分4.8顆星（86則評論）可供參考。" }
    },
    {
      "@type": "Question",
      "name": "交易後可以反悔嗎？",
      "acceptedAnswer": { "@type": "Answer", "text": "黃金買賣屬於現貨交易，價格隨時波動，一旦雙方確認成交並完成付款，交易即告成立，依一般商業慣例不接受反悔退款。正因如此，我們在交易前會讓您充分了解計價方式、現場確認重量與純度、確認金額後再簽字交易。如果您對報價不滿意，交易前隨時可以離開，我們絕不強迫。建議您在確認一切無誤後再完成交易。" }
    },
    {
      "@type": "Question",
      "name": "白金（鉑金）和黃金的回收價格一樣嗎？",
      "acceptedAnswer": { "@type": "Answer", "text": "不一樣。白金（鉑金，英文Platinum，元素符號Pt）是完全不同的金屬，與黃金有獨立的市場報價。2026年白金回收價約為黃金的70-80%，主要受汽車工業用鈀金需求影響。判斷方式：看戒指/飾品上的印記，Pt950、Pt900是真正的鉑金；750WG或18KW則是白K金（含75%黃金）。兩者價差很大，來店免費鑑定讓您一清二楚。" }
    },
    {
      "@type": "Question",
      "name": "黃金回收流程是什麼？需要多久時間？",
      "acceptedAnswer": { "@type": "Answer", "text": "巧品珠寶的黃金回收流程分為四步：①攜帶物品與雙證件到店；②儀器鑑定純度（XRF約2分鐘）+ 精密電子秤秤重（1分鐘）；③依當日金價計算報價，向您說明計算方式；④確認成交後簽署交易單，當場現金支付。全程約10-20分鐘即可完成。如果物品較多或需要逐件評估，可能需要30-60分鐘，建議事先預約減少等候時間。" }
    },
    {
      "@type": "Question",
      "name": "賣黃金要繳稅嗎？",
      "acceptedAnswer": { "@type": "Answer", "text": "個人出售黃金的稅務規定：①個人財產交易所得——賣出金額超過購買成本才有獲利，該獲利需申報所得稅，但實務上因保留購買憑證困難，執行率極低；②無購買憑證時，國稅局按收入6%估算成本；③單筆交易50萬元以上，銀樓依法須向主管機關申報，但不等於您需要繳稅；④繼承黃金納入遺產稅計算。建議金額較大者諮詢會計師，巧品珠寶依法開立交易明細供您留存。" }
    },
    {
      "@type": "Question",
      "name": "台北哪裡可以回收黃金？",
      "acceptedAnswer": { "@type": "Answer", "text": "台北黃金回收可選擇：①銀行黃金存摺（台灣銀行、兆豐等）——手續麻煩但有保障；②當鋪——回收價偏低；③珠寶銀樓——行情好、速度快，是大多數人的選擇。巧品珠寶位於台北市大安區，捷運忠孝新生站3號出口步行5分鐘，每日11:00開業至凌晨03:30，方便各時段前來。服務範圍涵蓋台北市全區及新北市，外縣市客戶亦提供郵寄回收服務。" }
    },
    {
      "@type": "Question",
      "name": "鑽石可以回收嗎？回收價格怎麼算？",
      "acceptedAnswer": { "@type": "Answer", "text": "鑽石可以回收，但要有合理預期：鑽石的零售價含大量通路費，回收價通常為原購買價的20-40%，這是全球行情。影響鑽石回收價的因素：①重量（克拉數）——越大越有價值；②4C評級（Cut切工、Color顏色、Clarity淨度、Carat重量）；③是否附有GIA或IGI等國際鑑定書——有証書可提高報價10-30%。巧品珠寶提供免費鑑定評估，建議攜帶購買時的鑑定書一同前來。" }
    },
    {
      "@type": "Question",
      "name": "黃金飾品損壞、斷掉、有瑕疵還能回收嗎？",
      "acceptedAnswer": { "@type": "Answer", "text": "完全可以！黃金回收看的是金屬含量，不看外觀完整度。無論是斷掉的項鍊、壓扁的金條、磨損的戒指、混有焊料的舊飾品，只要是真金，都可以依純度和重量正常回收。唯一影響價格的是：混入大量非金屬材料（如大型寶石鑲座）會先扣除非金屬重量。建議把所有舊金飾一起帶來，一次評估，省時又方便。" }
    }
  ]
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "巧品珠寶回收服務",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "item": {
        "@type": "Service",
        "name": "黃金回收",
        "description": "9999純金、足金、黃金飾品高價回收，即時金價計算，現場現金支付",
        "provider": { "@id": "https://www.gold-tw.com/#business" },
        "areaServed": { "@type": "City", "name": "台北市" },
        "url": "https://www.gold-tw.com/sell-gold-guide"
      }
    },
    {
      "@type": "ListItem",
      "position": 2,
      "item": {
        "@type": "Service",
        "name": "K金回收",
        "description": "18K、14K、10K、9K等各種K金首飾專業鑑定回收，按純度比例計算最高價",
        "provider": { "@id": "https://www.gold-tw.com/#business" },
        "areaServed": { "@type": "City", "name": "台北市" },
        "url": "https://www.gold-tw.com/blog/karat-gold-recovery"
      }
    },
    {
      "@type": "ListItem",
      "position": 3,
      "item": {
        "@type": "Service",
        "name": "白金（鉑金）回收",
        "description": "Pt950、Pt900白金（鉑金）首飾專業鑑定與高價回收",
        "provider": { "@id": "https://www.gold-tw.com/#business" },
        "areaServed": { "@type": "City", "name": "台北市" },
        "url": "https://www.gold-tw.com/blog/platinum-recovery"
      }
    },
    {
      "@type": "ListItem",
      "position": 4,
      "item": {
        "@type": "Service",
        "name": "鑽石回收",
        "description": "各尺寸鑽石、裸鑽、鑲嵌鑽石首飾專業評估與高價收購",
        "provider": { "@id": "https://www.gold-tw.com/#business" },
        "areaServed": { "@type": "City", "name": "台北市" },
        "url": "https://www.gold-tw.com/blog/diamond-jewelry"
      }
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <main>
        <ClientPage initialData={initialData} />
      </main>
    </>
  );
}
