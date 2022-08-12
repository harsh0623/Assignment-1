import React from "react";
import { useState } from "react";
import InputBox from "./input.component";

const FormComponent = () => {
  let [student, setStudent] = useState({
    id: null,
    Name: null,
    course:null,
    seme: null,
    maths: null,
    english: null,
    science:null
  })
  const addStudent = () => {
    console.log(student);
  };
  const handleInputChange = (event) => {
    setStudent=(()=>({...student,[event.target.id]:event.target.value}))
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
            <div className="col-6">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Name"
              />
            </div>
          </div>
          </div>
          <div className="row mt-2">
            <div className="col-6">
              <label htmlFor="course">Course:</label>
              <input
                type="text"
                className="form-control"
                id="course"
                placeholder="Course"
              />
            </div>
            <div class="col-6">
              <label htmlFor="sem">Semmester:</label>
              <input
                type="text"
                className="form-control"
                id="sem"
                placeholder="Semmester"
              />
            </div>
          </div>
          <div className="row mt-2">
            <h6 className="mt-3 fw-bold">Marks:</h6>
            <div className="col-4">
              <label htmlFor="maths">
                <small>Maths</small>
              </label>
              <input
                type="text"
                className="form-control"
                id="maths"
                placeholder="Maths"
              />
            </div>
            <div className="col-4">
              <label htmlFor="english">
                <small>English:</small>
              </label>
              <input
                type="text"
                className="form-control"
                id="english"
                placeholder="English"
              />
            </div>
            <div className="col-4">
              <label htmlFor="science">
                <small>Science:</small>
              </label>
              <input
                type="text"
                className="form-control"
                id="science"
                placeholder="Science"
              />
            </div>
          <button className="btn btn-success mt-4 ps-5 pe-5">Add</button>
        </div>
      </form>
    </div>
  );
};

export default FormComponent;
