import type { Metadata, Viewport } from 'next'
import Script from 'next/script'
import './globals.css'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  title: '宸у搧鐝犲锝滃彴鍖楅粌閲戝洖鏀舵帹钖︺兓K閲戠櫧閲戦懡鐭抽珮鍍规敹璩笺兓鍗虫檪閲戝児鏌ヨ',
  description: '鍙板寳澶у畨鍗€瀵﹂珨閵€妯擄紝灏堢嚐9999绱旈噾銉籏閲戙兓鐧介噾銉婚懡鐭抽珮鍍瑰洖鏀躲€傚厤璨讳及鍍逛笉寮疯揩銆佺暥鍫寸Г閲嶅叕闁嬮€忔槑銆佺従鍫寸従閲戜粯娆句笉鎵ｈ€楁悕銆?0骞寸稉椹楀€煎緱淇¤炒銆傛嵎閬嬪繝瀛濇柊鐢熺珯姝ヨ5鍒嗛悩銆傜珛鍗充締闆?0986-821-626 鎴朙INE瑭㈠児锛?,
  alternates: {
    canonical: 'https://www.gold-tw.com/',
  },
  openGraph: {
    title: '宸у搧鐝犲 | 鍙板寳楂樺児榛冮噾鍥炴敹',
    description: '鍙板寳澶у畨鍗€瀵﹂珨搴楅潰锛屽皥鐕熼粌閲戝洖鏀躲€佺櫧閲戙€並閲戣卜璩ｃ€傛瘡鏃ユ渶鏂伴噾鍍癸紝姝¤繋渚嗛浕瑭㈠晱锛?,
    url: 'https://www.gold-tw.com/',
    siteName: '宸у搧鐝犲',
    images: [
      {
        url: 'https://www.gold-tw.com/og-image.webp',
        width: 1200,
        height: 630,
        alt: '宸у搧鐝犲 - 鍙板寳榛冮噾鍥炴敹',
      },
    ],
    locale: 'zh_TW',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '宸у搧鐝犲 | 鍙板寳楂樺児榛冮噾鍥炴敹',
    description: '鍙板寳澶у畨鍗€瀵﹂珨搴楅潰锛屽皥鐕熼粌閲戝洖鏀躲€佺櫧閲戙€並閲戣卜璩ｃ€傛瘡鏃ユ渶鏂伴噾鍍癸紒',
    images: ['https://www.gold-tw.com/og-image.webp'],
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
        {/* 1. Google Search Console 椹楄瓑 */}
        <meta name="google-site-verification" content="f58q0x4tISebwnlueE41NMQNMfL4Ck4T2HO8ZoZvwys" />

        {/* 2. Hero 鍦栫墖 preload - 璁撶€忚鍣ㄥ湪 JS 鍩疯鍓嶅氨闁嬪鎶擄紝鐩存帴鏀瑰杽 LCP */}
        <link rel="preload" href="/hero.webp" as="image" type="image/webp" fetchPriority="high" />

        {/* 3. Preconnect 鍔犻€熷閮ㄨ硣婧愯級鍏?*/}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://connect.facebook.net" />

      </head>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PHHGGGMF" height="0" width="0" style={{display:'none',visibility:'hidden'}}></iframe></noscript>

        {children}

        {/* GA4銆丟oogle Ads銆丮eta Pixel 宸茬Щ鑷?GTM-PHHGGGMF 绠＄悊锛屾铏曚笉閲嶈杓夊叆 */}

        {/* FontAwesome removed - replaced with inline SVG icons */}

        {/* 6. Schema.org LocalBusiness JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "JewelryStore",
              "@id": "https://www.gold-tw.com/#business",
              "name": "宸у搧鐝犲",
              "description": "鍙板寳澶у畨鍗€瀵﹂珨搴楅潰锛屽皥鐕熼粌閲戝洖鏀讹紝鐧介噾銆並閲戙€侀懡鐭宠卜璩?,
              "url": "https://www.gold-tw.com",
              "telephone": "+886-986821626",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "婵熷崡璺笁娈?2-1铏?妯?,
                "addressLocality": "澶у畨鍗€",
                "addressRegion": "鍙板寳甯?,
                "postalCode": "106",
                "addressCountry": "TW"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "25.046",
                "longitude": "121.537"
              },
              "openingHours": ["Mo-Su 11:00-27:30"],
              "priceRange": "$$",
              "image": "https://www.gold-tw.com/og-image.webp",
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
                  "name": "榛冮噾鍥炴敹鍍规牸鎬庨杭瑷堢畻锛?,
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "榛冮噾鍥炴敹鍍规牸 = 鐣舵棩鐗屽児 脳 閲嶉噺 脳 绱斿害銆傛垜鍊戞帯鐢ㄥ叕闁嬮€忔槑鐨勮▓鍍规柟寮忥紝涓嶆墸鑰楁悕锛岀暥鏃ョ従閲戞敮浠樸€?
                  }
                },
                {
                  "@type": "Question",
                  "name": "璩ｉ粌閲戦渶瑕佸付浠€楹艰瓑浠讹紵",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "璜嬫敎甯惰韩浠借瓑姝ｆ湰锛屾垜鍊戦渶瑕侀€茶瀵﹀悕鍒剁櫥瑷橈紝閫欐槸鏀垮簻瑕忓畾鐨勬硶瀹氱▼搴忋€?
                  }
                },
                {
                  "@type": "Question",
                  "name": "浣犲€戠殑鍥炴敹鍍规牸姣斿垾瀹跺ソ鍡庯紵",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "鎴戝€戞彁渚涘競鍫撮爞绔洖鏀跺児锛屼笉鎵ｇГ銆佷笉鎵ｈ€楁悕鍏枊閫忔槑銆傚缓璀版偍澶氭柟姣斿児寰屽啀姹哄畾銆?
                  }
                },
                {
                  "@type": "Question",
                  "name": "K閲戙€?8K閲戝彲浠ュ洖鏀跺棊锛?,
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "鐣剁劧鍙互锛佹垜鍊戝洖鏀跺悇绋甂閲戯細18K銆?4K銆?0K銆?K绛夛紝渚濇摎绱斿害姣斾緥瑷堢畻鍍规牸銆?
                  }
                },
                {
                  "@type": "Question",
                  "name": "榛冮噾绱斿害鎬庨杭杈ㄨ瓨锛?,
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "鎴戝€戠従鍫存湁灏堟キ鍎€鍣ㄦ娓紝鍚屾檪鎻愪緵姘存脯銆佺伀鐕掔瓑澶氶噸妾㈤鏂瑰紡锛岃畵鎮ㄥ畨蹇冭璀夈€?
                  }
                },
                {
                  "@type": "Question",
                  "name": "鍙互绶氫笂浼板児鍡庯紵",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "鍙互閫忛亷LINE锛園QPD888锛夊偝閫佺墿鍝佺収鐗囷紝鎴戝€戞渻鍏堟彁渚涘垵姝ヤ及鍍瑰弮鑰冦€?
                  }
                },
                {
                  "@type": "Question",
                  "name": "浣犲€戞槸鍚堟硶鐨勫棊锛?,
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "鎴戝€戞槸鍚堟硶绔嬫鐨勭彔瀵堕妧妯擄紝鎿佹湁鏀垮簻鏍哥櫦鐨勭浉闂滆ū鍙瓑鐓с€?
                  }
                },
                {
                  "@type": "Question",
                  "name": "妾㈡脯鏈冧笉鏈冨偡瀹崇墿鍝侊紵",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "鎴戝€戞湁鐒℃悕妾㈡脯涔熸湁鐮村鎬ф娓紝鍙緵鎮ㄩ伕鎿囷紝鐐轰繚璀锋偍鐨勫児鍊硷紝寤鸿鍏╄€呭吋鍏锋娓€?
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
                "name": "Google 瑭曡珫"
              },
              "reviewBody": "瑾犱俊缍撶嚐锛屽児鏍奸€忔槑锛屾湇鍕欏皥妤€傛帹钖︼紒"
            })
          }}
        />
        {/* 9. Schema.org WebSite + SearchAction (Sitelinks鎼滃皨妗? */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "宸у搧鐝犲",
              "url": "https://www.gold-tw.com",
              "description": "鍙板寳澶у畨鍗€瀵﹂珨閵€妯擄紝灏堢嚐榛冮噾鍥炴敹銆並閲戙€佺櫧閲戙€侀懡鐭抽珮鍍规敹璩?,
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
              "name": ["浠婃棩閲戝児", "鐭ヨ瓨灏堟瑒", "甯歌鍟忛", "榛冮噾鍥炴敹", "璩ｉ噾鎸囧崡", "閲戝児姣旇純"],
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

        {/* 12. Organization Schema - 璁?AI 瑾嶈瓨鍝佺墝韬唤 */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "@id": "https://www.gold-tw.com/#organization",
              "name": "宸у搧鐝犲",
              "alternateName": ["宸у搧", "QIAO PIN JEWELRY"],
              "url": "https://www.gold-tw.com",
              "logo": {
                "@type": "ImageObject",
                "url": "https://www.gold-tw.com/logo.webp",
                "width": 200,
                "height": 200
              },
              "image": "https://www.gold-tw.com/og-image.webp",
              "description": "鍙板寳澶у畨鍗€瀵﹂珨閵€妯擄紝灏堢嚐榛冮噾銆並閲戙€佺櫧閲戙€侀懡鐭抽珮鍍瑰洖鏀躲€?0骞寸稉椹楋紝瑾犱俊閫忔槑锛岀暥鍫寸従閲戜粯娆俱€?,
              "telephone": "+886-986821626",
              "email": "qiaopinjewelry@gmail.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "婵熷崡璺笁娈?2-1铏?,
                "addressLocality": "澶у畨鍗€",
                "addressRegion": "鍙板寳甯?,
                "postalCode": "106",
                "addressCountry": "TW"
              },
              "foundingDate": "2015",
              "areaServed": {
                "@type": "City",
                "name": "鍙板寳甯?
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
                    "closes": "27:30"
                  }
                }
              ]
            })
          }}
        />

        {/* 13. Service/Product Schema - 璁?AI 鐭ラ亾浣犳彁渚涘摢浜涙湇鍕?*/}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ItemList",
              "name": "宸у搧鐝犲鍥炴敹鏈嶅嫏闋呯洰",
              "description": "鍙板寳宸у搧鐝犲鎻愪緵鍚勯璨撮噾灞珮鍍瑰洖鏀舵湇鍕?,
              "url": "https://www.gold-tw.com",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "item": {
                    "@type": "Service",
                    "@id": "https://www.gold-tw.com/#service-gold",
                    "name": "榛冮噾鍥炴敹",
                    "description": "9999绱旈噾銆佸悇绋磾搴﹂粌閲戦＞鍝侀珮鍍瑰洖鏀讹紝鐣舵棩鐗屽児瑷堢畻锛屼笉鎵ｈ€楁悕锛岀従鍫寸従閲戜粯娆俱€?,
                    "provider": { "@id": "https://www.gold-tw.com/#organization" },
                    "areaServed": { "@type": "City", "name": "鍙板寳甯? },
                    "offers": {
                      "@type": "Offer",
                      "priceCurrency": "TWD",
                      "availability": "https://schema.org/InStock",
                      "description": "渚濈暥鏃ラ粌閲戠墝鍍硅▓绠楋紝鍏嶈不浼板児"
                    }
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "item": {
                    "@type": "Service",
                    "@id": "https://www.gold-tw.com/#service-kgold",
                    "name": "K閲戝洖鏀?,
                    "description": "18K銆?4K銆?0K銆?K绛夊悇绋甂閲戝洖鏀讹紝渚濈磾搴︽瘮渚嬭▓绠楋紝鍏枊閫忔槑銆?,
                    "provider": { "@id": "https://www.gold-tw.com/#organization" },
                    "areaServed": { "@type": "City", "name": "鍙板寳甯? }
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "item": {
                    "@type": "Service",
                    "@id": "https://www.gold-tw.com/#service-platinum",
                    "name": "鐧介噾/閴戦噾鍥炴敹",
                    "description": "PT950銆丳T900绛夊悇绋墤閲戦＞鍝侀珮鍍瑰洖鏀讹紝灏堟キ妾㈡脯銆?,
                    "provider": { "@id": "https://www.gold-tw.com/#organization" },
                    "areaServed": { "@type": "City", "name": "鍙板寳甯? }
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 4,
                  "item": {
                    "@type": "Service",
                    "@id": "https://www.gold-tw.com/#service-diamond",
                    "name": "閼界煶鍥炴敹",
                    "description": "鍚勭ó鍏嬫媺鏁搁懡鐭抽珮鍍瑰洖鏀讹紝GIA璀夋浉鍔犲垎锛屽皥妤憫瀹氥€?,
                    "provider": { "@id": "https://www.gold-tw.com/#organization" },
                    "areaServed": { "@type": "City", "name": "鍙板寳甯? }
                  }
                }
              ]
            })
          }}
        />

        {/* 11. HowTo Schema - 榛冮噾鍥炴敹娴佺▼ */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "HowTo",
              "name": "濡備綍鍦ㄥ阀鍝佺彔瀵堕€茶榛冮噾鍥炴敹",
              "description": "鍙板寳宸у搧鐝犲榛冮噾鍥炴敹瀹屾暣娴佺▼锛屽緸鏀滃付璀変欢鍒扮従鍫存敹娆撅紝鍏ㄧ▼閫忔槑鍏枊銆?,
              "totalTime": "PT30M",
              "supply": [
                { "@type": "HowToSupply", "name": "韬唤璀夋鏈? },
                { "@type": "HowToSupply", "name": "娆插洖鏀剁殑榛冮噾/K閲?鐧介噾/閼界煶" }
              ],
              "step": [
                {
                  "@type": "HowToStep",
                  "position": 1,
                  "name": "鏀滃付鐗╁搧鍒板簵",
                  "text": "鏀滃付韬唤璀夋鏈強娆插洖鏀剁殑璨撮噾灞紝鍓嶅線鍙板寳甯傚ぇ瀹夊崁婵熷崡璺笁娈?2-1铏?妯撱€傚缓璀颁簨鍏堥浕瑭辨垨LINE闋愮磩銆?,
                  "url": "https://www.gold-tw.com/#contact"
                },
                {
                  "@type": "HowToStep",
                  "position": 2,
                  "name": "灏堟キ妾㈡脯閼戝畾",
                  "text": "鎴戝€戜娇鐢?XRF 铻㈠厜鍎€绛夊皥妤ō鍌欑暥鍫存娓磾搴︼紝閬庣▼鍏枊閫忔槑锛屽鎴跺叏绋嬪湪鍫磋璀夈€?
                },
                {
                  "@type": "HowToStep",
                  "position": 3,
                  "name": "鐣跺牬绉ら噸鍫卞児",
                  "text": "渚濈暥鏃ラ粌閲戠墝鍍?脳 閲嶉噺 脳 绱斿害瑷堢畻鍥炴敹閲戦锛屼笉鎵ｇГ銆佷笉鎵ｈ€楁悕锛屽牨鍍圭暥鍫寸⒑瑾嶃€?,
                  "url": "https://www.gold-tw.com/today-gold-price"
                },
                {
                  "@type": "HowToStep",
                  "position": 4,
                  "name": "鍚屾剰寰岀従鍫翠粯娆?,
                  "text": "瀹㈡埗纰鸿獚鍫卞児寰岋紝鐝惧牬浠ョ従閲戞敮浠橈紝鐒￠渶绛夊緟锛屽嵆鏅傚畬鎴愪氦鏄撱€?
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
              "name": "宸у搧鐝犲 - 鍙板寳榛冮噾鍥炴敹鎺ㄨ枽",
              "url": "https://www.gold-tw.com",
              "description": "鍙板寳澶у畨鍗€瀵﹂珨閵€妯擄紝灏堢嚐榛冮噾鍥炴敹銆並閲戙€佺櫧閲戙€侀懡鐭抽珮鍍规敹璩笺€傚嵆鏅傞噾鍍规煡瑭紝鍏嶈不浼板児銆?,
              "inLanguage": "zh-TW",
              "isPartOf": { "@id": "https://www.gold-tw.com/#website" },
              "about": { "@id": "https://www.gold-tw.com/#business" },
              "author": {
                "@type": "Organization",
                "name": "宸у搧鐝犲",
                "@id": "https://www.gold-tw.com/#organization"
              },
              "publisher": {
                "@type": "Organization",
                "name": "宸у搧鐝犲",
                "@id": "https://www.gold-tw.com/#organization"
              },
              "breadcrumb": {
                "@type": "BreadcrumbList",
                "itemListElement": [
                  { "@type": "ListItem", "position": 1, "name": "棣栭爜", "item": "https://www.gold-tw.com" }
                ]
              },
              "speakable": {
                "@type": "SpeakableSpecification",
                "cssSelector": ["h1", ".hero-text-shadow", "#rates-desktop"]
              },
              "mentions": [
                { "@type": "Thing", "name": "榛冮噾鍥炴敹", "sameAs": "https://zh.wikipedia.org/wiki/榛冮噾" },
                { "@type": "Thing", "name": "閲戝児", "sameAs": "https://zh.wikipedia.org/wiki/閲戝児" },
                { "@type": "Thing", "name": "K閲?, "sameAs": "https://zh.wikipedia.org/wiki/鍏嬫媺_(绱斿害)" }
              ]
            })
          }}
        />
      </body>
    </html>
  )
}
