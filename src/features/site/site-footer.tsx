import Link from 'next/link'
import { getDictionary } from '@/features/i18n/dictionary'
import type { Locale } from '@/features/i18n/locales'
import { tools } from '@/features/tools/tools'
import { external, path } from '@/lib/routes'
import { SquareMark } from './brand'

export function SiteFooter({ locale }: { locale: Locale }) {
  const t = getDictionary(locale)

  return (
    <footer className="mt-24 border-t border-rule">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-12 sm:px-8 md:grid-cols-[auto_1fr_1fr_1fr]">
        <SquareMark className="h-16 w-6" armLength={38} />

        <div>
          <h2 className="font-serif text-sm font-semibold">{t.footer.sections.organization}</h2>
          <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
            <li>
              <Link href={path(locale, 'mission')} className="hover:text-navy">
                {t.nav.mission}
              </Link>
            </li>
            <li>
              <Link href={path(locale, 'tools')} className="hover:text-navy">
                {t.nav.tools}
              </Link>
            </li>
            <li>
              <Link href={path(locale, 'team')} className="hover:text-navy">
                {t.nav.team}
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="font-serif text-sm font-semibold">{t.footer.sections.tools}</h2>
          <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
            {tools.map((tool) => (
              <li key={tool.slug}>
                <a href={tool.site} className="hover:text-navy">
                  {t.tools.items[tool.slug].name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-serif text-sm font-semibold">{t.footer.sections.elsewhere}</h2>
          <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
            <li>
              <a href={external.organization} className="hover:text-navy">
                {t.footer.organization}
              </a>
            </li>
            <li>
              <a href={external.profile} className="hover:text-navy">
                {t.footer.profile}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-rule">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-x-6 gap-y-2 px-5 py-4 text-xs text-muted-foreground sm:px-8">
          <span>{t.footer.license}</span>
          <span className="ml-auto font-serif italic">{t.footer.glory}</span>
          <span className="font-serif italic">{t.footer.praise}</span>
        </div>
      </div>
    </footer>
  )
}
