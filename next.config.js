/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,  // Mantengo esto si lo necesitas (por ejemplo, por warnings temporales)
  },
  images: {
    // Quita o comenta unoptimized: true → queremos optimización
    // unoptimized: true,  // ← Desactívalo o elimínalo para ganar rendimiento

    // Lista de calidades permitidas (requerido desde Next.js 16+ si usas quality ≠ 75)
    qualities: [75, 85],  // ← Agrega 85 aquí (puedes poner más: 50, 75, 85, 90, 100)

    // Opcional: si tienes imágenes remotas (de otro dominio), agrégalas aquí
    // remotePatterns: [
    //   { protocol: 'https', hostname: 'ejemplo.com' },
    // ],

    // Opcional: formatos preferidos (por defecto usa WebP, puedes agregar AVIF)
    // formats: ['image/avif', 'image/webp'],
  },
};

module.exports = nextConfig;