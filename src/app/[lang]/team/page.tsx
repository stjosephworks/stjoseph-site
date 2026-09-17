import type { Metadata } from 'next'
import { lang } from 'next/root-params'
import { getDictionary } from '@/features/i18n/dictionary'
import type { Locale } from '@/features/i18n/locales'
import { Prose } from '@/features/site/section'
import { MemberCard } from '@/features/team/member-card'
import { team } from '@/features/team/team'

export async function generateMetadata(): Promise<Metadata> {
  const t = getDictionary((await lang()) as Locale)

  return { title: t.team.title, description: t.team.description }
}

export default async function TeamPage() {
  const locale = (await lang()) as Locale
  const t = getDictionary(locale)

  return (
    <div className="mx-auto max-w-5xl px-5 py-16 sm:px-8">
      <h1 className="font-serif text-4xl font-semibold tracking-tight text-navy">
        {t.team.heading}
      </h1>
      <Prose className="mt-6 text-lg text-ink/85">{t.team.standfirst}</Prose>

      <ul className="mt-12 grid gap-6 lg:grid-cols-2">
        {team.map((member) => (
          <MemberCard key={member.slug} member={member} locale={locale} />
        ))}
      </ul>
    </div>
  )
}
