import React from 'react'
import { Link } from 'react-router-dom'
import AdminBar from '../../Components/AdminBar'
import Logout from '../Logout'
const Company = () => {
  return (
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
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Add Company</button>
          </Link>
        </div>
      </nav>
      <div className="container">
        <table className="table">
          <thead className="thead-dark">
            
            <tr>
              <th scope="col">Sr No.</th>
              <th scope="col">Company Name</th>
              <th scope="col">Contact No</th>
              <th scope="col">Email Id</th>
              <th scope="col">Cgpa Required</th>
              <th scope="col">Drive Date</th>
              <th scope="col">Backlog</th>
              <th scope="col">Edit</th>
            </tr>
          </thead>
          <tr>
              <th scope="col">1</th>
              <th scope="col">Google</th>
              <th scope="col">947564754</th>
              <th scope="col">google@gmail.com</th>
              <th scope="col">8</th>
              <th scope="col">10-9-2023</th>
              <th scope="col">no</th>
              <th scope="col">Action</th>
            </tr>
          <tbody>
            </tbody>
            </table>
            </div>
            </div>
            </AdminBar>
    </div>
  )
}

export default Company
