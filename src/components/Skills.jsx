import React from 'react'
import SkillsAnimated from "./SkillsAnimated"

const Skills = () => {
  return (
    <div className=' h-98 w-full'>
      <div className="mt-20 px-24 text-pink-main text-3xl">Skills I've gathered so far...</div>
      <div className='w-full flex justify-center'>
        <SkillsAnimated/>
      </div>
    </div>
  )
}

export default Skills
