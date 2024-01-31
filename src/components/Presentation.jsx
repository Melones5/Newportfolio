import React from 'react'
import PhotoPerfil from '../assets/perfil.jpeg'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEarthAmericas, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons/faLinkedin'
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub'



const Presentation = () => {
  return (
    <div className='w-full'>
      <div className='flex items-center justify-between'>
        <div>
          <h1 className='font-lato font-bold text-2xl dark:text-white'>Alexis Joel Santos</h1>
          <p className='text-sm font-inter text-gray-600 dark:text-darkText'>Técnico en Administración, con experiencia en el sector IT</p>
          <p className='text-sm font-inter text-gray-600 dark:text-darkText'> <FontAwesomeIcon icon={faEarthAmericas} /> Concepción del Uruguay, Entre Ríos</p>
          <p className='text-sm font-inter text-gray-600 dark:text-darkText'> <FontAwesomeIcon icon={faEnvelope}/> E-mail: alexissantos1496@gmail.com</p>
          <p className='text-sm font-inter text-gray-600 dark:text-darkText'> <FontAwesomeIcon icon={faPhone} /> Teléfono: 3442-570829</p>          
          <div className='flex gap-1 pt-1'>
            <a className='text-sm font-inter text-gray-600 dark:text-darkText' href="https://www.linkedin.com/in/alexis-joel-santos" target='blank'><FontAwesomeIcon icon={faLinkedin} /></a>
            <a className='text-sm font-inter text-gray-600 dark:text-darkText' href="https://github.com/Melones5" target='blank'><FontAwesomeIcon icon={faGithub}/></a>            
          </div>
        </div>
        <div className='size-24'>
          <img className='rounded-2xl' src={PhotoPerfil} alt="Alexis Joel Santos" />
        </div>
      </div>
    </div>
  )
}

export default Presentation