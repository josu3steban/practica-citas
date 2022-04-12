

export const PatientList = () => {
  return (
    <div className="transition duration-500 shadow-sm hover:shadow-xl rounded-md bg-white py-5 px-3 mb-5 ">
        <p className="text-gray-600 font-bold uppercase">
            Nombre: {' '}
            <span className="normal-case font-normal text-gray-800">
                Josue
            </span>
        </p>

        <p className="text-gray-600 font-bold uppercase">
            Correo: {' '}
            <span className="normal-case font-normal">
                josue@gmail.com
            </span>
        </p>

        <p className="text-gray-600 font-bold uppercase">
            F. nacimiento: {' '}
            <span className="normal-case font-normal">
                00/00/0000
            </span>
        </p>

        <p className="text-gray-600 font-bold uppercase">
            Detalle: {' '}
            <span className="normal-case font-normal">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe, hic id! Fugit sequi iure perferendis?
            </span>
        </p>
    </div>
  )
}