import { PatientList } from "./PatientList";


export const PatientListContainer = () => {

    return(
        <div className="sm:w-1/2 lg:w-3/5">
            <h2 className="text-center font-black text-2xl">
                Listado de Pacientes
            </h2>

            <div className="mt-5 ml-3 md:h-screen overflow-y-scroll">
                
                <PatientList />
                <PatientList />
                <PatientList />
                <PatientList />
                <PatientList />
                <PatientList />
                <PatientList />
                <PatientList />
                <PatientList />
                <PatientList />
                
            </div>
        </div>
    );
    
}