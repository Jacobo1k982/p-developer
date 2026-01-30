'use client'

import React from 'react'
import { ExternalLink, Github } from 'lucide-react'
import Badge from '@/components/Badge'

interface PortfolioData {
  image?: string
  liveURL?: string          // preferido para demo en vivo
  githubURL?: string        // enlace al repo
  title: string             // obligatorio en el padre
  description?: string
  technologies?: (string | { tech: string })[]   // más común y simple
}

interface PortfolioCardProps {
  data: PortfolioData
}

const PortfolioCard = ({ data }: PortfolioCardProps) => {
  // Normalizamos los datos para mantener compatibilidad
  const projectName = data.title || 'Proyecto sin nombre'
  const projectDetail = data.description || 'Descripción breve del proyecto...'
  const technologiesUsed = data.technologies || []
  const primaryUrl = data.liveURL || data.githubURL
  const isGithubOnly = !!data.githubURL && !data.liveURL

  return (
    <div
      className="
        group relative overflow-hidden rounded-xl
        bg-[#161b22] border border-[#30363d]
        shadow-sm hover:shadow-lg hover:border-[#58a6ff]/30
        transition-all duration-300 ease-out
        h-full flex flex-col
      "
    >
      {/* Imagen con overlay */}
      <div className="relative aspect-[4/3] overflow-hidden bg-[#0d1117]">
        {data.image ? (
          <img
            src={data.image}
            alt={`${projectName} screenshot`}
            className="
              w-full h-full object-cover 
              transition-transform duration-500 ease-out
              group-hover:scale-110
            "
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-[#8b949e] text-sm italic">
            Sin vista previa disponible
          </div>
        )}

        <div className="
          absolute inset-0 bg-gradient-to-t 
          from-black/70 via-black/20 to-transparent 
          opacity-70 group-hover:opacity-85 
          transition-opacity duration-300
        " />
      </div>

      {/* Contenido */}
      <div className="flex flex-col flex-1 p-5 md:p-6">
        {/* Título + enlaces */}
        <div className="flex items-start justify-between gap-3 mb-3">
          <h3 className="
            text-lg font-semibold leading-tight 
            text-[#c9d1d9] group-hover:text-[#c9d1d9]
            transition-colors
          ">
            {primaryUrl ? (
              <a
                href={primaryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  hover:text-[#58a6ff] transition-colors duration-200
                  underline underline-offset-4 decoration-transparent 
                  hover:decoration-[#58a6ff]/70
                "
              >
                {projectName}
              </a>
            ) : (
              projectName
            )}
          </h3>

          <div className="flex items-center gap-1.5 shrink-0">
            {data.githubURL && (
              <a
                href={data.githubURL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Repositorio de ${projectName} en GitHub`}
                className="
                  text-[#8b949e] hover:text-[#58a6ff] 
                  transition-colors p-1.5 rounded-md
                  hover:bg-[#21262d]
                "
              >
                <Github size={18} />
              </a>
            )}

            {data.liveURL && (
              <a
                href={data.liveURL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Ver demo en vivo de ${projectName}`}
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
        </div>

        {/* Descripción */}
        <p className="
          text-sm text-[#8b949e] leading-relaxed 
          line-clamp-3 mb-5 flex-1
        ">
          {projectDetail}
        </p>

        {/* Tecnologías */}
        {technologiesUsed.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-auto">
            {technologiesUsed.map((tech) => {
              const techName = typeof tech === 'string' ? tech : tech?.tech || 'Unknown'
              if (!techName.trim()) return null

              return (
                <Badge
                  key={techName}
                  title={techName}
                  // Si tu Badge tiene variantes, puedes usar:
                  // variant="secondary"
                  className="
                    text-xs px-2.5 py-1 
                    bg-[#21262d] text-[#c9d1d9] 
                    border border-[#30363d] rounded-full
                    hover:bg-[#30363d]/80 hover:border-[#444c56]
                    transition-all duration-200
                  "
                />
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}

export default PortfolioCard