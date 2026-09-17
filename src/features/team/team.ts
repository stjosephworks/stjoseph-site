export const memberSlugs = ['leonardo-freitas'] as const

export type MemberSlug = (typeof memberSlugs)[number]

export interface Member {
  slug: MemberSlug
  name: string
  photo: string
  github: string
  company: { name: string; href: string }
}

export const team: Member[] = [
  {
    slug: 'leonardo-freitas',
    name: 'Leonardo Freitas',
    photo: 'https://avatars.githubusercontent.com/u/12966248?v=4',
    github: 'https://github.com/leonardfreitas',
    company: { name: 'Tabella', href: 'https://tabella.app' },
  },
]
