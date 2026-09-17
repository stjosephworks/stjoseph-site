import type { Locale } from '@/features/i18n/locales'

export function path(locale: Locale, ...segments: string[]): string {
  return `/${[locale, ...segments].join('/')}`
}

export const external = {
  organization: 'https://github.com/stjosephworks',
  profile: 'https://github.com/stjosephworks/.github',
}
