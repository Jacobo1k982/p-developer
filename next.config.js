module.exports = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,          // ← Esto desactiva el optimizador de Next.js
    //    → Evita errores 400/502 en Netlify
    //    → La imagen se sirve directamente desde /public
  },
};