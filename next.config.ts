import type { NextConfig } from 'next'

const config: NextConfig = {
  typescript: {
    ignoreBuildErrors: true
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'fashionhubwebsite.netlify.app',
        port: '',
        pathname: '/**',
        search: '',
      },
       {
        protocol: 'https',
        hostname: 'www.cartcontrollers.com',
        port: '',
        pathname: '/**',
        search: '',
      },
    ],
  },
}

export default config