import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '賣黃金為什麼要登記？實名制規定全解析｜巧品珠寶',
  description: '賣黃金為什麼要登記？台灣黃金交易實名制規定詳解：哪些情況需要登記、要提供什麼資料、超過多少金額要申報？2026年最新法規說清楚，不是業者想要你的資料。',
  keywords: '賣黃金為什麼要登記,黃金交易實名制,賣黃金要登記嗎,賣黃金身份證,黃金回收登記規定',
  alternates: {
    canonical: 'https://www.gold-tw.com/blog/why-register-when-selling-gold',
  },
};

const faqs = [
  {
    q: '賣黃金一定要登記嗎？',
    a: '台灣規定黃金現金交易須出示身份證登記，無論金額大小均須實名。法源是《貴金屬及寶石交易法》及洗錢防制相關規定。不是業者自訂規則，而是法律要求。'
  },
  {
    q: '賣黃金登記的資料會外洩嗎？',
    a: '合法業者依個資法保護你的資訊，只用於法律規定的申報用途，不得轉作商業用途。巧品珠寶嚴格遵守個資法，交易記錄僅用於法定保存義務，不做其他用途。'
  },
  {
    q: '賣黃金超過多少錢需要申報大額交易？',
    a: '單筆現金交易達新台幣 50 萬元（含）以上，業者須依洗錢防制法填寫「大額通報表」，向金管會申報。這是業者的義務，不是你的罪，正常交易不用擔心。'
  },
  {
    q: '如果沒有帶身份證，可以賣黃金嗎？',
    a: '不行。根據規定，身份證正本是必備文件。外籍人士可用護照或居留證。沒有合法身份文件，合規的業者依法不得受理交易。'
  },
  {
    q: '賣黃金登記後，稅務機關會盯上我嗎？',
    a: '個人偶爾出售自用黃金屬於財產交易，依台灣所得稅法，出售黃金飾品的所得通常無須申報個人所得稅（除非是以賺取利潤為目的的頻繁交易）。有疑慮建議諮詢會計師。'
  }
];

export const lastModified = new Date('2026-03-19');
export default function Page() {
  return (
    <main style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map(faq => ({
              "@type": "Question",
              "name": faq.q,
              "acceptedAnswer": { "@type": "Answer", "text": faq.a }
            }))
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": "賣黃金為什麼要登記？實名制規定全解析",
            "author": { "@type": "Organization", "name": "巧品珠寶", "url": "https://www.gold-tw.com", "@id": "https://www.gold-tw.com/#business" },
            "publisher": { "@type": "Organization", "name": "巧品珠寶", "url": "https://www.gold-tw.com" },
            "datePublished": "2026-03-27",
            "dateModified": "2026-03-27T09:00:00+08:00",
            "description": "台灣賣黃金為何要登記身份？洗錢防制法與貴金屬交易規定詳解，2026年最新版本。"
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "首頁", "item": "https://www.gold-tw.com" },
              { "@type": "ListItem", "position": 2, "name": "知識專欄", "item": "https://www.gold-tw.com/blog" },
              { "@type": "ListItem", "position": 3, "name": "賣黃金為什麼要登記？實名制規定全解析" }
            ]
          })
        }}
      />

      <h1>賣黃金為什麼要登記？實名制規定全解析</h1>

      <div style={{ background: '#fffbeb', borderLeft: '4px solid #f59e0b', padding: '16px', margin: '16px 0', borderRadius: '8px' }}>
        <strong>直接給答案：</strong> 賣黃金要登記是<strong>法律規定</strong>，不是業者想要你的個資。根據《洗錢防制法》及《貴金屬及寶石交易法》，現金交易黃金須實名制，帶身份證正本即可完成交易。
      </div>

      <h2>賣黃金要登記——法規說了什麼？</h2>
      <p>這件事困擾很多人。去金飾店或回收行賣黃金，店員要你出示身份證，有些人會擔心：「是不是詐騙？為什麼要我的資料？」</p>
      <p>答案很明確：這是法律要求，合規業者都必須照辦。法源依據包括：</p>
      <ul>
        <li><strong>《洗錢防制法》：</strong>規定特定行業（含貴金屬交易商）須對客戶進行身份驗證（KYC），留存交易記錄</li>
        <li><strong>《貴金屬及寶石交易法》：</strong>要求業者於每筆交易時確認買賣雙方身份</li>
        <li><strong>金管會相關函令：</strong>明確規範黃金現金交易的申報門檻與記錄保存期限</li>
      </ul>
      <p>簡單說：政府不希望黃金成為洗錢工具，所以要求所有現金黃金交易都留下記錄。</p>

      <h2>需要登記的三種情況</h2>

      <table style={{ width: '100%', borderCollapse: 'collapse', margin: '1rem 0' }}>
        <thead>
          <tr style={{ background: '#f59e0b', color: 'white' }}>
            <th style={{ padding: '10px', textAlign: 'left' }}>情況</th>
            <th style={{ padding: '10px', textAlign: 'left' }}>登記要求</th>
            <th style={{ padding: '10px', textAlign: 'left' }}>所需文件</th>
          </tr>
        </thead>
        <tbody>
          <tr style={{ borderBottom: '1px solid #ddd', background: '#fefce8' }}>
            <td style={{ padding: '10px' }}>一般黃金回收交易</td>
            <td style={{ padding: '10px' }}>須實名登記</td>
            <td style={{ padding: '10px' }}>身份證正本</td>
          </tr>
          <tr style={{ borderBottom: '1px solid #ddd' }}>
            <td style={{ padding: '10px' }}>單筆現金交易 ≥ 50 萬元</td>
            <td style={{ padding: '10px' }}>須填大額通報表</td>
            <td style={{ padding: '10px' }}>身份證正本 ＋ 通報表（業者填寫）</td>
          </tr>
          <tr style={{ borderBottom: '1px solid #ddd', background: '#fefce8' }}>
            <td style={{ padding: '10px' }}>外籍人士交易</td>
            <td style={{ padding: '10px' }}>須實名登記</td>
            <td style={{ padding: '10px' }}>護照或台灣居留證</td>
          </tr>
        </tbody>
      </table>

      <h2>登記哪些資料？業者能拿去做什麼？</h2>
      <p>標準登記內容：</p>
      <ul>
        <li>姓名、身份證字號</li>
        <li>交易日期、品項、重量、金額</li>
        <li>部分業者會留存身份證影本</li>
      </ul>
      <p>業者依法只能將這些資料用於：</p>
      <ul>
        <li>法定交易記錄保存（通常需保存 5 年）</li>
        <li>向主管機關申報（50 萬元以上大額交易）</li>
        <li>主管機關要求調閱時提供</li>
      </ul>
      <p><strong>不能做的事：</strong>拿你的個資做行銷、轉售給第三方、或其他非法用途。若業者這樣做，你可以向個資主管機關（法務部）檢舉。</p>

      <h2>沒帶身份證，有辦法解決嗎？</h2>
      <p>沒有。這是硬規定，任何合法業者都不會幫你繞過去。</p>
      <p>常見誤解：</p>
      <ul>
        <li>「我之前在別家沒被要求」——那家業者可能在違規，或你遇上非正規管道</li>
        <li>「金額很小應該不用」——只要是現金回收黃金，不論金額，都要實名</li>
        <li>「用別人的身份證可以嗎」——絕對不行，這屬於偽造身份，違法</li>
      </ul>
      <p>解決辦法只有一個：回家拿身份證再來。</p>

      <h2>賣黃金登記會被課稅嗎？</h2>
      <p>這是很多人最擔心的問題。直接說結論：</p>
      <p><strong>個人偶爾出售自用黃金首飾，依台灣現行稅法不需要申報個人所得稅。</strong></p>
      <p>理由：台灣所得稅法將個人出售財產的利得（財產交易所得）列為所得之一，但財政部長期以來的行政解釋是，個人出售日常使用的黃金飾品，通常不視為財產交易所得課稅。</p>
      <p>例外情況：若你是以買賣黃金為業，大量頻繁交易，可能被認定為營業行為，需要申報。一般消費者偶爾出售家中黃金，不在此列。</p>
      <p>有疑慮的話，建議直接諮詢國稅局或會計師，不要道聽途說。</p>

      <h2>登記流程實際怎麼走？以巧品珠寶為例</h2>
      <p>很多人擔心登記手續麻煩，其實流程很快：</p>
      <ol>
        <li>帶黃金和身份證到門市</li>
        <li>服務人員核對身份證，填寫基本交易資料（約 2 分鐘）</li>
        <li>黃金鑑定、秤重、報價</li>
        <li>確認價格後簽名確認，當場結算現金</li>
      </ol>
      <p>整個流程包含登記在內，通常 15–30 分鐘完成。登記本身只佔 2–3 分鐘，不是瓶頸。</p>

      <h2>遇到不要求登記的店家有什麼風險？</h2>
      <p>如果業者說「不用帶身份證」或「不需要登記」，這是個警訊，不是好事。</p>
      <p>可能代表：</p>
      <ul>
        <li>業者本身在違規經營</li>
        <li>管道不透明，可能涉及非法收購</li>
        <li>報價可能有問題，用「免登記」吸引客人再壓低報價</li>
      </ul>
      <p>合法、透明的業者不會迴避登記要求。遇到這種情況，換一家比較安全。</p>

      <h2>常見問題 FAQ</h2>
      {faqs.map((faq, idx) => (
        <div key={idx} style={{ marginBottom: '1.5rem', borderTop: '1px solid #e5e7eb', paddingTop: '1rem' }}>
          <h3 style={{ color: '#92400e', margin: '0 0 0.5rem' }}>{faq.q}</h3>
          <p style={{ margin: 0 }}>{faq.a}</p>
        </div>
      ))}

      <div style={{ background: '#fef3c7', border: '1px solid #f59e0b', padding: '20px', borderRadius: '8px', margin: '2rem 0', textAlign: 'center' }}>
        <strong style={{ fontSize: '1.1rem' }}>帶身份證、帶黃金——15 分鐘完成交易</strong>
        <br />
        <span style={{ color: '#78350f' }}>台北大安巧品珠寶 ｜ 登記透明、流程清楚、當場現金結算</span>
        <br />
        <span style={{ fontSize: '0.9rem', color: '#92400e' }}>不扣耗損、不拖時間、法規全遵守</span>
      </div>

      <h2>延伸閱讀</h2>
      <ul>
        <li><a href="/blog/gold-id-requirement">賣黃金要帶什麼證件？法規完整說明</a></li>
        <li><a href="/blog/what-to-bring-when-selling-gold-2026">2026賣黃金前必備清單</a></li>
        <li><a href="/blog/sell-gold-checklist-2026">賣黃金完整準備指南</a></li>
        <li><a href="/blog/taiwan-gold-price-per-qian-today-2026">台灣今日金價每錢2026即時報價</a></li>
        <li><a href="/blog/gold-price-per-liang-today-2026">今日金價一兩多少錢？即時行情查詢</a></li>
      </ul>
    </main>
  );
}
