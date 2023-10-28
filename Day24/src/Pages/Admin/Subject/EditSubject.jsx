import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { editSubject, getSubject } from '../../../service/api'; // You'll need to implement these API functions
import { ToastContainer, toast } from 'react-toastify';
import { ChevronLeftCircle } from 'lucide-react';

import 'react-toastify/dist/ReactToastify.css';

function EditSubject() {
  const navigate = useNavigate();
  const { subId } = useParams();

  const [formdata, setFormdata] = useState({
    subject1: '',
    subject2: '',
    subject3: '',
    subject4: '',
    subject5: '',
    subject6: '',
  });

  useEffect(() => {
    // Fetch the student data when the component mounts
    const fetchSubjectData = async () => {
      try {
        const response = await getSubject(subId);
        const subjectData = response.data;
        setFormdata(subjectData);
      } catch (error) {
        console.error('Error fetching student data', error);
        // Handle the error (e.g., redirect to an error page)
      }
    };

    fetchSubjectData();
  }, [subId]);

 

  const handleChange = (e) => {
    e.preventDefault();
    setFormdata({ ...formdata, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const updatedSubjectData = { ...formdata };
      const res = await editSubject(subId, updatedSubjectData);
      
      if (res.status === 200) {
        toast.success(`subjects Updated Successfully!`, {
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
      <h2>Edit Subject Details</h2>
    <div className="edit-student-container">
      <form onSubmit={handleSubmit}>
        
        
      <input
          type="text"
          name="Subject Name"
          placeholder="Subject Name"
          id="subject1"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="Subject Name"
          placeholder="Subject Name"
          id="subject2"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="Subject Name"
          placeholder="Subject Name"
          id="subject3"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="Subject Name"
          placeholder="Subject Name"
          id="subject4"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="Subject Name"
          placeholder="Subject Name"
          id="subject5"
          onChange={handleChange}
          required
        />
        <input
          type="texxt"
          name="Subject Name"
          placeholder="Subject Name"
          id="subject6"
          onChange={handleChange}
          required
        />
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

export default EditSubject;
