path = r'C:\Users\user\.openclaw\workspace-engineer\gold-web-v2\my-gold-price\app\ClientPage.tsx'
with open(path, encoding='utf-8') as f:
    content = f.read()

replacements = [
    # 社群按鈕 w-10 h-10 → w-11 h-11 (44px)
    ('bg-[#06C755] w-10 h-10 rounded-full lg:w-12 lg:h-12', 'bg-[#06C755] w-11 h-11 rounded-full lg:w-12 lg:h-12'),
    ('bg-[#1877F2] w-10 h-10 rounded-full lg:w-12 lg:h-12', 'bg-[#1877F2] w-11 h-11 rounded-full lg:w-12 lg:h-12'),
    ('bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 w-10 h-10 rounded-full lg:w-12 lg:h-12', 'bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 w-11 h-11 rounded-full lg:w-12 lg:h-12'),
    ('bg-black w-10 h-10 rounded-full lg:w-12 lg:h-12', 'bg-black w-11 h-11 rounded-full lg:w-12 lg:h-12'),
    ('bg-yellow-500 border border-yellow-600 w-10 h-10 rounded-full lg:w-12 lg:h-12', 'bg-yellow-500 border border-yellow-600 w-11 h-11 rounded-full lg:w-12 lg:h-12'),
    # nav 連結加 min-h-[44px] py-2
    ('"font-medium hover:text-red-800 hidden md:block">知識專欄', '"font-medium hover:text-red-800 hidden md:block min-h-[44px] flex items-center">知識專欄'),
    ('"font-medium hover:text-red-800 hidden md:block">常見問題', '"font-medium hover:text-red-800 hidden md:block min-h-[44px] flex items-center">常見問題'),
    ('"font-medium hover:text-red-800 hidden md:block">部落格', '"font-medium hover:text-red-800 hidden md:block min-h-[44px] flex items-center">部落格'),
    ('"font-medium hover:text-red-800 hidden md:block">黃金回收', '"font-medium hover:text-red-800 hidden md:block min-h-[44px] flex items-center">黃金回收'),
    # 地址連結加高度
    ('text-gray-500 hover:text-red-800 transition text-[10px] md:text-xs">', 'text-gray-600 hover:text-red-800 transition text-[10px] md:text-xs min-h-[44px] flex items-center">'),
    # Footer 對比度：gray-400 → gray-300
    ('bg-gray-900 text-gray-400 py-10 border-t border-gray-800 text-center text-xs', 'bg-gray-900 text-gray-300 py-10 border-t border-gray-800 text-center text-xs'),
]

for old, new in replacements:
    count = content.count(old)
    content = content.replace(old, new)
    print(f'{count}x: {old[:60]}')

with open(path, 'w', encoding='utf-8', newline='\n') as f:
    f.write(content)
print('Done')
