import React from "react";
import ReportCardComponent from "../reportCard.component";

export function ReportComponent(props){
    
    const test = () => "";
    return (
      <div className="col-9">
        <div style={{ width: "200px" }} className="mt-2">
          <select
            className="form-select"
            name="filter"
            id="filter"
            onChange={test}
          >
            <option value="all">All</option>
            <option value="pass">Pass</option>
            <option value="fail">Fail</option>
          </select>
        </div>
        <div className="row mt-4">
          <ReportCardComponent
            studentInfo={props.students[0]}
          ></ReportCardComponent>

          <ReportCardComponent
            studentInfo={props.students[1]}
          ></ReportCardComponent>
        </div>
      </div>
    );
}