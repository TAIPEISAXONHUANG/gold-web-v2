import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '黃金純度怎麼看？K數、9999完整說明｜巧品珠寶',
  description: '黃金純度完整說明！9999、999、916、18K、14K各成色差異、辨識方式與回收價格對照表，一篇搞懂黃金純度計算。',
  keywords: '黃金純度,K金純度,9999黃金,916黃金,18K黃金',
  alternates: {
    canonical: 'https://www.gold-tw.com/blog/gold-purity',
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
            "headline": "黃金純度怎麼看？K數、9999完整說明｜巧品珠寶",
            "description": "黃金純度完整說明！9999、999、916、18K、14K差異解析，如何識別黃金純度印記。",
            "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.gold-tw.com/blog/gold-purity" },
            "author": { "@type": "Organization", "name": "巧品珠寶", "url": "https://www.gold-tw.com", "@id": "https://www.gold-tw.com/#business" },
            "publisher": { "@type": "Organization", "name": "巧品珠寶", "url": "https://www.gold-tw.com", "logo": { "@type": "ImageObject", "url": "https://wsrv.nl/?url=https://drive.google.com/uc?id=16UrCpYWRkyEkvL7M73o0DIAvkKWtF0Lp&w=200&output=webp" } },
            "image": { "@type": "ImageObject", "url": "https://wsrv.nl/?url=https://drive.google.com/uc?id=1ASz1v5ZBQ-WV572r-BC4gZRuraywgKKv&w=1200&output=webp&q=80" },
            "datePublished": "2026-03-15T00:00:00+08:00",
            "dateModified": "2026-03-16T00:00:00+08:00"
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
              { "@type": "ListItem", "position": 3, "name": "黃金純度怎麼看？K數、9999完整說明｜巧品珠寶" }
            ]
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              { "@type": "Question", "name": "24K和18K差多少？", "acceptedAnswer": { "@type": "Answer", "text": "24K含金量99.9%、18K含金量75%。同重量的話，18K回收價約為24K的75%。以2026年金價每錢約8,500元計算，一錢24K黃金回收約8,500元，18K則約6,375元。" } },
              { "@type": "Question", "name": "怎麼知道我的金飾是幾K？", "acceptedAnswer": { "@type": "Answer", "text": "看金飾上的印記：999=24K、750=18K、585=14K、417=10K。也可以到店用XRF螢光分析儀檢測，準確度達99.9%以上。" } },
              { "@type": "Question", "name": "純度檢測會弄壞金飾嗎？", "acceptedAnswer": { "@type": "Answer", "text": "XRF螢光分析是非破壞性檢測，不會損傷物品。火燒測試才會留下痕跡，會事先徵得同意。建議選擇有XRF設備的店家進行鑑定。" } },
              { "@type": "Question", "name": "9999和999有什麼差別？", "acceptedAnswer": { "@type": "Answer", "text": "9999表示含金量99.99%，999表示含金量99.9%。差異僅0.09%，但9999純金在回收時每錢可能多10-30元。金條、金幣多為9999純金。" } },
              { "@type": "Question", "name": "K金回收價怎麼算？", "acceptedAnswer": { "@type": "Answer", "text": "K金回收價＝當日純金回收價×含金比例。例如18K含金75%，若當日純金回收價每錢8,500元，18K回收價約每錢6,375元。實際價格依店家報價為準。" } },
              { "@type": "Question", "name": "台灣常見的黃金純度有哪些？", "acceptedAnswer": { "@type": "Answer", "text": "台灣市場最常見的是9999純金（金條、金飾）和22K（916，傳統金飾）。18K和14K則多見於設計款珠寶。銀樓販售的黃金飾品多為9999或916標示。" } }
            ]
          })
        }}
      />

      <h1>黃金純度怎麼看？K數完整說明</h1>

      <div style={{ background: '#fffbeb', borderLeft: '4px solid #f59e0b', padding: '16px', margin: '16px 0', borderRadius: '8px' }}>
        <strong>📌 重點摘要：</strong>
        <ul style={{ margin: '8px 0 0 0', paddingLeft: '1.5rem' }}>
          <li>黃金純度標示：24K=99.9{'%'}以上、22K=91.6{'%'}、18K=75{'%'}、14K=58.5{'%'}</li>
          <li>純度越高，回收價格越接近國際金價，9999純金回收價最高</li>
          <li>辨識方法：看印記數字、XRF螢光分析儀檢測最精確</li>
          <li>台灣傳統金飾多為9999或916，進口設計款多為18K或14K</li>
          <li>K金回收價＝純金價×含金比例，了解純度才能掌握合理價格</li>
        </ul>
      </div>

      <h2>黃金純度與K數怎麼對照？</h2>
      <p>黃金純度是衡量黃金含量的標準，直接影響<a href="/blog/gold-recycling-price-factors" style={{ color: '#B8860B' }}>回收價格</a>的高低。以下是市面上常見的黃金純度對照：</p>
      <ul>
        <li><strong>9999 / 999.9 = 24K = 99.99{'%'}純金</strong>：最高純度，常見於金條、金幣、台灣銀樓黃金飾品。回收價最高，幾乎等於國際金價換算。</li>
        <li><strong>999 = 24K = 99.9{'%'}純金</strong>：與9999差異極小，部分老金飾會標示為999。回收價與9999幾乎相同。</li>
        <li><strong>916 = 22K = 91.6{'%'}</strong>：傳統台灣金飾常見純度，質地較硬適合製作精緻造型。回收價約為純金的91.6{'%'}。</li>
        <li><strong>750 / 18K = 75{'%'}</strong>：國際珠寶品牌主流，含25{'%'}其他金屬（銀、銅、鈀），顏色多變可做玫瑰金、白K金。</li>
        <li><strong>585 / 14K = 58.5{'%'}</strong>：歐美市場常見，硬度更高適合鑲嵌寶石，價格較親民但回收價相對較低。</li>
        <li><strong>375 / 9K = 37.5{'%'}</strong>：含金量最低的K金級別，部分國家不認定為黃金飾品，回收價較低。</li>
      </ul>

      <h2>如何辨識金飾上的純度印記</h2>
      <p>購買或回收黃金時，正確辨識純度印記非常重要。台灣合格金飾依規定須標示純度與店家標記。常見印記位置在戒指內圈、項鍊扣環旁、手鐲內側等不顯眼處。以放大鏡觀察，可看到如「9999」、「Au750」、「18K」等字樣。若印記模糊或無法辨識，建議到有<a href="/blog/gold-identification" style={{ color: '#B8860B' }}>專業鑑定設備</a>的店家，使用XRF螢光分析儀進行非破壞性檢測，準確度可達99.9{'%'}以上，全程僅需2-3分鐘。需注意的是，部分老舊金飾或來路不明的飾品可能沒有印記，這時只能依賴儀器檢測來判定實際含金量。</p>

      <h2>純度與回收價格有什麼關係？</h2>
      <p>黃金回收價格與純度成正比。以2026年國際金價每盎司約2,300美元為參考，台灣<a href="/blog/gold-price-2026" style={{ color: '#B8860B' }}>每錢回收價約8,500元</a>（依當日行情浮動）。不同純度的回收價差異如下：9999純金可拿到最高每錢回收價；22K（916）約為純金價的91.6{'%'}；18K約為75{'%'}；14K約為58.5{'%'}。舉例來說，一條10錢重的18K金項鍊，回收價約為85,000元×75{'%'}＝63,750元。了解這個計算方式，就能在<a href="/blog/sell-gold-tips" style={{ color: '#B8860B' }}>賣黃金時</a>快速判斷店家報價是否合理，避免被低價收購。</p>

      <h2>台灣市場常見黃金純度有哪些？</h2>
      <p>台灣黃金市場有其獨特的消費習慣。傳統銀樓販售的金飾以9999純金為主流，包含金戒指、金項鍊、金手鐲等，特別是婚嫁金飾幾乎都要求9999純金。另一方面，百貨專櫃的國際品牌珠寶則以18K為大宗，因為18K硬度較高，適合製作精緻設計與鑲嵌鑽石。近年來14K飾品也逐漸流行，價格較18K親民約20{'%'}。如果您持有<a href="/blog/gold-vs-k-gold-difference" style={{ color: '#B8860B' }}>K金飾品</a>想了解回收價格，建議參考我們的<a href="/blog/k-gold-recovery-guide-2026" style={{ color: '#B8860B' }}>K金回收指南</a>取得更詳細的資訊。</p>

      <h2>選擇純度有哪些建議與注意事項？</h2>
      <p>如果以保值為目的，建議選擇9999純金，因為回收價格最高且計算最單純。若注重外觀設計與日常佩戴，18K是最佳選擇，硬度足夠不易變形，且可製作多種顏色（黃K金、白K金、玫瑰金）。購買時務必確認印記標示清楚，並索取保證書或發票。回收時，不同純度的金飾建議分開存放、分開秤重，避免混在一起被以低純度價格計算。若不確定手中金飾的純度，可先到巧品珠寶進行免費鑑定，我們使用進口XRF設備，現場即可告知精確含金量。</p>

      <section style={{ marginTop: '2.5rem', padding: '2rem', background: '#f9fafb', borderRadius: '12px', border: '1px solid #e5e7eb' }}>
        <h2 style={{ fontSize: '1.3rem', fontWeight: 'bold', color: '#1f2937', marginTop: 0, marginBottom: '1rem' }}>❓ 常見問題</h2>
        <div style={{ marginBottom: '1rem', background: 'white', padding: '1rem', borderRadius: '8px', border: '1px solid #e5e7eb' }}>
          <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '1rem', color: '#1f2937' }}>Q: 24K和18K差多少？</h3>
          <p style={{ margin: 0, color: '#4b5563', lineHeight: '1.6' }}>A: 24K含金量99.9{'%'}、18K含金量75{'%'}。同重量的話，18K回收價約為24K的75{'%'}。以2026年金價每錢約8,500元計算，一錢24K黃金回收約8,500元，18K則約6,375元。</p>
        </div>
        <div style={{ marginBottom: '1rem', background: 'white', padding: '1rem', borderRadius: '8px', border: '1px solid #e5e7eb' }}>
          <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '1rem', color: '#1f2937' }}>Q: 怎麼知道我的金飾是幾K？</h3>
          <p style={{ margin: 0, color: '#4b5563', lineHeight: '1.6' }}>A: 看金飾上的印記：999=24K、750=18K、585=14K、417=10K。也可以到店用XRF螢光分析儀檢測，準確度達99.9{'%'}以上。</p>
        </div>
        <div style={{ marginBottom: '1rem', background: 'white', padding: '1rem', borderRadius: '8px', border: '1px solid #e5e7eb' }}>
          <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '1rem', color: '#1f2937' }}>Q: 純度檢測會弄壞金飾嗎？</h3>
          <p style={{ margin: 0, color: '#4b5563', lineHeight: '1.6' }}>A: XRF螢光分析是非破壞性檢測，不會損傷物品。火燒測試才會留下痕跡，會事先徵得同意。建議選擇有XRF設備的店家進行鑑定。</p>
        </div>
        <div style={{ marginBottom: '1rem', background: 'white', padding: '1rem', borderRadius: '8px', border: '1px solid #e5e7eb' }}>
          <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '1rem', color: '#1f2937' }}>Q: 9999和999有什麼差別？</h3>
          <p style={{ margin: 0, color: '#4b5563', lineHeight: '1.6' }}>A: 9999表示含金量99.99{'%'}，999表示含金量99.9{'%'}。差異僅0.09{'%'}，但9999純金在回收時每錢可能多10-30元。金條、金幣多為9999純金。</p>
        </div>
        <div style={{ marginBottom: '1rem', background: 'white', padding: '1rem', borderRadius: '8px', border: '1px solid #e5e7eb' }}>
          <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '1rem', color: '#1f2937' }}>Q: K金回收價怎麼算？</h3>
          <p style={{ margin: 0, color: '#4b5563', lineHeight: '1.6' }}>A: K金回收價＝當日純金回收價×含金比例。例如18K含金75{'%'}，若當日純金回收價每錢8,500元，18K回收價約每錢6,375元。實際價格依店家報價為準。</p>
        </div>
        <div style={{ marginBottom: '1rem', background: 'white', padding: '1rem', borderRadius: '8px', border: '1px solid #e5e7eb' }}>
          <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '1rem', color: '#1f2937' }}>Q: 台灣常見的黃金純度有哪些？</h3>
          <p style={{ margin: 0, color: '#4b5563', lineHeight: '1.6' }}>A: 台灣市場最常見的是9999純金（金條、金飾）和22K（916，傳統金飾）。18K和14K則多見於設計款珠寶。銀樓販售的黃金飾品多為9999或916標示。</p>
        </div>
      </section>

      <div style={{ background: '#f0f9ff', borderLeft: '4px solid #3b82f6', padding: '16px', margin: '2rem 0', borderRadius: '8px', fontSize: '0.9rem' }}>
        <strong>📚 參考資料：</strong>{' '}
        <span dangerouslySetInnerHTML={{ __html: '純度標準參考：<a href="https://www.cnsonline.com.tw" target="_blank" rel="noopener" style="color:#991b1b;font-weight:bold">CNS國家標準</a>及ISO 9202國際貴金屬純度標準' }} />
      </div>

      <div style={{ margin: '2rem 0', padding: '1.5rem', background: '#FEF9E7', borderRadius: '8px', borderLeft: '4px solid #B8860B' }}>
        <strong>延伸閱讀：</strong>
        <ul style={{ marginTop: '0.5rem', paddingLeft: '1.5rem' }}>
          <li><a href="/blog/gold-identification" style={{ color: '#B8860B' }}>黃金鑑定方法</a></li>
          <li><a href="/blog/gold-vs-k-gold-difference" style={{ color: '#B8860B' }}>黃金vs K金差別</a></li>
          <li><a href="/blog/k-gold-recovery-guide-2026" style={{ color: '#B8860B' }}>K金回收指南</a></li>
          <li><a href="/blog/gold-recycling-price-factors" style={{ color: '#B8860B' }}>影響回收價格的因素</a></li>
          <li><a href="/blog/gold-calculator" style={{ color: '#B8860B' }}>黃金計算機</a></li>
          <li><a href="/blog/gold-recovery-guide-2026" style={{ color: '#B8860B' }}>2026回收完整指南</a></li>
          <li><a href="/blog/gold-scale-trap" style={{ color: '#B8860B' }}>秤重陷阱揭露</a></li>
          <li><a href="/blog/sell-gold-tips" style={{ color: '#B8860B' }}>賣黃金技巧</a></li>
        </ul>
      </div>

      <hr style={{ margin: '2rem 0' }} />
      <h2>聯絡我們</h2>
      <p>電話：<a href="tel:0986821626">0986-821-626</a></p>
      <p>LINE：@QPD888</p>
      <p>地址：台北市大安區濟南路三段62-1號</p>
    </main>
  );
}
