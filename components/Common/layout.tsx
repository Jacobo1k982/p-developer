'use client';

import Intro from './Intro/index';
import Nav from './Nav/Nav';
import { FaBars, FaMousePointer } from 'react-icons/fa';
import { SlOptionsVertical } from 'react-icons/sl';
import { useState, ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [intro, setIntro] = useState(false);

  return (
    <div className="h-screen lg:p-[0.8rem] flex flex-col select-none font-sans antialiased bg-[#0d1117] text-[#c9d1d9]">
      {/* Mobile top bar - siempre dark */}
      <div className="lg:hidden">
        <div className="bg-gray-950/95 text-[#c9d1d9] w-full h-10 flex items-center justify-between px-2 border-b border-[#30363d]">
          <div className="icon flex items-center gap-x-2 cursor-pointer" onClick={() => setIntro(!intro)}>
            <span className="icon border-2 border-[#58a6ff] text-[#58a6ff] p-1 text-sm rounded-md">
              <SlOptionsVertical />
            </span>
            <div className="text-[#8b949e] absolute -right-1 -bottom-1">
              <FaMousePointer />
            </div>
          </div>
          <div className="icon flex items-center gap-x-2 cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
            <span className="icon border-2 border-[#58a6ff] text-[#58a6ff] p-1 text-sm rounded-md">
              <FaBars />
            </span>
          </div>
        </div>
      </div>

      <div className="flex relative h-full justify-between gap-x-3">
        {/* Sidebar izquierda (Intro) */}
        <div
          className={`
            w-64 h-screen left-0 lg:rounded-md -top-10 lg:top-0 lg:left-0 lg:h-full overflow-hidden 
            bg-[#17170d] shadow-lg z-50 lg:flex flex-col lg:relative 
            ${intro ? 'flex absolute' : 'hidden'}
          `}
        >
          <Intro isOpen={intro} setIsOpen={setIntro} />
        </div>

        {/* Overlay mobile */}
        {intro && (
          <div
            onClick={() => setIntro(false)}
            className="fixed top-0 left-0 w-full h-full bg-black/70 backdrop-blur-sm z-40 lg:hidden"
          />
        )}

        {/* Contenido principal */}
        <div
          className="
            w-full h-auto lg:w-9/12 shadow-lg bg-[#17150d] 
            relative overflow-auto overflow-x-hidden 
            scrollbar-thin scrollbar-thumb-gray-900 scrollbar-track-transparent 
            border border-gray-900 rounded-md
          "
        >
          {children}
        </div>

        {/* Right sidebar (Nav trigger) */}
        <div
          className="
            hidden lg:block lg:w-20 lg:relative bg-gray-950/95 shadow-lg 
            rounded-md overflow-hidden border border-gray-700
          "
        >
          <div
            onClick={() => setIsOpen(!isOpen)}
            className="
              bg-gray-900 text-[#58a6ff] hidden lg:flex items-center h-16 
              justify-center text-2xl cursor-pointer hover:bg-gray-800 
              transition-colors duration-200
            "
          >
            <span className="icon border-2 border-[#58a6ff] p-2 rounded-md">
              <FaBars />
            </span>
          </div>
          <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-90 flex items-center justify-center text-center text-sm text-[#484f58] font-bold tracking-widest">
            NavBar
          </span>
        </div>

        {/* Nav drawer */}
        <Nav isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </div>
  );
}