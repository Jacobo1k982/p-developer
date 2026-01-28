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
  const getTechName = (item: { tech?: string } | string) =>
    typeof item === 'string' ? item : item?.tech || ''

  return (
    <div
      className="
        group relative overflow-hidden rounded-xl
        bg-[#161b22] border border-[#30363d]
        shadow-sm hover:shadow-md hover:border-[#444c56]
        transition-all duration-300 ease-out
        h-full flex flex-col
      "
    >
      {/* Imagen con overlay GitHub-style */}
      <div className="relative aspect-[4/3] overflow-hidden bg-[#0d1117]">
        {data?.image ? (
          <img
            src={data.image}
            alt={data.projectName || 'Project screenshot'}
            className="
              w-full h-full object-cover 
              transition-transform duration-500 ease-out
              group-hover:scale-105
            "
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-[#8b949e] text-sm">
            Sin imagen
          </div>
        )}

        {/* Overlay sutil + gradiente bottom */}
        <div className="
          absolute inset-0 bg-gradient-to-t 
          from-black/60 via-black/10 to-transparent 
          opacity-80 group-hover:opacity-90 
          transition-opacity duration-300
        " />
      </div>

      {/* Contenido */}
      <div className="flex flex-col flex-1 p-5 md:p-6">
        {/* Título + enlace externo */}
        <div className="flex items-start justify-between gap-4 mb-3">
          <h3 className="
            text-lg font-semibold leading-tight 
            text-[#c9d1d9] group-hover:text-[#c9d1d9]/90
            transition-colors
          ">
            <a
              href={data?.url}
              target="_blank"
              rel="noopener noreferrer"
              className="
                hover:text-[#58a6ff] transition-colors duration-200
                underline underline-offset-4 decoration-[#58a6ff]/0 
                hover:decoration-[#58a6ff]/60
              "
            >
              {data?.projectName || 'Proyecto sin nombre'}
            </a>
          </h3>

          {data?.url && (
            <a
              href={data.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Ver ${data.projectName || 'proyecto'} en vivo`}
              className="
                text-[#8b949e] hover:text-[#58a6ff] 
                transition-colors p-1.5 rounded-md
                hover:bg-[#21262d]
              "
            >
              <ExternalLink size={18} />
            </a>
          )}
        </div>

        {/* Descripción */}
        <p className="
          text-sm text-[#8b949e] leading-relaxed 
          line-clamp-3 mb-4 flex-1
        ">
          {data?.projectDetail || 'Descripción breve del proyecto...'}
        </p>

        {/* Tecnologías - estilo GitHub tags */}
        {data?.technologiesUsed && data.technologiesUsed.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {data.technologiesUsed.map((item, idx) => (
              <Badge
                key={idx}
                title={getTechName(item)}
                className="
                  text-xs px-2.5 py-1 
                  bg-[#21262d] text-[#c9d1d9] 
                  border border-[#30363d] rounded-full
                  hover:bg-[#30363d] transition-colors
                "
              />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default PortfolioCard