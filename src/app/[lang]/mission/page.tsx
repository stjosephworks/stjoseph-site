import type { Metadata } from 'next'
import { lang } from 'next/root-params'
import { getDictionary } from '@/features/i18n/dictionary'
import type { Locale } from '@/features/i18n/locales'
import { Prose, Section } from '@/features/site/section'

export async function generateMetadata(): Promise<Metadata> {
  const t = getDictionary((await lang()) as Locale)

  return { title: t.mission.title, description: t.mission.description }
}

export default async function MissionPage() {
  const t = getDictionary((await lang()) as Locale)

  return (
    <div className="mx-auto max-w-4xl px-5 py-16 sm:px-8">
      <p className="flex flex-wrap items-baseline gap-x-3 font-serif text-sm italic text-brass">
        {t.common.latin}
        <span className="not-italic text-muted-foreground">
          {t.common.latinGloss} ({t.common.latinSource})
        </span>
      </p>

      <h1 className="mt-6 font-serif text-4xl font-semibold tracking-tight text-navy">
        {t.mission.heading}
      </h1>
      <Prose className="mt-6 text-lg text-ink">{t.mission.standfirst}</Prose>

      <Section heading={t.mission.labor.heading} className="mt-12">
        <Prose className="text-ink/85">{t.mission.labor.body}</Prose>
        <blockquote className="mt-8 max-w-[62ch] border-l-2 border-brass pl-5 font-serif italic leading-relaxed text-muted-foreground">
          {t.mission.labor.quote}
          <footer className="mt-2 text-sm not-italic">{t.mission.labor.quoteSource}</footer>
        </blockquote>
      </Section>

      <Section heading={t.mission.work.heading}>
        <ul className="max-w-[62ch] space-y-4 font-serif leading-relaxed text-ink/85">
          {t.mission.work.items.map((item) => (
            <li key={item} className="relative pl-6">
              <span aria-hidden="true" className="absolute left-0 top-[0.8em] h-px w-3 bg-brass" />
              {item}
            </li>
          ))}
        </ul>
      </Section>

      <Section heading={t.mission.patron.heading}>
        <Prose className="text-ink/85">{t.mission.patron.body}</Prose>
      </Section>

      <Section heading={t.mission.prayer.heading}>
        <div className="max-w-[62ch] border border-rule bg-card p-6 sm:p-8">
          <p className="font-serif italic leading-[1.8] text-ink/85">{t.mission.prayer.body}</p>
          <p className="mt-6 font-serif italic leading-[1.8] text-ink/85">
            {t.mission.prayer.closing}
          </p>
          <p className="mt-6 border-t border-rule pt-4 text-xs text-muted-foreground">
            {t.mission.prayer.attribution}
          </p>
        </div>
      </Section>
    </div>
  )
}
