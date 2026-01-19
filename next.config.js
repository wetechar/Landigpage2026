
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Enable SVG support for Next.js Image component
    dangerouslyAllowSVG: true,
    // Safety headers for SVG
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    // Local images in /public are allowed by default, but we can be explicit about formats
    formats: ['image/webp'],
  },
}

module.exports = nextConfig;
