'use client'

import React from 'react'
import { MapPin, Calendar, Briefcase } from 'lucide-react'
import { PORTFOLIO_CONFIG } from '@/components/constants/config'

const Location = () => {
  // Definimos los detalles que queremos mostrar
  const profileDetails = [
    {
      label: 'Ubicación',
      value: PORTFOLIO_CONFIG.details.location,
      icon: <MapPin size={16} className="text-gray-500" />
    },
    {
      label: 'Edad',
      value: `${PORTFOLIO_CONFIG.details.age} Años`,
      icon: <Calendar size={16} className="text-gray-500" />
    },
    {
      label: 'Experiencia',
      value: PORTFOLIO_CONFIG.details.experienceYears || '10+ Años',
      icon: <Briefcase size={16} className="text-gray-500" />
    },
  ]

  return (
    <div className="pt-6 pb-2">
      {/* Cabecera de sección */}
      <h3 className="mb-5 text-xs font-bold uppercase tracking-widest text-gray-500 border-l-2 border-blue-500 pl-3">
        Detalles
      </h3>

      {/* Lista de Información */}
      <ul className="flex flex-col gap-5">
        {profileDetails.map((item, index) => (
          <li key={index} className="flex items-start gap-3 group/item">

            {/* Icono */}
            <div className="mt-0.5 p-1.5 rounded-lg bg-gray-900 border border-gray-800 text-gray-500 group-hover/item:border-blue-500/30 group-hover/item:text-blue-400 transition-all duration-300">
              {item.icon}
            </div>

            {/* Texto */}
            <div className="flex flex-col">
              <span className="text-[10px] font-bold uppercase tracking-wider text-gray-600 mb-0.5">
                {item.label}
              </span>
              <span className="text-sm font-medium text-gray-300 leading-tight">
                {item.value}
              </span>
            </div>

          </li>
        ))}
      </ul>
    </div>
  )
}

export default Location