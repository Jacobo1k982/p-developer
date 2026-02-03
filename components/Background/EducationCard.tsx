'use client'

import React from 'react'
import { GraduationCap } from 'lucide-react'

interface EduCardProps {
    card?: {
        id: string
        institution: string
        degree: string
        description: string
        period: string
    }
}

const EducationCard = ({ card }: EduCardProps) => {
    if (!card) {
        return (
            <div className="h-full rounded-xl border border-red-900/50 bg-red-900/10 p-6 text-center">
                <p className="text-sm font-medium text-red-400">Tarjeta de educación no disponible</p>
            </div>
        )
    }

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
            {/* Decoración de esquina sutil */}
            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-bl-full" />

            {/* Cabecera: Institución y Periodo */}
            <div className="flex justify-between items-start mb-6">
                <div className="flex items-start gap-3">
                    {/* Icono decorativo */}
                    <div className="mt-1 p-2 rounded-lg bg-gray-800/50 border border-gray-700/50 text-blue-500 group-hover:bg-blue-500/10 group-hover:text-blue-400 transition-colors">
                        <GraduationCap size={20} strokeWidth={1.5} />
                    </div>

                    <div>
                        <h3 className="text-lg md:text-xl font-bold text-white leading-tight group-hover:text-blue-50 transition-colors">
                            {card.institution || 'Institución'}
                        </h3>
                        <p className="mt-1 text-base font-medium text-blue-400">
                            {card.degree || 'Grado'}
                        </p>
                    </div>
                </div>
            </div>

            {/* Badge de Periodo (Estilo Code) */}
            <div className="mb-6">
                <span className="
                    inline-flex items-center gap-1.5
                    text-xs font-mono font-medium text-gray-400
                    bg-gray-800/60 border border-gray-700/50
                    px-3 py-1.5 rounded-md
                    group-hover:border-blue-500/30 group-hover:text-gray-300 transition-colors
                ">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500/50"></span>
                    {card.period || 'Periodo'}
                </span>
            </div>

            {/* Descripción */}
            <div className="mt-auto">
                <p className="text-sm text-gray-400 leading-relaxed line-clamp-4">
                    {card.description || 'Sin descripción disponible.'}
                </p>
            </div>
        </div>
    )
}

export default EducationCard