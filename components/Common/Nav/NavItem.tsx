import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

interface NavItemProps {
    NavIcon: React.ReactNode
    NavText: string
    NavRoute: string
    setIsOpen: (isOpen: boolean) => void
}

const NavItem = ({ NavIcon, NavText, NavRoute, setIsOpen }: NavItemProps) => {
    const pathname = usePathname()
    const isActive = pathname === NavRoute

    const baseClasses = "flex items-center px-3 py-2 font-medium text-sm transition-colors rounded-md"
    const activeClasses = "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100"
    const inactiveClasses = "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800"

    return (
        <Link
            onClick={(e) => setIsOpen(false)}
            href={NavRoute}
            className={`${baseClasses} ${isActive ? activeClasses : inactiveClasses}`}
        >
            <span className="mr-3">{NavIcon}</span>
            <span>{NavText}</span>
        </Link>
    )
}

export default NavItem