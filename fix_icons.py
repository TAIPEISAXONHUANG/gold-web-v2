import re

path = r'C:\Users\user\.openclaw\workspace-engineer\gold-web-v2\my-gold-price\app\ClientPage.tsx'
with open(path, encoding='utf-8') as f:
    content = f.read()

# 1. 加 import
old_import = "import dynamic from 'next/dynamic';"
new_import = """import dynamic from 'next/dynamic';
import { IconLine, IconFacebook, IconInstagram, IconTiktok, IconArrowUp, IconArrowLeft, IconArrowRight, IconCalculator, IconChevronDown, IconClock, IconPhone, IconMapMarker, IconHistory } from './Icons';"""
content = content.replace(old_import, new_import, 1)
print("1x: import added")

# 2. 替換各個 icon
replacements = [
    # 社群按鈕 icon
    ('<i className="fab fa-line text-xl lg:text-2xl" aria-hidden="true"></i>', '<IconLine className="text-xl lg:text-2xl w-6 h-6" />'),
    ('<i className="fab fa-facebook-f text-lg lg:text-xl" aria-hidden="true"></i>', '<IconFacebook className="text-lg lg:text-xl w-5 h-5" />'),
    ('<i className="fab fa-instagram text-xl lg:text-2xl" aria-hidden="true"></i>', '<IconInstagram className="text-xl lg:text-2xl w-6 h-6" />'),
    ('<i className="fab fa-tiktok text-lg lg:text-xl" aria-hidden="true"></i>', '<IconTiktok className="text-lg lg:text-xl w-5 h-5" />'),
    ('<i className="fas fa-arrow-up text-lg lg:text-xl" aria-hidden="true"></i>', '<IconArrowUp className="text-lg lg:text-xl w-5 h-5" />'),
    # nav phone
    ('<i className="fas fa-phone-alt text-red-800 text-xs"></i>', '<IconPhone className="text-red-800 w-3 h-3" />'),
    ('<i className="fas fa-map-marker-alt text-red-600"></i>', '<IconMapMarker className="text-red-600 w-3 h-3" />'),
    # calculator
    ('<i className="fas fa-calculator" aria-hidden="true"></i>', '<IconCalculator className="w-5 h-5" />'),
    # chevron down (faq)
    ('<i className="fas fa-chevron-down faq-icon"></i>', '<IconChevronDown className="faq-icon w-4 h-4" />'),
    # arrow right (read more)
    ('<i className="fas fa-arrow-right ml-1"></i>', '<IconArrowRight className="ml-1 w-4 h-4 inline" />'),
    # history button
    ('<i className="fas fa-history mr-2" aria-hidden="true"></i>', '<IconHistory className="mr-2 w-4 h-4 inline" />'),
    # arrow left (back button)
    ('<i className="fas fa-arrow-left"></i>', '<IconArrowLeft className="w-5 h-5" />'),
    # chevron down (load more)
    ('<i className="fas fa-chevron-down group-hover:animate-bounce" aria-hidden="true"></i>', '<IconChevronDown className="group-hover:animate-bounce w-4 h-4" />'),
    # contact section icons
    ('<i className="fas fa-clock text-red-800 mt-1"></i>', '<IconClock className="text-red-800 mt-1 w-5 h-5" />'),
    ('<i className="fas fa-map-marker-alt text-red-800 mt-1"></i>', '<IconMapMarker className="text-red-800 mt-1 w-4 h-4" />'),
    ('<i className="fas fa-phone-alt text-red-800 mt-1"></i>', '<IconPhone className="text-red-800 mt-1 w-4 h-4" />'),
    # crown
    ('<i className="fas fa-crown text-amber-500" aria-hidden="true"></i>', '<span className="text-amber-500 text-lg">♛</span>'),
]

for old, new in replacements:
    count = content.count(old)
    content = content.replace(old, new)
    if count:
        print(f"{count}x: {old[:60]}")

# 3. 移除 FontAwesome loader script（改在 layout 裡刪）
with open(path, 'w', encoding='utf-8', newline='\n') as f:
    f.write(content)
print('Done')
