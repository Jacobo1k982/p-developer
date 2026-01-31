'use client'

import React from 'react'
import { Award, Calendar, ExternalLink } from 'lucide-react'
import CardLayout from '@/components/Common/CardLayout'

interface Certificate {
    title: string
    issuer: string
    date: string        // ej: "Enero 2024" o "Dic 2023"
    credentialId?: string
    credentialUrl?: string
    imageUrl?: string   // URL de la imagen del certificado (o placeholder)
}

interface CertificateCardProps {
    data: Certificate
}

const CertificateCard = ({ data }: CertificateCardProps) => {
    return (
        <CardLayout className="w-80 md:w-96 group hover:border-blue-500/40 transition-colors duration-200">
            <div className="flex flex-col p-4 md:p-5 h-full">
                {/* Imagen del certificado - estilo GitHub-like */}
                <div className="relative aspect-[4/3] overflow-hidden rounded-md border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/40 mb-4">
                    {data.imageUrl ? (
                        <img
                            src={data.imageUrl}
                            alt={data.title}
                            className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-[1.03]"
                            loading="lazy"
                        />
                    ) : (
                        <div className="flex items-center justify-center h-full text-gray-400 dark:text-gray-600">
                            <Award size={48} strokeWidth={1.2} />
                        </div>
                    )}
                </div>

                {/* Contenido principal */}
                <div className="flex flex-col flex-grow">
                    <h3 className="font-semibold text-gray-900 dark:text-gray-100 leading-tight line-clamp-2">
                        {data.title}
                    </h3>

                    <div className="mt-1.5 text-sm text-gray-600 dark:text-gray-400">
                        {data.issuer}
                    </div>

                    <div className="mt-3 flex items-center gap-1.5 text-xs text-gray-500 dark:text-gray-400">
                        <Calendar size={13} />
                        <time dateTime={data.date}>{data.date}</time>
                    </div>

                    {/* Credential ID + link (estilo GitHub) */}
                    {(data.credentialId || data.credentialUrl) && (
                        <div className="mt-4 pt-3 border-t border-gray-200 dark:border-gray-800 text-xs">
                            <div className="flex items-center justify-between text-gray-500 dark:text-gray-400">
                                {data.credentialId && (
                                    <span>
                                        Credential ID: <code className="font-mono text-gray-600 dark:text-gray-300">{data.credentialId}</code>
                                    </span>
                                )}

                                {data.credentialUrl && (
                                    <a
                                        href={data.credentialUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-1 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 hover:underline transition-colors"
                                    >
                                        Ver certificado
                                        <ExternalLink size={13} />
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