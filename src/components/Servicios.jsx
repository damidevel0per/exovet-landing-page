import React from 'react'
import BunnyConsulta from '../assets/BUNNY-CONSULTORIO.JPG'
import PerroCirugia from '../assets/PERRO-CIRUGIA.JPG'
import PerroDomicilio from '../assets/PERRO-DOMICILIO.JPG'
import Estudio from '../assets/ESTUDIO-CLINICO.JPG'

const Servicios = () => {
  return (
    <section className='py-20'>
    <div>
        <div>
          <h2 className='font-semibold py-15 flex justify-center text-black text-5xl'>Servicio que brindamos</h2>
        </div>
    </div>

    <div class="grid grid-cols-2 divide-x-4 divide-yellow-400">
        <div className='flex flex-col items-center'>
            <h2 className='font-semibold text-2xl text-center'>Atención en nuestro consultorio</h2>
            <p className='text-lg text-center mb-6'>Veni con o sin sita previa a plantearnos tu duda sobre tu mascota.</p>
            <img className='w-[600px] max-w-full rounded-lg shadow-lg' src={BunnyConsulta} alt="" />
        </div>
        <div className='flex flex-col items-center'>
            <h2 className='font-semibold text-2xl text-center'>Clinica y cirugia</h2>
            <p className='text-lg text-center mb-6'>Cirugia y esterilizaciones de felinos, caninos y exóticos.</p>
            <img className='w-[600px] max-w-full rounded-lg shadow-lg' src={PerroCirugia} alt="" />
        </div>
    </div>

    <div class="py-20 grid grid-cols-2 divide-x-4 divide-yellow-400">
        <div className='flex flex-col items-center'>
            <h2 className='font-semibold text-2xl text-center'>Diagnóstico y estudios</h2>
            <p className='text-lg text-center mb-6'>Análisis, radiografías y estudios complementarios.</p>
            <img className='w-[600px] max-w-full rounded-lg shadow-lg' src={Estudio} alt="" />
        </div>

        <div className='flex flex-col items-center'>
            <h2 className='font-semibold text-2xl text-center'>Atención a domicilio</h2>
            <p className='text-lg text-center mb-6'>Vamos a donde tu mascota nos necesite.</p>
            <img className='w-[600px] max-w-full rounded-lg shadow-lg' src={PerroDomicilio} alt="" />
        </div>
    </div>


    </section>

  )
}

export default Servicios