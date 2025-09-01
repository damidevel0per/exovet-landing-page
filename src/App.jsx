import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Nosotros from './components/Nosotros'
import Servicios from './components/Servicios'
import Footer from './components/Footer'
import Contacto from './components/Contacto'

function App() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Nosotros/>
      <Servicios/>
      <Contacto/>
      <Footer/>
    </>
  )
}

export default App
