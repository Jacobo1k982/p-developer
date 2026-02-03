'use client'

import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import RecommendationCard from '@/components/HomeComponents/Recommendations/RecommendationCard'
import ParagraphSkeleton from '@/components/Common/ParagraphSkeleton'

interface Recommendation {
    id?: string;
    name: string;
    image?: string;
    facebookURL?: string;
    designation?: string;
    view?: string; // Asumo que este campo contiene el texto de la recomendación
}

const Recommendations = () => {
    const { isLoading, error, data } = useQuery<Recommendation[]>({
        queryKey: ['recommendations'],
        queryFn: async () => {
            const { data } = await axios.get('/api/recommendations')
            return data
        },
    })

    return (
        <section className="py-12 md:py-16 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Cabecera Unificada */}
            <div className="mb-10 md:mb-12 text-center md:text-left">
                <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
                    Recomendaciones
                </h2>
                <span className="block mt-2 h-1 w-20 bg-blue-500 rounded-full"></span>
                <p className="mt-4 text-gray-400 max-w-2xl">
                    Lo que colegas y clientes dicen sobre trabajar conmigo.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                {isLoading ? (
                    // Esqueletos de carga
                    [1, 2, 3, 4].map((_, i) => (
                        <ParagraphSkeleton
                            key={i}
                            className="h-[260px] rounded-xl bg-gray-900/80 border border-gray-800"
                        />
                    ))
                ) : error ? (
                    <div className="col-span-1 md:col-span-2 py-10 text-center bg-red-900/10 rounded-xl border border-dashed border-red-900/30">
                        <p className="text-red-400">No se pudieron cargar las recomendaciones.</p>
                    </div>
                ) : data && data.length > 0 ? (
                    data?.map((item: Recommendation, key) => (
                        <RecommendationCard
                            key={key}
                            data={{
                                ...item,
                                designation: item.designation ?? 'Profesional',
                                view: item.view ?? '',
                                image: item.image ?? '',
                                facebookURL: item.facebookURL ?? '',
                            }}
                        />
                    ))
                ) : (
                    <div className="col-span-1 md:col-span-2 py-10 text-center text-gray-500">
                        No hay recomendaciones registradas.
                    </div>
                )}
            </div>
        </section>
    )
}

export default Recommendations