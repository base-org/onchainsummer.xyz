/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.externals.push('pino-pretty', 'lokijs', 'encoding')
    return config
  },
  images: {
    domains: [
      'media.contextcdn.com',
      'mint.fun',
      'image.mux.com',
      'testnet.mint.fun',
      'assets.onchainsummer.xyz'
    ],
    dangerouslyAllowSVG: true,
  },
  async redirects() {
    return [
      {
        source: '/live',
        destination: 'https://lvpr.tv/?v=f605g2y8y8sly24n',
        permanent: true,
      },
    ]
  },
  async headers() {
    return [
      {
        // Apply these headers to all routes.
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: "frame-ancestors 'self'",
          },
        ],
      },
    ]
  },
}

module.exports = nextConfig
