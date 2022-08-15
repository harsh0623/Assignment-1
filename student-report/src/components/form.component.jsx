import React from "react";
import { useState } from "react";
import { addStudentToFirebase } from "../services/student.service";
import InputBox from "./input.component";


const FormComponent = (props) => {
  let [student, setStudent] = useState({
    id: null,
    Name: null,
    course:null,
    sem: null,
     maths: null,
    english: null,
    science:null
  })
  const addStudent = (event) => {
    event.preventDefault();
    addStudentToFirebase(student);
    props.addStudentFromForm(student);
  };
  const handleInputChange = (event) => {
    setStudent( ()=>({...student,[event.target.id]:event.target.value}))
  }
  return (
    <div className="col-3">
      <form onSubmit={addStudent}>
        <div className="form-group">
          <div className="row">
            <InputBox
              type="number"
              id="id"
              placeholder="ID"
              value={student.id}
              handleInputChange={handleInputChange}
            />
            <InputBox
              type="text"
              id="Name"
              placeholder="Name"
              value={student.Name}
              handleInputChange={handleInputChange}
            />
          </div>
        </div>
        <div className="row mt-2">
          <InputBox
            type="text"
            id="course"
            placeholder="Course"
            value={student.course}
            handleInputChange={handleInputChange}
          />
          <InputBox
            type="text"
            id="sem"
            placeholder="Semester"
            value={student.sem}
            handleInputChange={handleInputChange}
          />
        </div>
        <div className="row mt-2">
          <h6 className="mt-3 fw-bold">Marks:</h6>
          <InputBox
            type="number"
            id="maths"
            placeholder="Maths"
            value={parseInt(student.maths)}
            handleInputChange={handleInputChange}
          />
          <InputBox
            type="number"
            id="english"
            placeholder="English"
            value={parseInt(student.english)}
            handleInputChange={handleInputChange}
          />
          <InputBox
            type="number"
            id="science"
            placeholder="Science"
            value={parseInt(student.science)}
            handleInputChange={handleInputChange}
          />
        </div>
        <button type="submit"
        className="btn btn-success mt-4 ps-5 pe-5 col-6">Add</button>
      </form>
    </div>
  );
};

export default FormComponent;
