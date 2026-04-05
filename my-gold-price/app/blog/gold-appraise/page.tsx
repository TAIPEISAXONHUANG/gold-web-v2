import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '黃金估價｜免費專業鑑定｜巧品珠寶台北',
  description: '台北黃金免費估價！專業儀器鑑定K金、白金、鑽石，老闆親自操作，公開透明。估完不賣可直接帶走，電話 0986-821-626。',
  keywords: '黃金估價,黃金鑑定,黃金免費估價,黃金秤重',
  alternates: {
    canonical: 'https://www.gold-tw.com/blog/gold-appraise',
  },
  openGraph: {
    locale: 'zh_TW',
    title: '黃金估價｜免費專業鑑定｜巧品珠寶台北',
    description: '台北黃金免費估價！專業儀器鑑定K金、白金、鑽石，老闆親自操作，公開透明。估完不賣可直接帶走，電話 0986-821-626。',
    type: 'article',
    url: 'https://www.gold-tw.com/blog/gold-appraise',
    siteName: '巧品珠寶',
    publishedTime: '2026-03-15T00:00:00+08:00',
    modifiedTime: '2026-03-16T00:00:00+08:00',
    images: [{ url: '/og-image.webp', width: 1200, height: 630, alt: '巧品珠寶' }],

  },
};

// lastModified: 2026-03-19
export default function Page() {
  return (
    <main style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": "黃金估價｜免費專業鑑定｜巧品珠寶台北",
            "description": "台北黃金免費估價！專業儀器鑑定純度，當場秤重報價。不賣也沒關係。",
            "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.gold-tw.com/blog/gold-appraise" },
            "author": { "@type": "Person", "name": "鑑定師L", "url": "https://www.gold-tw.com" },
            "publisher": { "@type": "Organization", "name": "巧品珠寶", "url": "https://www.gold-tw.com" },
            "image": { "@type": "ImageObject", "url": "https://wsrv.nl/?url=https://drive.google.com/uc?id=1ASz1v5ZBQ-WV572r-BC4gZRuraywgKKv&w=1200&output=webp&q=80" },
            "datePublished": "2026-03-15T00:00:00+08:00",
            "dateModified": "2026-03-16T00:00:00+08:00"
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"首頁","item":"https://www.gold-tw.com"},{"@type":"ListItem","position":2,"name":"知識專欄","item":"https://www.gold-tw.com/blog"},{"@type":"ListItem","position":3,"name":"黃金估價｜免費專業鑑定｜巧品珠寶台北"}]})
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({"@context":"https://schema.org","@type":"HowTo","name":"黃金估價流程說明","description":"專業黃金估價的完整步驟，全程約10分鐘。","step":[{"@type":"HowToStep","position":1,"name":"目視檢查","text":"先確認金飾外觀、印記標示（K數、品牌）和整體狀況。"},{"@type":"HowToStep","position":2,"name":"XRF儀器檢測純度","text":"使用X射線螢光分析儀精確測量黃金純度，非破壞性檢測不會傷害物品。"},{"@type":"HowToStep","position":3,"name":"電子秤精密秤重","text":"以國家認證電子秤秤出淨重（扣除非金屬部分如寶石、繩鏈）。"},{"@type":"HowToStep","position":4,"name":"依當日牌價計算報價","text":"回收價 = 當日牌價 × 純度 × 重量。現場計算讓客戶確認，公開透明。"}]})
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              { "@type": "Question", "name": "估價要預約嗎？", "acceptedAnswer": { "@type": "Answer", "text": "建議先來電或LINE預約，可以減少等候時間。也接受直接到店，但若遇上客戶較多可能需要稍候。" } },
              { "@type": "Question", "name": "估價後不想賣可以嗎？", "acceptedAnswer": { "@type": "Answer", "text": "完全可以，不賣不收任何費用。我們提供的是免費估價服務，您可以自由比較多家報價後再決定。" } },
              { "@type": "Question", "name": "可以LINE估價嗎？", "acceptedAnswer": { "@type": "Answer", "text": "可以先傳照片到LINE（@QPD888）初步估算參考價格，但正式報價需要現場秤重鑑定，因為照片無法判斷精確重量和純度。" } },
              { "@type": "Question", "name": "估價需要帶什麼證件？", "acceptedAnswer": { "@type": "Answer", "text": "純估價不需要證件。但如果決定要賣出，需要攜帶身分證正本以完成交易登記，這是政府規定的程序。" } },
              { "@type": "Question", "name": "估價過程會損壞金飾嗎？", "acceptedAnswer": { "@type": "Answer", "text": "不會。我們使用XRF螢光分析儀進行非破壞性檢測，不需要切割或刮磨金飾，檢測完畢後金飾完好如初。" } },
              { "@type": "Question", "name": "估價結果的有效期是多久？", "acceptedAnswer": { "@type": "Answer", "text": "由於金價每日波動，估價結果僅當日有效。隔日金價若有變動，報價也會相應調整。建議當天決定可鎖定當日價格。" } }
            ]
          })
        }}
      />
      <h1>黃金估價｜台北免費專業鑑定</h1>

      <div style={{background:'#fffbeb', borderLeft:'4px solid #f59e0b', padding:'16px', margin:'16px 0', borderRadius:'8px'}}>
        <strong>📌 重點摘要：</strong>
        <ul style={{ marginTop: '8px', paddingLeft: '1.5rem' }}>
          <li>巧品珠寶提供完全免費黃金估價，估完不賣可直接帶走</li>
          <li>使用XRF螢光分析儀非破壞性檢測，不傷金飾</li>
          <li>估價流程：目視檢查→儀器測純度→電子秤秤重→依當日牌價報價</li>
          <li>全程約10分鐘，公開透明，客戶可全程觀看</li>
          <li>可估價項目涵蓋純金、K金、白金、鑽石、金條金幣等</li>
        </ul>
      </div>

      <h2>結論：估價完全免費，不賣也沒關係</h2>
      <p>很多人想知道自己的黃金值多少錢，但擔心去估價就要被迫賣出。巧品珠寶提供完全免費的黃金估價服務，估完不滿意可以直接帶回，絕不強迫銷售。我們鼓勵客戶多方比價，對自己的黃金價值有清楚了解後再做決定。每天都有客人專程來估價、了解行情後帶回，這是很正常的事。</p>

      <h2>我們的專業估價流程</h2>
      <ol>
        <li><strong>攜帶物品到店</strong>（建議先預約，節省等待時間）</li>
        <li><strong>現場秤重</strong>：使用國家認證電子秤，讓您親眼看到重量數字</li>
        <li><strong>純度鑑定</strong>：XRF螢光分析儀精確測量，非破壞性不傷金飾</li>
        <li><strong>計算金額</strong>：重量 × 純度 × 當日牌價，計算過程完全公開</li>
        <li><strong>告知估價</strong>：您決定是否要賣，完全自由，不賣不收費</li>
      </ol>
      <p>整個流程約10分鐘，老闆親自操作、親自說明。如果想事先了解今日金價，可使用我們的<a href="/blog/gold-calculator" style={{ color: '#B8860B' }}>黃金價格試算工具</a>先算個大概。</p>

      <h2>哪些因素影響估價金額？</h2>
      <p>黃金估價並非只看重量，還有幾個重要因素會影響最終報價。首先是<strong>純度</strong>：9999純金和18K金的回收價差異很大，純度越高、單價越高。其次是<strong>當日國際金價</strong>：金價每天波動，同一件金飾今天和明天的估價可能不同。第三是<strong>重量精確度</strong>：部分金飾含有寶石、繩鏈等非金屬部分，需要扣除計算淨重。想深入了解純度對價格的影響，可參考<a href="/blog/gold-purity" style={{ color: '#B8860B' }}>黃金純度完整解析</a>。更多影響回收價格的細節，請見<a href="/blog/gold-recycling-price-factors" style={{ color: '#B8860B' }}>影響黃金回收價格的因素</a>。</p>

      <h2>估價前的準備有哪些建議？</h2>
      <p>來店估價前，建議您先做以下準備：將金飾簡單清潔擦拭，方便檢測；找出購買時的保證書或發票（有的話更好，沒有也可以估價）；如果有多件金飾想一起估價，全部帶來可以一次處理。另外建議避開假日尖峰時段，平日下午來店等候時間最短。若擔心秤重不準確，可先了解<a href="/blog/gold-scale-trap" style={{ color: '#B8860B' }}>黃金秤重常見陷阱</a>，學會如何保護自己的權益。</p>

      <h2>可估價的物品有哪些種類？</h2>
      <ul>
        <li>9999純金飾品（項鍊、戒指、手鐲、耳環等）</li>
        <li>916金、K金（18K、14K、10K）飾品</li>
        <li>白金（鉑金Pt850、Pt900、Pt950）飾品</li>
        <li>鑽石、珠寶首飾</li>
        <li>各種金條、金幣、金塊</li>
        <li>斷裂、變形、損壞的金飾（照樣可估價回收）</li>
      </ul>

      <hr style={{ margin: '2rem 0' }} />

      <h2>常見問題 FAQ</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', margin: '16px 0' }}>
        <div style={{ background: '#fff', border: '1px solid #e5e7eb', borderRadius: '8px', padding: '16px' }}>
          <strong>Q：估價要預約嗎？</strong>
          <p style={{ margin: '8px 0 0' }}>建議先來電或LINE預約，可以減少等候時間。也接受直接到店，但若遇上客戶較多可能需要稍候。</p>
        </div>
        <div style={{ background: '#fff', border: '1px solid #e5e7eb', borderRadius: '8px', padding: '16px' }}>
          <strong>Q：估價後不想賣可以嗎？</strong>
          <p style={{ margin: '8px 0 0' }}>完全可以，不賣不收任何費用。我們提供的是免費估價服務，您可以自由比較多家報價後再決定。</p>
        </div>
        <div style={{ background: '#fff', border: '1px solid #e5e7eb', borderRadius: '8px', padding: '16px' }}>
          <strong>Q：可以LINE估價嗎？</strong>
          <p style={{ margin: '8px 0 0' }}>可以先傳照片到LINE（@QPD888）初步估算參考價格，但正式報價需要現場秤重鑑定，因為照片無法判斷精確重量和純度。</p>
        </div>
        <div style={{ background: '#fff', border: '1px solid #e5e7eb', borderRadius: '8px', padding: '16px' }}>
          <strong>Q：估價需要帶什麼證件？</strong>
          <p style={{ margin: '8px 0 0' }}>純估價不需要證件。但如果決定要賣出，需要攜帶身分證正本以完成交易登記，這是政府規定的程序。</p>
        </div>
        <div style={{ background: '#fff', border: '1px solid #e5e7eb', borderRadius: '8px', padding: '16px' }}>
          <strong>Q：估價過程會損壞金飾嗎？</strong>
          <p style={{ margin: '8px 0 0' }}>不會。我們使用XRF螢光分析儀進行非破壞性檢測，不需要切割或刮磨金飾，檢測完畢後金飾完好如初。</p>
        </div>
        <div style={{ background: '#fff', border: '1px solid #e5e7eb', borderRadius: '8px', padding: '16px' }}>
          <strong>Q：估價結果的有效期是多久？</strong>
          <p style={{ margin: '8px 0 0' }}>由於金價每日波動，估價結果僅當日有效。隔日金價若有變動，報價也會相應調整。建議當天決定可鎖定當日價格。</p>
        </div>
      </div>

      <div style={{ margin: '2rem 0', padding: '1.5rem', background: '#FEF9E7', borderRadius: '8px', borderLeft: '4px solid #B8860B' }}>
        <strong>延伸閱讀：</strong>
        <ul style={{ marginTop: '0.5rem', paddingLeft: '1.5rem' }}>
          <li><a href="/blog/gold-recovery-guide-2026" style={{ color: '#B8860B' }}>2026黃金回收完整指南</a></li>
          <li><a href="/blog/gold-identification" style={{ color: '#B8860B' }}>黃金鑑定方法完整教學</a></li>
          <li><a href="/blog/sell-gold-tips" style={{ color: '#B8860B' }}>賣黃金前必知的注意事項</a></li>
          <li><a href="/blog/gold-scale-trap" style={{ color: '#B8860B' }}>黃金秤重常見陷阱揭密</a></li>
          <li><a href="/blog/gold-purity" style={{ color: '#B8860B' }}>黃金純度怎麼看？完整解析</a></li>
          <li><a href="/blog/gold-recycling-price-factors" style={{ color: '#B8860B' }}>影響黃金回收價格的關鍵因素</a></li>
          <li><a href="/blog/taipei-gold-recovery-recommend" style={{ color: '#B8860B' }}>台北黃金回收推薦店家</a></li>
          <li><a href="/blog/gold-safety" style={{ color: '#B8860B' }}>黃金交易安全注意事項</a></li>
        </ul>
      </div>

      <hr style={{ margin: '2rem 0' }} />
      <h2>立即諮詢｜巧品珠寶</h2>
      <p>📞 電話：<a href="tel:0986821626" style={{ color: '#B8860B' }}>0986-821-626</a></p>
      <p>💬 LINE：<a href="https://line.me/ti/p/~@QPD888" target="_blank" style={{ color: '#06C755' }} rel="noopener noreferrer">@QPD888</a></p>
      <p>📍 地址：台北市大安區濟南路三段62-1號</p>
    </main>
  );
}
