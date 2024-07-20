import React from 'react'
import Navbar from './components/Navbar'
import LandingPage from './components/LandingPage'
import Markey from './components/Markey'
import About from './components/About'
import Eyes from './components/Eyes'
import Features from './components/Features'
import Cards from './components/Cards'
import Footer from './components/Footer'

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

      <Cards/>
      <Footer/>


    </div>
    
    </>
  )
}

export default App