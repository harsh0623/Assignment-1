
import './App.css';

function App() {
    const test=()=>"";
 return ( 
  <>
 <nav className="navbar navbar-expand-sm bg-dark justify-content-center">
    <span className="navbar-brand text-danger fw-bold">
      CodingBlaze
    </span>
  </nav>
   <div className="container-fluid mt-4">
            <div className="row">
                <div className="col-3">
                    <form onSubmit={test}>
                        <div className="form-group">
                            <div className="row">
                                <div className="col-6">
                                    <label htmlFor="id">ID:</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        id="id"
                                        placeholder="ID"
                                    />
                                </div>
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
                                    <label htmlFor="maths"
                                        ><small>Maths</small></label
                                    >
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="maths"
                                        placeholder="Maths"
                                    />
                                </div>
                                <div className="col-4">
                                    <label htmlFor="english"
                                        ><small>English:</small></label
                                    >
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="english"
                                        placeholder="English"
                                    />
                                </div>
                                <div className="col-4">
                                    <label htmlFor="science"
                                        ><small>Science:</small>
                                        </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="science"
                                        placeholder="Science"
                                    />
                                </div>
                            </div>
                            <button
                                className="btn btn-success mt-4 ps-5 pe-5"
                                
                            >
                                Add
                            </button>
                        </div>
                    </form>
                </div>    
       <div className="col-9">
         <div style={{width: "200px" }} className="mt-2">
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
                    <div className="col-6">
                        <div className="card"
                        style={{width: "60%",
                        marginLeft: "auto",
                        marginRight: "auto",
                        position: "relative",}}>
                    <span
                    style={{
                        position: "absolute",
                        top: "5px",
                        right: "15px",
                        fontWeight: "600",
                        color: "red"
                    }}>En No.1
                    </span>
                                 <span
                                     style={{
                                         position: "absolute",
                                         top: "5px",
                                         left: "5px",
                                         fontWeight: "600",
                                         color: "green"
                                     }}>Pass
                                 </span>
                            <div 
                            style={{
                            width: "100%",
                            height: "70px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",}
                            }
                            >
                                Rajesh kumar
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
                                             <td>18</td>
                                         </tr>
                                             <tr>
                                                 <td>English</td>
                                                 <td>89</td>
                                             </tr>
                                             <tr>
                                                 <td>Science</td>
                                                 <td>75</td>
                                             </tr>
                                     </tbody>
                                </table>
                                <div className="row">
                                    <div className="col-6 ps-4 fw-bold">
                                        Total
                                        </div>
                                         <div className="col-6 ps-4">
                                            142
                                            </div>
                                </div>
                                </div>
                             </div>
                    </div>
                  </div>
                </div>
              </div>
        </div>
       </>
);
}

export default App;
