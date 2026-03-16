import { MetadataRoute } from 'next';

const blogSlugs = [
  'before-selling-gold', 'broken-gold-recovery', 'diamond-jewelry',
  'factors-affecting-gold-price', 'gold-9999-recovery', 'gold-antique',
  'gold-appraise', 'gold-auction', 'gold-bar-recovery', 'gold-birthday-gift',
  'gold-bracelet-recovery', 'gold-calculator', 'gold-coin-invest',
  'gold-coin-recovery', 'gold-culture', 'gold-earring-recovery', 'gold-family',
  'gold-id-requirement', 'gold-identification', 'gold-insurance',
  'gold-jewelry-recovery', 'gold-liquid', 'gold-necklace-recovery',
  'gold-pendant-recovery', 'gold-price-2026', 'gold-price-forecast-2026',
  'gold-price-key-factors', 'gold-purity', 'gold-recovery-faq',
  'gold-recovery-faq-2026', 'gold-recovery-traps', 'gold-recycling-precautions',
  'gold-recycling-price-factors', 'gold-recycling-process', 'gold-recycling-tips',
  'gold-ring-recovery', 'gold-safety', 'gold-scale-trap', 'gold-scam-prevent',
  'gold-shop-recommend', 'gold-shop-vs-recycling-shop', 'gold-shop-vs-silver-shop',
  'gold-should-know', 'gold-tax', 'gold-tradition', 'gold-vs-k-gold-vs-platinum',
  'gold-vs-platinum', 'gold-vs-platinum-investment', 'gold-watch-recovery',
  'gold-weight', 'how-to-choose-gold-shop', 'inheritance-gold', 'karat-gold-guide',
  'karat-gold-price', 'karat-gold-recovery', 'karat-gold-report', 'lion-head-gold',
  'new-taipei-gold-recovery', 'old-gold-recovery', 'platinum-recovery',
  'sell-gold-tips', 'taichung-gold-recovery', 'taipei-gold-recovery',
  'wedding-gold-recovery', 'what-to-bring-when-selling-gold-2026',
  'why-some-get-better-gold-price',
];

const districtSlugs = [
  'da-an', 'xin-yi', 'zhong-zheng', 'songshan', 'zhongshan', 'datong',
  'wenshan', 'shilin', 'beitou', 'neihu', 'nangang', 'wanhua',
  'banqiao', 'xinzhuang', 'sanchong', 'zhonghe', 'xindian', 'yonghe',
  'luzhou', 'shulin', 'xizhi', 'tucheng', 'tamsui',
  'keelung', 'keelung-renai', 'keelung-nuannuan', 'keelung-qidu', 'keelung-anle',
  'new-taipei',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.gold-tw.com';
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: now, changeFrequency: 'daily', priority: 1 },
    { url: `${baseUrl}/blog`, lastModified: now, changeFrequency: 'daily', priority: 0.9 },
    { url: `${baseUrl}/faq`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/faq-structured`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/today-gold-price`, lastModified: now, changeFrequency: 'daily', priority: 0.9 },
    { url: `${baseUrl}/gold-recycling-price`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/sell-gold-guide`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/gold-price-compare`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
  ];

  const blogPages: MetadataRoute.Sitemap = blogSlugs.map(slug => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date('2026-03-17'),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  const districtPages: MetadataRoute.Sitemap = districtSlugs.map(slug => ({
    url: `${baseUrl}/district/${slug}`,
    lastModified: new Date('2026-03-17'),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...staticPages, ...blogPages, ...districtPages];
}
