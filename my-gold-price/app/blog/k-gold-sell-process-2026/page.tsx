import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "賣黃金流程2026年完整攻略｜從估價到拿現金全步驟說明",
  description:
    "第一次賣黃金不知道怎麼辦？2026年台灣賣黃金完整流程：帶什麼、怎麼估價、如何比價，以及哪些坑要避開。一篇看懂。",
  alternates: {
    canonical: "https://gold-tw.com/blog/k-gold-sell-process-2026",
  },
};

export default function KGoldSellProcess2026() {
  const today = "2026-04-03";
  const publishDate = "2026-04-03T09:00:00+08:00";

  const faqItems = [
    {
      question: "賣黃金需要帶購買憑證嗎？",
      answer:
        "不需要。台灣銀樓收購黃金只需要身分證正本，不要求出示發票或購買證明。無論是多少年前買的、還是親友贈送的，只要有身分證就可以賣。外籍人士持護照或居留證均可。",
    },
    {
      question: "賣黃金的錢是當場拿，還是要等幾天？",
      answer:
        "正規銀樓是當場付款。秤重→確認成色→報價→你同意→當場付現金或轉帳，整個流程15-30分鐘完成，不需要留件也不需要等匯款。如果有店家說要「等3天確認後再付款」，請直接換一家。",
    },
    {
      question: "賣黃金前要先清洗飾品嗎？",
      answer:
        "不需要特別清洗，但可以用軟布擦掉明顯污垢和灰塵。銀樓秤重前通常不會額外清洗，因為水分或清潔劑可能影響重量讀數。保持飾品原本狀態即可。",
    },
    {
      question: "黃金飾品壞掉、斷掉還能賣嗎？",
      answer:
        "可以。銀樓回收的是黃金金屬本身，不是飾品的完整性。斷掉的項鍊、壓扁的戒指、缺少扣環的手環，全部都可以正常回收，價格依重量和成色計算，和是否損壞無關。",
    },
    {
      question: "一次賣很多黃金，報價會比較好嗎？",
      answer:
        "有可能，但幅度不大。一般銀樓的回收價格主要跟當日金價連動，量大的話有時可以爭取少一點點的價差，但不會有大幅優惠。更重要的是找不扣耗損的銀樓，比「量大優惠」更實際。",
    },
  ];

  const processSteps = [
    {
      step: "Step 1",
      title: "確認黃金種類和數量",
      desc: "純金（999/9999）、K金（10K/14K/18K/24K）、金條、金幣、寺廟金牌，種類不同計算方式不同。先大概分類再去銀樓，節省現場時間。",
    },
    {
      step: "Step 2",
      title: "查當日金價，心裡有個底",
      desc: "去銀樓前先查一下今日黃金回收參考價，心裡有個數字基準。銀樓報價低於市場均價超過5%，要有警覺。",
    },
    {
      step: "Step 3",
      title: "帶身分證正本去銀樓",
      desc: "依台灣法規，黃金回收需要登記身分資料。身分證正本是唯一必要文件，其他都不用帶。",
    },
    {
      step: "Step 4",
      title: "現場秤重 + 確認成色",
      desc: "銀樓用精密電子秤當場秤重，全程透明。純金直接報價；K金需要確認成色（看印記或用XRF儀器），通常幾分鐘內完成。",
    },
    {
      step: "Step 5",
      title: "確認報價計算方式",
      desc: "問清楚：有沒有扣耗損？是不是按照全重計算？有沒有額外手續費？數字確認沒問題，同意後當場付款。",
    },
  ];

  const priceComparisonData = [
    { item: "純金999/9999", calcMethod: "全重 × 當日回收價", note: "最直接，沒有折扣" },
    { item: "18K金（Au750）", calcMethod: "全重 × 75% × 當日回收價", note: "含金率75%" },
    { item: "14K金", calcMethod: "全重 × 58.5% × 當日回收價", note: "含金率58.5%" },
    { item: "10K金", calcMethod: "全重 × 41.7% × 當日回收價", note: "含金率最低" },
    { item: "寺廟金牌", calcMethod: "依成色鑑定，通常接近純金", note: "需確認是否為純金打造" },
    { item: "金幣/金條（有收據）", calcMethod: "全重 × 當日回收價，加成空間較大", note: "有台灣銀行購買憑證更好" },
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
        headline: "賣黃金流程2026年完整攻略｜從估價到拿現金全步驟說明",
        description:
          "2026年台灣賣黃金完整流程：帶什麼、怎麼估價、如何比價，以及哪些坑要避開。一篇看懂。",
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
          "@id": "https://gold-tw.com/blog/k-gold-sell-process-2026",
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
            name: "賣黃金流程2026年完整攻略",
            item: "https://gold-tw.com/blog/k-gold-sell-process-2026",
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
          <span>賣黃金流程2026年完整攻略</span>
        </nav>

        <h1 style={{ fontSize: "28px", fontWeight: "700", color: "#1a1a1a", marginBottom: "8px", lineHeight: "1.4" }}>
          賣黃金流程2026年完整攻略｜從估價到拿現金全步驟說明
        </h1>
        <p style={{ fontSize: "14px", color: "#888", marginBottom: "32px" }}>
          更新日期：{today} ｜ 巧品珠寶
        </p>

        <p>
          每年都有很多人是第一次賣黃金，不知道要帶什麼、流程是什麼、會不會被坑。這篇把整個流程從頭說到尾，包括常見陷阱和你應該問的問題，讓你去銀樓不心慌。
        </p>

        {/* Step-by-step process */}
        <h2 style={{ fontSize: "22px", fontWeight: "700", marginTop: "40px", marginBottom: "16px", borderLeft: "4px solid #b8860b", paddingLeft: "12px" }}>
          賣黃金完整流程：5個步驟
        </h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "16px", margin: "20px 0" }}>
          {processSteps.map((s, i) => (
            <div key={i} style={{ display: "flex", gap: "16px", alignItems: "flex-start", backgroundColor: "#fffdf5", borderRadius: "8px", padding: "16px", border: "1px solid #e8d5a0" }}>
              <div style={{ backgroundColor: "#b8860b", color: "#fff", borderRadius: "6px", padding: "6px 10px", fontSize: "12px", fontWeight: "700", whiteSpace: "nowrap", flexShrink: 0 }}>
                {s.step}
              </div>
              <div>
                <h3 style={{ fontSize: "16px", fontWeight: "700", marginBottom: "6px", marginTop: 0 }}>{s.title}</h3>
                <p style={{ margin: 0, color: "#444", fontSize: "15px" }}>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <h2 style={{ fontSize: "22px", fontWeight: "700", marginTop: "40px", marginBottom: "16px", borderLeft: "4px solid #b8860b", paddingLeft: "12px" }}>
          各類黃金回收計算方式對照表
        </h2>
        <p>
          不同黃金種類，計算方式不同。這張表讓你事先算好心理預期：
        </p>

        {/* Data Table */}
        <div style={{ overflowX: "auto", margin: "24px 0" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "15px" }}>
            <thead>
              <tr style={{ backgroundColor: "#b8860b", color: "#fff" }}>
                <th style={{ padding: "10px 14px", textAlign: "left" }}>黃金種類</th>
                <th style={{ padding: "10px 14px", textAlign: "left" }}>計算方式</th>
                <th style={{ padding: "10px 14px", textAlign: "left" }}>備註</th>
              </tr>
            </thead>
            <tbody>
              {priceComparisonData.map((row, i) => (
                <tr key={row.item} style={{ backgroundColor: i % 2 === 0 ? "#fffdf5" : "#fff", borderBottom: "1px solid #eee" }}>
                  <td style={{ padding: "10px 14px", fontWeight: "600" }}>{row.item}</td>
                  <td style={{ padding: "10px 14px" }}>{row.calcMethod}</td>
                  <td style={{ padding: "10px 14px", color: "#666", fontSize: "13px" }}>{row.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 style={{ fontSize: "22px", fontWeight: "700", marginTop: "40px", marginBottom: "16px", borderLeft: "4px solid #b8860b", paddingLeft: "12px" }}>
          賣黃金最常踩的3個坑
        </h2>

        <h3 style={{ fontSize: "18px", fontWeight: "700", marginTop: "24px", marginBottom: "10px" }}>1. 被扣耗損（最普遍）</h3>
        <p>
          部分銀樓以「熔煉損耗」為由，扣除5%重量再計算價格。10錢的K金，你實際只拿到9.5錢的錢。問清楚再賣，不接受直接換一家。
        </p>

        <h3 style={{ fontSize: "18px", fontWeight: "700", marginTop: "24px", marginBottom: "10px" }}>2. 成色鑑定故意壓低</h3>
        <p>
          你的18K被說成「看起來比較像14K，我只能按14K算」。這種情況遇到，可以要求看儀器數據，或帶去其他銀樓鑑定比較。有GIA或台灣寶石鑑定書更有保障。
        </p>

        <h3 style={{ fontSize: "18px", fontWeight: "700", marginTop: "24px", marginBottom: "10px" }}>3. 強迫當場決定</h3>
        <p>
          「今天特別高，明天就降了，現在賣最划算。」這是話術。金價每天浮動，但合理的銀樓不會用急迫感逼你當場成交。你有權利說「我再考慮一下」然後出門。
        </p>

        <h2 style={{ fontSize: "22px", fontWeight: "700", marginTop: "40px", marginBottom: "16px", borderLeft: "4px solid #b8860b", paddingLeft: "12px" }}>
          比價有沒有意義？該跑幾家？
        </h2>
        <p>
          有意義，但不用跑太多家。台灣黃金回收報價差異通常在每錢100-300元以內，跑5家省下的錢可能還不如花掉的交通時間。
        </p>
        <p>
          實際建議：找2-3家報價，排除明顯偏低的，選透明、不扣耗損的成交。比價的重點不是找最高價，而是排除不合理的低報。
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
            <a href="/blog/gold-recovery-traps" style={{ color: "#b8860b", textDecoration: "none", fontWeight: "600" }}>
              ▶ 黃金回收陷阱大公開：這5件事要注意
            </a>
          </li>
          <li>
            <a href="/blog/before-selling-gold" style={{ color: "#b8860b", textDecoration: "none", fontWeight: "600" }}>
              ▶ 賣黃金前必讀：這幾件事先搞清楚
            </a>
          </li>
          <li>
            <a href="/blog/k-gold-recycle-taiwan-april-2026" style={{ color: "#b8860b", textDecoration: "none", fontWeight: "600" }}>
              ▶ K金回收2026年4月行情：18K、14K、10K即時報價
            </a>
          </li>
          <li>
            <a href="/blog/gold-id-requirement" style={{ color: "#b8860b", textDecoration: "none", fontWeight: "600" }}>
              ▶ 賣黃金需要身分證嗎？台灣法規完整說明
            </a>
          </li>
        </ul>

        {/* CTA */}
        <div style={{ backgroundColor: "#1a1a1a", color: "#fff", borderRadius: "12px", padding: "28px", marginTop: "48px", textAlign: "center" }}>
          <h3 style={{ fontSize: "20px", fontWeight: "700", marginBottom: "12px" }}>準備好賣黃金了嗎？</h3>
          <p style={{ fontSize: "15px", color: "#ccc", marginBottom: "20px" }}>
            巧品珠寶｜台北市大安區｜不扣耗損，秤重全程透明，15分鐘當場付款
          </p>
          <a
            href="/"
            style={{ display: "inline-block", backgroundColor: "#b8860b", color: "#fff", padding: "12px 32px", borderRadius: "8px", textDecoration: "none", fontWeight: "700", fontSize: "16px" }}
          >
            查看今日黃金收購報價
          </a>
        </div>
      </main>
    </>
  );
}
