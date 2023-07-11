/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'pictures.abebooks.com',
        port: '',
        pathname: '/isbn/**'
      }
    ]
  }
}

module.exports = nextConfig
