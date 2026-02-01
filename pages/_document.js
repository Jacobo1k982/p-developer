import { Html, Head, Main, NextScript } from 'next/document';
import { Providers } from '../app/providers'; // Asegúrate que la ruta sea correcta

export default function Document() {
  return (
    <Html lang="es">
      <Head />
      <body>
        <Providers>
          <Main />
        </Providers>
        <NextScript />
      </body>
    </Html>
  );
}