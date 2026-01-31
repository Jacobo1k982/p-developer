'use client';

import React from 'react';
import { ExternalLink } from 'lucide-react';

interface ExpCardProps {
    card?: {
        id: string;
        company: string;
        role: string;
        url: string | null;
        description: string;
        period: string;
        location: string;
    };
}

const ExperienceCard = ({ card }: ExpCardProps) => {
    // Debug temporal: ver qué llega realmente
    console.log('ExperienceCard recibió:', card);

    if (!card) {
        return (
            <div className="bg-[#161b22] border border-red-600/30 rounded-xl p-6 text-red-400 text-center font-medium">
                Tarjeta de experiencia no disponible (card undefined)
            </div>
        );
    }

    const hasValidUrl =
        card.url &&
        card.url !== 'no website' &&
        card.url !== '' &&
        card.url.startsWith('http');

    return (
        <div
            className="
        group relative overflow-hidden rounded-xl
        bg-[#161b22] border border-[#30363d]
        shadow-sm hover:shadow-lg hover:border-[#3fb950]/40
        transition-all duration-300 ease-out
        p-6 md:p-7 min-h-[180px]  /* ← asegura altura mínima para depurar */
      "
        >
            {/* Debug visible solo en desarrollo */}
            {process.env.NODE_ENV === 'development' && (
                <div className="absolute top-2 right-2 bg-black/70 text-xs text-yellow-300 px-2 py-1 rounded opacity-70 z-20">
                    Debug: {card.company || '?'}
                </div>
            )}

            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                <div className="flex-grow">
                    <div className="flex items-center gap-3 flex-wrap">
                        <h3 className="
              text-xl font-semibold text-[#c9d1d9]
              group-hover:text-[#c9d1d9]/90 transition-colors
            ">
                            {card.company || 'Empresa desconocida'}
                        </h3>

                        {hasValidUrl && (
                            <a
                                href={card.url ?? undefined}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`Visitar sitio web de ${card.company || 'la empresa'}`}
                                className="
                  text-[#8b949e] hover:text-[#3fb950]
                  transition-colors duration-200 p-1 rounded
                  focus:outline-none focus:ring-2 focus:ring-[#3fb950]/50
                "
                            >
                                <ExternalLink size={18} strokeWidth={2.2} />
                            </a>
                        )}
                    </div>

                    <p className="text-base text-[#3fb950] mt-1 font-medium">
                        {card.role || 'Rol no especificado'}
                    </p>
                </div>

                <div className="text-right shrink-0">
                    <span className="
            text-sm font-mono text-[#8b949e] bg-[#0d1117]/70
            px-4 py-1.5 rounded-full inline-block
          ">
                        {card.period || 'Período no disponible'}
                    </span>

                    <p className="text-xs text-[#8b949e] mt-2 opacity-90">
                        {card.location || 'Ubicación no especificada'}
                    </p>
                </div>
            </div>

            <p className="
        text-sm text-[#8b949e] leading-relaxed
        line-clamp-4 md:line-clamp-none
      ">
                {card.description || 'Sin descripción disponible'}
            </p>

            <div className="
        absolute inset-0 bg-gradient-to-t from-[#3fb950]/5 via-transparent to-transparent
        opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none
      " />
        </div>
    );
};

export default ExperienceCard;