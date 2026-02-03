'use client'

import React from 'react'
import { ImageIcon } from 'lucide-react'

interface ParagraphSkeletonProps {
    className?: string
}

const ParagraphSkeleton = ({ className = '' }: ParagraphSkeletonProps) => {
    return (
        <div
            role="status"
            className={`
                relative w-full h-full
                rounded-xl
                bg-gray-900 border border-gray-800
                p-6 shadow-sm
                overflow-hidden
                ${className}
            `}
        >
            {/* Placeholder de Imagen (Header) */}
            <div className="
                w-full aspect-[4/3] 
                bg-gray-800/50 rounded-lg 
                flex items-center justify-center mb-6
            ">
                <ImageIcon className="w-12 h-12 text-gray-700/30" />
            </div>

            {/* Placeholder de Título */}
            <div className="h-6 w-3/4 mb-4 rounded-md bg-gray-800 animate-pulse" />

            {/* Placeholders de Párrafos */}
            <div className="space-y-3">
                <div className="h-3 w-full rounded-md bg-gray-800 animate-pulse" />
                <div className="h-3 w-5/6 rounded-md bg-gray-800 animate-pulse" />
                <div className="h-3 w-11/12 rounded-md bg-gray-800 animate-pulse" />
                <div className="h-3 w-2/3 rounded-md bg-gray-800 animate-pulse" />
            </div>

            {/* Texto para lectores de pantalla */}
            <span className="sr-only">Cargando contenido...</span>
        </div>
    )
}

export default ParagraphSkeleton