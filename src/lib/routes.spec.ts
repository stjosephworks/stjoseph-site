import { describe, expect, it } from 'vitest'
import { localeInfo, locales } from '@/features/i18n/locales'
import { alternates, localizedPath } from './routes'

describe('the same page in another language', () => {
  it('swaps the locale and keeps the rest of the path', () => {
    expect(localizedPath('/en/mission', 'pt')).toBe('/pt/mission')
    expect(localizedPath('/pt', 'en')).toBe('/en')
    expect(localizedPath('/pt/', 'en')).toBe('/en')
  })

  it('adds a locale to a path that has none', () => {
    expect(localizedPath('/', 'pt')).toBe('/pt')
    expect(localizedPath('/team', 'en')).toBe('/en/team')
  })
})

describe('the alternates', () => {
  it('make a page its own canonical and name it in every language, plus x-default', () => {
    const page = alternates('pt', 'tools')

    expect(page.canonical).toBe('/pt/tools')
    for (const locale of locales)
      expect(page.languages[localeInfo[locale].hreflang]).toBe(`/${locale}/tools`)
    expect(page.languages['x-default']).toBe('/tools')
    expect(Object.keys(page.languages)).toHaveLength(locales.length + 1)
  })

  it('point x-default of the home page at the root', () => {
    expect(alternates('en').languages['x-default']).toBe('/')
  })
})
