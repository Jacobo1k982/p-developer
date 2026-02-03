'use client'

import React from 'react'
import { Copyright, Mail, Heart, ArrowUpRight } from 'lucide-react'

const Footer = () => {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="relative w-full bg-gray-950 pt-12 pb-8 overflow-hidden">

            {/* Línea decorativa superior (Gradiente sutil) */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent opacity-50" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-4">

                    {/* 1. COLUMNA IZQUIERDA: COPYRIGHT */}
                    <div className="flex items-center gap-2 text-gray-500 text-sm order-2 md:order-1">
                        <Copyright size={14} className="opacity-70" />
                        <span className="font-medium opacity-90">
                            {currentYear} · Jacobo Gutiérrez.
                        </span>
                    </div>

                    {/* 2. COLUMNA CENTRAL: MADE WITH */}
                    <div className="flex items-center justify-center order-1 md:order-2 w-full md:w-auto">
                        <a
                            href="https://www.jacana-dev.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="
                                group
                                inline-flex items-center gap-3
                                px-5 py-2.5 rounded-full
                                bg-gray-900 border border-gray-800
                                hover:bg-gray-800 hover:border-blue-500/40
                                transition-all duration-300
                                shadow-sm hover:shadow-lg hover:shadow-blue-900/10
                            "
                        >
                            <span className="text-xs font-medium text-gray-400 group-hover:text-gray-300 uppercase tracking-wide">
                                Diseñado & Construido
                            </span>

                            <div className="relative">
                                <Heart
                                    size={14}
                                    className="text-red-500/80 transition-transform duration-300 group-hover:scale-125 group-hover:fill-red-500"
                                />
                            </div>

                            <span className="text-sm font-semibold text-gray-200 group-hover:text-white transition-colors">
                                by Jacobo
                            </span>
                        </a>
                    </div>

                    {/* 3. COLUMNA DERECHA: CONTACTO */}
                    <div className="flex items-center justify-center md:justify-end w-full md:w-auto order-3">
                        <a
                            href="mailto:askmecr@gmail.com"
                            className="
                                group
                                inline-flex items-center gap-3
                                px-4 py-2 rounded-lg
                                text-gray-400 hover:text-white
                                transition-all duration-300
                                hover:bg-white/5
                            "
                        >
                            <div className="
                                p-2 rounded-lg 
                                bg-gray-900/80 border border-gray-800/50 
                                group-hover:border-blue-500/30 group-hover:bg-blue-500/10
                                transition-colors duration-300
                            ">
                                <Mail size={16} className="text-gray-500 group-hover:text-blue-400 transition-colors" />
                            </div>
                            <div className="flex flex-col items-start leading-none">
                                <span className="text-[10px] uppercase tracking-wider text-gray-600 font-bold mb-0.5">
                                    Contacto
                                </span>
                                <span className="text-sm font-medium group-hover:underline decoration-1 underline-offset-4">
                                    askmecr@gmail.com
                                </span>
                            </div>
                        </a>
                    </div>

                </div>

                {/* Nota al pie (Opcional) */}
                <div className="mt-12 text-center">
                    <p className="text-xs text-gray-700">
                        Hecho con Next.js · TypeScript & Tailwind
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer