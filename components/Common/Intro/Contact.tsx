import React from 'react'
import { CONTACTS } from '@/constants/constants'
import Link from 'next/link'
import { Mail, Phone } from 'lucide-react'

const Contact = () => {
  return (
    <div className="mt-8">
      <div className="rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 px-6 py-5 shadow-sm">
        {/* Email */}
        <div className="flex items-start gap-3">
          <div className="mt-1 text-gray-600 dark:text-gray-400">
            <Mail size={18} />
          </div>

          <div className="flex flex-col">
            <span className="text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
              Correo electrónico
            </span>

            <Link
              href={`mailto:${CONTACTS.EMAIL}`}
              className="mt-1 text-sm text-gray-900 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
            >
              {CONTACTS.EMAIL}
            </Link>
          </div>
        </div>

        {/* Divider */}
        <div className="my-4 border-t border-gray-200 dark:border-gray-700" />

        {/* Teléfono */}
        <div className="flex items-start gap-3">
          <div className="mt-1 text-gray-600 dark:text-gray-400">
            <Phone size={18} />
          </div>

          <div className="flex flex-col">
            <span className="text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
              Teléfono
            </span>

            <span className="mt-1 text-sm text-gray-900 dark:text-gray-100">
              {CONTACTS.PHONE}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact