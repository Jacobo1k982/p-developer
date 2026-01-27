'use client'

import React from 'react'
import { ExternalLink } from 'lucide-react'
import Badge from '@/components/Badge'

interface PortfolioData {
    image?: string
    url?: string
    projectName?: string
    projectDetail?: string
    technologiesUsed?: Array<{ tech?: string } | string>
}

interface PortfolioCardProps {
    data: PortfolioData
}

const PortfolioCard = ({ data }: PortfolioCardProps) => {
    const getTechName = (item: { tech?: string } | string) => {
        if (typeof item === 'string') return item
        return item?.tech || ''
    }

    return (
        <div
            className="
        group
        relative
        overflow-hidden 
        h-full 
        rounded-lg
        bg-white dark:bg-gray-800
        border border-gray-200 dark:border-gray-700
        shadow-sm
        transition-all duration-300 ease-out
        hover:shadow-lg
        hover:-translate-y-2
        hover:border-gray-300 dark:hover:border-gray-600
      "
        >
            {/* Contenedor de imagen */}
            <div className="relative w-full overflow-hidden bg-gray-100 dark:bg-gray-900">
                <img
                    src={data?.image}
                    alt="portfolio"
                    className="
            w-full h-48 sm:h-56 md:h-64 object-cover
            transition-all duration-300 ease-out
            group-hover:scale-105
          "
                />

                {/* Overlay degradado */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-100"></div>
            </div>

            {/* Contenido */}
            <div
                className="
          px-6 py-5 
          transition-all duration-300 ease-in-out
          group-hover:-translate-y-1
        "
            >
                {/* Título + Icono */}
                <div className="flex justify-between items-start gap-4">
                    <h3 className="
            font-semibold 
            text-lg md:text-xl text-gray-900 dark:text-gray-100 
            leading-tight
            flex-1
          ">
                        <a
                            href={data?.url}
                            target="_blank"
                            rel="noreferrer"
                            className="
                hover:text-gray-600 dark:hover:text-gray-300 
                transition-all duration-300
                relative
                after:content-['']
                after:absolute
                after:bottom-0
                after:left-0
                after:w-0
                after:h-0.5
                after:bg-gray-900 dark:after:bg-gray-100
                after:transition-all
                after:duration-300
                hover:after:w-full
              "
                        >
                            {data?.projectName}
                        </a>
                    </h3>

                    {/* Icono de enlace externo */}
                    <a
                        href={data?.url}
                        target="_blank"
                        rel="noreferrer"
                        className="
              text-gray-500 dark:text-gray-400
              transition-all duration-300 
              hover:text-gray-900 dark:hover:text-gray-100 
              hover:scale-110 
              p-2
              rounded-full
              hover:bg-gray-100 dark:hover:bg-gray-700
              flex-shrink-0
            "
                        aria-label="Ver proyecto"
                    >
                        <ExternalLink size={18} />
                    </a>
                </div>

                {/* Detalle del proyecto */}
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-3 leading-relaxed">
                    {data?.projectDetail}
                </p>

                {/* Tecnologías */}
                {data?.technologiesUsed && data.technologiesUsed.length > 0 && (
                    <div className="text-sm flex flex-wrap gap-2 mt-4">
                        {data.technologiesUsed.map((item, key) => (
                            <Badge key={key} title={getTechName(item)} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}

export default PortfolioCard