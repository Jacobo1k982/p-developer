import Badge from "../Common/Badge"

const PortfolioCard = ({ data }) => {
    return (
        <div
            className="
                card_stylings 
                overflow-hidden 
                h-full 
                rounded-2xl
                bg-[#0f0f0f]/60
                backdrop-blur-md
                border border-white/5
                shadow-lg
                transition-all duration-300
                hover:shadow-xl hover:-translate-y-1
            "
        >
            {/* Imagen con overlay elegante */}
            <div className="relative w-full">
                <img
                    src={data?.image}
                    alt="portfolio"
                    className="w-full object-cover h-40 sm:h-52 md:h-64 opacity-40"
                />

                {/* Overlay degradado */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] via-black/40 to-transparent"></div>
            </div>

            {/* Contenido */}
            <div
                id="arrow"
                className="
                    px-6 py-5 
                    transition-all duration-500 ease-in-out
                    hover:-translate-y-2
                "
            >
                {/* Título + Icono */}
                <div className="flex justify-between items-start">
                    <h3 className="
                        underline italic font-semibold 
                        text-2xl text-Snow 
                        leading-tight
                    ">
                        <a
                            href={data?.url}
                            target="_blank"
                            rel="noreferrer"
                            className="hover:text-Snow/80 transition"
                        >
                            {data?.projectName}
                        </a>
                    </h3>

                    {/* Icono */}
                    <a
                        href={data?.url}
                        target="_blank"
                        rel="noreferrer"
                        className="
                            text-Snow 
                            transition duration-300 
                            hover:text-yellow-300 
                            hover:scale-110 
                            pt-1
                        "
                    >
                        <svg
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 496 512"
                            className="w-6 h-6"
                        >
                            <path
                                fill="currentColor"
                                d="M336.5 160C322 70.7 287.8 8 248 8s-74 62.7-88.5 152h177zM152 256c0 22.2 1.2 43.5 3.3 64h185.3c2.1-20.5 3.3-41.8 3.3-64s-1.2-43.5-3.3-64H155.3c-2.1 20.5-3.3 41.8-3.3 64zm324.7-96c-28.6-67.9-86.5-120.4-158-141.6 24.4 33.8 41.2 84.7 50 141.6h108zM177.2 18.4C105.8 39.6 47.8 92.1 19.3 160h108c8.7-56.9 25.5-107.8 49.9-141.6zM487.4 192H372.7c2.1 21 3.3 42.5 3.3 64s-1.2 43-3.3 64h114.6c5.5-20.5 8.6-41.8 8.6-64s-3.1-43.5-8.5-64zM120 256c0-21.5 1.2-43 3.3-64H8.6C3.2 212.5 0 233.8 0 256s3.2 43.5 8.6 64h114.6c-2-21-3.2-42.5-3.2-64zm39.5 96c14.5 89.3 48.7 152 88.5 152s74-62.7 88.5-152h-177zm159.3 141.6c71.4-21.2 129.4-73.7 158-141.6h-108c-8.8 56.9-25.6 107.8-50 141.6zM19.3 352c28.6 67.9 86.5 120.4 158 141.6-24.4-33.8-41.2-84.7-50-141.6h-108z"
                            ></path>
                        </svg>
                    </a>
                </div>

                {/* Detalle del proyecto */}
                <p className="text-sm text-LightGray/80 mt-3 leading-relaxed">
                    {data?.projectDetail}
                </p>

                {/* Tecnologías */}
                <div className="text-sm flex flex-wrap gap-3 py-3">
                    {data.technologiesUsed.map((item, key) => (
                        <Badge key={key} title={item.tech} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default PortfolioCard
