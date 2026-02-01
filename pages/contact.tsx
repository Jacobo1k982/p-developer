'use client'

import React, { useState } from 'react'
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

    const FORMSPREE_FORM_ID = 'maqjypkp'

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))

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
        <div className="min-h-screen flex flex-col bg-[#0d1117]">
            <main className="flex-1 px-4 py-8 max-w-4xl mx-auto w-full">
                {/* Información de contacto */}
                <div className="mb-12">
                    <h1 className="text-2xl font-semibold text-[#c9d1d9] mb-6">
                        Información de contacto
                    </h1>

                    <div className="grid md:grid-cols-2 gap-6">
                        <Card className="p-6 bg-[#161b22] border-[#30363d]">
                            <div className="space-y-4">
                                {contactInfo.map((item, index) => (
                                    <div key={index} className="flex justify-between items-center">
                                        <span className="text-sm font-medium text-[#8b949e]">
                                            {item.label}
                                        </span>
                                        <span className="text-sm text-[#c9d1d9]">
                                            {item.value}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </Card>

                        <Card className="p-6 bg-[#161b22] border-[#30363d]">
                            <div className="space-y-4">
                                {contactDetails.map((item, index) => (
                                    <div key={index} className="flex justify-between items-center">
                                        <span className="text-sm font-medium text-[#8b949e]">
                                            {item.label}
                                        </span>
                                        <span className="text-sm text-[#c9d1d9]">
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
                                className="text-[#8b949e] hover:text-[#c9d1d9] transition-all duration-200 hover:scale-125"
                            >
                                <Icon size={28} />
                            </a>
                        )
                    })}
                </div>

                {/* Formulario */}
                <div className="mb-12">
                    <h1 className="text-2xl font-semibold text-[#c9d1d9] mb-6">
                        Contáctanos
                    </h1>

                    <Card className="p-6 bg-[#161b22] border-[#30363d]">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-sm font-medium text-[#8b949e]">
                                    Nombre
                                </label>
                                <div className="relative">
                                    <User className="absolute left-3 top-1/2 -translate-y-1/2 text-[#8b949e] h-4 w-4" />
                                    <Input
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        required
                                        placeholder="Tu nombre"
                                        className="pl-10 bg-[#0d1117] border-[#30363d] text-[#c9d1d9] placeholder:text-[#8b949e]"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium text-[#8b949e]">
                                    Email
                                </label>
                                <div className="relative">
                                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-[#8b949e] h-4 w-4" />
                                    <Input
                                        id="email"
                                        name="email"
                                        type="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        required
                                        placeholder="tu@email.com"
                                        className="pl-10 bg-[#0d1117] border-[#30363d] text-[#c9d1d9] placeholder:text-[#8b949e]"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium text-[#8b949e]">
                                    Mensaje
                                </label>
                                <div className="relative">
                                    <MessageSquare className="absolute left-3 top-3 text-[#8b949e] h-4 w-4" />
                                    <Textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        required
                                        rows={6}
                                        placeholder="Escribe tu mensaje aquí..."
                                        className="pl-10 resize-none bg-[#0d1117] border-[#30363d] text-[#c9d1d9] placeholder:text-[#8b949e]"
                                    />
                                </div>
                            </div>

                            {/* Mensaje de error */}
                            {status.type === 'error' && (
                                <div className="text-red-400 text-sm text-center py-2">
                                    {status.message}
                                </div>
                            )}

                            <Button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full sm:w-auto bg-[#58a6ff] hover:bg-[#79c0ff] text-white"
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
                <DialogContent className="bg-[#161b22] border-[#30363d] text-[#c9d1d9]">
                    <div className="flex flex-col items-center justify-center py-6">
                        <div className="w-16 h-16 rounded-full bg-[#1a2e22] flex items-center justify-center mb-4">
                            <svg className="w-8 h-8 text-[#86efac]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                        <DialogTitle className="text-xl font-semibold mb-2">
                            ¡Mensaje Enviado!
                        </DialogTitle>
                        <DialogDescription className="text-center mb-6 text-[#8b949e]">
                            Gracias por contactarme.<br />
                            Te responderé lo antes posible.
                        </DialogDescription>
                        <Button
                            onClick={() => setIsOpen(false)}
                            variant="outline"
                            className="border-[#58a6ff] text-[#58a6ff] hover:bg-[#58a6ff]/10"
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