import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  agentRules: false,
  redirects() {
    return Promise.resolve([{ source: '/', destination: '/en', permanent: false }])
  },
}

export default nextConfig
