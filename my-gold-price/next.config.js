/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '',
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'wsrv.nl' },
      { protocol: 'https', hostname: 'drive.google.com' },
      { protocol: 'https', hostname: 'lh3.googleusercontent.com' },
    ],
  },
  // 移除無效的 browsersListForSwc（Next.js 14 不支援）
  // 改用 .browserslistrc 檔案控制 polyfill 範圍
};

module.exports = nextConfig;