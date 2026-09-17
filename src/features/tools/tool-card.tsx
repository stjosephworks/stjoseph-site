import { ArrowUpRight } from 'lucide-react'
import { getDictionary } from '@/features/i18n/dictionary'
import type { Locale } from '@/features/i18n/locales'
import { cn } from '@/lib/utils'
import type { Tool } from './tools'

export function ToolCard({ tool, locale }: { tool: Tool; locale: Locale }) {
  const t = getDictionary(locale)
  const copy = t.tools.items[tool.slug]

  return (
    <li className="flex flex-col border border-rule bg-card">
      <a href={tool.site} className="group flex-1 p-6 sm:p-7">
        <span className="flex items-start justify-between gap-4">
          <span className="font-serif text-2xl font-semibold tracking-tight text-navy group-hover:underline group-hover:decoration-brass group-hover:underline-offset-4">
            {copy.name}
          </span>
          <span
            className={cn(
              'h-fit shrink-0 border px-2 py-0.5 text-xs',
              tool.state === 'available' ? 'border-navy text-navy' : 'border-brass text-brass',
            )}
          >
            {t.tools.states[tool.state]}
          </span>
        </span>

        <span className="mt-3 block max-w-[46ch] font-serif text-[1.0625rem] leading-relaxed text-ink">
          {copy.tagline}
        </span>

        <span className="mt-4 block max-w-[62ch] text-sm leading-relaxed text-ink/80">
          {copy.body}
        </span>

        <span className="mt-6 flex items-center gap-1.5 text-sm text-navy">
          {t.tools.visit}
          <ArrowUpRight
            className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            aria-hidden="true"
          />
        </span>
      </a>

      <div className="flex flex-wrap gap-x-5 gap-y-2 border-t border-rule px-6 py-3 text-xs text-muted-foreground sm:px-7">
        {tool.links.map((link) => (
          <a key={link.key} href={link.href} className="hover:text-navy">
            {t.tools.links[link.key]}
          </a>
        ))}
      </div>
    </li>
  )
}
