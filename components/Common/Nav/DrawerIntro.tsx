'use client'

import React, { Dispatch, SetStateAction } from 'react'
import DrawerLayout from '@/components/Common/DrawerLayout'
import Intro from '@/components/Common/Intro/index'

interface DrawerIntroProps {
    setIsOpen: Dispatch<SetStateAction<boolean>>
    isOpen: boolean
}

export const DrawerIntro = ({ setIsOpen, isOpen }: DrawerIntroProps) => {
    return (
        <DrawerLayout setIsOpen={setIsOpen} isOpen={isOpen}>
            <Intro isOpen={isOpen} setIsOpen={setIsOpen} />
        </DrawerLayout>
    )
}
