import React from "react";

const ReportCardComponent=(props)=>{
    const total=props.studentInfo.maths + props.studentInfo.english + props.studentInfo.science;
    const PassorFail= props.studentInfo.maths>33 && props.studentInfo.english>33 && props.studentInfo.science>33 ? "Pass" : "Fail";
    return (
      
        <div className="col-6">
          <div
            className="card"
            style={{
              width: "80%",
              marginLeft: "auto",
              marginRight: "auto",
              position: "relative",
            }}
          >
            <span
              style={{
                position: "absolute",
                top: "5px",
                right: "15px",
                fontWeight: "600",
                color: "red",
              }}
            >
              En No.{props.studentInfo.id}
            </span>
            <span
              style={{
                position: "absolute",
                top: "5px",
                left: "5px",
                fontWeight: "600",
                color: PassorFail === "Pass" ? "green" : "red",
              }}
            >
              {PassorFail}
            </span>
            <div
              style={{
                width: "100%",
                height: "70px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {props.studentInfo.Name}
            </div>
            <div className="card-body">
              <table className="table">
                <thead>
                  <tr>
                    <th>Subjects</th>
                    <th>Marks</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Maths</td>
                    <td>{props.studentInfo.maths}</td>
                  </tr>
                  <tr>
                    <td>English</td>
                    <td>{props.studentInfo.english}</td>
                  </tr>
                  <tr>
                    <td>Science</td>
                    <td>{props.studentInfo.science}</td>
                  </tr>
                </tbody>
              </table>
              <div className="row">
                <div className="col-6 ps-4 fw-bold">Total</div>
                <div className="col-6" style={{paddingLeft:"26px"}}>{total}</div>
              </div>
            </div>
          </div>
        </div>
    );
}

export default ReportCardComponent;