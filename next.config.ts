import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  agentRules: false,
  images: {
    remotePatterns: [{ protocol: 'https', hostname: 'avatars.githubusercontent.com' }],
  },
  redirects() {
    return Promise.resolve([{ source: '/', destination: '/en', permanent: false }])
  },
}

export default nextConfig
