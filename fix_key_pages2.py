import os, re

base = r"C:\Users\user\.openclaw\workspace\gold-web-v2\my-gold-price\app"
base_url = "https://www.gold-tw.com"

pages = {
    "today-gold-price": (
        "今日金價2026｜黃金一錢多少？即時回收報價查詢｜巧品珠寶",
        "今日黃金回收價格查詢！2026年3月9999純金每台錢約19,000-19,500元。台北大安區巧品珠寶即時金價，免費估價電話 0986-821-626",
        "今日金價,黃金一錢多少,現在金價,黃金價格,金價查詢,今日黃金回收價",
    ),
    "sell-gold-guide": (
        "賣黃金攻略2026｜賣黃金前必看7件事｜巧品珠寶",
        "賣黃金前必看！如何選店、避免被扣耗損、當場秤重確認重量。台北大安區巧品珠寶，老闆親自鑑定，電話 0986-821-626",
        "賣黃金,賣黃金注意事項,賣黃金推薦,黃金回收攻略,台北賣黃金",
    ),
    "gold-price-compare": (
        "黃金回收比價2026｜台北各家黃金回收價格比較｜巧品珠寶",
        "台北黃金回收比價！銀樓 vs 回收商 vs 當舖，哪家價格最高？巧品珠寶不扣耗損，每台錢多拿500-1000元。電話 0986-821-626",
        "黃金回收比價,台北黃金回收比較,黃金哪裡賣最划算,黃金回收推薦台北",
    ),
    "gold-recycling-price": (
        "黃金回收行情2026｜各純度黃金回收價格表｜巧品珠寶",
        "2026年台北黃金回收行情！9999純金、916金、18K、14K各純度回收價格一次看。巧品珠寶即時報價，電話 0986-821-626",
        "黃金回收行情,黃金回收價格,黃金回收價格表,台北黃金回收行情2026",
    ),
}

count = 0
for slug, (title, desc, kw) in pages.items():
    fpath = os.path.join(base, slug, "page.tsx")
    if not os.path.exists(fpath):
        print(f"SKIP: {slug}")
        continue
    with open(fpath, "r", encoding="utf-8") as f:
        content = f.read()

    canon = base_url + "/" + slug

    new_meta = ("export const metadata: Metadata = {\n"
                "  title: '" + title + "',\n"
                "  description: '" + desc + "',\n"
                "  keywords: '" + kw + "',\n"
                "  alternates: {\n"
                "    canonical: '" + canon + "',\n"
                "  },\n"
                "};")

    new = re.sub(r"export const metadata: Metadata = \{.*?\};", new_meta, content, flags=re.DOTALL)

    if new != content:
        with open(fpath, "w", encoding="utf-8") as f:
            f.write(new)
        print(f"Updated: {slug}")
        count += 1
    else:
        print(f"No change: {slug}")

print(f"\nTotal: {count} updated")
