'use client'

import React from 'react'
import { CONTACTS } from '@/constants/constants'
import Link from 'next/link'
import { Mail, Phone } from 'lucide-react'

const Contact = () => {
  return (
    <div className="mt-6 md:mt-8 space-y-4">
      <div className="flex items-start gap-3">
        <Mail size={16} className="text-[#8b949e] mt-1 flex-shrink-0" />
        <div>
          <div className="text-xs font-semibold uppercase tracking-wide text-[#8b949e]">
            Email
          </div>
          <Link
            href={`mailto:${CONTACTS.EMAIL}`}
            className="
              text-sm text-[#c9d1d9] 
              hover:text-[#58a6ff] dark:hover:text-[#79c0ff] 
              transition-colors
              font-medium
            "
          >
            {CONTACTS.EMAIL}
          </Link>
        </div>
      </div>

      <div className="flex items-start gap-3">
        <Phone size={16} className="text-[#8b949e] mt-1 flex-shrink-0" />
        <div>
          <div className="text-xs font-semibold uppercase tracking-wide text-[#8b949e]">
            Phone
          </div>
          <div className="text-sm text-[#c9d1d9] font-medium">
            {CONTACTS.PHONE}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact