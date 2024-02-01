import React from 'react'
import Presentation from '../components/sections/Presentation'
import About from '../components/sections/About'
import WorkExperience from '../components/sections/WorkExperience'
import Education from '../components/sections/Education'
import Skills from '../components/sections/Skills'
import Idioms from '../components/sections/Idioms'
import Projects from '../components/sections/Projects'
import Footer from '../components/sections/Footer'
import ButtonDarkMode from '../components/sections/ButtonDarkMode'


const Home = () => {
  return (
    <div className='max-w-[940px] mx-auto py-16 px-4'>
      <Presentation/>
      <About/>
      <WorkExperience/>
      <Education/>
      <Skills/>
      <Idioms/>
      <Projects/>
      <Footer/>
      <ButtonDarkMode />
    </div>
  )
}

export default Home