import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "今日即時金價2026年4月｜台灣黃金現貨報價查詢與解讀方式",
  description:
    "怎麼看台灣即時金價？2026年4月黃金每錢現貨報價、買進賣出價差說明，以及哪裡查最快、最準。不廢話直接說清楚。",
  alternates: {
    canonical: "https://gold-tw.com/blog/realtime-gold-price-april-2026",
  },
};

export default function RealtimeGoldPriceApril2026() {
  const today = "2026-04-03";
  const publishDate = "2026-04-03T08:30:00+08:00";

  const faqItems = [
    {
      question: "台灣即時金價和國際金價有什麼關係？",
      answer:
        "台灣黃金報價基本上跟著倫敦現貨金價（LBMA）走，再加上台幣匯率換算。國際金價以每盎司美元計，換算成台灣慣用的每錢（3.75公克）就是你在銀樓看到的數字。當美元走強、台幣貶值時，台灣金價通常會跟著上漲，即使國際金價沒動。",
    },
    {
      question: "銀樓的「買進價」和「賣出價」哪個是我能拿到的錢？",
      answer:
        "你去賣金，拿到的是銀樓的「買進價」（較低）；你去買金，付出的是銀樓的「賣出價」（較高）。一般來說買賣價差在每錢200-400元之間，這就是銀樓的利潤來源。",
    },
    {
      question: "即時金價和成交金價一樣嗎？",
      answer:
        "不一定。銀樓報的即時金價是參考價，實際成交可能有微幅差異。通常整數量大的黃金條塊報價會更接近即時牌價；小件首飾因為有工費、成色差異，計算方式略有不同。",
    },
    {
      question: "凌晨或假日的即時金價可以信任嗎？",
      answer:
        "可以參考，但要注意：倫敦金市場在台灣時間週一至週六凌晨開盤，週末沒有即時報價更新。許多平台在週末顯示的是上週五收盤價，不是真正的即時價格。如果要賣金，最好在平日上午金市開盤後操作。",
    },
    {
      question: "如何判斷現在是高點還是低點，值不值得現在賣？",
      answer:
        "短期預測金價本來就很難，連分析師都常常看錯。實務建議：如果你的K金或黃金放著也不戴、不用，現在金價又在相對高位，不如換成現金更有彈性。等「完美時機」往往只是錯過。",
    },
  ];

  const priceReferenceData = [
    { item: "國際金價（參考）", value: "約 US$2,850–2,950 / 盎司", note: "2026年4月均價範圍" },
    { item: "換算台幣每公克", value: "約 NT$2,950–3,050", note: "依台幣匯率32-33換算" },
    { item: "換算台灣每錢（3.75g）", value: "約 NT$11,050–11,450", note: "銀樓買進參考價" },
    { item: "銀樓賣出價（購金用）", value: "約 NT$11,300–11,700", note: "比買進價高200–400元" },
    { item: "黃金條塊回收價", value: "約 NT$10,900–11,300 / 錢", note: "品項完整、有收據更優" },
    { item: "K金飾品回收（18K）", value: "依含金量75%計算", note: "約 NT$8,200–8,600 / 錢換算" },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        headline: "今日即時金價2026年4月｜台灣黃金現貨報價查詢與解讀方式",
        description:
          "2026年4月黃金每錢現貨報價、買進賣出價差說明，以及哪裡查最快、最準。",
        datePublished: publishDate,
        dateModified: publishDate,
        author: {
          "@type": "Organization",
          name: "巧品珠寶",
          url: "https://gold-tw.com",
        },
        publisher: {
          "@type": "Organization",
          name: "巧品珠寶",
          url: "https://gold-tw.com",
          logo: {
            "@type": "ImageObject",
            url: "https://gold-tw.com/logo.png",
          },
        },
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": "https://gold-tw.com/blog/realtime-gold-price-april-2026",
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "首頁",
            item: "https://gold-tw.com",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "黃金知識",
            item: "https://gold-tw.com/blog",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "今日即時金價2026年4月",
            item: "https://gold-tw.com/blog/realtime-gold-price-april-2026",
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: faqItems.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main style={{ maxWidth: "800px", margin: "0 auto", padding: "24px 16px", fontFamily: "sans-serif", lineHeight: "1.8", color: "#1a1a1a" }}>
        {/* Breadcrumb */}
        <nav aria-label="breadcrumb" style={{ fontSize: "14px", color: "#666", marginBottom: "24px" }}>
          <a href="/" style={{ color: "#b8860b" }}>首頁</a>
          {" › "}
          <a href="/blog" style={{ color: "#b8860b" }}>黃金知識</a>
          {" › "}
          <span>今日即時金價2026年4月</span>
        </nav>

        <h1 style={{ fontSize: "28px", fontWeight: "700", color: "#1a1a1a", marginBottom: "8px", lineHeight: "1.4" }}>
          今日即時金價2026年4月｜台灣黃金現貨報價查詢與解讀方式
        </h1>
        <p style={{ fontSize: "14px", color: "#888", marginBottom: "32px" }}>
          更新日期：{today} ｜ 巧品珠寶
        </p>

        <p>
          「今日即時金價」是很多人每天查的數字，但查到以後怎麼解讀、和銀樓報價有什麼關係、買進賣出差多少——這些搞清楚才真的有用。這篇把所有關鍵數字說清楚。
        </p>

        <h2 style={{ fontSize: "22px", fontWeight: "700", marginTop: "40px", marginBottom: "16px", borderLeft: "4px solid #b8860b", paddingLeft: "12px" }}>
          2026年4月台灣黃金即時報價參考表
        </h2>
        <p>
          以下為2026年4月參考行情區間，非即時跳動數字。實際報價以銀樓當日牌告為準。
        </p>

        {/* Data Table */}
        <div style={{ overflowX: "auto", margin: "24px 0" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "15px" }}>
            <thead>
              <tr style={{ backgroundColor: "#b8860b", color: "#fff" }}>
                <th style={{ padding: "10px 14px", textAlign: "left" }}>項目</th>
                <th style={{ padding: "10px 14px", textAlign: "left" }}>參考價格</th>
                <th style={{ padding: "10px 14px", textAlign: "left" }}>備註</th>
              </tr>
            </thead>
            <tbody>
              {priceReferenceData.map((row, i) => (
                <tr key={row.item} style={{ backgroundColor: i % 2 === 0 ? "#fffdf5" : "#fff", borderBottom: "1px solid #eee" }}>
                  <td style={{ padding: "10px 14px", fontWeight: "600" }}>{row.item}</td>
                  <td style={{ padding: "10px 14px" }}>{row.value}</td>
                  <td style={{ padding: "10px 14px", color: "#666", fontSize: "13px" }}>{row.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p style={{ fontSize: "13px", color: "#888" }}>
          ※ 數字為2026年4月參考區間，每日浮動，以現場報價為準。
        </p>

        <h2 style={{ fontSize: "22px", fontWeight: "700", marginTop: "40px", marginBottom: "16px", borderLeft: "4px solid #b8860b", paddingLeft: "12px" }}>
          即時金價怎麼查最準？4個管道比較
        </h2>
        <p>
          台灣查即時金價有幾個常用管道，各有優缺點：
        </p>
        <ul style={{ paddingLeft: "20px", margin: "16px 0" }}>
          <li style={{ marginBottom: "12px" }}>
            <strong>台灣銀行牌告匯率頁面</strong>——官方可靠，但更新頻率較低，約每小時一次
          </li>
          <li style={{ marginBottom: "12px" }}>
            <strong>Google 搜尋「gold price」</strong>——顯示倫敦現貨即時報價，但是美元/盎司，需要自行換算台幣每錢
          </li>
          <li style={{ marginBottom: "12px" }}>
            <strong>gold-tw.com 首頁</strong>——直接顯示台幣每錢參考買進賣出價，不需換算
          </li>
          <li style={{ marginBottom: "12px" }}>
            <strong>各大銀樓現場牌告</strong>——最終成交依據，其他都是參考
          </li>
        </ul>
        <p>
          結論：查數字用 gold-tw.com 最方便，但實際要賣或買，去銀樓現場確認才算數。
        </p>

        <h2 style={{ fontSize: "22px", fontWeight: "700", marginTop: "40px", marginBottom: "16px", borderLeft: "4px solid #b8860b", paddingLeft: "12px" }}>
          金價怎麼換算：盎司→公克→台灣「一錢」
        </h2>
        <p>
          國際金價報的是「美元/盎司」，台灣習慣用「每錢」。換算公式：
        </p>
        <div style={{ backgroundColor: "#fffdf5", border: "1px solid #e8d5a0", borderRadius: "8px", padding: "20px", margin: "20px 0", fontFamily: "monospace", fontSize: "15px", lineHeight: "2" }}>
          <p style={{ margin: "4px 0" }}>1 盎司 = 31.1035 公克</p>
          <p style={{ margin: "4px 0" }}>1 錢（台灣）= 3.75 公克</p>
          <p style={{ margin: "4px 0" }}>1 盎司 ÷ 31.1035 × 3.75 = 0.1206 盎司 / 錢</p>
          <p style={{ margin: "4px 0", fontWeight: "700", borderTop: "1px solid #e8d5a0", paddingTop: "8px", marginTop: "8px" }}>
            台灣每錢金價 = 國際金價(USD/oz) × 0.1206 × 台幣匯率
          </p>
        </div>
        <p>
          以2026年4月均價 US$2,900 × 0.1206 × 32.5匯率 ≈ 每錢約 NT$11,370。這個數字和你在銀樓看到的牌告差不多，誤差在正常範圍內。
        </p>

        <h2 style={{ fontSize: "22px", fontWeight: "700", marginTop: "40px", marginBottom: "16px", borderLeft: "4px solid #b8860b", paddingLeft: "12px" }}>
          影響今日金價的3個關鍵因素
        </h2>
        <p>
          2026年4月金價維持高檔，主要受以下因素驅動：
        </p>
        <ol style={{ paddingLeft: "20px", margin: "16px 0" }}>
          <li style={{ marginBottom: "12px" }}>
            <strong>美聯儲利率政策</strong>：市場持續預期降息，資金流入黃金避險
          </li>
          <li style={{ marginBottom: "12px" }}>
            <strong>全球央行購金</strong>：中國、印度、波蘭等央行持續增持黃金儲備，需求強勁
          </li>
          <li style={{ marginBottom: "12px" }}>
            <strong>台幣匯率</strong>：台幣若貶值，即使國際金價不動，台灣金價也會上漲
          </li>
        </ol>
        <p>
          這三個因素短期內沒有明顯反轉跡象，2026年黃金整體偏多格局仍在。
        </p>

        {/* FAQ Section */}
        <h2 style={{ fontSize: "22px", fontWeight: "700", marginTop: "40px", marginBottom: "24px", borderLeft: "4px solid #b8860b", paddingLeft: "12px" }}>
          常見問題 FAQ
        </h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          {faqItems.map((faq, i) => (
            <div key={i} style={{ backgroundColor: "#fffdf5", borderRadius: "8px", padding: "20px", border: "1px solid #e8d5a0" }}>
              <h3 style={{ fontSize: "16px", fontWeight: "700", marginBottom: "10px", color: "#1a1a1a" }}>
                Q{i + 1}：{faq.question}
              </h3>
              <p style={{ fontSize: "15px", color: "#444", margin: 0 }}>{faq.answer}</p>
            </div>
          ))}
        </div>

        {/* Internal Links */}
        <h2 style={{ fontSize: "22px", fontWeight: "700", marginTop: "40px", marginBottom: "16px", borderLeft: "4px solid #b8860b", paddingLeft: "12px" }}>
          延伸閱讀
        </h2>
        <ul style={{ paddingLeft: "0", listStyle: "none", margin: "0", display: "flex", flexDirection: "column", gap: "12px" }}>
          <li>
            <a href="/blog/gold-measurement-unit-converter" style={{ color: "#b8860b", textDecoration: "none", fontWeight: "600" }}>
              ▶ 黃金單位換算完整對照表：錢/兩/盎司/公克
            </a>
          </li>
          <li>
            <a href="/blog/today-gold-sell-price-per-qian-2026" style={{ color: "#b8860b", textDecoration: "none", fontWeight: "600" }}>
              ▶ 今日黃金賣出價格一錢多少？2026年即時查詢
            </a>
          </li>
          <li>
            <a href="/blog/gold-price-forecast-2026" style={{ color: "#b8860b", textDecoration: "none", fontWeight: "600" }}>
              ▶ 2026年黃金價格走勢預測分析
            </a>
          </li>
          <li>
            <a href="/blog/before-selling-gold" style={{ color: "#b8860b", textDecoration: "none", fontWeight: "600" }}>
              ▶ 賣黃金前必讀：這幾件事先搞清楚
            </a>
          </li>
        </ul>

        {/* CTA */}
        <div style={{ backgroundColor: "#1a1a1a", color: "#fff", borderRadius: "12px", padding: "28px", marginTop: "48px", textAlign: "center" }}>
          <h3 style={{ fontSize: "20px", fontWeight: "700", marginBottom: "12px" }}>想知道你的黃金今天值多少？</h3>
          <p style={{ fontSize: "15px", color: "#ccc", marginBottom: "20px" }}>
            巧品珠寶｜台北市大安區｜黃金高價收購，當場報價當場付款
          </p>
          <a
            href="/"
            style={{ display: "inline-block", backgroundColor: "#b8860b", color: "#fff", padding: "12px 32px", borderRadius: "8px", textDecoration: "none", fontWeight: "700", fontSize: "16px" }}
          >
            查看今日即時金價報價
          </a>
        </div>
      </main>
    </>
  );
}
