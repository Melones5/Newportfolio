import React from 'react'
import Presentation from '../components/Presentation'
import About from '../components/About'
import WorkExperience from '../components/WorkExperience'
import Education from '../components/Education'
import Skills from '../components/Skills'
import Idioms from '../components/Idioms'
import Projects from '../components/Projects'
import Footer from './Footer'
import ButtonDarkMode from '../components/ButtonDarkMode'


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