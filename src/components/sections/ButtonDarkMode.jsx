import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

const ButtonDarkMode = () => {

  const [theme, setTheme] = useState(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return "dark"
    }
    return "light"
  })

  useEffect(() => {
    if (theme === "dark") {
      document.querySelector('html').classList.add('dark')
    } else {
      document.querySelector('html').classList.remove('dark')
    }
  }, [theme])

  const handleChangeTheme = () => {
    setTheme(prevTheme => prevTheme === "light" ? "dark" : "light")
  }


  return (
    <div>
      <button
        className="fixed top-5 right-5 p-2 w-12 h-12 rounded-2xl dark:bg-text2 bg-textDark2 text-text dark:text-textDark dark:stroke-textDark2 stroke-text2 border-x-[1px] border-bMain dark:border-bMainDark" onClick={handleChangeTheme}>
          {theme === 'dark' ? <FontAwesomeIcon icon={faSun} className='fa-lg'/> : <FontAwesomeIcon icon={faMoon} className='fa-lg'/> }        
      </button>
    </div >
  )
}

export default ButtonDarkMode