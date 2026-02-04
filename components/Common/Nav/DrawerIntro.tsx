'use client';

import React, { Dispatch, SetStateAction } from 'react';
import DrawerLayout from '@/components/Common/DrawerLayout';
import Intro from '@/components/Common/Intro/index';

interface DrawerIntroProps {
    isOpen: boolean;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export default function DrawerIntro({ isOpen, setIsOpen }: DrawerIntroProps) {
    return (
        <DrawerLayout isOpen={isOpen} setIsOpen={setIsOpen}>
            <Intro isOpen={isOpen} setIsOpen={setIsOpen} />
        </DrawerLayout>
    );
}