/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=(), payment=()' },
        ],
      },
    ];
  },
  images: {
    // WebP only: AVIF is noticeably smaller but encoding it on first request
    // is CPU/memory-hungry, and on a 1 GB hosting plan a burst of first visits
    // (every phone asks for AVIF) can exhaust memory and make the app restart.
    formats: ['image/webp'],
    // Fewer distinct widths = fewer variants to generate and cache. Our
    // sources are at most 1600px, and most cards are rendered at 260-700px.
    deviceSizes: [640, 828, 1200, 1600],
    imageSizes: [260, 520],
    // Optimised images never change under the same URL (files in /public are
    // replaced under new names), so keep them for a year.
    minimumCacheTTL: 31536000,
  },
};

module.exports = nextConfig;
