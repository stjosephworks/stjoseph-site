import { cn } from '@/lib/utils'

interface SquareMarkProps {
  className?: string
  armLength?: number
}

export function SquareMark({ className, armLength = 30 }: SquareMarkProps) {
  const corner = armLength + 6
  const graduations = [0.35, 0.55, 0.75]

  return (
    <svg
      viewBox={`0 0 24 ${corner + 6}`}
      className={cn('text-navy', className)}
      role="presentation"
      aria-hidden="true"
    >
      <path d={`M4 0 H10 V${corner} H22 V${corner + 6} H4 Z`} fill="currentColor" />
      {graduations.map((at) => (
        <line
          key={at}
          x1="10"
          y1={corner * at}
          x2="15"
          y2={corner * at}
          stroke="currentColor"
          strokeWidth="1.5"
          opacity="0.35"
        />
      ))}
    </svg>
  )
}

export function Wordmark({ className }: { className?: string }) {
  return (
    <span className={cn('flex items-center gap-2.5', className)}>
      <SquareMark className="h-7 w-auto" armLength={14} />
      <span className="whitespace-nowrap font-serif text-base font-semibold tracking-tight text-navy sm:text-lg">
        St. Joseph Works
      </span>
    </span>
  )
}
