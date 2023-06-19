import { Routes ,Route } from "react-router-dom";
import Employee from './page/Employee'
import AddEmployee from "./page/AddEmployee";
import EditEmployee from "./page/EditEmployee";

function App() {

  

 
  return (
    <div>
      <Routes>
        <Route path='/employee' element={<Employee/>}/>
      </Routes>
        
      <Routes>
        <Route path='/employee/add' element={<AddEmployee/>}/>
      </Routes>

      <Routes>
        <Route path='/employee/edit/:id' element={<EditEmployee/>}/>
      </Routes>

    </div>
  );
}

export default App;
