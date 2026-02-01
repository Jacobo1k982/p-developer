'use client'

import React from 'react'
import { Award, Calendar, ExternalLink } from 'lucide-react'
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
                w-full max-w-[340px] sm:max-w-[380px] 
                bg-gradient-to-b from-gray-900/80 to-gray-950/90
                border border-gray-800/60 hover:border-blue-600/40
                rounded-xl overflow-hidden
                shadow-lg shadow-black/30 hover:shadow-xl hover:shadow-blue-900/20
                transition-all duration-300 ease-out
                group
            `}
        >
            <div className="flex flex-col h-full">
                {/* Imagen / Placeholder */}
                <div className="relative aspect-[4/3] overflow-hidden bg-gray-950/40">
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
                        <div className="absolute inset-0 flex items-center justify-center text-gray-600">
                            <Award size={64} strokeWidth={1} className="opacity-40" />
                        </div>
                    )}

                    {/* Overlay sutil en hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Contenido */}
                <div className="p-5 flex flex-col flex-grow">
                    <h3 className="font-semibold text-lg leading-tight text-white group-hover:text-blue-300 transition-colors line-clamp-2 mb-2">
                        {data.title}
                    </h3>

                    <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                        {data.issuer}
                    </div>

                    <div className="mt-4 flex items-center gap-2 text-xs text-gray-500">
                        <Calendar size={14} />
                        <time dateTime={data.date}>{data.date}</time>
                    </div>

                    {/* Zona inferior */}
                    {(data.credentialId || data.credentialUrl) && (
                        <div className="mt-auto pt-5 border-t border-gray-800/50 text-xs">
                            <div className="flex items-center justify-between text-gray-400">
                                {data.credentialId && (
                                    <div>
                                        Credential ID:{' '}
                                        <code className="font-mono bg-gray-800/50 px-1.5 py-0.5 rounded text-gray-300">
                                            {data.credentialId}
                                        </code>
                                    </div>
                                )}

                                {data.credentialUrl && (
                                    <a
                                        href={data.credentialUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`
                                            inline-flex items-center gap-1.5 
                                            text-blue-400 hover:text-blue-300 
                                            transition-colors
                                        `}
                                    >
                                        Ver certificado
                                        <ExternalLink size={14} />
                                    </a>
                                )}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </CardLayout>
    )
}

export default CertificateCard