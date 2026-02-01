'use client'

import React from 'react'
import { DETAILS } from '@/constants/constants'

const Location = () => {
  const entries = Object.entries(DETAILS) as Array<[string, string | number]>

  return (
    <div className="pt-5 pb-2">
      <h3 className="
        mb-3 text-xs font-semibold uppercase tracking-wider 
        text-[#8b949e]
      ">
        Detalles
      </h3>

      <dl className="grid grid-cols-[auto,1fr] gap-x-6 gap-y-2.5 text-sm">
        {entries.map(([key, value]) => (
          <React.Fragment key={key}>
            <dt className="
              font-medium text-[#c9d1d9] 
              capitalize whitespace-nowrap
            ">
              {key}
            </dt>
            <dd className="
              text-[#8b949e] 
              text-right sm:text-left
            ">
              {value}
            </dd>
          </React.Fragment>
        ))}
      </dl>
    </div>
  )
}

export default Location