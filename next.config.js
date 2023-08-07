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
    ],
    dangerouslyAllowSVG: true,
  },
  async headers() {
    return [
      {
        // Apply these headers to all routes.
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: 'frame-ancestors \'self\''
          },
        ],
      },
    ]
  },
}

module.exports = nextConfig
