import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

const ButtonDarkMode = () => {

  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      window.document.documentElement.classList.add("dark");
      setIsDarkMode(true);
    }
  }, []);

  const handleClick = () => {
    if (isDarkMode) {
      window.document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      localStorage.setItem("theme", "dark");
      window.document.documentElement.classList.add("dark");
    }
    setIsDarkMode(!isDarkMode);
  };


  return (
    <div>
      <button
        className="fixed top-5 right-5 p-2 w-12 h-12 rounded-2xl dark:bg-text2 bg-textDark2 text-text dark:text-textDark dark:stroke-textDark2 stroke-text2 border-x-[1px] border-bMain dark:border-bMainDark" onClick={handleClick}>
        {isDarkMode ?
          <FontAwesomeIcon icon={faSun} className='fa-lg' color='#f1c232'/>
          :
          <FontAwesomeIcon icon={faMoon} className='fa-lg' />
        }
      </button>
    </div >
  )
}

export default ButtonDarkMode