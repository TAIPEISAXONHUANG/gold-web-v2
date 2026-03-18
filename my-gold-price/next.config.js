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
  experimental: {
    // Use .browserslistrc to avoid legacy polyfills (saves ~24KB)
    browsersListForSwc: true,
  },
};

module.exports = nextConfig;
