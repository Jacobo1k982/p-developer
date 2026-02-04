'use client';

import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
// Se ha eliminado la importación de Badge para evitar el error de tipos

interface PortfolioData {
  image?: string;
  liveURL?: string;
  githubURL?: string;
  title: string;
  description?: string;
  technologies?: (string | { tech: string })[];
}

interface PortfolioCardProps {
  data: PortfolioData;
}

const PortfolioCard = ({ data }: PortfolioCardProps) => {
  const projectName = data.title || 'Proyecto sin nombre';
  const projectDetail = data.description || 'Sin descripción disponible.';
  const technologiesUsed = data.technologies || [];
  const primaryUrl = data.liveURL || data.githubURL;
  const isGithubOnly = !!data.githubURL && !data.liveURL;

  return (
    <div
      className="
        group relative h-full
        bg-[#0d1117]/50 border border-white/5
        rounded-2xl overflow-hidden
        flex flex-col
        transition-all duration-300 ease-out
        hover:-translate-y-1 hover:border-[#1fdf64]/30 hover:shadow-[0_0_20px_rgba(29,223,100,0.15)]
      "
    >
      {/* Imagen del Proyecto */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#0d1117]">
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
          <div className="w-full h-full flex flex-col items-center justify-center text-gray-600 bg-[#161b22]">
            <span className="text-xs font-medium uppercase tracking-widest opacity-50">
              No Disponible
            </span>
          </div>
        )}

        {/* Overlay superior para gradiente suave */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d1117] via-transparent to-transparent opacity-80" />
      </div>

      {/* Contenido de la Tarjeta */}
      <div className="flex flex-col flex-1 p-5 md:p-6 relative z-10">
        {/* Cabecera: Título y Links */}
        <div className="flex justify-between items-start gap-3 mb-4">
          <h3 className="text-lg font-bold text-white leading-tight tracking-tight">
            {primaryUrl ? (
              <a
                href={primaryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#1fdf64] transition-colors duration-200"
              >
                {projectName}
              </a>
            ) : (
              projectName
            )}
          </h3>

          <div className="flex items-center gap-2 shrink-0">
            {/* Link GitHub */}
            {data.githubURL && (
              <a
                href={data.githubURL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Repositorio de ${projectName}`}
                className="
                  text-gray-500 hover:text-white hover:bg-gray-800
                  p-1.5 rounded-lg transition-all duration-200
                "
              >
                <Github size={16} strokeWidth={1.5} />
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
                  text-gray-500 hover:text-[#1fdf64] hover:bg-[#1fdf64]/10
                  p-1.5 rounded-lg transition-all duration-200
                "
              >
                <ExternalLink size={16} strokeWidth={1.5} />
              </a>
            )}
          </div>
        </div>

        {/* Descripción */}
        <p className="text-sm text-gray-400 leading-relaxed mb-6 flex-1 line-clamp-3 font-light">
          {projectDetail}
        </p>

        {/* Lista de Tecnologías (Badges Inline) */}
        {technologiesUsed.length > 0 && (
          <div className="mt-auto flex flex-wrap gap-2">
            {technologiesUsed.map((tech) => {
              const techName = typeof tech === 'string' ? tech : tech?.tech || 'Unknown';
              if (!techName.trim()) return null;

              return (
                // Se usa <span> directo para evitar errores de tipos con el componente Badge externo
                <span
                  key={techName}
                  className="
                    text-[10px] md:text-xs px-2.5 py-1 
                    bg-[#161b22] border border-white/5 text-gray-400
                    rounded-md font-medium uppercase tracking-wide
                    hover:border-[#1fdf64]/30 hover:text-[#1fdf64] hover:bg-[#1fdf64]/5
                    transition-all duration-200 cursor-default
                  "
                >
                  {techName}
                </span>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default PortfolioCard;