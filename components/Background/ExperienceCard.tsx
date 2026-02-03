'use client'

import React from 'react'
import { Briefcase, MapPin, ExternalLink, Globe } from 'lucide-react'

interface ExpCardProps {
    card?: {
        id: string
        company: string
        role: string
        url: string | null
        description: string
        period: string
        location: string
    }
}

const ExperienceCard = ({ card }: ExpCardProps) => {
    if (!card) {
        return (
            <div className="h-full rounded-xl border border-red-900/50 bg-red-900/10 p-6 text-center">
                <p className="text-sm font-medium text-red-400">Tarjeta de experiencia no disponible</p>
            </div>
        )
    }

    // Validar si la URL es válida
    const hasValidUrl =
        card.url &&
        card.url !== 'no website' &&
        card.url !== '' &&
        card.url.startsWith('http')

    return (
        <div
            className={`
                group relative h-full
                bg-gray-900 border border-gray-800
                rounded-xl overflow-hidden
                p-6 md:p-8
                flex flex-col
                transition-all duration-300
                hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-900/10 hover:border-blue-500/50
            `}
        >
            {/* Cabecera: Icono + Empresa + Enlace */}
            <div className="flex justify-between items-start mb-4">
                <div className="flex items-start gap-3">
                    {/* Icono Maletín */}
                    <div className="mt-1 p-2 rounded-lg bg-gray-800/50 border border-gray-700/50 text-blue-500 group-hover:bg-blue-500/10 group-hover:text-blue-400 transition-colors">
                        <Briefcase size={20} strokeWidth={1.5} />
                    </div>

                    <div>
                        <div className="flex items-center gap-2">
                            <h3 className="text-lg md:text-xl font-bold text-white leading-tight">
                                {card.company || 'Empresa'}
                            </h3>
                            {hasValidUrl && (
                                <a
                                    href={card.url ?? undefined}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-500 hover:text-blue-400 transition-colors"
                                    aria-label={`Sitio web de ${card.company}`}
                                >
                                    <Globe size={14} />
                                </a>
                            )}
                        </div>
                        <p className="mt-1 text-base font-medium text-blue-400">
                            {card.role || 'Rol'}
                        </p>
                    </div>
                </div>
            </div>

            {/* Meta Data: Periodo y Ubicación */}
            <div className="mb-6 flex flex-wrap gap-4 text-sm">
                {/* Periodo Badge */}
                <span className="
                    inline-flex items-center gap-1.5
                    font-mono text-gray-400
                    bg-gray-800/60 border border-gray-700/50
                    px-3 py-1.5 rounded-md
                    group-hover:border-blue-500/30 group-hover:text-gray-300 transition-colors
                ">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500/50"></span>
                    {card.period || 'Periodo'}
                </span>

                {/* Ubicación */}
                <div className="flex items-center gap-1.5 text-gray-500">
                    <MapPin size={14} className="text-gray-600" />
                    <span className="group-hover:text-gray-400 transition-colors">
                        {card.location || 'Ubicación'}
                    </span>
                </div>
            </div>

            {/* Descripción */}
            <div className="mt-auto">
                <p className="text-sm text-gray-400 leading-relaxed line-clamp-4">
                    {card.description || 'Sin descripción disponible.'}
                </p>
            </div>

            {/* Efecto Hover de Esquina */}
            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-bl-full pointer-events-none" />
        </div>
    )
}

export default ExperienceCard