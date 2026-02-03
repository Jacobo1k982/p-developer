'use client'

import React from 'react'

interface BadgeProps {
    title: string
    variant?: 'default' | 'secondary' | 'outline' | 'success' | 'warning' | 'danger'
    className?: string
}

const Badge = ({
    title,
    variant = 'default',
    className = ''
}: BadgeProps) => {

    const variantStyles = {
        default: 'bg-gray-800/80 border border-gray-700 text-gray-300',
        secondary: 'bg-gray-900/50 border border-gray-800 text-gray-400',
        outline: 'bg-transparent border border-gray-600 text-gray-400',
        success: 'bg-emerald-500/10 border border-emerald-500/20 text-emerald-400',
        warning: 'bg-amber-500/10 border border-amber-500/20 text-amber-400',
        danger: 'bg-rose-500/10 border border-rose-500/20 text-rose-400',
    }

    return (
        <span
            className={`
                inline-flex items-center justify-center
                px-3 py-1.5
                text-[11px] md:text-xs font-semibold uppercase tracking-wider
                rounded-full
                shadow-sm
                transition-all duration-200
                hover:brightness-110 active:scale-95
                ${variantStyles[variant]}
                ${className}
            `}
        >
            {title}
        </span>
    )
}

export default Badge