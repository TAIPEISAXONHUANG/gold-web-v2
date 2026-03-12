import { MetadataRoute } from 'next';
import fs from 'fs';
import path from 'path';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.gold-tw.com';
  const now = new Date();

  // 靜態頁面
  const staticPages = [
    { url: baseUrl, priority: 1, changefreq: 'daily' as const },
    { url: `${baseUrl}/blog`, priority: 0.9, changefreq: 'weekly' as const },
    { url: `${baseUrl}/faq`, priority: 0.8, changefreq: 'monthly' as const },
    { url: `${baseUrl}/faq-structured`, priority: 0.9, changefreq: 'weekly' as const },
    { url: `${baseUrl}/today-gold-price`, priority: 0.9, changefreq: 'daily' as const },
    { url: `${baseUrl}/gold-recycling-price`, priority: 0.9, changefreq: 'weekly' as const },
    { url: `${baseUrl}/sell-gold-guide`, priority: 0.9, changefreq: 'weekly' as const },
    { url: `${baseUrl}/gold-price-compare`, priority: 0.9, changefreq: 'weekly' as const },
  ];

  // 地區頁面
  const districts = [
    'da-an', 'xin-yi', 'zhong-zheng', 'songshan', 'zhongshan', 'datong', 
    'wenshan', 'shilin', 'beitou', 'neihu', 'nangang', 'wanhua',
    'banqiao', 'xinzhuang', 'sanchong', 'zhonghe', 'xindian', 'yonghe', 
    'luzhou', 'shulin', 'xizhi', 'tucheng', 'tamsui',
    'keelung', 'keelung-renai', 'keelung-nuannuan', 'keelung-qidu', 'keelung-anle'
  ];

  // 自動掃描部落格目錄取得所有文章
  let blogSlugs: string[] = [];
  try {
    const blogDir = path.join(process.cwd(), 'app', 'blog');
    if (fs.existsSync(blogDir)) {
      const entries = fs.readdirSync(blogDir, { withFileTypes: true });
      blogSlugs = entries
        .filter(entry => entry.isDirectory())
        .map(entry => entry.name);
    }
  } catch (error) {
    // 如果無法讀取，使用備用清單
    console.error('Error reading blog directory:', error);
  }

  // 如果自動掃描失敗，使用備用清單
  if (blogSlugs.length === 0) {
    blogSlugs = [
      'factors-affecting-gold-price', 'karat-gold-recovery', 'sell-gold-tips',
      'gold-vs-platinum', 'gold-price-forecast-2026', 'taipei-gold-recovery',
      'karat-gold-price', 'gold-recycling-precautions', 'gold-shop-vs-recycling-shop',
      'wedding-gold-recovery', 'inheritance-gold', 'karat-gold-guide',
      'gold-recycling-tips', 'gold-price-2026', 'gold-bar-recovery',
      'platinum-recovery', 'gold-identification', 'gold-calculator',
      'old-gold-recovery', 'broken-gold-recovery', 'gold-jewelry-recovery',
      'gold-coin-recovery', 'gold-should-know', 'before-selling-gold',
      'gold-shop-recommend', 'diamond-jewelry', 'gold-9999-recovery'
    ];
  }

  // 產生 sitemap
  const sitemap: MetadataRoute.Sitemap = staticPages.map(page => ({
    url: page.url,
    lastModified: now,
    changeFrequency: page.changefreq,
    priority: page.priority,
  }));

  // 產生地區頁面
  districts.forEach(district => {
    sitemap.push({
      url: `${baseUrl}/district/${district}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    });
  });

  // 產生部落格頁面（自動從目錄掃描）
  blogSlugs.forEach(slug => {
    sitemap.push({
      url: `${baseUrl}/blog/${slug}`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    });
  });

  return sitemap;
}
