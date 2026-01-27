'use client'

import React from 'react'

interface CircularProgressProps {
    percent: number
    size?: number
    strokeWidth?: number
    className?: string
}

const CircularProgress = ({
    percent,
    size = 75,
    strokeWidth = 6,
    className = ''
}: CircularProgressProps) => {
    const radius = (size - strokeWidth) / 2
    const circumference = 2 * Math.PI * radius
    const offset = circumference - (percent / 100) * circumference

    return (
        <div
            className={`relative flex items-center justify-center ${className}`}
            style={{ width: size, height: size }}
        >
            <svg width={size} height={size} className="transform -rotate-90">
                {/* Círculo de fondo */}
                <circle
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    fill="none"
                    className="stroke-gray-200 dark:stroke-gray-700"
                    strokeWidth={strokeWidth}
                />

                {/* Círculo de progreso */}
                <circle
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    fill="none"
                    strokeDasharray={circumference}
                    strokeDashoffset={offset}
                    className="stroke-gray-600 dark:stroke-gray-400 transition-all duration-500 ease-out"
                    strokeWidth={strokeWidth}
                    strokeLinecap="round"
                />
            </svg>

            {/* Porcentaje en el centro */}
            <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                    {percent}%
                </span>
            </div>
        </div>
    )
}

export default CircularProgress