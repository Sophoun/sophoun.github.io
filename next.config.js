/** @type {import('next').NextConfig} */
const withOptimizedImages = require('next-optimized-images');

const nextConfig = withOptimizedImages({
  handleImages: ['jpeg', 'png'],
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: true,
  images: {
    disableStaticImages: true,
    loader: "cloudinary",
    path: "/"
  },
  experimental: {
    images: {
      unoptimized: true
    }
  }
})

module.exports = nextConfig