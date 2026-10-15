import type { MetadataRoute } from 'next'
import { locales } from '@/features/i18n/locales'
import { alternates } from '@/lib/routes'
import { site } from '@/lib/site'

const pages = [[], ['mission'], ['tools'], ['team']]

function absolute(languages: Record<string, string>): Record<string, string> {
  return Object.fromEntries(
    Object.entries(languages).map(([lang, url]) => [lang, `${site.url}${url}`]),
  )
}

export default function sitemap(): MetadataRoute.Sitemap {
  return locales.flatMap((locale) =>
    pages.map((segments) => {
      const page = alternates(locale, ...segments)

      return {
        url: `${site.url}${page.canonical}`,
        changeFrequency: 'monthly' as const,
        priority: segments.length === 0 ? 1 : 0.8,
        alternates: { languages: absolute(page.languages) },
      }
    }),
  )
}
