import React from 'react'
import Bunny from '../assets/BUNNY-HERO.PNG'
const Hero = () => {
  return (
    <section className='bg-[url("data:image/svg+xml,%3Csvg%20width%3D%2720%27%20height%3D%2720%27%20viewBox%3D%270%200%2020%2020%27%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22%238200db%22%20fill-opacity%3D%220.03%22%20fill-rule%3D%22evenodd%22%3E%3Ccircle%20cx%3D%223%22%20cy%3D%223%22%20r%3D%223%22/%3E%3Ccircle%20cx%3D%2213%22%20cy%3D%2213%22%20r%3D%223%22/%3E%3C/g%3E%3C/svg%3E")] 
 h-screen w-full bg-[length:100px_105px]  bg-white-50 flex justify-around items-center py-20 h-[90vh] sm:px-12 sm:py-6 px-4 py-3'>
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