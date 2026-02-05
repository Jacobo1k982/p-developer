'use client'

import React, { useEffect, useState } from 'react'
import { PORTFOLIO_CONFIG } from '@/components/constants/config'

// Mapa base
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

  // Iniciamos visible inmediatamente para evitar problemas de renderizado
  const [visible, setVisible] = useState(true)

  // (Opcional) Mantenemos el efecto si quieres animación, pero setVisible(true) lo activa ya
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
          let code = iconMap[tech]

          if (!code) {
            const normalized = tech.toLowerCase().replace(/[\s.]/g, '')
            // Excepciones específicas de nombres en la API vs texto común
            const exceptions: Record<string, string> = {
              'visualstudiocode': 'vscode',
              'adobexd': 'xd',
              'adobephotoshop': 'photoshop',
              'uxuidesign': 'ui'
            }
            code = exceptions[normalized] || normalized
          }

          // Si el código queda vacío, usamos 'html' como fallback para no tener URL rota
          const finalCode = code || 'html'
          const url = `https://skillicons.dev/icons?i=${finalCode}&theme=dark&perline=4`

          return (
            <div
              key={tech}
              className={`
                flex items-center justify-center 
                p-2 rounded-lg 
                transition-all duration-300
                bg-gray-900/40 hover:bg-blue-900/40 /* Fondo visible para debug y estilo */
                border border-transparent hover:border-blue-500/30
                
                ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
              `}
              style={{ transitionDelay: `${index * 50}ms` }}
              title={tech} // Tooltip para ver qué tecnología es si el icono falla
            >
              <img
                src={url}
                alt={tech}
                width={48}
                height={48}
                className="
                  object-contain 
                  /* Eliminamos grayscale y opacity reducida para asegurar visibilidad */
                  hover:scale-110
                  transition-transform duration-300
                "
                onError={(e) => {
                  // Fallback definitivo: Un icono genérico si el específico falla
                  (e.currentTarget as HTMLImageElement).src = `https://skillicons.dev/icons?i=generic&theme=dark`
                  // Añadimos una clase inline para identificarlo visualmente en consola
                  console.error(`Icono no encontrado para: ${tech} (Código: ${finalCode})`)
                }}
              />
            </div>
          )
        })}
      </div>

      {technologies.length === 0 && (
        <p className="mt-4 text-center text-sm text-gray-600 italic bg-gray-900 p-2 rounded">
          Configura "techStack" en tu archivo config.ts para ver los iconos.
        </p>
      )}
    </div>
  )
}

export default Tools