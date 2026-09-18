import { cn } from '@/lib/utils'

export function Wordmark({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        'whitespace-nowrap font-serif text-base font-semibold tracking-tight text-navy sm:text-lg',
        className,
      )}
    >
      St. Joseph Works
    </span>
  )
}
