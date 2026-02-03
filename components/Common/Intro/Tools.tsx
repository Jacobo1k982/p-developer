'use client'

import React, { useEffect, useState } from 'react'
import { PORTFOLIO_CONFIG } from '@/components/constants/config'

// Mapa actualizado para coincidir EXACTAMENTE con los nombres en PORTFOLIO_CONFIG.techStack
const iconMap: Record<string, string> = {
  'JavaScript': 'javascript',
  'React.JS': 'react',
  'Next.JS': 'nextjs',
  'TypeScript': 'typescript',
  'NodeJS': 'nodejs',
  'Redux': 'redux',
  'Zustand': 'zustand',
  'CSS': 'css',
  'TailwindCSS': 'tailwindcss',
  'Ant Design': 'antdesign',
  'Material UI': 'materialui',
  'Next UI': 'nextui',
  'REST API': 'api',
  'MongoDB': 'mongodb',
  'MySQL': 'mysql',
  'Git': 'git',
  'GitHub': 'github',
  'Jira': 'jira',
  'Figma': 'figma',
  'Adobe XD': 'xd',
  'Visual Studio Code': 'vscode',
  'PhotoShop': 'photoshop',
  'UX/UI Design': 'ui', 
  'Bootstrap': 'bootstrap',
  'Express.JS': 'express',
}

const Tools = () => {
  const technologies = PORTFOLIO_CONFIG.techStack || []
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="pt-6">
      <h3 className="mb-6 text-xs font-bold uppercase tracking-widest text-gray-500 border-l-2 border-blue-500 pl-3">
        Stack (Iconos)
      </h3>

      {/* Grid de Iconos */}
      <div className="grid grid-cols-4 gap-x-4 gap-y-6">
        {technologies.map((tech, index) => {
          // Buscamos el código exacto en el mapa
          const code = iconMap[tech]
          
          // URL de skillicons (modo dark)
          const url = `https://skillicons.dev/icons?i=${code}&theme=dark&perline=4`

          return (
            <div
              key={tech}
              className={`
                flex items-center justify-center 
                p-2 rounded-lg hover:bg-gray-900/50
                transition-all duration-500 ease-out
                ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
              `}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <img
                src={url}
                alt={tech}
                width={48}
                height={48}
                className="
                  object-contain 
                  filter grayscale opacity-70 
                  hover:grayscale-0 hover:opacity-100 hover:scale-110
                  transition-all duration-300
                "
                onError={(e) => {
                  // Fallback si skillicons no tiene el icono específico
                  // Intentamos usar el nombre del tech como parámetro directo
                  if (!code) {
                      (e.currentTarget as HTMLImageElement).src = `https://skillicons.dev/icons?i=generic&theme=dark`
                  }
                }}
              />
            </div>
          )
        })}
      </div>

      {technologies.length === 0 && (
        <p className="mt-4 text-center text-sm text-gray-600 italic">
            No hay iconos disponibles
        </p>
      )}
    </div>
  )
}

export default Tools