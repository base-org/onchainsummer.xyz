/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.externals.push('pino-pretty', 'lokijs', 'encoding')
    return config
  },
  images: {
    domains: ['media.contextcdn.com', 'mint.fun'],
  },
}

module.exports = nextConfig
