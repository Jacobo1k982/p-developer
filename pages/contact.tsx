'use client'

import { useState } from 'react'
import { Mail, Github, Linkedin, Send, User, MessageSquare } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card } from '@/components/ui/card'
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
} from '@/components/ui/dialog'

const Contact = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })

    const [status, setStatus] = useState<{
        type: 'success' | 'error' | null
        message: string
    }>({ type: null, message: '' })

    // ¡Cambia este ID por el tuyo real!
    const FORMSPREE_FORM_ID = 'maqjypkp'

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))

        // Limpiamos el mensaje de estado cuando el usuario empieza a escribir de nuevo
        if (status.type) setStatus({ type: null, message: '' })
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)
        setStatus({ type: null, message: '' })

        try {
            const response = await fetch(`https://formspree.io/f/${FORMSPREE_FORM_ID}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(formData)
            })

            const data = await response.json()

            if (response.ok) {
                setFormData({ name: '', email: '', message: '' })
                setStatus({
                    type: 'success',
                    message: '¡Mensaje enviado con éxito!'
                })
                setIsOpen(true)
            } else {
                throw new Error(data.error || 'Error al enviar el mensaje')
            }
        } catch (error: any) {
            console.error('Error al enviar formulario:', error)
            setStatus({
                type: 'error',
                message: error.message || 'Hubo un problema al enviar el mensaje. Inténtalo de nuevo.'
            })
        } finally {
            setIsSubmitting(false)
        }
    }

    const contactInfo = [
        { label: 'País', value: 'Costa Rica' },
        { label: 'Ciudad', value: 'San José' },
        { label: 'Compañía', value: 'jacana-dev' },
    ]

    const contactDetails = [
        { label: 'Email', value: 'askmecr@gmail.com' },
        { label: 'Linkedin', value: 'jacobo-gutierrez' },
        { label: 'Teléfono', value: '+506 64541700' },
    ]

    const socialLinks = [
        { icon: Mail, href: 'mailto:askmecr@gmail.com' },
        { icon: Github, href: 'https://github.com/Jacobo1k982' },
        { icon: Linkedin, href: 'https://www.linkedin.com/in/jacobo-gutierrez/' },
    ]

    return (
        <div className="min-h-screen flex flex-col bg-white dark:bg-gray-950">
            <main className="flex-1 px-4 py-8 max-w-4xl mx-auto w-full">
                {/* Información de contacto */}
                <div className="mb-12">
                    <h1 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
                        Información de contacto
                    </h1>

                    <div className="grid md:grid-cols-2 gap-6">
                        <Card className="p-6">
                            <div className="space-y-4">
                                {contactInfo.map((item, index) => (
                                    <div key={index} className="flex justify-between items-center">
                                        <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                                            {item.label}
                                        </span>
                                        <span className="text-sm text-gray-900 dark:text-gray-100">
                                            {item.value}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </Card>

                        <Card className="p-6">
                            <div className="space-y-4">
                                {contactDetails.map((item, index) => (
                                    <div key={index} className="flex justify-between items-center">
                                        <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                                            {item.label}
                                        </span>
                                        <span className="text-sm text-gray-900 dark:text-gray-100">
                                            {item.value}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </Card>
                    </div>
                </div>

                {/* Iconos sociales */}
                <div className="mb-12 flex justify-center gap-10">
                    {socialLinks.map((social, index) => {
                        const Icon = social.icon
                        return (
                            <a
                                key={index}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-all duration-200 hover:scale-125"
                            >
                                <Icon size={28} />
                            </a>
                        )
                    })}
                </div>

                {/* Formulario */}
                <div className="mb-12">
                    <h1 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
                        Contáctanos
                    </h1>

                    <Card className="p-6">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                    Nombre
                                </label>
                                <div className="relative">
                                    <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-4 w-4" />
                                    <Input
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        required
                                        placeholder="Tu nombre"
                                        className="pl-10"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                    Email
                                </label>
                                <div className="relative">
                                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-4 w-4" />
                                    <Input
                                        id="email"
                                        name="email"
                                        type="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        required
                                        placeholder="tu@email.com"
                                        className="pl-10"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                    Mensaje
                                </label>
                                <div className="relative">
                                    <MessageSquare className="absolute left-3 top-3 text-gray-400 h-4 w-4" />
                                    <Textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        required
                                        rows={6}
                                        placeholder="Escribe tu mensaje aquí..."
                                        className="pl-10 resize-none"
                                    />
                                </div>
                            </div>

                            {/* Mensaje de error (opcional) */}
                            {status.type === 'error' && (
                                <div className="text-red-600 dark:text-red-400 text-sm text-center py-2">
                                    {status.message}
                                </div>
                            )}

                            <Button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full sm:w-auto"
                            >
                                <Send className="mr-2 h-4 w-4" />
                                {isSubmitting ? 'Enviando...' : 'Enviar mensaje'}
                            </Button>
                        </form>
                    </Card>
                </div>
            </main>

            {/* Modal de éxito */}
            <Dialog open={isOpen} onOpenChange={setIsOpen}>
                <DialogContent>
                    <div className="flex flex-col items-center justify-center py-6">
                        <div className="w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mb-4">
                            <svg className="w-8 h-8 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                        <DialogTitle className="text-xl font-semibold mb-2">
                            ¡Mensaje Enviado!
                        </DialogTitle>
                        <DialogDescription className="text-center mb-6">
                            Gracias por contactarme.<br />
                            Te responderé lo antes posible.
                        </DialogDescription>
                        <Button
                            onClick={() => setIsOpen(false)}
                            variant="outline"
                        >
                            Cerrar
                        </Button>
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default Contact