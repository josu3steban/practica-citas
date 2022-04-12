import React from 'react'

export const Form = () => {
  return (
    <div className="sm:w-1/2 lg:w-2/5">
      <h2 className='font-black text-2xl text-center mb-5'>
        Registro de Paciente
      </h2>

      <form className="bg-white rounded-md px-5 py-7 shadow-md">
        <div className='mb-5'>
          <label
            htmlFor="name"
            className="block text-base font-bold mb-2 uppercase"
          >
            Nombre
          </label>

          <input
            id="name"
            type="text"
            placeholder="Nombre de paciente"
            className="focus:outline-none border focus:ring-2 focus:ring-indigo-400 w-full p-2 rounded-md"
          />
        </div>

        <div className='mb-5'>
          <label
            htmlFor="email"
            className="block text-base font-bold mb-2 uppercase"
          >
            Correo electrónico
          </label>

          <input
            id="email"
            type="email"
            placeholder="Correo electrónico"
            className="focus:outline-none border focus:ring-2 focus:ring-indigo-400 w-full p-2 rounded-md"
          />
        </div>

        <div className='mb-5'>
          <label
            htmlFor="date-birth"
            className="block text-base font-bold mb-2 uppercase"
          >
            Fecha de nacimiento
          </label>

          <input
            id="date-birth"
            type="date"
            className="focus:outline-none border focus:ring-2 focus:ring-indigo-400 w-full p-2 rounded-md"
          />
        </div>

        <div className='mb-5'>
          <label
            htmlFor="detail"
            className="block text-base font-bold mb-2 uppercase"
          >
            Detalle
          </label>

          <textarea
            id="detail"
            type="text"
            placeholder="Detalle del problema"
            className="focus:outline-none border focus:ring-2 focus:ring-indigo-400 w-full p-2 rounded-md"
          />
        </div>

        <input
          type="submit"
          value="Registrar"
          className="border-solid border-2 border-indigo-400 bg-white hover:bg-indigo-400 text-indigo-400 hover:text-white transition duration-200 w-full font-bold uppercase py-2 px-4 rounded-md cursor-pointer"
        />
      </form>
    </div>
  )
}
