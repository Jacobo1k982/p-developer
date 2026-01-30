'use client';

import React from 'react';

interface EduCardProps {
    card?: {
        id: string;
        institution: string;
        degree: string;
        description: string;
        period: string;
    };
}

const EducationCard = ({ card }: EduCardProps) => {
    if (!card) {
        return (
            <div className="bg-[#161b22] border border-red-600/30 rounded-xl p-6 text-red-400 text-center font-medium">
                Tarjeta de educación no disponible
            </div>
        );
    }

    return (
        <div
            className="
        group relative overflow-hidden rounded-xl
        bg-[#161b22] border border-[#30363d]
        shadow-sm hover:shadow-lg hover:border-[#58a6ff]/40
        transition-all duration-300 ease-out
        p-6 md:p-7
      "
        >
            {/* Encabezado */}
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                <div>
                    <h3 className="
            text-xl font-semibold text-[#c9d1d9]
            group-hover:text-[#c9d1d9]/90 transition-colors
          ">
                        {card.institution || 'Institución desconocida'}
                    </h3>
                    <p className="text-base text-[#58a6ff] mt-1 font-medium">
                        {card.degree || 'Grado no especificado'}
                    </p>
                </div>

                {/* Período */}
                <span className="
          text-sm font-mono text-[#8b949e] bg-[#0d1117]/70
          px-4 py-1.5 rounded-full self-start sm:self-center
          whitespace-nowrap
        ">
                    {card.period || 'Período no disponible'}
                </span>
            </div>

            {/* Descripción */}
            <p className="
        text-sm text-[#8b949e] leading-relaxed
        line-clamp-4 md:line-clamp-none
      ">
                {card.description || 'Sin descripción disponible'}
            </p>

            {/* Gradiente hover sutil azul */}
            <div className="
        absolute inset-0 bg-gradient-to-t from-[#58a6ff]/5 via-transparent to-transparent
        opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none
      " />
        </div>
    );
};

export default EducationCard;