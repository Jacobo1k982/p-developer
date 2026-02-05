'use client';

import { useQuery } from "@tanstack/react-query";
import BannerLayout from "@/components/Common/BannerLayout";
import Footer from "@/components/Footer";
import PortfolioCard from "@/components/Portfolio/PortfolioCard";
import axios from "axios";
import ImageAndParagraphSkeleton from "@/components/Common/ImageAndParagraphSkeleton";
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { AlertCircle, LayoutGrid } from 'lucide-react';

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
    const pathname = usePathname();

    const { isLoading, error, data } = useQuery<Project[]>({
        queryKey: ["portfolio"],
        queryFn: async () => {
            const { data } = await axios.get("/api/portfolio");
            return data;
        },
    });

    const getProjectKey = (project: Project, index: number): string => {
        if (project.id) return project.id;
        const uniquePart = project.liveURL || project.githubURL || project.title;
        return `${project.title}-${uniquePart || index}`.toLowerCase().replace(/\s+/g, "-");
    };

    const getBreadcrumbs = () => {
        const safePathname = pathname ?? '';
        const segments = safePathname.split('/').filter(Boolean);
        let accumulatedPath = '';

        return segments.map((segment, index) => {
            accumulatedPath += `/${segment}`;
            const isLast = index === segments.length - 1;
            const label = segment.charAt(0).toUpperCase() + segment.slice(1);

            return {
                label: isLast ? label : segment,
                href: accumulatedPath,
                isLast,
            };
        });
    };

    const breadcrumbs = getBreadcrumbs();

    return (
        <BannerLayout>
            {/* 
                WRAPPER CORRECTOR:
                Agregamos flex flex-col min-h-screen para forzar que el contenido y el footer 
                se apilen verticalmente. 'flex-1' en el contenedor principal empuja el footer abajo.
            */}
            <div className="flex flex-col w-full min-h-screen">

                {/* Contenedor Principal de Contenido */}
                <div className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">

                    {/* Breadcrumbs */}
                    <nav aria-label="Breadcrumb" className="mb-8">
                        <ol className="flex items-center space-x-2 text-sm font-medium text-gray-500">
                            <li>
                                <Link
                                    href="/"
                                    className="flex items-center hover:text-[#1fdf64] transition-colors duration-200"
                                >
                                    Inicio
                                </Link>
                            </li>

                            {breadcrumbs.map((crumb, idx) => (
                                <li key={crumb.href} className="flex items-center">
                                    <span className="mx-2 text-gray-700">/</span>
                                    {crumb.isLast ? (
                                        <span className="text-[#1fdf64] font-semibold" aria-current="page">
                                            {crumb.label}
                                        </span>
                                    ) : (
                                        <Link href={crumb.href} className="hover:text-gray-300 transition-colors">
                                            {crumb.label}
                                        </Link>
                                    )}
                                </li>
                            ))}
                        </ol>
                    </nav>

                    {/* Encabezado */}
                    <div className="mb-12 md:flex md:items-end md:justify-between border-b border-white/5 pb-6">
                        <div>
                            <div className="flex items-center gap-2 mb-2 text-[#1fdf64]">
                                <LayoutGrid size={20} strokeWidth={2} />
                                <span className="text-xs font-bold uppercase tracking-widest">Portafolio</span>
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                                Proyectos Destacados
                            </h2>
                            <p className="mt-3 text-base text-gray-400 max-w-2xl leading-relaxed">
                                Una selección de desarrollos recientes enfocados en arquitectura escalable,
                                diseño de interfaz y experiencia de usuario fluida.
                            </p>
                        </div>
                    </div>

                    {/* Grid de Proyectos */}
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-8">
                        {isLoading ? (
                            [...Array(6)].map((_, i) => (
                                <div
                                    key={`skeleton-${i}`}
                                    className="rounded-2xl overflow-hidden border border-white/5 bg-950/50"
                                >
                                    <ImageAndParagraphSkeleton className="w-full aspect-[4/3]" />
                                    <div className="p-6 space-y-4">
                                        <div className="h-5 bg-white/5 rounded w-3/4 animate-pulse" />
                                        <div className="space-y-2">
                                            <div className="h-3 bg-white/5 rounded w-full animate-pulse" />
                                            <div className="h-3 bg-white/5 rounded w-5/6 animate-pulse" />
                                        </div>
                                        <div className="flex gap-2 pt-2">
                                            <div className="h-6 w-16 bg-white/5 rounded-md animate-pulse" />
                                            <div className="h-6 w-20 bg-white/5 rounded-md animate-pulse" />
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : error ? (
                            <div className="col-span-full flex flex-col items-center justify-center p-12 rounded-2xl border border-red-500/20 bg-red-500/5">
                                <div className="p-3 rounded-full bg-red-500/10 mb-4 text-red-400">
                                    <AlertCircle size={32} />
                                </div>
                                <h3 className="text-xl font-semibold text-white mb-2">Error al cargar</h3>
                                <p className="text-gray-400 text-center max-w-md">
                                    Hubo un problema obteniendo los proyectos. Por favor intenta recargar la página.
                                </p>
                                <button
                                    onClick={() => window.location.reload()}
                                    className="mt-6 px-6 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-colors"
                                >
                                    Recargar
                                </button>
                            </div>
                        ) : data && data.length > 0 ? (
                            data.map((item, index) => (
                                <PortfolioCard
                                    key={getProjectKey(item, index)}
                                    data={item}
                                />
                            ))
                        ) : (
                            <div className="col-span-full text-center py-20 bg-[#0d1117]/30 rounded-2xl border border-white/5 border-dashed">
                                <p className="text-lg font-medium text-gray-300">No hay proyectos por ahora</p>
                                <p className="mt-2 text-sm text-gray-500">Estoy trabajando en nuevos proyectos emocionantes.</p>
                            </div>
                        )}
                    </div>
                </div>

                {/* Footer - Ahora está forzado a estar abajo gracias al wrapper flex-col */}
                <Footer />
            </div>
        </BannerLayout>
    );
};

export default Portfolio;