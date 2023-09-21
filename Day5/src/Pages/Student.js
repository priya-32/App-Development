
import { Link } from "react-router-dom";
import Sidebar from "../Components/Sidebar";
import Logout from "./Logout";
import '../Assets/Styles/form.css';
import AdminBar from "../Components/AdminBar";
const Student = () => {
    return(
        <div>
       <AdminBar>
        <div className="Wrapper">
           
           
           <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <a className="navbar-brand" href="/">Student List</a>
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          </ul>
          <Link to="/add-student">
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Add new student</button>
          </Link>
        </div>
      </nav>
      <div className="container">
        <table className="table">
          <thead className="thead-dark">
            
            <tr>
              <th scope="col">Sr No.</th>
              <th scope="col">Name</th>
              <th scope="col">Gender</th>
              <th scope="col">Class</th>
              <th scope="col">Birthdate</th>
              <th scope="col">Address</th>
              <th scope="col">Email Id</th>
              <th scope="col">Contact No.</th>
              <th scope="col">Edit</th>
            </tr>
          </thead>
          <tbody>
            </tbody>
            </table>
            </div>
            </div>
            </AdminBar>
        </div>
    )
}
export default Student;