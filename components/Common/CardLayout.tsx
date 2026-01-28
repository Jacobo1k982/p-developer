'use client'

import React from 'react'

interface CardLayoutProps {
    children: React.ReactNode
    className?: string
    hoverEffect?: boolean
}

const CardLayout = ({
    children,
    className = "",
    hoverEffect = true
}: CardLayoutProps) => {
    return (
        <div
            className={`
        rounded-lg border border-gray-200 dark:border-gray-700
        bg-white dark:bg-gray-800
        text-gray-900 dark:text-gray-100
        shadow-sm
        ${hoverEffect ? 'hover:shadow-md hover:border-gray-300 dark:hover:border-gray-600' : ''}
        transition-all duration-200 ease-linear
        ${hoverEffect ? 'hover:scale-[1.01]' : ''}
        ${className}
      `}
        >
            {children}
        </div>
    )
}

export default CardLayout