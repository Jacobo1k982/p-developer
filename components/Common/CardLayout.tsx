'use client'

import React from 'react'

interface CardLayoutProps {
    children: React.ReactNode
    className?: string
    hoverEffect?: boolean
    variant?: 'default' | 'accent' | 'success' | 'glass'
}

const CardLayout = ({
    children,
    className = '',
    hoverEffect = true,
    variant = 'default',
}: CardLayoutProps) => {

    // Estilos base del contenedor
    const baseStyles = `
        group relative overflow-hidden rounded-xl
        transition-all duration-300 ease-out
        h-full
    `

    // Lógica de Variantes (Bordes y Sombras)
    const variantStyles = {
        default: `
            bg-gray-900 border border-gray-800
            hover:border-gray-700
            ${hoverEffect ? 'hover:shadow-xl hover:shadow-black/20' : ''}
        `,
        accent: `
            bg-gray-900 border border-gray-800
            hover:border-blue-500/50
            ${hoverEffect ? 'hover:shadow-xl hover:shadow-blue-900/15' : ''}
        `,
        success: `
            bg-gray-900 border border-gray-800
            hover:border-emerald-500/50
            ${hoverEffect ? 'hover:shadow-xl hover:shadow-emerald-900/15' : ''}
        `,
        glass: `
            bg-gray-900/60 backdrop-blur-md border border-gray-800/50
            hover:border-gray-700
            ${hoverEffect ? 'hover:shadow-xl hover:shadow-black/20' : ''}
        `
    }

    return (
        <div
            className={`
                ${baseStyles}
                ${variantStyles[variant]}
                ${hoverEffect ? 'hover:-translate-y-1' : ''}
                ${className}
            `}
        >
            {/* Overlay de brillo superior (Efecto de luz) */}
            {hoverEffect && (
                <div className="
                    absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent 
                    opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none
                " />
            )}

            {/* Contenido Relativo */}
            <div className="relative z-10 h-full flex flex-col">
                {children}
            </div>
        </div>
    )
}

export default CardLayout