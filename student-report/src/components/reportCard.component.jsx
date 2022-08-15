import React from "react";

const ReportCardComponent = (props) => {
  const student = props.studentInfo;
  const total =
    student?.maths + student?.english + student?.science;
  const PassOrFail = student?.maths > 33 && student?.english > 33 && student?.science > 33
      ? "Pass"
      : "Fail";
  return (
    <div className="col-6 mt-2">
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
          En No.{student?.id ?? ""}
        </span>
        <span
          style={{
            position: "absolute",
            top: "5px",
            left: "10px",
            fontWeight: "600",
            color: PassOrFail === "Pass" ? "green" : "red",
          }}
        >
          {PassOrFail ?? ""}
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
          {student?.Name ?? ""}
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
                <td>{student?.maths ?? ""}</td>
              </tr>
              <tr>
                <td>English</td>
                <td>{student?.english ?? ""}</td>
              </tr>
              <tr>
                <td>Science</td>
                <td>{student?.science ?? ""}</td>
              </tr>
            </tbody>
          </table>
          <div className="row">
            <div className="col-6 ps-3 fw-bold">Total</div>
            <div className="col-6" style={{ paddingLeft: "26px" }}>
              {total ?? ""}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportCardComponent;
