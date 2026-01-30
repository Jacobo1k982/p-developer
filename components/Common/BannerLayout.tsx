// components/Common/BannerLayout.tsx

import Image, { StaticImageData } from 'next/image'
import { ReactNode } from 'react'

// Import estático de la imagen por defecto
import defaultBg from '@/public/images/background.png'

interface BannerLayoutProps {
    children: ReactNode
    backgroundImage?: StaticImageData   // Ahora es tipo StaticImageData
    className?: string
}

const BannerLayout = ({
    children,
    backgroundImage = defaultBg,        // Fallback usando import estático
    className = '',
}: BannerLayoutProps) => {
    return (
        <section
            className={`
        relative w-full min-h-screen md:min-h-[90vh] lg:min-h-screen
        flex items-center justify-center overflow-hidden
        bg-[#0d1117] text-white
        ${className}
      `}
        >
            {/* Fondo: imagen + overlay sutil */}
            <div className="absolute inset-0 z-0">
                {backgroundImage ? (
                    <div className="relative w-full h-full">
                        <Image
                            src={backgroundImage}
                            alt="Background abstract tech"
                            fill
                            priority
                            quality={75}
                            sizes="100vw"
                            className="object-cover object-center brightness-[0.35] contrast-[0.9] saturate-[0.7]"
                            placeholder="blur"   // Ahora sí es válido
                        />
                    </div>
                ) : (
                    // Fallback gradiente si no hay imagen (en la práctica no se usará)
                    <div className="absolute inset-0 bg-gradient-to-b from-[#0d1117] via-[#0a192f] to-[#0d1117]" />
                )}
            </div>

            {/* Overlay oscuro */}
            <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#0d1117]/90 via-[#0d1117]/60 to-transparent pointer-events-none" />

            {/* Contenido principal */}
            <div className="relative z-20 w-full max-w-7xl px-6 md:px-10 lg:px-12">
                {children}
            </div>
        </section>
    )
}

export default BannerLayout
