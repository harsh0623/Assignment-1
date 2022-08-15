import './App.css';

import HeaderComponent from './components/header.component'; 
import FormComponent from './components/form.component';
import {ReportComponent} from './components/report.component';
import { useState } from 'react';
import { useEffect } from 'react';
import { getStudentsFromFirebase } from './services/student.service';
function App() {
    const [students, addStudents] = useState([]
    );
  const [isUpdateRequired, setUpdate] = useState(true);
    const addStudentFromForm=(student) => {
        addStudents([...students, student])    
    }
  useEffect(() => {
    if(isUpdateRequired)
    getStudentsFromFirebase()
      .then(students => addStudents(students))
    setUpdate(false)
  }, [isUpdateRequired])

 return ( 
  <>
  <HeaderComponent></HeaderComponent>
   <div className="container-fluid mt-4">
            <div className="row">
         <FormComponent addStudentFromForm={addStudentFromForm} setUpdate={ setUpdate} />    
               <ReportComponent students={students}></ReportComponent>
              </div>
        </div>
       </>
  );
}

export default App;
