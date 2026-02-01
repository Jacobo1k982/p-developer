'use client'

import React from 'react'

interface CardLayoutProps {
    children: React.ReactNode
    className?: string
    hoverEffect?: boolean
    variant?: 'default' | 'education' | 'experience'
}

const CardLayout = ({
    children,
    className = '',
    hoverEffect = true,
    variant = 'default',
}: CardLayoutProps) => {
    const variantStyles = {
        default: 'border-[#30363d] hover:border-[#444c56]',
        education: 'border-[#30363d] hover:border-[#58a6ff]/50',
        experience: 'border-[#30363d] hover:border-[#3fb950]/50',
    }

    const variantHoverShadow = {
        default: 'hover:shadow-[0_0_15px_rgba(68,76,86,0.3)]',
        education: 'hover:shadow-[0_0_20px_rgba(88,166,255,0.15)]',
        experience: 'hover:shadow-[0_0_20px_rgba(63,185,80,0.15)]',
    }

    return (
        <div
            className={`
        group relative overflow-hidden rounded-xl
        bg-[#161b22] border ${variantStyles[variant]}
        shadow-none ${hoverEffect ? variantHoverShadow[variant] : ''}
        transition-all duration-300 ease-out
        ${hoverEffect ? 'hover:scale-[1.02] hover:-translate-y-0.5' : ''}
        focus-visible:ring-2 focus-visible:ring-[#58a6ff]/40 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0d1117]
        ${className}
      `}
        >
            {/* Gradiente hover sutil (opcional - puedes quitarlo si prefieres más limpio) */}
            {hoverEffect && (
                <div
                    className={`
            absolute inset-0 bg-gradient-to-t from-transparent via-transparent
            to-[#58a6ff]/5
            opacity-0 group-hover:opacity-10 transition-opacity duration-400 pointer-events-none
          `}
                />
            )}

            <div className="relative z-10">{children}</div>
        </div>
    )
}

export default CardLayout