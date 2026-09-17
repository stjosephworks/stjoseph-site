import type { Metadata } from 'next'
import { lang } from 'next/root-params'
import { getDictionary } from '@/features/i18n/dictionary'
import type { Locale } from '@/features/i18n/locales'
import { Prose } from '@/features/site/section'
import { ToolCard } from '@/features/tools/tool-card'
import { tools } from '@/features/tools/tools'

export async function generateMetadata(): Promise<Metadata> {
  const t = getDictionary((await lang()) as Locale)

  return { title: t.tools.title, description: t.tools.description }
}

export default async function ToolsPage() {
  const locale = (await lang()) as Locale
  const t = getDictionary(locale)

  return (
    <div className="mx-auto max-w-5xl px-5 py-16 sm:px-8">
      <h1 className="font-serif text-4xl font-semibold tracking-tight text-navy">
        {t.tools.heading}
      </h1>
      <Prose className="mt-6 text-lg text-ink/85">{t.tools.standfirst}</Prose>

      <ul className="mt-12 grid gap-6 lg:grid-cols-2">
        {tools.map((tool) => (
          <ToolCard key={tool.slug} tool={tool} locale={locale} />
        ))}
      </ul>
    </div>
  )
}
