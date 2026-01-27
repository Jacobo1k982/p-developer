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
        default: 'bg-gray-100 text-gray-900 dark:bg-gray-700 dark:text-gray-100',
        secondary: 'bg-gray-200 text-gray-700 dark:bg-gray-600 dark:text-gray-200',
        outline: 'bg-transparent border border-gray-300 text-gray-700 dark:border-gray-600 dark:text-gray-300',
        success: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400',
        warning: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400',
        danger: 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400',
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