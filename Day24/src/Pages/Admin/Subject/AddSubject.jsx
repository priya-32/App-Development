import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { addSubject } from '../../../service/api';
import { ToastContainer, toast } from 'react-toastify';
import { ChevronLeftCircle } from 'lucide-react';

import 'react-toastify/dist/ReactToastify.css'; // Import the CSS for react-toastify
function AddSubject() {
  const navigate = useNavigate();
  const [formdata, setFormdata] = useState({
    subject1: '',
    subject2: '',
    subject3: '',
    subject4: '',
    subject5: '',
    subject6: '',
  });
  
  const handleChange = (e) => {
    e.preventDefault();
    setFormdata({ ...formdata, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const SubjectData = {
        ...formdata,
      };
      console.log(SubjectData);
      const res = await addSubject(SubjectData);
      console.log(res);
      if (res.status === 201) {
        toast.success(`Subjects Added Successfully !`, {
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
      toast.error(`Can't add the same subject twice!`, {
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
      {/* <div className='side-content'>
      <Sidebar/>
      </div> */}
      <h2>Add Subject Details</h2>
    <div className="add-student-container">
      <form onSubmit={handleSubmit}>
      {/* <input
          type="file"
          accept="image/*" // Allow only image files
          onChange={handleFileChange}
          required
        />
 <div className="image-container">
      {fileUrl && <img src={fileUrl} alt="Selected Image" />}
    </div> */}
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
        
        <button type="submit">Add Subject</button>
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

export default AddSubject;
