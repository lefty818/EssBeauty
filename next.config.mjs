/** @type {import('next').NextConfig} */
const nextConfig = {
  // Builds the site as plain static files into /out for Cloudflare Pages.
  // Security headers live in public/_headers, which Cloudflare reads.
  output: 'export',
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
