export const toolSlugs = ['prumo'] as const

export type ToolSlug = (typeof toolSlugs)[number]

export type ToolState = 'available' | 'building'

export type ToolLinkKey = 'repository' | 'desktopRepository' | 'npm'

export interface Tool {
  slug: ToolSlug
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
