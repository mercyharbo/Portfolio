/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'cdn.hashnode.com',
      },
    ],
  },
}

module.exports = nextConfig
