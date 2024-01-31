import React from 'react'
import skillList from '../api/skills.js'


const Skills = () => {

  return (
    <div className='pt-8'>
      <h2 className='text-lg font-raleway font-bold text-primary-yellow'>Conocimientos</h2>
      <div className='flex flex-col pt-2'>
        <div className='flex flex-wrap gap-1 justify-start'>
          {skillList.map((skill) =>
            <span className='inline-flex items-center rounded-md px-2 py-1 text-sm font-medium text-white bg-seconday-blue font-raleway' key={skill.id}>{skill.nombre}</span>
          )}         
        </div>
      </div>
      <h2 className='text-lg font-raleway font-bold text-primary-yellow pt-8'>Habilidades</h2>
      <div className='pt-2'>
        <ul className='list-disc pl-4 font-lato text-gray-600 dark:text-darkText'>
          <li>Comunicación oral y escrita</li>
          <li>Trabajo en equipo</li>
          <li>Proactividad</li>
          <li>Entusiasta</li>
          <li>Conocimiento informático</li>
          <li>Flexibilidad</li>
          <li>Creatividad e ingenio</li>
        </ul>
      </div>
    </div>
  )
}

export default Skills