import type { NextConfig } from 'next'

const config: NextConfig = {
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