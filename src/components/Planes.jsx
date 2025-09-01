import React from 'react'

const Planes = () => {
  return (
    <section id="planes" class=" py-16">
  <div class="max-w-7xl mx-auto px-6 text-center">
    <h2 class="text-3xl md:text-5xl font-bold text-white mb-12">
      Planes de Seguro Médico
    </h2>

    <div class="grid gap-8 md:grid-cols-3">

      <div class="bg-white rounded-2xl shadow-lg p-6 flex flex-col hover:scale-102 transition duration-500">
        <h3 class="text-xl font-semibold text-gray-800 mb-4">Básico</h3>
        <p class="text-gray-500 mb-6">Cuidado Esencial</p>
        <p className="text-2xl font-bold text-purple-700 mb-6">$15 / mes</p>
        <ul class="flex-1 text-gray-600 text-left space-y-3 mb-6">
          <li>✔️ Consultas veterinarias</li>
          <li>✔️ Vacunación anual</li>
          <li>✔️ Desparasitaciones</li>
          <li>✔️ Descuento en análisis simples</li>
          <li>❌ Cirugías mayores</li>
        </ul>
        <button class="bg-purple-700 hover:bg-purple-800 text-white py-2 px-4 rounded-lg transition">
          Elegir Plan
        </button>
      </div>


      <div class="bg-white rounded-2xl shadow-xl p-6 flex flex-col hover:scale-102 transition duration-500">
        <h3 class="text-xl font-semibold text-gray-800 mb-4">Intermedio</h3>
        <p class="text-gray-500 mb-6">Protección Total</p>
        <p className="text-2xl font-bold text-purple-700 mb-6">$30 / mes</p>
        <ul class="flex-1 text-gray-600 text-left space-y-3 mb-6">
          <li>✔️ Todo lo del plan Básico</li>
          <li>✔️ Procedimientos quirúrgicos menores</li>
          <li>✔️ Limpieza dental anual</li>
          <li>✔️ Exámenes de laboratorio básicos</li>
          <li>❌ Hospitalización</li>
        </ul>
        <button class="bg-purple-700 hover:bg-purple-800 text-white py-2 px-4 rounded-lg transition">
          Elegir Plan
        </button>
      </div>


      <div class="bg-white rounded-2xl shadow-lg p-6 flex flex-col hover:scale-102 transition duration-500">
        <h3 class="text-xl font-semibold text-gray-800 mb-4">Premium</h3>
        <p class="text-gray-500 mb-6">Salud Premium</p>
        <p className="text-2xl font-bold text-purple-700 mb-6">$50 / mes</p>
        <ul class="flex-1 text-gray-600 text-left space-y-3 mb-6">
          <li>✔️ Todo lo del plan Intermedio</li>
          <li>✔️ Cirugías mayores</li>
          <li>✔️ Hospitalización</li>
          <li>✔️ Radiografías y estudios completos</li>
          <li>✔️ Atención prioritaria</li>
        </ul>
        <button class="bg-purple-700 hover:bg-purple-800 text-white py-2 px-4 rounded-lg transition">
          Elegir Plan
        </button>
      </div>
    </div>
  </div>
</section>
  )
}

export default Planes