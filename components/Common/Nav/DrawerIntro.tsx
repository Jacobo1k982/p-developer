'use client'

import React from 'react'
import DrawerLayout from '@/components/Common/DrawerLayout'
import Intro from '@/components/Common/Intro/index'

interface DrawerIntroProps {
    setIsOpen: (isOpen: boolean) => void
    isOpen: boolean
}

export const DrawerIntro = ({ setIsOpen, isOpen }: DrawerIntroProps) => {
    return (
        <DrawerLayout setIsOpen={setIsOpen} isOpen={isOpen}>
            <Intro />
        </DrawerLayout>
    )
}
