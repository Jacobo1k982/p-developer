// components/ui/glitch-text.tsx
import { cn } from '../../lib/utils'

interface GlitchTextProps {
  children: React.ReactNode
  className?: string
  intensity?: 'glitch-low' | 'glitch-medium' | 'glitch-high'
}

export function GlitchText({
  children,
  className,
  intensity = 'glitch-medium',
}: GlitchTextProps) {
  return (
    <span className={cn('relative inline-block', className)}>
      <span
        className={cn(
          'absolute top-0 left-0 w-full text-cyan-400 opacity-70 -translate-x-1 translate-y-1',
          intensity
        )}
      >
        {children}
      </span>
      <span>{children}</span>
    </span>
  )
}
