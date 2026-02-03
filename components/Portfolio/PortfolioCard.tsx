'use client'

import React from 'react'
import { ExternalLink, Github } from 'lucide-react'
import Badge from '@/components/Badge'

interface PortfolioData {
  image?: string
  liveURL?: string
  githubURL?: string
  title: string
  description?: string
  technologies?: (string | { tech: string })[]
}

interface PortfolioCardProps {
  data: PortfolioData
}

const PortfolioCard = ({ data }: PortfolioCardProps) => {
  const projectName = data.title || 'Proyecto sin nombre'
  const projectDetail = data.description || 'Sin descripción disponible.'
  const technologiesUsed = data.technologies || []
  const primaryUrl = data.liveURL || data.githubURL
  const isGithubOnly = !!data.githubURL && !data.liveURL

  return (
    <div
      className="
        group relative h-full
        bg-gray-900 border border-gray-800
        rounded-xl overflow-hidden
        flex flex-col
        transition-all duration-300
        hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-900/10 hover:border-blue-500/50
      "
    >
      {/* Imagen del Proyecto */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-800">
        {data.image ? (
          <img
            src={data.image}
            alt={`${projectName} screenshot`}
            className="
              w-full h-full object-cover 
              transition-transform duration-500 ease-out
              group-hover:scale-105
            "
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-600 bg-gray-900/50">
            <span className="text-sm font-medium italic">No disponible</span>
          </div>
        )}

        {/* Overlay suave para mejor lectura del borde inferior */}
        <div className="
            absolute inset-0 
            bg-gradient-to-t from-gray-900/80 via-transparent to-transparent 
            opacity-60 group-hover:opacity-80 transition-opacity duration-300
        " />
      </div>

      {/* Contenido de la Tarjeta */}
      <div className="flex flex-col flex-1 p-5 md:p-6 relative z-10">

        {/* Cabecera: Título y Links */}
        <div className="flex justify-between items-start gap-3 mb-3">
          <h3 className="
            text-lg font-bold text-white leading-tight
            group-hover:text-blue-50 transition-colors
          ">
            {primaryUrl ? (
              <a
                href={primaryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline decoration-2 underline-offset-4 hover:decoration-blue-500/50"
              >
                {projectName}
              </a>
            ) : (
              projectName
            )}
          </h3>

          <div className="flex items-center gap-1.5 shrink-0 pt-1">
            {/* Link GitHub */}
            {data.githubURL && (
              <a
                href={data.githubURL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Repositorio de ${projectName}`}
                className="
                  text-gray-500 hover:text-white
                  transition-colors p-1.5 rounded-md
                  hover:bg-white/5
                "
              >
                <Github size={16} strokeWidth={2} />
              </a>
            )}

            {/* Link Live Demo */}
            {data.liveURL && (
              <a
                href={data.liveURL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Ver demo en vivo de ${projectName}`}
                className="
                  text-blue-500/70 hover:text-blue-400
                  transition-colors p-1.5 rounded-md
                  hover:bg-blue-500/10
                "
              >
                <ExternalLink size={16} strokeWidth={2} />
              </a>
            )}
          </div>
        </div>

        {/* Descripción */}
        <p className="
          text-sm text-gray-400 leading-relaxed 
          mb-6 flex-1 line-clamp-3
        ">
          {projectDetail}
        </p>

        {/* Lista de Tecnologías (Badges) */}
        {technologiesUsed.length > 0 && (
          <div className="mt-auto flex flex-wrap gap-2">
            {technologiesUsed.map((tech) => {
              const techName = typeof tech === 'string' ? tech : tech?.tech || 'Unknown'
              if (!techName.trim()) return null

              return (
                <Badge
                  key={techName}
                  // Aplicamos el estilo moderno directamente al componente Badge
                  className="
                    text-xs px-2.5 py-1 
                    bg-gray-800/50 border border-gray-700 text-gray-300
                    rounded-md
                    hover:bg-blue-500/10 hover:text-blue-300 hover:border-blue-500/30
                    transition-all duration-200
                  "
                >
                  {techName}
                </Badge>
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}

export default PortfolioCard