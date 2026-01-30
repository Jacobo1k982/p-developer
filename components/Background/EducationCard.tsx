'use client';

import React from 'react';
import { ExternalLink } from 'lucide-react';

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
    // Si card es undefined o null → render fallback
    if (!card) {
        return (
            <div className="bg-[#161b22] border border-red-600/30 rounded-xl p-6 text-red-400">
                Tarjeta de educación no disponible
            </div>
        );
    }

    return (
        <div
            className="
        bg-[#161b22] border border-[#30363d] rounded-xl p-6
        hover:border-[#444c56] transition-all duration-200
        shadow-sm hover:shadow-md
      "
        >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-3">
                <div>
                    <h3 className="text-lg font-semibold text-[#c9d1d9]">
                        {card.institution || 'Institución desconocida'}
                    </h3>
                    <p className="text-sm text-[#58a6ff]">{card.degree || 'Grado no especificado'}</p>
                </div>
                <span className="text-sm text-[#8b949e] font-mono">
                    {card.period || 'Período no disponible'}
                </span>
            </div>
            <p className="text-sm text-[#8b949e] leading-relaxed">
                {card.description || 'Sin descripción disponible'}
            </p>
        </div>
    );
};

export default EducationCard;