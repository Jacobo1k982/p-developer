'use client'

import React from 'react'
import Badge from '@/components/Badge'
import { PORTFOLIO_CONFIG } from '@/components/constants/config'

const TechRoles = () => {
  return (
    <div className="flex flex-col gap-6">
      
      {/* Cabecera de la sección */}
      <div className="flex items-center gap-3">
        <span className="text-xs font-bold uppercase tracking-widest text-gray-500">
            Stack Tecnológico
        </span>
        <div className="h-px flex-1 bg-gray-800"></div>
      </div>

      {/* Grid/Flex de Roles */}
      {/* CORRECCIÓN: Accedemos a PORTFOLIO_CONFIG.personal.roles */}
      <div className="flex flex-wrap gap-2 md:gap-3">
        {PORTFOLIO_CONFIG.personal.roles.map((role) => (
            <Badge 
                key={role} 
                title={role} 
                variant="default" 
                className="cursor-default" 
            />
        ))}
      </div>

    </div>
  )
}

export default TechRoles