import React from 'react'
import Logo from '../assets/LOGO_EXOVET.PNG'

const Navbar = () => {
  return (
    <nav className='shadow-md bg-yellow-300'>
        <div className='flex justify-between items-center sm:px-12 sm:py-6 px-4 py-3'>

            <div>
                <img src={Logo} alt="Logo de pagina"  className='w-[150px]'/>
            </div>

            <div>
                <ul className='font-semibold flex space-x-4'>
                    <li> <a className='text-white sm:text-lg text-sm hover:text-yellow-600' href="">Inicio</a></li>
                    <li> <a className='text-white sm:text-lg text-sm hover:text-yellow-600' href="">Nosotros</a></li>
                    <li> <a className='text-white sm:text-lg text-sm hover:text-yellow-600' href="">Servicios</a></li>
                    <li> <a className='text-white sm:text-lg text-sm hover:text-yellow-600' href="">Contacto</a></li>
                </ul>
            </div>
        </div>
    </nav>

  )
}

export default Navbar