'use client';  // ¡Obligatorio! Esto hace que sea un Client Component

import { useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// Opcional: para devtools (ya tienes el paquete instalado)
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

export default function QueryProvider({ children }: { children: React.ReactNode }) {
    // Crea una sola instancia de QueryClient por sesión (evita bugs en hot-reload)
    const [queryClient] = useState(
        () =>
            new QueryClient({
                defaultOptions: {
                    queries: {
                        staleTime: 60 * 1000, // 1 minuto (ajusta según tus necesidades)
                        gcTime: 5 * 60 * 1000, // 5 minutos
                        refetchOnWindowFocus: false, // evita refetch al volver a la pestaña
                        retry: 1, // menos reintentos
                    },
                },
            })
    );

    return (
        <QueryClientProvider client={queryClient}>
            {children}
            {/* Opcional: Devtools solo en desarrollo */}
            {process.env.NODE_ENV === 'development' && <ReactQueryDevtools initialIsOpen={false} />}
        </QueryClientProvider>
    );
}