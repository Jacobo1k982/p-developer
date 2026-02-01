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
        default: 'bg-[#21262d] text-[#c9d1d9] border border-[#30363d]',
        secondary: 'bg-[#30363d] text-[#d1d5db] border border-[#444c56]',
        outline: 'bg-transparent border border-[#444c56] text-[#d1d5db]',
        success: 'bg-[#1a2e22] text-[#86efac] border border-[#2f855a]/60',
        warning: 'bg-[#2d2a1f] text-[#fde047] border border-[#b45309]/60',
        danger: 'bg-[#2d1a1f] text-[#f87171] border border-[#991b1b]/60',
    }

    return (
        <span
            className={`
        inline-flex items-center
        px-3 py-1
        text-xs font-medium
        rounded-full
        transition-colors duration-200
        ${variantStyles[variant]}
        ${className}
      `}
        >
            {title}
        </span>
    )
}

export default Badge