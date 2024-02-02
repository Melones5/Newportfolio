import React from 'react'

const About = () => {
  return (
    <div className='w-full pt-8'>
      <h2 className='text-lg font-raleway font-bold text-primary-yellow'>Sobre mí</h2>
      <p className='pt-2 text-sm font-inter text-neutralText dark:text-darkText'>
        Mi nombre es <span className='font-bold'>Alexis</span>. </p>
      <p className='pt-2 text-sm font-inter text-neutralText dark:text-darkText'>Estoy graduado de la carrera Analista de Sistemas y también soy técnico en Administracion.
        Actualmente, me encuentro en búsqueda de mi primer experiencia laboral que me permita poner en práctica mis conocimientos y habilidades,
        así como seguir aprendiendo y creciendo profesionalmente. </p>
      <p className='pt-2 text-sm font-inter text-neutralText dark:text-darkText'>Mi objetivo es seguir capacitándome y adquiriendo conocimientos ya sea en el sector
        <span className='font-bold'> IT</span> o en el <span className='font-bold'>administrativo.</span>
      </p>
    </div>
  )
}

export default About