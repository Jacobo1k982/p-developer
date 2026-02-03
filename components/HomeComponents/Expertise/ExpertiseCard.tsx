'use client'

import { motion } from 'framer-motion'
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
    Palette
} from 'lucide-react'

interface ExpertiseCardProps {
    data: {
        title: string
        desc: string
        tags?: string[]
    }
}

// Mapa de iconos basado en el título exacto
const iconMap: Record<string, React.ComponentType<{ size?: number; strokeWidth?: number; className?: string }>> = {
    Frontend: Layout,       // Cambiado a Layout para mejor representación
    Backend: Server,
    'Full Stack': Code,
    DevOps: Terminal,       // Cambiado a Terminal para DevOps
    Performance: Zap,
    TypeScript: Code,       // O podría ser Layers
    React: Layers,
    'System Design': Cpu,
    // Agrega más mapeos según tus datos
}

const ExpertiseCard = ({ data }: ExpertiseCardProps) => {
    // Selecciona el icono basado en el título, si no existe usa Code por defecto
    const Icon = iconMap[data.title] || Code

    return (
        <motion.div
            // Animación de Hover (Interacción)
            whileHover={{
                y: -5,
                transition: { duration: 0.2, ease: "easeOut" }
            }}
            className={`
                group relative h-full
                rounded-2xl overflow-hidden
                bg-gray-900 border border-gray-800
                hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-900/10
                transition-all duration-300
            `}
        >
            {/* Efecto de brillo interno sutil al hacer hover */}
            <div className="
                absolute inset-0 opacity-0 group-hover:opacity-100 
                bg-gradient-to-br from-blue-500/5 via-transparent to-transparent
                pointer-events-none transition-opacity duration-500
            " />

            {/* Contenido */}
            <div className="p-6 md:p-7 flex flex-col h-full relative z-10">
                {/* Cabecera: Icono y Título */}
                <div className="flex items-center gap-4 mb-4">
                    <div className="
                        flex items-center justify-center w-12 h-12 md:w-14 md:h-14 
                        rounded-xl bg-gray-800/50 border border-gray-700/50
                        text-blue-500 
                        group-hover:bg-blue-500/10 group-hover:text-blue-400 
                        transition-all duration-300
                    ">
                        <Icon size={28} strokeWidth={1.5} />
                    </div>

                    <h3 className="
                        text-xl md:text-2xl font-bold text-white tracking-tight
                        group-hover:text-blue-400 transition-colors duration-300
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
                                    bg-gray-800 text-gray-400 border border-gray-700/50
                                    group-hover:border-gray-600 group-hover:text-gray-300
                                    transition-colors duration-300
                                "
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                ) : (
                    // Fallback decorativo si no hay tags (opcional, para rellenar espacio visual)
                    <div className="mt-auto opacity-40 flex gap-2">
                        <div className="w-8 h-2 rounded-full bg-gray-700"></div>
                        <div className="w-16 h-2 rounded-full bg-gray-700"></div>
                    </div>
                )}
            </div>
        </motion.div>
    )
}

export default ExpertiseCard