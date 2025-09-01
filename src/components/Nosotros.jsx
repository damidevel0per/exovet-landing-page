import React from 'react'
import Chinchilla from '../assets/CHINCHILLA.PNG'
import Bunny from '../assets/BUNNY.png'
import PerroGato from '../assets/PERROYGATO.png'

const Nosotros = () => {
  return (
    <section className=''>
        <div>
          <h2 className='font-semibold py-15 flex justify-center text-black text-5xl'>Sobre nosotros</h2>
        </div>

        <div>
        <div className='h-[100vh] bg-yellow-300 flex justify-around items-center py-20 sm:px-12 sm:py-6 px-4 py-3'>
          <div>
              <img className='w-[400px]' src={Chinchilla} alt="Chinchilla" />
          </div>
          <div className='text-right'>
            <p className='text-3xl'>En <span className='text-purple-700'>ExoVet</span> nos dedicamos a brindar atención especializada a 
            <br /> mascotas exóticas y no convencionales.</p>
            <p className='text-3xl'>Nuestra filosofía se basa en el <span className='text-purple-700'>respeto, cuidado y bienestar de cada animal</span>, <br /> 
              ofreciendo tratamientos personalizados según sus necesidades.</p>
          </div>
        </div>

        <div className='h-[100vh] bg-white flex justify-around items-center py-20 sm:px-12 sm:py-6 px-4 py-3'>
          <div className='text-left'>
            <p className='text-3xl'>Contamos con un equipo profesional y comprometido. <br /> con experiencia en 
            <span className='text-purple-700'> reptiles, aves, roedores y otros animales no convencionales</span> <br />
            garantizando que cada visita sea segura y cómoda para tu mascota.</p>
          </div>
          <div>
              <img className='w-[400px]' src={Bunny} alt="Conejo blanco y negro" />
          </div>
        </div>

        <div className='bg-yellow-300 sm:px-12 px-10'>
        <div>
          <p className='py-15 text-3xl text-center'>Además de nuestra especialización en animales exóticos, en ExoVet también brindamos atención integral <br /> a mascotas convencionales <span className='text-purple-700'>como perros y gatos</span>, garantizando el mismo compromiso, cuidado y <br /> profesionalismo para <span className='text-purple-700'>todos los miembros de tu familia.</span></p>
        </div>
        <div className='flex justify-center'>
          <img src={PerroGato} alt="Perro y gato" className="w-[800px]"/> 
        </div>
        </div>
        </div>


    </section>

  )
}

export default Nosotros