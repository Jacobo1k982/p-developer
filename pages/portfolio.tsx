import { useQuery } from "@tanstack/react-query";
import BannerLayout from "../components/Common/BannerLayout";
import Footer from "../components/Footer";
import PortfolioCard from "../components/Portfolio/PortfolioCard";
import axios from "axios";
import ImageAndParagraphSkeleton from "../components/Common/ImageAndParagraphSkeleton";

const Portfolio = () => {
    const { isLoading, error, data } = useQuery({
        queryKey: ["portfolio"],
        queryFn: () =>
            axios
                .get("api/portfolio")
                .then(({ data }) => data)
                .catch((error) => {
                    console.error("Error fetching portfolio:", error);
                    throw error;
                })
    });

    return (
        <BannerLayout>
            {/* Contenedor principal estilo GitHub */}
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 bg-gray-50 dark:bg-[#0d1117]">

                {/* Encabezado sobrio tipo GitHub */}
                <div className="mb-12 border-b border-gray-200 dark:border-[#30363d] pb-6">
                    <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-[#c9d1d9]">
                        Mi Portafolio
                    </h2>
                    <p className="mt-2 text-sm md:text-base text-gray-600 dark:text-[#8b949e] max-w-3xl">
                        Selección de proyectos recientes, con enfoque en calidad, arquitectura y experiencia de usuario.
                    </p>
                </div>

                {/* Grid de tarjetas estilo repositorios */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">

                    {isLoading ? (
                        [...Array(6)].map((_, i) => (
                            <div
                                key={i}
                                className="bg-white dark:bg-[#161b22] border border-gray-200 dark:border-[#30363d] rounded-md p-4"
                            >
                                <ImageAndParagraphSkeleton className="w-full h-full" />
                            </div>
                        ))
                    ) : error ? (
                        <div className="col-span-full bg-red-50 dark:bg-[#2d1b1b] border border-red-200 dark:border-red-900 rounded-md p-6 text-center">
                            <p className="text-red-600 dark:text-red-400 text-sm font-medium">
                                Error al cargar los proyectos. Intenta nuevamente.
                            </p>
                        </div>
                    ) : (
                        data?.map((item, index) => (
                            <div
                                key={index}
                                className="bg-white dark:bg-[#161b22] border border-gray-200 dark:border-[#30363d] rounded-md hover:border-gray-400 dark:hover:border-[#8b949e] transition-colors"
                            >
                                <PortfolioCard data={item} />
                            </div>
                        ))
                    )}
                </div>
            </div>

            <Footer />
        </BannerLayout>
    );
};

export default Portfolio;
