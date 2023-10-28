import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { addFeedback } from '../../service/api';
import { ToastContainer, toast } from 'react-toastify';
import { ChevronLeftCircle } from 'lucide-react';

import 'react-toastify/dist/ReactToastify.css'; // Import the CSS for react-toastify
function Addfeedback() {
  const navigate = useNavigate();
  const [formdata, setFormdata] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    
  });
  
  const handleChange = (e) => {
    e.preventDefault();
    setFormdata({ ...formdata, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const FeedbackData = {
        ...formdata,
      };
      console.log(FeedbackData);
      const res = await addFeedback(FeedbackData);
      console.log(res);
      if (res.status === 201) {
        toast.success(`Feedback Added Successfully !`, {
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
          navigate('/user/dashboard');
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
    <div className="add-student-container">
      <h2>Add Feedback</h2>
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
          id="name"
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="Subject Name"
          placeholder="Subject Name"
          id="email"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="Subject Name"
          placeholder="Subject Name"
          id="subject"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="Subject Name"
          placeholder="Subject Name"
          id="message"
          onChange={handleChange}
          required
        />
       
        <button type="submit">Add Feedback</button>
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

export default Addfeedback;
