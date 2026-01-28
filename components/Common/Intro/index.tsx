import Link from 'next/link';
import { FaDownload, FaGithub, FaLinkedin } from 'react-icons/fa';
import Contact from '@/components/Common/Intro/Contact';
import Download from '@/components/Common/Intro/Download';
import Languages from '@/components/Common/Intro/Languages';
import Location from '@/components/Common/Intro/Location';
import Tools from '@/components/Common/Intro/Tools';
import Skills from '@/components/Common/Intro/Skills';
import Image from 'next/image';
import { NAME, DESIGNATION, SOCIAL_LINKS } from '@/constants/constants';
import Jacobo from '@/public/images/hero.png';
import React from 'react';

const Intro: React.FC<{
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ isOpen, setIsOpen }) => {
  return (
    <>
      {/* Header fijo - estilo GitHub */}
      <div className="absolute top-2 inset-x-0 z-50 h-48 flex flex-col items-center justify-center bg-white dark:bg-[#0d1117] border-b border-gray-200 dark:border-[#30363d] px-4">
        <Image
          className="w-20 h-20 rounded-full border border-gray-300 dark:border-[#30363d]"
          src={Jacobo}
          alt="profile picture"
        />

        <div className="mt-3 text-center">
          <p className="text-base font-semibold text-gray-900 dark:text-[#c9d1d9]">
            {NAME}
          </p>
          <p className="text-sm text-gray-500 dark:text-[#8b949e] mt-1">
            {DESIGNATION}
          </p>
        </div>
      </div>

      {/* Contenido central - tarjetas tipo GitHub */}
      <div className="z-20 pt-48 pb-12 px-4 space-y-6 overflow-y-auto no-scrollbar bg-gray-50 dark:bg-[#0d1117]">
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
