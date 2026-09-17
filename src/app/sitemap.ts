import type { MetadataRoute } from 'next'
import { locales } from '@/features/i18n/locales'
import { site } from '@/lib/site'

const pages = ['', 'mission', 'tools', 'team']

export default function sitemap(): MetadataRoute.Sitemap {
  return locales.flatMap((locale) =>
    pages.map((page) => ({
      url: `${site.url}/${locale}${page === '' ? '' : `/${page}`}`,
      changeFrequency: 'monthly' as const,
      priority: page === '' ? 1 : 0.8,
    })),
  )
}
