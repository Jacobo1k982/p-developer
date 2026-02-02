// pages/_app.tsx     ← renómbralo a .tsx si usas TypeScript
import type { AppProps } from 'next/app';

import '@/styles/globals.css';
import Layout from '@/components/Common/layout';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useState } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  // Importante: useState + factory function → solo se crea una vez
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            // Recomendaciones comunes 2025–2026
            staleTime: 1000 * 60,      // 1 minuto – ajusta según tus necesidades
            gcTime: 1000 * 60 * 5,     // 5 minutos (antes cacheTime)
            refetchOnWindowFocus: false,
            retry: 1,                  // menos reintentos por default
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

export default MyApp;