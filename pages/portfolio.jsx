import { useState } from "react";
import { useQuery } from "react-query";
import BannerLayout from "../components/Common/BannerLayout";
import Footer from "../components/Footer";
import PortfolioCard from "../components/Portfolio/PortfolioCard";
import axios from "axios";
import { Skeleton } from "antd";
import ImageAndParagraphSkeleton from "../components/Common/ImageAndParagraphSkeleton";

const Portfolio = () => {
    const { isLoading, error, data } = useQuery('portfolio', () =>
        axios.get('api/portfolio')
            .then(({ data }) => data)
            .catch(error => console.error('Error fetching portfolio:', error)))

    return (
        <BannerLayout>
            {/* Contenedor principal con ancho máximo centrado y espaciado generoso */}
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
                
                {/* Encabezado de la Sección */}
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-400 tracking-tight">
                        Mí Portafolio
                    </h2>
                    <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                        Explora una selección curada de nuestros proyectos más recientes y creativos.
                    </p>
                    {/* Línea decorativa sutil debajo del título */}
                    <div className="w-20 h-1 bg-indigo-600 mx-auto rounded-full mt-4"></div>
                </div>

                {/* Grid Layout: 1 col (móvil), 2 cols (tablet), 3 cols (desktop) */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                    {isLoading ? (
                        // Generamos skeletons para simular la carga real
                        [...Array(6)].map((_, i) => (
                            <div key={i} className="w-full h-full flex flex-col">
                                <ImageAndParagraphSkeleton className={"w-full h-full rounded-xl shadow-sm"} />
                            </div>
                        ))
                    ) : error ? (
                        <div className="col-span-full text-center py-12 bg-red-50 rounded-lg border border-red-100">
                            <p className="text-red-600 font-medium">Hubo un error al cargar los proyectos. Por favor intenta nuevamente.</p>
                        </div>
                    ) : (
                        data?.map((item, index) => (
                            // Animación suave de entrada (opcional si tienes animate.css o framer-motion, 
                            // aquí mantenemos la estructura base limpia)
                            <div key={index} className="h-full">
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