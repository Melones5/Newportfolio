import React from 'react'
import skillList from '../../api/skills.js'


const Skills = () => {

  return (
    <div className='pt-8'>
      <h2 className='text-lg font-raleway font-bold text-primary-yellow'>Conocimientos</h2>
      <div className='flex flex-col pt-2'>
        <div className='flex flex-wrap gap-1 justify-start cursor-auto'>
          {skillList.map((skill) =>
            <span className='inline-flex items-center rounded-md px-2 py-1 text-sm font-bold text-neutralText bg-gray-200 font-raleway hover:bg-seconday-blue-dark hover:text-white hover:font-bold' key={skill.id}>
              {skill.nombre}
            </span>
          )}
        </div>
      </div>
      <div className='pt-8'>
        <h2 className='text-lg font-raleway font-bold text-primary-yellow'>Idiomas</h2>
        <div className='pt-2'>
          <ul className='list-disc pl-4 font-lato text-neutralText dark:text-darkText'>
            <li>Español: nativo.</li>
            <li>Inglés: Upper Intermediate (B2) Oxford Institute.</li>
            <li>Portugués: Básico (A1).</li>
          </ul>
        </div>
      </div>
      <h2 className='text-lg font-raleway font-bold text-primary-yellow pt-8'>Habilidades</h2>
      <div className='pt-2'>
        <ul className='list-disc pl-4 font-lato text-neutralText dark:text-darkText'>
          <li>Comunicación oral y escrita</li>
          <li>Trabajo en equipo</li>
          <li>Proactividad</li>
          <li>Iniciativa</li>
          <li>Conocimiento informático</li>
          <li>Flexibilidad</li>
          <li>Creatividad e ingenio</li>
        </ul>
      </div>
      <h2 className='text-lg font-raleway font-bold text-primary-yellow pt-8'>Intereses</h2>
      <div className='pt-2'>
        <ul className='list-disc pl-4 font-lato text-neutralText dark:text-darkText'>
          <li>Análisis de datos</li>
          <li>Tecnología</li>
          <li>Marketing</li>
          <li>Administración</li>
        </ul>
      </div>
    </div>
  )
}

export default Skills