/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    formats: ['image/webp'],
    disableStaticImages: false,
    domains: ['plus.unsplash.com', 'images.unsplash.com'],
  },
  webpack: (config) => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
    };
    
    // Добавяме специфична конфигурация за Leaflet
    config.resolve.alias = {
      ...config.resolve.alias,
      'leaflet': require.resolve('leaflet'),
    };
    
    return config;
  },
  transpilePackages: ['react-leaflet', 'leaflet']
}

module.exports = nextConfig 