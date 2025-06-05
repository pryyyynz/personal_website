/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export', // Enable static exports for GitHub Pages
  // Don't set distDir here as it can cause issues with the GitHub Pages deployment
  images: {
    unoptimized: true, // Disable server-side image optimization for static exports
    domains: [],
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '',
        pathname: '/**',
      },
    ],
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  // Configure base path for GitHub Pages deployment
  basePath: '/personal_website',
}

module.exports = nextConfig
