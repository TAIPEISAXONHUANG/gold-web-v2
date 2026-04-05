import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "K金回收台灣2026年4月｜18K、14K、10K收購流程與即時行情",
  description:
    "K金回收怎麼賣最划算？2026年4月台灣K金回收行情、計算方式與注意事項一次說清楚。18K、14K、10K不扣耗損，秤重全程透明。",
  alternates: {
    canonical: "https://gold-tw.com/blog/k-gold-recycle-taiwan-april-2026",
  },
  openGraph: {
    title: 'K金回收台灣2026年4月｜18K、14K、10K收購流程與即時行情',
    description: 'K金回收怎麼賣最划算？2026年4月台灣K金回收行情、計算方式與注意事項一次說清楚。18K、14K、10K不扣耗損，秤重全程透明。',
    type: 'article',
    url: 'https://www.gold-tw.com/blog/k-gold-recycle-taiwan-april-2026',
    siteName: '巧品珠寶',
    publishedTime: '2026-03-19T00:00:00+08:00',
    modifiedTime: '2026-03-19T00:00:00+08:00',
  },
};

// lastModified: 2026-03-19
export default function KGoldRecycleTaiwanApril2026() {
  const today = "2026-04-03";
  const publishDate = "2026-04-03T08:00:00+08:00";

  const faqItems = [
    {
      question: "K金回收和純金回收計算方式有什麼不同？",
      answer:
        "純金（999、9999）直接依當日金價計算。K金需先換算含金率：18K含金75%、14K含金58.5%、10K含金41.7%，再乘以當日純金回收價。含金率越低，回收價越低，這是數學問題，不是店家在坑你。",
    },
    {
      question: "K金回收需要帶什麼證件？",
      answer:
        "依台灣法規，黃金回收需出示身分證正本。外籍人士持護照或居留證均可。沒有購買憑證也沒關係，銀樓不會要求出示發票才收購。",
    },
    {
      question: "K金回收前要不要先清洗？",
      answer:
        "不用特別清洗，但可以用軟布擦掉明顯污垢。秤重時重量差異不大，強烈清洗反而可能傷到K金表面，不划算。",
    },
    {
      question: "K金上的鑽石或寶石可以一起賣嗎？",
      answer:
        "通常不行，銀樓只收K金金屬部分，鑲嵌的寶石、鑽石需另外評估。如果是GIA鑑定鑽石，可以詢問是否有收購意願，但不保證一定收。",
    },
    {
      question: "K金回收多久可以拿到錢？",
      answer:
        "當場秤重、當場報價、當場付款，整個流程15分鐘內完成。不需要等鑑定、不需要留件，跟典當完全不同概念。",
    },
  ];

  const tableData = [
    { type: "10K金", purity: "41.7%", approxPricePerGram: "約 NT$1,250–1,400" },
    { type: "14K金", purity: "58.5%", approxPricePerGram: "約 NT$1,750–1,950" },
    { type: "18K金", purity: "75%", approxPricePerGram: "約 NT$2,250–2,500" },
    { type: "20K金", purity: "83.3%", approxPricePerGram: "約 NT$2,500–2,750" },
    { type: "22K金", purity: "91.7%", approxPricePerGram: "約 NT$2,750–3,000" },
    { type: "24K純金", purity: "99.9%", approxPricePerGram: "約 NT$3,000–3,300" },
  ];

;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        headline: "K金回收台灣2026年4月｜18K、14K、10K收購流程與即時行情",
        description:
          "2026年4月台灣K金回收行情、計算方式與注意事項一次說清楚。18K、14K、10K不扣耗損，秤重全程透明。",
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
          "@id":
            "https://gold-tw.com/blog/k-gold-recycle-taiwan-april-2026",
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
            name: "K金回收台灣2026年4月",
            item: "https://gold-tw.com/blog/k-gold-recycle-taiwan-april-2026",
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
  }) }}
      />
      <main style={{ maxWidth: "800px", margin: "0 auto", padding: "24px 16px", fontFamily: "sans-serif", lineHeight: "1.8", color: "#1a1a1a" }}>
        {/* Breadcrumb */}
        <nav aria-label="breadcrumb" style={{ fontSize: "14px", color: "#666", marginBottom: "24px" }}>
          <a href="/" style={{ color: "#b8860b" }}>首頁</a>
          {" › "}
          <a href="/blog" style={{ color: "#b8860b" }}>黃金知識</a>
          {" › "}
          <span>K金回收台灣2026年4月</span>
        </nav>

        <h1 style={{ fontSize: "28px", fontWeight: "700", color: "#1a1a1a", marginBottom: "8px", lineHeight: "1.4" }}>
          K金回收台灣2026年4月｜18K、14K、10K收購流程與即時行情
        </h1>
        <p style={{ fontSize: "14px", color: "#888", marginBottom: "32px" }}>
          更新日期：{today} ｜ 巧品珠寶
        </p>

        <p>
          K金（Karat Gold）是台灣最常見的首飾材質，但很多人拿去賣的時候搞不清楚自己的K金值多少錢、會不會被扣耗損、需要什麼證件。這篇把流程全部說清楚，數字說話。
        </p>

        <h2 style={{ fontSize: "22px", fontWeight: "700", marginTop: "40px", marginBottom: "16px", borderLeft: "4px solid #b8860b", paddingLeft: "12px" }}>K金含金率一覽：幾K就值幾成金怎麼看？</h2>
        <p>
          K金回收的核心邏輯很簡單：含金率 × 當日純金回收價 × 克重 = 你拿到的錢。沒有其他變數。
        </p>

        {/* Data Table */}
        <div style={{ overflowX: "auto", margin: "24px 0" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "15px" }}>
            <thead>
              <tr style={{ backgroundColor: "#b8860b", color: "#fff" }}>
                <th style={{ padding: "10px 14px", textAlign: "left" }}>K金種類</th>
                <th style={{ padding: "10px 14px", textAlign: "left" }}>含金率</th>
                <th style={{ padding: "10px 14px", textAlign: "left" }}>2026年4月參考回收價（每公克）</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((row, i) => (
                <tr key={row.type} style={{ backgroundColor: i % 2 === 0 ? "#fffdf5" : "#fff", borderBottom: "1px solid #eee" }}>
                  <td style={{ padding: "10px 14px", fontWeight: i === tableData.length - 1 ? "700" : "400" }}>{row.type}</td>
                  <td style={{ padding: "10px 14px" }}>{row.purity}</td>
                  <td style={{ padding: "10px 14px" }}>{row.approxPricePerGram}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p style={{ fontSize: "13px", color: "#888" }}>
          ※ 以上為2026年4月參考行情，實際價格依當日國際金價浮動，以現場報價為準。
        </p>

        <h2 style={{ fontSize: "22px", fontWeight: "700", marginTop: "40px", marginBottom: "16px", borderLeft: "4px solid #b8860b", paddingLeft: "12px" }}>
          K金回收3個步驟，15分鐘拿到現金
        有哪些？</h2>
        <p>
          很多人以為賣K金很麻煩，其實流程非常直接：
        </p>
        <ol style={{ paddingLeft: "20px", margin: "16px 0" }}>
          <li style={{ marginBottom: "12px" }}>
            <strong>帶K金飾品 + 身分證</strong>來店——不需要購買憑證，不需要預約
          </li>
          <li style={{ marginBottom: "12px" }}>
            <strong>當場秤重</strong>——精密電子秤，你可以盯著看，重量透明
          </li>
          <li style={{ marginBottom: "12px" }}>
            <strong>確認成色 + 報價 + 付款</strong>——如果接受報價，當場付現金或轉帳
          </li>
        </ol>
        <p>
          從進門到拿錢，正常情況下15分鐘內完成。不需要留件，不需要等鑑定報告。
        </p>

        <h2 style={{ fontSize: "22px", fontWeight: "700", marginTop: "40px", marginBottom: "16px", borderLeft: "4px solid #b8860b", paddingLeft: "12px" }}>
          K金回收常見陷阱：扣耗損是最大坑
        有哪些？</h2>
        <p>
          台灣部分銀樓在回收K金時會「扣耗損」，理由是K金需要重新冶煉，會有5%左右的損失。這個說法不完全是假的，但是——熔煉的損耗是店家的成本，不應該轉嫁給賣家。
        </p>
        <p>
          直接問清楚：「你們扣耗損嗎？」如果答案是「會」，你拿到的錢就比實際少5%，換算下來差很多。
        </p>
        <p>
          巧品珠寶不扣耗損，秤重全程讓你看著，報價有一說一。
        </p>

        <h2 style={{ fontSize: "22px", fontWeight: "700", marginTop: "40px", marginBottom: "16px", borderLeft: "4px solid #b8860b", paddingLeft: "12px" }}>
          K金成色怎麼辨認？看印記最可靠
        </h2>
        <p>
          K金飾品上通常會有成色印記，常見的有：
        </p>
        <ul style={{ paddingLeft: "20px", margin: "16px 0" }}>
          <li style={{ marginBottom: "8px" }}>
            <strong>750 / 18K</strong>——含金75%，最常見的K金
          </li>
          <li style={{ marginBottom: "8px" }}>
            <strong>585 / 14K</strong>——含金58.5%，歐美品牌常用
          </li>
          <li style={{ marginBottom: "8px" }}>
            <strong>416 / 10K</strong>——含金41.7%，美規最低K金
          </li>
          <li style={{ marginBottom: "8px" }}>
            <strong>AU750 / Au750</strong>——等於18K，標法不同但含量相同
          </li>
        </ul>
        <p>
          沒有印記也沒關係，銀樓可以用試金石或X射線螢光儀（XRF）鑑定成色，結果幾分鐘就出來。
        </p>

        <h2 style={{ fontSize: "22px", fontWeight: "700", marginTop: "40px", marginBottom: "16px", borderLeft: "4px solid #b8860b", paddingLeft: "12px" }}>
          2026年4月K金回收行情為什麼比去年高？
        </h2>
        <p>
          2026年國際金價持續維持在高檔，主要受到美聯儲降息預期、地緣政治不確定性和央行黃金儲備增加等因素支撐。台灣黃金回收價格跟著國際盎司價走，2026年4月的K金回收價格比2025年同期高出約12-15%。
        </p>
        <p>
          換句話說，現在是賣K金的好時機。壓箱底的舊飾品、不戴的K金手環、斷了的K金鍊子，現在拿出來換現金，划算。
        </p>

        {/* FAQ Section */}
        <h2 style={{ fontSize: "22px", fontWeight: "700", marginTop: "40px", marginBottom: "24px", borderLeft: "4px solid #b8860b", paddingLeft: "12px" }}>常見問題FAQ</h2>
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
        <h2 style={{ fontSize: "22px", fontWeight: "700", marginTop: "40px", marginBottom: "16px", borderLeft: "4px solid #b8860b", paddingLeft: "12px" }}>延伸閱讀</h2>
        <ul style={{ paddingLeft: "0", listStyle: "none", margin: "0", display: "flex", flexDirection: "column", gap: "12px" }}>
          <li>
            <a href="/blog/au750-gold-price-guide" style={{ color: "#b8860b", textDecoration: "none", fontWeight: "600" }}>
              ▶ AU750是什麼？含金量與回收價格完整說明
            </a>
          </li>
          <li>
            <a href="/blog/k-gold-recovery-price-2026" style={{ color: "#b8860b", textDecoration: "none", fontWeight: "600" }}>
              ▶ K金回收價格2026年完整行情表
            </a>
          </li>
          <li>
            <a href="/blog/gold-recovery-traps" style={{ color: "#b8860b", textDecoration: "none", fontWeight: "600" }}>
              ▶ 黃金回收陷阱大公開：這5件事要注意
            </a>
          </li>
          <li>
            <a href="/blog/today-gold-sell-price-per-qian-2026" style={{ color: "#b8860b", textDecoration: "none", fontWeight: "600" }}>
              ▶ 今日黃金賣出價格一錢多少錢？2026即時查詢
            </a>
          </li>
        </ul>

        {/* CTA */}
        <div style={{ backgroundColor: "#1a1a1a", color: "#fff", borderRadius: "12px", padding: "28px", marginTop: "48px", textAlign: "center" }}>
          <h3 style={{ fontSize: "20px", fontWeight: "700", marginBottom: "12px" }}>手上有K金想出手？</h3>
          <p style={{ fontSize: "15px", color: "#ccc", marginBottom: "20px" }}>
            巧品珠寶｜台北市大安區｜不扣耗損，秤重全程透明，當場付款
          </p>
          <a
            href="/"
            style={{ display: "inline-block", backgroundColor: "#b8860b", color: "#fff", padding: "12px 32px", borderRadius: "8px", textDecoration: "none", fontWeight: "700", fontSize: "16px" }}
          >
            查看今日K金回收報價
          </a>
        </div>
      </main>
    </>
  );
}
