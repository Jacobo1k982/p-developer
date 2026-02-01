'use client'

import React, { useState } from 'react'
import CardLayout from '@/components/Common/CardLayout'
import { ChevronDown, ChevronUp } from 'lucide-react'

type RecommendationData = {
    name: string
    designation?: string
    view: string           // ← ya no necesita ser opcional gracias al ?? '' de arriba
    image: string
    facebookURL: string
}

interface RecommendationCardProps {
    data: RecommendationData
}

const RecommendationCard = ({ data }: RecommendationCardProps) => {
    const [isExpanded, setIsExpanded] = useState(false)

    const MAX_LENGTH = 120
    const needsExpansion = data.view.length > MAX_LENGTH
    const displayText = needsExpansion && !isExpanded
        ? data.view.substring(0, MAX_LENGTH).trim() + '...'
        : data.view

    return (
        <div className="relative group">
            {/* Contenedor de la imagen (fuera del overflow del card) */}
            <div className="absolute left-1/2 -translate-x-1/2 -top-12 z-20">
                <div
                    className={`
            w-24 h-24 
            rounded-full 
            overflow-hidden 
            border-4 border-[#0d1117] 
            shadow-2xl shadow-black/60
            transition-all duration-300
            group-hover:scale-105 group-hover:shadow-[#58a6ff]/30
          `}
                >
                    <img
                        src={data.image}
                        alt={data.name}
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>

            {/* Card principal - sin overflow-hidden para que la imagen sobresalga visible */}
            <CardLayout
                className={`
          relative
          bg-gradient-to-b from-[#0d1117] to-[#161b22]
          border border-[#30363d]/60
          rounded-2xl
          shadow-xl shadow-black/40
          transition-all duration-300
          hover:shadow-2xl hover:shadow-[#58a6ff]/20
          hover:border-[#58a6ff]/40
          pt-16 pb-6 px-6
          min-h-[260px]
          flex flex-col
          text-center
        `}
            >
                {/* Nombre */}
                <div className="text-lg font-semibold text-white group-hover:text-[#58a6ff] transition-colors">
                    <a
                        href={data.facebookURL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline underline-offset-4"
                    >
                        {data.name}
                    </a>
                </div>

                {/* Cargo */}
                <div className="designation">{data.designation ?? '—'}</div>

                {/* Texto de recomendación */}
                <div className="mt-5 text-gray-300 text-sm leading-relaxed font-light flex-grow">
                    {displayText}
                </div>

                {/* Botón Leer más / Leer menos */}
                {needsExpansion && (
                    <button
                        onClick={() => setIsExpanded(!isExpanded)}
                        className={`
              mt-4
              inline-flex items-center gap-1.5
              text-[#58a6ff] hover:text-[#79c0ff]
              text-sm font-medium
              transition-colors
              focus:outline-none
            `}
                    >
                        {isExpanded ? 'Leer menos' : 'Leer más'}
                        {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                    </button>
                )}

                {/* Línea decorativa */}
                <div className="mt-5 h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent opacity-50" />
            </CardLayout>
        </div>
    )
}

export default RecommendationCard