import { isLocale, type Locale, localeInfo, locales } from '@/features/i18n/locales'

export function path(locale: Locale, ...segments: string[]): string {
  return `/${[locale, ...segments].join('/')}`
}

// The same page in another language: the locale segment is swapped, or added when the path has none.
export function localizedPath(pathname: string, locale: Locale): string {
  const segments = pathname.split('/').filter((segment) => segment !== '')
  if (isLocale(segments[0] ?? '')) segments.shift()
  return path(locale, ...segments)
}

// Every page is its own canonical, and names the same page in each language as its alternate. Set per page: a
// layout's would be inherited, and every page would claim to be the one the layout sits on. x-default is the path
// without a locale, which sends each visitor to their own language, as Google suggests for an auto-redirecting page.
export function alternates(
  locale: Locale,
  ...segments: string[]
): { canonical: string; languages: Record<string, string> } {
  return {
    canonical: path(locale, ...segments),
    languages: {
      ...Object.fromEntries(
        locales.map((one) => [localeInfo[one].hreflang, path(one, ...segments)]),
      ),
      'x-default': `/${segments.join('/')}`,
    },
  }
}

export const external = {
  organization: 'https://github.com/stjosephworks',
  profile: 'https://github.com/stjosephworks/.github',
}
