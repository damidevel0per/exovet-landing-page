import React from 'react'

function Footer() {
  return (
    <footer className="bg-yellow-300 text-purple-700 py-10 mt-20">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Logo / Nombre */}
        <div>
          <h2 className="text-2xl font-bold">ExoVet</h2>
          <p className="mt-2 text-sm">
            Cuidando a tus mascotas exóticas y convencionales con dedicación y profesionalismo.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Navegación</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#inicio" className="hover:underline">Inicio</a></li>
            <li><a href="#nosotros" className="hover:underline">Sobre Nosotros</a></li>
            <li><a href="#servicios" className="hover:underline">Servicios</a></li>
            <li><a href="#contacto" className="hover:underline">Contacto</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Contacto</h3>
          <p className="text-sm">📍 Av. Siempre Viva 123, Ciudad</p>
          <p className="text-sm">📞 +54 11 1234-5678</p>
          <p className="text-sm">✉️ email@exovet.com</p>
          <div className="flex space-x-4 mt-3">
            <a href="#" className="hover:text-yellow-300">📘 Facebook</a>
            <a href="#" className="hover:text-yellow-300">📸 Instagram</a>
          </div>
        </div>
      </div>


      <div className="mt-10 border-t border-yellow-600 pt-4 text-center text-sm">
        © {new Date().getFullYear()} ExoVet. Todos los derechos reservados. Desarrollado por Damian Perez
      </div>
    </footer>
  )
}

export default Footer