import Image, { StaticImageData } from 'next/image'
import { ReactNode } from 'react'

// Asegúrate de que esta ruta sea correcta o cambia la imagen
import defaultBg from '@/public/images/background.png'

interface BannerLayoutProps {
    children: ReactNode
    backgroundImage?: StaticImageData
    className?: string
}

const BannerLayout = ({
    children,
    backgroundImage = defaultBg,
    className = '',
}: BannerLayoutProps) => {
    return (
        <section
            className={`
                relative min-h-screen md:min-h-[90vh] lg:min-h-screen
                flex items-center justify-center overflow-hidden
                bg-gray-950 text-white
                ${className}
            `}
        >
            {/* 1. Fondo de Imagen (Layer 0) */}
            <div className="absolute inset-0 z-0 opacity-20">
                {backgroundImage ? (
                    <div className="relative w-full h-full">
                        <Image
                            src={backgroundImage}
                            alt="Background abstract tech"
                            fill
                            priority
                            quality={85}
                            sizes="100vw"
                            className="object-cover object-center"
                            placeholder="blur"
                        />
                    </div>
                ) : (
                    // Fallback gradiente elegante si no hay imagen
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-950 to-black" />
                )}
            </div>

            {/* 2. Overlay Oscuro y Viñeta (Layer 1) */}
            {/* Este gradiente oscurece la imagen para que el texto sea legible */}
            <div className="
                absolute inset-0 z-10 
                bg-gradient-to-b 
                from-gray-950/40 via-gray-950/20 to-gray-950 
                pointer-events-none
            " />

            {/* 3. Gradiente Radial (Layer 2) - Foco en el centro */}
            <div className="
                absolute inset-0 z-10 
                bg-[radial-gradient(circle_at_center,transparent_0%,rgba(2,6,23,0.8)_100%)]
                pointer-events-none
            " />

            {/* 4. Contenido Principal (Layer 3) */}
            <div className="
                relative z-20 
                w-full max-w-7xl 
                px-4 sm:px-6 lg:px-8 
                flex items-center justify-center
            ">
                {children}
            </div>
        </section>
    )
}

export default BannerLayout