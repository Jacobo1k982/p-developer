'use client'

import { Award, ExternalLink, Image as ImageIcon } from 'lucide-react'

// Aseguramos que la interfaz coincida con lo que envía el padre
interface CursosCardProps {
    data: {
        id: string
        title: string
        issuer: string
        imageUrl?: string
        subtitle?: string
        hasCertificate?: boolean
        credentialUrl?: string
    }
}

const CursosCard = ({ data }: CursosCardProps) => {
    const { title, subtitle, issuer, imageUrl, hasCertificate, credentialUrl } = data

    return (
        <div className="group relative flex flex-col items-center bg-gray-900 rounded-xl shadow-lg border border-gray-800 hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-1 p-6 h-full">
            
            {/* Contenedor del Icono/Imagen y Badge */}
            <div className="relative mb-5">
                {imageUrl ? (
                    // Si hay imagen (logo de la empresa), se muestra
                    <img 
                        src={imageUrl} 
                        alt={issuer || 'Curso'} 
                        className="w-16 h-16 object-contain rounded-lg bg-gray-800/50 p-2"
                    />
                ) : (
                    // Si no hay imagen, mostramos un icono por defecto
                    <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center text-blue-400">
                        <Award className="w-8 h-8" />
                    </div>
                )}

                {/* Badge de Certificado */}
                {hasCertificate && (
                    <span className="absolute -top-2 -right-2 bg-blue-500/10 text-blue-400 border border-blue-500/20 text-[10px] font-bold uppercase tracking-wider rounded-full px-2 py-0.5 shadow-sm">
                        Certificado
                    </span>
                )}
            </div>

            {/* Título y Subtítulo */}
            <h3 className="text-lg font-bold text-white text-center leading-tight mb-2 group-hover:text-blue-400 transition-colors">
                {title}
            </h3>
            <p className="text-sm text-gray-400 text-center mb-6 line-clamp-2">
                {subtitle || issuer}
            </p>

            {/* Botón de Acción */}
            <button 
                onClick={() => credentialUrl && window.open(credentialUrl, '_blank')}
                className="w-full mt-auto bg-gray-800 text-gray-300 text-sm font-semibold py-2.5 px-4 rounded-lg border border-gray-700 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-200 flex items-center justify-center gap-2"
            >
                <span>VER CERTIFICADO</span>
                <ExternalLink className="w-4 h-4" />
            </button>
        </div>
    )
}

export default CursosCard