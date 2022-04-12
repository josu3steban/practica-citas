import { Form } from "./components/pacientes/Form";
import { Header } from "./components/ui/Header";
import { PatientListContainer } from "./components//pacientes/PatientListContainer";

function App() {

  return(
    <div className="container mx-auto mt-5">

      <Header />

      <div className="sm:flex mt-10">

        <Form />
        <PatientListContainer />

        

      </div>
      
    </div>
  );
}

export default App;