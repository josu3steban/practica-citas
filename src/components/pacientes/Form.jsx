import { useState, useEffect } from 'react';

export const Form = ( { patients, setPatients, patientToEdit, setPatientToEdit } ) => {

  const [value, setValue] = useState({
    name:       '',
    email:      '',
    dateBirth:  '',
    detail:     '',
    id:         () => {}
  });

  const [ error, setError ] = useState(false);

  const handleInputChange = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value
    });
  }

  const idGenerator = () => {
    const id = Math.random().toString(36).substring(2, 15) + Date.now().toString(36);

    return id;
  }


  const handleSubmit = (e) => {

    e.preventDefault();
    
    const { name, email, dateBirth, detail } = value;

    if( name!=='' && email!=='' && dateBirth!=='' && detail!=='' ){

      setError(false);

      const newPatient = {
        name, 
        email,
        dateBirth,
        detail,
        //id: idGenerator()
      };

      if( !!patientToEdit.id ) {

        const newPatients = patients.map( patient => {
          if( patient.id === patientToEdit.id ) {
            newPatient.id = patientToEdit.id;
            return newPatient;
          }else {
            return patient;
          }
        });

        setPatients(newPatients);

      } else {

        newPatient.id = idGenerator();
        setPatients([
          ...patients,
          newPatient
        ]);

      }


      //reinicia los valores del formulario luego de agregar o editar un paciente
      setValue({
        name:       '',
        email:      '',
        dateBirth:  '',
        detail:     '',
        id:         () => {}
      });

      setPatientToEdit({});
      
    }else {

      setError(true);
      
    }

  }

  useEffect(() => {

    if( Object.keys(patientToEdit).length > 0 ){

      setValue({
        name:       patientToEdit.name,
        email:      patientToEdit.email,
        dateBirth:  patientToEdit.dateBirth,
        detail:     patientToEdit.detail,
        id:         patientToEdit.id
      });

    }
  }, [patientToEdit]);
  

  return (
    <div className="sm:w-1/2 lg:w-2/5">
      <h2 className='font-black text-2xl text-center mb-5'>
        {
          !!patientToEdit.id
          ?
          'Editar Paciente'
          :
          'Agregar Paciente'
        }
      </h2>

      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-md px-5 py-7 shadow-md"
      >

        {
          ( error )
          &&
          (
            <div className='text-center text-red-500 mb-5'>
              Todos los campos son obligatorios
            </div>
          )
        }
        
        <div className='mb-5'>
          <label
            htmlFor="name"
            className="block text-base font-bold mb-2 uppercase"
          >
            Nombre
          </label>

          <input
            id="name"
            name='name'
            type="text"
            placeholder="Nombre de paciente"
            className="focus:outline-none border focus:ring-2 focus:ring-indigo-400 w-full p-2 rounded-md"
            value={value.name}
            onChange={handleInputChange}
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
            name='email'
            type="email"
            placeholder="Correo electrónico"
            className="focus:outline-none border focus:ring-2 focus:ring-indigo-400 w-full p-2 rounded-md"
            value={ value.email }
            onChange={handleInputChange}
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
            name='dateBirth'
            type="date"
            className="focus:outline-none border focus:ring-2 focus:ring-indigo-400 w-full p-2 rounded-md"
            value={ value.dateBirth }
            onChange={handleInputChange}
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
            name='detail'
            type="text"
            placeholder="Detalle del problema"
            className="focus:outline-none border focus:ring-2 focus:ring-indigo-400 w-full p-2 rounded-md"
            value={ value.detail }
            onChange={handleInputChange}
          />
        </div>

        <input
          type="submit"
          value={ !!patientToEdit.id ? 'Editar' : 'Agregar' }
          className="border-solid border-2 border-indigo-400 bg-white hover:bg-indigo-400 text-indigo-400 hover:text-white transition duration-200 w-full font-bold uppercase py-2 px-4 rounded-md cursor-pointer"
          onClick={handleSubmit}
        />
      </form>
    </div>
  )
}
