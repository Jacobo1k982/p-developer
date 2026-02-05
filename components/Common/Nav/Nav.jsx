'use client';

import { ImCross } from 'react-icons/im';
import { FiAward } from 'react-icons/fi';
import { FaHandshake } from 'react-icons/fa';
import { ImHome } from 'react-icons/im';
import { HiIdentification } from 'react-icons/hi';

import NavItem from './NavItem';
import DrawerLayout from '../DrawerLayout';

const Nav = ({ setIsOpen, isOpen }) => {
    return (
        <DrawerLayout setIsOpen={setIsOpen} isOpen={isOpen}>
            <div
                className="
          fixed inset-y-0 right-0 z-50 
          w-72 lg:w-80 
          bg-gray-950/95 text-[#c9d1d9] 
          border-l border-[#30363d] border-t border-[#1fdf64]/20
          shadow-2xl
          flex flex-col
          antialiased backdrop-blur-xl
          transition-transform duration-300 ease-out
        "
            >
                {/* Header con botón cerrar */}
                <div className="flex items-center justify-between px-6 py-5 border-b border-[#30363d] bg-[#0d1117]/30">
                    <span className="text-sm font-bold uppercase tracking-widest text-gray-500">
                        Navegación
                    </span>
                    <button
                        onClick={() => setIsOpen(false)}
                        className="
              flex items-center justify-center
              w-8 h-8 rounded-full 
              text-gray-500 transition-all duration-300 
              hover:bg-red-500/10 hover:text-red-400
              hover:rotate-90
            "
                        aria-label="Cerrar menú"
                    >
                        <ImCross size={12} />
                    </button>
                </div>

                {/* Lista de navegación */}
                <nav className="flex-1 px-4 py-6 flex flex-col gap-2 overflow-y-auto no-scrollbar">
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

                {/* Footer */}
                <div className="px-6 py-5 text-xs text-center border-t border-[#30363d] bg-[#0d1117]/30">
                    <p className="text-gray-500">
                        © {new Date().getFullYear()} Desarrollado por{' '}
                        <span className="text-[#1fdf64] font-medium">Jacobo Gutiérrez</span>
                    </p>
                </div>
            </div>
        </DrawerLayout>
    );
};

export default Nav;