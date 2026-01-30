'use client';

import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { GraduationCap, Briefcase, ExternalLink } from 'lucide-react';
import ImageAndParagraphSkeleton from '@/components/Common/ImageAndParagraphSkeleton';

interface EduItem {
    id: string;
    institution: string;
    degree: string;
    description: string;
    period: string;
}

interface ExpItem {
    id: string;
    company: string;
    role: string;
    url: string | null;
    description: string;
    period: string;
    location: string;
}

interface BackgroundData {
    education: EduItem[];
    experience: ExpItem[];
}

const TrajectorySection = () => {
    const { isLoading, error, data } = useQuery<BackgroundData>({
        queryKey: ['background'],
        queryFn: async () => {
            const { data } = await axios.get('/background');
            return data;
        },
    });

    const education = data?.education || [];
    const experience = data?.experience || [];

    return (
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 bg-[#0d1117]/30 backdrop-blur-sm rounded-2xl border border-[#30363d]/50 shadow-2xl">
            {/* Título principal */}
            <div className="text-center mb-16 md:mb-20">
                <h1 className="text-4xl md:text-5xl font-bold text-[#c9d1d9] tracking-tight">
                    Mi Trayectoria
                </h1>
                <div className="mt-4 h-1 w-28 bg-[#58a6ff] mx-auto rounded-full opacity-80" />
            </div>

            {/* Timeline container */}
            <div className="relative">
                {/* Línea vertical central (solo visible en desktop) */}
                <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#30363d] via-[#444c56] to-[#30363d] transform -translate-x-1/2 hidden md:block" />

                <div className="space-y-20 md:space-y-28">
                    {/* ────────────── EDUCACIÓN ────────────── */}
                    <section>
                        <div className="flex items-center justify-center md:justify-start mb-10">
                            <div className="flex items-center gap-3.5 px-7 py-3.5 rounded-full bg-[#161b22]/80 border border-[#30363d] backdrop-blur-sm shadow-lg">
                                <div className="w-10 h-10 rounded-full bg-[#21262d] flex items-center justify-center border-2 border-[#58a6ff]/60">
                                    <GraduationCap className="text-[#58a6ff]" size={22} />
                                </div>
                                <h2 className="text-2xl font-semibold text-[#c9d1d9]">Educación</h2>
                            </div>
                        </div>

                        <div className="relative space-y-12 md:space-y-20">
                            {isLoading ? (
                                [...Array(3)].map((_, i) => (
                                    <div key={i} className="md:w-5/12 md:pr-12 md:ml-auto">
                                        <div className="bg-[#161b22]/70 rounded-xl p-6 h-44">
                                            <ImageAndParagraphSkeleton className="w-full h-full" />
                                        </div>
                                    </div>
                                ))
                            ) : error ? (
                                <div className="text-center text-red-400 py-8">
                                    No se pudo cargar la información de educación
                                </div>
                            ) : education.length === 0 ? (
                                <p className="text-center text-[#8b949e] py-8 italic">
                                    Aún no hay información de educación registrada
                                </p>
                            ) : (
                                education.map((item, idx) => (
                                    <div
                                        key={item.id}
                                        className={`relative md:w-5/12 ${idx % 2 === 0 ? 'md:mr-auto md:pr-12 md:text-right' : 'md:ml-auto md:pl-12'}`}
                                    >
                                        {/* Círculo en la línea (desktop) */}
                                        <div className="absolute left-1/2 top-6 transform -translate-x-1/2 hidden md:block z-10">
                                            <div className="w-14 h-14 rounded-full bg-[#0d1117] border-4 border-[#58a6ff]/70 flex items-center justify-center shadow-lg shadow-[#58a6ff]/10">
                                                <GraduationCap className="text-[#58a6ff]" size={24} />
                                            </div>
                                        </div>

                                        {/* Tarjeta */}
                                        <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6 md:p-7 hover:border-[#58a6ff]/40 hover:shadow-[0_0_20px_rgba(88,166,255,0.15)] transition-all duration-300 relative z-0">
                                            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                                                <div>
                                                    <h3 className="text-xl font-semibold text-[#c9d1d9]">{item.institution}</h3>
                                                    <p className="text-base text-[#58a6ff] mt-1">{item.degree}</p>
                                                </div>
                                                <span className="text-sm font-mono text-[#8b949e] bg-[#0d1117]/70 px-4 py-1.5 rounded-full self-start md:self-center">
                                                    {item.period}
                                                </span>
                                            </div>
                                            <p className="text-[#8b949e] leading-relaxed text-sm md:text-base">
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>
                    </section>

                    {/* ────────────── EXPERIENCIA ────────────── */}
                    <section>
                        <div className="flex items-center justify-center md:justify-end mb-10">
                            <div className="flex items-center gap-3.5 px-7 py-3.5 rounded-full bg-[#161b22]/80 border border-[#30363d] backdrop-blur-sm shadow-lg">
                                <div className="w-10 h-10 rounded-full bg-[#21262d] flex items-center justify-center border-2 border-[#3fb950]/60">
                                    <Briefcase className="text-[#3fb950]" size={22} />
                                </div>
                                <h2 className="text-2xl font-semibold text-[#c9d1d9]">Experiencia</h2>
                            </div>
                        </div>

                        <div className="relative space-y-12 md:space-y-20">
                            {isLoading ? (
                                [...Array(3)].map((_, i) => (
                                    <div key={i} className="md:w-5/12 md:pl-12 md:mr-auto">
                                        <div className="bg-[#161b22]/70 rounded-xl p-6 h-44">
                                            <ImageAndParagraphSkeleton className="w-full h-full" />
                                        </div>
                                    </div>
                                ))
                            ) : error ? (
                                <div className="text-center text-red-400 py-8">
                                    No se pudo cargar la información de experiencia
                                </div>
                            ) : experience.length === 0 ? (
                                <p className="text-center text-[#8b949e] py-8 italic">
                                    Aún no hay experiencia laboral registrada
                                </p>
                            ) : (
                                experience.map((item, idx) => (
                                    <div
                                        key={item.id}
                                        className={`relative md:w-5/12 ${idx % 2 === 0 ? 'md:ml-auto md:pl-12' : 'md:mr-auto md:pr-12 md:text-right'}`}
                                    >
                                        {/* Círculo en la línea */}
                                        <div className="absolute left-1/2 top-6 transform -translate-x-1/2 hidden md:block z-10">
                                            <div className="w-14 h-14 rounded-full bg-[#0d1117] border-4 border-[#3fb950]/70 flex items-center justify-center shadow-lg shadow-[#3fb950]/10">
                                                <Briefcase className="text-[#3fb950]" size={24} />
                                            </div>
                                        </div>

                                        {/* Tarjeta */}
                                        <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6 md:p-7 hover:border-[#3fb950]/40 hover:shadow-[0_0_20px_rgba(63,185,80,0.15)] transition-all duration-300 relative z-0">
                                            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                                                <div>
                                                    <div className="flex items-center gap-3">
                                                        <h3 className="text-xl font-semibold text-[#c9d1d9]">{item.company}</h3>
                                                        {item.url && item.url !== null && item.url !== '' && item.url.startsWith('http') && (
                                                            <a
                                                                href={item.url}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                className="text-[#8b949e] hover:text-[#3fb950] transition-colors"
                                                                aria-label="Visitar sitio web"
                                                            >
                                                                <ExternalLink size={18} />
                                                            </a>
                                                        )}
                                                    </div>
                                                    <p className="text-base text-[#3fb950] mt-1">{item.role}</p>
                                                </div>

                                                <div className={idx % 2 === 0 ? 'md:text-right' : ''}>
                                                    <span className="text-sm font-mono text-[#8b949e] bg-[#0d1117]/70 px-4 py-1.5 rounded-full block md:inline-block">
                                                        {item.period}
                                                    </span>
                                                    <p className="text-xs text-[#8b949e] mt-1.5">{item.location}</p>
                                                </div>
                                            </div>

                                            <p className="text-[#8b949e] leading-relaxed text-sm md:text-base">
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default TrajectorySection;