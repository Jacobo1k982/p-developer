'use client'

import React from 'react'
// Cambiamos 'Download' por 'DownloadIcon' para evitar el conflicto de nombres
import { Download as DownloadIcon, FileText } from 'lucide-react'

interface DownloadProps {
    icon?: React.ReactNode
    fileName?: string
    updatedDate?: string
}

const Download = ({
    icon = <DownloadIcon size={18} strokeWidth={2} />,
    fileName = 'cv_jacobogutierrez.pdf',
    updatedDate = 'Actualizado 2024'
}: DownloadProps) => {
    return (
        <div className="flex flex-col gap-4 w-full max-w-xs group">

            {/* Etiqueta Superior */}
            <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-widest text-gray-500">
                    Curriculum
                </span>

                {/* Metadata sutil */}
                <span className="text-[10px] font-mono text-gray-600">
                    {updatedDate}
                </span>
            </div>

            {/* Botón de Acción Principal */}
            <a
                href="/cv.pdf"
                download
                className="
                    relative
                    flex items-center justify-center gap-3
                    w-full px-6 py-3.5
                    bg-gray-900 border border-gray-800
                    text-gray-300 font-medium text-sm
                    rounded-lg
                    transition-all duration-300
                    hover:bg-gray-800 hover:border-blue-500/50 hover:text-white
                    hover:shadow-lg hover:shadow-blue-900/10
                    hover:-translate-y-0.5
                    active:scale-95
                "
            >
                {/* Icono con animación de bajada al hover */}
                <div className="transition-transform duration-300 group-hover:translate-y-1">
                    {icon}
                </div>

                <span className="tracking-tight">Descargar CV</span>
            </a>

            {/* Nombre de archivo simulado (detalle técnico) */}
            <div className="flex items-center gap-2 px-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <FileText size={12} className="text-gray-600" />
                <span className="text-[11px] text-gray-600 font-mono truncate">
                    {fileName}
                </span>
            </div>
        </div>
    )
}

export default Download