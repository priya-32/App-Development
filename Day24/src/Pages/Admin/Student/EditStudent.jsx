import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { editStudent, getStudent } from '../../../service/api'; // You'll need to implement these API functions
import { ToastContainer, toast } from 'react-toastify';
import { ChevronLeftCircle } from 'lucide-react';

import 'react-toastify/dist/ReactToastify.css';
import './EditStudent.css';

function EditStudent() {
  const navigate = useNavigate();
  const { sId } = useParams();

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

  useEffect(() => {
    // Fetch the student data when the component mounts
    const fetchStudentData = async () => {
      try {
        const response = await getStudent(sId);
        const studentData = response.data;
        setFormdata(studentData);
        setFileUrl(studentData.studentImage);
      } catch (error) {
        console.error('Error fetching student data', error);
        // Handle the error (e.g., redirect to an error page)
      }
    };

    fetchStudentData();
  }, [sId]);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setFileUrl(imageUrl);
      setFormdata({ ...formdata, studentImage: imageUrl });
    }
  };

  const handleChange = (e) => {
    e.preventDefault();
    setFormdata({ ...formdata, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const updatedStudentData = { ...formdata };
      const res = await editStudent(sId, updatedStudentData);
      
      if (res.status === 200) {
        toast.success(`${formdata.studentName} Updated Successfully!`, {
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
    <div className="edit-student-container">
      <h2>Edit Student Details</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
        />
        <div className="image-container">
          {fileUrl && <img src={fileUrl} alt="Selected Image" />}
        </div>
        {/* Input fields for editing student data */}
        {/* You can use the same input fields as in the AddStudent component */}
        <input
          type="text"
          name="studentName"
          placeholder="Student Name"
          id="studentName"
          value={formdata.studentName}
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
        <button type="submit">Update Student</button>
      </form>
    </div>
    <button onClick={routeBack} className='route-btn'><ChevronLeftCircle color="#25db00" /></button>

    </>
  );
}

export default EditStudent;
