import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '黃金估價｜免費專業鑑定｜巧品珠寶台北',
  description: '台北黃金免費估價！專業儀器鑑定K金、白金、鑽石，老闆親自操作，公開透明。估完不賣可直接帶走，電話 0986-821-626。',
  keywords: '黃金估價,黃金鑑定,黃金免費估價,黃金秤重',
  alternates: {
    canonical: 'https://www.gold-tw.com/blog/gold-appraise',
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
            "headline": "黃金估價｜免費專業鑑定｜巧品珠寶台北",
            "description": "台北黃金免費估價！專業儀器鑑定純度，當場秤重報價。不賣也沒關係。",
            "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.gold-tw.com/blog/gold-appraise" },
            "author": { "@type": "Organization", "name": "巧品珠寶", "url": "https://www.gold-tw.com" },
            "publisher": { "@type": "Organization", "name": "巧品珠寶", "url": "https://www.gold-tw.com" },
            "image": { "@type": "ImageObject", "url": "https://wsrv.nl/?url=https://drive.google.com/uc?id=1ASz1v5ZBQ-WV572r-BC4gZRuraywgKKv&w=1200&output=webp&q=80" },
            "datePublished": "2026-03-15T00:00:00+08:00",
            "dateModified": "2026-03-16T00:00:00+08:00"
          })
        }}
      />
      <h1>黃金估價｜台北免費專業鑑定</h1>

      <h2>結論：估價完全免費，不賣也沒關係</h2>
      <p>很多人想知道自己的黃金值多少錢，但擔心去估價就要被迫賣出。巧品珠寶提供完全免費的黃金估價服務，估完不滿意可以直接帶回，絕不強迫銷售。</p>

      <h2>我們的估價流程</h2>
      <ol>
        <li><strong>攜帶物品到店</strong>（建議先預約，節省等待時間）</li>
        <li><strong>現場秤重</strong>：讓您親眼看到重量數字</li>
        <li><strong>純度鑑定</strong>：儀器檢測+火燒確認成色</li>
        <li><strong>計算金額</strong>：重量 × 純度 × 當日牌價</li>
        <li><strong>告知估價</strong>：您決定是否要賣，完全自由</li>
      </ol>

      <h2>可估價的物品類型</h2>
      <ul>
        <li>9999純金、916金、K金（18K、14K、10K）</li>
        <li>白金（鉑金Pt850、Pt900、Pt950）</li>
        <li>鑽石、珠寶首飾</li>
        <li>各種金條、金幣</li>
      </ul>

      <h2>常見問題 FAQ</h2>
      <h3>Q：估價要預約嗎？</h3>
      <p>A：建議先來電預約，可以減少等候時間。也接受直接到店。</p>
      <h3>Q：估價後不想賣可以嗎？</h3>
      <p>A：完全可以，不賣不收任何費用。</p>
      <h3>Q：可以LINE估價嗎？</h3>
      <p>A：可以先傳照片到LINE初步估算，但正式報價需要現場秤重鑑定。</p>

      <div style={{ margin: '2rem 0', padding: '1.5rem', background: '#FEF9E7', borderRadius: '8px', borderLeft: '4px solid #B8860B' }}>
        <strong>相關文章：</strong>
        <ul style={{ marginTop: '0.5rem', paddingLeft: '1.5rem' }}>
        <li><a href="/blog/gold-recycling-process" style={{ color: "#B8860B" }}>黃金回收流程</a></li>
        <li><a href="/blog/what-to-bring-when-selling-gold-2026" style={{ color: "#B8860B" }}>賣黃金要帶什麼</a></li>
        <li><a href="/blog/gold-scam-prevent" style={{ color: "#B8860B" }}>黃金詐騙防範</a></li>
        <li><a href="/blog/gold-shop-recommend" style={{ color: "#B8860B" }}>台北黃金回收推薦</a></li>
        </ul>
      </div>

      <hr style={{ margin: '2rem 0' }} />
      <h2>立即諮詢</h2>
      <p>📞 電話：<a href="tel:0986821626" style={{ color: '#B8860B' }}>0986-821-626</a></p>
      <p>💬 LINE：<a href="https://line.me/ti/p/~@QPD888" style={{ color: '#06C755' }}>@QPD888</a></p>
      <p>📍 地址：台北市大安區濟南路三段62-1號</p>
    </main>
  );
}
