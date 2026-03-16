import os, re

blog_dir = r"C:\Users\user\.openclaw\workspace\gold-web-v2\my-gold-price\app\blog"
base_url = "https://www.gold-tw.com"

# 每篇文章 -> [("/blog/slug", "錨點文字"), ...]
links_map = {
    "gold-appraise": [("/blog/gold-recycling-process","黃金回收流程"),("/blog/what-to-bring-when-selling-gold-2026","賣黃金要帶什麼"),("/blog/gold-scam-prevent","黃金詐騙防範"),("/blog/gold-shop-recommend","台北黃金回收推薦")],
    "gold-recycling-process": [("/blog/gold-appraise","黃金免費估價"),("/blog/before-selling-gold","賣黃金前準備"),("/blog/gold-id-requirement","賣黃金要帶什麼證件"),("/blog/gold-scam-prevent","黃金詐騙防範")],
    "gold-scam-prevent": [("/blog/gold-scale-trap","黃金秤重陷阱"),("/blog/gold-recovery-traps","黃金回收陷阱"),("/blog/how-to-choose-gold-shop","如何選黃金回收店"),("/blog/gold-safety","黃金交易安全")],
    "gold-scale-trap": [("/blog/gold-scam-prevent","黃金詐騙防範"),("/blog/gold-recovery-traps","黃金回收陷阱"),("/blog/gold-appraise","黃金免費估價"),("/blog/how-to-choose-gold-shop","如何選黃金回收店")],
    "gold-recovery-traps": [("/blog/gold-scam-prevent","黃金詐騙防範"),("/blog/gold-scale-trap","黃金秤重陷阱"),("/blog/gold-shop-recommend","台北黃金回收推薦"),("/blog/before-selling-gold","賣黃金前準備")],
    "gold-9999-recovery": [("/blog/karat-gold-recovery","K金回收指南"),("/blog/gold-purity","黃金純度說明"),("/blog/gold-bar-recovery","黃金條塊回收"),("/blog/gold-vs-k-gold-vs-platinum","黃金vs K金vs白金")],
    "karat-gold-recovery": [("/blog/gold-9999-recovery","9999純金回收"),("/blog/karat-gold-guide","K金完整指南"),("/blog/gold-purity","黃金純度說明"),("/blog/gold-identification","黃金鑑定方法")],
    "karat-gold-guide": [("/blog/karat-gold-recovery","K金回收指南"),("/blog/gold-purity","黃金純度說明"),("/blog/gold-identification","黃金鑑定方法"),("/blog/gold-vs-k-gold-vs-platinum","黃金vs K金vs白金")],
    "gold-purity": [("/blog/gold-identification","黃金鑑定方法"),("/blog/karat-gold-guide","K金完整指南"),("/blog/gold-9999-recovery","9999純金回收"),("/blog/gold-weight","黃金重量換算")],
    "gold-identification": [("/blog/gold-purity","黃金純度說明"),("/blog/karat-gold-guide","K金完整指南"),("/blog/gold-appraise","黃金免費估價"),("/blog/gold-scam-prevent","黃金詐騙防範")],
    "gold-ring-recovery": [("/blog/gold-necklace-recovery","黃金項鍊回收"),("/blog/gold-bracelet-recovery","黃金手鍊回收"),("/blog/karat-gold-recovery","K金回收指南"),("/blog/gold-appraise","黃金免費估價")],
    "gold-necklace-recovery": [("/blog/gold-ring-recovery","黃金戒指回收"),("/blog/gold-bracelet-recovery","黃金手鍊回收"),("/blog/gold-pendant-recovery","黃金吊墜回收"),("/blog/gold-appraise","黃金免費估價")],
    "gold-bracelet-recovery": [("/blog/gold-necklace-recovery","黃金項鍊回收"),("/blog/gold-ring-recovery","黃金戒指回收"),("/blog/karat-gold-recovery","K金回收指南"),("/blog/gold-appraise","黃金免費估價")],
    "gold-earring-recovery": [("/blog/gold-ring-recovery","黃金戒指回收"),("/blog/gold-necklace-recovery","黃金項鍊回收"),("/blog/diamond-jewelry","鑽石珠寶收購"),("/blog/gold-appraise","黃金免費估價")],
    "gold-pendant-recovery": [("/blog/gold-necklace-recovery","黃金項鍊回收"),("/blog/gold-ring-recovery","黃金戒指回收"),("/blog/diamond-jewelry","鑽石珠寶收購"),("/blog/gold-appraise","黃金免費估價")],
    "gold-watch-recovery": [("/blog/diamond-jewelry","鑽石珠寶收購"),("/blog/gold-appraise","黃金免費估價"),("/blog/gold-shop-recommend","台北黃金回收推薦"),("/blog/how-to-choose-gold-shop","如何選黃金回收店")],
    "diamond-jewelry": [("/blog/gold-earring-recovery","黃金耳環回收"),("/blog/gold-ring-recovery","黃金戒指回收"),("/blog/gold-appraise","黃金免費估價"),("/blog/gold-shop-recommend","台北黃金回收推薦")],
    "gold-bar-recovery": [("/blog/gold-9999-recovery","9999純金回收"),("/blog/gold-coin-invest","黃金硬幣投資"),("/blog/gold-purity","黃金純度說明"),("/blog/gold-liquid","黃金變現指南")],
    "gold-coin-invest": [("/blog/gold-bar-recovery","黃金條塊回收"),("/blog/gold-9999-recovery","9999純金回收"),("/blog/gold-liquid","黃金變現指南"),("/blog/gold-coin-recovery","金幣回收")],
    "gold-coin-recovery": [("/blog/gold-coin-invest","黃金硬幣投資"),("/blog/gold-bar-recovery","黃金條塊回收"),("/blog/gold-9999-recovery","9999純金回收"),("/blog/gold-appraise","黃金免費估價")],
    "gold-liquid": [("/blog/gold-auction","黃金拍賣vs回收"),("/blog/gold-appraise","黃金免費估價"),("/blog/before-selling-gold","賣黃金前準備"),("/blog/gold-shop-recommend","台北黃金回收推薦")],
    "gold-auction": [("/blog/gold-liquid","黃金變現指南"),("/blog/gold-appraise","黃金免費估價"),("/blog/gold-shop-recommend","台北黃金回收推薦"),("/blog/before-selling-gold","賣黃金前準備")],
    "gold-price-2026": [("/blog/gold-price-forecast-2026","2026黃金價格預測"),("/blog/factors-affecting-gold-price","影響黃金價格因素"),("/blog/gold-price-key-factors","黃金價格關鍵因素"),("/blog/gold-vs-platinum","黃金vs白金比較")],
    "gold-price-forecast-2026": [("/blog/gold-price-2026","2026黃金行情分析"),("/blog/factors-affecting-gold-price","影響黃金價格因素"),("/blog/gold-coin-invest","黃金硬幣投資"),("/blog/gold-vs-platinum-investment","黃金vs白金投資")],
    "factors-affecting-gold-price": [("/blog/gold-price-2026","2026黃金行情分析"),("/blog/gold-price-forecast-2026","2026黃金價格預測"),("/blog/gold-price-key-factors","黃金價格關鍵因素"),("/blog/gold-liquid","黃金變現指南")],
    "gold-price-key-factors": [("/blog/factors-affecting-gold-price","影響黃金價格因素"),("/blog/gold-price-2026","2026黃金行情分析"),("/blog/gold-recycling-price-factors","黃金回收價格因素"),("/blog/gold-liquid","黃金變現指南")],
    "gold-recycling-price-factors": [("/blog/factors-affecting-gold-price","影響黃金價格因素"),("/blog/gold-price-key-factors","黃金價格關鍵因素"),("/blog/gold-appraise","黃金免費估價"),("/blog/gold-shop-vs-recycling-shop","銀樓vs回收商")],
    "gold-shop-recommend": [("/blog/how-to-choose-gold-shop","如何選黃金回收店"),("/blog/gold-shop-vs-recycling-shop","銀樓vs回收商"),("/blog/taipei-gold-recovery","台北黃金回收推薦"),("/blog/gold-scam-prevent","黃金詐騙防範")],
    "how-to-choose-gold-shop": [("/blog/gold-shop-recommend","台北黃金回收推薦"),("/blog/gold-shop-vs-recycling-shop","銀樓vs回收商"),("/blog/gold-scam-prevent","黃金詐騙防範"),("/blog/gold-safety","黃金交易安全")],
    "gold-shop-vs-recycling-shop": [("/blog/gold-shop-recommend","台北黃金回收推薦"),("/blog/how-to-choose-gold-shop","如何選黃金回收店"),("/blog/gold-shop-vs-silver-shop","回收商vs銀樓"),("/blog/gold-auction","黃金拍賣vs回收")],
    "gold-shop-vs-silver-shop": [("/blog/gold-shop-vs-recycling-shop","銀樓vs回收商"),("/blog/how-to-choose-gold-shop","如何選黃金回收店"),("/blog/gold-shop-recommend","台北黃金回收推薦"),("/blog/gold-appraise","黃金免費估價")],
    "wedding-gold-recovery": [("/blog/gold-jewelry-recovery","黃金首飾回收"),("/blog/inheritance-gold","繼承黃金處理"),("/blog/gold-family","家傳黃金變現"),("/blog/gold-appraise","黃金免費估價")],
    "inheritance-gold": [("/blog/wedding-gold-recovery","嫁妝黃金回收"),("/blog/gold-family","家傳黃金變現"),("/blog/gold-antique","古早黃金回收"),("/blog/gold-tax","黃金稅務說明")],
    "gold-family": [("/blog/inheritance-gold","繼承黃金處理"),("/blog/wedding-gold-recovery","嫁妝黃金回收"),("/blog/gold-antique","古早黃金回收"),("/blog/gold-appraise","黃金免費估價")],
    "gold-antique": [("/blog/inheritance-gold","繼承黃金處理"),("/blog/gold-family","家傳黃金變現"),("/blog/old-gold-recovery","舊金回收指南"),("/blog/gold-purity","黃金純度說明")],
    "gold-birthday-gift": [("/blog/gold-jewelry-recovery","黃金首飾回收"),("/blog/gold-ring-recovery","黃金戒指回收"),("/blog/gold-necklace-recovery","黃金項鍊回收"),("/blog/gold-tradition","黃金傳統文化")],
    "gold-tradition": [("/blog/gold-birthday-gift","黃金生日禮物"),("/blog/gold-culture","黃金文化歷史"),("/blog/gold-family","家傳黃金變現"),("/blog/gold-weight","黃金重量換算")],
    "gold-culture": [("/blog/gold-tradition","黃金傳統文化"),("/blog/gold-weight","黃金重量換算"),("/blog/gold-purity","黃金純度說明"),("/blog/lion-head-gold","獅頭金飾回收")],
    "lion-head-gold": [("/blog/gold-culture","黃金文化歷史"),("/blog/gold-tradition","黃金傳統文化"),("/blog/gold-antique","古早黃金回收"),("/blog/gold-appraise","黃金免費估價")],
    "gold-weight": [("/blog/gold-purity","黃金純度說明"),("/blog/gold-calculator","黃金回收計算"),("/blog/karat-gold-guide","K金完整指南"),("/blog/gold-culture","黃金文化歷史")],
    "gold-calculator": [("/blog/gold-weight","黃金重量換算"),("/blog/gold-purity","黃金純度說明"),("/blog/gold-appraise","黃金免費估價"),("/blog/gold-price-2026","2026黃金行情")],
    "gold-insurance": [("/blog/gold-safety","黃金交易安全"),("/blog/gold-liquid","黃金變現指南"),("/blog/gold-coin-invest","黃金硬幣投資"),("/blog/gold-bar-recovery","黃金條塊回收")],
    "gold-safety": [("/blog/gold-scam-prevent","黃金詐騙防範"),("/blog/gold-insurance","黃金保險說明"),("/blog/gold-recovery-traps","黃金回收陷阱"),("/blog/how-to-choose-gold-shop","如何選黃金回收店")],
    "gold-tax": [("/blog/inheritance-gold","繼承黃金處理"),("/blog/gold-liquid","黃金變現指南"),("/blog/before-selling-gold","賣黃金前準備"),("/blog/gold-should-know","賣黃金必知事項")],
    "gold-should-know": [("/blog/before-selling-gold","賣黃金前準備"),("/blog/gold-appraise","黃金免費估價"),("/blog/gold-id-requirement","賣黃金要帶什麼證件"),("/blog/gold-scam-prevent","黃金詐騙防範")],
    "before-selling-gold": [("/blog/gold-should-know","賣黃金必知事項"),("/blog/gold-id-requirement","賣黃金要帶什麼證件"),("/blog/what-to-bring-when-selling-gold-2026","賣黃金要帶什麼"),("/blog/gold-scam-prevent","黃金詐騙防範")],
    "gold-id-requirement": [("/blog/before-selling-gold","賣黃金前準備"),("/blog/what-to-bring-when-selling-gold-2026","賣黃金要帶什麼"),("/blog/gold-should-know","賣黃金必知事項"),("/blog/gold-recycling-process","黃金回收流程")],
    "what-to-bring-when-selling-gold-2026": [("/blog/gold-id-requirement","賣黃金要帶什麼證件"),("/blog/before-selling-gold","賣黃金前準備"),("/blog/gold-should-know","賣黃金必知事項"),("/blog/gold-recycling-process","黃金回收流程")],
    "sell-gold-tips": [("/blog/before-selling-gold","賣黃金前準備"),("/blog/gold-shop-recommend","台北黃金回收推薦"),("/blog/why-some-get-better-gold-price","為什麼有人拿到更高價"),("/blog/gold-appraise","黃金免費估價")],
    "why-some-get-better-gold-price": [("/blog/sell-gold-tips","賣黃金技巧"),("/blog/gold-shop-recommend","台北黃金回收推薦"),("/blog/before-selling-gold","賣黃金前準備"),("/blog/gold-appraise","黃金免費估價")],
    "gold-recovery-faq": [("/blog/gold-recovery-faq-2026","2026黃金回收FAQ"),("/blog/gold-appraise","黃金免費估價"),("/blog/gold-recycling-process","黃金回收流程"),("/blog/gold-scam-prevent","黃金詐騙防範")],
    "gold-recovery-faq-2026": [("/blog/gold-recovery-faq","黃金回收FAQ"),("/blog/gold-appraise","黃金免費估價"),("/blog/gold-recycling-process","黃金回收流程"),("/blog/what-to-bring-when-selling-gold-2026","賣黃金要帶什麼")],
    "gold-recycling-precautions": [("/blog/gold-scam-prevent","黃金詐騙防範"),("/blog/gold-recovery-traps","黃金回收陷阱"),("/blog/before-selling-gold","賣黃金前準備"),("/blog/how-to-choose-gold-shop","如何選黃金回收店")],
    "gold-recycling-tips": [("/blog/sell-gold-tips","賣黃金技巧"),("/blog/why-some-get-better-gold-price","為什麼有人拿到更高價"),("/blog/gold-appraise","黃金免費估價"),("/blog/gold-shop-recommend","台北黃金回收推薦")],
    "gold-recycling-process": [("/blog/gold-appraise","黃金免費估價"),("/blog/gold-id-requirement","賣黃金要帶什麼證件"),("/blog/before-selling-gold","賣黃金前準備"),("/blog/gold-recovery-faq","黃金回收FAQ")],
    "gold-jewelry-recovery": [("/blog/gold-ring-recovery","黃金戒指回收"),("/blog/gold-necklace-recovery","黃金項鍊回收"),("/blog/diamond-jewelry","鑽石珠寶收購"),("/blog/gold-appraise","黃金免費估價")],
    "old-gold-recovery": [("/blog/gold-antique","古早黃金回收"),("/blog/broken-gold-recovery","斷裂黃金回收"),("/blog/inheritance-gold","繼承黃金處理"),("/blog/gold-appraise","黃金免費估價")],
    "broken-gold-recovery": [("/blog/old-gold-recovery","舊金回收指南"),("/blog/gold-jewelry-recovery","黃金首飾回收"),("/blog/gold-appraise","黃金免費估價"),("/blog/gold-recycling-process","黃金回收流程")],
    "gold-vs-platinum": [("/blog/gold-vs-k-gold-vs-platinum","黃金vs K金vs白金"),("/blog/platinum-recovery","白金回收指南"),("/blog/gold-vs-platinum-investment","黃金vs白金投資"),("/blog/gold-price-2026","2026黃金行情")],
    "gold-vs-k-gold-vs-platinum": [("/blog/gold-vs-platinum","黃金vs白金比較"),("/blog/platinum-recovery","白金回收指南"),("/blog/karat-gold-guide","K金完整指南"),("/blog/gold-purity","黃金純度說明")],
    "gold-vs-platinum-investment": [("/blog/gold-vs-platinum","黃金vs白金比較"),("/blog/gold-coin-invest","黃金硬幣投資"),("/blog/gold-bar-recovery","黃金條塊回收"),("/blog/gold-price-forecast-2026","2026黃金預測")],
    "platinum-recovery": [("/blog/gold-vs-platinum","黃金vs白金比較"),("/blog/gold-vs-k-gold-vs-platinum","黃金vs K金vs白金"),("/blog/karat-gold-recovery","K金回收指南"),("/blog/gold-appraise","黃金免費估價")],
    "karat-gold-price": [("/blog/karat-gold-recovery","K金回收指南"),("/blog/karat-gold-guide","K金完整指南"),("/blog/gold-price-2026","2026黃金行情"),("/blog/gold-recycling-price-factors","黃金回收價格因素")],
    "karat-gold-report": [("/blog/karat-gold-price","K金回收行情"),("/blog/karat-gold-recovery","K金回收指南"),("/blog/karat-gold-guide","K金完整指南"),("/blog/gold-identification","黃金鑑定方法")],
    "taipei-gold-recovery": [("/blog/gold-appraise","黃金免費估價"),("/blog/gold-shop-recommend","台北黃金回收推薦"),("/blog/how-to-choose-gold-shop","如何選黃金回收店"),("/blog/gold-scam-prevent","黃金詐騙防範")],
    "new-taipei-gold-recovery": [("/blog/taipei-gold-recovery","台北黃金回收推薦"),("/blog/gold-appraise","黃金免費估價"),("/blog/gold-shop-recommend","台北黃金回收推薦"),("/blog/how-to-choose-gold-shop","如何選黃金回收店")],
    "taichung-gold-recovery": [("/blog/taipei-gold-recovery","台北黃金回收推薦"),("/blog/gold-appraise","黃金免費估價"),("/blog/gold-shop-recommend","台北黃金回收推薦"),("/blog/gold-scam-prevent","黃金詐騙防範")],
    "gold-should-know": [("/blog/before-selling-gold","賣黃金前準備"),("/blog/gold-appraise","黃金免費估價"),("/blog/gold-id-requirement","賣黃金要帶什麼證件"),("/blog/gold-scam-prevent","黃金詐騙防範")],
}

def make_related_block(links):
    items = ""
    for href, text in links:
        items += f'\n        <li><a href="{href}" style={{{{ color: "#B8860B" }}}}>{text}</a></li>'
    return (
        "\n      <div style={{{{ margin: '2rem 0', padding: '1.5rem', background: '#FEF9E7', borderRadius: '8px', borderLeft: '4px solid #B8860B' }}}}>\n"
        "        <strong>相關文章：</strong>\n"
        "        <ul style={{{{ marginTop: '0.5rem', paddingLeft: '1.5rem' }}}}>"
        + items +
        "\n        </ul>\n"
        "      </div>\n"
    )

count = 0
for slug, links in links_map.items():
    fpath = os.path.join(blog_dir, slug, "page.tsx")
    if not os.path.exists(fpath):
        continue
    with open(fpath, "r", encoding="utf-8") as f:
        content = f.read()
    if "相關文章" in content:
        continue
    block = make_related_block(links)
    new = content.replace(
        "\n      <hr style={{ margin: '2rem 0' }} />",
        block + "\n      <hr style={{ margin: '2rem 0' }} />",
        1
    )
    if new != content:
        with open(fpath, "w", encoding="utf-8") as f:
            f.write(new)
        count += 1

print(f"Added internal links to {count} articles")
