/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    formats: ['image/webp'],
    disableStaticImages: false,
    domains: ['plus.unsplash.com', 'images.unsplash.com'],
  },
}

module.exports = nextConfig 