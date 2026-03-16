#!/usr/bin/env python3
# -*- coding: utf-8 -*-
import os

blog_dir = r"C:\Users\user\.openclaw\workspace\gold-web-v2\my-gold-price\app\blog"

CTA = """      <p>Phone: <a href="tel:0986821626">0986-821-626</a></p>
      <p>LINE: @QPD888</p>
      <p>Address: Taipei Da-An District, Ji-Nan Rd Sec3, 62-1</p>"""

def make_page(slug, title, desc, keywords, h1, body):
    schema = '''{
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "''' + title + '''",
            "description": "''' + desc + '''",
            "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.gold-tw.com/blog/''' + slug + '''" },
            "author": { "@type": "Organization", "name": "巧品珠寶" },
            "publisher": { "@type": "Organization", "name": "巧品珠寶" },
            "image": { "@type": "ImageObject", "url": "https://www.gold-tw.com/images/og-image.jpg" },
            "datePublished": "2026-03-15",
            "dateModified": "2026-03-16"
          }'''
    return f"""import {{ Metadata }} from 'next';

export const metadata: Metadata = {{
  title: '{title}',
  description: '{desc}',
  keywords: '{keywords}',
}};

export default function Page() {{
  return (
    <main style={{{{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}}}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{{{
          __html: JSON.stringify({schema})
        }}}}
      />
      <h1>{h1}</h1>
{body}
      <hr style={{{{ margin: '2rem 0' }}}} />
      <h2>Contact Us</h2>
{CTA}
    </main>
  );
}}
"""

pages = [
("gold-earring-recovery",
 "黃金耳環回收｜金耳環高價變現｜巧品珠寶",
 "黃金耳環回收推薦！台北高價收購各式金耳環，純度鑑定透明，當場現金付款。",
 "黃金耳環回收,金耳環變現,耳環回收台北",
 "黃金耳環回收｜金耳環高價變現",
 """      <h2>Results: Even small gold earrings are worth recovering</h2>
      <p>Many people think earrings are too small to bother recovering. But a pair of 18K gold earrings weighing 1-2 grams can still be worth hundreds. We accept all types of gold earrings, even single pieces.</p>
      <h2>What we accept</h2>
      <ul>
        <li>9999 pure gold, 916 gold earrings</li>
        <li>18K, 14K, 10K gold earrings</li>
        <li>Diamond-set gold earrings (diamonds estimated separately)</li>
        <li>Single pieces accepted (no pair required)</li>
      </ul>
      <h2>FAQ</h2>
      <h3>Q: I only have one earring, can it be recovered?</h3>
      <p>A: Yes, we price by weight so single earrings are accepted.</p>
      <h3>Q: My earrings have small diamonds, how are they priced?</h3>
      <p>A: Gold and diamonds are estimated separately, we give you a total.</p>"""),

("gold-family",
 "黃金傳家｜傳家黃金保存與變現｜巧品珠寶",
 "黃金傳家意義深遠！了解傳家寶金飾的保存方式與變現時機，台北巧品珠寶提供專業諮詢。",
 "黃金傳家,傳家寶黃金,金飾傳承",
 "黃金傳家｜傳承與變現的智慧",
 """      <h2>Conclusion: Heirloom gold is both sentimental and financial value</h2>
      <p>Gold jewelry passed down through generations carries precious family memories. When life requires funds or pieces go unworn, selling is a practical choice. We respect every customer's story.</p>
      <h2>Storage tips for heirloom gold</h2>
      <ul>
        <li>Keep in dry, dark environment</li>
        <li>Wrap in soft cloth, separate from other metals</li>
        <li>Check periodically for damage</li>
        <li>Record weight and any purchase info if available</li>
      </ul>
      <h2>FAQ</h2>
      <h3>Q: Grandmother's jewelry has no receipt, can it be recovered?</h3>
      <p>A: Absolutely. We appraise on-site, no proof of purchase needed.</p>
      <h3>Q: Can I get a free estimate without committing to sell?</h3>
      <p>A: Yes, appraisal is always free with no obligation.</p>"""),

("gold-insurance",
 "黃金保險｜黃金保障規劃指南｜巧品珠寶",
 "黃金保險建議！了解實體黃金的保管風險與保障規劃，台北巧品珠寶提供專業諮詢服務。",
 "黃金保險,黃金保管,黃金安全,黃金保障",
 "黃金保險｜實體黃金保障完整指南",
 """      <h2>Conclusion: Physical gold needs proper storage and protection</h2>
      <p>Owning physical gold is great, but poor storage can lead to loss or theft. Learn how to protect your gold properly.</p>
      <h2>Storage options</h2>
      <ul>
        <li>Home safe: convenient, bolt to wall for security</li>
        <li>Bank safe deposit box: highest security, annual fee</li>
        <li>Gold passbook: no physical storage needed</li>
      </ul>
      <h2>Insurance tips</h2>
      <ul>
        <li>Record weight, purity and purchase receipts</li>
        <li>Take photos for records</li>
        <li>Ask your insurer about personal property coverage</li>
      </ul>
      <h2>FAQ</h2>
      <h3>Q: Is it safe to keep gold at home?</h3>
      <p>A: Small amounts are fine; large amounts are better in a bank safe deposit box.</p>"""),

("gold-liquid",
 "黃金流當｜黃金典當借款說明｜巧品珠寶",
 "黃金流當、典當借款說明！了解黃金流當與直接回收的差異，台北巧品珠寶提供高價收購服務。",
 "黃金流當,黃金典當,黃金借款,黃金抵押",
 "黃金流當｜典當與直接回收的選擇",
 """      <h2>Conclusion: Direct recovery usually beats pawning</h2>
      <p>Pawning gold gives you only 70-80% of market value plus monthly interest. Direct recovery at market price with no fees is often more profitable.</p>
      <h2>Pawning vs Direct Recovery</h2>
      <ul>
        <li>Pawning: 70-80% value, monthly interest, can reclaim item</li>
        <li>Direct recovery: full market price, no fees, no reclaim</li>
      </ul>
      <h2>FAQ</h2>
      <h3>Q: I want to keep the option to get my gold back - can I still pawn it?</h3>
      <p>A: Yes, pawning is the only option if you want to reclaim. Direct recovery is better if you're sure you want to sell.</p>
      <h3>Q: Do you offer pawn services?</h3>
      <p>A: We specialize in direct recovery. For pawning, please inquire at a local pawn shop.</p>"""),

("gold-necklace-recovery",
 "黃金項鍊回收｜金鍊高價變現｜巧品珠寶",
 "黃金項鍊回收推薦！台北高價收購各式金項鍊，斷鍊、舊款皆可，不扣耗損當場付款。",
 "黃金項鍊回收,金鍊變現,項鍊回收台北",
 "黃金項鍊回收｜金鍊高價變現",
 """      <h2>Conclusion: Gold necklaces are the most common recovery item - fast and simple</h2>
      <p>Whether 9999 pure gold, 18K, or broken chains, we offer top market prices for all gold necklaces.</p>
      <h2>Types we accept</h2>
      <ul>
        <li>9999 pure gold, 916 gold necklaces</li>
        <li>18K, 14K, 10K gold necklaces</li>
        <li>Platinum necklaces</li>
        <li>Broken or damaged necklaces</li>
        <li>Necklaces with pendants (pendants estimated separately)</li>
      </ul>
      <h2>FAQ</h2>
      <h3>Q: My necklace is broken - does that reduce the price?</h3>
      <p>A: No, we price by weight so broken necklaces get the same price.</p>
      <h3>Q: My necklace has a pendant - how is it priced?</h3>
      <p>A: Gold chain and pendant are weighed together; gemstones estimated separately.</p>"""),

("gold-pendant-recovery",
 "黃金墜子回收｜金吊墜高價變現｜巧品珠寶",
 "黃金墜子回收推薦！各式金墜、神明吊墜、鑲嵌寶石金墜皆可收購，台北巧品珠寶專業估價。",
 "黃金墜子回收,金吊墜變現,金墜回收台北",
 "黃金墜子回收｜金吊墜高價變現",
 """      <h2>Conclusion: All gold pendant styles accepted, purity and weight determine value</h2>
      <p>From religious pendants to modern designs, we accept all gold pendant types at fair market prices.</p>
      <h2>Types we accept</h2>
      <ul>
        <li>Religious pendants (Guanyin, Buddha, Pixiu)</li>
        <li>Diamond-set gold pendants</li>
        <li>Geometric and modern designs</li>
        <li>All K-gold pendant types</li>
      </ul>
      <h2>FAQ</h2>
      <h3>Q: Can religious pendants be sold?</h3>
      <p>A: Yes, this is entirely your personal choice.</p>
      <h3>Q: My pendant has small diamonds - how are they priced?</h3>
      <p>A: Gold and diamonds are appraised separately with full transparency.</p>"""),

("gold-purity",
 "黃金純度怎麼看？K數、9999完整說明｜巧品珠寶",
 "黃金純度完整說明！9999、999、916、18K、14K差異解析，如何識別黃金純度印記。",
 "黃金純度,K金純度,9999黃金,916黃金,18K黃金",
 "黃金純度怎麼看？K數完整說明",
 """      <h2>Conclusion: Know your purity markings to avoid being shortchanged</h2>
      <p>Gold purity directly affects recovery price. Understanding purity markings is essential knowledge for every gold holder.</p>
      <h2>Common gold purity reference</h2>
      <ul>
        <li>9999 / 999.9 = 24K = 99.99% pure (gold bars, coins)</li>
        <li>916 = 22K = 91.6% (traditional Taiwanese jewelry)</li>
        <li>750 / 18K = 75% (modern jewelry mainstream)</li>
        <li>585 / 14K = 58.5% (common in Western jewelry)</li>
        <li>375 / 9K = 37.5% (lower purity pieces)</li>
      </ul>
      <h2>FAQ</h2>
      <h3>Q: I can't find any markings - how do I know the purity?</h3>
      <p>A: Bring it to us for a professional instrument test - takes just a few minutes.</p>
      <h3>Q: Does higher purity mean higher recovery price?</h3>
      <p>A: Yes, 9999 pure gold commands the highest unit price; K-gold is calculated proportionally.</p>"""),

("gold-ring-recovery",
 "黃金戒指回收｜結婚戒指變現｜巧品珠寶",
 "黃金戒指回收推薦！結婚戒指、各式K金戒指高價收購，不扣耗損台北當場付款。",
 "黃金戒指回收,結婚戒指變現,金戒指回收台北",
 "黃金戒指回收｜各式金戒高價變現",
 """      <h2>Conclusion: Wedding rings and all gold rings can be recovered at top prices</h2>
      <p>Whether old pure gold wedding bands, modern 18K diamond rings, or plain K-gold rings, we offer fair market prices for all.</p>
      <h2>Types we accept</h2>
      <ul>
        <li>9999, 916 pure gold rings</li>
        <li>18K, 14K gold rings</li>
        <li>Diamond-set gold rings (diamonds estimated separately)</li>
        <li>Wedding bands (pairs or singles)</li>
        <li>Deformed or damaged rings</li>
      </ul>
      <h2>FAQ</h2>
      <h3>Q: My wedding ring has sentimental value - do I have to decide right away?</h3>
      <p>A: Not at all. Get a free estimate first, decide at your own pace.</p>
      <h3>Q: The ring has a gemstone - how is the gold part calculated?</h3>
      <p>A: We separate metal and gemstone with full transparent breakdown.</p>"""),

("gold-safety",
 "黃金保存安全指南｜如何安全存放黃金｜巧品珠寶",
 "黃金保存安全完整指南！實體黃金存放方式、防盜竊風險，以及何時考慮變現的建議。",
 "黃金保存,黃金安全存放,黃金保管方法",
 "黃金保存安全指南｜如何妥善存放黃金",
 """      <h2>Conclusion: Physical gold storage requires careful planning</h2>
      <p>Physical gold ownership is great, but improper storage risks loss or theft. Here are practical storage recommendations.</p>
      <h2>Storage options compared</h2>
      <ul>
        <li>Home safe: convenient, bolt to wall or floor</li>
        <li>Bank safe deposit box: highest security, annual fee 500-2000 NTD</li>
        <li>Bank gold passbook: eliminates physical storage risk</li>
        <li>Distributed storage: don't keep all gold in one place</li>
      </ul>
      <h2>Safety tips</h2>
      <ul>
        <li>Never share gold ownership info on social media</li>
        <li>Record weight and characteristics for insurance</li>
        <li>Tell trusted family members where gold is stored</li>
      </ul>
      <h2>FAQ</h2>
      <h3>Q: Does gold tarnish or corrode?</h3>
      <p>A: Pure 24K gold almost never oxidizes. K-gold may slightly discolor due to alloy content, but this doesn't affect recovery value.</p>"""),

("gold-scam-prevent",
 "黃金詐騙防範｜常見黃金騙局攻略｜巧品珠寶",
 "黃金詐騙防範必看！常見黃金回收騙局、黑心銀樓手法解析，教你如何安全賣黃金。",
 "黃金詐騙,黃金防騙,黑心銀樓,黃金回收騙局",
 "黃金詐騙防範｜常見騙局完整攻略",
 """      <h2>Conclusion: Know the scams to sell gold safely</h2>
      <p>While most gold dealers are honest, some use deceptive tactics. Know the common scams to protect yourself.</p>
      <h2>Common gold recovery scams</h2>
      <ul>
        <li>Scale tampering: manipulating weights when you're not watching</li>
        <li>Excessive deductions: claiming 20-30% "impurity loss"</li>
        <li>Purity underreporting: calling 916 gold 14K to lower the price</li>
        <li>Bait-and-switch: swapping your gold during appraisal</li>
        <li>Online fraud: fake dealers who disappear after receiving payment</li>
      </ul>
      <h2>How to protect yourself</h2>
      <ol>
        <li>Choose established stores with good reputation</li>
        <li>Watch the entire process: see the scale reading yourself</li>
        <li>Demand transparent appraisal</li>
        <li>Compare prices - suspiciously low offers are a red flag</li>
        <li>Never let your gold out of sight</li>
      </ol>
      <h2>FAQ</h2>
      <h3>Q: How do I verify the weight is accurate?</h3>
      <p>A: Demand on-the-spot weighing with you watching - we guarantee full transparency.</p>"""),
]

updated = 0
for item in pages:
    slug, title, desc, keywords, h1, body = item
    filepath = os.path.join(blog_dir, slug, "page.tsx")
    if not os.path.exists(os.path.dirname(filepath)):
        print(f"Dir not found: {slug}")
        continue
    content = make_page(slug, title, desc, keywords, h1, body)
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
    updated += 1
    print(f"Done: {slug}")

print(f"\nTotal: {updated}")
