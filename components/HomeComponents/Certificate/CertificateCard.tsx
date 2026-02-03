'use client'

import React from 'react'
import { Award, Calendar, ExternalLink, ImageOff } from 'lucide-react'
import CardLayout from '@/components/Common/CardLayout'

interface Certificate {
    title: string
    issuer: string
    date: string
    credentialId?: string
    credentialUrl?: string
    imageUrl?: string
}

interface CertificateCardProps {
    data: Certificate
}

const CertificateCard = ({ data }: CertificateCardProps) => {
    return (
        <CardLayout
            className={`
                w-full h-full 
                bg-gray-900
                border border-gray-800 hover:border-blue-500/50
                rounded-xl overflow-hidden
                shadow-lg hover:shadow-xl hover:shadow-blue-900/10
                transition-all duration-300 ease-out
                group flex flex-col
            `}
        >
            {/* Sección de Imagen (Aspecto fijo 4:3 para uniformidad) */}
            <div className="relative w-full aspect-[4/3] overflow-hidden bg-gray-800/50 flex-shrink-0">
                {data.imageUrl ? (
                    <img
                        src={data.imageUrl}
                        alt={data.title}
                        className={`
                            w-full h-full object-cover 
                            transition-transform duration-500 ease-out
                            group-hover:scale-105
                        `}
                        loading="lazy"
                    />
                ) : (
                    <div className="absolute inset-0 flex items-center justify-center text-gray-700">
                        <Award size={64} strokeWidth={1.5} className="opacity-30" />
                    </div>
                )}

                {/* Overlay de gradiente sutil para mejor lectura si la imagen es clara */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60" />
            </div>

            {/* Sección de Contenido */}
            <div className="p-5 flex flex-col flex-grow">
                <div className="flex-grow">
                    {/* Título */}
                    <h3 className="font-bold text-lg leading-snug text-white group-hover:text-blue-300 transition-colors line-clamp-2 mb-1">
                        {data.title}
                    </h3>

                    {/* Emisor */}
                    <div className="text-sm font-medium text-gray-400 group-hover:text-gray-300 transition-colors mb-4">
                        {data.issuer}
                    </div>

                    {/* Fecha */}
                    <div className="flex items-center gap-2 text-xs text-gray-500 mb-4">
                        <Calendar size={14} className="text-blue-500/50" />
                        <time dateTime={data.date} className="font-mono">{data.date}</time>
                    </div>
                </div>

                {/* Zona inferior (Acciones) */}
                <div className="pt-4 border-t border-gray-800/50 mt-auto">
                    <div className="flex flex-col gap-2">

                        {/* ID del Credencial (si existe) */}
                        {data.credentialId && (
                            <div className="text-xs">
                                <span className="text-gray-500 mr-1">ID:</span>
                                <code className="bg-gray-800/80 text-gray-300 px-1.5 py-0.5 rounded border border-gray-700/50 font-mono truncate block">
                                    {data.credentialId}
                                </code>
                            </div>
                        )}

                        {/* Botón / Link */}
                        {data.credentialUrl && (
                            <a
                                href={data.credentialUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`
                                    inline-flex items-center justify-between w-full
                                    px-3 py-2 rounded-lg text-xs font-semibold text-white
                                    bg-gray-800 border border-gray-700
                                    hover:bg-blue-600 hover:border-blue-600
                                    transition-all duration-200 group/btn
                                `}
                            >
                                <span>Ver Credencial</span>
                                <ExternalLink size={14} className="text-gray-400 group-hover/btn:text-white" />
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </CardLayout>
    )
}

export default CertificateCard