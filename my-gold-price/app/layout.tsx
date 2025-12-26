import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '巧品珠寶 | 今日金價查詢',
  description: '即時更新黃金回收價格',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-TW">
      <body style={{ margin: 0, padding: 0, background: '#f3f4f6' }}>{children}</body>
    </html>
  )
}