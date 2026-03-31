import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '古早黃金回收｜老金飾變現｜巧品珠寶',
  description: '古早金飾、老件黃金高價回收！巧品珠寶專業鑑定各年代金飾，916金、足金均可回收，不扣耗損，當場現金。電話 0986-821-626。',
  keywords: '古早黃金,老金回收,祖傳金飾,老黃金收購',
  alternates: {
    canonical: 'https://www.gold-tw.com/blog/gold-antique',
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
            "@type": "BlogPosting",
            "headline": "古早黃金回收｜老金飾變現｜巧品珠寶",
            "description": "古早黃金、老金飾高價回收！祖傳金飾、年代久遠的黃金首飾。",
            "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.gold-tw.com/blog/gold-antique" },
            "author": { "@type": "Organization", "name": "巧品珠寶", "url": "https://www.gold-tw.com" },
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
          __html: JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"首頁","item":"https://www.gold-tw.com"},{"@type":"ListItem","position":2,"name":"知識專欄","item":"https://www.gold-tw.com/blog"},{"@type":"ListItem","position":3,"name":"古早黃金回收｜老金飾變現｜巧品珠寶"}]})
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              { '@type': 'Question', name: '祖傳金飾沒有任何憑證，可以回收嗎？', acceptedAnswer: { '@type': 'Answer', text: '完全可以。我們現場鑑定，不需要任何購買證明。' } },
              { '@type': 'Question', name: '古早金飾的純度怎麼判斷？', acceptedAnswer: { '@type': 'Answer', text: '我們使用儀器檢測加火燒確認，測量誤差極小。' } },
              { '@type': 'Question', name: '斷掉或變形的古早金飾可以收嗎？', acceptedAnswer: { '@type': 'Answer', text: '可以，我們以純度和重量計價，外觀不影響回收價格。' } },
              { '@type': 'Question', name: '台灣早期金飾通常是什麼純度？', acceptedAnswer: { '@type': 'Answer', text: '民國50-70年代的台灣金飾多為22K（916）或24K（999以上），純度相當高。' } },
              { '@type': 'Question', name: '古早金飾有沒有文物收藏價值？', acceptedAnswer: { '@type': 'Answer', text: '一般的古早金飾沒有特別的文物收藏價值，主要價值還是在黃金本身。但若有特殊歷史背景或工藝，可能有額外收藏市場。建議先確認黃金回收價值。' } },
            ],
          })
        }}
      />
      <h1>古早黃金回收｜老金飾高價變現</h1>

      <div style={{background:'#fffbeb', borderLeft:'4px solid #f59e0b', padding:'16px', margin:'16px 0', borderRadius:'8px'}}>
        <strong>📌 重點摘要：</strong> 古董金飾除了黃金價值外，可能有額外的收藏價值。建議先鑑定純度與歷史價值，再決定回收或收藏保存。
      </div>

      <h2>結論：古早黃金一樣有高價值，純度才是關鍵</h2>
      <p>很多人家中都有祖傳的古早金飾。早期台灣金飾多為916或990以上高純度，只要是真金，就有回收價值。巧品珠寶專業鑑定各類古早黃金，依純度和重量給出公道價格。不需要擔心款式老舊，黃金的價值不因年代而減損。</p>

      <h2>台灣古早金飾的特色與年代</h2>
      <p>了解不同年代的台灣金飾特色，有助於正確估價：</p>
      <ul>
        <li><strong>日治時代（1895-1945）</strong>：金飾受日本工藝影響，設計精緻細膩，純度通常極高</li>
        <li><strong>民國初期（1950-1960年代）</strong>：以足金（999以上）為主，傳統工法製作，款式古樸</li>
        <li><strong>經濟起飛期（1970-1980年代）</strong>：台灣銀樓業蓬勃，流行916黃金，婚嫁金飾盛行</li>
        <li><strong>現代款（1990年代至今）</strong>：18K設計款興起，款式多元，但含金量較低</li>
      </ul>

      <h2>古早黃金的特色</h2>
      <ul>
        <li><strong>純度較高</strong>：早期台灣金飾多為916或990以上高純度，有些甚至接近9999足金</li>
        <li><strong>款式老舊</strong>：不影響回收，以重量計價，款式設計無關緊要</li>
        <li><strong>可能有焊接</strong>：修復部位純度可能較低，鑑定時會區分計算</li>
        <li><strong>無保證書</strong>：不影響回收，現場鑑定確認純度</li>
        <li><strong>傳統工法</strong>：早期工藝師手工製作，可能有花絲、掐絲等特殊工法，不影響黃金回收計算</li>
      </ul>

      <h2>古早黃金鑑定方式</h2>
      <p>老式金飾可能含有銅等雜質，我們採用多重鑑定方式：</p>
      <ol>
        <li><strong>XRF螢光分析儀</strong>：最精確的方式，在不損壞金飾的情況下測出各金屬成分的百分比</li>
        <li><strong>火燒測試</strong>：透過燃燒觀察顏色變化，輔助確認純度</li>
        <li><strong>比重測試</strong>：利用黃金特殊比重（19.3 g/cm³）進行驗證</li>
        <li><strong>硝酸測試</strong>：傳統鑑定方法，觀察酸液反應判斷純度</li>
      </ol>
      <p>多重鑑定確保準確，讓您安心變現。了解更多<a href="/blog/gold-identification" style={{ color: '#B8860B' }}>黃金真假辨識方法</a>。</p>

      <h2>古早金飾的特殊情況處理</h2>
      <ul>
        <li><strong>祖傳神明金牌</strong>：有宗教意義的金牌，個人決定是否回收，我們完全尊重（詳見<a href="/blog/lion-head-gold" style={{ color: '#B8860B' }}>金牌回收說明</a>）</li>
        <li><strong>繼承的遺產金飾</strong>：只需帶本人身份證到店即可（詳見<a href="/blog/inheritance-gold" style={{ color: '#B8860B' }}>遺產黃金處理</a>）</li>
        <li><strong>損壞的古早金飾</strong>：斷裂、變形不影響回收（詳見<a href="/blog/broken-gold-recovery" style={{ color: '#B8860B' }}>斷裂黃金回收</a>）</li>
        <li><strong>全套嫁妝金飾</strong>：手鐲、項鍊、戒指、耳環可一次整組估價</li>
      </ul>

      <h2>古早金飾的典型款式</h2>
      <ul>
        <li><strong>龍鳳金鐲</strong>：傳統婚嫁金手鐲，雕有龍鳳紋路，厚實重量</li>
        <li><strong>如意金墜</strong>：傳統吉祥圖案的金墜子</li>
        <li><strong>壽桃金飾</strong>：長輩壽禮常見造型</li>
        <li><strong>金鎖片</strong>：嬰兒百日金鎖，保平安之意</li>
        <li><strong>元寶造型</strong>：招財納福的傳統金飾</li>
      </ul>
      <p>無論哪種款式，都可以到巧品珠寶免費估價。了解更多<a href="/blog/gold-culture" style={{ color: '#B8860B' }}>台灣黃金文化習俗</a>背後的意義。</p>

      <h2>常見問題 FAQ</h2>
      <h3>Q：祖傳金飾沒有任何憑證，可以回收嗎？</h3>
      <p>A：完全可以。我們現場以儀器鑑定，不需要任何購買證明。只需帶本人身份證即可。</p>
      <h3>Q：古早金飾的純度怎麼判斷？</h3>
      <p>A：我們使用XRF螢光分析儀器加火燒確認，測量誤差極小，能精確測出含金量。</p>
      <h3>Q：斷掉或變形的古早金飾可以收嗎？</h3>
      <p>A：可以，我們以純度和重量計價，外觀不影響回收價格。</p>
      <h3>Q：台灣早期金飾通常是什麼純度？</h3>
      <p>A：民國50-70年代的台灣金飾多為22K（916）或24K（999以上），純度相當高。這意味著老金飾的回收價值往往不低。</p>
      <h3>Q：古早金飾有沒有文物收藏價值？</h3>
      <p>A：一般的古早金飾沒有特別的文物收藏價值，主要價值還是在黃金本身。但若有特殊歷史背景或工藝，可能有額外收藏市場。建議先確認黃金回收價值。</p>

      <div style={{ margin: '2rem 0', padding: '1.5rem', background: '#FEF9E7', borderRadius: '8px', borderLeft: '4px solid #B8860B' }}>
        <strong>延伸閱讀：</strong>
        <ul style={{ marginTop: '0.5rem', paddingLeft: '1.5rem' }}>
          <li><a href="/blog/inheritance-gold" style={{ color: '#B8860B' }}>繼承黃金處理</a></li>
          <li><a href="/blog/gold-family" style={{ color: '#B8860B' }}>家傳黃金變現</a></li>
          <li><a href="/blog/old-gold-recovery" style={{ color: '#B8860B' }}>舊金回收指南</a></li>
          <li><a href="/blog/gold-purity" style={{ color: '#B8860B' }}>黃金純度說明</a></li>
          <li><a href="/blog/gold-culture" style={{ color: '#B8860B' }}>台灣黃金文化習俗</a></li>
          <li><a href="/blog/gold-identification" style={{ color: '#B8860B' }}>黃金真假辨識</a></li>
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
