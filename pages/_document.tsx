// app/_document.tsx
import { Html, Head, Main, NextScript } from 'next/document'
import { Providers } from '../app/providers'

export default function Document() {
  return (
    <Html lang="es" suppressHydrationWarning>
      <Head />
      <body>
        <Providers>
          <Main />
        </Providers>
        <NextScript />
      </body>
    </Html>
  )
}