import React, { useEffect } from 'react';
import Logo from '../assets/LOGO_EXOVET.PNG';

const Navbar = () => {

    const handleScoll = (e, sectionId) => {
        e.preventDefault();
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };
  
    return (
        <nav className='fixed top-0 w-full shadow-md bg-yellow-300 z-100'>
            <div className='flex justify-between items-center sm:px-12 sm:py-6 px-4 py-3'>
                <div>
                    <a href="#inicio"><h1 className='text-3xl font-bold text-purple-700'>Exo<span className='text-purple-600'>Vet</span> </h1></a>
                    {/*<img src={Logo} alt="Logo de pagina" className='w-[150px]' />*/}
                </div>
                <div>
                    <ul className='font-semibold flex space-x-4'>
                        <li> <a onClick={(e) => handleScoll(e, 'inicio')} className='text-purple-700 sm:text-lg text-sm hover:text-white hover:transition duration-500' href="#inicio">Inicio</a></li>
                        <li> <a onClick={(e) => handleScoll(e, 'nosotros')} className='text-purple-700 sm:text-lg text-sm hover:text-white hover:transition duration-500' href="#nosotros">Nosotros</a></li>
                        <li> <a onClick={(e) => handleScoll(e, 'servicios')} className='text-purple-700 sm:text-lg text-sm hover:text-white hover:transition duration-500' href="#servicios">Servicios</a></li>
                        <li> <a onClick={(e) => handleScoll(e, 'contacto')} className='text-purple-700 sm:text-lg text-sm hover:text-white hover:transition duration-500' href="#contacto">Contacto</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar