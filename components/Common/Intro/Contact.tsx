'use client'

import React from 'react'
import { Mail, PhoneCall, MapPin } from 'lucide-react'
// Asumiendo que tienes el archivo de constantes como en el paso anterior
import { CONTACTS, PORTFOLIO_CONFIG } from '@/components/constants/config'

const Contact = () => {
  // Usamos PORTFOLIO_CONFIG para la ubicación si está disponible, de lo contrario fallback
  const location = PORTFOLIO_CONFIG?.details?.location || 'Lourdes, San Pedro, Montes de Oca'

  return (
    <div className="flex flex-col gap-5">

      {/* EMAIL */}
      <div className="group flex items-center gap-4">
        <div className="
            flex-shrink-0 p-2.5 rounded-lg 
            bg-gray-800/50 border border-gray-800 
            text-gray-500 
            group-hover:border-blue-500/50 group-hover:text-blue-400 group-hover:bg-gray-800
            transition-all duration-300
        ">
          <Mail size={18} strokeWidth={1.5} />
        </div>
        <div className="flex flex-col">
          <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-0.5">
            Contacto
          </span>
          <a
            href={`mailto:${CONTACTS.email}`}
            className="
              text-sm md:text-base text-gray-300 font-medium 
              hover:text-white hover:underline decoration-1 underline-offset-4 hover:decoration-blue-500/50 
              transition-all duration-200
            "
          >
            {CONTACTS.email}
          </a>
        </div>
      </div>

      {/* TELÉFONO */}
      <div className="group flex items-center gap-4">
        <div className="
            flex-shrink-0 p-2.5 rounded-lg 
            bg-gray-800/50 border border-gray-800 
            text-gray-500 
            group-hover:border-blue-500/50 group-hover:text-blue-400 group-hover:bg-gray-800
            transition-all duration-300
        ">
          <PhoneCall size={18} strokeWidth={1.5} />
        </div>
        <div className="flex flex-col">
          <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-0.5">
            Móvil
          </span>
          <a
            href={`tel:${CONTACTS.phone.replace(/\s/g, '')}`} // Limpia espacios para el enlace tel:
            className="
              text-sm md:text-base text-gray-300 font-medium 
              hover:text-white hover:underline decoration-1 underline-offset-4 hover:decoration-blue-500/50 
              transition-all duration-200
            "
          >
            {CONTACTS.phone}
          </a>
        </div>
      </div>

      {/* UBICACIÓN (Estático) */}
      <div className="group flex items-center gap-4">
        <div className="
            flex-shrink-0 p-2.5 rounded-lg 
            bg-gray-800/50 border border-gray-800 
            text-gray-500 
            group-hover:border-blue-500/50 group-hover:text-blue-400 group-hover:bg-gray-800
            transition-all duration-300
        ">
          <MapPin size={18} strokeWidth={1.5} />
        </div>
        <div className="flex flex-col">
          <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-0.5">
            Ubicación
          </span>
          <span className="text-sm md:text-base text-gray-300 font-medium">
            {location}
          </span>
        </div>
      </div>

    </div>
  )
}

export default Contact