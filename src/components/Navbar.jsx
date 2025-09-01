import React from 'react'
import Logo from '../assets/LOGO_EXOVET.PNG'

const Navbar = () => {
  return (
    <nav id='inicio' className='shadow-md bg-yellow-300'>
        <div className='flex justify-between items-center sm:px-12 sm:py-6 px-4 py-3'>

            <div>
                <img src={Logo} alt="Logo de pagina"  className='w-[150px]'/>
            </div>

            <div>
                <ul className='font-semibold flex space-x-4'>
                    <li> <a className='text-purple-700 sm:text-lg text-sm hover:text-white hover:transition duration-500' href="#inicio">Inicio</a></li>
                    <li> <a className='text-purple-700 sm:text-lg text-sm hover:text-white hover:transition duration-500' href="#nosotros">Nosotros</a></li>
                    <li> <a className='text-purple-700 sm:text-lg text-sm hover:text-white hover:transition duration-500' href="#servicios">Servicios</a></li>
                    <li> <a className='text-purple-700 sm:text-lg text-sm hover:text-white hover:transition duration-500' href="">Contacto</a></li>
                </ul>
            </div>
        </div>
    </nav>

  )
}

export default Navbar