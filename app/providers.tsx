// app/providers.tsx
'use client'

import { useState } from 'react'
import {
    QueryClient,
    QueryClientProvider,
} from '@tanstack/react-query'
// import { ReactQueryDevtools } from '@tanstack/react-query-devtools'  // opcional

export function Providers({ children }: { children: React.ReactNode }) {
    // Creamos el QueryClient una sola vez por montaje del componente
    const [queryClient] = useState(
        () =>
            new QueryClient({
                defaultOptions: {
                    queries: {
                        // Configuración recomendada (ajusta según tu caso)
                        staleTime: 1000 * 60,       // 1 minuto
                        gcTime: 1000 * 60 * 5,      // 5 minutos (antes cacheTime)
                        refetchOnWindowFocus: false,
                        retry: 1,
                    },
                },
            })
    )

    return (
        <QueryClientProvider client={queryClient}>
            {children}
            {/* {process.env.NODE_ENV === 'development' && <ReactQueryDevtools initialIsOpen={false} />} */}
        </QueryClientProvider>
    )
}