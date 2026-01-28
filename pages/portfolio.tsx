'use client';

import { useQuery } from "@tanstack/react-query";
import BannerLayout from "@/components/Common/BannerLayout";
import Footer from "@/components/Footer";
import PortfolioCard from "@/components/Portfolio/PortfolioCard";
import axios from "axios";
import ImageAndParagraphSkeleton from "@/components/Common/ImageAndParagraphSkeleton";

interface Project {
    id?: string;
    title: string;
    description?: string;
    image?: string;
    tags?: string[];
    githubURL?: string;
    liveURL?: string;
    technologies?: string[];
}

const Portfolio = () => {
    const { isLoading, error, data } = useQuery<Project[]>({
        queryKey: ["portfolio"],
        queryFn: async () => {
            const { data } = await axios.get("/api/portfolio");
            return data;
        }
    });

    return (
        <BannerLayout>
            {/* Contenedor principal estilo GitHub */}
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 bg-[#0d1117]">

                {/* Encabezado sobrio tipo GitHub */}
                <div className="mb-12 border-b border-[#30363d] pb-6">
                    <h2 className="text-2xl md:text-3xl font-semibold text-[#c9d1d9]">
                        Mi Portafolio
                    </h2>
                    <p className="mt-2 text-sm md:text-base text-[#8b949e] max-w-3xl">
                        Selección de proyectos recientes, con enfoque en calidad, arquitectura y experiencia de usuario.
                    </p>
                </div>

                {/* Grid de tarjetas estilo repositorios */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">

                    {isLoading ? (
                        [...Array(6)].map((_, i) => (
                            <div
                                key={i}
                                className="bg-[#161b22] border border-[#30363d] rounded-md p-4"
                            >
                                <ImageAndParagraphSkeleton className="w-full h-full" />
                            </div>
                        ))
                    ) : error ? (
                        <div className="col-span-full bg-[#2d1b1b] border border-red-900 rounded-md p-6 text-center">
                            <p className="text-red-400 text-sm font-medium">
                                Error al cargar los proyectos. Intenta nuevamente.
                            </p>
                        </div>
                    ) : (
                        data?.map((item: Project, index: number) => (
                            <div
                                key={item.id ?? index}
                                className="bg-[#161b22] border border-[#30363d] rounded-md hover:border-[#8b949e] transition-colors"
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