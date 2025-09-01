import React from 'react'

const MapaDireccion = () => {
  return (
    <div className="w-full max-w-3xl mx-auto"> {/* Contenedor centrado */}
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54285.63293034661!2d-60.55616258838922!3d-31.74723888232596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b44df2b9835231%3A0x554ebde0aa5cfa9a!2zUGFyYW7DoSwgRW50cmUgUsOtb3M!5e0!3m2!1ses-419!2sar!4v1756738961750!5m2!1ses-419!2sar"
      className="w-full h-96 border-0 rounded-lg" // Tailwind para tamaño y borde
      allowFullScreen // React usa camelCase y sin valor
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="Mapa de ubicación"
    ></iframe>
  </div>
  )
}

export default MapaDireccion