import React from 'react'
import MapaDireccion from './MapaDireccion'

const Contacto = () => {
  return (
    <section id="contacto" className='bg-[url("data:image/svg+xml,%3Csvg%20width%3D%2720%27%20height%3D%2720%27%20viewBox%3D%270%200%2020%2020%27%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22%238200db%22%20fill-opacity%3D%220.03%22%20fill-rule%3D%22evenodd%22%3E%3Ccircle%20cx%3D%223%22%20cy%3D%223%22%20r%3D%223%22/%3E%3Ccircle%20cx%3D%2213%22%20cy%3D%2213%22%20r%3D%223%22/%3E%3C/g%3E%3C/svg%3E")] 
         w-full bg-[length:100px_105px] bg-white-300'>

        <div className=''>
          <h2 className='font-semibold py-15 flex justify-center text-black text-5xl'>Contactate con nosotros</h2>
        </div>
        <div className='flex justify-center '>
            <form className='shadow-xl flex items-center mx-30 px-30 flex-col w-[750px] rounded text-purple-900 bg-yellow-300 font-semibold' action="">
                <h2 className='text-3xl py-10 text-gray-900'>Completa los campos</h2>

                <div className='flex-col'>
                    <div className=''>
                        <label className='text-2xl py-10 text-gray-900' htmlFor="">Nombre</label>
                    </div>
                    <input className='my-3 inset-shadow-xs bg-white rounded my-2 h-10 w-150 px-3' placeholder='Ej: Damian Perez' type="text" />
                </div>
                <div>
                    <div>
                        <label className='text-2xl py-10 text-gray-900' htmlFor="">Email</label>
                    </div>
                    <input className='my-3 inset-shadow-xs bg-white rounded my-2 h-10 w-150 px-3' placeholder='correo@email.com' type="email" />
                </div>
                <div>
                    <div>
                        <label className='text-2xl py-10 text-gray-900' htmlFor="">Mensaje</label>
                    </div>
                    <textarea className='my-3 inset-shadow-xs bg-white rounded my-2 h-50 w-150 px-3 py-3' placeholder='Dejanos un mensaje!' type="text" />
                </div>

                <div className='py-5 py-10'>
                <button className='flex items-center gap-3 font-semibold text-white bg-purple-700 rounded-full px-7 py-3 hover:bg-purple-900 hover:shadow-purple-900 hover:transition duration-500 hover:cursor-pointer'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-send" viewBox="0 0 16 16">
                    <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576zm6.787-8.201L1.591 6.602l4.339 2.76z"/>
                </svg>Enviar mensaje</button>
                </div>
            </form>
        </div>

        <div>
            <h2 className='font-semibold py-25 flex justify-center text-black text-5xl'>Tambien podes venir a visitarnos!</h2>
            <MapaDireccion/>
        </div>

    </section>
  )
}

export default Contacto