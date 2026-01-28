'use client';

import { ImCross } from 'react-icons/im'
import { FiAward } from 'react-icons/fi'
import { FaHandshake } from 'react-icons/fa'
import { ImHome } from 'react-icons/im'
import { HiIdentification } from 'react-icons/hi'
import NavItem from './NavItem'
import DrawerLayout from '../DrawerLayout'

const Nav = ({ setIsOpen, isOpen }) => {
    return (
        <DrawerLayout setIsOpen={setIsOpen} isOpen={isOpen}>
            <div
                className="
          fixed inset-y-0 right-0 z-50 
          w-72 lg:w-80 
          bg-[#161b22] text-[#c9d1d9] 
          border-l border-[#30363d]
          shadow-lg
          flex flex-col
          antialiased
        "
            >
                {/* Header con botón cerrar */}
                <div className="flex items-center justify-between px-5 py-3 border-b border-[#30363d]">
                    <span className="text-sm font-semibold text-[#8b949e]">Menú</span>
                    <button
                        onClick={() => setIsOpen(false)}
                        className="
              p-1.5 rounded-md 
              text-[#8b949e] hover:text-[#c9d1d9] 
              hover:bg-[#21262d] 
              transition-colors duration-200
              cursor-pointer
            "
                        aria-label="Cerrar menú"
                    >
                        <ImCross size={14} />
                    </button>
                </div>

                {/* Lista de navegación */}
                <nav className="flex-1 px-3 py-4 flex flex-col gap-1 overflow-y-auto">
                    <NavItem
                        setIsOpen={setIsOpen}
                        NavRoute="/"
                        NavIcon={<ImHome size={18} />}
                        NavText="Inicio"
                    />
                    <NavItem
                        setIsOpen={setIsOpen}
                        NavRoute="/contact"
                        NavIcon={<FaHandshake size={18} />}
                        NavText="Contacto"
                    />
                    <NavItem
                        setIsOpen={setIsOpen}
                        NavRoute="/background"
                        NavIcon={<HiIdentification size={18} />}
                        NavText="Portafolio"
                    />
                    <NavItem
                        setIsOpen={setIsOpen}
                        NavRoute="/portfolio"
                        NavIcon={<FiAward size={18} />}
                        NavText="Proyectos"
                    />
                </nav>

                {/* Opcional: footer pequeño */}
                <div className="px-5 py-4 text-xs text-[#484f58] border-t border-[#30363d]">
                    © {new Date().getFullYear()} Desarrollado por Jacobo Gutiérrez
                </div>
            </div>
        </DrawerLayout>
    )
}

export default Nav