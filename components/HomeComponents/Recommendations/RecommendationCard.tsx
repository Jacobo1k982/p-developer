'use client'

import React, { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

interface RecommendationData {
    name: string
    designation?: string
    view: string
    image?: string
    facebookURL?: string
}

interface RecommendationCardProps {
    data: RecommendationData
}

const RecommendationCard = ({ data }: RecommendationCardProps) => {
    const [isExpanded, setIsExpanded] = useState(false)

    // Configuración de truncamiento de texto
    const MAX_LENGTH = 140 // Aumentado ligeramente para mejor lectura
    const needsExpansion = data.view.length > MAX_LENGTH
    const displayText = needsExpansion && !isExpanded
        ? data.view.substring(0, MAX_LENGTH).trim() + '...'
        : data.view

    return (
        <div className="relative group h-full flex justify-center pt-10">

            {/* Contenedor del Avatar Flotante */}
            {/* Se posiciona absolutamente sobre el borde superior de la tarjeta */}
            <div className="absolute -top-2.5 z-20">
                <div className={`
                    w-20 h-20 
                    rounded-full 
                    overflow-hidden 
                    border-4 border-gray-900 /* Coincide con el fondo para efecto de corte */
                    shadow-lg shadow-black/50
                    transition-transform duration-300
                    group-hover:scale-110 group-hover:border-blue-500/30
                `}>
                    {data.image ? (
                        <img
                            src={data.image}
                            alt={data.name}
                            className="w-full h-full object-cover"
                        />
                    ) : (
                        // Placeholder si no hay imagen
                        <div className="w-full h-full bg-gray-800 flex items-center justify-center">
                            <span className="text-gray-500 font-bold text-xl">
                                {data.name.charAt(0)}
                            </span>
                        </div>
                    )}
                </div>
            </div>

            {/* Tarjeta Principal */}
            <div className={`
                relative w-full 
                bg-gray-900 
                border border-gray-800 
                hover:border-blue-500/50
                rounded-xl
                shadow-lg hover:shadow-xl hover:shadow-blue-900/10
                transition-all duration-300
                pt-12 pb-6 px-6
                min-h-[300px] /* Altura mínima para alinear en el Grid */
                flex flex-col
                text-center
            `}>

                {/* Nombre (Enlace a Facebook si existe) */}
                <div className="mb-1">
                    <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">
                        {data.facebookURL ? (
                            <a
                                href={data.facebookURL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:underline decoration-2 underline-offset-4"
                            >
                                {data.name}
                            </a>
                        ) : (
                            <span>{data.name}</span>
                        )}
                    </h3>
                </div>

                {/* Cargo / Designación */}
                <div className="text-xs font-bold uppercase tracking-wider text-blue-500/80 mb-4">
                    {data.designation ?? 'Profesional'}
                </div>

                {/* Texto de la recomendación */}
                <div className="flex-grow flex items-center justify-center">
                    <p className="
                        text-sm text-gray-400 leading-relaxed font-light
                        italic
                    ">
                        {displayText}
                    </p>
                </div>

                {/* Botón "Leer más / Leer menos" */}
                {needsExpansion && (
                    <button
                        onClick={() => setIsExpanded(!isExpanded)}
                        className="
                            mt-4 mx-auto
                            inline-flex items-center gap-1.5
                            text-blue-500 hover:text-blue-400
                            text-xs font-semibold uppercase tracking-wide
                            transition-colors duration-200
                            focus:outline-none
                        "
                    >
                        {isExpanded ? 'Mostrar menos' : 'Leer completo'}
                        {isExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                    </button>
                )}

                {/* Línea decorativa inferior */}
                <div className="mt-auto pt-4">
                    <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-700 to-transparent opacity-30" />
                </div>
            </div>
        </div>
    )
}

export default RecommendationCard