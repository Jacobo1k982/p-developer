import { cn } from '@/lib/utils'; // Ajusta la ruta según tu estructura

interface GlitchTextProps {
  children: React.ReactNode;
  className?: string;
  intensity?: 'glitch-low' | 'glitch-medium' | 'glitch-high';
}

export function GlitchText({
  children,
  className,
  intensity = 'glitch-medium',
}: GlitchTextProps) {
  // Mapeamos la intensidad a las clases de animación definidas en globals.css
  const getAnimationClass = (intensity: string): string => {
    switch (intensity) {
      case 'glitch-low':
        return 'animate-glitch-low';
      case 'glitch-high':
        return 'animate-glitch-high';
      case 'glitch-medium':
      default:
        return 'animate-glitch';
    }
  };

  const animationClass = getAnimationClass(intensity);

  return (
    <span className={cn('relative inline-block cursor-default select-none', className)}>

      {/* Capa 1: Desplazamiento Verde (Superior Izquierda) */}
      <span
        className={cn(
          'absolute top-0 left-0 w-full text-[#1fdf64] opacity-80 z-0 mix-blend-screen',
          animationClass
        )}
        style={{
          textShadow: '2px 0 rgba(255,0,0,0.7), -2px 0 rgba(0,255,255,0.7)', // Sombra extra para el efecto RGB
        }}
        aria-hidden="true"
      >
        {children}
      </span>

      {/* Capa 2: Desplazamiento Blanco/Ruido (Inferior Derecha) */}
      <span
        className={cn(
          'absolute top-0 left-0 w-full text-gray-200 opacity-70 z-0 mix-blend-overlay',
          animationClass
        )}
        style={{ animationDelay: '0.2s' }} // Ligero retraso para crear caos visual
        aria-hidden="true"
      >
        {children}
      </span>

      {/* Capa 3: Texto Principal (Original y Nítido) */}
      <span className="relative z-10 text-inherit">{children}</span>
    </span>
  );
}