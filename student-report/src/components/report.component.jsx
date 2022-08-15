import React from "react";
import { useState } from "react";
import ReportCardComponent from "./reportCard.component";

export function ReportComponent(props){
    const [dropdown,setDropdown]=useState("all")
  const handleFilterValueChange = (event) => {
    setDropdown(event.target.value);
  };

    return (
      <div className="col-9">
        <div style={{ width: "200px" }} className="mt-2">
          <select
            className="form-select"
            style={{marginLeft:"70px"}}
            name="filter"
            id="filter"
            onChange={handleFilterValueChange}
          >
            <option value="all">All</option>
            <option value="pass">Pass</option>
            <option value="fail">Fail</option>
          </select>
        </div>
        <div className="row mt-4">
          {props.students.filter(student => {
    if (dropdown === "pass")
      return student?.maths > 33 && student?.english > 33 && student?.science > 33;
    else if (dropdown === "fail")
      return student?.maths < 33 || student?.english < 33 || student?.science < 33;
    else
      return true;
  }).map( student => <ReportCardComponent key={student.id} studentInfo={student} />)} 
        </div>
      </div>
    );
}