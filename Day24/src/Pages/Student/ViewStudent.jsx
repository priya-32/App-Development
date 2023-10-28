import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getStudent, deleteStudent, editSubject } from '../../service/api';
import { ToastContainer, toast } from 'react-toastify';
import { Trash, FileEdit, PlusCircle } from 'lucide-react';
import { ChevronLeftCircle } from 'lucide-react';

function ViewStudent() {
  const navigate = useNavigate();
  const [students, setStudents] = useState([]);

  const fetchStudents = async () => {
    try {
      const response = await getStudent();
      setStudents(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  const handleEdit = (sid) => {
    navigate(`/admin/student/edit/${sid}`);
  };

  const handleDelete = async (sid, studentName) => {
    try {
      const res = await deleteStudent(sid);
      console.log(res.status);
      if (res.status === 200) {
        toast.success(`${studentName} deleted successfully !`, {
          position: 'bottom-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light',
        });
      }
      fetchStudents();
    } catch (error) {
      console.log(error);
    }
  };
  const routeBack = () => {
    navigate(-1)
  }
  return (
    <>
    <div className="view-student-container">
      <div className="data-table-container">
        <table className="data-table">
          <thead>
            <tr>
              <th>Sno</th>
              <th>Image</th>
              <th>Name</th>
              <th>DOB</th>
              <th>Blood Group</th>
              <th>Class</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Address</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.sid}>
                 <td>{student.sid}</td>
                <td>
                  <img src={student.studentImage} alt={student.studentName} />
                </td>
                <td>{student.studentName}</td>
                <td>{student.studentDob}</td>
                <td>{student.studentBg}</td>
                <td>{student.studentClass}</td>
                <td>{student.studentEmail}</td>
                <td>{student.studentPhone}</td>
                <td>{student.studentAddress}</td>
                <td>
                 
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    
    </div>
    <button onClick={routeBack} className='route-btn'><ChevronLeftCircle color="#25db00" /></button>

    </>
  );
}

export default ViewStudent;
