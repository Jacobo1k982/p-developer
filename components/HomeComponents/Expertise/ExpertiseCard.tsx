// components/ExpertiseCard.tsx
'use client'

import { motion } from 'framer-motion'
import { Code, Database, Globe, Server, Terminal, Zap, Cpu, Layers } from 'lucide-react'

interface ExpertiseCardProps {
    data: {
        title: string
        desc: string
        tags?: string[] // opcional: para hacerlos dinámicos
    }
}

const iconMap: Record<string, React.ComponentType<{ size?: number; strokeWidth?: number }>> = {
    Frontend: Globe,
    Backend: Server,
    'Full Stack': Code,
    DevOps: Database,
    Performance: Zap,
    TypeScript: Terminal,
    React: Layers,
    'System Design': Cpu,
    // Agrega más según necesites
}

const ExpertiseCard = ({ data }: ExpertiseCardProps) => {
    const Icon = iconMap[data.title] || Code

    return (
        <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{
                y: -8,
                scale: 1.02,
                transition: { type: 'spring', stiffness: 300, damping: 20 }
            }}
            className={`
        group relative
        rounded-2xl overflow-hidden
        bg-[#0d1117]/70 backdrop-blur-xl border border-[#30363d]/50
        shadow-[0_8px_32px_rgba(0,0,0,0.5)]
        hover:shadow-[0_16px_48px_rgba(88,166,255,0.18)]
        hover:border-[#58a6ff]/40
        transition-all duration-400
      `}
        >
            {/* Subtle inner glow on hover */}
            <div className="
        absolute inset-0 opacity-0 group-hover:opacity-30 
        bg-gradient-to-br from-[#58a6ff]/10 via-transparent to-transparent
        pointer-events-none transition-opacity duration-500
      " />

            {/* Contenido principal */}
            <div className="p-7 flex flex-col h-full">
                <div className="flex items-center gap-4 mb-5">
                    {/* Icono con fondo sutil */}
                    <div className="
            flex items-center justify-center w-14 h-14 
            rounded-xl bg-[#161b22]/80 border border-[#30363d]/70
            text-[#58a6ff]/90 group-hover:text-[#79c0ff]
            transition-colors duration-300
          ">
                        <Icon size={28} strokeWidth={1.5} />
                    </div>

                    <h3 className="
            text-2xl font-semibold text-white tracking-tight
            group-hover:text-[#58a6ff] transition-colors duration-300
          ">
                        {data.title}
                    </h3>
                </div>

                <p className="
          text-base leading-relaxed text-gray-300/90
          group-hover:text-gray-200 transition-colors duration-300
          mb-6 flex-grow
        ">
                    {data.desc}
                </p>

                {/* Tags dinámicos o estáticos */}
                {data.tags && data.tags.length > 0 ? (
                    <div className="flex flex-wrap gap-2">
                        {data.tags.map((tag, idx) => (
                            <span
                                key={idx}
                                className="
                  px-3 py-1 text-xs font-medium rounded-full
                  bg-[#161b22]/60 border border-[#30363d]/50
                  text-gray-300 group-hover:text-[#c9d1d9]
                  transition-all duration-300
                  hover:bg-[#21262d] hover:border-[#58a6ff]/30
                "
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                ) : (
                    // Ejemplo fallback si no pasas tags
                    <div className="flex flex-wrap gap-2 opacity-80">
                        <span className="px-3 py-1 text-xs font-medium rounded-full bg-[#161b22]/60 border border-[#30363d]/50 text-gray-400">
                            Modern Stack
                        </span>
                        <span className="px-3 py-1 text-xs font-medium rounded-full bg-[#161b22]/60 border border-[#30363d]/50 text-gray-400">
                            Scalable
                        </span>
                    </div>
                )}
            </div>
        </motion.div>
    )
}

export default ExpertiseCard