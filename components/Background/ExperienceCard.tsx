import React from 'react'
import { ExternalLink } from 'lucide-react'
import CardLayout from '../Common/CardLayout'

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
    // Protección principal contra undefined/null
    if (!card) {
        return (
            <div className="bg-[#161b22] border border-red-600/30 rounded-xl p-6 text-red-400">
                Tarjeta de experiencia no disponible
            </div>
        );
    }

    // Ahora card está garantizado como objeto → no más crash
    const hasValidUrl = card.url && card.url !== 'no website' && card.url.startsWith('http');

    return (
        <div
            className="
        bg-[#161b22] border border-[#30363d] rounded-xl p-6
        hover:border-[#444c56] transition-all duration-200
        shadow-sm hover:shadow-md
      "
        >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-3">
                <div>
                    <div className="flex items-center gap-3">
                        <h3 className="text-lg font-semibold text-[#c9d1d9]">
                            {card.company || 'Empresa desconocida'}
                        </h3>
                        {hasValidUrl && (
                            <a
                                href={card.url!}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`Visitar sitio de ${card.company}`}
                                className="text-[#8b949e] hover:text-[#58a6ff] transition-colors"
                            >
                                <ExternalLink size={18} />
                            </a>
                        )}
                    </div>
                    <p className="text-sm text-[#58a6ff] mt-1">{card.role || 'Rol no especificado'}</p>
                </div>
                <div className="text-right">
                    <p className="text-sm text-[#8b949e] font-mono">{card.period || 'Período no disponible'}</p>
                    <p className="text-xs text-[#8b949e] mt-1">{card.location || 'Ubicación no especificada'}</p>
                </div>
            </div>

            <p className="text-sm text-[#8b949e] leading-relaxed">
                {card.description || 'Sin descripción disponible'}
            </p>
        </div>
    );
};

export default ExperienceCard;