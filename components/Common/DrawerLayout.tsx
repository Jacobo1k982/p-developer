'use client'

import React from 'react'

interface DrawerLayoutProps {
  setIsOpen: (isOpen: boolean) => void
  isOpen: boolean
  children: React.ReactNode
}

const DrawerLayout = ({ setIsOpen, isOpen, children }: DrawerLayoutProps) => {
  return (
    <main
      className={`
        fixed overflow-hidden z-[50000] inset-0 transform ease-in-out
        ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}
      `}
    >
      {/* Overlay */}
      <section
        className={`
          absolute inset-0 w-full h-full cursor-pointer 
          bg-black/40 backdrop-blur-md
          transition-opacity duration-300
          ${isOpen ? 'opacity-100' : 'opacity-0'}
        `}
        onClick={() => setIsOpen(false)}
      />

      {/* Drawer panel – siempre dark */}
      <section
        className={`
          absolute right-0 top-0 h-screen w-screen max-w-[320px]
          bg-[#0d1117] border-l border-[#30363d]
          shadow-2xl
          transition-transform duration-300 ease-in-out transform
          ${isOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
      >
        <article className="relative h-screen overflow-y-auto">
          {/* Header con botón cerrar */}
          <div className="
            sticky top-0 z-10 bg-[#161b22]/95 backdrop-blur-md 
            border-b border-[#30363d] px-5 py-4 
            flex justify-between items-center
          ">
            <h2 className="text-lg font-semibold text-[#c9d1d9]">
              Menú
            </h2>
            <button
              onClick={() => setIsOpen(false)}
              className="
                inline-flex items-center justify-center rounded-md p-2
                text-[#8b949e] hover:text-[#c9d1d9]
                hover:bg-[#21262d]
                transition-colors duration-200
                focus:outline-none focus:ring-2 focus:ring-[#58a6ff]/40
                focus:ring-offset-2 focus:ring-offset-[#0d1117]
              "
              aria-label="Cerrar menú"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Contenido del drawer */}
          <div className="px-5 py-6 text-[#c9d1d9]">
            {children}
          </div>
        </article>
      </section>
    </main>
  )
}

export default DrawerLayout