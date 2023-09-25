import React from 'react'
import { Link } from 'react-router-dom'
import Logout from '../Logout'
import StudentBar from '../../components/StudentBar'
const Company = () => {
  return (
    <div className='student-wrapper'>
      <StudentBar>
        <div className="Wrapper">
           
          
           <nav className="navbar-name">
        <button className="" >
          <span className=""></span>
        </button>
        <div className="std-list">
          Company List
          <ul className="">
          </ul>
          <Link to="/add-student">
            <button className="btn-clr" type="submit">Add Company</button>
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
            </StudentBar>
    </div>
  )
}

export default Company
