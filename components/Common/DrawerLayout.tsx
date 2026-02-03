'use client'

import React from 'react'
import { X } from 'lucide-react'

interface DrawerLayoutProps {
  setIsOpen: (isOpen: boolean) => void
  isOpen: boolean
  children: React.ReactNode
}

const DrawerLayout = ({ setIsOpen, isOpen, children }: DrawerLayoutProps) => {
  return (
    // Wrapper: Maneja la visibilidad general del drawer
    <div
      className={`
        fixed inset-0 z-[60] 
        transition-opacity duration-300 ease-in-out
        ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
      `}
    >
      {/* Overlay: Fondo oscuro desenfocado */}
      <section
        onClick={() => setIsOpen(false)}
        className={`
          absolute inset-0 bg-black/60 backdrop-blur-sm
          transition-opacity duration-300
          ${isOpen ? 'opacity-100' : 'opacity-0'}
        `}
      />

      {/* Panel del Drawer */}
      <section
        className={`
          absolute right-0 top-0 bottom-0 
          w-full sm:max-w-[400px]
          bg-gray-950 border-l border-gray-800
          shadow-2xl
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
      >
        <div className="relative h-full flex flex-col">

          {/* Header Fijo */}
          <div className="
            sticky top-0 z-10 
            flex items-center justify-between 
            px-6 py-5 
            border-b border-gray-800 
            bg-gray-950/95 backdrop-blur-md
          ">
            <h2 className="text-lg font-bold text-white">
              Menú Rápido
            </h2>

            <button
              onClick={() => setIsOpen(false)}
              className="
                p-2 rounded-lg
                text-gray-400 hover:text-white hover:bg-gray-800
                transition-colors duration-200
              "
              aria-label="Cerrar menú"
            >
              <X size={20} strokeWidth={2} />
            </button>
          </div>

          {/* Contenido Scrollable */}
          <div className="flex-grow overflow-y-auto px-6 py-6 text-gray-300 no-scrollbar">
            {children}
          </div>

        </div>
      </section>
    </div>
  )
}

export default DrawerLayout