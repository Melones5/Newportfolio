import React from 'react'
import CardProject from './CardProject'
import proyectos from '../api/data.js'

const Projects = () => {

  return (
    <div>
      <h2 className='text-lg font-raleway font-bold text-primary-yellow pt-8'>Proyectos</h2>
      <div className='grid grid-cols-[repeat(auto-fill,minmax(330px,1fr))] gap-5 pt-2'>
        {proyectos.map((proyecto) =>
          <CardProject key={proyecto.id} proyecto={proyecto}/>
        )}             
      </div>
    </div>
  )
}

export default Projects