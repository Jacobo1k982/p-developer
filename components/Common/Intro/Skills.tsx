'use client'

import React from 'react'
import LinearBar from './LinearBar'
import { SKILLS } from '@/constants/constants'

const Skills = () => {
  return (
    <div className='flex flex-col space-y-1 pt-6'>
      <div className='flex flex-col gap-y-4'>
        <span className='text-[#c9d1d9] text-xs font-semibold uppercase tracking-wider'>
          Experiencia y competencias
        </span>
        <div className='flex flex-col space-y-4'>
          {SKILLS.map((skill, index) => {
            return (
              <LinearBar
                key={index}
                title={skill.title}
                percent={parseInt(skill.level)}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Skills