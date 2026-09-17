import { describe, expect, it } from 'vitest'
import { getDictionary } from '@/features/i18n/dictionary'
import { locales } from '@/features/i18n/locales'
import { memberSlugs, team } from './team'

describe('the team', () => {
  it('lists every slug exactly once', () => {
    expect(team.map((member) => member.slug).sort()).toEqual([...memberSlugs].sort())
  })

  it('points every photo and link at an absolute address', () => {
    for (const member of team) {
      expect(member.photo, member.slug).toMatch(/^https:\/\//)
      expect(member.github, member.slug).toMatch(/^https:\/\//)
      expect(member.company.href, member.slug).toMatch(/^https:\/\//)
    }
  })

  it('carries a role, a description and a devotion for every member in every language', () => {
    for (const locale of locales) {
      const copy = getDictionary(locale).team.items

      for (const member of team) {
        expect(copy[member.slug].role, `${locale}.${member.slug}`).not.toBe('')
        expect(copy[member.slug].bio, `${locale}.${member.slug}`).not.toBe('')
        expect(copy[member.slug].patron, `${locale}.${member.slug}`).not.toBe('')
      }
    }
  })
})
