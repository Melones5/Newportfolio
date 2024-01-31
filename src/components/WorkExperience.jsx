import React from 'react'

const WorkExperience = () => {
  return (
    <div className='pt-8'>
      <h2 className='text-lg font-raleway font-bold text-primary-yellow'>Experiencia Laboral</h2>
      {/* <div className='flex flex-col space-y-1.5 pt-2'> */}
        <div className='flex items-center justify-between gap-x-2 pt-2'>
          <h3 className='text-base inline-flex items-center justify-center font-lato font-semibold leading-none dark:text-white'>Red Nube</h3>          
          <div className='text-base tabular-nums font-inter text-gray-600 dark:text-darkText'>
          Jul 2023 - Oct 2023
          </div>
        </div>
      {/* </div> */}
      <h6 className='text-sm tabular-nums font-inter pt-2 dark:text-darkText'>Pasantía en el Área de Producción, Municipalidad de Concepción del Uruguay</h6>
      <div>
        <p className='pt-2 text-xs font-inter text-pretty text-gray-600 dark:text-darkText'>Colaboré activamente en el área de producción de la
          Municipalidad de Concepción del Uruguay, trabajando
          junto a compañeros en la recolección de información
          sobre novedades referidas a proyectos que contribuyan al
          desarrollo de los negocios locales. Además, desarrollé una
          página web que centraliza esta información y permite a las
          personas de la ciudad acceder a ella de forma fácil y sencilla.</p>
      </div>
      <div className='flex flex-col space-y-1.5 pt-8'>
        <div className='flex items-center justify-between gap-x-2 pt-2'>
          <h3 className='text-base inline-flex items-center justify-center font-lato font-semibold leading-none dark:text-white'>Rental Store</h3>
          <div className='text-base tabular-nums font-inter text-gray-600 dark:text-darkText'>
            Ago 2022 - Feb 2023
          </div>
        </div>
      </div>
      <h6 className='text-sm tabular-nums font-inter pt-2 dark:text-darkText'>Proyecto Final - Taller de Integración - UADER FCYT</h6>
      <div>
        <p className='pt-2 text-xs font-inter text-pretty text-gray-600 dark:text-darkText'>Desarrollé una tienda online de alquiler de productos para motivos vacacionales, deportivos, de camping, de reparación hogareña (herramientas) entre otros.</p>
        <p className='pt-2 text-xs font-inter text-pretty text-gray-600 dark:text-darkText'>Esta aplicación está desarrollada haciendo uso de diferentes
          tecnologías, como por ejemplo del lado del back-end, se
          utilizó nodejs con librerías tales como Express js, node-
          cron, Nodemailer. En la parte del front-end se utilizó React,
          Bootstrap, Antdesing y PrimeReact; y así como también se
          hizo uso de una base de datos relacional en PostgreSQL; se
          utilizó Firebase para hacer la autenticación de usuarios y
          Mercadopago como método de pago para alquiler de productos.</p>
      </div>
    </div>
  )
}

export default WorkExperience