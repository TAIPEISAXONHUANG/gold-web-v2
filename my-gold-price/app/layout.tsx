import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '巧品珠寶 | 台北高價黃金回收．K金白金買賣．即時報價查詢',
  description: '台北大安區實體店面，專營黃金回收、白金、K金、鑽石買賣。提供每日最新即時金價查詢與線上試算。',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-TW">
      <head>
        {/* --- 1. Google Global Tag (基礎代碼) 放在這裡 --- */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-356014880"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-356014880');
            `,
          }}
        />
        {/* --- 結束 --- */}

        <script src="https://cdn.tailwindcss.com"></script>
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" rel="stylesheet" />
        
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
      </head>
      <body>{children}</body>
    </html>
  )
}
