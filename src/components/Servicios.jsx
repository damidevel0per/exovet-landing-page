import React from 'react'
import BunnyConsulta from '../assets/BUNNY-CONSULTORIO.JPG'
import PerroCirugia from '../assets/PERRO-CIRUGIA.JPG'
import PerroDomicilio from '../assets/PERRO-DOMICILIO.JPG'
import Estudio from '../assets/ESTUDIO-CLINICO.JPG'

const Servicios = () => {
  return (
    <section id='servicios' className='py-20 bg-purple-700'>
    <div>
        <div>
          <h2 className='font-semibold py-15 flex justify-center text-white text-5xl'>Servicios que brindamos</h2>
        </div>
    </div>

    <div class="grid grid-cols-2 divide-x-4 divide-yellow-300">
        <div className='flex flex-col items-center'>
            <h2 className='font-semibold text-2xl text-center text-yellow-300'>Atención en nuestro consultorio</h2>
            <p className='text-lg text-center mb-6 text-yellow-100'>Veni con o sin cita previa a plantearnos tu duda sobre tu mascota.</p>
            <img className='grayscale w-[600px] max-w-full rounded-lg shadow-lg hover:scale-102 hover:grayscale-0 transition duration-500 ' src={BunnyConsulta} alt="" />
        </div>
        <div className='flex flex-col items-center'>
            <h2 className='font-semibold text-2xl text-center text-yellow-300'>Clinica y cirugia</h2>
            <p className='text-lg text-center mb-6 text-yellow-100'>Cirugia y esterilizaciones de felinos, caninos y exóticos.</p>
            <img className='grayscale w-[600px] max-w-full rounded-lg shadow-lg hover:scale-102 hover:grayscale-0 transition duration-500' src={PerroCirugia} alt="" />
        </div>
    </div>

    <div class="py-20 grid grid-cols-2 divide-x-4 divide-yellow-300">
        <div className='flex flex-col items-center'>
            <h2 className='font-semibold text-2xl text-center text-yellow-300'>Diagnóstico y estudios</h2>
            <p className='text-lg text-center mb-6 text-yellow-100'>Análisis, radiografías y estudios complementarios.</p>
            <img className='grayscale w-[600px] max-w-full rounded-lg shadow-lg hover:scale-102 hover:grayscale-0 transition duration-500 ' src={Estudio} alt="" />
        </div>

        <div className='flex flex-col items-center'>
            <h2 className='font-semibold text-2xl text-center text-yellow-300'>Atención a domicilio</h2>
            <p className='text-lg text-center mb-6 text-yellow-100'>Vamos a donde tu mascota nos necesite.</p>
            <img className='grayscale w-[600px] max-w-full rounded-lg shadow-lg hover:scale-102 hover:grayscale-0 transition duration-500 ' src={PerroDomicilio} alt="" />
        </div>
    </div>


    </section>

  )
}

export default Servicios