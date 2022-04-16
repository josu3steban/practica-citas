

export const PatientList = ( { patient, setPatientToEdit, deletePatient } ) => {

    const { name, email, dateBirth, detail } = patient;

    const handleEdit = () => {
        setPatientToEdit( patient );
    }

    const handleDelete = () => {
        deletePatient( patient.id );
    }
    
  return (
    <div className="flex justify-between content-center transition duration-500 shadow-sm hover:shadow-xl rounded-md bg-white py-5 px-3 mb-5 ">

        <div className="">
            <p className="text-gray-600 font-bold uppercase">
                Nombre: {' '}
                <span className="normal-case font-normal text-gray-800">
                    {name}
                </span>
            </p>

            <p className="text-gray-600 font-bold uppercase">
                Correo: {' '}
                <span className="normal-case font-normal">
                    {email}
                </span>
            </p>

            <p className="text-gray-600 font-bold uppercase">
                F. nacimiento: {' '}
                <span className="normal-case font-normal">
                    {dateBirth}
                </span>
            </p>

            <p className="text-gray-600 font-bold uppercase">
                Detalle: {' '}
                <span className="normal-case font-normal">
                    {detail}
                </span>
            </p>
        </div>

        <div className="flex content-center flex-col justify-between">
            <button
                type="button"
                className="border-solid border-2 border-indigo-400 bg-white hover:bg-indigo-400 text-indigo-400 hover:text-white transition duration-200 font-bold uppercase py-2 px-4 rounded-md cursor-pointer"
                onClick={ handleEdit}
            >
                Editar
            </button>

            <button
                className="border-solid border-2 border-red-600 bg-white hover:bg-red-600 text-red-600 hover:text-white transition duration-200 font-bold uppercase py-2 px-4 rounded-md cursor-pointer"
                onClick={ handleDelete }
            >
                Eliminar
            </button>
            
        </div>
    </div>
  )
}