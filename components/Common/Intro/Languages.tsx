'use client'

import React from 'react'
import CircularProgress from '@/components/CircularProgress'

// Datos de idiomas (puedes mover esto a config.ts en el futuro)
const languages = [
    { code: 'es', name: 'Español', percent: 100 },
    { code: 'en', name: 'Inglés', percent: 40 },
]

const Languages = () => {
    return (
        <div className="pt-6">
            {/* Cabecera de sección */}
            <h3 className="mb-5 text-xs font-bold uppercase tracking-widest text-gray-500 border-l-2 border-blue-500 pl-3">
                Idiomas
            </h3>

            {/* Contenedor Horizontal Centrado */}
            <div className="flex items-center justify-center gap-8">
                {languages.map((lang) => (
                    <div
                        key={lang.code}
                        className="flex flex-col items-center gap-3 group/lang"
                    >
                        <CircularProgress
                            percent={lang.percent}
                            size={70} // Tamaño compacto ideal para sidebar
                            strokeWidth={10}
                            color="text-blue-500"
                            trackColor="stroke-gray-800/50"
                        />
                        <span className="text-xs font-medium text-gray-400 group-hover/lang:text-blue-400 transition-colors">
                            {lang.name}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Languages