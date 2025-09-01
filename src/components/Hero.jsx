import React from 'react'
import Bunny from '../assets/BUNNY-HERO.PNG'
const Hero = () => {
  return (
    <section className='bg-white-50 flex justify-around items-center py-20 h-[90vh] sm:px-12 sm:py-6 px-4 py-3'>
        <div>
            <h1 className='font-semibold text-5xl text-yellow'>Una mascota saludable <br />es una mascota <span className='text-yellow-300'>feliz!</span></h1>
            <div className='py-5'>
                <button className='font-semibold text-white bg-purple-700 rounded-full px-15 py-3 hover:bg-yellow-300 hover:text-purple-700 hover:transition duration-500 hover:cursor-pointer'>Agendá tu cita</button>
            </div>
        </div>
        <div>
            <img className='w-[500px]' src={Bunny} alt="" />
        </div>
    </section>
  )
}

export default Hero