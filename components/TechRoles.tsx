'use client';

import React from 'react';
import { PORTFOLIO_CONFIG } from '@/components/constants/config';

const TechRoles = () => {
  // Acceso seguro a la lista de roles
  const roles = PORTFOLIO_CONFIG?.personal?.roles || [];

  // Evitamos renderizar la sección si no hay datos
  if (roles.length === 0) return null;

  return (
    <div className="flex flex-col gap-6">
      {/* Cabecera de la sección con acento verde */}
      <div className="flex items-center gap-4">
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#1fdf64]">
          Stack Tecnológico
        </span>
        <div className="h-px flex-1 bg-gradient-to-r from-[#1fdf64]/20 to-transparent" />
      </div>

      {/* Lista de Roles/Tags */}
      <div className="flex flex-wrap gap-2 md:gap-3">
        {roles.map((role) => (
          <span
            key={role}
            className="
              px-3 py-1.5 rounded-md
              bg-[#161b22] border border-white/5
              text-[11px] md:text-xs font-medium text-gray-400
              hover:text-[#1fdf64] hover:border-[#1fdf64]/30 hover:bg-[#1fdf64]/5
              transition-all duration-300 cursor-default
              shadow-sm
            "
          >
            {role}
          </span>
        ))}
      </div>
    </div>
  );
};

export default TechRoles;