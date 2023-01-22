const UnoCSS = require('@unocss/webpack').default

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  headers() {
    return [
      {
        source: '/api/:unsplash*',
        headers: [
          { key: 'Access-Control-Allow-Methods', value: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',},
          { key: 'Access-Control-Allow-Origin', value: '*',},
          { key: 'Access-Control-Allow-Headers', value: '*',},
          { key: 'Access-Control-Expose-Headers', value: '*'},
        ]
      }
    ]
  },
  webpack: (config) => {
    config.cache = false
    config.plugins.push(
      UnoCSS(),
    )
    return config
  },
}

module.exports = nextConfig
