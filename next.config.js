/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.zzenz.com",
      }
    ]
  }
}

module.exports = nextConfig
