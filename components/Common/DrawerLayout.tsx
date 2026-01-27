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
          absolute inset-0 w-full h-full cursor-pointer bg-black/30 backdrop-blur-sm
          transition-opacity duration-300
          ${isOpen ? 'opacity-100' : 'opacity-0'}
        `}
                onClick={() => {
                    setIsOpen(false)
                }}
            />

            {/* Drawer panel */}
            <section
                className={`
          absolute right-0 top-0 h-screen w-screen max-w-[300px]
          bg-white dark:bg-gray-900
          border-l border-gray-200 dark:border-gray-700
          shadow-2xl
          transition-transform duration-300 ease-in-out transform
          ${isOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
            >
                <article className="relative h-screen overflow-y-auto">
                    {/* Header con botón cerrar */}
                    <div className="sticky top-0 z-10 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700 px-4 py-3 flex justify-between items-center">
                        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                            Menú
                        </h2>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="
                inline-flex items-center justify-center rounded-md p-2
                text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white
                hover:bg-gray-100 dark:hover:bg-gray-800
                transition-colors focus:outline-none focus:ring-2 focus:ring-gray-400
                focus:ring-offset-2 dark:focus:ring-offset-gray-900
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
                    <div className="px-4 py-4">
                        {children}
                    </div>
                </article>
            </section>
        </main>
    )
}

export default DrawerLayout