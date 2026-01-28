'use client'

import React from 'react'

interface CircularProgressProps {
    percent: number
    size?: number
    strokeWidth?: number
    color?: string          // color principal del progreso
    trackColor?: string     // color del círculo de fondo
    textColor?: string      // color del texto %
    className?: string
    animateFromZero?: boolean // opcional: anima desde 0 al montar (si ya lo haces en el padre, pon false)
}

const CircularProgress = ({
    percent,
    size = 90,
    strokeWidth = 10,
    color = 'currentColor',               // por defecto hereda de tailwind text-blue-600 / etc.
    trackColor = 'stroke-gray-200 dark:stroke-gray-700/60',
    textColor = 'text-gray-900 dark:text-gray-100',
    className = '',
    animateFromZero = false,
}: CircularProgressProps) => {
    const radius = (size - strokeWidth) / 2
    const circumference = 2 * Math.PI * radius

    // Offset final
    const offset = circumference - (percent / 100) * circumference

    // Para animación desde 0 (opcional)
    const initialOffset = animateFromZero ? circumference : offset

    return (
        <div
            className={`
        relative flex items-center justify-center transition-transform duration-300
        hover:scale-[1.04] group
        ${className}
      `}
            style={{ width: size, height: size }}
        >
            <svg
                width={size}
                height={size}
                viewBox={`0 0 ${size} ${size}`}
                className="absolute inset-0 transform -rotate-90"
            >
                {/* Círculo de fondo (track) */}
                <circle
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    fill="none"
                    className={`transition-colors duration-500 ${trackColor}`}
                    strokeWidth={strokeWidth}
                />

                {/* Círculo de progreso con gradiente sutil y animación */}
                <circle
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    fill="none"
                    stroke={color}
                    strokeWidth={strokeWidth}
                    strokeDasharray={circumference}
                    strokeDashoffset={initialOffset}
                    strokeLinecap="round"
                    className={`
            transition-all duration-1000 ease-out
            group-hover:stroke-opacity-90
          `}
                    style={{
                        strokeDashoffset: offset,
                        transitionProperty: 'stroke-dashoffset, stroke',
                    }}
                />
            </svg>

            {/* Texto del porcentaje - más elegante */}
            <div
                className={`
          absolute inset-0 flex items-center justify-center 
          pointer-events-none select-none
        `}
            >
                <span
                    className={`
            text-2xl font-bold tracking-tight
            drop-shadow-sm
            ${textColor}
            transition-all duration-500
            group-hover:scale-110
          `}
                >
                    {percent}
                    <span className="text-lg font-semibold opacity-80">%</span>
                </span>
            </div>
        </div>
    )
}

export default CircularProgress