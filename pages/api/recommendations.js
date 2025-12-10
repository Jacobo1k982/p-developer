// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const recommendationCard = [
  {
    id: 0,
    name: 'Christian Hernandez',
    image: "images/Cris.jpg",
    designation: 'Creador Digital | Ventas Corporativas',
    view: "Jacobo es un desarrollador full-stack con una capacidad técnica y humana excepcional. Tuve la oportunidad de colaborar con él y siempre destacó por su rapidez para comprender los requerimientos, su habilidad para proponer soluciones modernas y su compromiso por entregar un trabajo de alta calidad. Maneja con soltura tanto el frontend como el backend, trabajando con buenas prácticas, código limpio y una actitud proactiva que facilita cualquier proyecto. Recomiendo a Jacobo sin dudarlo: es alguien en quien se puede confiar por su profesionalismo, responsabilidad y pasión por lo que hace. 👍! 🌟",
    facebookURL: "https://www.facebook.com/chris.hernandezarias/"
  }
]
export default function handler(req, res) {
  res.status(200).json(recommendationCard)
}
