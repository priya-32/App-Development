import React from 'react'
import AdminBar from '../../Components/AdminBar'
import Logout from '../Logout'
import { Link } from 'react-router-dom'
const Result = () => {
  return (
    <div>
      <AdminBar>
      
       <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <a className="navbar-brand" href="/">Student List</a>
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          </ul>
          <Link to="/add-student">
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Add Result</button>
          </Link>
        </div>
      </nav>
      <div className="container">
        <table className="table">
          <thead className="thead-dark">
            
            <tr>
              <th scope="col">Sr No.</th>
              <th scope="col">Name</th>
              <th scope="col">Subject 1 Mark</th>
              <th scope="col">Subject 2 Mark</th>
              <th scope="col">Subject 3 Mark</th>
              <th scope="col">Subject 4 Mark</th>
              <th scope="col">Subject 5 Mark</th>
              <th scope="col">Result Status</th>
              <th scope="col">Edit</th>
            </tr>
          </thead>
          <tbody>
            </tbody>
            </table>
            </div>
            
      </AdminBar>
    </div>
  )
}

export default Result
