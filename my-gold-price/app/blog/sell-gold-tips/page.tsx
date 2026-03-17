import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '賣黃金要注意什麼？5個不被坑的必知技巧',
  description: '賣黃金完整攻略！5大技巧讓你不吃虧，了解計價方式、避開扣耗損話術，選對店家每台錢多拿500元。巧品珠寶免費估價。',
  keywords: '賣黃金注意,黃金回收注意事項,黃金買賣技巧,不被坑',
  alternates: {
    canonical: 'https://www.gold-tw.com/blog/sell-gold-tips',
  },
};

export default function Page() {
  return (
    <main style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "賣黃金要注意什麼？5個不被坑的必知技巧",
            "author": { "@type": "Organization", "name": "巧品珠寶", "url": "https://www.gold-tw.com", "@id": "https://www.gold-tw.com/#business" },
            "publisher": { "@type": "Organization", "name": "巧品珠寶", "url": "https://www.gold-tw.com", "logo": { "@type": "ImageObject", "url": "https://wsrv.nl/?url=https://drive.google.com/uc?id=16UrCpYWRkyEkvL7M73o0DIAvkKWtF0Lp&w=200&output=webp" } },
            "datePublished": "2026-03-16",
              "dateModified": "2026-03-16T00:00:00+08:00",
            "description": "第一次賣黃金要注意什麼？5大重點讓你不上當！"
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"首頁","item":"https://www.gold-tw.com"},{"@type":"ListItem","position":2,"name":"知識專欄","item":"https://www.gold-tw.com/blog"},{"@type":"ListItem","position":3,"name":"賣黃金要注意什麼？5個不被坑的必知技巧"}]})
        }}
      />
      <h1>賣黃金要注意什麼？</h1>
      <h2>5個不被坑的必知技巧</h2>

      <h2>結論：記住這5點，賣黃金不吃虧</h2>
      <p>市場上黃金回收商家良莠不齊，一不小心就可能吃悶虧。本文整理5個必知技巧，讓您賣得安心、價格合理！</p>

      <h2>技巧1：先查詢當日金價</h2>
      <p>每日金價不同，建議：</p>
      <ul>
        <li>先上網查詢當日國際金價與回收牌價</li>
        <li>了解自己的黃金大約價值</li>
        <li>有基本認知再去詢問，避免被當冤大頭</li>
      </ul>

      <h2>技巧2：攜帶證件（實名制）</h2>
      <p>政府規定黃金交易必須<strong>實名制</strong>，請準備：</p>
      <ul>
        <li>身份證（必備）</li>
        <li>第二證件（如健保卡、駕照）</li>
      </ul>
      <p>千萬不要向不用登記的店家交易，那是違法的！</p>

      <h2>技巧3：現場秤重親眼看見</h2>
      <p><strong>最重要的一點：</strong></p>
      <ul>
        <li>必須親眼看見秤重數字</li>
        <li>確認秤上的數字穩定</li>
        <li>檢查秤是否經過公正單位檢定</li>
        <li>拒絕「暗箱操作」的秤重方式</li>
      </ul>

      <h2>技巧4：問清楚計算方式</h2>
      <p>在成交前一定要問清楚：</p>
      <ul>
        <li><strong>純度怎麼算？</strong>（有沒有檢測？）</li>
        <li><strong>重量怎麼算？</strong>（幾錢？幾克？）</li>
        <li><strong>有没有扣耗損？</strong>（合理嗎？）</li>
        <li><strong>手續費多少？</strong></li>
      </ul>
      <p>不說清楚就不賣，這是您的權利！</p>

      <h2>技巧5：選擇誠信店家</h2>
      <p>如何判斷店家是否誠信？</p>
      <ul>
        <li>經營多年、口碑良好</li>
        <li>有實體店面</li>
        <li>報價透明、不會臨時變卦</li>
        <li>不強迫成交、不給壓力</li>
        <li>有專業儀器檢測純度</li>
      </ul>

      <h2>⚠️ 常見話術與陷阱</h2>
      <ul>
        <li><strong>「要扣耗損」</strong> → 正常回收不應扣耗損</li>
        <li><strong>「秤有一點誤差」</strong> → 正式秤應該精準</li>
        <li><strong>「今天行情不好」</strong> → 可先查證再決定</li>
        <li><strong>「這不能驗」</strong> → 應該允許檢測</li>
        <li><strong>「只能給這個價」</strong> → 多比幾家再決定</li>
      </ul>

      <div style={{ margin: '2rem 0', padding: '1.5rem', background: '#FEF9E7', borderRadius: '8px', borderLeft: '4px solid #B8860B' }}>
        <strong>相關文章：</strong>
        <ul style={{ marginTop: '0.5rem', paddingLeft: '1.5rem' }}>
        <li><a href="/blog/before-selling-gold" style={{ color: "#B8860B" }}>賣黃金前準備</a></li>
        <li><a href="/blog/gold-shop-recommend" style={{ color: "#B8860B" }}>台北黃金回收推薦</a></li>
        <li><a href="/blog/why-some-get-better-gold-price" style={{ color: "#B8860B" }}>為什麼有人拿到更高價</a></li>
        <li><a href="/blog/gold-appraise" style={{ color: "#B8860B" }}>黃金免費估價</a></li>
        </ul>
      </div>

      <hr style={{ margin: '2rem 0' }} />

      <h2>台北黃金回收推薦</h2>
      <p>歡迎聯繫 <strong>巧品珠寶</strong> 免費估價：</p>
      <p>📞 電話：0986-821-626</p>
      <p>💬 LINE：@QPD888</p>
      <p>🌐 官網：https://www.gold-tw.com/</p>
      <a href="/" style={{ color: '#B8860B', fontSize: '1.2rem' }}>
        → 查詢今日報價
      </a>
    </main>
  );
}
