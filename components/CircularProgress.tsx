'use client'

import React from 'react'

interface CircularProgressProps {
    percent: number
    size?: number
    strokeWidth?: number
    color?: string           // color del círculo de progreso (usa currentColor)
    trackColor?: string      // color del círculo de fondo (Track)
    textColor?: string        // color del texto del porcentaje
    className?: string
    animateFromZero?: boolean
}

const CircularProgress = ({
    percent,
    size = 100,
    strokeWidth = 10,
    color = 'currentColor',
    trackColor = 'stroke-gray-800/50', // ← Gris translúcido elegante
    textColor = 'text-white',           // ← Blanco puro para alto contraste
    className = '',
    animateFromZero = false,
}: CircularProgressProps) => {

    const radius = (size - strokeWidth) / 2
    const circumference = 2 * Math.PI * radius

    // Cálculo del offset
    const offset = circumference - (percent / 100) * circumference

    // Lógica de animación inicial
    const initialOffset = animateFromZero ? circumference : offset

    return (
        <div
            className={`
                relative inline-flex items-center justify-center
                transition-transform duration-300 ease-out
                hover:scale-105 cursor-default group
                text-blue-500 // ← Color por defecto (azul) que se aplica a 'currentColor'
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
                {/* Círculo de Fondo (Track) */}
                <circle
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    fill="none"
                    className={`
                        transition-colors duration-700
                        ${trackColor}
                    `}
                    strokeWidth={strokeWidth}
                    strokeLinecap="round" // Bordes redondeados para elegancia
                />

                {/* Círculo de Progreso */}
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
                        group-hover:opacity-90 drop-shadow-[0_0_8px_rgba(59,130,246,0.5)] // ← Sutil brillo en hover
                    `}
                    style={{
                        strokeDashoffset: offset,
                    }}
                />
            </svg>

            {/* Texto del Porcentaje */}
            <div
                className="
                    absolute inset-0 flex items-center justify-center 
                    pointer-events-none select-none
                "
            >
                <span
                    className={`
                        text-xl md:text-2xl font-bold tracking-tight
                        drop-shadow-sm
                        ${textColor}
                        transition-transform duration-500
                        group-hover:scale-110
                    `}
                >
                    {percent}
                    <span className="text-sm md:text-base font-medium opacity-80 ml-[-2px]">%</span>
                </span>
            </div>
        </div>
    )
}

export default CircularProgress