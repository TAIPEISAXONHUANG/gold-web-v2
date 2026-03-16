import os

base = r"C:\Users\user\.openclaw\workspace\gold-web-v2\my-gold-price\app"
base_url = "https://www.gold-tw.com"

pages = {
    "today-gold-price": {
        "title": "今日金價2026｜黃金一錢多少？即時回收報價查詢｜巧品珠寶",
        "desc": "今日黃金回收價格查詢！2026年3月9999純金每台錢約19,000-19,500元。台北大安區巧品珠寶即時金價，免費估價電話 0986-821-626",
        "kw": "今日金價,黃金一錢多少,現在金價,黃金價格,金價查詢,今日黃金回收價",
    },
    "sell-gold-guide": {
        "title": "賣黃金攻略2026｜賣黃金前必看7件事｜巧品珠寶",
        "desc": "賣黃金前必看！如何選店、避免被扣耗損、當場秤重確認重量。台北大安區巧品珠寶，老闆親自鑑定，電話 0986-821-626",
        "kw": "賣黃金,賣黃金注意事項,賣黃金推薦,黃金回收攻略,台北賣黃金",
    },
    "gold-price-compare": {
        "title": "黃金回收比價2026｜台北各家黃金回收價格比較｜巧品珠寶",
        "desc": "台北黃金回收比價！銀樓 vs 回收商 vs 當舖，哪家價格最高？巧品珠寶不扣耗損，每台錢多拿500-1000元。電話 0986-821-626",
        "kw": "黃金回收比價,台北黃金回收比較,黃金哪裡賣最划算,黃金回收推薦台北",
    },
    "gold-recycling-price": {
        "title": "黃金回收行情2026｜各純度黃金回收價格表｜巧品珠寶",
        "desc": "2026年台北黃金回收行情！9999純金、916金、18K、14K各純度回收價格一次看。巧品珠寶即時報價，電話 0986-821-626",
        "kw": "黃金回收行情,黃金回收價格,黃金回收價格表,台北黃金回收行情2026",
    },
}

schema_tpl = """{
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "{title}",
            "description": "{desc}",
            "mainEntityOfPage": {{ "@type": "WebPage", "@id": "{url}" }},
            "author": {{ "@type": "Organization", "name": "巧品珠寶", "url": "https://www.gold-tw.com" }},
            "publisher": {{ "@type": "Organization", "name": "巧品珠寶", "url": "https://www.gold-tw.com" }},
            "image": {{ "@type": "ImageObject", "url": "https://wsrv.nl/?url=https://drive.google.com/uc?id=1ASz1v5ZBQ-WV572r-BC4gZRuraywgKKv&w=1200&output=webp&q=80" }},
            "datePublished": "2026-03-15T00:00:00+08:00",
            "dateModified": "2026-03-17T00:00:00+08:00"
          }}"""

count = 0
for slug, info in pages.items():
    fpath = os.path.join(base, slug, "page.tsx")
    if not os.path.exists(fpath):
        print(f"SKIP (not found): {slug}")
        continue
    with open(fpath, "r", encoding="utf-8") as f:
        content = f.read()

    # Skip if already updated
    if "2026-03-17" in content:
        print(f"SKIP (already updated): {slug}")
        continue

    canon = f"{base_url}/{slug}"
    title = info["title"]
    desc = info["desc"]
    kw = info["kw"]

    # Replace metadata block
    import re
    new = re.sub(
        r"export const metadata: Metadata = \{.*?\};",
        f"""export const metadata: Metadata = {{
  title: '{title}',
  description: '{desc}',
  keywords: '{kw}',
  alternates: {{
    canonical: '{canon}',
  }},
}};""",
        content,
        flags=re.DOTALL
    )

    # Add schema after first <main> tag if not present
    if "application/ld+json" not in new:
        schema = schema_tpl.format(title=title, desc=desc, url=canon)
        script_block = f"""      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{{{
          __html: JSON.stringify({schema})
        }}}}
      />
      """
        new = new.replace("<main ", "<main ", 1)
        # insert after first opening tag of main
        new = re.sub(r'(<main[^>]*>)', r'\1\n      ' + script_block.replace('\\', '\\\\'), new, count=1)

    if new != content:
        with open(fpath, "w", encoding="utf-8") as f:
            f.write(new)
        print(f"Updated: {slug}")
        count += 1

print(f"\nTotal: {count} pages updated")
