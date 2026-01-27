import { useState } from 'react';
import BannerLayout from '../components/Common/BannerLayout';
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiMail, HiUser } from 'react-icons/hi'
import { BsChatTextFill } from 'react-icons/bs'
import Footer from '../components/Footer';
import { Modal, message } from 'antd';

const Contact = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })

    // Reemplaza 'YOUR_FORM_ID' con tu ID de formulario de Formspree
    const FORMSPREE_FORM_ID = 'YOUR_FORM_ID'

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsSubmitting(true)

        try {
            const response = await fetch(`https://formspree.io/f/${FORMSPREE_FORM_ID}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(formData)
            })

            if (response.ok) {
                // Mostrar mensaje de éxito
                message.success('¡Mensaje enviado con éxito!')
                // Limpiar formulario
                setFormData({
                    name: '',
                    email: '',
                    message: ''
                })
                // Abrir modal de éxito
                setIsOpen(true)
            } else {
                // Mostrar mensaje de error
                message.error('Hubo un error al enviar el mensaje. Inténtalo de nuevo.')
            }
        } catch (error) {
            console.error('Error al enviar el formulario:', error)
            message.error('Hubo un error al enviar el mensaje. Inténtalo de nuevo.')
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <BannerLayout>
            <div className="px-4 py-2">
                <div className="my-6 text-Snow flex flex-col gap-y-5">
                    <h1 className='text-lg font-bold'>Información de contacto</h1>
                    <div className="flex flex-col md:flex-row items-center gap-5 text-xs">
                        <div className="card_stylings w-full md:w-1/2 p-5 md:p-6 lg:p-8 flex flex-col gap-y-4">
                            <div className="flex justify-between items-center">
                                <span className='md:text-base'>País:</span>
                                <span className='text-LightGray md:text-sm'>Costa Rica</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className='md:text-base'>Ciudad:</span>
                                <span className='text-LightGray md:text-sm'>San José</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className='md:text-base'>Compañía:</span>
                                <span className='text-LightGray md:text-sm'>jacana-dev</span>
                            </div>
                        </div>
                        <div className="card_stylings rounded-xl w-full md:w-1/2 p-5 md:p-6 lg:p-8 flex flex-col gap-y-4">
                            <div className="flex justify-between items-center">
                                <span className='md:text-base'>Email:</span>
                                <span className='text-LightGray text-sm'>askmecr@gmail.com</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className='md:text-base'>Linkedin:</span>
                                <span className='text-LightGray text-sm'>jacobo-gutierrez</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className='md:text-base'>Teléfono:</span>
                                <span className='text-LightGray text-sm'>+506 64541700</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="h-16 w-full card_stylings text-xl sm:text-3xl flex gap-x-8 sm:gap-x-16 items-center justify-center text-Snow">
                    <a className='hover:scale-125 ease-in-out duration-700' href="" target='_blank' rel="noreferrer"><HiMail /></a>
                    <a className='hover:scale-125 ease-in-out duration-700' href="https://github.com/Jacobo1k982" target='_blank' rel="noreferrer"><FaGithub /></a>
                    <a className='hover:scale-125 ease-in-out duration-700' href="https://www.linkedin.com/in/jacobo-gutierrez/" target='_blank' rel="noreferrer"><FaLinkedin /></a>
                </div>

                <div className="my-12 w-full h-auto text-Snow">
                    <h1 className='text-lg font-bold'>Contáctanos</h1>
                    <div className="mt-4 py-8 px-8 bg-EveningBlack rounded-xl text-sm">
                        <form onSubmit={handleSubmit}>
                            <div className="flex flex-col w-full">
                                <div className="userIcon relative mb-6">
                                    <div id="icon" className="absolute inset-y-0 left-0 flex items-center pl-3 text-xl pointer-events-none">
                                        <HiUser />
                                    </div>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        required
                                        className="input_stylings"
                                        placeholder="Nombre"
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col w-full">
                                <div className="mailIcon relative mb-6">
                                    <div id="icon" className="absolute inset-y-0 left-0 flex items-center text-xl pl-3 pointer-events-none">
                                        <HiMail />
                                    </div>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        required
                                        className="input_stylings"
                                        placeholder="Email"
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col w-full">
                                <div className="textIcon relative mb-6">
                                    <div id="icon" className="absolute top-3 left-0 flex items-center text-lg pl-3 pointer-events-none">
                                        <BsChatTextFill />
                                    </div>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        required
                                        rows={6}
                                        cols={50}
                                        className="input_stylings"
                                        placeholder="Mensaje"
                                    />
                                </div>
                            </div>

                            <div className="my-4">
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className={`button ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                                >
                                    {isSubmitting ? 'ENVIANDO...' : 'ENVIAR MENSAJE'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            {/* Modal de éxito */}
            <Modal
                className='card_stylings backdrop-blur-3xl drop-shadow-2xl'
                centered
                open={isOpen}
                footer={null}
                closable={true}
                onCancel={() => setIsOpen(false)}
            >
                <div className='flex flex-col items-center justify-center py-4'>
                    <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mb-4">
                        <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                    </div>
                    <h1 className='text-white font-bold text-xl mb-2'>¡Mensaje Enviado!</h1>
                    <p className='text-gray-300 text-center'>Gracias por contactarme. Te responderé lo antes posible.</p>
                    <button
                        onClick={() => setIsOpen(false)}
                        className="mt-4 px-6 py-2 bg-green-500/20 hover:bg-green-500/30 text-white rounded-lg transition-colors duration-200"
                    >
                        Cerrar
                    </button>
                </div>
            </Modal>
            <Footer />
        </BannerLayout>
    )
}

export default Contact