'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
    Code,
    Database,
    Globe,
    Server,
    Terminal,
    Zap,
    Cpu,
    Layers,
    Layout,
    Smartphone,
    Palette,
    type LucideIcon,
} from 'lucide-react';

// Definición de tipos (ajustada para incluir icon opcional)
type ExpertiseCardProps = {
    data: {
        title: string;
        desc: string;
        tags?: string[];
    };
    // NUEVA PROP: Permite pasar un icono personalizado
    icon?: React.ReactNode;
}

// Mapa de iconos basado en el título exacto (Fallback si no se pasa prop 'icon')
const iconMap: Record<string, LucideIcon> = {
    Frontend: Layout,
    Backend: Server,
    'Full Stack': Code,
    DevOps: Terminal,
    Performance: Zap,
    TypeScript: Code,
    React: Layers,
    'System Design': Cpu,
    // Agrega más mapeos según tus datos
};

export default function ExpertiseCard({ data, icon }: ExpertiseCardProps) {
    // Si se pasa un icono manual, se usa. Si no, busca en el mapa.
    const DefaultIcon = iconMap[data.title] || Code;

    return (
        <motion.div
            whileHover={{ y: -5, transition: { duration: 0.2, ease: "easeOut" } }}
            className="
                group relative h-full
                rounded-2xl overflow-hidden
                bg-gray-900/40 border border-white/5
                hover:border-[#1fdf64]/30 hover:shadow-[0_0_20px_rgba(29,223,100,0.1)]
                transition-all duration-300
            "
        >
            {/* Efecto de brillo interno verde al hacer hover */}
            <div className="
                absolute inset-0 opacity-0 group-hover:opacity-100 
                bg-gradient-to-br from-[#1fdf64]/5 via-transparent to-transparent
                pointer-events-none transition-opacity duration-500
            " />

            {/* Contenido */}
            <div className="p-6 md:p-7 flex flex-col h-full relative z-10">
                {/* Cabecera: Icono y Título */}
                <div className="flex items-center gap-4 mb-4">

                    {/* Contenedor del Icono */}
                    <div className="
                        flex items-center justify-center w-12 h-12 md:w-14 md:h-14 
                        rounded-xl bg-[#161b22]/50 border border-white/5
                        text-gray-400 
                        group-hover:bg-[#1fdf64]/10 group-hover:text-[#1fdf64] group-hover:border-[#1fdf64]/20
                        transition-all duration-300
                    ">
                        {/* Renderizado Condicional de Icono */}
                        {icon ? (
                            <span className="text-[24px] md:text-[28px]">
                                {icon}
                            </span>
                        ) : (
                            <DefaultIcon size={28} strokeWidth={1.5} />
                        )}
                    </div>

                    <h3 className="
                        text-xl md:text-2xl font-bold text-white tracking-tight
                        group-hover:text-[#1fdf64] transition-colors duration-300
                    ">
                        {data.title}
                    </h3>
                </div>

                {/* Descripción */}
                <p className="
                    text-sm md:text-base leading-relaxed text-gray-400
                    group-hover:text-gray-300 transition-colors duration-300
                    mb-6 flex-grow
                ">
                    {data.desc}
                </p>

                {/* Tags (Etiquetas) */}
                {data.tags && data.tags.length > 0 ? (
                    <div className="flex flex-wrap gap-2 mt-auto">
                        {data.tags.map((tag, idx) => (
                            <span
                                key={idx}
                                className="
                                    px-3 py-1 text-[10px] md:text-xs font-medium rounded-full
                                    bg-[#0d1117]/50 text-gray-400 border border-white/5
                                    group-hover:border-[#1fdf64]/20 group-hover:text-[#1fdf64]
                                    transition-colors duration-300
                                "
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                ) : (
                    // Fallback decorativo si no hay tags
                    <div className="mt-auto opacity-30 flex gap-2">
                        <div className="w-8 h-2 rounded-full bg-gray-700"></div>
                        <div className="w-16 h-2 rounded-full bg-gray-700"></div>
                    </div>
                )}
            </div>
        </motion.div>
    );
}