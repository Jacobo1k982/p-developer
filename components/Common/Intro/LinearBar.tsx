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
                <span className="text-sm text-gray-700 dark:text-gray-300 font-medium">
                    {title}
                </span>
                <span className="text-xs text-gray-500 dark:text-gray-400">
                    {percent}%
                </span>
            </div>

            {/* Barra de progreso */}
            <div className="
  h-2 w-full 
  bg-gray-100 dark:bg-gray-800 
  rounded-full 
  overflow-hidden 
  relative
">
                <div
                    className={`
      absolute inset-0 
      bg-blue-600 dark:bg-blue-500 
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