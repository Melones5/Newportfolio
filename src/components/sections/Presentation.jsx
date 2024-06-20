import React from 'react'
import PhotoPerfil from '../../assets/perfil.PNG'

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
          <p className='text-sm font-inter text-neutralText dark:text-darkText'>Analista de sistemas | Técnico en Administración | Estudiante de Licenciatura en Administración de Empresas</p>
          <p className='text-sm font-inter text-neutralText dark:text-darkText'> <FontAwesomeIcon icon={faEarthAmericas} className='pr-2 icon-hover'/>Concepción del Uruguay, Entre Ríos</p>
          <p className='text-sm font-inter text-neutralText dark:text-darkText'> <FontAwesomeIcon icon={faEnvelope} className='pr-2 icon-hover'/>alexissantos1496@gmail.com</p>
          <p className='text-sm font-inter text-neutralText dark:text-darkText'> <FontAwesomeIcon icon={faPhone} className='pr-2 icon-hover'/>3442-570829</p>          
          <div className='flex gap-1 pt-1'>
            <a className='text-sm font-inter text-neutralText dark:text-darkText' href="https://www.linkedin.com/in/alexis-joel-santos" target='blank'><FontAwesomeIcon icon={faLinkedin} className='pr-1 icon-hover'/></a>
            <a className='text-sm font-inter text-neutralText dark:text-darkText' href="https://github.com/Melones5" target='blank'><FontAwesomeIcon icon={faGithub} className='icon-hover'/></a>            
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