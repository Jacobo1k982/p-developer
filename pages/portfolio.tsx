'use client';

import { useQuery } from "@tanstack/react-query";
import BannerLayout from "@/components/Common/BannerLayout";
import Footer from "@/components/Footer";
import PortfolioCard from "@/components/Portfolio/PortfolioCard";
import axios from "axios";
import ImageAndParagraphSkeleton from "@/components/Common/ImageAndParagraphSkeleton";
import { usePathname } from 'next/navigation';
import Link from 'next/link';

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
    const pathname = usePathname();  // Ej: "/portfolio", "/portfolio/123", etc.

    const { isLoading, error, data } = useQuery<Project[]>({
        queryKey: ["portfolio"],
        queryFn: async () => {
            const { data } = await axios.get("/api/portfolio");
            return data;
        },
    });

    // Función auxiliar para generar una key estable y única
    const getProjectKey = (project: Project, index: number): string => {
        if (project.id) return project.id;
        const uniquePart = project.liveURL || project.githubURL || project.title;
        return `${project.title}-${uniquePart || index}`.toLowerCase().replace(/\s+/g, "-");
    };

    // Breadcrumbs dinámicos simples
    const getBreadcrumbs = () => {
        const safePathname = pathname ?? '';
        null
        const segments = safePathname.split('/');
        let accumulatedPath = '';

        return segments.map((segment, index) => {
            accumulatedPath += `/${segment}`;
            const isLast = index === segments.length - 1;
            const label = segment === 'portfolio' ? 'Portafolio' : segment;

            return {
                label: isLast ? label.charAt(0).toUpperCase() + label.slice(1) : label,
                href: accumulatedPath,
                isLast,
            };
        });
    };

    const breadcrumbs = getBreadcrumbs();

    return (
        <BannerLayout>
            {/* Contenedor principal estilo GitHub */}
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 bg-[#0d1117]">

                {/* Breadcrumbs dinámicos (recomendado) */}
                <nav aria-label="Breadcrumb" className="mb-6">
                    <ol className="flex items-center space-x-2 text-sm text-[#8b949e]">
                        <li>
                            <Link href="/" className="hover:text-[#58a6ff] transition-colors">
                                Inicio
                            </Link>
                        </li>

                        {breadcrumbs.map((crumb, idx) => (
                            <li key={crumb.href} className="flex items-center">
                                <span className="mx-2 text-[#30363d]">/</span>
                                {crumb.isLast ? (
                                    <span className="text-[#c9d1d9] font-medium" aria-current="page">
                                        {crumb.label}
                                    </span>
                                ) : (
                                    <Link href={crumb.href} className="hover:text-[#58a6ff] transition-colors">
                                        {crumb.label}
                                    </Link>
                                )}
                            </li>
                        ))}
                    </ol>
                </nav>

                {/* Encabezado sobrio tipo GitHub */}
                <div className="mb-12 border-b border-[#30363d] pb-6">
                    <h2 className="text-2xl md:text-3xl font-semibold text-[#c9d1d9]">
                        Mi Portafolio
                    </h2>
                    <p className="mt-2 text-sm md:text-base text-[#8b949e] max-w-3xl">
                        Selección de proyectos recientes, con enfoque en calidad, arquitectura y experiencia de usuario.
                    </p>

                    {/* Opcional: mostrar el path crudo (útil para debug) */}
                    {/* Puedes comentarlo o quitarlo después */}
                    <div className="mt-3 text-xs font-mono text-[#58a6ff] opacity-70">
                        Ruta actual: {pathname}
                    </div>
                </div>

                {/* Grid de tarjetas estilo repositorios */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {isLoading ? (
                        // Skeleton mientras carga
                        [...Array(6)].map((_, i) => (
                            <div
                                key={`skeleton-${i}`}
                                className="bg-[#161b22] border border-[#30363d] rounded-xl overflow-hidden"
                            >
                                <ImageAndParagraphSkeleton className="w-full aspect-[4/3]" />
                                <div className="p-5 space-y-3">
                                    <div className="h-6 bg-[#21262d] rounded w-3/4" />
                                    <div className="h-4 bg-[#21262d] rounded w-full" />
                                    <div className="h-4 bg-[#21262d] rounded w-5/6" />
                                </div>
                            </div>
                        ))
                    ) : error ? (
                        <div className="col-span-full bg-[#2d1b1b] border border-red-900 rounded-xl p-8 text-center">
                            <p className="text-red-400 text-base font-medium">
                                Error al cargar los proyectos. Intenta recargar la página.
                            </p>
                        </div>
                    ) : data && data.length > 0 ? (
                        data.map((item, index) => (
                            <div
                                key={getProjectKey(item, index)}
                                className="
                                    bg-[#161b22] border border-[#30363d] rounded-xl 
                                    overflow-hidden hover:border-[#444c56] 
                                    transition-all duration-200 shadow-sm hover:shadow-md
                                "
                            >
                                <PortfolioCard data={item} />
                            </div>
                        ))
                    ) : (
                        <div className="col-span-full text-center py-16 text-[#8b949e]">
                            <p className="text-lg">Aún no hay proyectos para mostrar.</p>
                            <p className="mt-2">Pronto agregaré más trabajos interesantes.</p>
                        </div>
                    )}
                </div>
            </div>

            <Footer />
        </BannerLayout>
    );
};

export default Portfolio;