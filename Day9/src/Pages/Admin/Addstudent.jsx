import React from 'react'
import AdminBar from '../../Components/AdminBar'
import { Link } from 'react-router-dom'
import StudentBar from '../../Components/StudentBar'
const Addstudent = () => {
  return (
    <div className='Add-Student'>
      <div className="student-wrapper" >
       <StudentBar>
        <div className="Wrapper">
           
           
           <nav className="navbar-name">
        
          <span className=""></span>
       
        <div >
         Student List
          <ul className="">
          </ul>
          <Link to="/add-student">
            <button className="" type="submit">Add new student</button>
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
          <th scope="col">1</th>
              <th scope="col">Priya</th>
              <th scope="col">Female</th>
              <th scope="col">CSE B</th>
              <th scope="col">23-08-2003</th>
              <th scope="col">Coimbatore</th>
              <th scope="col">abc@gmail.com</th>
              <th scope="col">9564732134</th>
              <th scope="col">Update</th>
          <tbody>
            </tbody>
            </table>
            </div>
            </div>
            </StudentBar>
        </div>
    </div>
  )
}

export default Addstudent
