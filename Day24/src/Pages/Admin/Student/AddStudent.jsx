import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { addStudent } from '../../../service/api';
import { ToastContainer, toast } from 'react-toastify';
import { ChevronLeftCircle } from 'lucide-react';

import 'react-toastify/dist/ReactToastify.css'; // Import the CSS for react-toastify
import './AddStudent.css'
function AddStudent() {
  const navigate = useNavigate();
  const [fileUrl, setFileUrl] = useState('');
  const [formdata, setFormdata] = useState({
    studentImage: '',
    studentName: '',
    studentDob: '',
    studentBg: '',
    studentClass: '',
    studentEmail: '',
    studentPhone: '',
    studentAddress: '',
  });
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Get a URL for the selected file
      const imageUrl = URL.createObjectURL(file);
      setFileUrl(imageUrl);
    }
  };
  const handleChange = (e) => {
    e.preventDefault();
    setFormdata({ ...formdata, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const StudentData = {
        ...formdata,
        studentImage: fileUrl,
      };
      console.log(StudentData);
      const res = await addStudent(StudentData);
      console.log(res);
      if (res.status === 201) {
        toast.success(`${formdata.studentName} Added Successfully !`, {
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
     
      <h2>Add Student Details</h2>
    <div className="add-student-container">
      <form onSubmit={handleSubmit}>
     
      <input
          type="file"
          accept="image/*" // Allow only image files
          onChange={handleFileChange}
          required
        />
 <div className="image-container">
      {fileUrl && <img src={fileUrl} alt="Selected Image" />}
    </div>
        <input
          type="text"
          name="studentName"
          placeholder="Student Name"
          id="studentName"
          onChange={handleChange}
          required
        />
        <input
          type="date"
          name="studentDob"
          placeholder="Date of Birth"
          id="studentDob"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="studentBg"
          placeholder="Blood Group"
          id="studentBg"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="studentClass"
          placeholder="Class"
          id="studentClass"
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="studentEmail"
          placeholder="Email"
          id="studentEmail"
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="studentPhone"
          placeholder="Phone Number"
          id="studentPhone"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="studentAddress"
          placeholder="Address"
          id="studentAddress"
          onChange={handleChange}
          required
        />
        <button type="submit">Add Student</button>
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

export default AddStudent;
