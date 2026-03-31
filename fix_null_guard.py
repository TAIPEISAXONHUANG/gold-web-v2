path = r'C:\Users\user\.openclaw\workspace-engineer\gold-web-v2\my-gold-price\app\ClientPage.tsx'
with open(path, encoding='utf-8') as f:
    content = f.read()

# 在 rates['24K'] 取用之前，確保 rates 有資料
# 找到金價牌板的渲染，用 data && 保護
# 最簡單的做法：在 rates/dailyTable 使用前加空值保護
# rates['24K'] -> rates['24K'] || {buy:0,sell:0,buyDiff:0,sellDiff:0}

# 修正 formatPrice 和 renderDiff 在 rates 還是空時不要 crash
old = "  const formatPrice = (v: number) => {"
new = """  // 資料 loading 中時，對外顯示 skeleton 的骨架
  const isLoading = !data;

  const formatPrice = (v: number) => {"""
count = content.count(old)
content = content.replace(old, new)
print(f"{count}x: isLoading guard added")

# rates['24K'] 取用保護
old2 = "{formatPrice(rates['24K'].buy)}"
new2 = "{isLoading ? '---' : formatPrice(rates['24K']?.buy || 0)}"
count2 = content.count(old2)
content = content.replace(old2, new2)
print(f"{count2}x: rates 24K buy guard")

old3 = "{formatPrice(rates['24K'].sell)}"
new3 = "{isLoading ? '---' : formatPrice(rates['24K']?.sell || 0)}"
count3 = content.count(old3)
content = content.replace(old3, new3)
print(f"{count3}x: rates 24K sell guard")

old4 = "{renderDiff(rates['24K'].buyDiff)}"
new4 = "{isLoading ? null : renderDiff(rates['24K']?.buyDiff || 0)}"
count4 = content.count(old4)
content = content.replace(old4, new4)
print(f"{count4}x: rates 24K buyDiff guard")

old5 = "{renderDiff(rates['24K'].sellDiff)}"
new5 = "{isLoading ? null : renderDiff(rates['24K']?.sellDiff || 0)}"
count5 = content.count(old5)
content = content.replace(old5, new5)
print(f"{count5}x: rates 24K sellDiff guard")

with open(path, 'w', encoding='utf-8', newline='\n') as f:
    f.write(content)
print('Done')
