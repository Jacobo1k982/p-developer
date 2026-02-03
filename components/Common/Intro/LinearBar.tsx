'use client'

import React from 'react'

interface LinearBarProps {
    title: string
    percent: number
    className?: string
}

const LinearBar = ({ title, percent, className = '' }: LinearBarProps) => {
    return (
        <div className={`flex flex-col gap-2 ${className}`}>

            {/* Cabecera: Título y Porcentaje */}
            <div className="flex justify-between items-center text-sm">
                <span className="font-medium text-gray-300">
                    {title}
                </span>
                <span className="font-mono text-xs text-gray-500">
                    {percent}%
                </span>
            </div>

            {/* Contenedor de la Barra (Track) */}
            <div className="h-2.5 w-full bg-gray-800 rounded-full overflow-hidden relative">

                {/* Barra de Progreso (Fill) */}
                <div
                    className={`
                        absolute top-0 left-0 h-full 
                        bg-gradient-to-r from-blue-500 to-indigo-500 
                        rounded-full 
                        transition-all duration-1000 ease-out
                        shadow-[0_0_10px_rgba(59,130,246,0.5)] /* Sutil resplandor azul */
                    `}
                    style={{ width: `${percent}%` }}
                />

            </div>
        </div>
    )
}

export default LinearBar