import React from 'react'
import Home from '../pages/Home'
import About from '../pages/About'
import Projects from '../pages/Projects'
import Contact from '../pages/Contact'

const Layout = () => {
  return (
    <div className=''>
      <Home/>
      <About/>
      <Projects/>
      <Contact/>
    </div>
  )
}

export default Layout