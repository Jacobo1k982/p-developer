import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

interface NavItemProps {
    NavIcon: React.ReactNode;
    NavText: string;
    NavRoute: string;
    setIsOpen: (isOpen: boolean) => void;
}

const NavItem = ({ NavIcon, NavText, NavRoute, setIsOpen }: NavItemProps) => {
    const pathname = usePathname();
    const isActive = pathname === NavRoute;

    // Estilos Base
    const baseClasses =
        'relative w-full flex items-center gap-4 px-5 py-3.5 rounded-lg transition-all duration-300 ease-in-out group';

    // Estilo Activo: Borde izquierdo verde, texto verde, fondo muy sutil
    const activeClasses =
        'text-[#1fdf64] bg-[#1fdf64]/5 border-l-2 border-[#1fdf64] shadow-[0_0_10px_rgba(29,223,100,0.1)]';

    // Estilo Inactivo: Texto gris, hover blanco, borde transparente que se ilumina
    const inactiveClasses =
        'text-gray-400 border-l-2 border-transparent hover:text-white hover:bg-white/5 hover:border-gray-700';

    return (
        <Link
            onClick={(e) => setIsOpen(false)}
            href={NavRoute}
            className={`${baseClasses} ${isActive ? activeClasses : inactiveClasses}`}
        >
            {/* Icono con animación de escala al hacer hover */}
            <span className="transition-transform duration-300 group-hover:scale-110">
                {NavIcon}
            </span>

            {/* Texto con tracking amplio para elegancia */}
            <span className="font-medium tracking-wide">
                {NavText}
            </span>
        </Link>
    );
};

export default NavItem;