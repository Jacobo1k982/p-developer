'use client'

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { X, Github, Linkedin } from 'lucide-react';

// Componentes refactorizados
import Contact from '@/components/Common/Intro/Contact';
import Download from '@/components/Download';
import Skills from '@/components/Common/Intro/Skills';
import TechRoles from '@/components/TechRoles';
import Tools from '@/components/Common/Intro/Tools';
import Languages from '@/components/Common/Intro/Languages';

// Configuración
import { PORTFOLIO_CONFIG } from '@/components/constants/config';

interface IntroProps {
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const Intro: React.FC<IntroProps> = ({ isOpen, setIsOpen }) => {
  return (
    <>
      {/* Overlay (Solo móvil) */}
      {isOpen && (
        <div 
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity md:hidden"
            onClick={() => setIsOpen(false)}
        />
      )}

      {/* PANEL PRINCIPAL */}
      <aside className={`
        fixed inset-y-0 left-0 z-50 
        w-full md:w-[370px] 
        bg-gray-950 
        shadow-2xl shadow-black/50 
        transform transition-transform duration-300 ease-in-out
        flex flex-col
        
        ${isOpen ? 'translate-x-0' : '-translate-x-full'} 
        md:translate-x-0
      `}>
        
        {/* HEADER */}
        <div className="relative flex-shrink-0 flex flex-col items-center p-6 pb-8 border-b border-gray-800 bg-gray-950/95 backdrop-blur-md">
          
          <button 
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 p-2 text-gray-500 hover:text-white transition-colors rounded-full hover:bg-gray-900 md:hidden"
            aria-label="Cerrar menú"
          >
            <X size={20} />
          </button>

          <div className="relative mt-4 mb-4">
            <div className="absolute inset-0 rounded-full bg-blue-500/20 blur-xl"></div>
            <Image
              className="relative w-24 h-24 rounded-full border-4 border-gray-900 shadow-xl object-cover"
              src="/hero2.png"
              alt={`${PORTFOLIO_CONFIG.personal.name} profile`}
              width={96}
              height={96}
              priority
            />
            <div className="absolute bottom-1 right-1 w-4 h-4 bg-green-500 rounded-full border-4 border-gray-950"></div>
          </div>

          <div className="text-center z-10">
            <h2 className="text-xl font-bold text-white tracking-tight">
                {PORTFOLIO_CONFIG.personal.name}
            </h2>
            <p className="text-sm text-blue-400 font-medium mt-1">
                {PORTFOLIO_CONFIG.personal.tagline}
            </p>
          </div>
        </div>

        {/* BODY */}
        <div className="flex-grow overflow-y-auto px-6 py-10 space-y-12 no-scrollbar bg-gray-950">
            
            {/* 1. Stack Tecnológico (Tags) */}
            <section>
                <TechRoles />
                <Tools />
                <Languages />
            </section>

            {/* 2. Habilidades (Modo LISTA vertical) */}
            {/* Forzamos layout="list" para que se organice limpiamente en 1 columna */}
            <section>
                <Skills layout="list" />
            </section>

            {/* 3. Contacto (Incluye Ubicación, Email y Teléfono) */}
            {/* Usamos el componente Contact que ya organiza esto verticalmente */}
            <section>
                <Contact />
            </section>

            {/* 4. Descargar CV */}
            <section>
                <Download />
            </section>

        </div>

        {/* FOOTER */}
        <div className="flex-shrink-0 p-6 border-t border-gray-800 bg-gray-950/95 backdrop-blur-md">
            <div className="flex items-center justify-center gap-8">
                <Link
                    href={PORTFOLIO_CONFIG.socials.github}
                    target="_blank"
                    rel="noreferrer"
                    className="text-gray-400 hover:text-white transition-all duration-300 hover:scale-110"
                    aria-label="GitHub"
                >
                    <Github size={24} />
                </Link>

                <Link
                    href={PORTFOLIO_CONFIG.socials.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="text-gray-400 hover:text-blue-500 transition-all duration-300 hover:scale-110"
                    aria-label="LinkedIn"
                >
                    <Linkedin size={24} />
                </Link>
            </div>
        </div>

      </aside>
    </>
  )
}

export default Intro