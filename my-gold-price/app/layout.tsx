import type { Metadata, Viewport } from 'next'
import Script from 'next/script'
import './globals.css'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#B8860B',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://www.gold-tw.com'),
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
        url: 'https://www.gold-tw.com/og-image.webp',
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
    images: ['https://www.gold-tw.com/og-image.webp'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
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
        {/* CRITICAL CSS - inline first, prevents render blocking */}
        <style dangerouslySetInnerHTML={{__html: `body{margin:0;font-family:system-ui,-apple-system,sans-serif;background:#f3f4f6;color:#1f2937}.hero-section{position:relative;height:100svh;min-height:600px;background:transparent;overflow:hidden;display:flex;align-items:center;justify-content:center;text-align:center;color:#fff}.hero-img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;z-index:0}.hero-text-shadow{text-shadow:0 2px 4px rgba(0,0,0,.7)}.nav-sticky{position:sticky;top:0;z-index:40;background:#fff;box-shadow:0 4px 6px -1px rgba(0,0,0,.1);height:84px}.animate-marquee{animation:marquee 30s linear infinite}@keyframes marquee{0%{transform:translateX(100%)}100%{transform:translateX(-100%)}}`}} />
        {/* 1. Google Search Console 驗證 */}
        <meta name="google-site-verification" content="f58q0x4tISebwnlueE41NMQNMfL4Ck4T2HO8ZoZvwys" />

        {/* 2. Hero 圖片 preload - 讓瀏覽器在 JS 執行前就開始抓，直接改善 LCP */}
        <link rel="preload" href="/hero.webp" as="image" type="image/webp" fetchPriority="high" />

        {/* 3. Preconnect 加速外部資源載入 */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://connect.facebook.net" />

      </head>
      <body>
        {/* Google Tag Manager */}
        <Script
          id="gtm"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{__html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-PHHGGGMF');`}}
        />
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
              "alternateName": ["巧品珠寶黃金回收", "Qiao Pin Jewelry", "巧品黃金回收"],
              "description": "台北大安區實體店面，專營9999純金、K金、白金（鉑金）、鑽石高價回收。10年經驗，免費估價，現場現金付款，不扣秤不扣耗損。",
              "url": "https://www.gold-tw.com",
              "telephone": "+886-986821626",
              "email": "qiaopinjewelry@gmail.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "濟南路三段62-1號1樓",
                "addressLocality": "大安區",
                "addressRegion": "台北市",
                "postalCode": "10647",
                "addressCountry": "TW"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "25.0447",
                "longitude": "121.5369"
              },
              "hasMap": "https://maps.google.com/?q=巧品珠寶+台北市大安區濟南路三段62-1號",
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
                  "opens": "11:00",
                  "closes": "23:59"
                },
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
                  "opens": "00:00",
                  "closes": "03:30"
                }
              ],
              "priceRange": "$$",
              "currenciesAccepted": "TWD",
              "paymentAccepted": "Cash, Bank Transfer",
              "image": [
                "https://www.gold-tw.com/og-image.webp",
                "https://wsrv.nl/?url=https://drive.google.com/uc?id=1ASz1v5ZBQ-WV572r-BC4gZRuraywgKKv&w=1200&output=webp&q=80"
              ],
              "sameAs": [
                "https://www.facebook.com/QPJEWELRY.OFFICIAL",
                "https://www.instagram.com/qiaopin.jewelry/",
                "https://www.youtube.com/channel/UCz9j9M8vmULxloH0-NKYkXw",
                "https://www.tiktok.com/@qpdiamond666",
                "https://qiaopin.pixnet.net"
              ],
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "reviewCount": "86",
                "bestRating": "5",
                "worstRating": "1"
              },
              "areaServed": [
                { "@type": "City", "name": "台北市" },
                { "@type": "City", "name": "新北市" }
              ]
            })
          }}
        />

        {/* 7. FAQPage 已移至 /faq 頁面，避免全站重複導致 Google Search Console 錯誤 */}
        {/* 8. Review 已移除，避免與 JewelryStore aggregateRating 衝突導致「多個匯總評分」錯誤 */}
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
              "image": "https://www.gold-tw.com/og-image.webp",
              "description": "台北大安區實體銀樓，專營黃金、K金、白金、鑽石高價回收。10年經驗，誠信透明，當場現金付款。",
              "telephone": "+886-986821626",
              "email": "qiaopinjewelry@gmail.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "濟南路三段62-1號",
                "addressLocality": "大安區",
                "addressRegion": "台北市",
                "postalCode": "10647",
                "addressCountry": "TW"
              },
              "foundingDate": "2015",
              "areaServed": [
                { "@type": "City", "name": "台北市" },
                { "@type": "City", "name": "新北市" }
              ],
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
                    "closes": "23:59"
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
                    "url": "https://www.gold-tw.com/district/da-an",
                    "provider": { "@id": "https://www.gold-tw.com/#organization" },
                    "areaServed": [
                      { "@type": "City", "name": "台北市" },
                      { "@type": "City", "name": "新北市" }
                    ],
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
                    "url": "https://www.gold-tw.com/blog/k-gold-recycle",
                    "provider": { "@id": "https://www.gold-tw.com/#organization" },
                    "areaServed": [
                      { "@type": "City", "name": "台北市" },
                      { "@type": "City", "name": "新北市" }
                    ],
                    "offers": {
                      "@type": "Offer",
                      "priceCurrency": "TWD",
                      "availability": "https://schema.org/InStock",
                      "description": "依K金純度比例計算，免費估價，現場現金付款"
                    }
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
                    "url": "https://www.gold-tw.com/blog/platinum-recycle",
                    "provider": { "@id": "https://www.gold-tw.com/#organization" },
                    "areaServed": [
                      { "@type": "City", "name": "台北市" },
                      { "@type": "City", "name": "新北市" }
                    ],
                    "offers": {
                      "@type": "Offer",
                      "priceCurrency": "TWD",
                      "availability": "https://schema.org/InStock",
                      "description": "依當日鉑金行情計算，專業XRF儀器鑑定純度"
                    }
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
                    "url": "https://www.gold-tw.com/blog/diamond-recycle",
                    "provider": { "@id": "https://www.gold-tw.com/#organization" },
                    "areaServed": [
                      { "@type": "City", "name": "台北市" },
                      { "@type": "City", "name": "新北市" }
                    ],
                    "offers": {
                      "@type": "Offer",
                      "priceCurrency": "TWD",
                      "availability": "https://schema.org/InStock",
                      "description": "依鑽石4C品質鑑定，附GIA證書加分，現場估價"
                    }
                  }
                }
              ]
            })
          }}
        />

        {/* 11b. Person Schema - 具名專家，提升 E-E-A-T */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "@id": "https://www.gold-tw.com/#expert",
              "name": "巧品珠寶鑑定師",
              "jobTitle": "貴金屬鑑定師",
              "worksFor": { "@id": "https://www.gold-tw.com/#organization" },
              "description": "擁有10年以上貴金屬鑑定經驗，專精黃金、K金、白金、鑽石的純度鑑定與回收估價。使用XRF螢光分析儀等專業設備，提供客觀準確的鑑定服務。",
              "url": "https://www.gold-tw.com",
              "knowsAbout": ["黃金回收", "K金鑑定", "鑽石估價", "白金回收", "黃金純度", "貴金屬交易"],
              "hasOccupation": {
                "@type": "Occupation",
                "name": "貴金屬鑑定師",
                "occupationLocation": {
                  "@type": "City",
                  "name": "台北市"
                }
              }
            })
          }}
        />

        {/* 11. HowTo Schema - 黃金回收流程 */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "HowTo",
              "name": "如何在巧品珠寶進行黃金回收",
              "description": "台北巧品珠寶黃金回收完整流程，從攜帶證件到現場收款，全程透明公開。",
              "totalTime": "PT30M",
              "supply": [
                { "@type": "HowToSupply", "name": "身份證正本" },
                { "@type": "HowToSupply", "name": "欲回收的黃金/K金/白金/鑽石" }
              ],
              "step": [
                {
                  "@type": "HowToStep",
                  "position": 1,
                  "name": "攜帶物品到店",
                  "text": "攜帶身份證正本及欲回收的貴金屬，前往台北市大安區濟南路三段62-1號1樓。建議事先電話或LINE預約。",
                  "url": "https://www.gold-tw.com/#contact"
                },
                {
                  "@type": "HowToStep",
                  "position": 2,
                  "name": "專業檢測鑑定",
                  "text": "我們使用 XRF 螢光儀等專業設備當場檢測純度，過程公開透明，客戶全程在場見證。"
                },
                {
                  "@type": "HowToStep",
                  "position": 3,
                  "name": "當場秤重報價",
                  "text": "依當日黃金牌價 × 重量 × 純度計算回收金額，不扣秤、不扣耗損，報價當場確認。",
                  "url": "https://www.gold-tw.com/today-gold-price"
                },
                {
                  "@type": "HowToStep",
                  "position": 4,
                  "name": "同意後現場付款",
                  "text": "客戶確認報價後，現場以現金支付，無需等待，即時完成交易。"
                }
              ]
            })
          }}
        />

        {/* 12. WebPage + Speakable Schema */}
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
                "cssSelector": ["h1", "#rates-desktop"]
              },
              "mentions": [
                { "@type": "Thing", "name": "黃金回收", "sameAs": "https://zh.wikipedia.org/wiki/黃金" },
                { "@type": "Thing", "name": "金價", "sameAs": "https://zh.wikipedia.org/wiki/金價" },
                { "@type": "Thing", "name": "K金", "sameAs": "https://zh.wikipedia.org/wiki/克拉_(純度)" }
              ]
            })
          }}
        />

        {/* 13. ProfessionalService Schema - AI citation: 宣告專業服務類型 */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "@id": "https://www.gold-tw.com/#professionalservice",
              "name": "巧品珠寶貴金屬鑑定回收服務",
              "description": "台北大安區專業貴金屬鑑定師，提供黃金、K金、白金（鉑金）、鑽石免費估價與高價回收服務。XRF螢光儀精密驗純，10年以上實戰鑑定經驗。",
              "url": "https://www.gold-tw.com",
              "telephone": "+886-986821626",
              "image": "https://www.gold-tw.com/og-image.webp",
              "logo": {
                "@type": "ImageObject",
                "url": "https://www.gold-tw.com/logo.webp",
                "width": 200,
                "height": 200
              },
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "濟南路三段62-1號1樓",
                "addressLocality": "大安區",
                "addressRegion": "台北市",
                "postalCode": "10647",
                "addressCountry": "TW"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "25.0447",
                "longitude": "121.5369"
              },
              "areaServed": [
                { "@type": "City", "name": "台北市" },
                { "@type": "City", "name": "新北市" }
              ],
              "provider": { "@id": "https://www.gold-tw.com/#organization" },
              "serviceType": ["黃金鑑定", "黃金回收", "K金估價", "白金回收", "鑽石鑑定", "貴金屬估價"],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "巧品珠寶鑑定回收服務目錄",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "黃金免費估價",
                      "description": "9999純金即時秤重，XRF驗純度，當日牌價計算，免費估價不強迫"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "K金回收估價",
                      "description": "18K、14K、9K各純度K金即時報價，不扣耗損"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "白金（鉑金）回收",
                      "description": "PT950、PT900各規格白金現場鑑定報價"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "鑽石鑑定估價",
                      "description": "GIA與非GIA鑽石現場鑑定，依4C客觀報價"
                    }
                  }
                ]
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "reviewCount": "86",
                "bestRating": "5",
                "worstRating": "1"
              },
              "inLanguage": "zh-TW",
              "knowsAbout": ["黃金回收", "貴金屬鑑定", "K金估價", "鑽石評估", "XRF螢光分析", "台灣金價"],
              "sameAs": [
                "https://www.facebook.com/QPJEWELRY.OFFICIAL",
                "https://www.instagram.com/qiaopin.jewelry/"
              ]
            })
          }}
        />
      </body>
    </html>
  )
}
