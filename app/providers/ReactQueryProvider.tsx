'use client';

import { useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

type Props = {
    children: React.ReactNode;
};

export default function QueryProvider({ children }: Props) {
    // Usamos useState para asegurar una sola instancia de QueryClient por sesión
    // y evitar reinicializaciones durante el hot-reload o re-renders
    const [queryClient] = useState(
        () =>
            new QueryClient({
                defaultOptions: {
                    queries: {
                        staleTime: 60 * 1000, // 1 minuto
                        gcTime: 5 * 60 * 1000, // 5 minutos
                        refetchOnWindowFocus: false, // Evita refetch al cambiar de pestaña
                        retry: 1, // Limita reintentos en fallos de red
                    },
                },
            })
    );

    return (
        <QueryClientProvider client={queryClient}>
            {children}
            {process.env.NODE_ENV === 'development' && (
                <ReactQueryDevtools initialIsOpen={false} />
            )}
        </QueryClientProvider>
    );
}