import React from 'react'
import Chinchilla from '../assets/CHINCHILLA.PNG'
import Bunny from '../assets/BUNNY.png'
import PerroGato from '../assets/PERROYGATO.png'

const Servicios = () => {
  return (
    <section className=''>
        <div >
          <h2 className='py-15 flex justify-center text-black text-5xl'>Sobre Nosotros</h2>
        </div>

        <div>
        <div className='bg-yellow-300 flex justify-around items-center py-20 sm:px-12 sm:py-6 px-4 py-3'>
          <div>
              <img className='w-[400px]' src={Chinchilla} alt="Chinchilla" />
          </div>
          <div className='text-right'>
            <p className='text-3xl'>En <span className='text-yellow-600'>ExoVet</span> nos dedicamos a brindar atención especializada a 
            <br /> mascotas exóticas y no convencionales.</p>
            <p className='text-3xl'>Nuestra filosofía se basa en el <span className='text-yellow-600'>respeto, cuidado y bienestar de cada animal</span>, <br /> 
              ofreciendo tratamientos personalizados según sus necesidades.</p>
          </div>
        </div>

        <div className='bg-yellow-50 flex justify-around items-center py-20 sm:px-12 sm:py-6 px-4 py-3'>
          <div className='text-left'>
            <p className='text-3xl'>Contamos con un equipo profesional y comprometido. <br /> con experiencia en 
            <span className='text-yellow-600'> reptiles, aves, roedores y otros animales no convencionales</span> <br />
            garantizando que cada visita sea segura y cómoda para tu mascota.</p>
          </div>
          <div>
              <img className='w-[400px]' src={Bunny} alt="Conejo blanco y negro" />
          </div>
        </div>

        <div className='bg-yellow-300 py-20 sm:px-12 sm:py-6 px-10 py-3'>
          <p className='py-15 text-3xl text-center'>Además de nuestra especialización en animales exóticos, en ExoVet también brindamos atención integral <br /> a mascotas convencionales <span className='text-yellow-600'>como perros y gatos</span>, garantizando el mismo compromiso, cuidado y <br /> profesionalismo para <span className='text-yellow-600'>todos los miembros de tu familia.</span></p>
        </div>
        <div className='bg-yellow-300 flex justify-center'>
          <img className='w-[550px]' src={PerroGato} alt="Conejo blanco y negro" />
        </div>
        </div>

    </section>

  )
}

export default Servicios