// components/ExpertiseCard.tsx
'use client'

import { motion } from 'framer-motion'
import { Code, Database, Globe, Server, Terminal, Zap, Cpu, Layers } from 'lucide-react'

interface ExpertiseCardProps {
    data: {
        title: string
        desc: string
        // Puedes agregar icon, tags, etc. en el futuro
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
    // Agrega más según tus expertise reales
}

const ExpertiseCard = ({ data }: ExpertiseCardProps) => {
    const Icon = iconMap[data.title] || Code

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5 }}
            whileHover={{
                y: -6,
                borderColor: '#58a6ff',
                boxShadow: '0 4px 16px rgba(88, 166, 255, 0.15)',
                transition: { duration: 0.2 }
            }}
            className="
        group relative overflow-hidden rounded-xl 
        border border-[#30363d] bg-[#0d1117] 
        transition-all duration-300
      "
        >
            {/* Barra superior estilo GitHub (file header) */}
            <div className="
        flex h-9 items-center gap-3 border-b border-[#30363d] 
        bg-[#161b22] px-4 text-xs font-medium text-gray-400
      ">
                <div className="flex items-center gap-1.5">
                    <div className="h-3 w-3 rounded-full bg-[#ff5f56]" />
                    <div className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
                    <div className="h-3 w-3 rounded-full bg-[#28c940]" />
                </div>
                <span className="text-gray-300">
                    {data.title.replace(/\s+/g, '-')}.md
                </span>
            </div>

            {/* Contenido */}
            <div className="p-6 pt-6">
                <div className="flex items-start gap-5">
                    {/* Icono en contenedor */}
                    <div className="
            flex h-12 w-12 shrink-0 items-center justify-center 
            rounded-lg bg-[#21262d] text-cyan-400/90 
            transition-colors group-hover:text-[#58a6ff]
          ">
                        <Icon size={26} strokeWidth={1.6} />
                    </div>

                    <div className="flex-1 space-y-4">
                        <h3 className="
              text-xl font-semibold leading-tight text-white 
              group-hover:text-[#58a6ff] transition-colors
            ">
                            {data.title}
                        </h3>

                        <p className="text-base leading-relaxed text-[#8b949e] group-hover:text-[#c9d1d9] transition-colors">
                            {data.desc}
                        </p>

                        {/* Tags / tecnologías relacionadas (opcional, puedes hacerlos dinámicos) */}
                        <div className="flex flex-wrap gap-2 pt-3">
                            {/* Ejemplo estático – puedes pasar un array en data.tags */}
                            <span className="
                inline-flex items-center rounded-full bg-[#21262d] 
                px-3 py-1 text-xs font-medium text-gray-300 
                ring-1 ring-inset ring-gray-700
              ">
                                React
                            </span>
                            <span className="
                inline-flex items-center rounded-full bg-[#21262d] 
                px-3 py-1 text-xs font-medium text-gray-300 
                ring-1 ring-inset ring-gray-700
              ">
                                TypeScript
                            </span>
                            <span className="
                inline-flex items-center rounded-full bg-[#21262d] 
                px-3 py-1 text-xs font-medium text-gray-300 
                ring-1 ring-inset ring-gray-700
              ">
                                Next.js
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default ExpertiseCard