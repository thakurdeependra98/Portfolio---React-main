import React from 'react'
import Home from '../pages/Home'
import About from '../pages/About'
import Projects from '../pages/Projects'
import Contact from '../pages/Contact'
import Portfolio from "../assets/portfolio.avif"

const Layout = () => {
  return (
    <div className='relative'>
      <div
      className="w-full bg-cover bg-center"
      style={{ backgroundImage: `url(${Portfolio})` }}
    >
      <div className='w-full h-screen bg-gradient-to-br from-[#0a1a268e] to-[#0a1a26] absolute top-0 right-0'></div>
        <Home/>
      </div>
      <div className='bg-[#0a1a26]'>
        <About/>
      <Projects/>
      <Contact/>
      </div>
    </div>
  )
}

export default Layout