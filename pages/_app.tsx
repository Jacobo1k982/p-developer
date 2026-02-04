import type { AppProps } from 'next/app';

import '@/styles/globals.css';
import Layout from '@/components/Common/layout';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useState } from 'react';

export default function MyApp({ Component, pageProps }: AppProps) {
  // Estrategia de Singleton para QueryClient
  // useState inicializa el cliente solo una vez, manteniendo la caché
  // entre las transiciones de ruta sin reiniciar el estado.
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 60 * 1000, // 1 minuto
            gcTime: 5 * 60 * 1000, // 5 minutos
            refetchOnWindowFocus: false, // Evita re-fetch al volver a la pestaña
            retry: 1, // Menos reintentos agresivos
          },
        },
      })
  );

  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </QueryClientProvider>
  );
}