import './App.css';

import HeaderComponent from './components/header.component'; 
import FormComponent from './components/form.component';
import {ReportComponent} from './components/report.component';
function App() {
    const student=[
        {
            id: 1,
            Name:"Rajesh",
            course: "B.tech",
            semester: "V",
            maths: 38,
            english: 89,
            science: 75
        },
        {
            id: 2,
            Name: "Rohit",
            course: "BCA",
            semester: "V",
            maths: 18,
            english: 89,
            science: 75
        }
    ]
 return ( 
  <>
  <HeaderComponent></HeaderComponent>
   <div className="container-fluid mt-4">
            <div className="row">
               <FormComponent></FormComponent>    
             <ReportComponent students={student}></ReportComponent>
              </div>
        </div>
       </>
  );
}

export default App;
