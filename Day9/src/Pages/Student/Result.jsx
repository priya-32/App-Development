import React from 'react'
import Logout from '../Logout'
import { Link } from 'react-router-dom'
import StudentBar from '../../components/StudentBar'
const Result = () => {
  return (
    
    <div className='student-wrapper'>
      <StudentBar>
      
   
           
           
           <nav className="navbar-name">
        
          <span className=""></span>
       
        <div className="std-list">
         Result List
          <ul className="">
          </ul>
          <Link to="/add-student">
            <button className="" type="submit">Add Result</button>
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
          <tr>
              <th scope="col">1</th>
              <th scope="col">Priya</th>
              <th scope="col">98</th>
              <th scope="col">95</th>
              <th scope="col">99</th>
              <th scope="col">96</th>
              <th scope="col">97</th>
              <th scope="col">Pass</th>
              <th scope="col">Print</th>
            </tr>
          <tbody>
            </tbody>
            </table>
            </div>
            
      </StudentBar>
    </div>
  )
}

export default Result
