import type { Metadata } from 'next';
import '@/styles/globals.css';
import QueryProvider from './providers/ReactQueryProvider';

export const metadata: Metadata = {
    title: 'Tu Portafolio',
    description: 'Portafolio personal con Next.js',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="es" suppressHydrationWarning>
            <body>
                <QueryProvider>{children}</QueryProvider>
            </body>
        </html>
    );
}