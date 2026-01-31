// pages/api/certificates.ts

import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method !== 'GET') {
        return res.status(405).json({ error: 'Método no permitido' })
    }

    try {
        const data = [
            {
                id: "cert-001",
                title: "Formación lógica de programación con JavaScript",
                issuer: "Alura Latam (Oracle)",
                date: "Julio 2024",
                credentialId: "000012345",
                credentialUrl: "https://app.aluracursos.com/user/askmecr/degree-programacion-primeros-pasos-15697/certificate",
                imageUrl: "/images/certificados/001.png"
            },
            {
                id: "cert-002",
                title: "Principiante en programación G7 - ONE",
                issuer: "Alura Latam (Oracle)",
                date: "Agosto 2024",
                credentialId: "000012346",
                credentialUrl: "https://app.aluracursos.com/user/askmecr/degree-programacion-primeros-pasos-grupo7-one-15788/certificate",
                imageUrl: "/images/certificados/002.png"
            },
        ]

        return res.status(200).json(data)
    } catch (error) {
        console.error('Error en /api/certificates:', error)
        return res.status(500).json({ error: 'Error interno del servidor' })
    }
}