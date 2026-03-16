import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '黃金回收流程是什麼？5分鐘讓你搞懂整個過程',
  description: '第一次賣黃金不知道流程？本文5分鐘帶你了解黃金回收完整步驟：從攜帶物品、現場鑑定、秤重報價到當場結清，讓你安心出售不吃虧。',
  keywords: '黃金回收流程,賣黃金步驟,黃金回收怎麼賣,黃金回收注意事項,黃金回收教學',
  alternates: {
    canonical: 'https://www.gold-tw.com/blog/gold-recycling-process',
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
            "headline": "黃金回收流程是什麼？5分鐘讓你搞懂整個過程",
            "author": { "@type": "Organization", "name": "巧品珠寶" },
            "publisher": { "@type": "Organization", "name": "巧品珠寶" },
            "datePublished": "2026-03-16",
              "dateModified": "2026-03-16T00:00:00+08:00",
            "description": "第一次賣黃金不知道流程？本文5分鐘帶你了解黃金回收完整步驟：從攜帶物品、現場鑑定、秤重報價到當場結清，讓你安心出售不吃虧。"
          })
        }}
      />
      <h1>黃金回收流程是什麼？5分鐘讓你搞懂整個過程</h1>

      <p>很多人手邊有黃金想變現，但從來沒賣過，不知道「黃金回收」到底是怎麼一回事。其實整個流程非常簡單，本文帶你從頭到尾走一遍，看完就懂！</p>

      <h2>第一步：準備好要出售的黃金</h2>
      <p>先整理家中有哪些黃金可以出售，常見的品項包括：</p>
      <ul>
        <li>黃金戒指、項鍊、手鍊、手環</li>
        <li>金條、金塊、金幣</li>
        <li>黃金墜子、耳環</li>
        <li>老金飾、傳統台灣金飾</li>
        <li>各種K金（18K、14K、10K）</li>
      </ul>
      <p>只要是含金成分的物品，基本上都可以拿去詢問回收。</p>

      <h2>第二步：帶好身份證件</h2>
      <p>依法規定，黃金回收需核實身份。請攜帶：</p>
      <ul>
        <li><strong>身份證正本</strong>（必備）</li>
        <li>若有購買憑證、保證書，可一併帶去（有時有加分效果）</li>
      </ul>
      <p>未攜帶身份證者，業者依規定無法受理交易，請務必備妥。</p>

      <h2>第三步：前往回收店現場鑑定</h2>
      <p>到達回收店後，工作人員會進行以下鑑定：</p>
      <ul>
        <li><strong>目視檢查</strong>：確認飾品外觀、印記（K數標示）</li>
        <li><strong>試金石測試或X射線螢光儀（XRF）</strong>：精確判斷純度</li>
        <li><strong>秤重</strong>：以電子秤秤出重量（台錢或克）</li>
      </ul>
      <p>整個鑑定過程通常只需 5～10 分鐘，全程公開透明。</p>

      <h2>第四步：確認報價</h2>
      <p>鑑定完成後，業者會根據：</p>
      <ul>
        <li>當日國際金價</li>
        <li>黃金純度</li>
        <li>實際重量</li>
      </ul>
      <p>計算出報價，並告知您可以拿到的金額。</p>
      <p><strong>小提醒：</strong>您完全可以拒絕，不滿意報價不需要強迫出售。正派業者不會施加任何壓力。</p>

      <h2>第五步：同意報價、當場結清</h2>
      <p>若您接受報價，業者通常會提供以下付款方式：</p>
      <ul>
        <li>現金（最常見）</li>
        <li>銀行轉帳</li>
      </ul>
      <p>交易完成後，會開立收據或交易明細，整個流程到此結束！</p>

      <h2>完整流程一覽</h2>
      <p style={{ background: '#f5f5f5', padding: '1rem', borderRadius: '8px' }}>
        整理黃金 → 帶身份證 → 前往門市 → 現場鑑定秤重 → 確認報價 → 同意後當場收款
      </p>

      <h2>常見問題 Q&A</h2>
      <h3>Q：不知道純度可以賣嗎？</h3>
      <p>可以！帶去現場，業者會幫您鑑定純度，不需要事先知道。</p>

      <h3>Q：少量黃金也能賣嗎？</h3>
      <p>可以，哪怕只有一枚小戒指也可以交易，不限最低重量。</p>

      <h3>Q：當天就可以拿到錢嗎？</h3>
      <p>是的，正規業者均為當場結清，不需要等待。</p>

      <h3>Q：可以帶黃金去詢價但不賣嗎？</h3>
      <p>當然可以！詢價完全免費，不賣沒有任何問題。</p>

      <hr style={{ margin: '2rem 0' }} />

      <h2>立即預約免費估價</h2>
      <p>📞 電話：0986-821-626</p>
      <p>💬 LINE：@QPD888</p>
      <p>🌐 官網：https://www.gold-tw.com/</p>
    </main>
  );
}
