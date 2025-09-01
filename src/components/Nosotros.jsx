import React from 'react'
import Chinchilla from '../assets/CHINCHILLA.PNG'
import Bunny from '../assets/BUNNY.png'
import PerroGato from '../assets/PERROYGATO.png'

const Nosotros = () => {
  return (
    <section id='nosotros' className=''>
        <div className='bg-purple-700'>
          <h2 className='font-semibold py-15 flex justify-center text-white text-5xl'>Sobre nosotros</h2>
        </div>

        <div>
        <div className='h-[101vh] bg-yellow-300 flex justify-around items-center py-20 sm:px-12 sm:py-6 px-4 py-3'>
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

        <div className='bg-[url("data:image/svg+xml,%3Csvg%20width%3D%27100%27%20height%3D%2720%27%20viewBox%3D%270%200%20100%2020%27%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cpath%20d%3D%27M21.184%2020c.357-.13.72-.264%201.088-.402l1.768-.661C33.64%2015.347%2039.647%2014%2050%2014c10.271%200%2015.362%201.222%2024.629%204.928.955.383%201.869.74%202.75%201.072h6.225c-2.51-.73-5.139-1.691-8.233-2.928C65.888%2013.278%2060.562%2012%2050%2012c-10.626%200-16.855%201.397-26.66%205.063l-1.767.662c-2.475.923-4.66%201.674-6.724%202.275h6.335zm0-20C13.258%202.892%208.077%204%200%204V2c5.744%200%209.951-.574%2014.85-2h6.334zM77.38%200C85.239%202.966%2090.502%204%20100%204V2c-6.842%200-11.386-.542-16.396-2h-6.225zM0%2014c8.44%200%2013.718-1.21%2022.272-4.402l1.768-.661C33.64%205.347%2039.647%204%2050%204c10.271%200%2015.362%201.222%2024.629%204.928C84.112%2012.722%2089.438%2014%20100%2014v-2c-10.271%200-15.362-1.222-24.629-4.928C65.888%203.278%2060.562%202%2050%202%2039.374%202%2033.145%203.397%2023.34%207.063l-1.767.662C13.223%2010.84%208.163%2012%200%2012v2z%27%20fill%3D%22%23ffdf20%22%20fill-opacity%3D%220.099%22%20fill-rule%3D%22evenodd%22/%3E%3C/svg%3E")] 
                          bg-[length:250px_50px] h-[101vh] bg-white flex justify-around items-center py-20 sm:px-12 sm:py-6 px-4 py-3'>
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