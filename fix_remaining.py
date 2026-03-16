import os, re

base = r"C:\Users\user\.openclaw\workspace\gold-web-v2\my-gold-price\app"
base_url = "https://www.gold-tw.com"

# 1. Fix faq + faq-structured canonical
for slug in ["faq", "faq-structured"]:
    fpath = os.path.join(base, slug, "page.tsx")
    if not os.path.exists(fpath):
        continue
    with open(fpath, "r", encoding="utf-8") as f:
        content = f.read()
    new = re.sub(
        r"(export const metadata: Metadata = \{)(.*?)(^\};)",
        lambda m: (
            m.group(1) + m.group(2).rstrip() +
            f"\n  alternates: {{\n    canonical: '{base_url}/{slug}',\n  }},\n" +
            m.group(3)
        ),
        content, flags=re.DOTALL | re.MULTILINE
    )
    if new != content:
        with open(fpath, "w", encoding="utf-8") as f:
            f.write(new)
        print(f"Fixed canonical: {slug}")

# 2. Add Schema to 4 landing pages + faq pages
schema_pages = {
    "faq": ("黃金回收常見問題FAQ｜台北巧品珠寶", "黃金回收、K金回收常見問題：怎麼計算價格？流程是什麼？需要什麼證件？一篇解答所有疑問！"),
    "faq-structured": ("黃金回收結構化FAQ｜巧品珠寶", "黃金回收常見問題結構化整理，快速找到答案。台北大安區巧品珠寶。"),
    "today-gold-price": ("今日金價2026｜黃金一錢多少？即時回收報價查詢｜巧品珠寶", "今日黃金回收價格查詢！2026年3月9999純金每台錢約19,000-19,500元。"),
    "sell-gold-guide": ("賣黃金攻略2026｜賣黃金前必看7件事｜巧品珠寶", "賣黃金前必看！如何選店、避免被扣耗損、當場秤重確認重量。"),
    "gold-price-compare": ("黃金回收比價2026｜台北各家黃金回收價格比較｜巧品珠寶", "台北黃金回收比價！銀樓 vs 回收商 vs 當舖，哪家價格最高？"),
    "gold-recycling-price": ("黃金回收行情2026｜各純度黃金回收價格表｜巧品珠寶", "2026年台北黃金回收行情！各純度回收價格一次看。"),
}

for slug, (title, desc) in schema_pages.items():
    fpath = os.path.join(base, slug, "page.tsx")
    if not os.path.exists(fpath):
        continue
    with open(fpath, "r", encoding="utf-8") as f:
        content = f.read()
    if "ld+json" in content:
        print(f"Skip schema (exists): {slug}")
        continue
    canon = f"{base_url}/{slug}"
    script = (
        '\n      <script\n'
        '        type="application/ld+json"\n'
        '        dangerouslySetInnerHTML={{\n'
        '          __html: JSON.stringify({\n'
        '            "@context": "https://schema.org",\n'
        '            "@type": "Article",\n'
        f'            "headline": "{title}",\n'
        f'            "description": "{desc}",\n'
        f'            "mainEntityOfPage": {{ "@type": "WebPage", "@id": "{canon}" }},\n'
        '            "author": { "@type": "Organization", "name": "巧品珠寶", "url": "https://www.gold-tw.com" },\n'
        '            "publisher": { "@type": "Organization", "name": "巧品珠寶", "url": "https://www.gold-tw.com" },\n'
        '            "image": { "@type": "ImageObject", "url": "https://wsrv.nl/?url=https://drive.google.com/uc?id=1ASz1v5ZBQ-WV572r-BC4gZRuraywgKKv&w=1200&output=webp&q=80" },\n'
        '            "datePublished": "2026-03-15T00:00:00+08:00",\n'
        '            "dateModified": "2026-03-17T00:00:00+08:00"\n'
        '          })\n'
        '        }}\n'
        '      />\n'
    )
    new = re.sub(r'(<main[^>]*>)', r'\1' + script, content, count=1)
    if new != content:
        with open(fpath, "w", encoding="utf-8") as f:
            f.write(new)
        print(f"Added schema: {slug}")

# 3. Add blog internal links to all district pages
dist_dir = os.path.join(base, "district")
related_block = """
      <div style={{ margin: '2rem 0', padding: '1.5rem', background: '#FEF9E7', borderRadius: '8px', borderLeft: '4px solid #B8860B' }}>
        <strong>延伸閱讀：</strong>
        <ul style={{ marginTop: '0.5rem', paddingLeft: '1.5rem' }}>
          <li><a href="/blog/gold-appraise" style={{ color: "#B8860B" }}>黃金免費估價｜免費專業鑑定</a></li>
          <li><a href="/blog/gold-recycling-process" style={{ color: "#B8860B" }}>黃金回收流程完整說明</a></li>
          <li><a href="/blog/gold-scam-prevent" style={{ color: "#B8860B" }}>黃金回收詐騙防範指南</a></li>
          <li><a href="/blog/what-to-bring-when-selling-gold-2026" style={{ color: "#B8860B" }}>賣黃金要帶什麼？完整清單</a></li>
          <li><a href="/blog/gold-purity" style={{ color: "#B8860B" }}>黃金純度完整說明</a></li>
        </ul>
      </div>
"""

dist_count = 0
for slug in os.listdir(dist_dir):
    fpath = os.path.join(dist_dir, slug, "page.tsx")
    if not os.path.exists(fpath):
        continue
    with open(fpath, "r", encoding="utf-8") as f:
        content = f.read()
    if "延伸閱讀" in content or "相關文章" in content:
        continue
    new = content.replace(
        "\n      <hr style={{ margin: '2rem 0' }} />",
        related_block + "\n      <hr style={{ margin: '2rem 0' }} />",
        1
    )
    if new != content:
        with open(fpath, "w", encoding="utf-8") as f:
            f.write(new)
        dist_count += 1

print(f"Added blog links to {dist_count} district pages")
