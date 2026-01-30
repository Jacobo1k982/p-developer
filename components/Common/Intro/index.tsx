import Link from 'next/link';
import { FaDownload, FaGithub, FaLinkedin } from 'react-icons/fa';
import Contact from '@/components/Common/Intro/Contact';
import Download from '@/components/Download';
import Languages from '@/components/Common/Intro/Languages';
import Location from '@/components/Common/Intro/Location';
import Tools from '@/components/Common/Intro/Tools';
import Skills from '@/components/Common/Intro/Skills';
import Image from 'next/image';
import { NAME, DESIGNATION, SOCIAL_LINKS } from '@/constants/constants';
import React from 'react';

const Intro: React.FC<{
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ isOpen, setIsOpen }) => {
  return (
    <>
      {/* Header fijo */}
      <div className="
  absolute top-0 inset-x-0 z-50
  h-60
  flex flex-col items-center justify-center
  bg-[#0d1117]
  border-b border-[#30363d]
  px-5
">
        <div className="flex flex-col items-center">
          <Image
            className="
        w-24 h-24 rounded-full
        border-4 border-[#161b22]
        ring-1 ring-[#30363d]/70
        object-cover
        shadow-md
      "
            src="/hero2.png"           // ← cambio clave
            alt={`${NAME} profile`}
            width={96}
            height={96}
            priority                         // ayuda a que cargue rápido
          />

          <div className="mt-3 text-center">
            <p className="text-lg font-semibold text-[#c9d1d9]">
              {NAME}
            </p>
            <p className="text-xs text-[#8b949e] mt-0.5">
              {DESIGNATION}
            </p>
          </div>
        </div>
      </div>

      {/* Contenido central - tarjetas tipo GitHub */}
      <div className="z-20 pt-60 pb-12 px-4 space-y-6 overflow-y-auto no-scrollbar bg-gray-50 dark:bg-[#0d1117]">
        <div className="space-y-6 divide-y divide-gray-200 dark:divide-[#30363d]">
          <Location />
          <Languages />
          <Skills />
          <Tools />
          <Contact />
          <Download icon={<FaDownload />} />
        </div>
      </div>

      {/* Footer fijo - enlaces sociales estilo GitHub */}
      <div className="absolute bottom-0 inset-x-0 z-50 h-12 flex items-center justify-center space-x-6 bg-white dark:bg-[#0d1117] border-t border-gray-200 dark:border-[#30363d] text-gray-600 dark:text-[#8b949e] text-xl">
        <Link
          href={SOCIAL_LINKS.GITHUB}
          target="_blank"
          rel="noreferrer"
          className="hover:text-black dark:hover:text-white transition-colors"
        >
          <FaGithub />
        </Link>

        <Link
          href={SOCIAL_LINKS.LINKEDIN}
          target="_blank"
          rel="noreferrer"
          className="hover:text-[#0a66c2] transition-colors"
        >
          <FaLinkedin />
        </Link>
      </div>
    </>
  );
};

export default Intro;
