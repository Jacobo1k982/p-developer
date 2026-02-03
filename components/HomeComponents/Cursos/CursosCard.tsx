'use client'

import React from 'react'
import { Award, Calendar, ExternalLink, ShieldCheck, Code, BookOpen, Brain, Rocket } from 'lucide-react'
import CardLayout from '@/components/Common/CardLayout'

interface Cursos {
    title: string
    subtitle?: string
    issuer: string
    date: string
    credentialId?: string
    credentialUrl?: string
    imageUrl?: string
    hasCertificate?: boolean
    badgeText?: string
    icon?: React.ReactNode  // Puedes pasar cualquier SVG aquí (Lucide o custom <img src="*.svg" />)
    iconType?: 'code' | 'book' | 'brain' | 'rocket' | 'award' | 'shield'  // Opcional: para elegir ícono automático
}

interface CursosCardProps {
    data: Cursos
}

const CursosCard = ({ data }: CursosCardProps) => {
    // Función para seleccionar ícono SVG según iconType (si no se pasa icon custom)
    const getDefaultIcon = () => {
        const size = 64
        const stroke = 1.2
        const baseClass = "opacity-90 transition-transform group-hover:scale-110 duration-300"

        switch (data.iconType) {
            case 'code':
                return <Code size={size} strokeWidth={stroke} className={`text-cyan-400 ${baseClass}`} />
            case 'book':
                return <BookOpen size={size} strokeWidth={stroke} className={`text-indigo-400 ${baseClass}`} />
            case 'brain':
                return <Brain size={size} strokeWidth={stroke} className={`text-purple-400 ${baseClass}`} />
            case 'rocket':
                return <Rocket size={size} strokeWidth={stroke} className={`text-orange-400 ${baseClass}`} />
            case 'shield':
                return <ShieldCheck size={size} strokeWidth={stroke} className={`text-blue-400 ${baseClass}`} />
            default:
                return data.hasCertificate
                    ? <ShieldCheck size={size} strokeWidth={stroke} className={`text-blue-400 ${baseClass}`} />
                    : <Award size={size} strokeWidth={stroke} className={`text-gray-400 ${baseClass}`} />
        }
    }

    const iconContent = data.icon || getDefaultIcon()

    return (
        <CardLayout
            className={`
        w-full max-w-[540px] h-[170px] md:h-[180px]
        bg-gradient-to-r from-gray-950 via-gray-900 to-gray-950
        border border-gray-800/60 hover:border-blue-500/60
        rounded-2xl overflow-hidden
        shadow-xl shadow-black/30 hover:shadow-2xl hover:shadow-blue-900/30
        transition-all duration-400 ease-out
        group flex items-center relative
      `}
        >
            <div className="flex items-center w-full h-full px-6 md:px-7 py-5 gap-6 md:gap-8">
                {/* Ícono SVG a la izquierda - siempre vectorial */}
                <div className={`
          flex-shrink-0 w-20 h-20 md:w-28 md:h-28 
          rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-700/30 
          flex items-center justify-center 
          border border-gray-700/50 group-hover:border-blue-500/50 
          transition-all duration-300 shadow-inner
        `}>
                    {iconContent}
                </div>

                {/* Contenido de texto - ajustado para que quepa todo */}
                <div className="flex-1 flex flex-col justify-between h-full min-w-0">
                    <div>
                        {/* Título + Badge */}
                        <div className="flex items-start justify-between gap-4">
                            <h3
                                className={`
                  font-semibold text-[15px] md:text-[17px] leading-tight text-white 
                  group-hover:text-blue-300 transition-colors duration-300
                  line-clamp-2
                `}
                                title={data.title}
                            >
                                {data.title}
                            </h3>

                            {data.hasCertificate && (
                                <div className={`
                  flex-shrink-0 mt-1 px-3 py-1 
                  bg-gradient-to-r from-blue-600/90 to-indigo-600/90 
                  text-white text-xs font-medium rounded-full 
                  flex items-center gap-1.5 shadow-md whitespace-nowrap
                  border border-blue-400/30
                `}>
                                    <ShieldCheck size={14} />
                                    {data.badgeText || 'Certificado'}
                                </div>
                            )}
                        </div>

                        {/* Subtítulo */}
                        {data.subtitle && (
                            <p
                                className="text-xs md:text-sm text-gray-400 group-hover:text-gray-300 transition-colors mt-1.5 line-clamp-1"
                                title={data.subtitle}
                            >
                                {data.subtitle}
                            </p>
                        )}

                        {/* Issuer */}
                        <p
                            className="text-xs md:text-sm text-gray-400 group-hover:text-gray-300 transition-colors mt-1 line-clamp-1"
                            title={data.issuer}
                        >
                            {data.issuer}
                        </p>
                    </div>

                    {/* Pie con fecha y link */}
                    <div className="flex items-center justify-between text-xs md:text-sm text-gray-400 mt-auto">
                        <div className="flex items-center gap-2.5 flex-shrink-0">
                            <Calendar size={14} className="opacity-80" />
                            <time dateTime={data.date} className="whitespace-nowrap">
                                {data.date}
                            </time>
                        </div>

                        {data.credentialUrl && (
                            <a
                                href={data.credentialUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`
                  inline-flex items-center gap-2 
                  text-blue-400 hover:text-blue-300 font-medium
                  transition-colors duration-300
                  flex-shrink-0
                `}
                            >
                                Ver certificado
                                <ExternalLink size={14} />
                            </a>
                        )}
                    </div>
                </div>
            </div>

            {/* Overlay hover sutil y elegante */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-950/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        </CardLayout>
    )
}

export default CursosCard