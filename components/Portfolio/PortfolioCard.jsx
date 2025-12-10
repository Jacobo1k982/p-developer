import Badge from "../Common/Badge"

const PortfolioCard = ({ data }) => {
    return (
        <div
            className="
                group
                relative
                overflow-hidden 
                h-full 
                rounded-2xl
                bg-gradient-to-br from-[#0a0a0a]/95 via-[#0f0f0f]/90 to-[#050505]/95
                backdrop-blur-2xl
                border border-white/8
                shadow-[0_8px_32px_-8px_rgba(0,0,0,0.5)]
                transition-all duration-700 ease-out
                hover:shadow-[0_20px_60px_-15px_rgba(255,255,255,0.15)]
                hover:-translate-y-3
                hover:border-white/15
                transform-gpu
                before:absolute
                before:inset-0
                before:bg-gradient-to-br
                before:from-white/5
                before:to-transparent
                before:opacity-0
                before:transition-opacity
                before:duration-700
                hover:before:opacity-100
            "
        >
            {/* Efecto de luz superior */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            
            {/* Contenedor de imagen con efectos mejorados */}
            <div className="relative w-full overflow-hidden">
                {/* Capa de brillo base */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                
                {/* Imagen con efectos de brillo */}
                <img
                    src={data?.image}
                    alt="portfolio"
                    className="
                        w-full h-48 sm:h-56 md:h-64 object-cover
                        transition-all duration-700 ease-out
                        group-hover:scale-105
                        group-hover:brightness-110
                        group-hover:contrast-105
                        filter
                        brightness-100
                        contrast-100
                    "
                />

                {/* Overlay degradado mejorado con transparencia variable */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/70 via-[#0a0a0a]/30 to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-500"></div>
                
                {/* Efecto de brillo dinámico */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-white/30"></div>
                    <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-white/5 to-white/20"></div>
                </div>
                
                {/* Efecto de luz móvil */}
                <div className="absolute -inset-full top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 -translate-x-full group-hover:translate-x-full transition-all duration-1500 ease-out"></div>
            </div>

            {/* Contenido con fondo sutil */}
            <div
                id="arrow"
                className="
                    px-7 py-6 
                    transition-all duration-500 ease-in-out
                    group-hover:-translate-y-1
                    relative
                    bg-gradient-to-b from-transparent to-[#0a0a0a]/30
                "
            >
                {/* Línea decorativa superior */}
                <div className="absolute top-0 left-7 right-7 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                
                {/* Título + Icono */}
                <div className="flex justify-between items-start">
                    <h3 className="
                        font-bold 
                        text-xl md:text-2xl text-white 
                        leading-tight
                        tracking-tight
                    ">
                        <a
                            href={data?.url}
                            target="_blank"
                            rel="noreferrer"
                            className="
                                hover:text-transparent 
                                hover:bg-clip-text 
                                hover:bg-gradient-to-r 
                                hover:from-white 
                                hover:to-white/80 
                                transition-all duration-300
                                relative
                                after:content-['']
                                after:absolute
                                after:bottom-0
                                after:left-0
                                after:w-0
                                after:h-0.5
                                after:bg-gradient-to-r
                                after:from-white
                                after:to-white/60
                                after:transition-all
                                after:duration-300
                                hover:after:w-full
                            "
                        >
                            {data?.projectName}
                        </a>
                    </h3>

                    {/* Icono mejorado con efectos de brillo */}
                    <a
                        href={data?.url}
                        target="_blank"
                        rel="noreferrer"
                        className="
                            text-white/70 
                            transition-all duration-300 
                            hover:text-white 
                            hover:scale-110 
                            p-1.5
                            rounded-full
                            hover:bg-white/10
                            backdrop-blur-sm
                            relative
                            overflow-hidden
                            before:absolute
                            before:inset-0
                            before:bg-gradient-to-br
                            before:from-white/20
                            before:to-transparent
                            before:opacity-0
                            before:transition-opacity
                            before:duration-300
                            hover:before:opacity-100
                        "
                    >
                        <svg
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 496 512"
                            className="w-5 h-5 relative z-10"
                        >
                            <path
                                fill="currentColor"
                                d="M336.5 160C322 70.7 287.8 8 248 8s-74 62.7-88.5 152h177zM152 256c0 22.2 1.2 43.5 3.3 64h185.3c2.1-20.5 3.3-41.8 3.3-64s-1.2-43.5-3.3-64H155.3c-2.1 20.5-3.3 41.8-3.3 64zm324.7-96c-28.6-67.9-86.5-120.4-158-141.6 24.4 33.8 41.2 84.7 50 141.6h108zM177.2 18.4C105.8 39.6 47.8 92.1 19.3 160h108c8.7-56.9 25.5-107.8 49.9-141.6zM487.4 192H372.7c2.1 21 3.3 42.5 3.3 64s-1.2 43-3.3 64h114.6c5.5-20.5 8.6-41.8 8.6-64s-3.1-43.5-8.5-64zM120 256c0-21.5 1.2-43 3.3-64H8.6C3.2 212.5 0 233.8 0 256s3.2 43.5 8.6 64h114.6c-2-21-3.2-42.5-3.2-64zm39.5 96c14.5 89.3 48.7 152 88.5 152s74-62.7 88.5-152h-177zm159.3 141.6c71.4-21.2 129.4-73.7 158-141.6h-108c-8.8 56.9-25.6 107.8-50 141.6zM19.3 352c28.6 67.9 86.5 120.4 158 141.6-24.4-33.8-41.2-84.7-50-141.6h-108z"
                            ></path>
                        </svg>
                    </a>
                </div>

                {/* Detalle del proyecto */}
                <p className="text-sm text-gray-300/90 mt-4 leading-relaxed">
                    {data?.projectDetail}
                </p>

                {/* Tecnologías con fondo mejorado */}
                <div className="text-sm flex flex-wrap gap-2.5 py-4">
                    {data?.technologiesUsed?.map((item, key) => (
                        <Badge key={key} title={item?.tech || item} />
                    ))}
                </div>
                
                {/* Línea decorativa inferior */}
                <div className="absolute bottom-0 left-7 right-7 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
            </div>
        </div>
    )
}

export default PortfolioCard