import React, { useState, useEffect } from 'react'

function Footer() {

  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    const interval = setInterval(() => {
      setYear(new Date().getFullYear());
    }, 1000);
  
    return () => {
      clearInterval(interval)
    }
  }, [])
  

  return (
    <div className='pt-8 h-[200px] flex justify-center items-end '>
      <p className='text-center font-lato font-bold text-md dark:text-[#d5d5d6]'>© {year} Alexis Joel Santos. 👋.</p>
    </div>
  )
}

export default Footer