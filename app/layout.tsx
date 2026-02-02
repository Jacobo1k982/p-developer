import type { Metadata } from 'next';
import '@/styles/globals.css'; // o donde tengas tus estilos globales

import QueryProvider from './providers/ReactQueryProvider'; // ajusta la ruta si pusiste en otro lugar

// Opcional: si tienes otros providers (theme, auth, etc.), agrégalos aquí
// import { ThemeProvider } from 'next-themes'; etc.

export const metadata: Metadata = {
    title: 'Tu Portafolio',
    description: 'Portafolio personal con Next.js',
    // Agrega más metadatos si quieres
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="es" suppressHydrationWarning>
            <body>
                <QueryProvider>
                    {children}
                </QueryProvider>
            </body>
        </html>
    );
}