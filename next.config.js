/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
}

module.exports = 
{
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.devdojo.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: "lh3.googleusercontent.com",
        port: '',
        
      }
    ],

  },
}
nextConfig
