'use client'

import React from 'react'
import styles from './LinearBar.module.css'

interface LinearBarProps {
    title: string
    percent: number
    bgColor?: string
    className?: string
}

const LinearBar = ({ title, percent, className = '' }: LinearBarProps) => {
    return (
        <div className={`flex flex-col gap-1 ${className}`}>
            {/* Header con título y porcentaje */}
            <div className="flex justify-between items-center">
                <span className="text-sm text-[#c9d1d9] font-medium">
                    {title}
                </span>
                <span className="text-xs text-[#8b949e]">
                    {percent}%
                </span>
            </div>

            {/* Barra de progreso – siempre dark */}
            <div className="
        h-2 w-full 
        bg-[#21262d] 
        rounded-full 
        overflow-hidden 
        relative
      ">
                <div
                    className={`
            absolute inset-0 
            bg-[#58a6ff] 
            rounded-full 
            transition-all duration-1000 ease-out
            ${percent > 0 ? '' : 'animate-shimmer'}
          `}
                    style={{ width: percent > 0 ? `${percent}%` : '100%' }}
                />
            </div>
        </div>
    )
}

export default LinearBar