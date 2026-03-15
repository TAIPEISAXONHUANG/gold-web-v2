import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '黃金回收注意事項｜必看防騙指南｜巧品珠寶',
  description: '黃金回收要注意什麼？一篇告訴你防騙技巧、回收流程注意事項，避免被坑殺！',
  keywords: '黃金回收注意,黃金回收防騙,賣黃金注意事項,黃金回收指南',
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
            "author": { "@type": "Organization", "name": "巧品珠寶" },
            "publisher": { "@type": "Organization", "name": "巧品珠寶" },
            "datePublished": "2026-03-12",
              "dateModified": "2026-03-16",
            "description": "黃金回收專業知識"
          })
        }}
      />
      <h1>黃金回收注意事項｜必看防騙指南</h1>
      
      <h2>選擇回收商要注意</h2>
      <ul>
        <li>選擇<strong>誠信店家</strong> - 經營多年、有實體店面</li>
        <li>選擇<strong>價格透明</strong> - 不扣秤、不扣耗損</li>
        <li>選擇<strong>當日付款</strong> - 現場現金支付</li>
        <li>選擇<strong>政府合法立案</strong> - 有相關許可證</li>
      </ul>

      <h2>回收前準備</h2>
      <ol>
        <li><strong>了解當日行情</strong> - 先上網查詢當日金價</li>
        <li><strong>多方比價</strong> - 至少3家比價</li>
        <li><strong>攜帶證件</strong> - 身份證正本（需實名制）</li>
        <li><strong>確認重量</strong> - 可先在家秤過</li>
      </ol>

      <h2>回收過程要注意</h2>
      <ul>
        <li>親眼看秤 - 重量一定要親眼確認</li>
        <li>檢測方式 - 火燒檢測是正常的</li>
        <li>拒絕扣耗損 - 合理耗損1-3%</li>
        <li>確認金額 - 計算過程公開</li>
      </ul>

      <hr style={{ margin: '2rem 0' }} />

      <h2>立即聯繫</h2>
      <p>📞 電話：0986-821-626</p>
      <p>💬 LINE：@QPD888</p>
      <p>🌐 官網：https://www.gold-tw.com/</p>
    </main>
  );
}
