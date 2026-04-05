import { MetadataRoute } from 'next';
import fs from 'fs';
import path from 'path';

// ✅ 自動掃描資料夾，永不漏頁面！新增文章不需要手動更新這裡
function getSubdirectories(dirPath: string): string[] {
  try {
    return fs.readdirSync(dirPath, { withFileTypes: true })
      .filter(d => d.isDirectory())
      .map(d => d.name);
  } catch {
    return [];
  }
}

// 從 page.tsx 讀取 export const lastModified
function readLastModified(pagePath: string, fallback: Date): Date {
  try {
    const content = fs.readFileSync(pagePath, 'utf-8');
    const match = content.match(/export\s+const\s+lastModified\s*=\s*new\s+Date\(['"]([0-9\-]+)['"]\)/);
    if (match) return new Date(match[1]);
  } catch {}
  return fallback;
}

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

  // 自動掃描 blog 和 district 資料夾
  const blogDir = path.join(process.cwd(), 'app', 'blog');
  const blogSlugs = getSubdirectories(blogDir);

  const staticPages: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: now, changeFrequency: 'daily', priority: 1 },
    { url: `${baseUrl}/blog`, lastModified: now, changeFrequency: 'daily', priority: 0.9 },
    { url: `${baseUrl}/faq`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/faq-structured`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/today-gold-price`, lastModified: now, changeFrequency: 'daily', priority: 0.9 },
    { url: `${baseUrl}/gold-recycling-price`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/sell-gold-guide`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/gold-price-compare`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/gold-recovery-guide`, lastModified: now, changeFrequency: 'weekly', priority: 1 },
    { url: `${baseUrl}/about/author`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
  ];

  const blogPages: MetadataRoute.Sitemap = blogSlugs.map(slug => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: readLastModified(path.join(blogDir, slug, 'page.tsx'), new Date('2026-03-19')),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  const districtPages: MetadataRoute.Sitemap = districtSlugs.map(slug => ({
    url: `${baseUrl}/district/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // case-studies 頁面
  const caseStudiesDir = path.join(process.cwd(), 'app', 'case-studies');
  const caseStudySlugs = getSubdirectories(caseStudiesDir);
  const caseStudyPages: MetadataRoute.Sitemap = caseStudySlugs.map(slug => ({
    url: `${baseUrl}/case-studies/${slug}`,
    lastModified: readLastModified(path.join(caseStudiesDir, slug, 'page.tsx'), new Date('2026-03-19')),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...staticPages, ...blogPages, ...districtPages, ...caseStudyPages];
}