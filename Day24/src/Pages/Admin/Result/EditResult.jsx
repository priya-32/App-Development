import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { editResult, getResult } from '../../../service/api'; // You'll need to implement these API functions
import { ToastContainer, toast } from 'react-toastify';
import { ChevronLeftCircle } from 'lucide-react';

import 'react-toastify/dist/ReactToastify.css';

function EditResult() {
  const navigate = useNavigate();
  const { resId } = useParams();
  const [grade, setGrade] = useState('');

  const [formdata, setFormdata] = useState({
    res1: '',
    res2: '',
    res3: '',
    res4: '',
    res5: '',
    res6: '',
  });

  useEffect(() => {
    // Fetch the student data when the component mounts
    const fetchResultData = async () => {
      try {
        const response = await getResult(resId);
        const resultData = response.data;
        setFormdata(resultData);
      } catch (error) {
        console.error('Error fetching student data', error);
        // Handle the error (e.g., redirect to an error page)
      }
    };

    fetchResultData();
  }, [resId]);

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
  

  const handleChange = (e) => {
    e.preventDefault();
    setFormdata({ ...formdata, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    calculateGrade();
    try {
        const updatedResultData = { ...formdata };
        const res = await editResult(resId, updatedResultData);
        if (res.status === 200) {
            toast.success(`Result Updated Successfully!`, {
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
          toast.error(`Unable to update the student. Please try again.`, {
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
    <>
      <h2>Edit Result Details</h2>
    <div className="edit-student-container">
      <form onSubmit={handleSubmit}>
        
        
      <input
          type="number"
          name="subject 1 Mark"
          placeholder="subject 1 Mark"
          id="res1"
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="subject 2 Mark"
          placeholder="subject 2 Mark"
          id="res2"
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="subject 3 Mark"
          placeholder="subject 3 Mark"
          id="res3"
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="subject 4 Mark"
          placeholder="subject 4 Mark"
          id="res4"
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="subject 5 Mark"
          placeholder="subject 5 Mark"
          id="res5"
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="subject 6 Mark"
          placeholder="subject 6 Mark"
          id="res6"
          onChange={handleChange}
          required
        />
        <p style={{ fontWeight: 'bold', fontSize: '18px', color: grade === 'Fail' ? 'red' : 'green' }}>Grade: {grade}</p>
        <button type="submit">Update Student</button>

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

    </>
  );
}

export default EditResult;
