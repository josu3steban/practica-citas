import { useState, useEffect } from 'react';
import { Form } from "./components/pacientes/Form";
import { Header } from "./components/ui/Header";
import { PatientListContainer } from "./components//pacientes/PatientListContainer";

function App() {

  //State para props de los pacientes ingresados
  const [ patients, setPatients ] = useState([]);

  //State para el paciente a editar
  const [ patientToEdit, setPatientToEdit ] = useState({});

  //funcion para eliminar un paciente
  const deletePatient = (id) => {
    const newPatients = patients.filter( patient => patient.id !== id );
    setPatients(newPatients);
  }

  //Cargar pacientes del localStorage al iniciar la app
  useEffect(() => {

    const patientsLS = JSON.parse( localStorage.getItem('patients') ) ?? [];
    setPatients(patientsLS);

  }, []);

  //Almacenar pacientes en el localStorage
  useEffect(() => {

    localStorage.setItem('patients', JSON.stringify(patients));

  }, [patients]);
  
  return(
    <div className="container mx-auto mt-5">

      <Header />

      <div className="sm:flex mt-10">

        {/*Paso del estado de los pacientes mediante props */}
        <Form
          patients = { patients }
          setPatients = { setPatients }
          patientToEdit = { patientToEdit }
          setPatientToEdit = { setPatientToEdit }
        />

        <PatientListContainer
          patients = { patients }
          setPatientToEdit = { setPatientToEdit }
          deletePatient = { deletePatient }
        />

      </div>
      
    </div>
  );
}

export default App;