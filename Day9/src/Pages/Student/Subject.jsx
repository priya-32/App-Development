import React from 'react'
import Logout from '../Logout'
import { Link } from 'react-router-dom'
import StudentBar from '../../components/StudentBar'
const Subject = () => {
  return (
    <div className='student-wrapper'>
        <StudentBar>
     
           
           
           <nav className="navbar-name">
        
          <span className=""></span>
       
        <div className="std-list">
         Subject List
          <ul className="">
          </ul>
          <Link to="/add-student">
            <button className="" type="submit">Add new Subject</button>
          </Link>
        </div>
      </nav>
      <div className="container">
        <table className="table">
          <thead className="thead-dark">
            
            <tr>
              <th scope="col">Sr No.</th>
              <th scope="col">Name</th>
              <th scope="col">Subject 1</th>
              <th scope="col">Subject 2</th>
              <th scope="col">Subject 3</th>
              <th scope="col">Subject 4</th>
              <th scope="col">Subject 5</th>
              <th scope="col">Subject 6</th>
              <th scope="col">Edit</th>
            </tr>
          </thead>
              <th scope="col">1</th>
              <th scope="col">Priya</th>
              <th scope="col">PPS</th>
              <th scope="col">COA</th>
              <th scope="col">NIC</th>
              <th scope="col">CD</th>
              <th scope="col">MPMC</th>
              <th scope="col">REACT</th>
              <th scope="col">Edit</th>
          <tr>
            </tr>
          <tbody>
            </tbody>
            </table>
            </div>
            </StudentBar>

    </div>
  )
}

export default Subject
