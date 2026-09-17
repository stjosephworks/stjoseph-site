import { describe, expect, it } from 'vitest'
import { getDictionary } from '@/features/i18n/dictionary'
import { locales } from '@/features/i18n/locales'
import { toolSlugs, tools } from './tools'

describe('the tools', () => {
  it('lists every slug exactly once', () => {
    expect(tools.map((tool) => tool.slug).sort()).toEqual([...toolSlugs].sort())
  })

  it('sends every card to an absolute address', () => {
    for (const tool of tools) {
      expect(tool.site, tool.slug).toMatch(/^https:\/\//)
      for (const link of tool.links)
        expect(link.href, `${tool.slug}.${link.key}`).toMatch(/^https:\/\//)
    }
  })

  it('carries a name and a description for every tool in every language', () => {
    for (const locale of locales) {
      const copy = getDictionary(locale).tools.items

      for (const tool of tools) {
        expect(copy[tool.slug].name, `${locale}.${tool.slug}`).not.toBe('')
        expect(copy[tool.slug].tagline, `${locale}.${tool.slug}`).not.toBe('')
        expect(copy[tool.slug].body, `${locale}.${tool.slug}`).not.toBe('')
      }
    }
  })

  it('names every link a card shows', () => {
    for (const locale of locales) {
      const labels = getDictionary(locale).tools.links

      for (const tool of tools) {
        for (const link of tool.links)
          expect(labels[link.key], `${locale}.${link.key}`).toBeTruthy()
      }
    }
  })
})
