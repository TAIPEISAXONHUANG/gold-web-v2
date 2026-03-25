import { Metadata } from 'next';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
  title: '大安區黃金回收推薦2026｜免費估價・當場現金｜巧品珠寶',
  description: '大安區黃金回收首選！巧品珠寶位於濟南路三段，捷運忠孝新生站步行5分鐘。今日金價一錢多少即時更新，老闆親自鑑定、不扣耗損、當場現金。2026黃金回收推薦台北，電話 0986-821-626。',
  alternates: {
    canonical: 'https://www.gold-tw.com/district/da-an',
  },
};

export default function DaanPage() {
  redirect('/district/da-an');
}
