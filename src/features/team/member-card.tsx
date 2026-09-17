import Image from 'next/image'
import { getDictionary } from '@/features/i18n/dictionary'
import type { Locale } from '@/features/i18n/locales'
import type { Member } from './team'

export function MemberCard({ member, locale }: { member: Member; locale: Locale }) {
  const t = getDictionary(locale)
  const copy = t.team.items[member.slug]

  return (
    <li className="flex flex-col border border-rule bg-card">
      <div className="flex-1 p-6 sm:p-7">
        <div className="flex items-start gap-5">
          <Image
            src={member.photo}
            alt={member.name}
            width={160}
            height={160}
            className="size-20 shrink-0 border border-rule object-cover"
          />
          <div className="min-w-0">
            <h3 className="font-serif text-2xl font-semibold tracking-tight text-navy">
              {member.name}
            </h3>
            <p className="mt-1.5 flex flex-wrap items-center gap-x-2 text-sm text-muted-foreground">
              {copy.role}
              <span aria-hidden="true" className="text-rule">
                ·
              </span>
              <a href={member.company.href} className="text-navy hover:underline">
                {member.company.name}
              </a>
            </p>
          </div>
        </div>

        <p className="mt-5 max-w-[62ch] font-serif leading-relaxed text-ink/85">{copy.bio}</p>

        <dl className="mt-6 border-t border-rule pt-4">
          <dt className="text-xs uppercase tracking-wide text-muted-foreground">
            {t.team.labels.devotion}
          </dt>
          <dd className="mt-1 font-serif text-ink">{copy.patron}</dd>
        </dl>
      </div>

      <div className="flex flex-wrap gap-x-5 gap-y-2 border-t border-rule px-6 py-3 text-xs text-muted-foreground sm:px-7">
        <a href={member.github} className="hover:text-navy">
          {t.team.links.github}
        </a>
      </div>
    </li>
  )
}
