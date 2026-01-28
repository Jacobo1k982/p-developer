'use client'

import React, { useEffect, useState } from 'react'
import { TECH_STACK } from '@/constants/constants'

const iconMap: Record<string, string> = {
  'React': 'react',
  'Next.js': 'nextjs',
  'TypeScript': 'ts',
  'JavaScript': 'js',
  'Tailwind CSS': 'tailwindcss',
  'Node.js': 'nodejs',
  // ... completa con tus tecnologías reales
}

const Tools = () => {
  const technologies = TECH_STACK || []
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    setTimeout(() => setVisible(true), 300)
  }, [])

  return (
    <div className="pt-6">
      <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
        Tecnologías
      </h3>

      {/* SIN CARD, SIN BACKDROP, SIN BORDER, SIN SHADOW */}
      <div className="grid grid-cols-4 gap-4">
        {technologies.map((tech, index) => {
          const code = iconMap[tech] || tech.toLowerCase().replace(/[^a-z0-9]/g, '')
          const url = `https://skillicons.dev/icons?i=${code}&theme=dark`

          return (
            <div
              key={tech}
              className={`flex items-center justify-center transition-opacity duration-700 ${visible ? 'opacity-100' : 'opacity-0'}`}
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <img
                src={url}
                alt={tech}
                width={88}
                height={88}
                className="object-contain"
                onError={e => { e.currentTarget.src = 'https://skillicons.dev/icons?i=javascript&theme=dark' }}
              />
            </div>
          )
        })}
      </div>

      {technologies.length === 0 && (
        <p className="mt-4 text-center text-sm text-gray-500 dark:text-gray-400">
          Sin tecnologías agregadas aún
        </p>
      )}
    </div>
  )
}

export default Tools