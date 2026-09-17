import Link from 'next/link'
import { getDictionary } from '@/features/i18n/dictionary'
import type { Locale } from '@/features/i18n/locales'
import { external, path } from '@/lib/routes'
import { site } from '@/lib/site'
import { Wordmark } from './brand'
import { LanguageSwitch } from './language-switch'

export function SiteHeader({ locale }: { locale: Locale }) {
  const t = getDictionary(locale)

  const links = [
    { href: path(locale, 'mission'), label: t.nav.mission },
    { href: path(locale, 'tools'), label: t.nav.tools },
    { href: path(locale, 'team'), label: t.nav.team },
  ]

  return (
    <header className="sticky top-0 z-40 border-b border-rule bg-paper/90 backdrop-blur-sm">
      <div className="mx-auto flex h-14 max-w-6xl items-center gap-4 px-5 sm:px-8">
        <Link href={path(locale)} aria-label={site.name} className="shrink-0">
          <Wordmark />
        </Link>

        <nav className="ml-auto hidden items-center gap-5 text-sm sm:flex" aria-label={t.nav.menu}>
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="text-ink/75 hover:text-navy">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-3 sm:ml-0">
          <LanguageSwitch current={locale} label={t.nav.language} />
          <a
            href={external.organization}
            className="hidden text-sm text-ink/75 hover:text-navy sm:inline"
          >
            {t.nav.github}
          </a>
        </div>
      </div>

      <nav
        className="flex gap-5 overflow-x-auto border-t border-rule px-5 py-2 text-sm sm:hidden"
        aria-label={t.nav.menu}
      >
        {links.map((link) => (
          <Link key={link.href} href={link.href} className="whitespace-nowrap text-ink/75">
            {link.label}
          </Link>
        ))}
        <a href={external.organization} className="whitespace-nowrap text-ink/75">
          {t.nav.github}
        </a>
      </nav>
    </header>
  )
}
