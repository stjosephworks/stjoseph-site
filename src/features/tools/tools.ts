import type { Locale } from '@/features/i18n/locales'

export const toolSlugs = ['prumo'] as const

export type ToolSlug = (typeof toolSlugs)[number]

export type ToolState = 'available' | 'building'

export type ToolLinkKey = 'repository' | 'desktopRepository' | 'npm'

export interface Tool {
  slug: ToolSlug
  // The tool's own site, which serves the same languages under the same path segments.
  site: string
  state: ToolState
  links: { key: ToolLinkKey; href: string }[]
}

export const tools: Tool[] = [
  {
    slug: 'prumo',
    site: 'https://prumo.stjosephworks.org',
    state: 'available',
    links: [
      { key: 'repository', href: 'https://github.com/stjosephworks/prumo' },
      { key: 'desktopRepository', href: 'https://github.com/stjosephworks/prumo-desktop' },
      { key: 'npm', href: 'https://www.npmjs.com/package/@stjoseph/prumo' },
    ],
  },
]

export function toolSite(tool: Tool, locale: Locale): string {
  return `${tool.site}/${locale}`
}
