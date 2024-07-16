import React from 'react'
import Navbar from './components/Navbar'
import LandingPage from './components/LandingPage'
import Markey from './components/Markey'
import About from './components/About'
import Eyes from './components/Eyes'
import Features from './components/Features'

const App = () => {
  return (
    <>
    <div className='w-full h-screen '>
      <Navbar/>
      <LandingPage/>
      <Markey/>
      <About/>
      <Eyes/>
      <Features/>


    </div>
    
    </>
  )
}

export default App