'use client'

import React from 'react'
import { DETAILS } from '@/constants/constants'
import { getObjectKeys } from '@/utils/utils'

const Location = () => {
  const keys = getObjectKeys(DETAILS) as Array<keyof typeof DETAILS>

  return (
    <div className='flex flex-col space-y-1 pt-6'>
      {keys.map((key, index) => {
        const label = String(key)
        const value = DETAILS[key]
        return (
          <div
            key={index}
            className='flex items-center justify-between py-2 border-b border-gray-200 dark:border-gray-700 last:border-0'
          >
            <span className='text-sm text-gray-900 dark:text-gray-100 font-medium min-w-[80px]'>
              {label}
            </span>
            <span className='text-sm text-gray-600 dark:text-gray-400 text-right'>
              {value}
            </span>
          </div>
        )
      })}
    </div>
  )
}

export default Location