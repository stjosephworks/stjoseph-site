import type { Metadata } from 'next'
import Link from 'next/link'
import { lang } from 'next/root-params'
import { getDictionary } from '@/features/i18n/dictionary'
import type { Locale } from '@/features/i18n/locales'
import { SquareMark } from '@/features/site/brand'
import { Prose, Section } from '@/features/site/section'
import { ToolCard } from '@/features/tools/tool-card'
import { tools } from '@/features/tools/tools'
import { path } from '@/lib/routes'

export async function generateMetadata(): Promise<Metadata> {
  const t = getDictionary((await lang()) as Locale)

  return {
    title: t.home.title,
    description: t.home.description,
  }
}

export default async function HomePage() {
  const locale = (await lang()) as Locale
  const t = getDictionary(locale)

  return (
    <div className="mx-auto max-w-6xl px-5 sm:px-8">
      <div className="relative md:pl-16">
        <span
          aria-hidden="true"
          className="bench-rule absolute left-[0.875rem] top-[6.25rem] hidden w-px bg-rule md:block"
          style={{ bottom: 0 }}
        />
        <SquareMark
          className="bench-rule-draw absolute left-0 top-2 hidden w-12 md:block"
          armLength={34}
        />

        <section className="py-16 sm:py-24">
          <p className="flex flex-wrap items-baseline gap-x-3 font-serif text-sm italic text-brass">
            {t.common.latin}
            <span className="not-italic text-muted-foreground">
              {t.common.latinGloss} ({t.common.latinSource})
            </span>
          </p>

          <h1 className="mt-6 max-w-[22ch] font-serif text-[2.4rem] font-semibold leading-[1.08] tracking-[-0.03em] text-navy sm:text-[3.4rem]">
            {t.home.headline}
            <br />
            <span className="text-ink">{t.home.headlineSecond}</span>
          </h1>

          <Prose className="mt-8 text-lg text-ink/85">{t.home.standfirst}</Prose>

          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3">
            <Link
              href={path(locale, 'tools')}
              className="border border-navy bg-navy px-4 py-2 text-sm text-primary-foreground hover:border-brass hover:bg-brass"
            >
              {t.home.seeTools}
            </Link>
            <Link
              href={path(locale, 'mission')}
              className="text-sm text-navy underline-offset-4 hover:underline"
            >
              {t.home.readMission}
            </Link>
          </div>
        </section>

        <Section heading={t.home.mission.heading}>
          <Prose className="text-lg text-ink">{t.home.mission.body}</Prose>
          <blockquote className="mt-8 max-w-[62ch] border-l-2 border-brass pl-5 font-serif italic leading-relaxed text-muted-foreground">
            {t.home.mission.quote}
            <footer className="mt-2 text-sm not-italic">{t.home.mission.quoteSource}</footer>
          </blockquote>
          <Link
            href={path(locale, 'mission')}
            className="mt-8 inline-block border-b border-brass pb-0.5 text-navy"
          >
            {t.home.mission.link}
          </Link>
        </Section>

        <Section heading={t.home.work.heading}>
          <dl className="grid gap-10 md:grid-cols-3">
            {[t.home.work.items.build, t.home.work.items.encourage, t.home.work.items.serve].map(
              (item) => (
                <div key={item.term}>
                  <dt className="font-serif text-lg font-semibold">{item.term}</dt>
                  <dd className="mt-2 font-serif leading-relaxed text-ink/85">{item.detail}</dd>
                </div>
              ),
            )}
          </dl>
        </Section>

        <Section heading={t.home.tools.heading}>
          <Prose className="text-ink/85">{t.home.tools.body}</Prose>
          <ul className="mt-8 grid gap-6 lg:grid-cols-2">
            {tools.map((tool) => (
              <ToolCard key={tool.slug} tool={tool} locale={locale} />
            ))}
          </ul>
          <Link
            href={path(locale, 'tools')}
            className="mt-8 inline-block border-b border-brass pb-0.5 text-navy"
          >
            {t.home.tools.link}
          </Link>
        </Section>

        <Section heading={t.home.patron.heading}>
          <Prose className="text-ink/85">{t.home.patron.body}</Prose>
        </Section>
      </div>
    </div>
  )
}
