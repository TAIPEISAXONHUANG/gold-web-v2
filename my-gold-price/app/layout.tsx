import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '巧品珠寶 | 台北高價黃金回收．K金白金買賣．即時報價查詢',
  description: '台北大安區實體店面，專營黃金回收，白金、K金、鑽石買賣。提供每日最新即時金價查詢與線上試算。',
  openGraph: {
    title: '巧品珠寶 | 台北高價黃金回收',
    description: '台北大安區實體店面，專營黃金回收、白金、K金買賣。每日最新金價，歡迎來電詢問！',
    url: 'https://www.gold-tw.com',
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
        {/* 1. Google Search Console 驗證 */}
        <meta name="google-site-verification" content="f58q0x4tISebwnlueE41NMQNMfL4Ck4T2HO8ZoZvwys" />

        {/* 2. Google Global Tag (同時設定 Analytics 和 Ads) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-LDD35TNS69"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              // 設定 Google Analytics (分析) - 解決 "未收到資料"
              gtag('config', 'G-LDD35TNS69'); 
              
              // 設定 Google Ads (廣告) - 解決 "轉換追蹤"
              gtag('config', 'AW-356014880');
            `,
          }}
        />

        {/* 3. Meta Pixel (Facebook) */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '1509088996230503');
              fbq('track', 'PageView');
            `,
          }}
        />
        {/* Meta Pixel Noscript (for users without JS) */}
        <noscript>
          <img height="1" width="1" style={{display:'none'}}
            src="https://www.facebook.com/tr?id=1509088996230503&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>

        {/* 5. LocalBusiness 結構化資料 (JSON-LD) */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              {
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                "name": "巧品珠寶",
                "description": "台北高價黃金回收，K金、白金、鑽石買賣。每日最新金價查詢。",
                "image": "https://wsrv.nl/?url=https://drive.google.com/uc?id=1ASz1v5ZBQ-WV572r-BC4gZRuraywgKKv&w=1200&output=webp&q=80",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "濟南路三段62-1號",
                  "addressLocality": "台北市",
                  "addressRegion": "大安區",
                  "postalCode": "106",
                  "addressCountry": "TW"
                },
                "geo": {
                  "@type": "GeoCoordinates",
                  "latitude": "25.0469",
                  "longitude": "121.5354"
                },
                "telephone": "+886-986-821-626",
                "priceRange": "$$",
                "openingHours": ["Mo-Fr 11:00-21:30", "Sa 11:00-21:30"],
                "url": "https://www.gold-tw.com"
              }
            `,
          }}
        />

        {/* 6. Product 結構化資料 - 黃金回收價格 (JSON-LD) */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              {
                "@context": "https://schema.org",
                "@type": "Product",
                "name": "黃金回收 (24K)",
                "description": "高價黃金回收服務，即時報價。2026年3月回收價格：每錢 $19,370起",
                "brand": {
                  "@type": "Brand",
                  "name": "巧品珠寶"
                },
                "offers": {
                  "@type": "Offer",
                  "name": "黃金回收 24K",
                  "price": "19370",
                  "priceCurrency": "TWD",
                  "priceValidUntil": "2026-03-16",
                  "availability": "https://schema.org/InStock",
                  "seller": {
                    "@type": "Organization",
                    "name": "巧品珠寶"
                  }
                }
              }
            `,
          }}
        />
        
        {/* 4. 樣式庫 (Tailwind & FontAwesome) */}
        <script src="https://cdn.tailwindcss.com"></script>
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" rel="stylesheet" />
        
        {/* 4. 自定義 CSS (跑馬燈、導航列等) */}
        <style dangerouslySetInnerHTML={{__html: `
          body { margin: 0; font-family: system-ui, -apple-system, sans-serif; background-color: #f3f4f6; color: #1f2937; }
          .hero-section { position: relative; height: 400px; background-color: transparent; overflow: hidden; display: flex; align-items: center; justify-content: center; text-align: center; color: white; }
          .hero-img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; z-index: 0; opacity: 1; }
          .hero-text-shadow { text-shadow: 0 2px 4px rgba(0,0,0,0.7); }
          .nav-sticky { position: sticky; top: 0; z-index: 40; background: white; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1); height: 84px; }
          .table-header { background-color: #FEF2F2 !important; color: #7F1D1D; font-weight: bold; padding: 12px 8px; border-bottom: 1px solid #FECACA; text-align: center; font-size: 0.9rem; white-space: nowrap; z-index: 20; }
          .table-cell { padding: 12px 8px; border-bottom: 1px solid #F3F4F6; text-align: center; font-family: 'Segoe UI', sans-serif; font-size: 0.95rem; }
          @keyframes marquee { 0% { transform: translateX(100%); } 100% { transform: translateX(-100%); } }
          .animate-marquee { animation: marquee 30s linear infinite; }
          .faq-answer { max-height: 0; overflow: hidden; transition: max-height 0.3s ease-out; }
          .faq-item.active .faq-answer { max-height: 500px; padding-bottom: 16px; }
          .faq-item.active .faq-icon { transform: rotate(180deg); }
          .faq-icon { transition: transform 0.3s; }
        `}} />

        {/* 5. Schema.org LocalBusiness JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "JewelryStore",
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
              "image": "https://www.gold-tw.com/images/logo.png",
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

        {/* 6. Schema.org FAQPage JSON-LD */}
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

        {/* 7. Schema.org Review JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Review",
              "itemReviewed": {
                "@type": "JewelryStore",
                "name": "巧品珠寶"
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
      </head>
      <body>{children}</body>
    </html>
  )
}
