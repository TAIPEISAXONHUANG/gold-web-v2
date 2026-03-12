import { MetadataRoute } from 'next';

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

  // 部落格文章 - 手動列表
  const blogSlugs = [
    'factors-affecting-gold-price', 'karat-gold-recovery', 'sell-gold-tips',
    'gold-vs-platinum', 'gold-price-forecast-2026', 'taipei-gold-recovery',
    'karat-gold-price', 'gold-recycling-precautions', 'gold-shop-vs-recycling-shop',
    'wedding-gold-recovery', 'inheritance-gold', 'karat-gold-guide',
    'gold-recycling-tips', 'gold-price-2026', 'gold-bar-recovery',
    'platinum-recovery', 'gold-identification', 'gold-calculator',
    'old-gold-recovery', 'broken-gold-recovery', 'gold-jewelry-recovery',
    'gold-coin-recovery', 'gold-should-know', 'before-selling-gold',
    'gold-shop-recommend', 'diamond-jewelry', 'gold-9999-recovery',
    'gold-antique', 'gold-appraise', 'gold-auction', 'gold-baby',
    'gold-birthday-gift', 'gold-bracelet-recovery', 'gold-coin-invest',
    'gold-culture', 'gold-earring-recovery', 'gold-family', 'gold-insurance',
    'gold-liquid', 'gold-necklace-recovery', 'gold-pendant-recovery',
    'gold-purity', 'gold-ring-recovery', 'gold-safety', 'gold-scam-prevent',
    'gold-tax', 'gold-tradition', 'gold-watch-recovery', 'gold-weight',
    'lion-head-gold', 'gold-jewelry-care', 'gold-store-selection',
    'gold-price-comparison', 'gold-sell-timing', 'gold-authentication',
    'gold-weight-measurement', 'gold-purity-test', 'gold-scam-types',
    'gold-contract-note', 'gold-payment-methods', 'gold-receipt-importance',
    'gold-review-sites', 'gold-online-quote', 'gold-offline-compare',
    'gold-tax-inquiry', 'gold-inheritance-process', 'gold-divorce-split',
    'gold-business-closure', 'gold-investment-exit', 'gold-emergency-cash',
    'gold-seasonal-price', 'gold-holiday-promotion', 'gold-loan-vs-sell',
    'gold-rental-vs-sell', 'gold-repair-before-sell', 'gold-clean-before-sell',
    'gold-polish-before-sell', 'gold-packaging-tip', 'gold-transport-safety',
    'gold-insurance-advice', 'gold-recycling-guide-2026', 'taipei-gold-recycling-daan',
    'taipei-gold-recycling-recommend', 'gold-price-today', 'gold-price-trend',
    'gold-price-per-gram', 'gold-price-forecast', 'gold-price-highest-new',
    'gold-price-monthly-report-new', 'gold-price-weekly-report-new',
    'gold-licensed-shop-new', 'gold-trustworthy-shop-new', 'gold-professional-appraisal-new',
    'gold-free-appraisal-new', 'gold-transparent-process-new', 'gold-no-middleman-new',
    'gold-quick-service-new', 'gold-local-service-new', 'gold-door-service-new',
    'gold-mail-service-new', 'gold-holiday-service-new', 'gold-no-appointment-new',
    'gold-rental-service-new', 'gold-safe-storage-new', 'gold-bank-storage-new',
    'gold-privacy-protection-new', 'gold-reviews-testimonials-new', 'gold-no-deduction-new',
    'gold-safe-purchase-new', 'gold-express-cash-new', 'gold-cash-immediate',
    'gold-buy-sell-guide', 'gold-investment-beginner-new', 'gold-global-price-new',
    'gold-usd-relationship-new', 'gold-inflation-hedge-new', 'gold-interest-rate-new',
    'gold-etf-investment-new', 'gold-futures-trading-new', 'gold-vs-stock-new',
    'gold-taiwan-market-new', 'gold-seasonal-pattern-new', 'gold-valuation-calculation-new',
    'gold-meaning-symbolism-new', 'gold-fengshui-meanings-new', 'gold-zodiac-constellation-new',
    'gold-wedding-tradition-new', 'gold-marrying-daughter-new', 'gold-family-heirloom-new',
    'gold-family-gift-new', 'gold-baby-gift-new', 'gold-anniversary-gift-new',
    'gold-auspicious-occasion-new', 'gold-lucky-number-new', 'gold-culture-taiwan-new',
    'gold-contract-notes-new', 'gold-payment-methods-new', 'gold-receipt-importance-new',
    'gold-tax-inquiry-new', 'gold-store-selection-new', 'gold-purity-test-new',
    'gold-weight-measurement-new', 'gold-scam-prevention-new', 'gold-cleaning-guide-new',
    'gold-jewelry-maintenance-new', 'gold-ring-recycling', 'gold-necklace-recycling',
    'gold-earring-recycling', 'gold-bracelet-recycling', 'gold-coin-recycling',
    'old-gold-recycling-new', 'karat-gold-recycling-nearby', 'platinum-recycling-taipei',
    'keelung-gold-recycling', 'new-taipei-gold-recycling', 'sanchong-gold-recycling',
    'xinzhuang-gold-recycling', 'zhonghe-gold-recycling', 'banqiao-gold-recycling',
    'silversmith-shop-nearby', 'gold-recycling-recommend', 'gold-bar-investment',
    'gold-storage', '10k-gold-recycling-new', '14k-gold-recycling-new', '18k-gold-recycling-new',
    '24k-gold-recycling', 'gold-anniversary-gift-new', 'gold-birthday-gift-new',
    'gold-emergency-cash-new', 'gold-futures-trading-new'
  ];

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

  // 產生部落格頁面
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
