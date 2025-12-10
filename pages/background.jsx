import { useState } from "react";
import Edu_Card from "../components/Background/Edu_Card";
import Exp_Card from "../components/Background/Exp_Card";
import BannerLayout from "../components/Common/BannerLayout";
import Footer from "../components/Footer";
import { useQuery } from "react-query";
import axios from "axios";
import { Skeleton } from "antd";
import ParagraphSkeleton from "../components/Common/ParagraphSkeleton";

function Background() {

    const { isLoading, error, data } = useQuery('background', () =>
        axios.get('api/background')
            .then(({ data }) => data)
            .catch(error => console.error('Error fetching testimonials:', error)))

    return (
        <BannerLayout>
            <div className="relative">
                {/* Efecto de fondo sutil */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/5 opacity-30 pointer-events-none"></div>

                {/* Contenedor principal */}
                <div className="relative z-10 max-w-7xl mx-auto px-4 pb-8 pt-12">
                    {/* Título de sección */}
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Mi <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70">Trayectoria</span>
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent mx-auto"></div>
                    </div>

                    {/* Grid de contenido */}
                    <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                        {/* Sección de Educación */}
                        <div className="relative">
                            {/* Decoración lateral */}
                            <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent hidden md:block"></div>

                            <div className="flex flex-col gap-y-6 md:pl-8">
                                {/* Encabezado de educación */}
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-600/20 flex items-center justify-center border border-white/10">
                                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z"></path>
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                                        </svg>
                                    </div>
                                    <h3 className="text-xl md:text-2xl font-bold text-white">Educación</h3>
                                </div>

                                {/* Tarjetas de educación */}
                                {isLoading ? (
                                    <div className="space-y-4">
                                        {[1, 2, 3].map((index) => (
                                            <div key={index} className="relative overflow-hidden rounded-xl bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 p-6">
                                                <div className="space-y-3">
                                                    <div className="h-6 bg-white/10 rounded-lg w-3/4 animate-pulse"></div>
                                                    <div className="h-4 bg-white/10 rounded-lg w-1/2 animate-pulse"></div>
                                                    <div className="h-4 bg-white/10 rounded-lg w-full animate-pulse"></div>
                                                    <div className="h-4 bg-white/10 rounded-lg w-5/6 animate-pulse"></div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    <div className="space-y-4">
                                        {data && data[0]?.eduCards?.map((eduData, key) => (
                                            <div key={key} className="transform transition-all duration-300 hover:-translate-y-1">
                                                <Edu_Card data={eduData} />
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Sección de Experiencia */}
                        <div className="relative">
                            {/* Decoración lateral */}
                            <div className="absolute right-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent hidden md:block"></div>

                            <div className="flex flex-col gap-y-6 md:pr-8">
                                {/* Encabezado de experiencia */}
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-500/20 to-blue-600/20 flex items-center justify-center border border-white/10">
                                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                        </svg>
                                    </div>
                                    <h3 className="text-xl md:text-2xl font-bold text-white">Experiencia</h3>
                                </div>

                                {/* Tarjetas de experiencia */}
                                {isLoading ? (
                                    <div className="space-y-4">
                                        {[1, 2, 3].map((index) => (
                                            <div key={index} className="relative overflow-hidden rounded-xl bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 p-6">
                                                <div className="space-y-3">
                                                    <div className="h-6 bg-white/10 rounded-lg w-3/4 animate-pulse"></div>
                                                    <div className="h-4 bg-white/10 rounded-lg w-1/2 animate-pulse"></div>
                                                    <div className="h-4 bg-white/10 rounded-lg w-full animate-pulse"></div>
                                                    <div className="h-4 bg-white/10 rounded-lg w-5/6 animate-pulse"></div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    <div className="space-y-4">
                                        {data && data[1]?.expCards?.map((expData, key) => (
                                            <div key={key} className="transform transition-all duration-300 hover:-translate-y-1">
                                                <Exp_Card data={expData} />
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Elemento decorativo central */}
                    <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent hidden md:block transform -translate-x-1/2"></div>
                </div>
            </div>
            <Footer />
        </BannerLayout>
    );
}

export default Background;