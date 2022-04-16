import { PatientList } from "./PatientList";


export const PatientListContainer = ( { patients, setPatientToEdit, deletePatient } ) => {

    return(
        <div className="sm:w-1/2 lg:w-3/5">

            {
                patients.length !== 0
                ?
                (
                    <>
                        <h2 className="text-center font-black text-2xl">
                            Listado de Pacientes
                        </h2>

                        <div className="mt-5 ml-3 md:h-screen overflow-y-scroll">
                
                            {
                                patients.map( ( patient ) => {
                                    return(
                                        <PatientList 
                                            key={ patient.id }
                                            patient={patient}
                                            setPatientToEdit={ setPatientToEdit }
                                            deletePatient={ deletePatient }
                                        />
                                    )
                                })
                            }
                
                        </div>
                    </>

                )
                :
                (
                    <h2 className="text-center font-black text-2xl">
                        No Hay Pacientes Registrados
                    </h2>
                )
            }

        </div>
    );
    
}