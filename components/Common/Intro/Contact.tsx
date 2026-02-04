'use client';

import React from 'react';
import { Mail, PhoneCall, MapPin } from 'lucide-react';
import { CONTACTS, PORTFOLIO_CONFIG } from '@/components/constants/config';

const Contact = () => {
  const location = PORTFOLIO_CONFIG?.details?.location || 'Lourdes, San Pedro, Montes de Oca';

  return (
    <div className="flex flex-col gap-4">
      {/* EMAIL */}
      <div className="group flex items-center gap-4 p-2 -mx-2 rounded-xl transition-all duration-300 hover:bg-white/5">
        <div className="relative flex-shrink-0 p-3 rounded-xl bg-gray-800/40 border border-gray-700/50 text-gray-400 transition-all duration-500 group-hover:border-[#1fdf64]/50 group-hover:bg-[#1fdf64]/10 group-hover:text-[#1fdf64] group-hover:shadow-[0_0_15px_rgba(29,223,100,0.2)]">
          <Mail size={18} strokeWidth={1.5} />
        </div>
        <div className="flex flex-col justify-center">
          <span className="text-[10px] font-bold uppercase tracking-[0.1em] text-gray-500 mb-0.5">
            Email
          </span>
          <a
            href={`mailto:${CONTACTS.email}`}
            className="text-sm font-medium text-gray-300 transition-colors duration-300 group-hover:text-white"
          >
            {CONTACTS.email}
          </a>
        </div>
      </div>

      {/* TELÉFONO */}
      <div className="group flex items-center gap-4 p-2 -mx-2 rounded-xl transition-all duration-300 hover:bg-white/5">
        <div className="relative flex-shrink-0 p-3 rounded-xl bg-gray-800/40 border border-gray-700/50 text-gray-400 transition-all duration-500 group-hover:border-[#1fdf64]/50 group-hover:bg-[#1fdf64]/10 group-hover:text-[#1fdf64] group-hover:shadow-[0_0_15px_rgba(29,223,100,0.2)]">
          <PhoneCall size={18} strokeWidth={1.5} />
        </div>
        <div className="flex flex-col justify-center">
          <span className="text-[10px] font-bold uppercase tracking-[0.1em] text-gray-500 mb-0.5">
            Móvil
          </span>
          <a
            href={`tel:${CONTACTS.phone.replace(/\s/g, '')}`}
            className="text-sm font-medium text-gray-300 transition-colors duration-300 group-hover:text-white"
          >
            {CONTACTS.phone}
          </a>
        </div>
      </div>

      {/* UBICACIÓN */}
      <div className="group flex items-center gap-4 p-2 -mx-2 rounded-xl transition-all duration-300 hover:bg-white/5">
        <div className="relative flex-shrink-0 p-3 rounded-xl bg-gray-800/40 border border-gray-700/50 text-gray-400 transition-all duration-500 group-hover:border-[#1fdf64]/50 group-hover:bg-[#1fdf64]/10 group-hover:text-[#1fdf64] group-hover:shadow-[0_0_15px_rgba(29,223,100,0.2)]">
          <MapPin size={18} strokeWidth={1.5} />
        </div>
        <div className="flex flex-col justify-center">
          <span className="text-[10px] font-bold uppercase tracking-[0.1em] text-gray-500 mb-0.5">
            Ubicación
          </span>
          <span className="text-sm font-medium text-gray-300 transition-colors duration-300 group-hover:text-white">
            {location}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Contact;