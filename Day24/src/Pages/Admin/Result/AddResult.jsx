import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { addResult } from '../../../service/api';
import { ToastContainer, toast } from 'react-toastify';
import { ChevronLeftCircle } from 'lucide-react';

import 'react-toastify/dist/ReactToastify.css'; // Import the CSS for react-toastify
function AddResult() {
  const navigate = useNavigate();
  const [formdata, setFormdata] = useState({
    res1: '',
    res2: '',
    res3: '',
    res4: '',
    res5: '',
    res6: '',
    
  });
 
  const [grade, setGrade] = useState('');

  const handleChange = (e) => {
    e.preventDefault();
    setFormdata({ ...formdata, [e.target.id]: e.target.value });
  };


  const calculateGrade = () => {
    // Convert the input values to integers
    const results = Object.values(formdata).map((value) => parseInt(value));
    
    if (results.some((result) => result < 50)) {
      setGrade('Fail');
    } else {
      const numericalValue = results.reduce((acc, result) => acc + result, 0) / 6;
      
      if (numericalValue >= 90) {
        setGrade('A+');
      } else if (numericalValue >= 80) {
        setGrade('A');
      } else if (numericalValue >= 70) {
        setGrade('B');
      } else if (numericalValue >= 60) {
        setGrade('C');
      } else if (numericalValue >= 50) {
        setGrade('D');
      } else {
        setGrade('Fail');
      }
    }
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    const ResultData = {
      res1: formdata.res1.toString(),
      res2: formdata.res2.toString(),
      res3: formdata.res3.toString(),
      res4: formdata.res4.toString(),
      res5: formdata.res5.toString(),
      res6: formdata.res6.toString(),
    };
    
    calculateGrade();
    try {
      const ResultData = {
        ...formdata,
      };
      console.log(ResultData);
      const res = await addResult(ResultData);
      console.log(res);
      if (res.status === 201) {
        toast.success(`Result Added Successfully !`, {
          position: 'bottom-right',
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light',
        });
        setTimeout(() => {
          navigate('/admin/dashboard');
        }, 1000);
      }
    } catch (error) {
      toast.error(`Can't add the same student twice!`, {
        position: 'bottom-right',
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
    }
  };
  const routeBack = () => {
    navigate(-1)
  }
  return (
    <div className='content-wrapper'>
     
      <h2>Add Result Details</h2>
    <div className="add-student-container">
      <form onSubmit={handleSubmit}>
     
        <input
          type="number"
          name="studentName"
          placeholder="Student Name"
          id="res1"
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="studentDob"
          placeholder="Date of Birth"
          id="res2"
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="studentBg"
          placeholder="Blood Group"
          id="res3"
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="studentClass"
          placeholder="Class"
          id="res4"
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="studentEmail"
          placeholder="Email"
          id="res5"
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="studentPhone"
          placeholder="Phone Number"
          id="res6"
          onChange={handleChange}
          required
        />
        <p style={{ fontWeight: 'bold', fontSize: '18px', color: grade === 'Fail' ? 'red' : 'green' }}>Grade: {grade}</p>

        <button type="submit">Add Result</button>
      </form>
      
      </div>
      <ToastContainer
        position="bottom-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <button onClick={routeBack} className='route-btn'><ChevronLeftCircle color="#25db00" /></button>
    </div>
  );
}

export default AddResult;
