import React, { useEffect, useState } from 'react'

const ButtonDarkMode = () => {

  const [theme,setTheme] = useState(()=>{
    if (window.matchMedia('(prefers-color-scheme: dark)').matches){
      return "dark"
    }
    return "light"
  })

  useEffect(() =>{
    if (theme === "dark"){
      document.querySelector('html').classList.add('dark')
    }else{
      document.querySelector('html').classList.remove('dark')
    }
  },[theme])

  const handleChangeTheme = () => {
    setTheme(prevTheme => prevTheme === "light" ? "dark" : "light")
  }


  return (
    <div>
      <button      
        className="fixed top-5 right-5" onClick={handleChangeTheme}>
        <svg
          strokeWidth="2.21"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          className="p-2 w-12 h-12 rounded-2xl dark:bg-text2 bg-textDark2 text-text dark:text-textDark dark:stroke-textDark2 stroke-text2 border-x-[1px] border-bMain dark:border-bMainDark"
        >
          <path
            d="M12 18a6 6 0 100-12 6 6 0 000 12zM22 12h1M12 2V1M12 23v-1M20 20l-1-1M20 4l-1 1M4 20l1-1M4 4l1 1M1 12h1"
            strokeWidth="2.21"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
          </path>
        </svg>
      </button>
    </div>
  )
}

export default ButtonDarkMode