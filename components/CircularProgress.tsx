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
    animateFromZero?: boolean
}

const CircularProgress = ({
    percent,
    size = 90,
    strokeWidth = 10,
    color = 'currentColor',               // hereda de tailwind (ej: text-[#58a6ff])
    trackColor = 'stroke-[#30363d]',      // ← dark fijo: gris oscuro GitHub
    textColor = 'text-[#c9d1d9]',         // ← dark fijo: texto claro principal
    className = '',
    animateFromZero = false,
}: CircularProgressProps) => {
    const radius = (size - strokeWidth) / 2
    const circumference = 2 * Math.PI * radius

    const offset = circumference - (percent / 100) * circumference
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

                {/* Círculo de progreso */}
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

            {/* Texto del porcentaje */}
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