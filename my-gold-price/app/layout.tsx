import type { Metadata, Viewport } from 'next'
import Script from 'next/script'
import './globals.css'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  title: '巧品珠寶｜台北黃金回收推薦・K金白金鑽石高價收購・即時金價查詢',
  description: '台北大安區實體銀樓，專營9999純金・K金・白金・鑽石高價回收。免費估價不強迫、當場秤重公開透明、現場現金付款不扣耗損。10年經驗值得信賴。捷運忠孝新生站步行5分鐘。立即來電 0986-821-626 或LINE詢價！',
  alternates: {
    canonical: 'https://www.gold-tw.com/',
  },
  openGraph: {
    title: '巧品珠寶 | 台北高價黃金回收',
    description: '台北大安區實體店面，專營黃金回收、白金、K金買賣。每日最新金價，歡迎來電詢問！',
    url: 'https://www.gold-tw.com/',
    siteName: '巧品珠寶',
    images: [
      {
        url: 'https://wsrv.nl/?url=https://drive.google.com/uc?id=1ASz1v5ZBQ-WV572r-BC4gZRuraywgKKv&w=1200&output=webp&q=80',
        width: 1200,
        height: 630,
        alt: '巧品珠寶 - 台北黃金回收',
      },
    ],
    locale: 'zh_TW',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '巧品珠寶 | 台北高價黃金回收',
    description: '台北大安區實體店面，專營黃金回收、白金、K金買賣。每日最新金價！',
    images: ['https://wsrv.nl/?url=https://drive.google.com/uc?id=1ASz1v5ZBQ-WV572r-BC4gZRuraywgKKv&w=1200&output=webp&q=80'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-TW">
      <head>
        {/* Google Tag Manager */}
        <script dangerouslySetInnerHTML={{__html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-PHHGGGMF');`}} />
        {/* CRITICAL CSS - inline first, prevents render blocking */}
        <style dangerouslySetInnerHTML={{__html: `body{margin:0;font-family:system-ui,-apple-system,sans-serif;background:#f3f4f6;color:#1f2937}.hero-section{position:relative;height:100svh;min-height:600px;background:transparent;overflow:hidden;display:flex;align-items:center;justify-content:center;text-align:center;color:#fff}.hero-img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;z-index:0}.hero-text-shadow{text-shadow:0 2px 4px rgba(0,0,0,.7)}.nav-sticky{position:sticky;top:0;z-index:40;background:#fff;box-shadow:0 4px 6px -1px rgba(0,0,0,.1);height:84px}.animate-marquee{animation:marquee 30s linear infinite}@keyframes marquee{0%{transform:translateX(100%)}100%{transform:translateX(-100%)}}`}} />
        {/* 1. Google Search Console 驗證 */}
        <meta name="google-site-verification" content="f58q0x4tISebwnlueE41NMQNMfL4Ck4T2HO8ZoZvwys" />

        {/* 2. Hero 圖片 preload - 讓瀏覽器在 JS 執行前就開始抓，直接改善 LCP */}
        <link rel="preload" href="/hero.webp" as="image" type="image/webp" fetchPriority="high" />

        {/* 3. Preconnect 加速外部資源載入 */}
        <link rel="preconnect" href="https://wsrv.nl" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://connect.facebook.net" />

      </head>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PHHGGGMF" height="0" width="0" style={{display:'none',visibility:'hidden'}}></iframe></noscript>

        {children}

        {/* GA4、Google Ads、Meta Pixel 已移至 GTM-PHHGGGMF 管理，此處不重複載入 */}

        {/* FontAwesome removed - replaced with inline SVG icons */}

        {/* 6. Schema.org LocalBusiness JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "JewelryStore",
              "@id": "https://www.gold-tw.com/#business",
              "name": "巧品珠寶",
              "description": "台北大安區實體店面，專營黃金回收，白金、K金、鑽石買賣",
              "url": "https://www.gold-tw.com",
              "telephone": "+886-986821626",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "濟南路三段62-1號1樓",
                "addressLocality": "大安區",
                "addressRegion": "台北市",
                "postalCode": "106",
                "addressCountry": "TW"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "25.046",
                "longitude": "121.537"
              },
              "openingHours": ["Mo-Su 11:00-03:30"],
              "priceRange": "$$",
              "image": "https://wsrv.nl/?url=https://drive.google.com/uc?id=1ASz1v5ZBQ-WV572r-BC4gZRuraywgKKv&w=1200&output=webp&q=80",
              "sameAs": [
                "https://www.facebook.com/QPJEWELRY.OFFICIAL",
                "https://www.instagram.com/qiaopin.jewelry/",
                "https://www.youtube.com/channel/UCz9j9M8vmULxloH0-NKYkXw"
              ],
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "reviewCount": "86"
              }
            })
          }}
        />

        {/* 7. Schema.org FAQPage JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "黃金回收價格怎麼計算？",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "黃金回收價格 = 當日牌價 × 重量 × 純度。我們採用公開透明的計價方式，不扣耗損，當日現金支付。"
                  }
                },
                {
                  "@type": "Question",
                  "name": "賣黃金需要帶什麼證件？",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "請攜帶身份證正本，我們需要進行實名制登記，這是政府規定的法定程序。"
                  }
                },
                {
                  "@type": "Question",
                  "name": "你們的回收價格比別家好嗎？",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "我們提供市場頂端回收價，不扣秤、不扣耗損公開透明。建議您多方比價後再決定。"
                  }
                },
                {
                  "@type": "Question",
                  "name": "K金、18K金可以回收嗎？",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "當然可以！我們回收各種K金：18K、14K、10K、9K等，依據純度比例計算價格。"
                  }
                },
                {
                  "@type": "Question",
                  "name": "黃金純度怎麼辨識？",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "我們現場有專業儀器檢測，同時提供水測、火燒等多重檢驗方式，讓您安心見證。"
                  }
                },
                {
                  "@type": "Question",
                  "name": "可以線上估價嗎？",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "可以透過LINE（@QPD888）傳送物品照片，我們會先提供初步估價參考。"
                  }
                },
                {
                  "@type": "Question",
                  "name": "你們是合法的嗎？",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "我們是合法立案的珠寶銀樓，擁有政府核發的相關許可證照。"
                  }
                },
                {
                  "@type": "Question",
                  "name": "檢測會不會傷害物品？",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "我們有無損檢測也有破壞性檢測，可供您選擇，為保護您的價值，建議兩者兼具檢測。"
                  }
                }
              ]
            })
          }}
        />

        {/* 8. Schema.org Review JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Review",
              "itemReviewed": {
                "@id": "https://www.gold-tw.com/#business"
              },
              "reviewRating": {
                "@type": "Rating",
                "ratingValue": "4.8",
                "bestRating": "5"
              },
              "author": {
                "@type": "Organization",
                "name": "Google 評論"
              },
              "reviewBody": "誠信經營，價格透明，服務專業。推薦！"
            })
          }}
        />
        {/* 9. Schema.org WebSite + SearchAction (Sitelinks搜尋框) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "巧品珠寶",
              "url": "https://www.gold-tw.com",
              "description": "台北大安區實體銀樓，專營黃金回收、K金、白金、鑽石高價收購",
              "publisher": { "@id": "https://www.gold-tw.com/#business" },
              "inLanguage": "zh-TW",
              "potentialAction": {
                "@type": "SearchAction",
                "target": {
                  "@type": "EntryPoint",
                  "urlTemplate": "https://www.gold-tw.com/blog?q={search_term_string}"
                },
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />

        {/* 10. Schema.org SiteNavigationElement */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SiteNavigationElement",
              "name": ["今日金價", "知識專欄", "常見問題", "黃金回收", "賣金指南", "金價比較"],
              "url": [
                "https://www.gold-tw.com/today-gold-price",
                "https://www.gold-tw.com/blog",
                "https://www.gold-tw.com/faq",
                "https://www.gold-tw.com/district/da-an",
                "https://www.gold-tw.com/sell-gold-guide",
                "https://www.gold-tw.com/gold-price-compare"
              ]
            })
          }}
        />

        {/* 12. Organization Schema - 讓 AI 認識品牌身份 */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "@id": "https://www.gold-tw.com/#organization",
              "name": "巧品珠寶",
              "alternateName": ["巧品", "QIAO PIN JEWELRY"],
              "url": "https://www.gold-tw.com",
              "logo": {
                "@type": "ImageObject",
                "url": "https://www.gold-tw.com/logo.webp",
                "width": 200,
                "height": 200
              },
              "image": "https://wsrv.nl/?url=https://drive.google.com/uc?id=1ASz1v5ZBQ-WV572r-BC4gZRuraywgKKv&w=1200&output=webp&q=80",
              "description": "台北大安區實體銀樓，專營黃金、K金、白金、鑽石高價回收。10年經驗，誠信透明，當場現金付款。",
              "telephone": "+886-986821626",
              "email": "qiaopinjewelry@gmail.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "濟南路三段62-1號",
                "addressLocality": "大安區",
                "addressRegion": "台北市",
                "postalCode": "106",
                "addressCountry": "TW"
              },
              "foundingDate": "2015",
              "areaServed": {
                "@type": "City",
                "name": "台北市"
              },
              "sameAs": [
                "https://www.facebook.com/QPJEWELRY.OFFICIAL",
                "https://www.instagram.com/qiaopin.jewelry/",
                "https://www.youtube.com/channel/UCz9j9M8vmULxloH0-NKYkXw",
                "https://www.tiktok.com/@qpdiamond666",
                "https://qiaopin.pixnet.net"
              ],
              "contactPoint": [
                {
                  "@type": "ContactPoint",
                  "telephone": "+886-986821626",
                  "contactType": "customer service",
                  "areaServed": "TW",
                  "availableLanguage": "zh-TW",
                  "hoursAvailable": {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
                    "opens": "11:00",
                    "closes": "03:30"
                  }
                }
              ]
            })
          }}
        />

        {/* 13. Service/Product Schema - 讓 AI 知道你提供哪些服務 */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ItemList",
              "name": "巧品珠寶回收服務項目",
              "description": "台北巧品珠寶提供各類貴金屬高價回收服務",
              "url": "https://www.gold-tw.com",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "item": {
                    "@type": "Service",
                    "@id": "https://www.gold-tw.com/#service-gold",
                    "name": "黃金回收",
                    "description": "9999純金、各種純度黃金飾品高價回收，當日牌價計算，不扣耗損，現場現金付款。",
                    "provider": { "@id": "https://www.gold-tw.com/#organization" },
                    "areaServed": { "@type": "City", "name": "台北市" },
                    "offers": {
                      "@type": "Offer",
                      "priceCurrency": "TWD",
                      "availability": "https://schema.org/InStock",
                      "description": "依當日黃金牌價計算，免費估價"
                    }
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "item": {
                    "@type": "Service",
                    "@id": "https://www.gold-tw.com/#service-kgold",
                    "name": "K金回收",
                    "description": "18K、14K、10K、8K等各種K金回收，依純度比例計算，公開透明。",
                    "provider": { "@id": "https://www.gold-tw.com/#organization" },
                    "areaServed": { "@type": "City", "name": "台北市" }
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "item": {
                    "@type": "Service",
                    "@id": "https://www.gold-tw.com/#service-platinum",
                    "name": "白金/鉑金回收",
                    "description": "PT950、PT900等各種鉑金飾品高價回收，專業檢測。",
                    "provider": { "@id": "https://www.gold-tw.com/#organization" },
                    "areaServed": { "@type": "City", "name": "台北市" }
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 4,
                  "item": {
                    "@type": "Service",
                    "@id": "https://www.gold-tw.com/#service-diamond",
                    "name": "鑽石回收",
                    "description": "各種克拉數鑽石高價回收，GIA證書加分，專業鑑定。",
                    "provider": { "@id": "https://www.gold-tw.com/#organization" },
                    "areaServed": { "@type": "City", "name": "台北市" }
                  }
                }
              ]
            })
          }}
        />

        {/* 11. WebPage + Speakable Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              "@id": "https://www.gold-tw.com/#webpage",
              "name": "巧品珠寶 - 台北黃金回收推薦",
              "url": "https://www.gold-tw.com",
              "description": "台北大安區實體銀樓，專營黃金回收、K金、白金、鑽石高價收購。即時金價查詢，免費估價。",
              "inLanguage": "zh-TW",
              "isPartOf": { "@id": "https://www.gold-tw.com/#website" },
              "about": { "@id": "https://www.gold-tw.com/#business" },
              "author": {
                "@type": "Organization",
                "name": "巧品珠寶",
                "@id": "https://www.gold-tw.com/#organization"
              },
              "publisher": {
                "@type": "Organization",
                "name": "巧品珠寶",
                "@id": "https://www.gold-tw.com/#organization"
              },
              "breadcrumb": {
                "@type": "BreadcrumbList",
                "itemListElement": [
                  { "@type": "ListItem", "position": 1, "name": "首頁", "item": "https://www.gold-tw.com" }
                ]
              },
              "speakable": {
                "@type": "SpeakableSpecification",
                "cssSelector": ["h1", ".hero-text-shadow", "#rates-desktop"]
              },
              "mentions": [
                { "@type": "Thing", "name": "黃金回收", "sameAs": "https://zh.wikipedia.org/wiki/黃金" },
                { "@type": "Thing", "name": "金價", "sameAs": "https://zh.wikipedia.org/wiki/金價" },
                { "@type": "Thing", "name": "K金", "sameAs": "https://zh.wikipedia.org/wiki/克拉_(純度)" }
              ]
            })
          }}
        />
      </body>
    </html>
  )
}
