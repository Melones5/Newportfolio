import React from 'react'

const Education = () => {
  return (
    <div className='pt-8'>
      <h2 className='text-lg font-raleway font-bold text-primary-yellow'>Educación</h2>
      <div className='flex flex-col space-y-1.5 pt-2'>
        <div className='flex items-center justify-between '>
          <h3 className='font-lato font-semibold leading-none dark:text-white'>UADER - FCG</h3>
          <div className='text-sm tabular-nums font-inter text-gray-600 dark:text-darkText'>
            Diciembre 2023
          </div>
        </div>
      </div>
      <div>
        <p className='text-sm font-inter text-pretty text-seconday-blue dark:seconday-blue-dark mt-2'>Técnico en Administración</p>
      </div>
      <div className='flex flex-col space-y-1.5 pt-8'>
        <div className='flex items-center justify-between '>
          <h3 className='font-lato font-semibold leading-none dark:text-white'>UADER - FCYT</h3>
          <div className='text-sm tabular-nums font-inter text-gray-600 dark:text-darkText'>
            Febrero 2023
          </div>
        </div>
      </div>
      <div>
        <p className='text-sm font-inter text-pretty text-seconday-blue dark:seconday-blue-dark mt-2'>Analista de Sistemas</p>
      </div>
      <div className='flex flex-col space-y-1.5 pt-8'>
        <div className='flex items-center justify-between'>
          <h3 className='font-lato font-semibold leading-none dark:text-white'>EET N°2 “Francisco Ramírez”</h3>
          <div className='text-sm  font-inter tabular-nums text-gray-600 dark:text-darkText'>
            Diciembre 2014
          </div>
        </div>
      </div>
      <div>
        <p className='text-sm font-inter text-pretty text-seconday-blue dark:seconday-blue-dark mt-2'>Técnico en Electricidad con Orientación Electrónica Industrial.</p>
      </div>
    </div>
  )
}

export default Education