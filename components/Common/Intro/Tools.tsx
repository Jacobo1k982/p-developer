'use client'

import React from 'react'
import Badge from '@/components/Badge'

interface ToolsProps {
  techStack?: string[]
}

const Tools = ({ techStack }: ToolsProps) => {
  // Si se pasa techStack como prop, usarlo. Si no, importar de constants
  const technologies = techStack || []

  return (
    <div className='flex flex-col space-y-1 pt-6'>
      <div className='flex flex-col gap-y-4'>
        <span className='text-gray-900 dark:text-gray-100 text-xs font-semibold uppercase tracking-wider'>
          Tecnologías de Trabajo
        </span>
        <div className='flex flex-wrap gap-2'>
          {technologies.map((item, index) => (
            <Badge key={index} title={item} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Tools