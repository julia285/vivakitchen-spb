/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // No external image domains configured yet — all imagery is local
    // placeholders or files added to /public/images. Add real CDN/hosting
    // domains here once the factory/agency photo pipeline is set up.
    formats: ['image/avif', 'image/webp'],
  },
};

module.exports = nextConfig;
