'use client'

import React from 'react'
import CircularProgress from '@/components/CircularProgress'
import { PORTFOLIO_CONFIG } from '@/components/constants/config'

interface SkillsProps {
  layout?: 'grid' | 'list' // Nuevo prop para controlar el diseño
}

const Skills = ({ layout = 'grid' }: SkillsProps) => {

  // Estilos para el contenedor según el layout
  const containerClasses = layout === 'list'
    ? "flex flex-col gap-5" // Vertical: uno debajo del otro
    : "grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-10"; // Cuadrícula: 2 o 3 columnas

  // Estilos para el item individual según el layout
  const itemClasses = layout === 'list'
    ? "group/item flex items-center justify-between gap-4 hover:bg-gray-900/50 p-2 -mx-2 rounded-lg transition-colors cursor-default" // Fila horizontal
    : "flex flex-col items-center gap-3 group/item"; // Columna vertical

  return (
    <div className="flex flex-col gap-4">
      <span className="text-xs font-bold uppercase tracking-widest text-gray-500 border-l-2 border-blue-500 pl-3">
        Experiencia y Competencias
      </span>

      <div className={containerClasses}>
        {PORTFOLIO_CONFIG.skills.map((skill) => (
          <div
            key={skill.title}
            className={itemClasses}
          >
            {/* MODO LISTA: Texto a la derecha */}
            {layout === 'list' && (
              <div className="flex-1 min-w-0">
                <div className="text-sm font-bold text-gray-300 group-hover/item:text-blue-400 transition-colors">
                  {skill.title}
                </div>
                <div className="text-xs text-gray-500">Nivel: {skill.level}%</div>
              </div>
            )}

            {/* Círculo de Progreso */}
            {/* En modo lista el círculo es más pequeño (size={70}) */}
            <CircularProgress
              percent={skill.level}
              size={layout === 'list' ? 70 : 100}
              color="text-blue-500"
              trackColor="stroke-gray-800/50"
            />

            {/* MODO GRID: Texto abajo */}
            {layout !== 'list' && (
              <span className="
                                text-xs md:text-sm font-bold text-gray-400 
                                uppercase tracking-wider text-center
                                group-hover/item:text-blue-400 transition-colors
                            ">
                {skill.title}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Skills